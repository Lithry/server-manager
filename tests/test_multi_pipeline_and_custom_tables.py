"""Integration tests for Multi-Pipeline, Stage-Driven Cycles, Passive SINK, Retention, and Custom Tables."""

import os
import tempfile
import unittest
from unittest.mock import AsyncMock, MagicMock, patch

from src.core.config import FieldMapping, PipelineConfig, ServiceConfig, Settings, StageConfig
from src.core.database import DatabaseManager
from src.core.scheduler import TaskScheduler


class TestMultiPipelineAndCustomTables(unittest.IsolatedAsyncioTestCase):
    """Verify multi-pipeline schema, passive SINK updates, retention pruning, and persistent custom tables."""

    async def asyncSetUp(self):
        self.temp_dir = tempfile.TemporaryDirectory()
        self.db_path = os.path.join(self.temp_dir.name, "test_server_manager.db")
        self.db = DatabaseManager(db_path=self.db_path)
        await self.db.initialize_schema()

    async def asyncTearDown(self):
        self.temp_dir.cleanup()

    async def test_destructive_drop_of_legacy_tables_and_multi_pipeline_sync(self):
        """Verify legacy SERVICES_PIPELINE is dropped and multiple PIPELINE_<SLUG> tables sync dynamic columns."""
        # Create a fake legacy SERVICES_PIPELINE table and re-run initialize_schema
        await self.db.execute("CREATE TABLE SERVICES_PIPELINE (ID INTEGER PRIMARY KEY);")
        await self.db.initialize_schema()

        legacy_check = await self.db.query(
            "SELECT name FROM sqlite_master WHERE type='table' AND name IN ('SERVICES_PIPELINE', 'SERVICE_PIPELINE');"
        )
        self.assertEqual(legacy_check, [])

        # Configure two pipelines: alpha and beta
        settings = Settings(
            pipelines={
                "default": PipelineConfig(id="default", name="Default", retention_days=7),
                "alpha": PipelineConfig(id="alpha", name="Alpha Telemetry", retention_days=14),
                "beta": PipelineConfig(id="beta", name="Beta Telemetry", retention_days=30),
            },
            stages=[
                StageConfig(
                    id="root_alpha",
                    name="Root Alpha",
                    pipeline_ids=["alpha"],
                    service_ids=["svc_a"],
                    interval_seconds=60,
                ),
                StageConfig(
                    id="root_beta",
                    name="Root Beta",
                    pipeline_ids=["beta"],
                    service_ids=["svc_b"],
                    interval_seconds=120,
                ),
            ],
            services={
                "svc_a": ServiceConfig(
                    name="Service A",
                    field_mappings=[FieldMapping(source_field="metric_a", target_column="METRIC_A", data_type="INTEGER")],
                ),
                "svc_b": ServiceConfig(
                    name="Service B",
                    field_mappings=[FieldMapping(source_field="metric_b", target_column="METRIC_B", data_type="TEXT")],
                ),
            },
        )

        await self.db.sync_dynamic_columns(settings)

        alpha_cols = {c["name"] for c in await self.db.get_table_columns("PIPELINE_ALPHA")}
        beta_cols = {c["name"] for c in await self.db.get_table_columns("PIPELINE_BETA")}

        self.assertIn("METRIC_A", alpha_cols)
        self.assertNotIn("METRIC_B", alpha_cols)

        self.assertIn("METRIC_B", beta_cols)
        self.assertNotIn("METRIC_A", beta_cols)

    async def test_passive_sink_transition_and_in_place_root_update(self):
        """Verify passive SINK stages do not poll, receive rows via start_condition, and update in-place on new Root events."""
        settings = Settings(
            pipelines={
                "default": PipelineConfig(id="default", name="Default", retention_days=7),
            },
            stages=[
                StageConfig(
                    id="ingest",
                    name="Ingest Root",
                    order=1,
                    enabled=True,
                    pipeline_ids=["default"],
                    service_ids=["svc_sensor"],
                    interval_seconds=300,
                    grace_period_minutes=0,
                    start_condition=None,
                    complete_condition="STATE == 'READY'",
                ),
                StageConfig(
                    id="archive_sink",
                    name="Archive Sink",
                    order=2,
                    enabled=True,
                    pipeline_ids=["default"],
                    service_ids=[],
                    interval_seconds=300,
                    start_condition="stage.ingest.completed AND STATE == 'READY'",
                    complete_condition=None,  # Passive Sink stage
                ),
            ],
            services={
                "svc_sensor": ServiceConfig(
                    name="Sensor API",
                    enabled=True,
                    base_url="http://sensor.local",
                    poll_endpoint="/events",
                    pipeline_key_template="sensor:{id}",
                    field_mappings=[
                        FieldMapping(source_field="state", target_column="STATE"),
                        FieldMapping(source_field="reading", target_column="READING", data_type="INTEGER"),
                    ],
                )
            },
        )
        await self.db.sync_dynamic_columns(settings)

        sched = TaskScheduler()
        # Mock HTTP response 1: item 500 arrives with state='READY', reading=10
        resp_1 = MagicMock()
        resp_1.status_code = 200
        resp_1.headers = {"Date": "Sat, 17 Oct 2026 12:00:00 GMT"}
        resp_1.json.return_value = [
            {"id": 500, "state": "READY", "reading": 10, "date": "2026-10-17T11:59:00Z"},
            # Old event outside 5m lookback window (11:40 vs 12:00) must be skipped
            {"id": 501, "state": "READY", "reading": 99, "date": "2026-10-17T11:40:00Z"},
        ]

        with patch("src.core.scheduler.config_manager.get_settings", new_callable=AsyncMock, return_value=settings), \
             patch("src.core.scheduler.db_manager", self.db), \
             patch("src.core.scheduler.httpx.AsyncClient.get", new_callable=AsyncMock, return_value=resp_1):

            await sched.run_stage_cycle("ingest")

        rows = await self.db.query("SELECT * FROM PIPELINE_DEFAULT;")
        self.assertEqual(len(rows), 1)
        row = rows[0]
        self.assertEqual(row["PIPELINE_KEY"], "sensor:500")
        # Row completed 'ingest' and immediately transitioned into passive sink 'archive_sink' with STATUS='SINK'
        self.assertEqual(row["STAGE"], "archive_sink")
        self.assertEqual(row["STATUS"], "SINK")
        self.assertEqual(row["READING"], 10)
        # CREATED_AT must not be the upstream '2026-10-17T11:59:00Z' string
        self.assertNotEqual(row["CREATED_AT"], "2026-10-17T11:59:00Z")

        # Now a new event arrives in Root stage for sensor:500 with updated reading=42
        resp_2 = MagicMock()
        resp_2.status_code = 200
        resp_2.headers = {"Date": "Sat, 17 Oct 2026 12:03:00 GMT"}
        resp_2.json.return_value = [
            {"id": 500, "state": "READY", "reading": 42, "date": "2026-10-17T12:02:30Z"},
        ]

        with patch("src.core.scheduler.config_manager.get_settings", new_callable=AsyncMock, return_value=settings), \
             patch("src.core.scheduler.db_manager", self.db), \
             patch("src.core.scheduler.httpx.AsyncClient.get", new_callable=AsyncMock, return_value=resp_2):

            await sched.run_stage_cycle("ingest")

        rows_after = await self.db.query("SELECT * FROM PIPELINE_DEFAULT WHERE PIPELINE_KEY = 'sensor:500';")
        self.assertEqual(len(rows_after), 1)
        self.assertEqual(rows_after[0]["STAGE"], "archive_sink")
        self.assertEqual(rows_after[0]["STATUS"], "SINK")
        self.assertEqual(rows_after[0]["READING"], 42)

    async def test_retention_pruning_and_persistent_custom_table_survival(self):
        """Verify retention deletes only expired SINK rows by LAST_UPDATED while persistent TABLE retains history."""
        settings = Settings(
            pipelines={"default": PipelineConfig(id="default", name="Default", retention_days=7)},
            services={
                "svc": ServiceConfig(
                    name="Svc",
                    field_mappings=[FieldMapping(source_field="title", target_column="TITLE")],
                )
            },
        )
        await self.db.sync_dynamic_columns(settings)

        # Insert 3 rows:
        # 1. Expired SINK row (LAST_UPDATED 10 days ago) -> should be pruned from PIPELINE_DEFAULT
        # 2. Recent SINK row (LAST_UPDATED now) -> should be kept
        # 3. Old PENDING row (LAST_UPDATED 10 days ago, but STATUS='PENDING') -> should be kept
        await self.db.execute(
            """
            INSERT INTO PIPELINE_DEFAULT (PIPELINE_KEY, STAGE, STATUS, TITLE, LAST_UPDATED)
            VALUES
                ('item:expired_sink', 'archive', 'SINK', 'Expired Sink Item', datetime('now', '-10 days')),
                ('item:recent_sink', 'archive', 'SINK', 'Recent Sink Item', datetime('now', '-1 days')),
                ('item:old_pending', 'ingest', 'PENDING', 'Old Pending Item', datetime('now', '-10 days'));
            """
        )

        # Register a persistent Custom Table (MODE = 'TABLE') before retention pruning
        await self.db.execute(
            """
            INSERT INTO CUSTOM_VIEWS (VIEW_NAME, SQL_QUERY, MODE, SYNC_KEY_COLUMN, REFRESH_INTERVAL_SECONDS, IS_PRESET)
            VALUES ('PERSISTENT_ARCHIVE', 'SELECT PIPELINE_KEY, TITLE, STATUS FROM PIPELINE_DEFAULT WHERE STATUS = ''SINK''', 'TABLE', 'PIPELINE_KEY', 60, 0);
            """
        )
        sync_res = await self.db.sync_custom_table("PERSISTENT_ARCHIVE")
        self.assertEqual(sync_res["synced_rows"], 2)

        # Run retention pruning (7 days) on PIPELINE_DEFAULT
        deleted = await self.db.prune_pipeline_retention("PIPELINE_DEFAULT", 7)
        self.assertEqual(deleted, 1)

        remaining_pipeline = await self.db.query("SELECT PIPELINE_KEY FROM PIPELINE_DEFAULT ORDER BY PIPELINE_KEY;")
        remaining_keys = [r["PIPELINE_KEY"] for r in remaining_pipeline]
        self.assertEqual(remaining_keys, ["item:old_pending", "item:recent_sink"])

        # Verify that PERSISTENT_ARCHIVE still retains 'item:expired_sink' even after it was pruned from PIPELINE_DEFAULT!
        custom_table_rows = await self.db.query("SELECT * FROM PERSISTENT_ARCHIVE ORDER BY PIPELINE_KEY;")
        self.assertEqual(len(custom_table_rows), 2)
        self.assertEqual(custom_table_rows[0]["PIPELINE_KEY"], "item:expired_sink")
        self.assertEqual(custom_table_rows[1]["PIPELINE_KEY"], "item:recent_sink")


if __name__ == "__main__":
    unittest.main()
