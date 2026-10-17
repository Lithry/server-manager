"""Automated test suite for SBX-01: API Sandbox Decoupling & Direct Upstream Sampling."""

import unittest
from unittest.mock import AsyncMock, MagicMock, patch
from fastapi import HTTPException

from src.core.config import ServiceConfig, Settings
from src.api.pipeline import SandboxEnrichmentRequest, sandbox_enrichment


class TestSbx01SandboxDecoupling(unittest.IsolatedAsyncioTestCase):
    """Test suite covering SBX-01 sandbox decoupling, direct sampling, and custom context."""

    async def asyncSetUp(self):
        self.mock_service = ServiceConfig(
            name="Sonarr",
            base_url="http://sonarr:8989",
            api_key="secret123"
        )
        self.mock_settings = Settings(
            services={"sonarr": self.mock_service}
        )

    async def test_sandbox_enrichment_decoupled_custom_context(self):
        """Case 1: Fully decoupled sandbox execution with custom_context and no record_id."""
        req = SandboxEnrichmentRequest(
            service_id="sonarr",
            record_id=None,
            custom_context={"seriesId": 42, "seasonNumber": 3},
            enrichment_endpoints={"series": "/api/v3/series/{seriesId}"}
        )

        mock_resp = MagicMock()
        mock_resp.status_code = 200
        mock_resp.json.return_value = {"id": 42, "title": "Severance", "status": "continuing"}

        with patch("src.api.pipeline.config_manager.get_settings", new_callable=AsyncMock) as mock_cfg, \
             patch("src.api.pipeline.db_manager.query", new_callable=AsyncMock) as mock_db, \
             patch("httpx.AsyncClient") as mock_client_cls:

            mock_cfg.return_value = self.mock_settings
            mock_client = AsyncMock()
            mock_client.get.return_value = mock_resp
            mock_client_cls.return_value.__aenter__.return_value = mock_client

            result = await sandbox_enrichment(req)

            # DB should NOT be queried when record_id is None
            mock_db.assert_not_called()

            self.assertTrue(result["success"])
            self.assertEqual(result["context_data"]["seriesId"], 42)
            self.assertEqual(result["context_data"]["seasonNumber"], 3)
            self.assertEqual(result["context_data"]["series"]["title"], "Severance")

            # Check that logs captured the request
            logs_str = "\n".join(result["logs"])
            self.assertIn("[series] GET /api/v3/series/42", logs_str)
            self.assertIn("[series] HTTP 200", logs_str)

    async def test_sandbox_enrichment_with_direct_sample_endpoint(self):
        """Case 2: Direct sample endpoint fetching auto-populates 'sample' and root context."""
        req = SandboxEnrichmentRequest(
            service_id="sonarr",
            record_id=None,
            sample_endpoint="/api/v3/history?pageSize=1",
            enrichment_endpoints={"series": "/api/v3/series/{seriesId}"}
        )

        sample_resp = MagicMock()
        sample_resp.status_code = 200
        sample_resp.json.return_value = {
            "page": 1,
            "records": [{"id": 999, "seriesId": 105, "sourceTitle": "Test.Show.S01E01"}]
        }

        series_resp = MagicMock()
        series_resp.status_code = 200
        series_resp.json.return_value = {"id": 105, "title": "Test Show"}

        with patch("src.api.pipeline.config_manager.get_settings", new_callable=AsyncMock) as mock_cfg, \
             patch("src.api.pipeline.db_manager.query", new_callable=AsyncMock) as mock_db, \
             patch("httpx.AsyncClient") as mock_client_cls:

            mock_cfg.return_value = self.mock_settings
            mock_client = AsyncMock()
            mock_client.get.side_effect = [sample_resp, series_resp]
            mock_client_cls.return_value.__aenter__.return_value = mock_client

            result = await sandbox_enrichment(req)

            mock_db.assert_not_called()
            self.assertTrue(result["success"])
            # Root context has seriesId unpacked from records[0]
            self.assertEqual(result["context_data"]["seriesId"], 105)
            # sample namespace is populated with raw wrapper
            self.assertEqual(result["context_data"]["sample"]["records"][0]["sourceTitle"], "Test.Show.S01E01")
            # records namespace holds first record dictionary
            self.assertEqual(result["context_data"]["records"]["sourceTitle"], "Test.Show.S01E01")
            # Enrichment using placeholder from sample
            self.assertEqual(result["context_data"]["series"]["title"], "Test Show")

            logs_str = "\n".join(result["logs"])
            self.assertIn("[sample] GET /api/v3/history?pageSize=1", logs_str)
            self.assertIn("[series] GET /api/v3/series/105", logs_str)

            # Verify flattened_keys does not contain duplicate raw sample or records keys
            flattened_paths = [item["path"] for item in result["flattened_keys"]]
            self.assertFalse(any(p == "sample" or p.startswith("sample.") for p in flattened_paths))
            self.assertFalse(any(p == "records" or p.startswith("records.") for p in flattened_paths))
            self.assertIn("seriesId", flattened_paths)
            self.assertIn("sourceTitle", flattened_paths)
            self.assertIn("series.title", flattened_paths)

    async def test_sandbox_enrichment_with_record_id_and_not_found(self):
        """Case 3: record_id fetching from DB and 404 error when not found."""
        req = SandboxEnrichmentRequest(
            service_id="sonarr",
            record_id=123,
            enrichment_endpoints={}
        )

        with patch("src.api.pipeline.config_manager.get_settings", new_callable=AsyncMock) as mock_cfg, \
             patch("src.api.pipeline.db_manager.query", new_callable=AsyncMock) as mock_db:

            mock_cfg.return_value = self.mock_settings
            # Simulate not found
            mock_db.return_value = []

            with self.assertRaises(HTTPException) as ctx:
                await sandbox_enrichment(req)
            self.assertEqual(ctx.exception.status_code, 404)
            self.assertIn("123 not found", ctx.exception.detail)

            # Now simulate found
            mock_db.return_value = [{"ID": 123, "PIPELINE_KEY": "sonarr:1", "TITLE": "Existing Title"}]
            result = await sandbox_enrichment(req)
            self.assertTrue(result["success"])
            self.assertEqual(result["context_data"]["TITLE"], "Existing Title")

    async def test_sandbox_enrichment_missing_placeholder_graceful_skip(self):
        """Case 4: Missing placeholder gracefully skipped and logged."""
        req = SandboxEnrichmentRequest(
            service_id="sonarr",
            record_id=None,
            custom_context={"otherKey": "value"},
            enrichment_endpoints={"missing": "/api/v3/series/{nonExistentKey}"}
        )

        with patch("src.api.pipeline.config_manager.get_settings", new_callable=AsyncMock) as mock_cfg:
            mock_cfg.return_value = self.mock_settings
            result = await sandbox_enrichment(req)

            self.assertTrue(result["success"])
            self.assertNotIn("missing", result["context_data"])
            logs_str = "\n".join(result["logs"])
            self.assertIn("[missing] Skipped: Missing placeholder {nonExistentKey}", logs_str)


if __name__ == "__main__":
    unittest.main()
