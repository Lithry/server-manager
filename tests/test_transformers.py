"""Comprehensive test suite for the single-line multi-branch transformer engine."""

import unittest
from src.core.predicates import PredicateEvaluator
from src.core.transformers import SafeContext, TransformerEvaluator


class TestTransformers(unittest.TestCase):
    """Test suite covering TransformerEvaluator, SafeContext, and multi-branch syntax."""

    def test_standard_2_state(self):
        """Test standard 2-state if/then/else transformer."""
        expr = "if 'anime' in tags then 1 else 0"

        # Case: condition evaluates to True
        ctx_true = {"tags": ["anime", "tv"]}
        result_true = TransformerEvaluator.evaluate(expr, "anime", ctx_true)
        self.assertEqual(result_true, 1)

        # Case: condition evaluates to False
        ctx_false = {"tags": ["movie", "action"]}
        result_false = TransformerEvaluator.evaluate(expr, "movie", ctx_false)
        self.assertEqual(result_false, 0)

    def test_3_state_else_if(self):
        """Test 3-state expression using 'else if' chaining."""
        expr = (
            "if EVENT == 'DELETED' then 'DELETED' "
            "else if SHOKO_ID is not None and ANIDB_ID is not None then 'RECOGNIZED' "
            "else 'UNRECOGNIZED'"
        )

        # Branch 1: EVENT is DELETED
        ctx_deleted = {"EVENT": "DELETED", "SHOKO_ID": 123, "ANIDB_ID": 456}
        self.assertEqual(TransformerEvaluator.evaluate(expr, None, ctx_deleted), "DELETED")

        # Branch 2: EVENT is not DELETED, but IDs are present
        ctx_recognized = {"EVENT": "FILE_DETECTED", "SHOKO_ID": 123, "ANIDB_ID": 456}
        self.assertEqual(TransformerEvaluator.evaluate(expr, None, ctx_recognized), "RECOGNIZED")

        # Branch 3: Fallback else
        ctx_unrecognized = {"EVENT": "FILE_DETECTED", "SHOKO_ID": None, "ANIDB_ID": 456}
        self.assertEqual(TransformerEvaluator.evaluate(expr, None, ctx_unrecognized), "UNRECOGNIZED")

    def test_3_state_elif(self):
        """Test 3-state expression using 'elif' chaining."""
        expr = (
            "if EVENT == 'DELETED' then 'DELETED' "
            "elif SHOKO_ID is not None and ANIDB_ID is not None then 'RECOGNIZED' "
            "else 'UNRECOGNIZED'"
        )

        # Branch 1
        ctx_del = {"EVENT": "DELETED"}
        self.assertEqual(TransformerEvaluator.evaluate(expr, None, ctx_del), "DELETED")

        # Branch 2
        ctx_rec = {"EVENT": "ADDED", "SHOKO_ID": 99, "ANIDB_ID": 88}
        self.assertEqual(TransformerEvaluator.evaluate(expr, None, ctx_rec), "RECOGNIZED")

        # Branch 3
        ctx_unrec = {"EVENT": "ADDED", "SHOKO_ID": None, "ANIDB_ID": None}
        self.assertEqual(TransformerEvaluator.evaluate(expr, None, ctx_unrec), "UNRECOGNIZED")

    def test_3_state_return(self):
        """Test 3-state expression using 'return' syntax."""
        expr = (
            "if EVENT == 'DELETED' return 'DELETED' "
            "else if SHOKO_ID is not None return 'RECOGNIZED' "
            "else return 'UNRECOGNIZED'"
        )

        # Branch 1
        self.assertEqual(TransformerEvaluator.evaluate(expr, None, {"EVENT": "DELETED"}), "DELETED")

        # Branch 2
        self.assertEqual(
            TransformerEvaluator.evaluate(expr, None, {"EVENT": "ADDED", "SHOKO_ID": 50}),
            "RECOGNIZED",
        )

        # Branch 3
        self.assertEqual(
            TransformerEvaluator.evaluate(expr, None, {"EVENT": "ADDED", "SHOKO_ID": None}),
            "UNRECOGNIZED",
        )

    def test_python_ternary(self):
        """Test native Python ternary expressions pass through cleanly."""
        expr = "EVENT if EVENT == 'DELETED' else ('DELETED' if value == 'episodeFileDeleted' else 'ADDED')"

        # First ternary path
        self.assertEqual(
            TransformerEvaluator.evaluate(expr, "other", {"EVENT": "DELETED"}),
            "DELETED",
        )

        # Nested ternary true path
        self.assertEqual(
            TransformerEvaluator.evaluate(expr, "episodeFileDeleted", {"EVENT": None}),
            "DELETED",
        )

        # Nested ternary false path
        self.assertEqual(
            TransformerEvaluator.evaluate(expr, "seriesAdd", {"EVENT": None}),
            "ADDED",
        )

    def test_safe_context_behavior(self):
        """Test SafeContext case insensitivity and missing key handling."""
        ctx = SafeContext({"CamelCaseKey": "val1", "UPPER_KEY": 100, "lower_key": True})

        # Exact match
        self.assertEqual(ctx["CamelCaseKey"], "val1")
        self.assertEqual(ctx["UPPER_KEY"], 100)
        self.assertEqual(ctx["lower_key"], True)

        # Case-insensitive resolution
        self.assertEqual(ctx["camelcasekey"], "val1")
        self.assertEqual(ctx["CAMELCASEKEY"], "val1")
        self.assertEqual(ctx["upper_key"], 100)
        self.assertEqual(ctx["LOWER_KEY"], True)

        # Non-existent key returns None without KeyError
        self.assertIsNone(ctx["NON_EXISTENT_KEY"])
        self.assertIsNone(ctx[123])

    def test_validate_syntax(self):
        """Test syntax validation for direct mapping, valid expressions, and invalid syntax."""
        # Empty or None expressions
        valid, msg = TransformerEvaluator.validate_syntax(None)
        self.assertTrue(valid)
        self.assertEqual(msg, "Direct value mapping")

        valid, msg = TransformerEvaluator.validate_syntax("   ")
        self.assertTrue(valid)
        self.assertEqual(msg, "Direct value mapping")

        # Valid 2-state
        valid, msg = TransformerEvaluator.validate_syntax("if x == 1 then 'yes' else 'no'")
        self.assertTrue(valid)
        self.assertEqual(msg, "Valid transformer expression")

        # Valid 3-state
        valid, _ = TransformerEvaluator.validate_syntax(
            "if a == 1 then 'one' elif a == 2 then 'two' else 'other'"
        )
        self.assertTrue(valid)

        # Valid return syntax
        valid, _ = TransformerEvaluator.validate_syntax(
            "if a == 1 return 'one' else if a == 2 return 'two' else return 'other'"
        )
        self.assertTrue(valid)

        # Valid Python ternary
        valid, _ = TransformerEvaluator.validate_syntax("'A' if x == 1 else 'B'")
        self.assertTrue(valid)

        # Invalid syntax: unclosed parenthesis
        valid, msg = TransformerEvaluator.validate_syntax("if (x == 1 then 'yes' else 'no'")
        self.assertFalse(valid)
        self.assertIn("Invalid transformer", msg)

        # Invalid syntax: trailing operator
        valid, msg = TransformerEvaluator.validate_syntax("if x == then 'yes' else 'no'")
        self.assertFalse(valid)
        self.assertIn("Invalid transformer", msg)

    def test_json_list_string_auto_unpacking(self):
        """Verify JSON list strings stored in SQLite TEXT columns are unpacked as Python lists in transformers and predicates."""
        row_ctx = {
            "GENRES": '["Action", "Sci-Fi", "Drama"]',
            "EMPTY_TAGS": "[]",
            "PLAIN_TEXT": "not a list",
        }
        # TransformerEvaluator
        self.assertEqual(TransformerEvaluator.evaluate("len(GENRES)", None, row_ctx), 3)
        self.assertEqual(TransformerEvaluator.evaluate("if 'Sci-Fi' in GENRES then 'YES' else 'NO'", None, row_ctx), "YES")
        self.assertEqual(TransformerEvaluator.evaluate("len(EMPTY_TAGS)", None, row_ctx), 0)

        # PredicateEvaluator
        self.assertTrue(PredicateEvaluator.evaluate("len(GENRES) == 3 AND 'Action' in GENRES", row_ctx))
        self.assertFalse(PredicateEvaluator.evaluate("'Comedy' in GENRES", row_ctx))
        self.assertTrue(PredicateEvaluator.evaluate("len(EMPTY_TAGS) == 0", row_ctx))

    def test_error_handling(self):
        """Test evaluate error suppression and raise_errors flag."""
        expr = "1 / 0"

        # Suppressed by default (returns original value)
        result = TransformerEvaluator.evaluate(expr, "fallback_value", {}, raise_errors=False)
        self.assertEqual(result, "fallback_value")

        # Raised when requested
        with self.assertRaises(ZeroDivisionError):
            TransformerEvaluator.evaluate(expr, "fallback_value", {}, raise_errors=True)

    def test_built_in_helpers(self):
        """Test helper functions in safe_locals (lower, upper, len, merge)."""
        self.assertEqual(
            TransformerEvaluator.evaluate("lower(value)", "HeLLo"),
            "hello",
        )
        self.assertEqual(
            TransformerEvaluator.evaluate("upper(value)", "world"),
            "WORLD",
        )
        self.assertEqual(
            TransformerEvaluator.evaluate("len(value)", [1, 2, 3]),
            3,
        )
        self.assertEqual(
            TransformerEvaluator.evaluate("merge(value, 'item')", ["first"]),
            ["first", "item"],
        )


if __name__ == "__main__":
    unittest.main()
