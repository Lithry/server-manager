"""Universal pipeline and dynamic schema API endpoints."""

import re
import httpx
import urllib.parse
from typing import Any, Dict, List, Optional
from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel, Field

from src.core.database import db_manager, SQL_IDENTIFIER_REGEX
from src.core.config import config_manager


router = APIRouter(prefix="/api/v1/pipeline", tags=["Pipeline"])


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


@router.get("")
async def get_pipeline_items(
    limit: int = Query(50, ge=1, le=500),
    offset: int = Query(0, ge=0),
    status: Optional[str] = None,
    stage: Optional[int] = None,
) -> Dict[str, Any]:
    """Retrieve universal pipeline entries with all dynamic columns."""
    where_clauses = []
    params: List[Any] = []

    if status:
        where_clauses.append("STATUS = ?")
        params.append(status)
    if stage is not None:
        where_clauses.append("STAGE = ?")
        params.append(stage)

    where_sql = f"WHERE {' AND '.join(where_clauses)}" if where_clauses else ""

    count_rows = await db_manager.query(f"SELECT COUNT(*) as total FROM SERVICES_PIPELINE {where_sql}", tuple(params))
    total = count_rows[0]["total"] if count_rows else 0

    query_sql = f"SELECT * FROM SERVICES_PIPELINE {where_sql} ORDER BY LAST_UPDATED DESC LIMIT ? OFFSET ?"
    params.extend([limit, offset])
    items = await db_manager.query(query_sql, tuple(params))

    columns = await db_manager.get_table_columns("SERVICES_PIPELINE")

    return {
        "total": total,
        "limit": limit,
        "offset": offset,
        "columns": [col["name"] for col in columns],
        "items": items,
    }


@router.get("/columns")
async def get_pipeline_columns() -> List[Dict[str, Any]]:
    """Get all current columns of the SERVICES_PIPELINE table."""
    return await db_manager.get_table_columns("SERVICES_PIPELINE")


@router.post("/columns")
async def add_pipeline_column(req: AddColumnRequest) -> Dict[str, Any]:
    """Dynamically add a column to SERVICES_PIPELINE under strict naming validation."""
    clean_name = req.column_name.strip().upper()
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


@router.post("/sample")
async def sample_app_api(req: SampleApiRequest) -> Dict[str, Any]:
    """Sample an external service API to discover available payload fields."""
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

    url, headers = prepare_service_request(service_cfg.base_url, req.endpoint, service_cfg.api_key or "")

    try:
        async with httpx.AsyncClient(timeout=5.0) as client:
            resp = await client.get(url, headers=headers)
            if resp.status_code != 200:
                return {
                    "success": False,
                    "status_code": resp.status_code,
                    "error": f"API returned status {resp.status_code}: {resp.text[:200]}",
                    "fields": [],
                }
            payload = resp.json()
            fields = flatten_json_keys(payload)
            return {
                "success": True,
                "status_code": 200,
                "fields": fields,
                "total_fields": len(fields),
                "sample_payload": payload if isinstance(payload, dict) else (payload[:2] if isinstance(payload, list) else payload),
            }
    except Exception as e:
        return {
            "success": False,
            "error": str(e),
            "fields": [],
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
