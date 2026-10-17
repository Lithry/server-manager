"""Dynamic View & Persistent Custom Table Builder API endpoints."""

import re
from typing import Any, Dict, List, Literal, Optional
from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel, Field

from src.core.database import db_manager, SQL_IDENTIFIER_REGEX


router = APIRouter(prefix="/api/v1/views", tags=["Views & Custom Tables"])

DISALLOWED_SQL_KEYWORDS = ["DROP", "DELETE", "UPDATE", "INSERT", "ALTER", "ATTACH", "DETACH", "PRAGMA"]


def _validate_select_sql(sql_select: str) -> str:
    """Validate and normalize a read-only SELECT query for views and custom tables."""
    clean_sql = (sql_select or "").strip().rstrip(";").strip()
    if not clean_sql.upper().startswith("SELECT"):
        raise HTTPException(
            status_code=400,
            detail="Query must begin with 'SELECT'.",
        )
    for word in DISALLOWED_SQL_KEYWORDS:
        if re.search(rf"\b{word}\b", clean_sql, re.IGNORECASE):
            raise HTTPException(
                status_code=400,
                detail=f"Query contains disallowed keyword '{word}'. Queries must be read-only SELECT projections.",
            )
    return clean_sql


class CreateViewRequest(BaseModel):
    view_name: str
    sql_select: str = Field(..., description="SELECT statement defining the view or persistent table projection")
    mode: Literal["VIEW", "TABLE"] = Field(default="VIEW", description="'VIEW' for virtual SQL view, 'TABLE' for persistent materialized table")
    sync_key_column: str = Field(default="PIPELINE_KEY", description="Primary key column for UPSERT synchronization in TABLE mode")
    refresh_interval_seconds: Optional[int] = Field(default=None, ge=5, description="Optional automated refresh interval in seconds for TABLE mode")


class UpdateViewRequest(BaseModel):
    sql_select: Optional[str] = None
    mode: Optional[Literal["VIEW", "TABLE"]] = None
    sync_key_column: Optional[str] = None
    refresh_interval_seconds: Optional[int] = Field(default=None, ge=0, description="Automated refresh interval in seconds (0 or null disables auto-sync)")


@router.get("")
async def list_views() -> List[Dict[str, Any]]:
    """List all registered custom views and persistent custom tables."""
    return await db_manager.query("SELECT * FROM CUSTOM_VIEWS ORDER BY ID ASC;")


@router.get("/{view_name}")
async def get_view_details(view_name: str) -> Dict[str, Any]:
    """Get metadata for a specific view or persistent custom table."""
    clean_name = view_name.strip().upper()
    rows = await db_manager.query("SELECT * FROM CUSTOM_VIEWS WHERE VIEW_NAME = ?;", (clean_name,))
    if not rows:
        raise HTTPException(status_code=404, detail=f"View or custom table '{clean_name}' not found")
    return rows[0]


@router.get("/{view_name}/data")
async def get_view_data(
    view_name: str,
    limit: int = Query(50, ge=1, le=500),
    offset: int = Query(0, ge=0),
) -> Dict[str, Any]:
    """Execute view or query persistent custom table and retrieve rows with pagination."""
    clean_name = view_name.strip().upper()
    if not SQL_IDENTIFIER_REGEX.match(clean_name):
        raise HTTPException(status_code=400, detail=f"Invalid identifier format: '{clean_name}'")

    # Verify view or table exists in SQLite
    objects = await db_manager.query(
        "SELECT name, type FROM sqlite_master WHERE type IN ('view', 'table') AND name = ?;",
        (clean_name,),
    )
    if not objects:
        raise HTTPException(status_code=404, detail=f"View or custom table '{clean_name}' does not exist in database")

    meta_rows = await db_manager.query("SELECT * FROM CUSTOM_VIEWS WHERE VIEW_NAME = ?;", (clean_name,))
    meta = meta_rows[0] if meta_rows else None

    count_rows = await db_manager.query(f"SELECT COUNT(*) as total FROM {clean_name};")
    total = count_rows[0]["total"] if count_rows else 0

    items = await db_manager.query(f"SELECT * FROM {clean_name} LIMIT ? OFFSET ?;", (limit, offset))
    columns = await db_manager.get_table_columns(clean_name)

    return {
        "view_name": clean_name,
        "mode": meta["MODE"] if meta and "MODE" in meta else objects[0]["type"].upper(),
        "sync_key_column": meta.get("SYNC_KEY_COLUMN") if meta else None,
        "refresh_interval_seconds": meta.get("REFRESH_INTERVAL_SECONDS") if meta else None,
        "last_synced_at": meta.get("LAST_SYNCED_AT") if meta else None,
        "total": total,
        "limit": limit,
        "offset": offset,
        "columns": [col["name"] for col in columns],
        "items": items,
    }


@router.post("")
async def create_custom_view(req: CreateViewRequest) -> Dict[str, Any]:
    """Create and register either a virtual SQL VIEW or a persistent materialized TABLE."""
    clean_name = req.view_name.strip().upper()
    if not SQL_IDENTIFIER_REGEX.match(clean_name):
        raise HTTPException(
            status_code=400,
            detail=f"Invalid name '{clean_name}'. Must match ^[A-Z0-9_]+$",
        )

    clean_sql = _validate_select_sql(req.sql_select)
    mode = (req.mode or "VIEW").strip().upper()
    sync_key = (req.sync_key_column or "PIPELINE_KEY").strip().upper()
    if not SQL_IDENTIFIER_REGEX.match(sync_key):
        raise HTTPException(
            status_code=400,
            detail=f"Invalid sync_key_column '{sync_key}'. Must match ^[A-Z0-9_]+$",
        )

    if mode == "VIEW":
        full_create_query = f"CREATE VIEW IF NOT EXISTS {clean_name} AS {clean_sql};"
        try:
            async with db_manager.get_connection() as db:
                await db.execute(f"DROP TABLE IF EXISTS {clean_name};")
                await db.execute(f"DROP VIEW IF EXISTS {clean_name};")
                await db.execute(full_create_query)
                await db.execute(
                    """
                    INSERT INTO CUSTOM_VIEWS (VIEW_NAME, SQL_QUERY, MODE, SYNC_KEY_COLUMN, REFRESH_INTERVAL_SECONDS, IS_PRESET)
                    VALUES (?, ?, 'VIEW', ?, NULL, 0)
                    ON CONFLICT(VIEW_NAME) DO UPDATE SET
                        SQL_QUERY = excluded.SQL_QUERY,
                        MODE = 'VIEW',
                        SYNC_KEY_COLUMN = excluded.SYNC_KEY_COLUMN,
                        REFRESH_INTERVAL_SECONDS = NULL;
                    """,
                    (clean_name, full_create_query, sync_key),
                )
                await db.commit()
        except Exception as e:
            raise HTTPException(status_code=400, detail=f"Failed to create view: {str(e)}")

        return {
            "success": True,
            "view_name": clean_name,
            "mode": "VIEW",
            "query": full_create_query,
        }

    # Persistent Custom Table Mode (MODE == 'TABLE')
    refresh_interval = req.refresh_interval_seconds if (req.refresh_interval_seconds and req.refresh_interval_seconds > 0) else None
    try:
        async with db_manager.get_connection() as db:
            await db.execute(f"DROP VIEW IF EXISTS {clean_name};")
            await db.execute(
                """
                INSERT INTO CUSTOM_VIEWS (VIEW_NAME, SQL_QUERY, MODE, SYNC_KEY_COLUMN, REFRESH_INTERVAL_SECONDS, IS_PRESET)
                VALUES (?, ?, 'TABLE', ?, ?, 0)
                ON CONFLICT(VIEW_NAME) DO UPDATE SET
                    SQL_QUERY = excluded.SQL_QUERY,
                    MODE = 'TABLE',
                    SYNC_KEY_COLUMN = excluded.SYNC_KEY_COLUMN,
                    REFRESH_INTERVAL_SECONDS = excluded.REFRESH_INTERVAL_SECONDS;
                """,
                (clean_name, clean_sql, sync_key, refresh_interval),
            )
            await db.commit()

        sync_result = await db_manager.sync_custom_table(clean_name)
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Failed to create or synchronize persistent custom table: {str(e)}")

    return {
        "success": True,
        "view_name": clean_name,
        "mode": "TABLE",
        "sync_key_column": sync_key,
        "refresh_interval_seconds": refresh_interval,
        "query": clean_sql,
        "sync_result": sync_result,
    }


@router.patch("/{view_name}")
async def update_custom_view(view_name: str, req: UpdateViewRequest) -> Dict[str, Any]:
    """Update a registered view or persistent custom table (including promoting VIEW -> TABLE or modifying refresh interval)."""
    clean_name = view_name.strip().upper()
    rows = await db_manager.query("SELECT * FROM CUSTOM_VIEWS WHERE VIEW_NAME = ?;", (clean_name,))
    if not rows:
        raise HTTPException(status_code=404, detail=f"View or custom table '{clean_name}' not found")

    current = rows[0]
    new_mode = (req.mode or current.get("MODE") or "VIEW").strip().upper()
    new_sync_key = (req.sync_key_column or current.get("SYNC_KEY_COLUMN") or "PIPELINE_KEY").strip().upper()
    if not SQL_IDENTIFIER_REGEX.match(new_sync_key):
        raise HTTPException(status_code=400, detail=f"Invalid sync_key_column '{new_sync_key}'")

    raw_sql = req.sql_select if req.sql_select is not None else current["SQL_QUERY"]
    # Extract underlying SELECT if stored as CREATE VIEW ... AS SELECT ...
    match = re.match(r"^\s*CREATE\s+VIEW\s+(?:IF\s+NOT\s+EXISTS\s+)?[A-Z0-9_\"']+\s+AS\s+(.*)$", raw_sql, re.IGNORECASE | re.DOTALL)
    select_sql = match.group(1).strip().rstrip(";") if match else raw_sql
    clean_sql = _validate_select_sql(select_sql)

    if req.refresh_interval_seconds is not None:
        new_interval = req.refresh_interval_seconds if req.refresh_interval_seconds > 0 else None
    else:
        new_interval = current.get("REFRESH_INTERVAL_SECONDS")

    create_req = CreateViewRequest(
        view_name=clean_name,
        sql_select=clean_sql,
        mode=new_mode,  # type: ignore[arg-type]
        sync_key_column=new_sync_key,
        refresh_interval_seconds=new_interval if new_mode == "TABLE" else None,
    )
    return await create_custom_view(create_req)


@router.post("/{view_name}/sync")
async def sync_custom_table_endpoint(view_name: str) -> Dict[str, Any]:
    """Manually trigger an immediate UPSERT synchronization for a persistent custom table (MODE = 'TABLE')."""
    clean_name = view_name.strip().upper()
    rows = await db_manager.query("SELECT * FROM CUSTOM_VIEWS WHERE VIEW_NAME = ?;", (clean_name,))
    if not rows:
        raise HTTPException(status_code=404, detail=f"Custom table '{clean_name}' not found")

    meta = rows[0]
    if (meta.get("MODE") or "VIEW").upper() != "TABLE":
        raise HTTPException(
            status_code=400,
            detail=f"'{clean_name}' is a virtual VIEW, not a persistent TABLE. Convert it to MODE='TABLE' to synchronize persistent data.",
        )

    try:
        result = await db_manager.sync_custom_table(clean_name)
        return {"success": True, **result}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Failed to sync custom table '{clean_name}': {str(e)}")


@router.delete("/{view_name}")
async def delete_custom_view(view_name: str) -> Dict[str, Any]:
    """Delete a custom view or persistent custom table. Preset entries cannot be deleted."""
    clean_name = view_name.strip().upper()
    rows = await db_manager.query("SELECT * FROM CUSTOM_VIEWS WHERE VIEW_NAME = ?;", (clean_name,))
    if not rows:
        raise HTTPException(status_code=404, detail=f"View or custom table '{clean_name}' not found")

    if rows[0]["IS_PRESET"] == 1:
        raise HTTPException(status_code=403, detail=f"'{clean_name}' is a factory preset and cannot be deleted")

    mode = (rows[0].get("MODE") or "VIEW").upper()
    async with db_manager.get_connection() as db:
        if mode == "TABLE":
            await db.execute(f"DROP TABLE IF EXISTS {clean_name};")
        await db.execute(f"DROP VIEW IF EXISTS {clean_name};")
        await db.execute("DELETE FROM CUSTOM_VIEWS WHERE VIEW_NAME = ?;", (clean_name,))
        await db.commit()

    return {"success": True, "view_name": clean_name, "mode": mode, "deleted": True}

