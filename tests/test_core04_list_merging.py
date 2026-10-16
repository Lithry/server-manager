"""Automated test suite for CORE-04: Accumulative JSON list extraction, merging, and type safety."""

import json
import unittest
from io import StringIO
from unittest.mock import patch

from src.core.scheduler import extract_dotted_value, is_json_list, merge_field_value
from src.api.pipeline import flatten_json_keys


class TestCore04ListMerging(unittest.TestCase):
    """Test suite covering CORE-04 list extraction, array projection, and merging."""

    def test_extract_dotted_value_terminal_star_wrapping(self):
        """Case 1: extract_dotted_value with terminal [*] wraps scalars into a single-element list."""
        data = {
            "episode": {
                "title": "Winter Is Coming",
                "season": 1,
                "rating": 9.5,
                "is_special": False,
                "null_field": None,
                "existing_list": ["Action", "Adventure"],
            }
        }

        # String scalar wrapped
        self.assertEqual(extract_dotted_value(data, "episode.title[*]"), ["Winter Is Coming"])
        # Integer scalar wrapped
        self.assertEqual(extract_dotted_value(data, "episode.season[*]"), [1])
        # Float scalar wrapped
        self.assertEqual(extract_dotted_value(data, "episode.rating[*]"), [9.5])
        # Boolean scalar wrapped
        self.assertEqual(extract_dotted_value(data, "episode.is_special[*]"), [False])
        # None value returns None
        self.assertIsNone(extract_dotted_value(data, "episode.null_field[*]"))
        # Missing path returns None
        self.assertIsNone(extract_dotted_value(data, "episode.non_existent[*]"))
        # Already a list is returned as is
        self.assertEqual(extract_dotted_value(data, "episode.existing_list[*]"), ["Action", "Adventure"])

    def test_extract_dotted_value_intermediate_star_projection(self):
        """Case 2: extract_dotted_value with intermediate [*] projects properties over list items."""
        data = {
            "tags": [
                {"id": 1, "name": "Action"},
                {"id": 2, "name": "Comedy"},
                {"id": 3, "name": "Drama"},
            ],
            "objeto": [
                {"data": "payload_1"},
                {"data": "payload_2"},
            ],
        }

        self.assertEqual(extract_dotted_value(data, "tags[*].name"), ["Action", "Comedy", "Drama"])
        self.assertEqual(extract_dotted_value(data, "tags[*].id"), [1, 2, 3])
        self.assertEqual(extract_dotted_value(data, "objeto[*].data"), ["payload_1", "payload_2"])

        # Numeric indexing is retained
        self.assertEqual(extract_dotted_value(data, "tags[0].name"), "Action")
        self.assertEqual(extract_dotted_value(data, "tags.1.name"), "Comedy")
        self.assertEqual(extract_dotted_value(data, "tags[2].name"), "Drama")

    def test_extract_dotted_value_without_star_returns_none(self):
        """Case 3: Traversing intermediate list without explicit [*] or numeric index returns None."""
        data = {
            "tags": [
                {"id": 1, "name": "Action"},
                {"id": 2, "name": "Comedy"},
            ],
            "objeto": [
                {"data": "val_1"},
            ],
        }

        # Direct projection without [*] must not automatically project
        self.assertIsNone(extract_dotted_value(data, "tags.name"))
        self.assertIsNone(extract_dotted_value(data, "objeto.data"))
        self.assertIsNone(extract_dotted_value(data, "tags.id"))

    def test_is_json_list_helper(self):
        """Verify is_json_list helper correctly identifies Python lists and JSON list strings."""
        # Python lists
        self.assertEqual(is_json_list(["a", "b"]), (True, ["a", "b"]))
        self.assertEqual(is_json_list([]), (True, []))

        # JSON strings representing lists
        self.assertEqual(is_json_list('["Action", "Drama"]'), (True, ["Action", "Drama"]))
        self.assertEqual(is_json_list("  [1, 2, 3]  "), (True, [1, 2, 3]))
        self.assertEqual(is_json_list("[]"), (True, []))

        # Non-lists / invalid JSON
        self.assertEqual(is_json_list("plain string"), (False, None))
        self.assertEqual(is_json_list(123), (False, None))
        self.assertEqual(is_json_list(None), (False, None))
        self.assertEqual(is_json_list('{"key": "value"}'), (False, None))
        self.assertEqual(is_json_list("[invalid json"), (False, None))

    def test_merge_field_value_list_deduplication(self):
        """Case 4: merge_field_value with existing list and new list merges with deduplication and order preservation."""
        existing_val = json.dumps(["Action", "Sci-Fi"])
        new_val = ["action", " SCI-FI ", "Horror", "Comedy"]

        merged = merge_field_value(existing_val, new_val, col_name="GENRES", item_id="radarr:100")
        expected = json.dumps(["Action", "Sci-Fi", "Horror", "Comedy"], ensure_ascii=False)

        self.assertEqual(merged, expected)

    def test_merge_field_value_existing_list_with_scalar_rejected(self):
        """Case 5: merge_field_value with existing list and scalar new_val rejects update and logs error."""
        existing_val = json.dumps(["Action", "Sci-Fi"])
        new_val = "Comedy"

        with patch("sys.stdout", new_callable=StringIO) as mock_stdout:
            result = merge_field_value(existing_val, new_val, col_name="GENRES", item_id="radarr:100")
            output = mock_stdout.getvalue()

        # Update rejected, existing list preserved untouched
        self.assertEqual(result, existing_val)
        self.assertIn("[!] Error: Field 'GENRES' for item 'radarr:100' requires a list, but received incompatible scalar value: 'Comedy'. Update rejected.", output)

    def test_merge_field_value_existing_scalar_with_list_rejected(self):
        """Case 6: merge_field_value with existing scalar and list new_val rejects update and logs error."""
        existing_val = "Pilot Episode"
        new_val = ["Pilot Episode", "Season 1"]

        with patch("sys.stdout", new_callable=StringIO) as mock_stdout:
            result = merge_field_value(existing_val, new_val, col_name="TITLE", item_id="sonarr:200")
            output = mock_stdout.getvalue()

        # Update rejected, existing scalar preserved untouched
        self.assertEqual(result, existing_val)
        self.assertIn("[!] Error: Field 'TITLE' for item 'sonarr:200' is a scalar, but received incompatible list value. Update rejected.", output)

    def test_merge_field_value_scalar_replacement_and_none(self):
        """Verify scalar replacement, null preservation, and initialization."""
        # Scalar to scalar replacement
        self.assertEqual(merge_field_value("Old Title", "New Title", "TITLE", "sonarr:1"), "New Title")

        # Preservation when new_val is None
        self.assertEqual(merge_field_value("Existing Title", None, "TITLE", "sonarr:1"), "Existing Title")
        self.assertEqual(merge_field_value('["Tag1"]', None, "TAGS", "sonarr:1"), '["Tag1"]')

        # Acceptance when existing_val is None
        self.assertEqual(merge_field_value(None, "New Title", "TITLE", "sonarr:1"), "New Title")
        self.assertEqual(merge_field_value(None, ["Tag1", "Tag2"], "TAGS", "sonarr:1"), json.dumps(["Tag1", "Tag2"], ensure_ascii=False))

    def test_flatten_json_keys_with_star_notation(self):
        """Verify flatten_json_keys appends [*] when recursing into lists or inspecting scalar lists."""
        payload = {
            "tags": [{"name": "Action", "id": 1}],
            "genres": ["Drama", "Sci-Fi"],
            "empty_list": [],
            "title": "Pilot",
        }

        flattened = flatten_json_keys(payload)
        paths = {f["path"]: f for f in flattened}

        self.assertIn("tags[*].name", paths)
        self.assertEqual(paths["tags[*].name"]["type"], "str")

        self.assertIn("tags[*].id", paths)
        self.assertEqual(paths["tags[*].id"]["type"], "int")

        self.assertIn("genres[*]", paths)
        self.assertEqual(paths["genres[*]"]["type"], "list")

        self.assertIn("empty_list[*]", paths)
        self.assertEqual(paths["empty_list[*]"]["type"], "list")

        self.assertIn("title", paths)
        self.assertEqual(paths["title"]["type"], "str")


if __name__ == "__main__":
    unittest.main()
