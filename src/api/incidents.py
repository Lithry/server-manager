"""System Incidents and Error Index API endpoints."""

import datetime
from typing import Any, Dict, List, Optional
from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel, Field

from src.core.database import db_manager


router = APIRouter(prefix="/api/v1/incidents", tags=["Incidents"])


class CreateIncidentRequest(BaseModel):
    incident_code: str
    severity: str = "WARNING"  # CRITICAL, WARNING, INFO
    component: str
    details: str


class ResolveIncidentRequest(BaseModel):
    resolution_note: str = ""


class ErrorIndexEntry(BaseModel):
    error_code: str
    category: str
    severity: str = "WARNING"
    description: str
    remedy: str = ""


@router.get("")
async def list_incidents(
    resolved: Optional[int] = Query(None, description="0 for active, 1 for resolved"),
    severity: Optional[str] = Query(None, description="CRITICAL, WARNING, INFO"),
    component: Optional[str] = None,
    limit: int = Query(50, ge=1, le=200),
    offset: int = Query(0, ge=0),
) -> Dict[str, Any]:
    """List system incidents enriched with error catalog descriptions and remedies."""
    where_clauses = []
    params: List[Any] = []

    if resolved is not None:
        where_clauses.append("i.RESOLVED = ?")
        params.append(resolved)
    if severity:
        where_clauses.append("i.SEVERITY = ?")
        params.append(severity.upper())
    if component:
        where_clauses.append("i.COMPONENT = ?")
        params.append(component)

    where_sql = f"WHERE {' AND '.join(where_clauses)}" if where_clauses else ""

    count_rows = await db_manager.query(
        f"SELECT COUNT(*) as total FROM SYSTEM_INCIDENTS i {where_sql}",
        tuple(params),
    )
    total = count_rows[0]["total"] if count_rows else 0

    query_sql = f"""
        SELECT 
            i.ID,
            i.INCIDENT_CODE,
            i.SEVERITY,
            i.COMPONENT,
            i.DETAILS,
            i.RESOLVED,
            i.RESOLUTION_NOTE,
            i.CREATED_AT,
            i.RESOLVED_AT,
            e.CATEGORY,
            e.DESCRIPTION AS ERROR_DESCRIPTION,
            e.REMEDY
        FROM SYSTEM_INCIDENTS i
        LEFT JOIN ERROR_INDEX e ON i.INCIDENT_CODE = e.ERROR_CODE
        {where_sql}
        ORDER BY i.RESOLVED ASC, i.ID DESC
        LIMIT ? OFFSET ?;
    """
    params.extend([limit, offset])
    incidents = await db_manager.query(query_sql, tuple(params))

    return {
        "total": total,
        "limit": limit,
        "offset": offset,
        "items": incidents,
    }


@router.get("/summary")
async def get_incidents_summary() -> Dict[str, Any]:
    """Retrieve fast aggregate metrics on active and resolved incidents."""
    rows = await db_manager.query("""
        SELECT 
            COUNT(CASE WHEN RESOLVED = 0 THEN 1 END) AS active_total,
            COUNT(CASE WHEN RESOLVED = 0 AND SEVERITY = 'CRITICAL' THEN 1 END) AS active_critical,
            COUNT(CASE WHEN RESOLVED = 0 AND SEVERITY = 'WARNING' THEN 1 END) AS active_warning,
            COUNT(CASE WHEN RESOLVED = 0 AND SEVERITY = 'INFO' THEN 1 END) AS active_info,
            COUNT(CASE WHEN RESOLVED = 1 THEN 1 END) AS resolved_total
        FROM SYSTEM_INCIDENTS;
    """)
    return rows[0] if rows else {
        "active_total": 0,
        "active_critical": 0,
        "active_warning": 0,
        "active_info": 0,
        "resolved_total": 0,
    }


@router.post("")
async def create_incident(req: CreateIncidentRequest) -> Dict[str, Any]:
    """Report a new system incident."""
    clean_code = req.incident_code.strip().upper()
    clean_sev = req.severity.strip().upper()

    # Ensure error code exists in catalog
    existing_err = await db_manager.query("SELECT * FROM ERROR_INDEX WHERE ERROR_CODE = ?;", (clean_code,))
    if not existing_err:
        # Auto-register stub error index entry
        await db_manager.execute(
            """
            INSERT OR IGNORE INTO ERROR_INDEX (ERROR_CODE, CATEGORY, SEVERITY, DESCRIPTION, REMEDY)
            VALUES (?, 'GENERAL', ?, ?, 'Review component logs or host status');
            """,
            (clean_code, clean_sev, f"Dynamic incident: {req.details}"),
        )

    # Insert incident
    async with await db_manager.get_connection() as db:
        cursor = await db.execute(
            """
            INSERT INTO SYSTEM_INCIDENTS (INCIDENT_CODE, SEVERITY, COMPONENT, DETAILS, RESOLVED)
            VALUES (?, ?, ?, ?, 0);
            """,
            (clean_code, clean_sev, req.component, req.details),
        )
        await db.commit()
        incident_id = cursor.lastrowid

    return {
        "success": True,
        "incident_id": incident_id,
        "incident_code": clean_code,
        "severity": clean_sev,
    }


@router.post("/{incident_id}/resolve")
async def resolve_incident(incident_id: int, req: ResolveIncidentRequest) -> Dict[str, Any]:
    """Mark an incident as resolved with audit note."""
    now_str = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    rowcount = await db_manager.execute(
        """
        UPDATE SYSTEM_INCIDENTS 
        SET RESOLVED = 1, RESOLVED_AT = ?, RESOLUTION_NOTE = ?
        WHERE ID = ?;
        """,
        (now_str, req.resolution_note.strip(), incident_id),
    )
    if rowcount == 0:
        raise HTTPException(status_code=404, detail=f"Incident {incident_id} not found")

    return {"success": True, "incident_id": incident_id, "resolved_at": now_str}


@router.get("/catalog/errors")
async def list_error_index() -> List[Dict[str, Any]]:
    """List all registered error templates from ERROR_INDEX."""
    return await db_manager.query("SELECT * FROM ERROR_INDEX ORDER BY SEVERITY DESC, ERROR_CODE ASC;")


@router.post("/catalog/errors")
async def upsert_error_index_entry(req: ErrorIndexEntry) -> Dict[str, Any]:
    """Upsert an error definition with category and remediation guidance."""
    clean_code = req.error_code.strip().upper()
    await db_manager.execute(
        """
        INSERT INTO ERROR_INDEX (ERROR_CODE, CATEGORY, SEVERITY, DESCRIPTION, REMEDY, UPDATED_AT)
        VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
        ON CONFLICT(ERROR_CODE) DO UPDATE SET
            CATEGORY = excluded.CATEGORY,
            SEVERITY = excluded.SEVERITY,
            DESCRIPTION = excluded.DESCRIPTION,
            REMEDY = excluded.REMEDY,
            UPDATED_AT = CURRENT_TIMESTAMP;
        """,
        (clean_code, req.category.upper(), req.severity.upper(), req.description, req.remedy),
    )
    return {"success": True, "error_code": clean_code}
