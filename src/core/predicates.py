"""Safe AST-based predicate and transformer evaluator for ServerManager DAG stages."""

import ast
import operator
import re
from typing import Any, Dict, Optional, Tuple


from src.core.transformers import parse_json_list_if_str


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
        ast.In: lambda a, b: a in b if b is not None else False,
        ast.NotIn: lambda a, b: (a not in b) if b is not None else True,
        ast.Is: operator.is_,
        ast.IsNot: operator.is_not,
    }

    ALLOWED_FUNCTIONS = {
        "len": lambda x: len(x) if x is not None else 0,
        "lower": lambda x: str(x).lower() if x is not None else "",
        "upper": lambda x: str(x).upper() if x is not None else "",
        "str": lambda x: str(x) if x is not None else "",
        "int": lambda x: int(x) if x is not None else 0,
        "float": lambda x: float(x) if x is not None else 0.0,
        "bool": bool,
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
        elif isinstance(node, (ast.Tuple, ast.List)):
            return [cls._eval_node(elt, context) for elt in node.elts]
        elif isinstance(node, ast.Name):
            # Identifiers like IS_ANIME, FILE_PATH, VFS_PATH (case-insensitive lookup)
            if node.id in context:
                return parse_json_list_if_str(context[node.id])
            if node.id.upper() in context:
                return parse_json_list_if_str(context[node.id.upper()])
            if node.id.lower() in context:
                return parse_json_list_if_str(context[node.id.lower()])
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
                return parse_json_list_if_str(context[full_attr])
            if full_attr.upper() in context:
                return parse_json_list_if_str(context[full_attr.upper()])
            if full_attr.lower() in context:
                return parse_json_list_if_str(context[full_attr.lower()])
            return None
        elif isinstance(node, ast.Call):
            if isinstance(node.func, ast.Name) and node.func.id in cls.ALLOWED_FUNCTIONS:
                func = cls.ALLOWED_FUNCTIONS[node.func.id]
                args = [cls._eval_node(arg, context) for arg in node.args]
                return func(*args)
            raise ValueError(f"Unsupported function call in predicate: {ast.dump(node.func)}")
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


__all__ = ["PredicateEvaluator"]

