"""Universal pipeline and dynamic schema API endpoints."""

import re
import httpx
import urllib.parse
from typing import Any, Dict, List, Optional
from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel, Field

from src.core.database import db_manager, SQL_IDENTIFIER_REGEX, SYSTEM_RESERVED_COLUMNS
from src.core.config import config_manager


router = APIRouter(prefix="/api/v1/pipeline", tags=["Pipeline"])


def sort_pipeline_columns(all_columns: List[str], preferred_order: List[str]) -> List[str]:
    """Sort columns placing fixed system columns first, followed by user columns according to preferred order."""
    system_cols = [c for c in ["ID", "PIPELINE_KEY", "STAGE", "STATUS", "LAST_UPDATED"] if c in all_columns]
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


def prepare_service_request(base_url: str, endpoint: str, api_key: str = "") -> tuple[str, dict]:
    """Prepare target URL and headers, handling Docker network host routing and Kestrel Host headers."""
    parsed = urllib.parse.urlparse(base_url.rstrip("/"))
    hostname = (parsed.hostname or "").lower()
    port = parsed.port

    headers = {}
    if api_key:
        headers["X-Api-Key"] = api_key
        headers["Authorization"] = f"Bearer {api_key}"

    # If the target is localhost, 127.0.0.1, or host.docker.internal:
    # Inside a Docker container, we must connect to the host gateway (host.docker.internal).
    # Furthermore, ASP.NET Core apps (Sonarr, Radarr, Jellyfin) reject "Host: host.docker.internal"
    # with 400 Bad Request (Invalid Hostname), so we explicitly set "Host: localhost[:port]".
    if hostname in ("localhost", "127.0.0.1", "host.docker.internal"):
        target_netloc = f"host.docker.internal:{port}" if port else "host.docker.internal"
        headers["Host"] = f"localhost:{port}" if port else "localhost"
        parsed = parsed._replace(netloc=target_netloc)

    clean_endpoint = endpoint.lstrip("/")
    target_url = f"{urllib.parse.urlunparse(parsed)}/{clean_endpoint}" if clean_endpoint else urllib.parse.urlunparse(parsed)
    return target_url, headers


class AddColumnRequest(BaseModel):
    column_name: str
    column_type: str = "TEXT"


class ReorderColumnsRequest(BaseModel):
    column_order: List[str]


class SampleApiRequest(BaseModel):
    service_id: str | None = None
    app_id: str | None = None  # Backward compatibility
    endpoint: str = "/api/v3/history"  # or custom endpoint


def flatten_json_keys(obj: Any, prefix: str = "") -> List[Dict[str, Any]]:
    """Flatten JSON payload to display available fields with samples."""
    fields = []
    if isinstance(obj, dict):
        for k, v in obj.items():
            full_key = f"{prefix}.{k}" if prefix else k
            if isinstance(v, (dict, list)):
                fields.extend(flatten_json_keys(v, full_key))
            else:
                fields.append({"path": full_key, "sample": str(v)[:60], "type": type(v).__name__})
    elif isinstance(obj, list) and obj:
        # Sample first item
        fields.extend(flatten_json_keys(obj[0], prefix))
    return fields


@router.post("/purge")
async def purge_pipeline() -> Dict[str, Any]:
    """Purge all records from SERVICES_PIPELINE and reset autoincrement ID sequence."""
    async with db_manager.get_connection() as db:
        res = await db.execute("DELETE FROM SERVICES_PIPELINE;")
        deleted_count = res.rowcount
        try:
            await db.execute("DELETE FROM sqlite_sequence WHERE name = 'SERVICES_PIPELINE';")
        except Exception:
            pass
        await db.commit()
    return {"success": True, "deleted_rows": deleted_count}


@router.get("")
async def get_pipeline_items(
    limit: int = Query(50, ge=1, le=500),
    offset: int = Query(0, ge=0),
    status: Optional[str] = None,
    stage: Optional[str] = None,
) -> Dict[str, Any]:
    """Retrieve universal pipeline entries with all dynamic columns ordered by preference."""
    where_clauses = []
    params: List[Any] = []

    if status:
        where_clauses.append("STATUS = ?")
        params.append(status)
    if stage is not None and str(stage).strip() != "":
        stage_str = str(stage).strip()
        settings = await config_manager.get_settings()
        resolved_stage = None
        for st in settings.stages:
            if st.id == stage_str or str(st.order) == stage_str:
                resolved_stage = st.order
                break
        if resolved_stage is None and stage_str.isdigit():
            resolved_stage = int(stage_str)

        if resolved_stage is not None:
            where_clauses.append("STAGE = ?")
            params.append(resolved_stage)
        else:
            where_clauses.append("STAGE = ?")
            params.append(stage_str)

    where_sql = f"WHERE {' AND '.join(where_clauses)}" if where_clauses else ""

    count_rows = await db_manager.query(f"SELECT COUNT(*) as total FROM SERVICES_PIPELINE {where_sql}", tuple(params))
    total = count_rows[0]["total"] if count_rows else 0

    query_sql = f"SELECT * FROM SERVICES_PIPELINE {where_sql} ORDER BY LAST_UPDATED DESC LIMIT ? OFFSET ?"
    params.extend([limit, offset])
    items = await db_manager.query(query_sql, tuple(params))

    columns = await db_manager.get_table_columns("SERVICES_PIPELINE")
    all_col_names = [col["name"] for col in columns]

    settings = await config_manager.get_settings()
    pref_order = getattr(settings, "pipeline_column_order", []) or []
    ordered_cols = sort_pipeline_columns(all_col_names, pref_order)

    return {
        "total": total,
        "limit": limit,
        "offset": offset,
        "columns": ordered_cols,
        "items": items,
    }


@router.get("/columns")
async def get_pipeline_columns() -> List[Dict[str, Any]]:
    """Get all current columns of the SERVICES_PIPELINE table with usage and depreciation metadata."""
    settings = await config_manager.get_settings()
    pref_order = getattr(settings, "pipeline_column_order", []) or []
    services_dict = getattr(settings, "services", {}) or getattr(settings, "apps", {})

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

    raw_columns = await db_manager.get_table_columns("SERVICES_PIPELINE")
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
async def add_pipeline_column(req: AddColumnRequest) -> Dict[str, Any]:
    """Dynamically add a column to SERVICES_PIPELINE under strict naming validation."""
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

    try:
        added = await db_manager.ensure_column("SERVICES_PIPELINE", clean_name, req.column_type)
        return {
            "success": True,
            "column_name": clean_name,
            "column_type": req.column_type,
            "created": added,
            "message": "Column added" if added else "Column already exists",
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.delete("/columns/{column_name}")
async def delete_pipeline_column(column_name: str) -> Dict[str, Any]:
    """Delete a user-defined column from SERVICES_PIPELINE."""
    clean_name = column_name.strip().upper()
    if clean_name in SYSTEM_RESERVED_COLUMNS:
        raise HTTPException(status_code=400, detail=f"Cannot delete system column '{clean_name}'.")

    try:
        dropped = await db_manager.drop_column("SERVICES_PIPELINE", clean_name)
        if dropped:
            settings = await config_manager.get_settings()
            if clean_name in settings.pipeline_column_order:
                settings.pipeline_column_order.remove(clean_name)
                await config_manager.update_settings(settings)
            return {"success": True, "message": f"Column '{clean_name}' dropped successfully."}
        raise HTTPException(status_code=404, detail=f"Column '{clean_name}' not found.")
    except ValueError as ve:
        raise HTTPException(status_code=400, detail=str(ve))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/columns/prune")
async def prune_deprecated_columns() -> Dict[str, Any]:
    """Prune all dynamic columns in SERVICES_PIPELINE that are not used by any service."""
    settings = await config_manager.get_settings()
    services_dict = getattr(settings, "services", {}) or getattr(settings, "apps", {})

    active_target_cols = set()
    for s_cfg in services_dict.values():
        for m in s_cfg.field_mappings:
            if m.target_column:
                active_target_cols.add(m.target_column.strip().upper())

    columns = await db_manager.get_table_columns("SERVICES_PIPELINE")
    pruned = []
    for col in columns:
        c_name = col["name"].upper()
        if c_name not in SYSTEM_RESERVED_COLUMNS and c_name not in active_target_cols:
            try:
                await db_manager.drop_column("SERVICES_PIPELINE", c_name)
                pruned.append(c_name)
            except Exception as e:
                print(f"[!] Error pruning column {c_name}: {e}")

    if pruned:
        settings.pipeline_column_order = [c for c in settings.pipeline_column_order if c not in pruned]
        await config_manager.update_settings(settings)

    return {"success": True, "pruned_columns": pruned, "count": len(pruned)}


@router.put("/columns/order")
async def reorder_pipeline_columns(req: ReorderColumnsRequest) -> Dict[str, Any]:
    """Persist preferred column order for user-defined columns."""
    settings = await config_manager.get_settings()
    clean_order = [c.strip().upper() for c in req.column_order if c.strip().upper() not in SYSTEM_RESERVED_COLUMNS]
    settings.pipeline_column_order = clean_order
    await config_manager.update_settings(settings)
    return {"success": True, "pipeline_column_order": clean_order}


@router.post("/sample")
async def sample_app_api(req: SampleApiRequest) -> Dict[str, Any]:
    """Sample an external service API to discover available payload fields with parameter resolution."""
    s_id = req.service_id or req.app_id
    if not s_id:
        raise HTTPException(status_code=400, detail="service_id is required")

    settings = await config_manager.get_settings()
    services_dict = getattr(settings, "services", {}) or getattr(settings, "apps", {})
    if s_id not in services_dict:
        raise HTTPException(status_code=404, detail=f"Service '{s_id}' not configured")

    service_cfg = services_dict[s_id]
    if not service_cfg.base_url:
        raise HTTPException(status_code=400, detail=f"Service '{s_id}' has no base_url configured")

    endpoint = req.endpoint.strip()
    resolved_endpoint = endpoint

    # Auto-resolve parameterized templates like /api/v3/episode/{id} or /api/v3/movie/{id}
    if "{" in endpoint and "}" in endpoint:
        try:
            hist_url, hist_headers = prepare_service_request(service_cfg.base_url, "/api/v3/history?pageSize=1", service_cfg.api_key or "")
            async with httpx.AsyncClient(timeout=5.0) as client:
                hist_resp = await client.get(hist_url, headers=hist_headers)
                if hist_resp.status_code == 200:
                    hist_data = hist_resp.json()
                    recs = hist_data.get("records", []) if isinstance(hist_data, dict) else []
                    if recs:
                        r0 = recs[0]
                        ep_id = r0.get("episodeId") or r0.get("id") or 1
                        movie_id = r0.get("movieId") or r0.get("id") or 1
                        series_id = r0.get("seriesId") or r0.get("id") or 1
                        resolved_endpoint = (
                            resolved_endpoint
                            .replace("{records.episodeId}", str(ep_id))
                            .replace("{episodeId}", str(ep_id))
                            .replace("{records.movieId}", str(movie_id))
                            .replace("{movieId}", str(movie_id))
                            .replace("{records.seriesId}", str(series_id))
                            .replace("{seriesId}", str(series_id))
                        )
                        resolved_endpoint = re.sub(r"\{id\}", str(ep_id if "episode" in endpoint else movie_id), resolved_endpoint)
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


@router.get("/services/{service_id}/events")
async def discover_service_events(service_id: str) -> Dict[str, Any]:
    """Discover distinct event types from upstream service history."""
    settings = await config_manager.get_settings()
    services_dict = getattr(settings, "services", {}) or getattr(settings, "apps", {})
    if service_id not in services_dict:
        raise HTTPException(status_code=404, detail=f"Service '{service_id}' not configured")

    service_cfg = services_dict[service_id]
    if not service_cfg.base_url:
        raise HTTPException(status_code=400, detail=f"Service '{service_id}' has no base_url configured")

    url, headers = prepare_service_request(service_cfg.base_url, "/api/v3/history?pageSize=200", service_cfg.api_key or "")

    EVENT_DESCRIPTIONS = {
        "downloadFolderImported": ("File imported to media library", True),
        "episodeFileRenamed": ("Episode file renamed to standard format", True),
        "movieFileRenamed": ("Movie file renamed to standard format", True),
        "episodeFileDeleted": ("File deleted from disk", False),
        "movieFileDeleted": ("File deleted from disk", False),
        "grabbed": ("Release sent to download client", False),
    }

    try:
        async with httpx.AsyncClient(timeout=5.0) as client:
            resp = await client.get(url, headers=headers)
            if resp.status_code != 200:
                return {
                    "success": False,
                    "error": f"API returned {resp.status_code}: {resp.text[:200]}",
                    "event_types": [],
                }
            payload = resp.json()
            records = payload.get("records", []) if isinstance(payload, dict) else []
            discovered = set()
            for r in records:
                ev = r.get("eventType")
                if ev:
                    discovered.add(ev)

            event_items = []
            for ev in sorted(discovered):
                desc, default_active = EVENT_DESCRIPTIONS.get(ev, ("Custom service event", False))
                event_items.append({
                    "event_type": ev,
                    "description": desc,
                    "default_active": default_active,
                })

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
async def get_pipeline_stats() -> Dict[str, Any]:
    """Get aggregated pipeline statistics."""
    total_res = await db_manager.query("SELECT COUNT(*) as cnt FROM SERVICES_PIPELINE")
    total = total_res[0]["cnt"] if total_res else 0

    by_stage = await db_manager.query("SELECT STAGE, COUNT(*) as cnt FROM SERVICES_PIPELINE GROUP BY STAGE")
    by_status = await db_manager.query("SELECT STATUS, COUNT(*) as cnt FROM SERVICES_PIPELINE GROUP BY STATUS")

    return {
        "total_items": total,
        "stages": {r["STAGE"]: r["cnt"] for r in by_stage},
        "statuses": {r["STATUS"]: r["cnt"] for r in by_status},
    }
