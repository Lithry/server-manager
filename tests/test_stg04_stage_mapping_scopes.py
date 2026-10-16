"""Unit test suite for STG-04: Stage-Scoped Field Mapping Selection & Granular Column Execution."""

import asyncio
import unittest
from unittest.mock import AsyncMock, MagicMock, patch

from src.core.config import StageConfig, ServiceConfig, FieldMapping, Settings
from src.core.scheduler import TaskScheduler
from src.api.settings import update_settings


class TestStg04StageMappingScopes(unittest.IsolatedAsyncioTestCase):
    """Test suite covering Stage-Scoped Field Mapping Selection & Granular Column Execution."""

    def test_stage_config_default_scope(self):
        """Verify StageConfig defaults service_mapping_scopes to an empty dictionary."""
        stage = StageConfig(id="test_stage", name="Test Stage")
        self.assertIsInstance(stage.service_mapping_scopes, dict)
        self.assertEqual(stage.service_mapping_scopes, {})

        # Verify explicit scope population
        custom_stage = StageConfig(
            id="custom_stage",
            name="Custom Stage",
            service_mapping_scopes={"sonarr": ["TITLE", "SEASON"]}
        )
        self.assertEqual(custom_stage.service_mapping_scopes, {"sonarr": ["TITLE", "SEASON"]})

    async def test_update_settings_scope_sanitization_and_pruning(self):
        """Verify update_settings sanitizes, normalizes, deduplicates, and prunes scopes."""
        svc = ServiceConfig(
            name="Sonarr",
            base_url="http://sonarr:8989",
            field_mappings=[
                FieldMapping(source_field="title", target_column="TITLE"),
                FieldMapping(source_field="season", target_column="SEASON"),
            ]
        )
        stage1 = StageConfig(
            id="stage_1",
            name="Stage 1",
            service_ids=["sonarr"],
            service_mapping_scopes={
                "sonarr": ["title", "  season ", "TITLE", "NON_EXISTENT"],
                "unassigned_svc": ["SOME_COL"],
            }
        )
        stage2 = StageConfig(
            id="stage_2",
            name="Stage 2",
            service_ids=["sonarr"],
            service_mapping_scopes={
                "sonarr": ["INVALID_ONLY"],
            }
        )
        settings = Settings(
            stages=[stage1, stage2],
            services={"sonarr": svc}
        )

        with patch("src.api.settings.config_manager.get_settings", new_callable=AsyncMock) as mock_get_old, \
             patch("src.api.settings.config_manager.update_settings", new_callable=AsyncMock) as mock_update, \
             patch("src.api.settings.db_manager.get_table_columns", new_callable=AsyncMock) as mock_get_cols, \
             patch("src.api.settings.db_manager.sync_dynamic_columns", new_callable=AsyncMock), \
             patch("src.api.settings.scheduler.restart", new_callable=AsyncMock):

            mock_get_old.return_value = Settings(stages=[stage1, stage2], services={"sonarr": svc})
            mock_get_cols.return_value = [{"name": "TITLE"}, {"name": "SEASON"}]
            mock_update.side_effect = lambda s: s

            updated = await update_settings(settings)

            # Stage 1: "unassigned_svc" pruned, "NON_EXISTENT" pruned, normalized & deduplicated to ["TITLE", "SEASON"]
            self.assertIn("sonarr", updated.stages[0].service_mapping_scopes)
            self.assertEqual(updated.stages[0].service_mapping_scopes["sonarr"], ["TITLE", "SEASON"])
            self.assertNotIn("unassigned_svc", updated.stages[0].service_mapping_scopes)

            # Stage 2: "INVALID_ONLY" resulted in empty list -> "sonarr" key pruned so it cleanly defaults to all columns
            self.assertNotIn("sonarr", updated.stages[1].service_mapping_scopes)
            self.assertEqual(updated.stages[1].service_mapping_scopes, {})

    async def test_update_settings_column_rename_synchronization(self):
        """Verify renaming a service target column updates matching names in service_mapping_scopes."""
        old_svc = ServiceConfig(
            name="Sonarr",
            field_mappings=[FieldMapping(source_field="season", target_column="SEASON_OLD")]
        )
        new_svc = ServiceConfig(
            name="Sonarr",
            field_mappings=[FieldMapping(source_field="season", target_column="SEASON_NEW")]
        )
        stage = StageConfig(
            id="stage_1",
            name="Stage 1",
            service_ids=["sonarr"],
            service_mapping_scopes={"sonarr": ["SEASON_OLD"]}
        )
        new_settings = Settings(
            stages=[stage],
            services={"sonarr": new_svc}
        )

        with patch("src.api.settings.config_manager.get_settings", new_callable=AsyncMock) as mock_get_old, \
             patch("src.api.settings.config_manager.update_settings", new_callable=AsyncMock) as mock_update, \
             patch("src.api.settings.db_manager.get_table_columns", new_callable=AsyncMock) as mock_get_cols, \
             patch("src.api.settings.db_manager.rename_column", new_callable=AsyncMock) as mock_rename, \
             patch("src.api.settings.db_manager.sync_dynamic_columns", new_callable=AsyncMock), \
             patch("src.api.settings.scheduler.restart", new_callable=AsyncMock):

            mock_get_old.return_value = Settings(
                stages=[StageConfig(id="stage_1", name="Stage 1", service_ids=["sonarr"])],
                services={"sonarr": old_svc}
            )
            mock_get_cols.return_value = [{"name": "SEASON_OLD"}]
            mock_update.side_effect = lambda s: s

            updated = await update_settings(new_settings)

            # Scope should now contain SEASON_NEW
            self.assertEqual(updated.stages[0].service_mapping_scopes["sonarr"], ["SEASON_NEW"])
            mock_rename.assert_awaited_once_with("SERVICES_PIPELINE", "SEASON_OLD", "SEASON_NEW")

    async def test_execute_consumer_enrichment_scope_filtering(self):
        """Verify _execute_consumer_enrichment only updates scoped columns and skips unscoped ones."""
        scheduler_instance = TaskScheduler()
        service_cfg = ServiceConfig(
            name="Sonarr",
            field_mappings=[
                FieldMapping(source_field="title", target_column="TITLE"),
                FieldMapping(source_field="season", target_column="SEASON", data_type="INTEGER"),
            ]
        )
        row_dict = {
            "ID": 42,
            "PIPELINE_KEY": "sonarr:100",
            "title": "Breaking Bad",
            "season": 5,
            "TITLE": None,
            "SEASON": None,
        }
        table_cols = {"TITLE", "SEASON"}

        with patch("src.core.scheduler.db_manager.execute", new_callable=AsyncMock) as mock_execute:
            # Case A: Scoped only to "TITLE" -> SEASON should not be updated
            updated = await scheduler_instance._execute_consumer_enrichment(
                service_cfg=service_cfg,
                row_dict=row_dict,
                table_cols=table_cols,
                service_id="sonarr",
                allowed_columns={"TITLE"}
            )
            self.assertTrue(updated)
            mock_execute.assert_awaited_once()
            executed_sql = mock_execute.call_args[0][0]
            executed_vals = mock_execute.call_args[0][1]
            self.assertIn("TITLE = ?", executed_sql)
            self.assertNotIn("SEASON = ?", executed_sql)
            self.assertEqual(executed_vals, ("Breaking Bad", 42))

        with patch("src.core.scheduler.db_manager.execute", new_callable=AsyncMock) as mock_execute:
            # Case B: Unscoped (allowed_columns=None) -> both TITLE and SEASON should be updated
            updated = await scheduler_instance._execute_consumer_enrichment(
                service_cfg=service_cfg,
                row_dict=row_dict,
                table_cols=table_cols,
                service_id="sonarr",
                allowed_columns=None
            )
            self.assertTrue(updated)
            mock_execute.assert_awaited_once()
            executed_sql = mock_execute.call_args[0][0]
            self.assertIn("TITLE = ?", executed_sql)
            self.assertIn("SEASON = ?", executed_sql)

    async def test_update_mapped_values_for_stage_passes_allowed_cols(self):
        """Verify _update_mapped_values_for_stage extracts stage scope and passes it to enrichment."""
        scheduler_instance = TaskScheduler()
        stage = StageConfig(
            id="recognition",
            name="Recognition",
            service_ids=["sonarr"],
            service_mapping_scopes={"sonarr": ["TITLE"]}
        )
        service_cfg = ServiceConfig(name="Sonarr", enabled=True)
        settings = Settings(services={"sonarr": service_cfg})

        with patch("src.core.scheduler.db_manager.query", new_callable=AsyncMock) as mock_query, \
             patch.object(scheduler_instance, "_execute_consumer_enrichment", new_callable=AsyncMock) as mock_enrich:

            mock_query.return_value = [{"ID": 10, "PIPELINE_KEY": "sonarr:10"}]
            mock_enrich.return_value = True

            res = await scheduler_instance._update_mapped_values_for_stage(
                stage=stage,
                row_id=10,
                table_cols={"TITLE", "SEASON"},
                settings=settings
            )

            self.assertTrue(res)
            mock_enrich.assert_awaited_once()
            call_kwargs = mock_enrich.call_args.kwargs
            self.assertEqual(call_kwargs.get("allowed_columns"), {"TITLE"})

    async def test_trigger_now_root_stage_scope_filtering(self):
        """Verify trigger_now filters mapped columns by active_stage.service_mapping_scopes."""
        scheduler_instance = TaskScheduler()
        stage = StageConfig(
            id="ingest",
            name="Ingest",
            enabled=True,
            start_condition=None,
            service_ids=["sonarr"],
            service_mapping_scopes={"sonarr": ["TITLE"]}
        )
        service_cfg = ServiceConfig(
            name="Sonarr",
            enabled=True,
            base_url="http://sonarr:8989",
            poll_endpoint="/api/v3/history",
            pipeline_key_template="sonarr:{id}",
            field_mappings=[
                FieldMapping(source_field="title", target_column="TITLE"),
                FieldMapping(source_field="season", target_column="SEASON", data_type="INTEGER"),
            ]
        )
        settings = Settings(stages=[stage], services={"sonarr": service_cfg})

        mock_resp = MagicMock()
        mock_resp.status_code = 200
        mock_resp.json.return_value = [{"id": 101, "title": "Test Title", "season": 2, "eventType": "grabbed"}]

        with patch("src.core.scheduler.config_manager.get_settings", new_callable=AsyncMock) as mock_get_settings, \
             patch("src.core.scheduler.db_manager.get_table_columns", new_callable=AsyncMock) as mock_cols, \
             patch("src.core.scheduler.db_manager.query", new_callable=AsyncMock) as mock_query, \
             patch("src.core.scheduler.db_manager.execute", new_callable=AsyncMock) as mock_execute, \
             patch("src.core.scheduler.httpx.AsyncClient.get", new_callable=AsyncMock) as mock_http_get, \
             patch.object(scheduler_instance, "_get_service_tags", new_callable=AsyncMock) as mock_tags:

            mock_get_settings.return_value = settings
            mock_cols.return_value = [{"name": "TITLE"}, {"name": "SEASON"}]
            mock_query.return_value = []  # No existing row
            mock_http_get.return_value = mock_resp
            mock_tags.return_value = {}

            status = await scheduler_instance.trigger_now("sonarr")
            self.assertEqual(status["status"], "success")
            self.assertEqual(status["new_items"], 1)

            mock_execute.assert_awaited_once()
            insert_sql = mock_execute.call_args[0][0]
            insert_vals = mock_execute.call_args[0][1]

            # TITLE should be in insert_sql, SEASON must NOT be in insert_sql
            self.assertIn("TITLE", insert_sql)
            self.assertNotIn("SEASON", insert_sql)
            self.assertIn("Test Title", insert_vals)


if __name__ == "__main__":
    unittest.main()

