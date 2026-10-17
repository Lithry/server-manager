"""Unit test suite for the service-agnostic Reactive Delta Field Mapping Engine."""

import unittest
from unittest.mock import AsyncMock, MagicMock, patch

from src.core.config import FieldMapping, ServiceConfig, Settings, StageConfig
from src.core.predicates import TransformerEvaluator
from src.core.scheduler import (
    TaskScheduler,
    _propagate_cross_service_table_mappings,
    evaluate_reactive_mappings,
)


class TestReactiveMappings(unittest.IsolatedAsyncioTestCase):
    """Verify reactive source-change detection, multi-pass cascades, and cross-service propagation."""

    def test_skip_none_endpoint_source_without_evaluating_transformer(self):
        """If an endpoint source field is None, skip immediately without evaluating the transformer."""
        mappings = [
            FieldMapping(
                source_field="eventType",
                target_column="COL_EVENT",
                transformer="if COL_EVENT == 'DELETED' then 'DELETED' else if value == 'deleted' then 'DELETED' else 'ADDED'",
            )
        ]
        existing_row = {"ID": 1, "COL_EVENT": "ADDED"}
        table_cols = {"COL_EVENT"}

        with patch.object(TransformerEvaluator, "evaluate", wraps=TransformerEvaluator.evaluate) as spy_eval:
            delta, changed = evaluate_reactive_mappings(
                mappings=mappings,
                payload_context={"otherField": "abc"},  # eventType is None
                existing_row=existing_row,
                table_cols=table_cols,
            )
            self.assertEqual(delta, {})
            self.assertEqual(changed, set())
            spy_eval.assert_not_called()

    def test_table_column_source_initializes_once_and_skips_when_unchanged(self):
        """Table-sourced mapping initializes once when target is None, then skips when sources do not change."""
        expr = (
            "if COL_EVENT == 'DELETED' then 'DELETED' "
            "else if COL_ID_A is not None and COL_ID_B is not None then 'RECOGNIZED' "
            "else 'UNRECOGNIZED'"
        )
        mappings = [
            FieldMapping(
                source_field="COL_EVENT, COL_ID_A, COL_ID_B",
                target_column="COL_STATUS",
                transformer=expr,
            )
        ]
        table_cols = {"COL_EVENT", "COL_ID_A", "COL_ID_B", "COL_STATUS"}

        # Cycle 1: COL_STATUS is None, COL_EVENT is 'ADDED', IDs are None -> initializes to 'UNRECOGNIZED'
        row_cycle_1 = {
            "ID": 1,
            "COL_EVENT": "ADDED",
            "COL_ID_A": None,
            "COL_ID_B": None,
            "COL_STATUS": None,
        }
        with patch.object(TransformerEvaluator, "evaluate", wraps=TransformerEvaluator.evaluate) as spy_eval:
            delta, changed = evaluate_reactive_mappings(
                mappings=mappings,
                payload_context={},
                existing_row=row_cycle_1,
                table_cols=table_cols,
            )
            self.assertEqual(delta, {"COL_STATUS": "UNRECOGNIZED"})
            self.assertEqual(changed, {"COL_STATUS"})
            self.assertEqual(spy_eval.call_count, 1)

        # Cycle 2: COL_STATUS is now 'UNRECOGNIZED' and no source column changed -> skips transformer completely
        row_cycle_2 = {
            "ID": 1,
            "COL_EVENT": "ADDED",
            "COL_ID_A": None,
            "COL_ID_B": None,
            "COL_STATUS": "UNRECOGNIZED",
        }
        with patch.object(TransformerEvaluator, "evaluate", wraps=TransformerEvaluator.evaluate) as spy_eval:
            delta, changed = evaluate_reactive_mappings(
                mappings=mappings,
                payload_context={},
                existing_row=row_cycle_2,
                table_cols=table_cols,
            )
            self.assertEqual(delta, {})
            self.assertEqual(changed, set())
            spy_eval.assert_not_called()

    def test_intra_service_reactive_cascade_regardless_of_mapping_order(self):
        """Dependent table-column mapping reacts in the same cycle even if placed BEFORE endpoint mappings."""
        expr = (
            "if COL_EVENT == 'DELETED' then 'DELETED' "
            "else if COL_ID_A is not None and COL_ID_B is not None then 'RECOGNIZED' "
            "else 'UNRECOGNIZED'"
        )
        # Place COL_STATUS at the VERY TOP (before COL_ID_A and COL_ID_B)
        mappings_top_first = [
            FieldMapping(
                source_field="COL_EVENT, COL_ID_A, COL_ID_B",
                target_column="COL_STATUS",
                transformer=expr,
            ),
            FieldMapping(source_field="data.idA", target_column="COL_ID_A"),
            FieldMapping(source_field="data.idB", target_column="COL_ID_B"),
        ]
        table_cols = {"COL_EVENT", "COL_ID_A", "COL_ID_B", "COL_STATUS"}
        existing_row = {
            "ID": 10,
            "COL_EVENT": "ADDED",
            "COL_ID_A": None,
            "COL_ID_B": None,
            "COL_STATUS": "UNRECOGNIZED",
        }
        payload = {"data": {"idA": "450", "idB": "9876"}}

        with patch.object(TransformerEvaluator, "evaluate", wraps=TransformerEvaluator.evaluate) as spy_eval:
            delta, changed = evaluate_reactive_mappings(
                mappings=mappings_top_first,
                payload_context=payload,
                existing_row=existing_row,
                table_cols=table_cols,
            )
            self.assertEqual(
                delta,
                {"COL_ID_A": "450", "COL_ID_B": "9876", "COL_STATUS": "RECOGNIZED"},
            )
            self.assertEqual(changed, {"COL_ID_A", "COL_ID_B", "COL_STATUS"})
            self.assertEqual(spy_eval.call_count, 1)

        # Next cycle: endpoint returns the exact same IDs -> 0 changes, transformer not called
        row_recognized = {
            "ID": 10,
            "COL_EVENT": "ADDED",
            "COL_ID_A": "450",
            "COL_ID_B": "9876",
            "COL_STATUS": "RECOGNIZED",
        }
        with patch.object(TransformerEvaluator, "evaluate", wraps=TransformerEvaluator.evaluate) as spy_eval:
            delta, changed = evaluate_reactive_mappings(
                mappings=mappings_top_first,
                payload_context=payload,
                existing_row=row_recognized,
                table_cols=table_cols,
            )
            self.assertEqual(delta, {})
            self.assertEqual(changed, set())
            spy_eval.assert_not_called()

    def test_endpoint_delayed_update_tbd_to_final_title_and_strict_sql_delta(self):
        """If an upstream endpoint value changes days later (e.g. 'TBD' -> 'Episode 1'), only that column updates."""
        mappings = [
            FieldMapping(source_field="episode.title", target_column="EPISODE_TITLE"),
            FieldMapping(source_field="series.title", target_column="SERIES_TITLE"),
        ]
        table_cols = {"EPISODE_TITLE", "SERIES_TITLE"}
        existing_row = {
            "ID": 5,
            "EPISODE_TITLE": "TBD",
            "SERIES_TITLE": "My Show",
        }

        # Upstream changes episode.title from 'TBD' to 'Pilot', while series.title remains 'My Show'
        payload = {"episode": {"title": "Pilot"}, "series": {"title": "My Show"}}
        delta, changed = evaluate_reactive_mappings(
            mappings=mappings,
            payload_context=payload,
            existing_row=existing_row,
            table_cols=table_cols,
        )

        # Strictly EPISODE_TITLE is in delta; SERIES_TITLE is excluded because its value did not change
        self.assertEqual(delta, {"EPISODE_TITLE": "Pilot"})
        self.assertEqual(changed, {"EPISODE_TITLE"})

    def test_cross_service_table_column_propagation_on_event_change(self):
        """When Service A updates COL_EVENT to 'DELETED', Service B's COL_STATUS reacts in the same cycle."""
        svc_a = ServiceConfig(
            name="ProducerA",
            enabled=True,
            field_mappings=[
                FieldMapping(
                    source_field="eventType",
                    target_column="COL_EVENT",
                    transformer="if COL_EVENT == 'DELETED' then 'DELETED' else if value == 'fileDeleted' then 'DELETED' else 'ADDED'",
                )
            ],
        )
        svc_b = ServiceConfig(
            name="ConsumerB",
            enabled=True,
            field_mappings=[
                FieldMapping(
                    source_field="COL_EVENT, COL_ID_A, COL_ID_B",
                    target_column="COL_STATUS",
                    transformer="if COL_EVENT == 'DELETED' then 'DELETED' else if COL_ID_A is not None and COL_ID_B is not None then 'RECOGNIZED' else 'UNRECOGNIZED'",
                )
            ],
        )
        stage_1 = StageConfig(id="stage_1", name="Ingest", order=1, enabled=True, service_ids=["svc_a"])
        stage_2 = StageConfig(id="stage_2", name="Process", order=2, enabled=True, service_ids=["svc_b"])
        services = {"svc_a": svc_a, "svc_b": svc_b}
        table_cols = {"COL_EVENT", "COL_ID_A", "COL_ID_B", "COL_STATUS"}

        existing_row = {
            "ID": 99,
            "STAGE": "stage_2",
            "COL_EVENT": "ADDED",
            "COL_ID_A": "450",
            "COL_ID_B": "9876",
            "COL_STATUS": "RECOGNIZED",
        }

        # Step 1: Service A receives 'fileDeleted'
        delta, changed = evaluate_reactive_mappings(
            mappings=svc_a.field_mappings,
            payload_context={"eventType": "fileDeleted"},
            existing_row=existing_row,
            table_cols=table_cols,
        )
        self.assertEqual(delta, {"COL_EVENT": "DELETED"})
        self.assertEqual(changed, {"COL_EVENT"})

        # Step 2: Cross-service propagation updates Service B's COL_STATUS in the same cycle
        final_delta, final_changed = _propagate_cross_service_table_mappings(
            stages=[stage_1, stage_2],
            services=services,
            existing_row=existing_row,
            table_cols=table_cols,
            item_identifier="svc_a:99",
            changed_columns=changed,
            delta_fields=delta,
        )
        self.assertEqual(final_delta, {"COL_EVENT": "DELETED", "COL_STATUS": "DELETED"})
        self.assertEqual(final_changed, {"COL_EVENT", "COL_STATUS"})


if __name__ == "__main__":
    unittest.main()
