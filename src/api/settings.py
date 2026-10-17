"""Configuration and settings management API."""

import datetime
import httpx
from typing import Any, Dict
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from src.core.config import config_manager, Settings, NotificationTrigger
from src.core.scheduler import scheduler
from src.core.predicates import PredicateEvaluator
from src.core.transformers import TransformerEvaluator
from src.core.database import db_manager, SYSTEM_RESERVED_COLUMNS


router = APIRouter(prefix="/api/v1/settings", tags=["Settings"])


class TestNotificationRequest(BaseModel):
    trigger_id: str | None = None
    channel: str = "ntfy"
    target_url: str = "http://host.docker.internal:8090"
    topic: str = "cubi-alerts"
    message: str = "Test notification from ServerManager WebUI"


class TestPredicateRequest(BaseModel):
    expression: str | None = None


class TestTransformerRequest(BaseModel):
    expression: str | None = None
    sample_value: Any = None
    context_dict: Dict[str, Any] | None = None


@router.get("")
async def get_settings() -> Settings:
    """Retrieve full application settings."""
    return await config_manager.get_settings()


@router.post("")
async def update_settings(settings: Settings) -> Settings:
    """Update settings, auto-migrate database columns across pipelines, and reload background scheduler."""
    settings.normalize_pipelines()
    services_dict = settings.services

    # 1. Validate that no mapping uses a reserved system column
    all_new_targets = set()
    for s_name, s_conf in services_dict.items():
        for mapping in s_conf.field_mappings:
            if mapping.target_column:
                col_upper = mapping.target_column.strip().upper()
                if col_upper in SYSTEM_RESERVED_COLUMNS:
                    raise HTTPException(
                        status_code=400,
                        detail=f"Column name '{col_upper}' in service '{s_name}' is a system reserved column."
                    )
                all_new_targets.add(col_upper)

    # 2. Validate Stage ID uniqueness, normalize order, and sync activation cutoffs
    old_settings = await config_manager.get_settings()
    old_stages = old_settings.stages
    old_services = old_settings.services
    old_stages_by_id = {s.id: s for s in old_stages}

    seen_stage_ids: set[str] = set()
    valid_pipeline_ids = set(settings.pipelines.keys())
    for idx, stage in enumerate(settings.stages):
        clean_stage_id = (stage.id or "").strip()
        if not clean_stage_id:
            raise HTTPException(status_code=400, detail=f"Stage at index {idx} has an empty ID.")
        if clean_stage_id in seen_stage_ids:
            raise HTTPException(status_code=400, detail=f"Duplicate stage ID '{clean_stage_id}'.")
        seen_stage_ids.add(clean_stage_id)
        stage.id = clean_stage_id

        # Normalize order based on position
        stage.order = idx + 1

        # Normalize pipeline_ids
        if not stage.pipeline_ids:
            stage.pipeline_ids = ["default"]
        else:
            filtered_pids = [pid for pid in stage.pipeline_ids if pid in valid_pipeline_ids]
            stage.pipeline_ids = filtered_pids if filtered_pids else ["default"]

        # Decouple consumer stages from last_activated_at
        if stage.start_condition and stage.start_condition.strip():
            stage.last_activated_at = None
        else:
            # Root stage: auto-populate last_activated_at if stage is enabled and timestamp is unset
            old_s = old_stages_by_id.get(stage.id)
            was_enabled = old_s.enabled if old_s else False
            if stage.enabled and not was_enabled and not stage.last_activated_at:
                stage.last_activated_at = datetime.datetime.now(datetime.timezone.utc).isoformat()

    # 3. Ensure all configured pipeline tables exist before column migration
    pipeline_tables: list[str] = []
    for p_id, p_cfg in settings.pipelines.items():
        t_name = await db_manager.ensure_pipeline_table(
            pipeline_id=p_id,
            name=p_cfg.name,
            description=p_cfg.description,
            retention_days=p_cfg.retention_days,
            enabled=p_cfg.enabled,
        )
        pipeline_tables.append(t_name)

    # 4. Detect genuine column renames (matched by identical non-empty source_field) and auto-migrate data
    for s_id, s_conf in services_dict.items():
        old_conf = old_services.get(s_id)
        if not old_conf:
            continue

        # Map non-empty source_field -> target_column where source_field is unambiguous
        old_by_source: Dict[str, str] = {}
        old_source_counts: Dict[str, int] = {}
        for m in old_conf.field_mappings:
            src = (m.source_field or "").strip()
            tgt = (m.target_column or "").strip().upper()
            if src and tgt:
                old_source_counts[src] = old_source_counts.get(src, 0) + 1
                old_by_source[src] = tgt

        new_source_counts: Dict[str, int] = {}
        for m in s_conf.field_mappings:
            src = (m.source_field or "").strip()
            if src:
                new_source_counts[src] = new_source_counts.get(src, 0) + 1

        for new_map in s_conf.field_mappings:
            src = (new_map.source_field or "").strip()
            new_target = (new_map.target_column or "").strip().upper()
            if not src or not new_target:
                continue
            if old_source_counts.get(src) != 1 or new_source_counts.get(src) != 1:
                continue

            old_target = old_by_source.get(src, "")
            if old_target and old_target != new_target:
                # Update matching column names inside stage.service_mapping_scopes for all stages
                for stage in settings.stages:
                    if stage.service_mapping_scopes:
                        for scope_sid, cols in list(stage.service_mapping_scopes.items()):
                            if cols and any(isinstance(c, str) and c.strip().upper() == old_target for c in cols):
                                stage.service_mapping_scopes[scope_sid] = [
                                    new_target if (isinstance(c, str) and c.strip().upper() == old_target) else c
                                    for c in cols
                                ]

                if old_target not in all_new_targets:
                    for table_name in pipeline_tables:
                        existing_table_cols = {
                            c["name"].upper() for c in await db_manager.get_table_columns(table_name)
                        }
                        if old_target in existing_table_cols:
                            try:
                                if new_target not in existing_table_cols:
                                    await db_manager.rename_column(table_name, old_target, new_target)
                                else:
                                    await db_manager.execute(
                                        f'UPDATE {table_name} SET "{new_target}" = COALESCE("{new_target}", "{old_target}") WHERE "{old_target}" IS NOT NULL;'
                                    )
                                    await db_manager.drop_column(table_name, old_target)
                            except Exception as e:
                                print(f"[!] Warning auto-migrating column {old_target} -> {new_target} in {table_name}: {e}")

    # 5. Sanitize stage service mapping scopes before saving
    for stage in settings.stages:
        if stage.service_mapping_scopes:
            sanitized_scopes: Dict[str, list[str]] = {}
            for s_key, cols in list(stage.service_mapping_scopes.items()):
                if s_key not in stage.service_ids or s_key not in services_dict:
                    continue

                valid_cols = {
                    (m.target_column or "").strip().upper()
                    for m in services_dict[s_key].field_mappings
                    if m.target_column
                }
                cleaned_cols: list[str] = []
                seen_cols: set[str] = set()
                for c in cols or []:
                    if not c or not isinstance(c, str):
                        continue
                    c_norm = c.strip().upper()
                    if c_norm in valid_cols and c_norm not in seen_cols:
                        seen_cols.add(c_norm)
                        cleaned_cols.append(c_norm)

                if cleaned_cols:
                    sanitized_scopes[s_key] = cleaned_cols

            stage.service_mapping_scopes = sanitized_scopes

    # 6. Auto-ensure dynamic columns across all configured pipelines
    await db_manager.sync_dynamic_columns(settings)

    updated = await config_manager.update_settings(settings)
    await scheduler.restart()
    return updated


@router.post("/test-predicate")
async def test_predicate(req: TestPredicateRequest) -> Dict[str, Any]:
    """Test and validate predicate syntax."""
    valid, message = PredicateEvaluator.validate_syntax(req.expression)
    return {"valid": valid, "message": message}


@router.post("/test-transformer")
async def test_transformer(req: TestTransformerRequest) -> Dict[str, Any]:
    """Test and validate field transformer expression."""
    valid, message = TransformerEvaluator.validate_syntax(req.expression)
    result = None
    if valid and req.expression:
        try:
            result = TransformerEvaluator.evaluate(req.expression, req.sample_value, req.context_dict, raise_errors=True)
        except Exception as e:
            valid = False
            message = str(e)
    return {"valid": valid, "result": result, "message": message}


@router.get("/scheduler/status")
async def get_scheduler_status() -> Dict[str, Any]:
    """Get status of the asynchronous task runner."""
    return scheduler.get_scheduler_status()


@router.post("/scheduler/restart")
async def restart_scheduler() -> Dict[str, Any]:
    """Manually restart scheduler loops."""
    await scheduler.restart()
    return {"success": True, "message": "Scheduler successfully restarted"}


@router.post("/test-notification")
async def send_test_notification(req: TestNotificationRequest) -> Dict[str, Any]:
    """Dispatch a test notification to verify ntfy or webhook connectivity."""
    settings = await config_manager.get_settings()

    target_url = req.target_url
    topic = req.topic
    channel = req.channel

    if req.trigger_id:
        # Match configured trigger
        matching = [t for t in settings.notification_triggers if t.id == req.trigger_id]
        if matching:
            t = matching[0]
            target_url = t.target_url
            topic = t.topic
            channel = t.channel

    try:
        async with httpx.AsyncClient(timeout=10.0) as client:
            if channel == "ntfy":
                url = f"{target_url.rstrip('/')}/{topic}"
                resp = await client.post(
                    url,
                    content=req.message.encode("utf-8"),
                    headers={"Title": "ServerManager Test Alert", "Tags": "test,bell"},
                )
            else:
                resp = await client.post(
                    target_url,
                    json={"message": req.message, "event": "TEST_ALERT"},
                )

            return {
                "success": resp.status_code in [200, 201, 202, 204],
                "status_code": resp.status_code,
                "response": resp.text[:200],
            }
    except Exception as e:
        return {
            "success": False,
            "error": str(e),
        }
