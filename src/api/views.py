"""Dynamic View Builder API endpoints."""

import re
from typing import Any, Dict, List, Optional
from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel, Field

from src.core.database import db_manager, SQL_IDENTIFIER_REGEX


router = APIRouter(prefix="/api/v1/views", tags=["Views"])


class CreateViewRequest(BaseModel):
    view_name: str
    sql_select: str = Field(..., description="SELECT statement defining the view, e.g. 'SELECT ID, TITLE FROM ...'")


@router.get("")
async def list_views() -> List[Dict[str, Any]]:
    """List all registered custom and preset views."""
    return await db_manager.query("SELECT * FROM CUSTOM_VIEWS ORDER BY ID ASC;")


@router.get("/{view_name}")
async def get_view_details(view_name: str) -> Dict[str, Any]:
    """Get metadata for a specific view."""
    clean_name = view_name.strip().upper()
    rows = await db_manager.query("SELECT * FROM CUSTOM_VIEWS WHERE VIEW_NAME = ?;", (clean_name,))
    if not rows:
        raise HTTPException(status_code=404, detail=f"View '{clean_name}' not found")
    return rows[0]


@router.get("/{view_name}/data")
async def get_view_data(
    view_name: str,
    limit: int = Query(50, ge=1, le=500),
    offset: int = Query(0, ge=0),
) -> Dict[str, Any]:
    """Execute view and retrieve rows with pagination."""
    clean_name = view_name.strip().upper()
    if not SQL_IDENTIFIER_REGEX.match(clean_name):
        raise HTTPException(status_code=400, detail=f"Invalid view name format: '{clean_name}'")

    # Verify view exists in SQLite
    views = await db_manager.query(
        "SELECT name FROM sqlite_master WHERE type IN ('view', 'table') AND name = ?;",
        (clean_name,),
    )
    if not views:
        raise HTTPException(status_code=404, detail=f"View '{clean_name}' does not exist in database")

    count_rows = await db_manager.query(f"SELECT COUNT(*) as total FROM {clean_name};")
    total = count_rows[0]["total"] if count_rows else 0

    items = await db_manager.query(f"SELECT * FROM {clean_name} LIMIT ? OFFSET ?;", (limit, offset))
    columns = await db_manager.get_table_columns(clean_name)

    return {
        "view_name": clean_name,
        "total": total,
        "limit": limit,
        "offset": offset,
        "columns": [col["name"] for col in columns],
        "items": items,
    }


@router.post("")
async def create_custom_view(req: CreateViewRequest) -> Dict[str, Any]:
    """Create and register a custom SQL view based on APPS_PIPELINE or joined tables."""
    clean_name = req.view_name.strip().upper()
    if not SQL_IDENTIFIER_REGEX.match(clean_name):
        raise HTTPException(
            status_code=400,
            detail=f"Invalid view name '{clean_name}'. Must match ^[A-Z0-9_]+$",
        )

    # Sanity checks on the SELECT statement
    clean_sql = req.sql_select.strip().rstrip(";")
    if not clean_sql.upper().startswith("SELECT"):
        raise HTTPException(
            status_code=400,
            detail="View query must begin with 'SELECT'.",
        )

    # Disallow destructive keywords inside view definition
    disallowed = ["DROP", "DELETE", "UPDATE", "INSERT", "ALTER", "ATTACH", "DETACH"]
    for word in disallowed:
        if re.search(rf"\b{word}\b", clean_sql, re.IGNORECASE):
            raise HTTPException(
                status_code=400,
                detail=f"Query contains disallowed keyword '{word}'. Views are read-only projections.",
            )

    full_create_query = f"CREATE VIEW IF NOT EXISTS {clean_name} AS {clean_sql};"

    # Attempt view creation in SQLite
    try:
        async with db_manager.get_connection() as db:
            await db.execute(f"DROP VIEW IF EXISTS {clean_name};")
            await db.execute(full_create_query)
            await db.execute(
                """
                INSERT INTO CUSTOM_VIEWS (VIEW_NAME, SQL_QUERY, IS_PRESET)
                VALUES (?, ?, 0)
                ON CONFLICT(VIEW_NAME) DO UPDATE SET SQL_QUERY = excluded.SQL_QUERY;
                """,
                (clean_name, full_create_query),
            )
            await db.commit()
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Failed to create view: {str(e)}")

    return {
        "success": True,
        "view_name": clean_name,
        "query": full_create_query,
    }


@router.delete("/{view_name}")
async def delete_custom_view(view_name: str) -> Dict[str, Any]:
    """Delete a custom view. Preset views cannot be deleted."""
    clean_name = view_name.strip().upper()
    rows = await db_manager.query("SELECT * FROM CUSTOM_VIEWS WHERE VIEW_NAME = ?;", (clean_name,))
    if not rows:
        raise HTTPException(status_code=404, detail=f"View '{clean_name}' not found")

    if rows[0]["IS_PRESET"] == 1:
        raise HTTPException(status_code=403, detail=f"View '{clean_name}' is a factory preset and cannot be deleted")

    async with db_manager.get_connection() as db:
        await db.execute(f"DROP VIEW IF EXISTS {clean_name};")
        await db.execute("DELETE FROM CUSTOM_VIEWS WHERE VIEW_NAME = ?;", (clean_name,))
        await db.commit()

    return {"success": True, "view_name": clean_name, "deleted": True}
