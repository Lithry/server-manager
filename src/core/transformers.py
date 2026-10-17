"""Single-line multi-branch transformer engine for ServerManager DAG pipelines."""

import ast
import json
import re
from typing import Any, Dict, List, Optional, Tuple


def parse_json_list_if_str(val: Any) -> Any:
    """If val is a JSON-serialized list string, return the parsed Python list; otherwise return val."""
    if isinstance(val, str):
        stripped = val.strip()
        if stripped.startswith("[") and stripped.endswith("]"):
            try:
                parsed = json.loads(stripped)
                if isinstance(parsed, list):
                    return parsed
            except Exception:
                pass
    return val


def deduplicate_list(items: Any) -> List[Any]:
    """Deduplicate list items case-insensitively while preserving insertion order and skipping blanks."""
    if not isinstance(items, (list, tuple, set)):
        return []
    seen: set[str] = set()
    unique_items: List[Any] = []
    for item in items:
        if item is None:
            continue
        if isinstance(item, str):
            cleaned = item.strip()
            if not cleaned:
                continue
            key = cleaned.lower()
            if key not in seen:
                seen.add(key)
                unique_items.append(cleaned)
        else:
            key = str(item)
            if key not in seen:
                seen.add(key)
                unique_items.append(item)
    return unique_items


def _coerce_to_list(val: Any) -> List[Any]:
    parsed = parse_json_list_if_str(val)
    if isinstance(parsed, list):
        return parsed
    if parsed is None or parsed == "":
        return []
    return [parsed]


class SafeContext(dict):
    """Dictionary that resolves missing keys as None, supports case-insensitive lookups, and unpacks JSON lists."""

    def __init__(self, *args: Any, **kwargs: Any) -> None:
        super().__init__(*args, **kwargs)
        for k, v in list(self.items()):
            if isinstance(v, str) and v.strip().startswith("[") and v.strip().endswith("]"):
                self[k] = parse_json_list_if_str(v)

    def __missing__(self, key: str) -> Any:
        if not isinstance(key, str):
            return None
        for k in (key.upper(), key.lower(), key.capitalize()):
            if k in self:
                return self[k]
        key_lower = key.lower()
        for k, v in self.items():
            if isinstance(k, str) and k.lower() == key_lower:
                return v
        return None


class TransformerEvaluator:
    """Evaluates field transformations safely (e.g. multi-branch if/then/else, ternary expressions)."""

    SafeContext = SafeContext

    @staticmethod
    def _mask_strings(text: str) -> Tuple[str, List[str]]:
        """Mask string literals to avoid keyword collisions during regex tokenization."""
        literals: List[str] = []

        def repl(m: re.Match) -> str:
            idx = len(literals)
            literals.append(m.group(0))
            return f"__STR_LIT_{idx}__"

        pattern = re.compile(r"('([^'\\]|\\.)*'|\"([^\"\\]|\\.)*\")")
        masked = pattern.sub(repl, text)
        return masked, literals

    @staticmethod
    def _unmask_strings(text: str, literals: List[str]) -> str:
        """Restore masked string literals back to original positions."""
        for idx, lit in enumerate(literals):
            text = text.replace(f"__STR_LIT_{idx}__", lit)
        return text

    @classmethod
    def normalize_transformer_syntax(cls, expr: str) -> str:
        """Normalize human-friendly if-then-else-return transformer expressions into Python ternaries."""
        if not expr:
            return ""
        cleaned = expr.strip()
        masked, literals = cls._mask_strings(cleaned)

        # 1. Normalize 'else return' -> 'else'
        masked = re.sub(r"\belse\s+return\b", "else", masked, flags=re.IGNORECASE)
        # 2. Normalize '(if|elif|else if) ... return' -> '\1 ... then'
        masked = re.sub(r"\b(if|elif|else\s+if)\s+(.+?)\s+return\b", r"\1 \2 then", masked, flags=re.IGNORECASE)

        # Check if starts with 'if' and contains 'then'
        if not re.match(r"^if\b", masked, flags=re.IGNORECASE) or not re.search(r"\bthen\b", masked, flags=re.IGNORECASE):
            return cls._unmask_strings(masked, literals)

        # Split by tokens elif, else if, else
        parts = re.split(r"\b(elif|else\s+if|else)\b", masked, flags=re.IGNORECASE)
        if len(parts) < 3:
            return cls._unmask_strings(masked, literals)

        # Parse initial 'if' clause
        m_if = re.match(r"^if\s+(.+?)\s+then\s+(.+)$", parts[0].strip(), flags=re.IGNORECASE | re.DOTALL)
        if not m_if:
            return cls._unmask_strings(masked, literals)

        clauses = [("if", m_if.group(1).strip(), m_if.group(2).strip())]

        # Parse remaining branches
        i = 1
        has_else = False
        else_val = None
        while i < len(parts):
            token = re.sub(r"\s+", " ", parts[i].strip().lower())
            body = parts[i + 1].strip() if i + 1 < len(parts) else ""
            if token in ("elif", "else if"):
                m_branch = re.match(r"^(.+?)\s+then\s+(.+)$", body, flags=re.IGNORECASE | re.DOTALL)
                if not m_branch:
                    return cls._unmask_strings(masked, literals)
                clauses.append(("elif", m_branch.group(1).strip(), m_branch.group(2).strip()))
            elif token == "else":
                has_else = True
                else_val = body
                clauses.append(("else", None, else_val))
                break
            i += 2

        if not has_else or else_val is None:
            return cls._unmask_strings(masked, literals)

        # Chain backwards from else
        current_expr = else_val
        for _, cond, val in reversed(clauses[:-1]):
            current_expr = f"({val}) if ({cond}) else ({current_expr})"

        return cls._unmask_strings(current_expr, literals)

    @classmethod
    def validate_syntax(cls, expr: Optional[str]) -> Tuple[bool, str]:
        """Validate if a transformer expression has valid syntax without evaluating."""
        if not expr or not expr.strip():
            return True, "Direct value mapping"
        norm = cls.normalize_transformer_syntax(expr)
        try:
            ast.parse(norm, mode="eval")
            return True, "Valid transformer expression"
        except Exception as e:
            return False, f"Invalid transformer: {str(e)}"

    @classmethod
    def evaluate(cls, expr: Optional[str], value: Any, context: Optional[Dict[str, Any]] = None, raise_errors: bool = False) -> Any:
        """Evaluate a transformer expression against a value and context dictionary."""
        if not expr or not expr.strip():
            return value

        norm = cls.normalize_transformer_syntax(expr)

        safe_globals = {"__builtins__": {}}
        safe_locals = {
            "value": parse_json_list_if_str(value),
            "str": str,
            "int": int,
            "bool": bool,
            "len": len,
            "lower": lambda s: str(s).lower() if s is not None else "",
            "upper": lambda s: str(s).upper() if s is not None else "",
            "merge": lambda existing, new: deduplicate_list(_coerce_to_list(existing) + _coerce_to_list(new)),
        }
        if context:
            safe_locals.update(context)
        safe_context = cls.SafeContext(safe_locals)

        try:
            return eval(norm, safe_globals, safe_context)
        except Exception as e:
            if raise_errors:
                raise e
            return value
