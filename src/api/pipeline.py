"""Universal multi-pipeline registry, dynamic schema mapper, API sampler, and decoupled sandbox endpoints."""

import httpx
from typing import Any, Dict, List, Optional
from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel, Field

from src.core.database import db_manager, SQL_IDENTIFIER_REGEX, SYSTEM_RESERVED_COLUMNS
from src.core.config import config_manager, PipelineConfig
from src.core.scheduler import (
    prepare_service_request,
    fetch_enrichment_payloads,
    _extract_payload_records,
    extract_dotted_value,
)


router = APIRouter(prefix="/api/v1/pipeline", tags=["Pipeline"])


def sort_pipeline_columns(all_columns: List[str], preferred_order: List[str]) -> List[str]:
    """Sort columns placing fixed system columns first, followed by user columns according to preferred order."""
    system_cols = [c for c in ["ID", "PIPELINE_KEY", "STAGE", "STATUS", "CREATED_AT", "LAST_UPDATED"] if c in all_columns]
    user_cols = [c for c in all_columns if c not in SYSTEM_RESERVED_COLUMNS]

    sorted_user = []
    for col in preferred_order:
        c_up = col.strip().upper()
        if c_up in user_cols and c_up not in sorted_user:
            sorted_user.append(c_up)
    for col in user_cols:
        if col not in sorted_user:
            sorted_user.append(col)

    return system_cols + sorted_user


class UpsertPipelineRequest(BaseModel):
    id: str
    name: str
    description: str = ""
    retention_days: int = 30
    enabled: bool = True


class AddColumnRequest(BaseModel):
    column_name: str
    column_type: str = "TEXT"
    pipeline_id: Optional[str] = None


class SandboxEnrichmentRequest(BaseModel):
    service_id: str
    pipeline_id: Optional[str] = None
    record_id: Optional[int] = None
    custom_context: Optional[Dict[str, Any]] = None
    sample_endpoint: Optional[str] = None
    enrichment_endpoints: Dict[str, str] = Field(default_factory=dict)


class ReorderColumnsRequest(BaseModel):
    column_order: List[str]
    pipeline_id: Optional[str] = None


class SampleApiRequest(BaseModel):
    service_id: str
    endpoint: str = ""


def flatten_json_keys(obj: Any, prefix: str = "") -> List[Dict[str, Any]]:
    """Flatten JSON payload to display available fields with samples and explicit [*] list syntax."""
    fields = []
    if isinstance(obj, dict):
        for k, v in obj.items():
            full_key = f"{prefix}.{k}" if prefix else k
            if isinstance(v, (dict, list)):
                fields.extend(flatten_json_keys(v, full_key))
            else:
                fields.append({"path": full_key, "sample": str(v)[:60], "type": type(v).__name__})
    elif isinstance(obj, list) and obj:
        list_prefix = f"{prefix}[*]" if prefix else "[*]"
        if isinstance(obj[0], (dict, list)):
            fields.extend(flatten_json_keys(obj[0], list_prefix))
        else:
            fields.append({"path": list_prefix, "sample": str(obj)[:60], "type": "list"})
    elif isinstance(obj, list) and not obj:
        list_prefix = f"{prefix}[*]" if prefix else "[*]"
        fields.append({"path": list_prefix, "sample": "[]", "type": "list"})
    return fields


@router.get("/registry")
async def list_pipelines() -> List[Dict[str, Any]]:
    """List all registered pipelines with their SQLite table name, retention policy, and row counts."""
    settings = await config_manager.get_settings()
    settings.normalize_pipelines()
    result = []
    for pid, pcfg in settings.pipelines.items():
        t_name = pcfg.resolved_table_name()
        total_rows = 0
        try:
            cnt_res = await db_manager.query(f"SELECT COUNT(*) as cnt FROM {t_name};")
            total_rows = cnt_res[0]["cnt"] if cnt_res else 0
        except Exception:
            pass
        result.append({
            "id": pid,
            "name": pcfg.name,
            "description": pcfg.description,
            "table_name": t_name,
            "retention_days": pcfg.retention_days,
            "enabled": pcfg.enabled,
            "column_order": pcfg.column_order,
            "total_rows": total_rows,
        })
    return result


@router.post("/registry")
async def upsert_pipeline(req: UpsertPipelineRequest) -> Dict[str, Any]:
    """Create or update a pipeline table (PIPELINE_<SLUG>) and register it in settings and SQLite."""
    clean_id = req.id.strip().lower()
    if not clean_id or not SQL_IDENTIFIER_REGEX.match(clean_id.upper()):
        raise HTTPException(status_code=400, detail=f"Invalid pipeline id '{req.id}'. Use alphanumeric and underscores.")

    settings = await config_manager.get_settings()
    existing = settings.pipelines.get(clean_id)
    col_order = existing.column_order if existing else []

    pcfg = PipelineConfig(
        id=clean_id,
        name=req.name.strip() or clean_id,
        description=req.description.strip(),
        retention_days=max(0, int(req.retention_days)),
        column_order=col_order,
        enabled=req.enabled,
    )
    pcfg.table_name = pcfg.resolved_table_name()

    await db_manager.ensure_pipeline_table(
        pcfg.table_name,
        pipeline_id=clean_id,
        name=pcfg.name,
        description=pcfg.description,
        retention_days=pcfg.retention_days,
        enabled=pcfg.enabled,
    )
    settings.pipelines[clean_id] = pcfg
    await db_manager.sync_dynamic_columns(settings)
    await config_manager.update_settings(settings)

    return {"success": True, "pipeline": pcfg.model_dump()}


@router.delete("/registry/{pipeline_id}")
async def delete_pipeline(pipeline_id: str) -> Dict[str, Any]:
    """Drop a pipeline table and remove it from settings and stage assignments."""
    clean_id = pipeline_id.strip().lower()
    settings = await config_manager.get_settings()
    if clean_id not in settings.pipelines:
        raise HTTPException(status_code=404, detail=f"Pipeline '{clean_id}' not found")
    if len(settings.pipelines) <= 1:
        raise HTTPException(status_code=400, detail="Cannot delete the only remaining pipeline.")

    pcfg = settings.pipelines.pop(clean_id)
    await db_manager.drop_pipeline_table(clean_id, pcfg.resolved_table_name())

    for st in settings.stages:
        if clean_id in st.pipeline_ids:
            st.pipeline_ids = [pid for pid in st.pipeline_ids if pid != clean_id]

    await config_manager.update_settings(settings)
    return {"success": True, "deleted_pipeline": clean_id, "dropped_table": pcfg.resolved_table_name()}


@router.post("/purge")
async def purge_pipeline(pipeline_id: Optional[str] = Query(None)) -> Dict[str, Any]:
    """Purge all records from the target pipeline table and reset its autoincrement sequence."""
    settings = await config_manager.get_settings()
    p_cfg = settings.resolve_pipeline(pipeline_id)
    table_name = p_cfg.resolved_table_name()

    async with db_manager.get_connection() as db:
        res = await db.execute(f"DELETE FROM {table_name};")
        deleted_count = res.rowcount
        try:
            await db.execute("DELETE FROM sqlite_sequence WHERE name = ?;", (table_name,))
        except Exception:
            pass
        await db.commit()
    return {"success": True, "pipeline_id": p_cfg.id, "table_name": table_name, "deleted_rows": deleted_count}


@router.get("")
async def get_pipeline_items(
    pipeline_id: Optional[str] = Query(None),
    limit: int = Query(50, ge=1, le=500),
    offset: int = Query(0, ge=0),
    status: Optional[str] = None,
    stage: Optional[str] = None,
) -> Dict[str, Any]:
    """Retrieve pipeline entries from the selected pipeline table with dynamic columns ordered by preference."""
    settings = await config_manager.get_settings()
    p_cfg = settings.resolve_pipeline(pipeline_id)
    table_name = p_cfg.resolved_table_name()

    where_clauses = []
    params: List[Any] = []

    if status:
        where_clauses.append("STATUS = ?")
        params.append(status)
    if stage is not None and str(stage).strip() != "":
        where_clauses.append("STAGE = ?")
        params.append(str(stage).strip())

    where_sql = f"WHERE {' AND '.join(where_clauses)}" if where_clauses else ""

    count_rows = await db_manager.query(f"SELECT COUNT(*) as total FROM {table_name} {where_sql}", tuple(params))
    total = count_rows[0]["total"] if count_rows else 0

    query_sql = f"SELECT * FROM {table_name} {where_sql} ORDER BY ID DESC LIMIT ? OFFSET ?"
    params.extend([limit, offset])
    items = await db_manager.query(query_sql, tuple(params))

    columns = await db_manager.get_table_columns(table_name)
    all_col_names = [col["name"] for col in columns]
    col_types = {col["name"]: col["type"] for col in columns}

    pref_order = p_cfg.column_order or []
    ordered_cols = sort_pipeline_columns(all_col_names, pref_order)

    # Filter stages belonging to this pipeline
    configured_stages: List[Dict[str, Any]] = [
        {"id": s.id, "name": s.name}
        for s in (settings.stages or [])
        if not s.pipeline_ids or p_cfg.id in s.pipeline_ids
    ]
    known_stage_ids = {st["id"] for st in configured_stages if st.get("id")}
    db_stages = await db_manager.query(
        f"SELECT DISTINCT STAGE FROM {table_name} WHERE STAGE IS NOT NULL AND STAGE != ''"
    )
    for row in db_stages:
        val = row.get("STAGE") if "STAGE" in row else row.get("stage")
        if val is None and row:
            val = list(row.values())[0]
        if val is not None:
            stage_val = str(val).strip()
            if stage_val and stage_val not in known_stage_ids:
                configured_stages.append({"id": stage_val, "name": stage_val})
                known_stage_ids.add(stage_val)

    standard_statuses: List[str] = ["PENDING", "COMPLETED", "SINK"]
    db_statuses = await db_manager.query(
        f"SELECT DISTINCT STATUS FROM {table_name} WHERE STATUS IS NOT NULL AND STATUS != ''"
    )
    known_statuses = set(standard_statuses)
    for row in db_statuses:
        val = row.get("STATUS") if "STATUS" in row else row.get("status")
        if val is None and row:
            val = list(row.values())[0]
        if val is not None:
            status_val = str(val).strip()
            if status_val and status_val not in known_statuses:
                standard_statuses.append(status_val)
                known_statuses.add(status_val)

    return {
        "pipeline_id": p_cfg.id,
        "table_name": table_name,
        "total": total,
        "limit": limit,
        "offset": offset,
        "columns": ordered_cols,
        "column_types": col_types,
        "items": items,
        "available_stages": configured_stages,
        "available_statuses": standard_statuses,
    }


@router.get("/columns")
async def get_pipeline_columns(pipeline_id: Optional[str] = Query(None)) -> List[Dict[str, Any]]:
    """Get all current columns of the target pipeline table with usage and deprecation metadata."""
    settings = await config_manager.get_settings()
    p_cfg = settings.resolve_pipeline(pipeline_id)
    table_name = p_cfg.resolved_table_name()
    pref_order = p_cfg.column_order or []
    services_dict = settings.services

    usage_map: Dict[str, List[str]] = {}
    for s_id, s_cfg in services_dict.items():
        for m in s_cfg.field_mappings:
            if m.target_column:
                col_upper = m.target_column.strip().upper()
                if col_upper not in usage_map:
                    usage_map[col_upper] = []
                svc_label = s_cfg.name or s_id
                if svc_label not in usage_map[col_upper]:
                    usage_map[col_upper].append(svc_label)

    raw_columns = await db_manager.get_table_columns(table_name)
    all_col_names = [c["name"] for c in raw_columns]
    col_by_name = {c["name"]: c for c in raw_columns}

    ordered_names = sort_pipeline_columns(all_col_names, pref_order)

    result = []
    for name in ordered_names:
        c_info = col_by_name.get(name, {"type": "TEXT"})
        is_sys = name in SYSTEM_RESERVED_COLUMNS
        used_by = usage_map.get(name, [])
        result.append({
            "name": name,
            "type": c_info.get("type", "TEXT"),
            "is_system": is_sys,
            "is_deprecated": not is_sys and len(used_by) == 0,
            "used_by": used_by,
        })
    return result


@router.post("/columns")
async def add_pipeline_column(req: AddColumnRequest, pipeline_id: Optional[str] = Query(None)) -> Dict[str, Any]:
    """Dynamically add a column to the target pipeline table under strict naming validation."""
    clean_name = req.column_name.strip().upper()

    if clean_name in SYSTEM_RESERVED_COLUMNS:
        raise HTTPException(
            status_code=400,
            detail=f"Column name '{clean_name}' is a system reserved column name.",
        )

    if not SQL_IDENTIFIER_REGEX.match(clean_name):
        raise HTTPException(
            status_code=400,
            detail=f"Invalid column name '{clean_name}'. Must match ^[A-Z0-9_]+$",
        )

    settings = await config_manager.get_settings()
    p_cfg = settings.resolve_pipeline(req.pipeline_id or pipeline_id)
    table_name = p_cfg.resolved_table_name()

    try:
        added = await db_manager.ensure_column(table_name, clean_name, req.column_type)
        return {
            "success": True,
            "pipeline_id": p_cfg.id,
            "table_name": table_name,
            "column_name": clean_name,
            "column_type": req.column_type,
            "created": added,
            "message": "Column added" if added else "Column already exists",
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.delete("/columns/{column_name}")
async def delete_pipeline_column(column_name: str, pipeline_id: Optional[str] = Query(None)) -> Dict[str, Any]:
    """Delete a user-defined column from the target pipeline table."""
    clean_name = column_name.strip().upper()
    if clean_name in SYSTEM_RESERVED_COLUMNS:
        raise HTTPException(status_code=400, detail=f"Cannot delete system column '{clean_name}'.")

    settings = await config_manager.get_settings()
    p_cfg = settings.resolve_pipeline(pipeline_id)
    table_name = p_cfg.resolved_table_name()

    try:
        dropped = await db_manager.drop_column(table_name, clean_name)
        if dropped:
            if clean_name in p_cfg.column_order:
                p_cfg.column_order.remove(clean_name)
                await config_manager.update_settings(settings)
            return {"success": True, "pipeline_id": p_cfg.id, "message": f"Column '{clean_name}' dropped successfully."}
        raise HTTPException(status_code=404, detail=f"Column '{clean_name}' not found.")
    except ValueError as ve:
        raise HTTPException(status_code=400, detail=str(ve))
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/columns/prune")
async def prune_deprecated_columns(pipeline_id: Optional[str] = Query(None)) -> Dict[str, Any]:
    """Prune all dynamic columns in the target pipeline table that are not used by any service."""
    settings = await config_manager.get_settings()
    p_cfg = settings.resolve_pipeline(pipeline_id)
    table_name = p_cfg.resolved_table_name()
    services_dict = settings.services

    active_target_cols = set()
    for s_cfg in services_dict.values():
        for m in s_cfg.field_mappings:
            if m.target_column:
                active_target_cols.add(m.target_column.strip().upper())

    columns = await db_manager.get_table_columns(table_name)
    pruned = []
    for col in columns:
        c_name = col["name"].upper()
        if c_name not in SYSTEM_RESERVED_COLUMNS and c_name not in active_target_cols:
            try:
                await db_manager.drop_column(table_name, c_name)
                pruned.append(c_name)
            except Exception as e:
                print(f"[!] Error pruning column {c_name} from {table_name}: {e}")

    if pruned:
        p_cfg.column_order = [c for c in p_cfg.column_order if c not in pruned]
        await config_manager.update_settings(settings)

    return {"success": True, "pipeline_id": p_cfg.id, "pruned_columns": pruned, "count": len(pruned)}


@router.put("/columns/order")
async def reorder_pipeline_columns(req: ReorderColumnsRequest, pipeline_id: Optional[str] = Query(None)) -> Dict[str, Any]:
    """Persist preferred column order for user-defined columns on the target pipeline."""
    settings = await config_manager.get_settings()
    p_cfg = settings.resolve_pipeline(req.pipeline_id or pipeline_id)
    clean_order = [c.strip().upper() for c in req.column_order if c.strip().upper() not in SYSTEM_RESERVED_COLUMNS]
    p_cfg.column_order = clean_order
    await config_manager.update_settings(settings)
    return {"success": True, "pipeline_id": p_cfg.id, "pipeline_column_order": clean_order}


@router.post("/sample")
async def sample_app_api(req: SampleApiRequest) -> Dict[str, Any]:
    """Service-agnostic live API sampler to discover available payload fields."""
    s_id = req.service_id.strip()
    if not s_id:
        raise HTTPException(status_code=400, detail="service_id is required")

    settings = await config_manager.get_settings()
    services_dict = settings.services
    if s_id not in services_dict:
        raise HTTPException(status_code=404, detail=f"Service '{s_id}' not configured")

    service_cfg = services_dict[s_id]
    if not service_cfg.base_url:
        raise HTTPException(status_code=400, detail=f"Service '{s_id}' has no base_url configured")

    endpoint = (req.endpoint or service_cfg.poll_endpoint or "").strip()
    if not endpoint:
        raise HTTPException(status_code=400, detail="No endpoint provided and service has no poll_endpoint configured")

    resolved_endpoint = endpoint

    # Dynamically resolve any {placeholder} using the service's configured poll_endpoint if available
    if "{" in endpoint and "}" in endpoint and service_cfg.poll_endpoint and "{" not in service_cfg.poll_endpoint:
        try:
            poll_url, poll_headers = prepare_service_request(
                service_cfg.base_url, service_cfg.poll_endpoint, service_cfg.api_key or ""
            )
            async with httpx.AsyncClient(timeout=5.0) as client:
                poll_resp = await client.get(poll_url, headers=poll_headers)
                if poll_resp.status_code == 200:
                    recs, _, _ = _extract_payload_records(poll_resp.json())
                    if recs:
                        r0 = recs[0]
                        ctx = {"records": r0, **r0}
                        import re
                        import urllib.parse
                        for ph in re.findall(r"\{([^}]+)\}", endpoint):
                            val = extract_dotted_value(ctx, ph)
                            if val is None:
                                val = ctx.get(ph)
                            if val is not None:
                                resolved_endpoint = resolved_endpoint.replace(
                                    f"{{{ph}}}", urllib.parse.quote(str(val))
                                )
        except Exception:
            pass

    url, headers = prepare_service_request(service_cfg.base_url, resolved_endpoint, service_cfg.api_key or "")

    try:
        async with httpx.AsyncClient(timeout=5.0) as client:
            resp = await client.get(url, headers=headers)
            if resp.status_code != 200:
                return {
                    "success": False,
                    "status_code": resp.status_code,
                    "resolved_endpoint": resolved_endpoint,
                    "error": f"API returned status {resp.status_code}: {resp.text[:200]}",
                    "fields": [],
                }
            payload = resp.json()
            fields = flatten_json_keys(payload)
            return {
                "success": True,
                "status_code": 200,
                "resolved_endpoint": resolved_endpoint,
                "fields": fields,
                "total_fields": len(fields),
                "sample_payload": payload if isinstance(payload, dict) else (payload[:2] if isinstance(payload, list) else payload),
            }
    except Exception as e:
        return {
            "success": False,
            "resolved_endpoint": resolved_endpoint,
            "error": str(e),
            "fields": [],
        }


@router.post("/sandbox/enrichment")
async def sandbox_enrichment(req: SandboxEnrichmentRequest) -> Dict[str, Any]:
    """Test a chain of enrichment endpoints sequentially against a pipeline record, direct sample, or custom context."""
    settings = await config_manager.get_settings()
    services_dict = settings.services
    if req.service_id not in services_dict:
        raise HTTPException(status_code=404, detail=f"Service '{req.service_id}' not configured")

    service_cfg = services_dict[req.service_id]
    if not service_cfg.base_url:
        raise HTTPException(status_code=400, detail=f"Service '{req.service_id}' has no base_url configured")

    logs: List[str] = []

    row_dict: Dict[str, Any] = {}
    if req.record_id is not None:
        p_cfg = settings.resolve_pipeline(req.pipeline_id)
        table_name = p_cfg.resolved_table_name()
        rows = await db_manager.query(f"SELECT * FROM {table_name} WHERE ID = ?", (req.record_id,))
        if not rows:
            raise HTTPException(status_code=404, detail=f"Pipeline record with ID {req.record_id} not found")
        row_dict = dict(rows[0])

    sample_dict: Dict[str, Any] = {}
    async with httpx.AsyncClient(timeout=10.0) as client:
        if req.sample_endpoint and req.sample_endpoint.strip():
            s_endpoint = req.sample_endpoint.strip()
            logs.append(f"[sample] GET {s_endpoint}")
            sample_url, sample_headers = prepare_service_request(
                service_cfg.base_url, s_endpoint, service_cfg.api_key or ""
            )
            try:
                s_resp = await client.get(sample_url, headers=sample_headers)
                logs.append(f"[sample] HTTP {s_resp.status_code}")
                if s_resp.status_code == 200:
                    s_json = s_resp.json()
                    if isinstance(s_json, dict):
                        sample_dict.update(s_json)
                        recs, _, _ = _extract_payload_records(s_json)
                        if recs:
                            first_rec = recs[0]
                            sample_dict.update(first_rec)
                            sample_dict["records"] = first_rec
                    elif isinstance(s_json, list):
                        if s_json and isinstance(s_json[0], dict):
                            first_rec = s_json[0]
                            sample_dict.update(first_rec)
                            sample_dict["records"] = first_rec
                else:
                    logs.append(f"[sample] Error: {s_resp.text[:100]}")
            except Exception as e:
                logs.append(f"[sample] Exception: {str(e)}")

        base_context = {**row_dict, **sample_dict, **(req.custom_context or {})}
        enrichment_data = await fetch_enrichment_payloads(
            base_url=service_cfg.base_url,
            api_key=service_cfg.api_key or "",
            enrichment_endpoints=req.enrichment_endpoints,
            base_context=base_context,
            logs=logs,
            client=client,
        )

    final_context = {**row_dict, **sample_dict, **(req.custom_context or {}), **enrichment_data}

    all_flattened = flatten_json_keys(final_context)
    root_keys = set(final_context.keys())
    enrichment_namespaces = set(req.enrichment_endpoints.keys()) if req.enrichment_endpoints else set()

    filtered_flattened: List[Dict[str, Any]] = []
    for item in all_flattened:
        path = item.get("path", "")
        if path == "sample" or path.startswith("sample.") or path.startswith("sample["):
            continue
        if "records" not in enrichment_namespaces:
            if path == "records":
                continue
            if path.startswith("records."):
                rel_path = path[len("records."):]
                top_key = rel_path.split(".")[0].split("[")[0]
                if top_key in root_keys:
                    continue
            elif path.startswith("records["):
                continue
        filtered_flattened.append(item)

    return {
        "success": True,
        "logs": logs,
        "context_data": final_context,
        "flattened_keys": filtered_flattened,
    }


@router.get("/services/{service_id}/events")
async def discover_service_events(service_id: str) -> Dict[str, Any]:
    """Service-agnostic discovery of distinct event types from the service's configured poll_endpoint."""
    settings = await config_manager.get_settings()
    services_dict = settings.services
    if service_id not in services_dict:
        raise HTTPException(status_code=404, detail=f"Service '{service_id}' not configured")

    service_cfg = services_dict[service_id]
    if not service_cfg.base_url:
        raise HTTPException(status_code=400, detail=f"Service '{service_id}' has no base_url configured")
    if not service_cfg.poll_endpoint:
        return {"success": True, "service_id": service_id, "event_types": []}

    url, headers = prepare_service_request(service_cfg.base_url, service_cfg.poll_endpoint, service_cfg.api_key or "")

    try:
        async with httpx.AsyncClient(timeout=5.0) as client:
            resp = await client.get(url, headers=headers)
            if resp.status_code != 200:
                return {
                    "success": False,
                    "error": f"API returned {resp.status_code}: {resp.text[:200]}",
                    "event_types": [],
                }
            records, _, _ = _extract_payload_records(resp.json())
            discovered = set()
            for r in records:
                ev = r.get("eventType") or r.get("event") or r.get("type")
                if ev and isinstance(ev, str):
                    discovered.add(ev)

            event_items = [
                {
                    "event_type": ev,
                    "description": f"Discovered service event '{ev}'",
                    "default_active": True,
                }
                for ev in sorted(discovered)
            ]

            return {
                "success": True,
                "service_id": service_id,
                "event_types": event_items,
            }
    except Exception as e:
        return {
            "success": False,
            "error": str(e),
            "event_types": [],
        }


@router.get("/stats")
async def get_pipeline_stats(pipeline_id: Optional[str] = Query(None)) -> Dict[str, Any]:
    """Get aggregated pipeline statistics for the selected pipeline."""
    settings = await config_manager.get_settings()
    p_cfg = settings.resolve_pipeline(pipeline_id)
    table_name = p_cfg.resolved_table_name()

    total_res = await db_manager.query(f"SELECT COUNT(*) as cnt FROM {table_name}")
    total = total_res[0]["cnt"] if total_res else 0

    by_stage = await db_manager.query(f"SELECT STAGE, COUNT(*) as cnt FROM {table_name} GROUP BY STAGE")
    by_status = await db_manager.query(f"SELECT STATUS, COUNT(*) as cnt FROM {table_name} GROUP BY STATUS")

    return {
        "pipeline_id": p_cfg.id,
        "table_name": table_name,
        "total_items": total,
        "stages": {r["STAGE"]: r["cnt"] for r in by_stage},
        "statuses": {r["STATUS"]: r["cnt"] for r in by_status},
    }
