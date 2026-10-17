"""SQLite WAL database manager with dynamic schema migration."""

import os
import re
import aiosqlite
from contextlib import asynccontextmanager
from typing import Any, AsyncGenerator, Dict, List, Optional


SQL_IDENTIFIER_REGEX = re.compile(r"^[A-Z0-9_]+$")
SYSTEM_RESERVED_COLUMNS = {"ID", "PIPELINE_KEY", "STAGE", "STATUS", "CREATED_AT", "LAST_UPDATED"}


class DatabaseManager:
    def __init__(self, db_path: str | None = None):
        self.db_path = db_path or os.getenv("DB_PATH", "/data/server_manager.db")
        self._dir_ensured = False

    @asynccontextmanager
    async def get_connection(self) -> AsyncGenerator[aiosqlite.Connection, None]:
        if not self._dir_ensured and self.db_path != ":memory:":
            parent = os.path.dirname(self.db_path)
            if parent:
                os.makedirs(parent, exist_ok=True)
            self._dir_ensured = True
        async with aiosqlite.connect(self.db_path) as db:
            db.row_factory = aiosqlite.Row
            await db.execute("PRAGMA journal_mode = WAL;")
            await db.execute("PRAGMA synchronous = NORMAL;")
            await db.execute("PRAGMA busy_timeout = 5000;")
            yield db

    async def initialize_schema(self) -> None:
        async with self.get_connection() as db:
            # Destructive cleanup of legacy single-pipeline table
            await db.execute("DROP TABLE IF EXISTS SERVICES_PIPELINE;")
            await db.execute("DROP TABLE IF EXISTS SERVICE_PIPELINE;")

            # 1. Multi-Pipeline Registry Table
            await db.execute("""
                CREATE TABLE IF NOT EXISTS PIPELINES (
                    ID TEXT PRIMARY KEY,
                    NAME TEXT NOT NULL,
                    DESCRIPTION TEXT DEFAULT '',
                    TABLE_NAME TEXT UNIQUE NOT NULL,
                    RETENTION_DAYS INTEGER DEFAULT 30,
                    ENABLED INTEGER DEFAULT 1,
                    CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );
            """)

            # Ensure default pipeline table exists
            await db.execute("""
                CREATE TABLE IF NOT EXISTS PIPELINE_DEFAULT (
                    ID INTEGER PRIMARY KEY AUTOINCREMENT,
                    PIPELINE_KEY TEXT UNIQUE NOT NULL,
                    STAGE TEXT,
                    STATUS TEXT DEFAULT 'PENDING',
                    CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    LAST_UPDATED TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );
            """)
            await db.execute("""
                INSERT OR IGNORE INTO PIPELINES (ID, NAME, DESCRIPTION, TABLE_NAME, RETENTION_DAYS, ENABLED)
                VALUES ('default', 'Default Pipeline', 'Primary telemetry and workflow pipeline', 'PIPELINE_DEFAULT', 30, 1);
            """)

            # 2. Extensible ERROR_INDEX catalog
            await db.execute("""
                CREATE TABLE IF NOT EXISTS ERROR_INDEX (
                    ERROR_CODE TEXT PRIMARY KEY,
                    CATEGORY TEXT NOT NULL,
                    SEVERITY TEXT NOT NULL,
                    DESCRIPTION TEXT NOT NULL,
                    TRIGGER_CONDITION TEXT DEFAULT '',
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

            # 4. Dual-Mode CUSTOM_VIEWS & Persistent Tables Registry
            await db.execute("""
                CREATE TABLE IF NOT EXISTS CUSTOM_VIEWS (
                    ID INTEGER PRIMARY KEY AUTOINCREMENT,
                    VIEW_NAME TEXT UNIQUE NOT NULL,
                    SQL_QUERY TEXT NOT NULL,
                    MODE TEXT DEFAULT 'VIEW',
                    SYNC_KEY_COLUMN TEXT DEFAULT 'PIPELINE_KEY',
                    REFRESH_INTERVAL_SECONDS INTEGER DEFAULT NULL,
                    LAST_SYNCED_AT TIMESTAMP DEFAULT NULL,
                    IS_PRESET INTEGER DEFAULT 0,
                    CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );
            """)

            cursor = await db.execute("PRAGMA table_info(CUSTOM_VIEWS);")
            view_cols = {row["name"].upper() for row in await cursor.fetchall()}
            if "MODE" not in view_cols:
                await db.execute("ALTER TABLE CUSTOM_VIEWS ADD COLUMN MODE TEXT DEFAULT 'VIEW';")
            if "SYNC_KEY_COLUMN" not in view_cols:
                await db.execute("ALTER TABLE CUSTOM_VIEWS ADD COLUMN SYNC_KEY_COLUMN TEXT DEFAULT 'PIPELINE_KEY';")
            if "REFRESH_INTERVAL_SECONDS" not in view_cols:
                await db.execute("ALTER TABLE CUSTOM_VIEWS ADD COLUMN REFRESH_INTERVAL_SECONDS INTEGER DEFAULT NULL;")
            if "LAST_SYNCED_AT" not in view_cols:
                await db.execute("ALTER TABLE CUSTOM_VIEWS ADD COLUMN LAST_SYNCED_AT TIMESTAMP DEFAULT NULL;")

            # Service-agnostic Baseline Seed for ERROR_INDEX
            baseline_errors = [
                ("ERR_DISK_UNMOUNTED", "STORAGE", "CRITICAL", "Storage disk unmounted or unavailable", "mounted == false", "Run 'sudo mount -a' and verify /etc/fstab"),
                ("ERR_FS_READONLY", "STORAGE", "CRITICAL", "Storage mounted read-only due to dirty bit or I/O error", "readonly == true", "Check dmesg for I/O errors and remount with rw,force"),
                ("ERR_DB_CORRUPTION", "DATABASE", "CRITICAL", "Database integrity error detected", "integrity_check == false", "Verify and vacuum target SQLite database"),
                ("WARN_DB_ORPHAN_RECORDS", "DATABASE", "WARNING", "Orphan records detected in service database", "orphan_count > 0", "Clean orphan rows using maintenance tool"),
                ("ERR_VFS_PATH_MISSING", "VFS", "CRITICAL", "Broken symlinks detected in virtual filesystem", "broken_links > 0", "Run 'fixperms' to clean broken symlinks"),
                ("ERR_CONTAINER_DOWN", "DOCKER", "CRITICAL", "Core service container is stopped or unhealthy", "status != 'running'", "Run 'docker start <container>' or check logs"),
                ("WARN_PERM_DRIFT", "PERMISSIONS", "WARNING", "Permissions or ownership drift detected on AppData", "ownership_drift == true", "Run 'fixperms' on host to reconcile 1000:1000"),
                ("WARN_PIPELINE_STALLED", "PIPELINE", "WARNING", "Pipeline item stalled in stage beyond timeout threshold", "pending_minutes > timeout_minutes", "Inspect upstream service connectivity and stage predicates"),
                ("INFO_CONTAINER_UPDATE", "UPDATES", "INFO", "Outdated container image detected", "update_available == true", "Run 'updateapps' on host to pull latest images"),
            ]

            for code, cat, sev, desc, cond, rem in baseline_errors:
                await db.execute("""
                    INSERT OR IGNORE INTO ERROR_INDEX (ERROR_CODE, CATEGORY, SEVERITY, DESCRIPTION, TRIGGER_CONDITION, REMEDY)
                    VALUES (?, ?, ?, ?, ?, ?);
                """, (code, cat, sev, desc, cond, rem))

            await db.commit()

    def validate_pipeline_table_name(self, table_name: str) -> str:
        clean_table = table_name.strip().upper()
        if not clean_table.startswith("PIPELINE_"):
            clean_table = f"PIPELINE_{clean_table}"
        if not SQL_IDENTIFIER_REGEX.match(clean_table):
            raise ValueError(f"Invalid pipeline table name '{clean_table}'")
        return clean_table

    async def ensure_pipeline_table(
        self,
        table_name: str,
        pipeline_id: str | None = None,
        name: str | None = None,
        description: str = "",
        retention_days: int = 30,
        enabled: bool = True,
    ) -> str:
        """Dynamically provision a PIPELINE_<SLUG> table and register it in PIPELINES."""
        clean_table = self.validate_pipeline_table_name(table_name)
        pid = (pipeline_id or clean_table.removeprefix("PIPELINE_").lower()).strip()
        disp_name = (name or pid).strip()

        async with self.get_connection() as db:
            await db.execute(f"""
                CREATE TABLE IF NOT EXISTS {clean_table} (
                    ID INTEGER PRIMARY KEY AUTOINCREMENT,
                    PIPELINE_KEY TEXT UNIQUE NOT NULL,
                    STAGE TEXT,
                    STATUS TEXT DEFAULT 'PENDING',
                    CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    LAST_UPDATED TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );
            """)
            await db.execute("""
                INSERT INTO PIPELINES (ID, NAME, DESCRIPTION, TABLE_NAME, RETENTION_DAYS, ENABLED)
                VALUES (?, ?, ?, ?, ?, ?)
                ON CONFLICT(ID) DO UPDATE SET
                    NAME = excluded.NAME,
                    DESCRIPTION = excluded.DESCRIPTION,
                    TABLE_NAME = excluded.TABLE_NAME,
                    RETENTION_DAYS = excluded.RETENTION_DAYS,
                    ENABLED = excluded.ENABLED;
            """, (pid, disp_name, description, clean_table, int(retention_days), 1 if enabled else 0))
            await db.commit()
        return clean_table

    async def drop_pipeline_table(self, pipeline_id: str, table_name: str) -> None:
        """Drop a dynamically provisioned pipeline table and remove it from PIPELINES registry."""
        clean_table = self.validate_pipeline_table_name(table_name)
        async with self.get_connection() as db:
            await db.execute(f"DROP TABLE IF EXISTS {clean_table};")
            await db.execute("DELETE FROM PIPELINES WHERE ID = ? OR TABLE_NAME = ?;", (pipeline_id, clean_table))
            try:
                await db.execute("DELETE FROM sqlite_sequence WHERE name = ?;", (clean_table,))
            except Exception:
                pass
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

    async def sync_dynamic_columns(
        self,
        services_or_settings: Any,
        pipelines: Optional[Dict[str, Any]] = None,
        stages: Optional[List[Any]] = None,
    ) -> None:
        """Ensure all configured pipeline tables exist and synchronize target columns from assigned services."""
        if hasattr(services_or_settings, "services"):
            services = services_or_settings.services
            pipelines = getattr(services_or_settings, "pipelines", None)
            stages = getattr(services_or_settings, "stages", None)
        else:
            services = services_or_settings or {}

        if not pipelines:
            await self.ensure_pipeline_table("PIPELINE_DEFAULT", pipeline_id="default", name="Default Pipeline")
            target_tables_by_pid = {"default": "PIPELINE_DEFAULT"}
        else:
            target_tables_by_pid = {}
            for pid, pcfg in pipelines.items():
                t_name = pcfg.resolved_table_name() if hasattr(pcfg, "resolved_table_name") else (pcfg.get("table_name") or f"PIPELINE_{pid.upper()}")
                p_name = getattr(pcfg, "name", None) or (pcfg.get("name") if isinstance(pcfg, dict) else pid)
                p_desc = getattr(pcfg, "description", "") if not isinstance(pcfg, dict) else pcfg.get("description", "")
                p_ret = getattr(pcfg, "retention_days", 30) if not isinstance(pcfg, dict) else pcfg.get("retention_days", 30)
                p_en = getattr(pcfg, "enabled", True) if not isinstance(pcfg, dict) else pcfg.get("enabled", True)
                clean_t = await self.ensure_pipeline_table(t_name, pipeline_id=pid, name=p_name, description=p_desc, retention_days=p_ret, enabled=p_en)
                target_tables_by_pid[pid] = clean_t

        if not services:
            return

        # Map each pipeline to the services assigned via its stages (or all services if stages do not restrict pipelines)
        pipeline_services: Dict[str, set[str]] = {pid: set() for pid in target_tables_by_pid}
        if stages:
            for st in stages:
                st_pids = getattr(st, "pipeline_ids", None) or (st.get("pipeline_ids") if isinstance(st, dict) else None) or list(target_tables_by_pid.keys())
                st_sids = getattr(st, "service_ids", None) or (st.get("service_ids") if isinstance(st, dict) else None) or []
                for pid in st_pids:
                    if pid in pipeline_services:
                        pipeline_services[pid].update(st_sids)

        for pid, table_name in target_tables_by_pid.items():
            sids_for_pipe = pipeline_services.get(pid) or set(services.keys())
            for service_name in sids_for_pipe:
                service_conf = services.get(service_name)
                if not service_conf:
                    continue
                field_mappings = getattr(service_conf, "field_mappings", None)
                if field_mappings is None and isinstance(service_conf, dict):
                    field_mappings = service_conf.get("field_mappings", [])
                if not field_mappings:
                    continue

                for mapping in field_mappings:
                    target_col = getattr(mapping, "target_column", None)
                    if target_col is None and isinstance(mapping, dict):
                        target_col = mapping.get("target_column")
                    if not target_col:
                        continue

                    data_type = getattr(mapping, "data_type", "TEXT")
                    if isinstance(mapping, dict):
                        data_type = mapping.get("data_type", "TEXT") or "TEXT"

                    clean_col = str(target_col).strip().upper()
                    if clean_col in SYSTEM_RESERVED_COLUMNS:
                        continue

                    try:
                        await self.ensure_column(table_name, clean_col, data_type)
                    except Exception as e:
                        print(f"[!] Warning ensuring column {clean_col} on {table_name} for service '{service_name}': {e}")

    async def prune_pipeline_retention(self, table_name: str, retention_days: int) -> int:
        """Delete SINK records whose LAST_UPDATED is older than retention_days."""
        if retention_days is None or int(retention_days) <= 0:
            return 0
        clean_table = self.validate_pipeline_table_name(table_name)
        days = int(retention_days)
        async with self.get_connection() as db:
            cursor = await db.execute(
                f"""
                DELETE FROM {clean_table}
                WHERE STATUS = 'SINK'
                  AND datetime(LAST_UPDATED) <= datetime('now', '-' || ? || ' days');
                """,
                (days,),
            )
            await db.commit()
            return cursor.rowcount

    async def sync_custom_table(self, view_name: str) -> Dict[str, Any]:
        """Materialize and incrementally upsert rows from source SELECT query into a persistent Custom Table."""
        clean_name = view_name.strip().upper()
        if not SQL_IDENTIFIER_REGEX.match(clean_name):
            raise ValueError(f"Invalid custom table name '{clean_name}'")

        meta_rows = await self.query("SELECT * FROM CUSTOM_VIEWS WHERE VIEW_NAME = ?;", (clean_name,))
        if not meta_rows:
            raise ValueError(f"Custom table '{clean_name}' is not registered in CUSTOM_VIEWS")

        meta = meta_rows[0]
        mode = (meta.get("MODE") or "VIEW").upper()
        if mode != "TABLE":
            raise ValueError(f"'{clean_name}' is a virtual VIEW, not a persistent TABLE")

        raw_sql = (meta.get("SQL_QUERY") or "").strip().rstrip(";")
        # If SQL_QUERY was stored as CREATE VIEW ... AS SELECT ..., extract the SELECT part
        select_match = re.search(r"\bAS\s+(SELECT\s+.+)$", raw_sql, flags=re.IGNORECASE | re.DOTALL)
        select_sql = select_match.group(1).strip() if select_match else raw_sql
        if not select_sql.upper().startswith("SELECT"):
            raise ValueError(f"Invalid SELECT query for custom table '{clean_name}'")

        sync_key = (meta.get("SYNC_KEY_COLUMN") or "PIPELINE_KEY").strip().upper()
        if not SQL_IDENTIFIER_REGEX.match(sync_key):
            sync_key = "PIPELINE_KEY"

        async with self.get_connection() as db:
            cursor = await db.execute(select_sql)
            source_rows = await cursor.fetchall()
            col_names = [desc[0].strip().upper() for desc in (cursor.description or []) if desc and desc[0]]

            if not col_names:
                return {"success": True, "view_name": clean_name, "upserted_rows": 0}

            if sync_key not in col_names:
                sync_key = col_names[0]

            # Ensure physical destination table exists with UNIQUE sync_key
            col_defs = []
            for col in col_names:
                if not SQL_IDENTIFIER_REGEX.match(col):
                    raise ValueError(f"Invalid projected column identifier '{col}' in custom table query")
                if col == sync_key:
                    col_defs.append(f'"{col}" TEXT UNIQUE NOT NULL')
                else:
                    col_defs.append(f'"{col}" TEXT')
            if "LAST_SYNCED_AT" not in col_names:
                col_defs.append('"LAST_SYNCED_AT" TIMESTAMP DEFAULT CURRENT_TIMESTAMP')

            await db.execute(f"CREATE TABLE IF NOT EXISTS {clean_name} ({', '.join(col_defs)});")

            # Ensure any newly added columns exist on the physical table
            tbl_cursor = await db.execute(f"PRAGMA table_info({clean_name});")
            existing_cols = {r["name"].upper() for r in await tbl_cursor.fetchall()}
            for col in col_names:
                if col not in existing_cols:
                    await db.execute(f'ALTER TABLE {clean_name} ADD COLUMN "{col}" TEXT;')

            upserted = 0
            non_key_cols = [c for c in col_names if c != sync_key]
            placeholders = ", ".join(["?"] * len(col_names))
            quoted_cols = ", ".join([f'"{c}"' for c in col_names])

            if non_key_cols:
                update_set = ", ".join([f'"{c}" = excluded."{c}"' for c in non_key_cols])
                if "LAST_SYNCED_AT" not in col_names and "LAST_SYNCED_AT" in existing_cols:
                    update_set += ', "LAST_SYNCED_AT" = CURRENT_TIMESTAMP'
                change_cond = " OR ".join([f'{clean_name}."{c}" IS NOT excluded."{c}"' for c in non_key_cols])
                upsert_sql = f"""
                    INSERT INTO {clean_name} ({quoted_cols})
                    VALUES ({placeholders})
                    ON CONFLICT("{sync_key}") DO UPDATE SET {update_set}
                    WHERE {change_cond};
                """
            else:
                upsert_sql = f"""
                    INSERT OR IGNORE INTO {clean_name} ({quoted_cols})
                    VALUES ({placeholders});
                """

            for s_row in source_rows:
                row_dict = {k.strip().upper(): s_row[k] for k in s_row.keys()}
                if row_dict.get(sync_key) is None:
                    continue
                vals = tuple(row_dict.get(c) for c in col_names)
                res = await db.execute(upsert_sql, vals)
                if res.rowcount and res.rowcount > 0:
                    upserted += res.rowcount

            await db.execute(
                "UPDATE CUSTOM_VIEWS SET LAST_SYNCED_AT = CURRENT_TIMESTAMP WHERE VIEW_NAME = ?;",
                (clean_name,),
            )
            await db.commit()

        return {
            "success": True,
            "view_name": clean_name,
            "synced_rows": upserted,
            "upserted_rows": upserted,
            "total_source_rows": len(source_rows),
        }

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
