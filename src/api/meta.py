"""LibreChat LLM Meta-Tool and structured query API.

Strictly enforces Rule 9: Decoupled three-tier telemetry architecture.
The LLM accesses ONLY Tier 2 structured database queries and pre-digested health reports.
Zero raw Docker log streams, zero shell access.
"""

from typing import Any, Dict, List, Optional
from fastapi import APIRouter, HTTPException, Query

from src import __version__
from src.core.database import db_manager
from src.core.gitops import gitops_manager
from src.core.config import config_manager
from src.core.scheduler import scheduler


router = APIRouter(prefix="/api/v1/meta", tags=["LLM Meta-Tools"])


@router.get("/query")
async def server_query(
    target: str = Query(..., description="Target telemetry domain: 'overview', 'incidents', 'pipeline', 'views', 'catalog', 'gitops', 'errors'"),
    filter: Optional[str] = Query(None, description="Optional category, status, stage, or view name filter"),
    pipeline_id: Optional[str] = Query(None, description="Optional pipeline ID for 'pipeline' target (defaults to 'default')"),
    limit: int = Query(20, ge=1, le=100),
) -> Dict[str, Any]:
    """Tier 3 LLM Telemetry Query Interface (Stateless RAG)."""
    clean_target = target.strip().lower()

    if clean_target == "overview":
        incidents_summary = await db_manager.query("""
            SELECT 
                COUNT(CASE WHEN RESOLVED = 0 THEN 1 END) AS active_incidents,
                COUNT(CASE WHEN RESOLVED = 0 AND SEVERITY = 'CRITICAL' THEN 1 END) AS critical_incidents,
                COUNT(CASE WHEN RESOLVED = 0 AND SEVERITY = 'WARNING' THEN 1 END) AS warning_incidents
            FROM SYSTEM_INCIDENTS;
        """)

        settings = await config_manager.get_settings()
        settings.normalize_pipelines()

        pipeline_total = 0
        completed_or_sink_count = 0
        pipelines_summary: List[Dict[str, Any]] = []

        for pid, pcfg in settings.pipelines.items():
            table_name = pcfg.resolved_table_name()
            p_total = 0
            p_sink = 0
            try:
                t_rows = await db_manager.query(f"SELECT COUNT(*) as total FROM {table_name};")
                p_total = t_rows[0]["total"] if t_rows else 0
                s_rows = await db_manager.query(
                    f"SELECT COUNT(*) as cnt FROM {table_name} WHERE STATUS IN ('COMPLETED', 'SINK');"
                )
                p_sink = s_rows[0]["cnt"] if s_rows else 0
            except Exception:
                pass
            pipeline_total += p_total
            completed_or_sink_count += p_sink
            pipelines_summary.append({
                "id": pid,
                "name": pcfg.name,
                "table_name": table_name,
                "enabled": pcfg.enabled,
                "retention_days": pcfg.retention_days,
                "total_items": p_total,
                "completed_or_sink_items": p_sink,
            })

        git_status = await gitops_manager.get_status()
        sched_status = scheduler.get_scheduler_status()

        stages_data = [
            {
                "id": s.id,
                "name": s.name,
                "pipeline_ids": s.pipeline_ids,
                "service_ids": s.service_ids,
                "interval_seconds": s.interval_seconds,
                "enabled": s.enabled,
            }
            for s in settings.stages
        ]

        return {
            "status": "healthy" if (incidents_summary and incidents_summary[0]["critical_incidents"] == 0) else "degraded",
            "version": __version__,
            "active_incidents": incidents_summary[0]["active_incidents"] if incidents_summary else 0,
            "critical_incidents": incidents_summary[0]["critical_incidents"] if incidents_summary else 0,
            "pipeline_total_items": pipeline_total,
            "pipeline_completed_or_sink_items": completed_or_sink_count,
            "pipelines": pipelines_summary,
            "registered_services": len(settings.services),
            "stages": stages_data,
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
        settings = await config_manager.get_settings()
        p_cfg = settings.resolve_pipeline(pipeline_id or "default")
        table_name = p_cfg.resolved_table_name()

        where_sql = ""
        params = []
        if filter:
            where_sql = "WHERE STATUS = ? OR STAGE = ?"
            params.extend([filter.upper(), filter])

        items = await db_manager.query(
            f"SELECT * FROM {table_name} {where_sql} ORDER BY LAST_UPDATED DESC LIMIT ?;",
            tuple(params + [limit]),
        )
        return {
            "target": "pipeline",
            "pipeline_id": p_cfg.id,
            "table_name": table_name,
            "count": len(items),
            "items": items,
        }

    elif clean_target in ("views", "catalog"):
        registered = await db_manager.query("SELECT * FROM CUSTOM_VIEWS ORDER BY ID ASC;")
        if filter:
            target_view = filter.strip().upper()
            matching = [r for r in registered if r["VIEW_NAME"] == target_view]
            if not matching:
                return {
                    "target": clean_target,
                    "view_name": target_view,
                    "count": 0,
                    "items": [],
                    "note": f"View or custom table '{target_view}' is not registered",
                }
            rows = await db_manager.query(f"SELECT * FROM {target_view} LIMIT ?;", (limit,))
            return {
                "target": clean_target,
                "view_name": target_view,
                "mode": matching[0].get("MODE", "VIEW"),
                "count": len(rows),
                "items": rows,
            }

        return {
            "target": clean_target,
            "count": len(registered),
            "items": registered,
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
            detail=f"Unknown target '{target}'. Supported targets: overview, incidents, pipeline, views, catalog, gitops, errors",
        )


@router.get("/tools")
async def get_tool_definition() -> Dict[str, Any]:
    """OpenAPI function specification for LibreChat Custom Tool configuration."""
    return {
        "name": "server_query",
        "description": "Structured telemetry query tool for ServerManager. Use this to query server health, active incidents, multi-pipeline telemetry rows, custom views/tables, error remedies, and GitOps state. Strictly read-only and pre-digested.",
        "parameters": {
            "type": "object",
            "properties": {
                "target": {
                    "type": "string",
                    "enum": ["overview", "incidents", "pipeline", "views", "catalog", "gitops", "errors"],
                    "description": "Domain to inspect: 'overview' for overall health, 'incidents' for active alerts with remedies, 'pipeline' for pipeline telemetry rows, 'views' or 'catalog' for custom views and persistent custom tables, 'gitops' for git status, 'errors' for known error remedies.",
                },
                "filter": {
                    "type": "string",
                    "description": "Optional category, severity (CRITICAL, WARNING), status/stage filter, or custom view/table name.",
                },
                "pipeline_id": {
                    "type": "string",
                    "description": "Optional pipeline ID when querying 'pipeline' target (defaults to 'default').",
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
