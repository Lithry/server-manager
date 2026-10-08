"""Safe AST-based predicate and transformer evaluator for ServerManager DAG stages."""

import ast
import operator
import re
from typing import Any, Dict, Optional, Tuple


class PredicateEvaluator:
    """Safe boolean expression evaluator using Python AST without arbitrary code execution."""

    ALLOWED_OPERATORS = {
        ast.And: lambda values: all(values),
        ast.Or: lambda values: any(values),
        ast.Not: operator.not_,
        ast.Eq: operator.eq,
        ast.NotEq: operator.ne,
        ast.Lt: operator.lt,
        ast.LtE: operator.le,
        ast.Gt: operator.gt,
        ast.GtE: operator.ge,
        ast.In: lambda a, b: a in b,
        ast.NotIn: lambda a, b: a not in b,
        ast.Is: operator.is_,
        ast.IsNot: operator.is_not,
    }

    @classmethod
    def normalize_expression(cls, expr: str) -> str:
        """Normalize SQL-like keywords to Python-compatible equivalents for AST parsing."""
        if not expr:
            return ""
        tokens = expr.strip()
        tokens = re.sub(r"\bIS\s+NOT\s+NULL\b", "is not None", tokens, flags=re.IGNORECASE)
        tokens = re.sub(r"\bIS\s+NULL\b", "is None", tokens, flags=re.IGNORECASE)
        tokens = re.sub(r"\bAND\b", "and", tokens, flags=re.IGNORECASE)
        tokens = re.sub(r"\bOR\b", "or", tokens, flags=re.IGNORECASE)
        tokens = re.sub(r"\bNOT\b", "not", tokens, flags=re.IGNORECASE)
        tokens = re.sub(r"\bTRUE\b", "True", tokens, flags=re.IGNORECASE)
        tokens = re.sub(r"\bFALSE\b", "False", tokens, flags=re.IGNORECASE)
        tokens = re.sub(r"\bNULL\b", "None", tokens, flags=re.IGNORECASE)
        return tokens

    @classmethod
    def validate_syntax(cls, expr: Optional[str]) -> Tuple[bool, str]:
        """Validate if an expression syntax is valid without evaluating."""
        if not expr or not expr.strip():
            return True, "Root producer stage (no condition)"

        cleaned = expr.strip()

        # Check 1: Unbalanced quotes
        if cleaned.count("'") % 2 != 0 or cleaned.count('"') % 2 != 0:
            return False, "Syntax error: Unterminated string quote."

        # Check 2: Unbalanced parentheses
        if cleaned.count("(") != cleaned.count(")"):
            return False, "Syntax error: Unbalanced parentheses."

        # Check 3: Invalid IS usage (comparing with strings, numbers, or identifiers)
        if re.search(r"\bIS\s+(?!NULL\b|NOT\s+NULL\b|TRUE\b|FALSE\b)", cleaned, flags=re.IGNORECASE):
            return False, "Syntax error: Cannot compare values with 'IS'. Use '==' for equality comparison."

        # Check 4: Single '=' assignment
        if re.search(r"(?<![!=<>])=(?!=)", cleaned):
            return False, "Syntax error: Use '==' for comparison instead of '='."

        # Check 5: Trailing operator
        if re.search(r"\b(AND|OR|NOT|==|!=|>|<|>=|<=|IS)\s*$", cleaned, flags=re.IGNORECASE):
            return False, "Syntax error: Incomplete expression ending in operator."

        # Check 6: Bitwise instead of boolean operators
        if re.search(r"[&|]", cleaned):
            return False, "Syntax error: Use 'AND' or 'OR' instead of '&' or '|'."

        # Final check: Python AST parser
        try:
            normalized = cls.normalize_expression(cleaned)
            ast.parse(normalized, mode="eval")
            return True, "Valid condition syntax"
        except SyntaxError as e:
            offset = e.offset or 1
            sample = cleaned[max(0, offset - 12):min(len(cleaned), offset + 12)].strip()
            if sample:
                return False, f"Syntax error near '{sample}'. Check operators and format."
            return False, f"Syntax error: {e.msg}."
        except Exception as e:
            return False, f"Syntax error: {str(e)}"

    @classmethod
    def evaluate(cls, expr: Optional[str], context: Dict[str, Any]) -> bool:
        """Evaluate expression against context dictionary. Returns True if expr is None or empty."""
        if not expr or not expr.strip():
            return True
        normalized = cls.normalize_expression(expr)
        tree = ast.parse(normalized, mode="eval")
        return bool(cls._eval_node(tree.body, context))

    @classmethod
    def _eval_node(cls, node: ast.AST, context: Dict[str, Any]) -> Any:
        if isinstance(node, ast.Constant):
            return node.value
        elif isinstance(node, ast.Name):
            # Identifiers like IS_ANIME, FILE_PATH, VFS_PATH (case-insensitive lookup)
            if node.id in context:
                return context[node.id]
            if node.id.upper() in context:
                return context[node.id.upper()]
            if node.id.lower() in context:
                return context[node.id.lower()]
            return None
        elif isinstance(node, ast.Attribute):
            # Handles chained attributes like stage.ingest.completed
            parts = []
            curr = node
            while isinstance(curr, ast.Attribute):
                parts.append(curr.attr)
                curr = curr.value
            if isinstance(curr, ast.Name):
                parts.append(curr.id)
            parts.reverse()
            full_attr = ".".join(parts)
            if full_attr in context:
                return context[full_attr]
            if full_attr.upper() in context:
                return context[full_attr.upper()]
            if full_attr.lower() in context:
                return context[full_attr.lower()]
            return None
        elif isinstance(node, ast.BoolOp):
            values = [cls._eval_node(val, context) for val in node.values]
            op_func = cls.ALLOWED_OPERATORS.get(type(node.op))
            if op_func:
                return op_func(values)
            raise ValueError(f"Unsupported boolean operator: {type(node.op)}")
        elif isinstance(node, ast.UnaryOp):
            operand = cls._eval_node(node.operand, context)
            op_func = cls.ALLOWED_OPERATORS.get(type(node.op))
            if op_func:
                return op_func(operand)
            raise ValueError(f"Unsupported unary operator: {type(node.op)}")
        elif isinstance(node, ast.Compare):
            left = cls._eval_node(node.left, context)
            for op, comparator in zip(node.ops, node.comparators):
                right = cls._eval_node(comparator, context)
                op_func = cls.ALLOWED_OPERATORS.get(type(op))
                if not op_func:
                    raise ValueError(f"Unsupported comparison operator: {type(op)}")
                if not op_func(left, right):
                    return False
                left = right
            return True
        else:
            raise ValueError(f"Unsupported AST node expression: {type(node)}")


class TransformerEvaluator:
    """Evaluates field transformations safely (e.g. if 'anime' in tags then 1 else 0)."""

    @classmethod
    def validate_syntax(cls, expr: Optional[str]) -> Tuple[bool, str]:
        if not expr or not expr.strip():
            return True, "Direct value mapping"
        cleaned = expr.strip()
        m = re.match(r"^if\s+(.+)\s+then\s+(.+)\s+else\s+(.+)$", cleaned, flags=re.IGNORECASE)
        if m:
            cond, val_if_true, val_if_false = m.groups()
            py_expr = f"({val_if_true}) if ({cond}) else ({val_if_false})"
        else:
            py_expr = cleaned
        try:
            ast.parse(py_expr, mode="eval")
            return True, "Valid transformer expression"
        except Exception as e:
            return False, f"Invalid transformer: {str(e)}"

    @classmethod
    def evaluate(cls, expr: Optional[str], value: Any) -> Any:
        if not expr or not expr.strip():
            return value
        cleaned = expr.strip()
        m = re.match(r"^if\s+(.+)\s+then\s+(.+)\s+else\s+(.+)$", cleaned, flags=re.IGNORECASE)
        if m:
            cond, val_if_true, val_if_false = m.groups()
            py_expr = f"({val_if_true}) if ({cond}) else ({val_if_false})"
        else:
            py_expr = cleaned

        safe_globals = {"__builtins__": {}}
        safe_locals = {
            "value": value,
            "str": str,
            "int": int,
            "bool": bool,
            "len": len,
            "lower": lambda s: str(s).lower() if s is not None else "",
            "upper": lambda s: str(s).upper() if s is not None else "",
        }
        try:
            return eval(py_expr, safe_globals, safe_locals)
        except Exception:
            return value
