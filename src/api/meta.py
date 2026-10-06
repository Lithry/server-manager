"""LibreChat LLM Meta-Tool and structured query API.

Strictly enforces Rule 9: Decoupled three-tier telemetry architecture.
The LLM accesses ONLY Tier 2 structured database queries and pre-digested health reports.
Zero raw Docker log streams, zero shell access.
"""

from typing import Any, Dict, List, Optional
from fastapi import APIRouter, HTTPException, Query

from src.core.database import db_manager
from src.core.gitops import gitops_manager
from src.core.config import config_manager
from src.core.scheduler import scheduler


router = APIRouter(prefix="/api/v1/meta", tags=["LLM Meta-Tools"])


@router.get("/query")
async def server_query(
    target: str = Query(..., description="Target telemetry domain: 'overview', 'incidents', 'pipeline', 'catalog', 'gitops', 'errors'"),
    filter: Optional[str] = Query(None, description="Optional category or status filter"),
    limit: int = Query(20, ge=1, le=100),
) -> Dict[str, Any]:
    """Tier 3 LLM Telemetry Query Interface (Stateless RAG for LibreChat)."""
    clean_target = target.strip().lower()

    if clean_target == "overview":
        # Aggregate high-level server health and system state
        incidents_summary = await db_manager.query("""
            SELECT 
                COUNT(CASE WHEN RESOLVED = 0 THEN 1 END) AS active_incidents,
                COUNT(CASE WHEN RESOLVED = 0 AND SEVERITY = 'CRITICAL' THEN 1 END) AS critical_incidents,
                COUNT(CASE WHEN RESOLVED = 0 AND SEVERITY = 'WARNING' THEN 1 END) AS warning_incidents
            FROM SYSTEM_INCIDENTS;
        """)
        pipeline_summary = await db_manager.query("""
            SELECT 
                COUNT(*) as total_items,
                COUNT(CASE WHEN JELLYFIN_STATUS = 'AVAILABLE' THEN 1 END) as available_media
            FROM APPS_PIPELINE;
        """)
        git_status = await gitops_manager.get_status()
        sched_status = scheduler.get_scheduler_status()

        return {
            "status": "healthy" if (incidents_summary and incidents_summary[0]["critical_incidents"] == 0) else "degraded",
            "active_incidents": incidents_summary[0]["active_incidents"] if incidents_summary else 0,
            "critical_incidents": incidents_summary[0]["critical_incidents"] if incidents_summary else 0,
            "pipeline_total_items": pipeline_summary[0]["total_items"] if pipeline_summary else 0,
            "pipeline_available_media": pipeline_summary[0]["available_media"] if pipeline_summary else 0,
            "gitops": {
                "branch": git_status.get("branch"),
                "commit": git_status.get("short_commit"),
                "clean": git_status.get("clean"),
            },
            "scheduler_running": sched_status.get("running"),
        }

    elif clean_target == "incidents":
        where_sql = "WHERE i.RESOLVED = 0"
        params: List[Any] = []
        if filter:
            where_sql += " AND (i.SEVERITY = ? OR i.COMPONENT = ?)"
            params.extend([filter.upper(), filter])

        incidents = await db_manager.query(f"""
            SELECT 
                i.ID,
                i.INCIDENT_CODE,
                i.SEVERITY,
                i.COMPONENT,
                i.DETAILS,
                i.CREATED_AT,
                e.CATEGORY,
                e.DESCRIPTION AS ERROR_DESCRIPTION,
                e.REMEDY
            FROM SYSTEM_INCIDENTS i
            LEFT JOIN ERROR_INDEX e ON i.INCIDENT_CODE = e.ERROR_CODE
            {where_sql}
            ORDER BY i.ID DESC
            LIMIT ?;
        """, tuple(params + [limit]))
        return {
            "target": "incidents",
            "count": len(incidents),
            "items": incidents,
        }

    elif clean_target == "pipeline":
        where_sql = ""
        params = []
        if filter:
            where_sql = "WHERE STATUS = ?"
            params.append(filter.upper())

        items = await db_manager.query(
            f"SELECT * FROM APPS_PIPELINE {where_sql} ORDER BY LAST_UPDATED DESC LIMIT ?;",
            tuple(params + [limit]),
        )
        return {
            "target": "pipeline",
            "count": len(items),
            "items": items,
        }

    elif clean_target == "catalog":
        # Query MEDIA_CATALOG preset view
        items = await db_manager.query(
            "SELECT * FROM MEDIA_CATALOG ORDER BY LAST_UPDATED DESC LIMIT ?;",
            (limit,),
        )
        return {
            "target": "media_catalog",
            "count": len(items),
            "items": items,
        }

    elif clean_target == "gitops":
        status = await gitops_manager.get_status()
        return {
            "target": "gitops",
            "telemetry": status,
        }

    elif clean_target == "errors":
        where_sql = ""
        params = []
        if filter:
            where_sql = "WHERE CATEGORY = ? OR SEVERITY = ?"
            params.extend([filter.upper(), filter.upper()])

        errors = await db_manager.query(
            f"SELECT * FROM ERROR_INDEX {where_sql} ORDER BY SEVERITY DESC, ERROR_CODE ASC LIMIT ?;",
            tuple(params + [limit]),
        )
        return {
            "target": "error_catalog",
            "count": len(errors),
            "items": errors,
        }

    else:
        raise HTTPException(
            status_code=400,
            detail=f"Unknown target '{target}'. Supported targets: overview, incidents, pipeline, catalog, gitops, errors",
        )


@router.get("/tools")
async def get_tool_definition() -> Dict[str, Any]:
    """OpenAPI function specification for LibreChat Custom Tool configuration."""
    return {
        "name": "server_query",
        "description": "Structured telemetry query tool for cubi-server. Use this to query server health, active incidents, media catalog status, error remedies, and GitOps state. Strictly read-only and pre-digested.",
        "parameters": {
            "type": "object",
            "properties": {
                "target": {
                    "type": "string",
                    "enum": ["overview", "incidents", "pipeline", "catalog", "gitops", "errors"],
                    "description": "Domain to inspect: 'overview' for overall health, 'incidents' for active alerts with remedies, 'catalog' for available media items, 'gitops' for git status, 'errors' for known error remedies.",
                },
                "filter": {
                    "type": "string",
                    "description": "Optional category, severity (CRITICAL, WARNING), or status filter.",
                },
                "limit": {
                    "type": "integer",
                    "default": 10,
                    "description": "Maximum number of records to return.",
                },
            },
            "required": ["target"],
        },
    }
