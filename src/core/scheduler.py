"""Stage-driven task execution scheduler, reactive delta mapper, retention engine, and custom table synchronizer."""

import ast
import datetime
import email.utils
import json
import re
import urllib.parse
import asyncio
import httpx
from typing import Any, Dict, List, Optional, Tuple

from src.core.config import config_manager
from src.core.database import db_manager, SYSTEM_RESERVED_COLUMNS
from src.core.predicates import PredicateEvaluator
from src.core.transformers import TransformerEvaluator, deduplicate_list, parse_json_list_if_str


def prepare_service_request(base_url: str, endpoint: str, api_key: str = "") -> tuple[str, dict]:
    """Prepare target URL and headers, handling Docker network host routing and Kestrel Host headers."""
    parsed = urllib.parse.urlparse(base_url.rstrip("/"))
    hostname = (parsed.hostname or "").lower()
    port = parsed.port

    headers = {}
    if api_key:
        headers["X-Api-Key"] = api_key
        headers["Authorization"] = f"Bearer {api_key}"
        headers["apikey"] = api_key

    if hostname in ("localhost", "127.0.0.1", "host.docker.internal"):
        target_netloc = f"host.docker.internal:{port}" if port else "host.docker.internal"
        headers["Host"] = f"localhost:{port}" if port else "localhost"
        parsed = parsed._replace(netloc=target_netloc)

    clean_endpoint = endpoint.lstrip("/")
    target_url = f"{urllib.parse.urlunparse(parsed)}/{clean_endpoint}" if clean_endpoint else urllib.parse.urlunparse(parsed)
    return target_url, headers


def _get_item_date(r: dict) -> str:
    """Service-agnostic extraction of item timestamp string from a record dictionary."""
    if not isinstance(r, dict):
        return ""
    for key in ("date", "timestamp", "created_at", "createdAt", "Created", "CreatedAt", "Imported", "DateCreated", "updated_at", "updatedAt", "time"):
        val = r.get(key)
        if val:
            return str(val)
    return ""


def _parse_timestamp(val: Any) -> Optional[datetime.datetime]:
    """Parse ISO, RFC-2822, or SQL timestamp string into UTC-aware datetime."""
    if not val:
        return None
    if isinstance(val, (int, float)):
        try:
            return datetime.datetime.fromtimestamp(float(val), tz=datetime.timezone.utc)
        except Exception:
            return None
    raw = str(val).strip()
    if not raw:
        return None
    try:
        dt = datetime.datetime.fromisoformat(raw.replace("Z", "+00:00"))
        if dt.tzinfo is None:
            dt = dt.replace(tzinfo=datetime.timezone.utc)
        return dt.astimezone(datetime.timezone.utc)
    except Exception:
        try:
            dt = email.utils.parsedate_to_datetime(raw)
            if dt.tzinfo is None:
                dt = dt.replace(tzinfo=datetime.timezone.utc)
            return dt.astimezone(datetime.timezone.utc)
        except Exception:
            return None


def _extract_payload_records(data: Any) -> Tuple[List[dict], Optional[int], Optional[int]]:
    """Service-agnostic extraction of record dictionaries and pagination metadata from JSON payload."""
    if isinstance(data, list):
        recs = [r for r in data if isinstance(r, dict)]
        return recs, None, None
    if isinstance(data, dict):
        total = data.get("totalRecords") or data.get("TotalRecordCount") or data.get("total") or data.get("count")
        page_size = data.get("pageSize") or data.get("limit") or data.get("per_page")
        for key in ("records", "items", "Items", "data", "results", "files", "entries", "list", "List"):
            candidate = data.get(key)
            if isinstance(candidate, list):
                return [r for r in candidate if isinstance(r, dict)], total, page_size
        for val in data.values():
            if isinstance(val, list) and (not val or isinstance(val[0], dict)):
                return [r for r in val if isinstance(r, dict)], total, page_size
    return [], None, None


def extract_dotted_value(data: dict, path: str) -> Any:
    """Extract nested value using dot notation, supporting explicit list projection '[*]' and numeric indexing."""
    if not path or not isinstance(data, dict):
        return None

    clean_path = path.strip()
    is_terminal_star = clean_path.endswith("[*]")
    if is_terminal_star:
        clean_path = clean_path[:-3].rstrip(".")

    tokens: List[str] = []
    if clean_path:
        for m in re.finditer(r"\[\*\]|\[(\d+)\]|([^\.\[\]]+)", clean_path):
            if m.group(0) == "[*]":
                tokens.append("[*]")
            elif m.group(1) is not None:
                tokens.append(m.group(1))
            else:
                tokens.append(m.group(2))

    def _resolve(curr: Any, remaining: List[str]) -> Any:
        if not remaining:
            return curr

        token = remaining[0]
        rest = remaining[1:]

        if isinstance(curr, dict):
            if token == "[*]":
                return None
            if token in curr:
                return _resolve(curr[token], rest)
            return None

        elif isinstance(curr, list):
            if token == "[*]":
                if not rest:
                    return curr
                projected = []
                for item in curr:
                    res = _resolve(item, rest)
                    if res is not None:
                        projected.append(res)
                return projected if projected else None
            elif token.isdigit():
                idx = int(token)
                if 0 <= idx < len(curr):
                    return _resolve(curr[idx], rest)
                return None
            else:
                return None

        return None

    res = _resolve(data, tokens) if tokens else None

    if is_terminal_star:
        if res is None:
            return None
        if isinstance(res, list):
            return res
        return [res]

    return res


def sanitize_and_serialize(val: Any) -> Any:
    """Sanitize and serialize field value for SQLite storage.
    Empty strings, empty lists, empty dicts and None become None (SQL NULL).
    Lists are deduplicated preserving order and serialized to JSON.
    """
    if val is None:
        return None

    if isinstance(val, str):
        cleaned = val.strip()
        return cleaned if cleaned else None

    if isinstance(val, (list, tuple, set)):
        unique_items = deduplicate_list(val)
        if not unique_items:
            return None
        return json.dumps(unique_items, ensure_ascii=False)

    if isinstance(val, dict):
        return json.dumps(val, ensure_ascii=False) if val else None

    return val


def is_json_list(v: Any) -> tuple[bool, Optional[List[Any]]]:
    """Return (True, list_obj) if v is a Python list or a JSON-encoded list string."""
    if isinstance(v, list):
        return (True, v)
    if isinstance(v, str):
        parsed = parse_json_list_if_str(v)
        if isinstance(parsed, list):
            return (True, parsed)
    return (False, None)


def merge_field_value(existing_val: Any, new_val: Any, col_name: str = "", item_id: str = "") -> Any:
    """Merge an incoming field value into an existing database value with strict list/scalar type safety."""
    if new_val is None:
        return existing_val

    sanitized_new = sanitize_and_serialize(new_val)
    if sanitized_new is None:
        return existing_val

    if existing_val is None:
        return sanitized_new

    existing_is_list, existing_list_items = is_json_list(existing_val)
    new_is_list, new_list_items = is_json_list(new_val)

    if existing_is_list:
        if not new_is_list:
            print(f"[!] Error: Field '{col_name}' for item '{item_id}' requires a list, but received incompatible scalar value: '{new_val}'. Update rejected.")
            return existing_val
        merged = deduplicate_list((existing_list_items or []) + (new_list_items or []))
        return json.dumps(merged, ensure_ascii=False) if merged else None
    else:
        if new_is_list:
            print(f"[!] Error: Field '{col_name}' for item '{item_id}' is a scalar, but received incompatible list value. Update rejected.")
            return existing_val
        return sanitized_new


def coerce_value_to_type(val: Any, data_type: str, col_name: str = "", item_identifier: str = "") -> tuple[bool, Any]:
    """Coerce and validate a field value against the target column SQL data type."""
    dtype = (data_type or "TEXT").strip().upper()

    if dtype in ("INTEGER", "INT"):
        if val is None:
            return (True, None)
        if isinstance(val, bool):
            print(f"[!] Warning: Field '{col_name}' for item '{item_identifier}' was not loaded: value '{val}' (bool) is incompatible with INT.")
            return (False, None)
        if isinstance(val, int):
            return (True, val)
        if isinstance(val, float) and val.is_integer():
            return (True, int(val))
        if isinstance(val, str):
            stripped = val.strip()
            if re.match(r"^[-+]?\d+$", stripped):
                return (True, int(stripped))
        print(f"[!] Warning: Field '{col_name}' for item '{item_identifier}' was not loaded because value is incompatible: Field requires INT (value: '{val}')")
        return (False, None)

    elif dtype in ("BOOLEAN", "BOOL"):
        if val is None:
            return (True, None)
        if isinstance(val, bool):
            return (True, 1 if val else 0)
        if isinstance(val, int) and not isinstance(val, bool) and val in (0, 1):
            return (True, val)
        if isinstance(val, str):
            s = val.strip().lower()
            if s in ("true", "1", "yes", "t"):
                return (True, 1)
            elif s in ("false", "0", "no", "f"):
                return (True, 0)
        print(f"[!] Warning: Field '{col_name}' for item '{item_identifier}' was not loaded: value '{val}' is incompatible with BOOLEAN.")
        return (False, None)

    elif dtype in ("REAL", "FLOAT", "DOUBLE", "NUMERIC"):
        if val is None:
            return (True, None)
        if isinstance(val, (int, float)) and not isinstance(val, bool):
            return (True, float(val))
        if isinstance(val, str):
            try:
                return (True, float(val.strip()))
            except ValueError:
                pass
        print(f"[!] Warning: Field '{col_name}' for item '{item_identifier}' was not loaded: value '{val}' is incompatible with REAL.")
        return (False, None)

    else:
        if val is None:
            return (True, None)
        if isinstance(val, (int, float, bool)):
            return (True, str(val))
        return (True, sanitize_and_serialize(val))


def resolve_template_key(template: str, service_id: str, rec: dict) -> str:
    """Interpolate template string such as '{service}:{id}' or '{service}:{data.path}'."""
    if not template:
        template = "{service}:{id}"

    res = template.replace("{service}", service_id)
    placeholders = re.findall(r"\{([^}]+)\}", res)
    for ph in placeholders:
        val = extract_dotted_value(rec, ph)
        if val is None:
            val = rec.get(ph)
        if val is not None and str(val).strip() and str(val).strip().lower() != "none":
            res = res.replace(f"{{{ph}}}", str(val))
        else:
            return ""
    return res


def _get_row_col_val(row: Optional[Dict[str, Any]], col_name: str) -> Any:
    """Retrieve a column value from a database row dictionary with case-insensitive fallback."""
    if not row or not isinstance(row, dict):
        return None
    if col_name in row:
        return row[col_name]
    col_lower = col_name.lower()
    if col_lower in row:
        return row[col_lower]
    for k, v in row.items():
        if isinstance(k, str) and k.upper() == col_name:
            return v
    return None


def _extract_transformer_table_deps(
    transformer_expr: Optional[str], table_cols: set[str], target_col: str
) -> set[str]:
    """Extract uppercase table column names referenced as identifiers inside a transformer expression."""
    if not transformer_expr or not transformer_expr.strip():
        return set()
    try:
        norm = TransformerEvaluator.normalize_transformer_syntax(transformer_expr)
        tree = ast.parse(norm, mode="eval")
        deps: set[str] = set()
        for node in ast.walk(tree):
            if isinstance(node, ast.Name):
                cand = node.id.upper()
                if cand in table_cols and cand != target_col and cand not in SYSTEM_RESERVED_COLUMNS:
                    deps.add(cand)
        return deps
    except Exception:
        return set()


def _get_stage_allowed_cols(stage: Any, service_id: str) -> Optional[set[str]]:
    """Return the set of uppercase allowed target columns for a service in a stage, or None if unrestricted."""
    if getattr(stage, "service_mapping_scopes", None) and service_id in stage.service_mapping_scopes:
        raw_scope = stage.service_mapping_scopes[service_id]
        if raw_scope:
            return {c.strip().upper() for c in raw_scope if c and c.strip()}
    return None


def _compute_required_enrichment_namespaces(
    mappings: List[Any],
    enrichment_endpoints: Dict[str, str],
    allowed_cols: Optional[set[str]] = None,
) -> set[str]:
    """Determine which enrichment endpoint namespaces are required by the active scoped field mappings."""
    if not enrichment_endpoints:
        return set()

    defined_ns = {ns.strip() for ns in enrichment_endpoints.keys() if ns and ns.strip()}
    needed: set[str] = set()

    for m in mappings or []:
        t_col = (getattr(m, "target_column", None) or "").strip().upper()
        s_field = getattr(m, "source_field", None) or ""
        if not t_col or not s_field:
            continue
        if allowed_cols is not None and t_col not in allowed_cols:
            continue
        for src in (s.strip() for s in s_field.split(",") if s and s.strip()):
            top_prefix = src.split(".")[0].split("[")[0].strip()
            if top_prefix in defined_ns:
                needed.add(top_prefix)
        transformer_str = getattr(m, "transformer", None) or ""
        if transformer_str:
            for ns in defined_ns:
                if re.search(rf"\b{re.escape(ns)}\b", transformer_str):
                    needed.add(ns)

    # Include upstream namespaces needed to resolve placeholders in required endpoints
    expanded = True
    while expanded:
        expanded = False
        for ns in list(needed):
            ep_tmpl = enrichment_endpoints.get(ns) or ""
            for ph in re.findall(r"\{([^}]+)\}", ep_tmpl):
                ph_prefix = ph.split(".")[0].split("[")[0].strip()
                if ph_prefix in defined_ns and ph_prefix not in needed:
                    needed.add(ph_prefix)
                    expanded = True

    return needed


async def fetch_enrichment_payloads(
    base_url: str,
    api_key: str,
    enrichment_endpoints: Dict[str, str],
    base_context: Dict[str, Any],
    required_namespaces: Optional[set[str]] = None,
    logs: Optional[List[str]] = None,
    client: Optional[httpx.AsyncClient] = None,
) -> Dict[str, Any]:
    """Unified, service-agnostic enrichment endpoint resolver and HTTP fetcher."""
    enrichment_data: Dict[str, Any] = {}
    if not enrichment_endpoints:
        return enrichment_data

    own_client = client is None
    active_client = client or httpx.AsyncClient(timeout=10.0, follow_redirects=True)

    try:
        for namespace, ep_template in enrichment_endpoints.items():
            ns_clean = namespace.strip()
            if not ep_template or not ep_template.strip():
                continue
            if required_namespaces is not None and ns_clean not in required_namespaces:
                continue

            context_dict = {**base_context, **enrichment_data}
            resolved_ep = ep_template.strip()
            missing_ph = False

            for ph in re.findall(r"\{([^}]+)\}", ep_template):
                val = extract_dotted_value(context_dict, ph)
                if val is None:
                    val = context_dict.get(ph)
                if val is None:
                    val = context_dict.get(ph.upper())
                if val is None:
                    val = context_dict.get(ph.lower())

                if val is not None:
                    resolved_ep = resolved_ep.replace(f"{{{ph}}}", urllib.parse.quote(str(val)))
                else:
                    missing_ph = True
                    if logs is not None:
                        logs.append(f"[{ns_clean}] Skipped: Missing placeholder {{{ph}}} in current context.")
                    break

            if missing_ph or "{" in resolved_ep:
                if not missing_ph and logs is not None:
                    logs.append(f"[{ns_clean}] Skipped: Unresolved placeholders remain in {resolved_ep}")
                continue

            if logs is not None:
                logs.append(f"[{ns_clean}] GET {resolved_ep}")
            enrich_url, enrich_headers = prepare_service_request(base_url, resolved_ep, api_key or "")

            try:
                e_resp = await active_client.get(enrich_url, headers=enrich_headers)
                if logs is not None:
                    logs.append(f"[{ns_clean}] HTTP {e_resp.status_code}")
                if e_resp.status_code == 200:
                    e_json = e_resp.json()
                    if isinstance(e_json, dict):
                        enrichment_data[ns_clean] = e_json
                    elif isinstance(e_json, list):
                        enrichment_data[ns_clean] = {"List": e_json}
                elif logs is not None:
                    logs.append(f"[{ns_clean}] Error: {e_resp.text[:100]}")
            except Exception as e:
                if logs is not None:
                    logs.append(f"[{ns_clean}] Exception: {str(e)}")
                else:
                    print(f"[!] Warning enrichment error ({ns_clean}): {e}")
    finally:
        if own_client:
            await active_client.aclose()

    return enrichment_data


def evaluate_reactive_mappings(
    mappings: List[Any],
    payload_context: Dict[str, Any],
    existing_row: Optional[Dict[str, Any]],
    table_cols: set[str],
    allowed_cols: Optional[set[str]] = None,
    item_identifier: str = "",
    initial_changed_columns: Optional[set[str]] = None,
    initial_delta_fields: Optional[Dict[str, Any]] = None,
) -> tuple[Dict[str, Any], set[str]]:
    """Evaluate active field mappings reactively based on source non-nullity and source change deltas."""
    delta_fields: Dict[str, Any] = dict(initial_delta_fields) if initial_delta_fields else {}
    changed_columns: set[str] = set(initial_changed_columns) if initial_changed_columns else set()

    live_row: Dict[str, Any] = {}
    if existing_row:
        for k, v in existing_row.items():
            live_row[k] = v
            if isinstance(k, str):
                live_row[k.upper()] = v
    for k, v in delta_fields.items():
        live_row[k] = v

    seen_triggers_by_col: Dict[str, set[str]] = {}
    max_passes = 5

    for pass_idx in range(max_passes):
        newly_changed_in_pass: set[str] = set()

        for mapping in mappings or []:
            if not getattr(mapping, "target_column", None) or not getattr(mapping, "source_field", None):
                continue
            col_name = mapping.target_column.strip().upper()
            if col_name in SYSTEM_RESERVED_COLUMNS or col_name not in table_cols:
                continue
            if allowed_cols is not None and col_name not in allowed_cols:
                continue

            raw_sources = [s.strip() for s in mapping.source_field.split(",") if s and s.strip()]
            if not raw_sources:
                continue

            has_payload_source = False
            has_non_null_payload = False
            source_table_cols: set[str] = set()
            resolved_values: List[Any] = []

            for src in raw_sources:
                src_upper = src.upper()
                is_table_col = (
                    "." not in src
                    and "[" not in src
                    and src_upper in table_cols
                    and (not isinstance(payload_context, dict) or src not in payload_context)
                )
                if is_table_col:
                    source_table_cols.add(src_upper)
                    resolved_values.append(_get_row_col_val(live_row, src_upper))
                else:
                    has_payload_source = True
                    p_val = extract_dotted_value(payload_context, src)
                    if p_val is None and isinstance(payload_context, dict):
                        p_val = payload_context.get(src)
                    if p_val is not None:
                        has_non_null_payload = True
                    resolved_values.append(p_val)

            if getattr(mapping, "transformer", None):
                extra_deps = _extract_transformer_table_deps(mapping.transformer, table_cols, col_name)
                for dep_col in extra_deps:
                    if dep_col not in source_table_cols:
                        source_table_cols.add(dep_col)
                        if not has_payload_source:
                            resolved_values.append(_get_row_col_val(live_row, dep_col))

            if pass_idx > 0 and not source_table_cols:
                continue

            if has_payload_source and not has_non_null_payload:
                continue
            if all(v is None for v in resolved_values):
                continue

            existing_val = _get_row_col_val(live_row, col_name)

            if source_table_cols and not has_non_null_payload:
                seen_for_col = seen_triggers_by_col.get(col_name, set())
                unseen_table_changes = (source_table_cols & changed_columns) - seen_for_col
                is_uninitialized = (existing_val is None) and (col_name not in seen_triggers_by_col)
                if not is_uninitialized and not unseen_table_changes:
                    continue
                seen_triggers_by_col[col_name] = set(seen_for_col) | (source_table_cols & changed_columns)
            elif pass_idx > 0:
                continue

            val = (
                resolved_values[0]
                if len(resolved_values) == 1
                else next((v for v in resolved_values if v is not None), None)
            )

            eval_context = {"records": live_row, **live_row, **(payload_context or {})}
            if getattr(mapping, "transformer", None):
                try:
                    val = TransformerEvaluator.evaluate(mapping.transformer, val, eval_context)
                except Exception:
                    pass

            if len(raw_sources) == 1 and raw_sources[0].endswith("[*]") and val is not None and not isinstance(val, list):
                val = [val]

            data_type = getattr(mapping, "data_type", "TEXT") or "TEXT"
            ok, coerced_val = coerce_value_to_type(val, data_type, col_name=col_name, item_identifier=item_identifier)
            if not ok:
                continue

            if existing_row is not None or existing_val is not None:
                final_val = merge_field_value(existing_val, coerced_val, col_name=col_name, item_id=item_identifier)
            else:
                final_val = coerced_val

            if existing_row is None and col_name not in live_row:
                if final_val is not None:
                    delta_fields[col_name] = final_val
                    live_row[col_name] = final_val
                    changed_columns.add(col_name)
                    newly_changed_in_pass.add(col_name)
            else:
                if final_val != existing_val:
                    delta_fields[col_name] = final_val
                    live_row[col_name] = final_val
                    changed_columns.add(col_name)
                    newly_changed_in_pass.add(col_name)

        if not newly_changed_in_pass:
            break

    return delta_fields, changed_columns


def _propagate_cross_service_table_mappings(
    stages: List[Any],
    services: Dict[str, Any],
    existing_row: Optional[Dict[str, Any]],
    table_cols: set[str],
    item_identifier: str,
    changed_columns: set[str],
    delta_fields: Dict[str, Any],
) -> tuple[Dict[str, Any], set[str]]:
    """Propagate table-column changes reactively across active service mappings in the given stages."""
    if not changed_columns or not stages or not services:
        return delta_fields, changed_columns

    cur_delta = dict(delta_fields)
    cur_changed = set(changed_columns)
    trigger_cols = set(changed_columns)

    for _ in range(5):
        if not trigger_cols:
            break
        prev_changed = set(cur_changed)
        for st in stages:
            if not getattr(st, "enabled", True) or not getattr(st, "service_ids", None):
                continue
            for s_id in st.service_ids:
                s_cfg = services.get(s_id)
                if not s_cfg or not getattr(s_cfg, "enabled", True) or not getattr(s_cfg, "field_mappings", None):
                    continue
                allowed = _get_stage_allowed_cols(st, s_id)
                cur_delta, new_changed = evaluate_reactive_mappings(
                    mappings=s_cfg.field_mappings,
                    payload_context={},
                    existing_row=existing_row,
                    table_cols=table_cols,
                    allowed_cols=allowed,
                    item_identifier=item_identifier,
                    initial_changed_columns=trigger_cols,
                    initial_delta_fields=cur_delta,
                )
                cur_changed.update(new_changed)
        trigger_cols = cur_changed - prev_changed

    return cur_delta, cur_changed


def _is_passive_sink_stage(stage: Any) -> bool:
    """Return True if the stage is a downstream passive Sink Stage (has start_condition, no complete_condition)."""
    has_start = bool(getattr(stage, "start_condition", None) and str(stage.start_condition).strip())
    has_complete = bool(getattr(stage, "complete_condition", None) and str(stage.complete_condition).strip())
    return has_start and not has_complete


def _is_root_stage(stage: Any) -> bool:
    """Return True if the stage is a Root Stage (no start_condition)."""
    return not bool(getattr(stage, "start_condition", None) and str(stage.start_condition).strip())


def _resolve_stage_pipelines(stage: Any, settings: Any) -> List[Any]:
    """Return the list of enabled PipelineConfig objects targeted by the given stage."""
    settings.normalize_pipelines()
    st_pids = getattr(stage, "pipeline_ids", None) or []
    if st_pids:
        return [settings.pipelines[pid] for pid in st_pids if pid in settings.pipelines and settings.pipelines[pid].enabled]
    return [p for p in settings.pipelines.values() if p.enabled]


class TaskScheduler:
    def __init__(self):
        self._running = False
        self._tasks: Dict[str, asyncio.Task] = {}
        self._last_runs: Dict[str, str] = {}
        self._status: Dict[str, Dict[str, Any]] = {}
        self._pipeline_locks: Dict[str, asyncio.Lock] = {}

    def is_running(self) -> bool:
        return self._running

    def _get_pipeline_lock(self, table_name: str) -> asyncio.Lock:
        if table_name not in self._pipeline_locks:
            self._pipeline_locks[table_name] = asyncio.Lock()
        return self._pipeline_locks[table_name]

    async def start(self) -> None:
        if self._running:
            return
        self._running = True
        print("[i] TaskScheduler started.")
        settings = await config_manager.get_settings()

        # Spawn stage-driven loops exclusively for enabled non-passive stages (Root and Consumer)
        for stage in settings.stages:
            if stage.enabled and not _is_passive_sink_stage(stage):
                task_key = f"stage:{stage.id}"
                self._tasks[task_key] = asyncio.create_task(self._stage_loop(stage.id))

        # Spawn periodic retention pruning and custom tables Ts synchronization loops
        self._tasks["system:retention"] = asyncio.create_task(self._retention_loop())
        self._tasks["system:custom_tables"] = asyncio.create_task(self._custom_tables_loop())

    async def stop(self) -> None:
        self._running = False
        for task in self._tasks.values():
            task.cancel()
        self._tasks.clear()
        print("[i] TaskScheduler stopped.")

    async def restart(self) -> None:
        await self.stop()
        await self.start()

    async def _ingest_root_service_for_stage(
        self,
        active_stage: Any,
        service_id: str,
        service_cfg: Any,
        table_name: str,
        settings: Any,
    ) -> Tuple[int, int]:
        """Execute Root Stage polling within the stage's lookback window (delta_t) and apply scoped reactive mappings."""
        new_ingested = 0
        in_place_updates = 0

        if not service_cfg.enabled or not service_cfg.base_url:
            return 0, 0

        poll_ep = (getattr(service_cfg, "poll_endpoint", None) or "").strip()
        if not poll_ep:
            return 0, 0

        interval_sec = active_stage.interval_seconds
        if not interval_sec or interval_sec <= 0:
            interval_sec = getattr(settings, "global_poll_interval_seconds", 300)
        interval_sec = max(int(interval_sec), 10)

        now_utc = datetime.datetime.now(datetime.timezone.utc)
        lookback_dt = now_utc - datetime.timedelta(seconds=interval_sec)
        stage_activated_dt = _parse_timestamp(active_stage.last_activated_at) if active_stage.last_activated_at else None

        # Interpolate optional lookback window placeholders in poll_endpoint
        interpolated_poll_ep = (
            poll_ep
            .replace("{interval_seconds}", str(interval_sec))
            .replace("{interval_minutes}", str(max(1, interval_sec // 60)))
            .replace("{lookback_iso}", lookback_dt.isoformat())
            .replace("{lookback_unix}", str(int(lookback_dt.timestamp())))
        )

        allowed_events = set(service_cfg.allowed_event_types) if service_cfg.allowed_event_types else None
        allowed_cols = _get_stage_allowed_cols(active_stage, service_id)
        required_ns = _compute_required_enrichment_namespaces(
            service_cfg.field_mappings,
            service_cfg.enrichment_endpoints,
            allowed_cols,
        )

        records: List[dict] = []
        current_page = 1
        max_pages = 25

        async with httpx.AsyncClient(timeout=15.0, follow_redirects=True) as client:
            while current_page <= max_pages:
                ep_to_fetch = interpolated_poll_ep
                if "page=" in ep_to_fetch:
                    ep_to_fetch = re.sub(r"page=\d+", f"page={current_page}", ep_to_fetch)
                elif "?" in ep_to_fetch:
                    ep_to_fetch = f"{ep_to_fetch}&page={current_page}"
                else:
                    ep_to_fetch = f"{ep_to_fetch}?page={current_page}"

                history_url, headers = prepare_service_request(
                    service_cfg.base_url,
                    ep_to_fetch,
                    service_cfg.api_key or "",
                )

                resp = await client.get(history_url, headers=headers)
                if resp.status_code != 200:
                    if current_page == 1:
                        raise Exception(f"HTTP {resp.status_code}: {resp.text[:150]}")
                    break

                # Use service HTTP Date header as clock reference to avoid timezone/clock-skew issues
                resp_date_hdr = resp.headers.get("Date") if hasattr(resp, "headers") and resp.headers else None
                ref_clock = _parse_timestamp(resp_date_hdr) or now_utc
                cutoff_dt = ref_clock - datetime.timedelta(seconds=interval_sec)
                if stage_activated_dt and stage_activated_dt > cutoff_dt:
                    cutoff_dt = stage_activated_dt

                data = resp.json()
                is_direct_list = isinstance(data, list)
                page_records, total_available, page_size = _extract_payload_records(data)
                if not page_records:
                    break

                reached_older_boundary = False
                for r in page_records:
                    rec_date_str = _get_item_date(r)
                    rec_dt = _parse_timestamp(rec_date_str) if rec_date_str else None

                    # If the record carries a timestamp and is older than stage activation cutoff, skip and stop pagination
                    if stage_activated_dt and rec_dt and rec_dt < stage_activated_dt:
                        reached_older_boundary = True
                        continue

                    # If the record carries a timestamp older than the stage's lookback window (t_ref - delta_t), skip it
                    if rec_dt and rec_dt < cutoff_dt:
                        reached_older_boundary = True
                        continue

                    records.append(r)

                if is_direct_list or reached_older_boundary:
                    break
                if total_available is not None and len(records) >= total_available:
                    break
                if page_size is not None and len(page_records) < page_size:
                    break
                current_page += 1

            records.sort(key=_get_item_date)
            table_cols = {c["name"].upper() for c in await db_manager.get_table_columns(table_name)}

            for rec in records:
                event_type = rec.get("eventType")
                if allowed_events and event_type not in allowed_events:
                    continue

                pipeline_key = resolve_template_key(service_cfg.pipeline_key_template, service_id, rec)
                is_key_unresolved = (
                    not pipeline_key
                    or "{" in pipeline_key
                    or pipeline_key.endswith(":None")
                    or pipeline_key == f"{service_id}:"
                )
                if is_key_unresolved and getattr(service_cfg, "fallback_lookup_column", None) and getattr(service_cfg, "fallback_lookup_field", None):
                    lookup_col = service_cfg.fallback_lookup_column.strip().upper()
                    lookup_field = service_cfg.fallback_lookup_field.strip()
                    if lookup_col in table_cols:
                        lookup_val = extract_dotted_value(rec, lookup_field) or rec.get(lookup_field)
                        if lookup_val:
                            match_query = f"SELECT PIPELINE_KEY FROM {table_name} WHERE {lookup_col} = ? AND PIPELINE_KEY LIKE ? LIMIT 1;"
                            matched_rows = await db_manager.query(match_query, (str(lookup_val), f"{service_id}:%"))
                            if matched_rows and matched_rows[0].get("PIPELINE_KEY"):
                                pipeline_key = matched_rows[0]["PIPELINE_KEY"]
                                is_key_unresolved = False

                if not pipeline_key or is_key_unresolved:
                    continue

                existing_rows = await db_manager.query(
                    f"SELECT * FROM {table_name} WHERE PIPELINE_KEY = ?;",
                    (pipeline_key,),
                )
                existing_row = existing_rows[0] if existing_rows else None

                # Lazy enrichment: only query enrichment endpoints whose namespaces are required by scoped mappings
                enrichment_data = await fetch_enrichment_payloads(
                    base_url=service_cfg.base_url,
                    api_key=service_cfg.api_key or "",
                    enrichment_endpoints=service_cfg.enrichment_endpoints,
                    base_context=rec,
                    required_namespaces=required_ns,
                    client=client,
                )

                payload_context = {"records": rec, **rec, **enrichment_data}
                mapped_fields, changed_cols = evaluate_reactive_mappings(
                    mappings=service_cfg.field_mappings,
                    payload_context=payload_context,
                    existing_row=existing_row,
                    table_cols=table_cols,
                    allowed_cols=allowed_cols,
                    item_identifier=pipeline_key,
                )

                if changed_cols:
                    if existing_row:
                        enabled_stages = sorted([s for s in settings.stages if s.enabled], key=lambda s: s.order)
                        row_stage_slug = _get_row_col_val(existing_row, "STAGE")
                        row_stage = next(
                            (s for s in enabled_stages if s.id == row_stage_slug or str(s.order) == str(row_stage_slug)),
                            active_stage,
                        )
                        max_order = row_stage.order if row_stage else active_stage.order
                        eligible_stages = [s for s in enabled_stages if s.order <= max_order] or [active_stage]
                    else:
                        eligible_stages = [active_stage]

                    mapped_fields, changed_cols = _propagate_cross_service_table_mappings(
                        stages=eligible_stages,
                        services=settings.services,
                        existing_row=existing_row,
                        table_cols=table_cols,
                        item_identifier=pipeline_key,
                        changed_columns=changed_cols,
                        delta_fields=mapped_fields,
                    )

                if existing_row:
                    # Passive in-place update (including when the item rests in a SINK stage)
                    if mapped_fields:
                        set_clauses = [f"{col} = ?" for col in mapped_fields.keys()]
                        update_sql = f"UPDATE {table_name} SET {', '.join(set_clauses)}, LAST_UPDATED = CURRENT_TIMESTAMP WHERE PIPELINE_KEY = ?;"
                        await db_manager.execute(update_sql, tuple(mapped_fields.values()) + (pipeline_key,))
                        in_place_updates += 1
                        print(f"[i] Existing entry updated in-place on {table_name}: '{pipeline_key}'.")
                else:
                    # Insert new entry using ServerManager's internal UTC clock for CREATED_AT
                    is_sink = not active_stage.complete_condition or not active_stage.complete_condition.strip()
                    initial_status = "SINK" if is_sink else "PENDING"
                    server_now_iso = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%d %H:%M:%S")
                    col_names = ["PIPELINE_KEY", "STAGE", "STATUS", "CREATED_AT"] + list(mapped_fields.keys())
                    placeholders = ["?"] * len(col_names)
                    values = [pipeline_key, active_stage.id, initial_status, server_now_iso] + list(mapped_fields.values())

                    insert_sql = f'INSERT INTO {table_name} ({", ".join(col_names)}) VALUES ({", ".join(placeholders)});'
                    await db_manager.execute(insert_sql, tuple(values))
                    new_ingested += 1
                    print(f"[i] New entry ingested on {table_name}: '{pipeline_key}' into stage '{active_stage.id}' (STATUS = '{initial_status}').")

        return new_ingested, in_place_updates

    async def trigger_now(self, target_id: str) -> Dict[str, Any]:
        """Trigger execution for a specific service_id or stage_id across its assigned stages and pipelines."""
        settings = await config_manager.get_settings()
        services_dict = settings.services
        now_str = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        self._last_runs[target_id] = now_str

        # Case 1: target_id is a configured service_id
        if target_id in services_dict:
            service_cfg = services_dict[target_id]
            if not service_cfg.enabled or not service_cfg.base_url:
                self._status[target_id] = {
                    "last_run": now_str,
                    "status": "skipped",
                    "message": f"Service '{service_cfg.name}' is disabled or has no base_url configured.",
                }
                return self._status[target_id]

            active_root_stages = [
                st for st in settings.stages
                if st.enabled and _is_root_stage(st) and target_id in st.service_ids
            ]
            active_consumer_stages = [
                st for st in settings.stages
                if st.enabled and not _is_root_stage(st) and not _is_passive_sink_stage(st) and target_id in st.service_ids
            ]

            if not active_root_stages and not active_consumer_stages:
                self._status[target_id] = {
                    "last_run": now_str,
                    "status": "idle",
                    "message": f"Service '{service_cfg.name}' is idle (not assigned to any active stage).",
                }
                return self._status[target_id]

            try:
                new_ingested = 0
                reconcile_updates = await self.reconcile_stages(service_filter=target_id)

                for root_st in active_root_stages:
                    target_pipelines = _resolve_stage_pipelines(root_st, settings)
                    for p_cfg in target_pipelines:
                        t_name = p_cfg.resolved_table_name()
                        async with self._get_pipeline_lock(t_name):
                            ing, upd = await self._ingest_root_service_for_stage(
                                root_st, target_id, service_cfg, t_name, settings
                            )
                            new_ingested += ing
                            reconcile_updates += upd

                self._status[target_id] = {
                    "last_run": now_str,
                    "status": "success",
                    "message": f"Execution completed ({service_cfg.name}): {new_ingested} new entries ingested, {reconcile_updates} items reconciled.",
                    "new_items": new_ingested,
                }
                return self._status[target_id]
            except Exception as e:
                print(f"[x] Error executing ingestion for {target_id}: {e}")
                self._status[target_id] = {
                    "last_run": now_str,
                    "status": "error",
                    "message": f"Execution failed: {str(e)}",
                }
                return self._status[target_id]

        # Case 2: target_id is a stage_id
        stage_obj = next((s for s in settings.stages if s.id == target_id), None)
        if stage_obj:
            return await self.run_stage_cycle(stage_obj.id)

        return {"status": "error", "message": f"Target '{target_id}' not found"}

    async def run_stage_cycle(self, stage_id: str) -> Dict[str, Any]:
        """Execute a complete cycle for a single active stage across all its assigned pipelines and services."""
        settings = await config_manager.get_settings()
        stage = next((s for s in settings.stages if s.id == stage_id), None)
        now_str = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        task_key = f"stage:{stage_id}"
        self._last_runs[task_key] = now_str

        if not stage or not stage.enabled or _is_passive_sink_stage(stage):
            self._status[task_key] = {"last_run": now_str, "status": "skipped", "message": f"Stage '{stage_id}' is disabled or passive."}
            return self._status[task_key]

        try:
            new_ingested = 0
            reconcile_updates = 0
            target_pipelines = _resolve_stage_pipelines(stage, settings)

            for p_cfg in target_pipelines:
                t_name = p_cfg.resolved_table_name()
                async with self._get_pipeline_lock(t_name):
                    if _is_root_stage(stage):
                        for s_id in stage.service_ids:
                            s_cfg = settings.services.get(s_id)
                            if s_cfg and s_cfg.enabled:
                                self._last_runs[s_id] = now_str
                                ing, upd = await self._ingest_root_service_for_stage(stage, s_id, s_cfg, t_name, settings)
                                new_ingested += ing
                                reconcile_updates += upd
                                self._status[s_id] = {
                                    "last_run": now_str,
                                    "status": "success",
                                    "message": f"Stage '{stage.name}' cycle completed: {ing} new, {upd} updated.",
                                    "new_items": ing,
                                }
                    reconcile_updates += await self.reconcile_stages(table_name=t_name, stage_filter=stage.id)

            self._status[task_key] = {
                "last_run": now_str,
                "status": "success",
                "message": f"Stage '{stage.name}' cycle completed: {new_ingested} new entries, {reconcile_updates} reconciled.",
                "new_items": new_ingested,
            }
            return self._status[task_key]
        except Exception as e:
            print(f"[x] Error in stage cycle '{stage_id}': {e}")
            self._status[task_key] = {"last_run": now_str, "status": "error", "message": str(e)}
            return self._status[task_key]

    async def _execute_consumer_enrichment(
        self,
        service_cfg: Any,
        row_dict: Dict[str, Any],
        table_cols: set,
        service_id: Optional[str] = None,
        allowed_columns: Optional[set[str]] = None,
        initial_changed_columns: Optional[set[str]] = None,
        table_name: str = "PIPELINE_DEFAULT",
    ) -> bool:
        """Execute required enrichment endpoints lazily and apply scoped field mappings reactively for a row."""
        endpoints_to_query: Dict[str, str] = dict(service_cfg.enrichment_endpoints or {})
        if service_cfg.poll_endpoint and "{" in service_cfg.poll_endpoint:
            endpoints_to_query["primary"] = service_cfg.poll_endpoint

        if not endpoints_to_query and not service_cfg.field_mappings:
            return False

        required_ns = _compute_required_enrichment_namespaces(
            service_cfg.field_mappings,
            endpoints_to_query,
            allowed_columns,
        )
        if "primary" in endpoints_to_query and required_ns is not None:
            # Include 'primary' if any scoped mapping pulls from root payload paths
            for m in service_cfg.field_mappings or []:
                t_col = (getattr(m, "target_column", None) or "").strip().upper()
                if allowed_columns is not None and t_col not in allowed_columns:
                    continue
                s_field = getattr(m, "source_field", None) or ""
                for src in (s.strip() for s in s_field.split(",") if s and s.strip()):
                    top = src.split(".")[0].split("[")[0].strip()
                    if top not in endpoints_to_query and top.upper() not in table_cols:
                        required_ns.add("primary")

        enrichment_data = await fetch_enrichment_payloads(
            base_url=service_cfg.base_url,
            api_key=service_cfg.api_key or "",
            enrichment_endpoints=endpoints_to_query,
            base_context={"records": row_dict, **row_dict},
            required_namespaces=required_ns,
        )

        # Unpack primary endpoint fields at root of payload_context if queried
        primary_payload = enrichment_data.get("primary")
        primary_root = primary_payload if isinstance(primary_payload, dict) else {}

        non_col_row_data = {
            k: v for k, v in row_dict.items()
            if not (isinstance(k, str) and k == k.upper() and (k in table_cols or k in SYSTEM_RESERVED_COLUMNS))
        }
        payload_context = {**non_col_row_data, **primary_root, **enrichment_data}
        item_id = str(row_dict.get("PIPELINE_KEY") or row_dict.get("ID"))

        delta_fields, updated_changed_cols = evaluate_reactive_mappings(
            mappings=service_cfg.field_mappings,
            payload_context=payload_context,
            existing_row=row_dict,
            table_cols=table_cols,
            allowed_cols=allowed_columns,
            item_identifier=item_id,
            initial_changed_columns=initial_changed_columns,
        )

        if initial_changed_columns is not None:
            initial_changed_columns.update(updated_changed_cols)

        if delta_fields:
            set_clauses = [f"{k} = ?" for k in delta_fields.keys()]
            vals = list(delta_fields.values()) + [row_dict["ID"]]
            await db_manager.execute(
                f"UPDATE {table_name} SET {', '.join(set_clauses)}, LAST_UPDATED = CURRENT_TIMESTAMP WHERE ID = ?;",
                tuple(vals),
            )
            print(f"[i] Row {row_dict['ID']} ({row_dict.get('PIPELINE_KEY')}) on {table_name} enriched with {len(delta_fields)} mapped columns.")
            return True
        return False

    async def _update_mapped_values_for_stage(
        self,
        stage: Any,
        row_id: int,
        table_cols: set,
        settings: Any,
        table_name: str = "PIPELINE_DEFAULT",
        service_filter: Optional[str] = None,
    ) -> bool:
        """Run enrichment and mapping for services assigned to the given stage."""
        if not stage or not stage.service_ids or _is_passive_sink_stage(stage):
            return False

        updated_any = False
        stage_changed_columns: set[str] = set()
        last_row_dict: Optional[Dict[str, Any]] = None

        for s_id in stage.service_ids:
            if service_filter and s_id != service_filter:
                continue
            service_cfg = settings.services.get(s_id)
            if not service_cfg or not service_cfg.enabled:
                continue

            allowed_cols = _get_stage_allowed_cols(stage, s_id)

            try:
                current_rows = await db_manager.query(
                    f"SELECT * FROM {table_name} WHERE ID = ?;",
                    (row_id,),
                )
                if not current_rows:
                    break
                row_dict = dict(current_rows[0])
                last_row_dict = row_dict
                call_kwargs: Dict[str, Any] = {
                    "service_id": s_id,
                    "allowed_columns": allowed_cols,
                }
                if stage_changed_columns:
                    call_kwargs["initial_changed_columns"] = stage_changed_columns
                if table_name != "PIPELINE_DEFAULT":
                    call_kwargs["table_name"] = table_name

                updated = await self._execute_consumer_enrichment(
                    service_cfg, row_dict, table_cols, **call_kwargs
                )
                if updated:
                    updated_any = True
            except Exception as enrich_err:
                print(f"[!] Error during enrichment with service '{s_id}' for row {row_id}: {enrich_err}")

        if stage_changed_columns and len(stage.service_ids) > 1:
            try:
                latest_rows = await db_manager.query(
                    f"SELECT * FROM {table_name} WHERE ID = ?;",
                    (row_id,),
                )
                if latest_rows:
                    last_row_dict = dict(latest_rows[0])
                if last_row_dict:
                    item_id = str(last_row_dict.get("PIPELINE_KEY") or row_id)
                    extra_deltas, _ = _propagate_cross_service_table_mappings(
                        stages=[stage],
                        services=settings.services,
                        existing_row=last_row_dict,
                        table_cols=table_cols,
                        item_identifier=item_id,
                        changed_columns=stage_changed_columns,
                        delta_fields={},
                    )
                    if extra_deltas:
                        set_clauses = [f"{k} = ?" for k in extra_deltas.keys()]
                        vals = list(extra_deltas.values()) + [row_id]
                        await db_manager.execute(
                            f"UPDATE {table_name} SET {', '.join(set_clauses)}, LAST_UPDATED = CURRENT_TIMESTAMP WHERE ID = ?;",
                            tuple(vals),
                        )
                        updated_any = True
            except Exception as prop_err:
                print(f"[!] Error propagating table mappings for row {row_id}: {prop_err}")

        return updated_any

    async def reconcile_stages(
        self,
        table_name: Optional[str] = None,
        stage_filter: Optional[str] = None,
        service_filter: Optional[str] = None,
    ) -> int:
        """Evaluate pipeline items across stages with passive SINK handling, grace periods, and watchdogs."""
        updates_count = 0
        try:
            settings = await config_manager.get_settings()
            enabled_stages = sorted([s for s in settings.stages if s.enabled], key=lambda s: s.order)
            if not enabled_stages:
                return 0

            stages_by_id = {s.id: s for s in enabled_stages}
            target_tables = [table_name] if table_name else [p.resolved_table_name() for p in settings.pipelines.values() if p.enabled]
            if not target_tables:
                target_tables = ["PIPELINE_DEFAULT"]

            now_utc = datetime.datetime.now(datetime.timezone.utc)

            for tbl in target_tables:
                table_cols = {c["name"].upper() for c in await db_manager.get_table_columns(tbl)}
                pipeline_rows = await db_manager.query(f"SELECT * FROM {tbl} ORDER BY ID ASC;")
                if not pipeline_rows:
                    continue

                for row in pipeline_rows:
                    row_dict = dict(row)
                    row_id = row_dict["ID"]
                    current_stage_slug = row_dict.get("STAGE")

                    current_stage = stages_by_id.get(current_stage_slug)
                    if not current_stage:
                        current_stage = next((s for s in enabled_stages if str(s.order) == str(current_stage_slug)), None)
                    if not current_stage:
                        continue

                    status = str(row_dict.get("STATUS") or "").upper()
                    is_sink = (status == "SINK") or (not current_stage.complete_condition or not current_stage.complete_condition.strip())

                    # Passive SINK: rows in SINK do NOT execute active polling loops
                    if is_sink:
                        continue

                    if stage_filter and current_stage.id != stage_filter and status != "COMPLETED":
                        continue

                    # Check PENDING completion, grace period, and watchdog timeout
                    if status == "PENDING":
                        created_dt = _parse_timestamp(row_dict.get("CREATED_AT"))
                        updated_dt = _parse_timestamp(row_dict.get("LAST_UPDATED")) or created_dt

                        # Grace period check for Root Stages
                        grace_mins = getattr(current_stage, "grace_period_minutes", 0) or 0
                        within_grace = False
                        if _is_root_stage(current_stage) and grace_mins > 0 and created_dt:
                            elapsed_mins = (now_utc - created_dt).total_seconds() / 60.0
                            if elapsed_mins < grace_mins:
                                within_grace = True

                        # Watchdog timeout check
                        timeout_mins = getattr(current_stage, "timeout_minutes", 0) or 0
                        if timeout_mins > 0 and updated_dt:
                            stalled_mins = (now_utc - updated_dt).total_seconds() / 60.0
                            if stalled_mins > timeout_mins:
                                pk_label = row_dict.get("PIPELINE_KEY") or f"ID:{row_id}"
                                existing_inc = await db_manager.query(
                                    "SELECT ID FROM SYSTEM_INCIDENTS WHERE INCIDENT_CODE = 'WARN_PIPELINE_STALLED' AND RESOLVED = 0 AND DETAILS LIKE ? LIMIT 1;",
                                    (f"%{pk_label}%",),
                                )
                                if not existing_inc:
                                    await db_manager.execute(
                                        """
                                        INSERT INTO SYSTEM_INCIDENTS (INCIDENT_CODE, SEVERITY, COMPONENT, DETAILS, RESOLVED)
                                        VALUES ('WARN_PIPELINE_STALLED', 'WARNING', ?, ?, 0);
                                        """,
                                        (
                                            current_stage.id,
                                            f"Item '{pk_label}' on {tbl} stalled in stage '{current_stage.name}' for {int(stalled_mins)}m (timeout: {timeout_mins}m).",
                                        ),
                                    )

                        cond = current_stage.complete_condition
                        is_completed = False
                        if not within_grace and cond and cond.strip():
                            ctx = {**row_dict, "STAGE": current_stage.id, "stage": current_stage.id}
                            for s in enabled_stages:
                                ctx[f"stage.{s.id}.completed"] = (s.order <= current_stage.order)
                                ctx[f"stage.{s.order}.completed"] = (s.order <= current_stage.order)
                            try:
                                if PredicateEvaluator.evaluate(cond, ctx):
                                    is_completed = True
                            except Exception as eval_err:
                                print(f"[!] Error evaluating complete_condition for row {row_id} in stage '{current_stage.id}': {eval_err}")

                        if not is_completed:
                            enriched = await self._update_mapped_values_for_stage(
                                current_stage, row_id, table_cols, settings, table_name=tbl, service_filter=service_filter
                            )
                            if enriched:
                                updates_count += 1
                            continue
                        else:
                            await db_manager.execute(
                                f"UPDATE {tbl} SET STATUS = 'COMPLETED', LAST_UPDATED = CURRENT_TIMESTAMP WHERE ID = ?;",
                                (row_id,),
                            )
                            status = "COMPLETED"
                            row_dict["STATUS"] = "COMPLETED"
                            updates_count += 1

                    # Evaluate forward transition for COMPLETED rows
                    if status == "COMPLETED":
                        candidate_stages = sorted(
                            [
                                s for s in enabled_stages
                                if s.order > current_stage.order and s.start_condition and s.start_condition.strip()
                            ],
                            key=lambda s: s.order,
                        )

                        ctx = {**row_dict, "STAGE": current_stage.id, "stage": current_stage.id}
                        for s in enabled_stages:
                            ctx[f"stage.{s.id}.completed"] = (s.order <= current_stage.order)
                            ctx[f"stage.{s.order}.completed"] = (s.order <= current_stage.order)

                        transitioned_stage = None
                        for target_stage in candidate_stages:
                            try:
                                if PredicateEvaluator.evaluate(target_stage.start_condition, ctx):
                                    transitioned_stage = target_stage
                                    break
                            except Exception as eval_err:
                                print(f"[!] Error evaluating start_condition of stage '{target_stage.id}' for row {row_id}: {eval_err}")

                        if transitioned_stage:
                            target_is_sink = not transitioned_stage.complete_condition or not transitioned_stage.complete_condition.strip()
                            new_status = "SINK" if target_is_sink else "PENDING"
                            await db_manager.execute(
                                f"UPDATE {tbl} SET STAGE = ?, STATUS = ?, LAST_UPDATED = CURRENT_TIMESTAMP WHERE ID = ?;",
                                (transitioned_stage.id, new_status, row_id),
                            )
                            updates_count += 1
                            if not target_is_sink:
                                await self._update_mapped_values_for_stage(
                                    transitioned_stage, row_id, table_cols, settings, table_name=tbl, service_filter=service_filter
                                )
                            continue

        except Exception as err:
            print(f"[!] Error in reconcile_stages: {err}")

        return updates_count

    async def _stage_loop(self, stage_id: str) -> None:
        while self._running:
            try:
                settings = await config_manager.get_settings()
                stage_cfg = next((s for s in settings.stages if s.id == stage_id), None)
                if not stage_cfg or not stage_cfg.enabled or _is_passive_sink_stage(stage_cfg):
                    break

                configured_interval = stage_cfg.interval_seconds
                if configured_interval is None or configured_interval <= 0:
                    configured_interval = getattr(settings, "global_poll_interval_seconds", 300)

                interval = max(int(configured_interval), 10)
                await self.run_stage_cycle(stage_id)
                await asyncio.sleep(interval)
            except asyncio.CancelledError:
                break
            except Exception as e:
                print(f"[x] Error in scheduler loop for stage {stage_id}: {e}")
                await asyncio.sleep(30)

    async def _retention_loop(self) -> None:
        """Periodically prune expired SINK records across all enabled pipelines based on LAST_UPDATED."""
        while self._running:
            try:
                settings = await config_manager.get_settings()
                settings.normalize_pipelines()
                for pid, pcfg in settings.pipelines.items():
                    if not pcfg.enabled:
                        continue
                    ret_days = pcfg.retention_days if pcfg.retention_days is not None else settings.retention_days
                    if ret_days and int(ret_days) > 0:
                        t_name = pcfg.resolved_table_name()
                        async with self._get_pipeline_lock(t_name):
                            pruned = await db_manager.prune_pipeline_retention(t_name, int(ret_days))
                            if pruned > 0:
                                print(f"[i] Retention pruned {pruned} expired SINK records from {t_name}.")
                await asyncio.sleep(300)
            except asyncio.CancelledError:
                break
            except Exception as e:
                print(f"[!] Error in retention loop: {e}")
                await asyncio.sleep(60)

    async def _custom_tables_loop(self) -> None:
        """Periodically synchronize persistent Custom Tables (MODE = 'TABLE') that configure REFRESH_INTERVAL_SECONDS (Ts)."""
        last_sync_map: Dict[str, float] = {}
        while self._running:
            try:
                loop_now = asyncio.get_running_loop().time()
                rows = await db_manager.query(
                    "SELECT VIEW_NAME, REFRESH_INTERVAL_SECONDS FROM CUSTOM_VIEWS WHERE MODE = 'TABLE' AND REFRESH_INTERVAL_SECONDS IS NOT NULL AND REFRESH_INTERVAL_SECONDS > 0;"
                )
                for r in rows:
                    vname = r["VIEW_NAME"]
                    interval_ts = max(int(r["REFRESH_INTERVAL_SECONDS"]), 10)
                    last_ts = last_sync_map.get(vname, 0.0)
                    if (loop_now - last_ts) >= interval_ts:
                        await db_manager.sync_custom_table(vname)
                        last_sync_map[vname] = loop_now
                await asyncio.sleep(10)
            except asyncio.CancelledError:
                break
            except Exception as e:
                print(f"[!] Error in custom tables sync loop: {e}")
                await asyncio.sleep(30)

    def get_scheduler_status(self) -> Dict[str, Any]:
        return {
            "running": self._running,
            "tasks": self._status,
            "last_runs": self._last_runs,
        }


scheduler = TaskScheduler()
