"""SQLite WAL database manager with dynamic schema migration."""

import os
import re
import aiosqlite
from typing import Any, Dict, List, Optional


SQL_IDENTIFIER_REGEX = re.compile(r"^[A-Z0-9_]+$")


class DatabaseManager:
    def __init__(self, db_path: str | None = None):
        self.db_path = db_path or os.getenv("DB_PATH", "/data/server_manager.db")

    async def get_connection(self) -> aiosqlite.Connection:
        os.makedirs(os.path.dirname(self.db_path), exist_ok=True)
        db = await aiosqlite.connect(self.db_path)
        db.row_factory = aiosqlite.Row
        await db.execute("PRAGMA journal_mode = WAL;")
        await db.execute("PRAGMA synchronous = NORMAL;")
        await db.execute("PRAGMA busy_timeout = 5000;")
        return db

    async def initialize_schema(self) -> None:
        async with await self.get_connection() as db:
            # 1. Universal APPS_PIPELINE table
            await db.execute("""
                CREATE TABLE IF NOT EXISTS APPS_PIPELINE (
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

            # Initial columns for media pipeline
            await db.commit()

        # Seed initial columns for standard media flow
        standard_cols = [
            ("SONARR_TITLE", "TEXT"),
            ("SONARR_STATUS", "TEXT"),
            ("SONARR_SERIES_ID", "INTEGER"),
            ("SONARR_EPISODE_ID", "INTEGER"),
            ("RADARR_TITLE", "TEXT"),
            ("RADARR_STATUS", "TEXT"),
            ("RADARR_MOVIE_ID", "INTEGER"),
            ("ANIDB_ID", "INTEGER"),
            ("SHOKO_STATUS", "TEXT"),
            ("SHOKO_VFS_PATH", "TEXT"),
            ("JELLYFIN_ITEM_ID", "TEXT"),
            ("JELLYFIN_STATUS", "TEXT"),
            ("JELLYFIN_PLAY_COUNT", "INTEGER DEFAULT 0"),
            ("ANIBRIDGE_SYNC", "TEXT"),
        ]

        for col_name, col_type in standard_cols:
            await self.ensure_column("APPS_PIPELINE", col_name, col_type)

        # Seed MEDIA_CATALOG factory preset view
        preset_query = """
            CREATE VIEW IF NOT EXISTS MEDIA_CATALOG AS
            SELECT 
                ID,
                PIPELINE_KEY,
                COALESCE(SONARR_TITLE, RADARR_TITLE, PIPELINE_KEY) AS TITLE,
                ANIDB_ID,
                JELLYFIN_STATUS,
                JELLYFIN_PLAY_COUNT,
                LAST_UPDATED
            FROM APPS_PIPELINE
            WHERE JELLYFIN_STATUS = 'AVAILABLE';
        """
        async with await self.get_connection() as db:
            await db.execute(preset_query)
            await db.execute("""
                INSERT OR IGNORE INTO CUSTOM_VIEWS (VIEW_NAME, SQL_QUERY, IS_PRESET)
                VALUES ('MEDIA_CATALOG', ?, 1);
            """, (preset_query,))
            await db.commit()

    async def ensure_column(self, table_name: str, column_name: str, column_type: str = "TEXT") -> bool:
        """Dynamically add column to table if it does not already exist."""
        clean_col = column_name.strip().upper()
        clean_table = table_name.strip().upper()

        if not SQL_IDENTIFIER_REGEX.match(clean_col):
            raise ValueError(f"Column name '{clean_col}' violates strict SQL naming convention (must match ^[A-Z0-9_]+$)")

        if not SQL_IDENTIFIER_REGEX.match(clean_table):
            raise ValueError(f"Table name '{clean_table}' violates SQL naming convention")

        async with await self.get_connection() as db:
            cursor = await db.execute(f"PRAGMA table_info({clean_table});")
            existing_columns = [row["name"].upper() for row in await cursor.fetchall()]

            if clean_col not in existing_columns:
                await db.execute(f'ALTER TABLE {clean_table} ADD COLUMN "{clean_col}" {column_type};')
                await db.commit()
                return True
            return False

    async def get_table_columns(self, table_name: str) -> List[Dict[str, Any]]:
        clean_table = table_name.strip().upper()
        async with await self.get_connection() as db:
            cursor = await db.execute(f"PRAGMA table_info({clean_table});")
            rows = await cursor.fetchall()
            return [{"cid": r["cid"], "name": r["name"], "type": r["type"], "notnull": r["notnull"]} for r in rows]

    async def query(self, sql: str, params: tuple = ()) -> List[Dict[str, Any]]:
        async with await self.get_connection() as db:
            cursor = await db.execute(sql, params)
            rows = await cursor.fetchall()
            return [dict(r) for r in rows]

    async def execute(self, sql: str, params: tuple = ()) -> int:
        async with await self.get_connection() as db:
            cursor = await db.execute(sql, params)
            await db.commit()
            return cursor.rowcount


db_manager = DatabaseManager()
