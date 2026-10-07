"""SQLite WAL database manager with dynamic schema migration."""

import os
import re
import aiosqlite
from contextlib import asynccontextmanager
from typing import Any, AsyncGenerator, Dict, List, Optional


SQL_IDENTIFIER_REGEX = re.compile(r"^[A-Z0-9_]+$")
SYSTEM_RESERVED_COLUMNS = {"ID", "PIPELINE_KEY", "STAGE", "STATUS", "LAST_UPDATED"}


class DatabaseManager:
    def __init__(self, db_path: str | None = None):
        self.db_path = db_path or os.getenv("DB_PATH", "/data/server_manager.db")

    @asynccontextmanager
    async def get_connection(self) -> AsyncGenerator[aiosqlite.Connection, None]:
        os.makedirs(os.path.dirname(self.db_path), exist_ok=True)
        async with aiosqlite.connect(self.db_path) as db:
            db.row_factory = aiosqlite.Row
            await db.execute("PRAGMA journal_mode = WAL;")
            await db.execute("PRAGMA synchronous = NORMAL;")
            await db.execute("PRAGMA busy_timeout = 5000;")
            yield db

    async def initialize_schema(self) -> None:
        async with self.get_connection() as db:
            # 1. Universal SERVICES_PIPELINE table
            await db.execute("""
                CREATE TABLE IF NOT EXISTS SERVICES_PIPELINE (
                    ID INTEGER PRIMARY KEY AUTOINCREMENT,
                    PIPELINE_KEY TEXT UNIQUE NOT NULL,
                    STAGE INTEGER DEFAULT 1,
                    STATUS TEXT DEFAULT 'PENDING',
                    LAST_UPDATED TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );
            """)

            # 2. Extensible ERROR_INDEX catalog
            await db.execute("""
                CREATE TABLE IF NOT EXISTS ERROR_INDEX (
                    ERROR_CODE TEXT PRIMARY KEY,
                    CATEGORY TEXT NOT NULL,
                    SEVERITY TEXT NOT NULL,
                    DESCRIPTION TEXT NOT NULL,
                    REMEDY TEXT DEFAULT '',
                    UPDATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );
            """)

            # 3. Normalized SYSTEM_INCIDENTS table
            await db.execute("""
                CREATE TABLE IF NOT EXISTS SYSTEM_INCIDENTS (
                    ID INTEGER PRIMARY KEY AUTOINCREMENT,
                    INCIDENT_CODE TEXT NOT NULL,
                    SEVERITY TEXT NOT NULL,
                    COMPONENT TEXT NOT NULL,
                    DETAILS TEXT NOT NULL,
                    RESOLVED INTEGER DEFAULT 0,
                    RESOLUTION_NOTE TEXT DEFAULT '',
                    CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    RESOLVED_AT TIMESTAMP,
                    FOREIGN KEY (INCIDENT_CODE) REFERENCES ERROR_INDEX (ERROR_CODE)
                );
            """)

            # 4. CUSTOM_VIEWS registry
            await db.execute("""
                CREATE TABLE IF NOT EXISTS CUSTOM_VIEWS (
                    ID INTEGER PRIMARY KEY AUTOINCREMENT,
                    VIEW_NAME TEXT UNIQUE NOT NULL,
                    SQL_QUERY TEXT NOT NULL,
                    IS_PRESET INTEGER DEFAULT 0,
                    CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );
            """)

            # Baseline Seed for ERROR_INDEX
            baseline_errors = [
                ("ERR_DISK_UNMOUNTED", "STORAGE", "CRITICAL", "Storage disk unmounted or unavailable", "Run 'sudo mount -a' and verify /etc/fstab"),
                ("ERR_FS_READONLY", "STORAGE", "CRITICAL", "Storage mounted read-only due to dirty bit or I/O error", "Check dmesg for I/O errors and remount with rw,force"),
                ("ERR_DB_CORRUPTION", "DATABASE", "CRITICAL", "Database integrity error detected", "Run 'fixjellyfindb' on host to verify and vacuum SQLite DB"),
                ("WARN_DB_ORPHAN_RECORDS", "DATABASE", "WARNING", "UserData orphan records detected", "Run 'fixjellyfindb' on host to clean orphan rows"),
                ("ERR_VFS_PATH_MISSING", "VFS", "CRITICAL", "Broken symlinks detected in Jellyfin Shokofin VFS", "Run 'fixperms' to clean broken symlinks"),
                ("ERR_CONTAINER_DOWN", "DOCKER", "CRITICAL", "Core service container is stopped or unhealthy", "Run 'docker start <container>' or check logs"),
                ("WARN_PERM_DRIFT", "PERMISSIONS", "WARNING", "Permissions or ownership drift detected on AppData", "Run 'fixperms' on host to reconcile 1000:1000"),
                ("INFO_CONTAINER_UPDATE", "UPDATES", "INFO", "Outdated container image detected", "Run 'updateapps' on host to pull latest images"),
            ]

            for code, cat, sev, desc, rem in baseline_errors:
                await db.execute("""
                    INSERT OR IGNORE INTO ERROR_INDEX (ERROR_CODE, CATEGORY, SEVERITY, DESCRIPTION, REMEDY)
                    VALUES (?, ?, ?, ?, ?);
                """, (code, cat, sev, desc, rem))

            await db.commit()

    async def ensure_column(self, table_name: str, column_name: str, column_type: str = "TEXT") -> bool:
        """Dynamically add column to table if it does not already exist."""
        clean_col = column_name.strip().upper()
        clean_table = table_name.strip().upper()

        if clean_col in SYSTEM_RESERVED_COLUMNS:
            raise ValueError(f"Column name '{clean_col}' is a system reserved column and cannot be added.")

        if not SQL_IDENTIFIER_REGEX.match(clean_col):
            raise ValueError(f"Column name '{clean_col}' violates strict SQL naming convention (must match ^[A-Z0-9_]+$)")

        if not SQL_IDENTIFIER_REGEX.match(clean_table):
            raise ValueError(f"Table name '{clean_table}' violates SQL naming convention")

        async with self.get_connection() as db:
            cursor = await db.execute(f"PRAGMA table_info({clean_table});")
            existing_columns = [row["name"].upper() for row in await cursor.fetchall()]

            if clean_col not in existing_columns:
                await db.execute(f'ALTER TABLE {clean_table} ADD COLUMN "{clean_col}" {column_type};')
                await db.commit()
                return True
            return False

    async def drop_column(self, table_name: str, column_name: str) -> bool:
        """Dynamically drop a user-defined column from table."""
        clean_col = column_name.strip().upper()
        clean_table = table_name.strip().upper()

        if clean_col in SYSTEM_RESERVED_COLUMNS:
            raise ValueError(f"Cannot drop system reserved column '{clean_col}'")

        if not SQL_IDENTIFIER_REGEX.match(clean_col) or not SQL_IDENTIFIER_REGEX.match(clean_table):
            raise ValueError("Invalid table or column identifier")

        async with self.get_connection() as db:
            cursor = await db.execute(f"PRAGMA table_info({clean_table});")
            existing_columns = [row["name"].upper() for row in await cursor.fetchall()]

            if clean_col in existing_columns:
                await db.execute(f'ALTER TABLE {clean_table} DROP COLUMN "{clean_col}";')
                await db.commit()
                return True
            return False

    async def rename_column(self, table_name: str, old_column: str, new_column: str) -> bool:
        """Dynamically rename a user-defined column in table."""
        clean_old = old_column.strip().upper()
        clean_new = new_column.strip().upper()
        clean_table = table_name.strip().upper()

        if clean_old in SYSTEM_RESERVED_COLUMNS or clean_new in SYSTEM_RESERVED_COLUMNS:
            raise ValueError("Cannot rename to or from a system reserved column")

        if not SQL_IDENTIFIER_REGEX.match(clean_old) or not SQL_IDENTIFIER_REGEX.match(clean_new) or not SQL_IDENTIFIER_REGEX.match(clean_table):
            raise ValueError("Invalid table or column identifier")

        async with self.get_connection() as db:
            cursor = await db.execute(f"PRAGMA table_info({clean_table});")
            existing = [row["name"].upper() for row in await cursor.fetchall()]

            if clean_old in existing and clean_new not in existing:
                await db.execute(f'ALTER TABLE {clean_table} RENAME COLUMN "{clean_old}" TO "{clean_new}";')
                await db.commit()
                return True
            return False

    async def get_table_columns(self, table_name: str) -> List[Dict[str, Any]]:
        clean_table = table_name.strip().upper()
        async with self.get_connection() as db:
            cursor = await db.execute(f"PRAGMA table_info({clean_table});")
            rows = await cursor.fetchall()
            return [{"cid": r["cid"], "name": r["name"], "type": r["type"], "notnull": r["notnull"]} for r in rows]

    async def query(self, sql: str, params: tuple = ()) -> List[Dict[str, Any]]:
        async with self.get_connection() as db:
            cursor = await db.execute(sql, params)
            rows = await cursor.fetchall()
            return [dict(r) for r in rows]

    async def execute(self, sql: str, params: tuple = ()) -> int:
        async with self.get_connection() as db:
            cursor = await db.execute(sql, params)
            await db.commit()
            return cursor.rowcount


db_manager = DatabaseManager()
