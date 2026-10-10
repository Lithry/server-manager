"""Configuration and settings management API."""

import httpx
from typing import Any, Dict
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from src.core.config import config_manager, Settings, NotificationTrigger
from src.core.scheduler import scheduler
from src.core.predicates import PredicateEvaluator, TransformerEvaluator
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
    """Update settings, auto-migrate database columns, and reload background scheduler."""
    services_dict = getattr(settings, "services", {}) or getattr(settings, "apps", {})

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

    # 2. Detect renames and auto-migrate data
    old_settings = await config_manager.get_settings()
    old_services = getattr(old_settings, "services", {}) or getattr(old_settings, "apps", {})

    existing_table_cols = {c["name"].upper() for c in await db_manager.get_table_columns("SERVICES_PIPELINE")}

    for s_id, s_conf in services_dict.items():
        old_conf = old_services.get(s_id)
        if not old_conf:
            continue
        for idx, new_map in enumerate(s_conf.field_mappings):
            if idx < len(old_conf.field_mappings):
                old_map = old_conf.field_mappings[idx]
                old_target = (old_map.target_column or "").strip().upper()
                new_target = (new_map.target_column or "").strip().upper()

                if old_target and new_target and old_target != new_target:
                    if old_target not in all_new_targets and old_target in existing_table_cols:
                        try:
                            if new_target not in existing_table_cols:
                                await db_manager.rename_column("SERVICES_PIPELINE", old_target, new_target)
                                existing_table_cols.remove(old_target)
                                existing_table_cols.add(new_target)
                            else:
                                await db_manager.execute(
                                    f'UPDATE SERVICES_PIPELINE SET "{new_target}" = COALESCE("{new_target}", "{old_target}") WHERE "{old_target}" IS NOT NULL;'
                                )
                                await db_manager.drop_column("SERVICES_PIPELINE", old_target)
                                existing_table_cols.remove(old_target)
                        except Exception as e:
                            print(f"[!] Warning auto-migrating column {old_target} -> {new_target}: {e}")

    # 3. Auto-ensure dynamic columns in SERVICES_PIPELINE for all field mappings
    for service_name, service_conf in services_dict.items():
        for mapping in service_conf.field_mappings:
            if mapping.target_column:
                try:
                    await db_manager.ensure_column("SERVICES_PIPELINE", mapping.target_column, mapping.data_type)
                except Exception as e:
                    print(f"[!] Warning ensuring column {mapping.target_column}: {e}")

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
