"""Task execution scheduler with stage priority, dependency management, and active ingestion."""

import re
import json
import asyncio
import datetime
import urllib.parse
import httpx
from typing import Any, Dict, List, Optional

from src.core.config import config_manager
from src.core.database import db_manager, SYSTEM_RESERVED_COLUMNS
from src.core.predicates import PredicateEvaluator, TransformerEvaluator
from src.api.pipeline import prepare_service_request


def _get_item_date(r: dict) -> str:
    """Extract item date/timestamp string from record dictionary."""
    if not isinstance(r, dict):
        return ""
    val = r.get("date") or r.get("Created") or r.get("Imported") or r.get("CreatedAt") or r.get("DateCreated") or ""
    return str(val)


def _parse_timestamp(val: Any) -> Optional[datetime.datetime]:
    """Parse ISO or SQL timestamp string into UTC aware datetime."""
    if not val:
        return None
    try:
        dt = datetime.datetime.fromisoformat(str(val).strip().replace("Z", "+00:00"))
        if dt.tzinfo is None:
            dt = dt.replace(tzinfo=datetime.timezone.utc)
        return dt
    except Exception:
        return None


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
                # Do not project automatically across a list without explicit '[*]' or numeric index
                return None

        return None

    res = _resolve(data, tokens) if tokens else None

    if is_terminal_star:
        if res is None:
            return None
        if isinstance(res, list):
            return res
        if isinstance(res, (str, int, float, bool)):
            return [res]
        return [res]

    return res


def sanitize_and_serialize(val: Any) -> Any:
    """Sanitize and serialize field value for SQLite storage.
    Empty strings, empty lists, empty dicts and None become None (SQL NULL).
    Lists are deduplicated preserving order and serialized to JSON.
    Dicts are serialized to JSON.
    """
    if val is None:
        return None

    if isinstance(val, str):
        cleaned = val.strip()
        return cleaned if cleaned else None

    if isinstance(val, (list, tuple, set)):
        seen = set()
        unique_items = []
        for item in val:
            if item is None or (isinstance(item, str) and not item.strip()):
                continue
            key = item.strip().lower() if isinstance(item, str) else str(item)
            if key not in seen:
                seen.add(key)
                unique_items.append(item.strip() if isinstance(item, str) else item)
        if not unique_items:
            return None
        return json.dumps(unique_items, ensure_ascii=False)

    if isinstance(val, dict):
        return json.dumps(val, ensure_ascii=False) if val else None

    return val


def is_json_list(v: Any) -> tuple[bool, Optional[List[Any]]]:
    """Helper that returns (True, list_obj) if v is a Python list or a string
    starting with '[' and ending with ']' that successfully parses as a JSON list.
    Otherwise returns (False, None).
    """
    if isinstance(v, list):
        return (True, v)
    if isinstance(v, str):
        stripped = v.strip()
        if stripped.startswith("[") and stripped.endswith("]"):
            try:
                parsed = json.loads(stripped)
                if isinstance(parsed, list):
                    return (True, parsed)
            except Exception:
                pass
    return (False, None)


def merge_field_value(existing_val: Any, new_val: Any, col_name: str = "", item_id: str = "") -> Any:
    """Merge an incoming field value into an existing database value with type safety.
    Preserves existing_val if new_val is None.
    Accepts new_val if existing_val is None.
    Enforces list/scalar type integrity and merges JSON lists deduplicating items.
    """
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

        seen = set()
        merged = []
        for item in (existing_list_items or []) + (new_list_items or []):
            if item is None:
                continue
            if isinstance(item, str):
                cleaned = item.strip()
                if not cleaned:
                    continue
                key = cleaned.lower()
                if key not in seen:
                    seen.add(key)
                    merged.append(cleaned)
            else:
                key = str(item)
                if key not in seen:
                    seen.add(key)
                    merged.append(item)
        return json.dumps(merged, ensure_ascii=False) if merged else None

    else:
        # existing_val is a scalar
        if new_is_list:
            print(f"[!] Error: Field '{col_name}' for item '{item_id}' is a scalar, but received incompatible list value. Update rejected.")
            return existing_val
        return sanitized_new


def coerce_value_to_type(val: Any, data_type: str, col_name: str = "", item_identifier: str = "") -> tuple[bool, Any]:
    """Coerce and validate a field value against the target column SQL data type.
    Returns (True, coerced_val) on success, or (False, None) if incompatible with a warning logged.
    """
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
            else:
                print(f"[!] Warning: Field '{col_name}' for item '{item_identifier}' was not loaded because value is incompatible: Field requires INT (value: '{val}')")
                return (False, None)
        print(f"[!] Warning: Field '{col_name}' for item '{item_identifier}' was not loaded because value is incompatible: Field requires INT (value: '{val}')")
        return (False, None)

    elif dtype in ("BOOLEAN", "BOOL"):
        if val is None:
            return (True, None)
        if isinstance(val, bool):
            return (True, 1 if val else 0)
        if isinstance(val, int) and not isinstance(val, bool):
            if val in (0, 1):
                return (True, val)
            else:
                print(f"[!] Warning: Field '{col_name}' for item '{item_identifier}' was not loaded: value '{val}' is not a valid boolean.")
                return (False, None)
        if isinstance(val, str):
            s = val.strip().lower()
            if s in ("true", "1", "yes", "t"):
                return (True, 1)
            elif s in ("false", "0", "no", "f"):
                return (True, 0)
            else:
                print(f"[!] Warning: Field '{col_name}' for item '{item_identifier}' was not loaded: value '{val}' is incompatible with BOOLEAN.")
                return (False, None)
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
                print(f"[!] Warning: Field '{col_name}' for item '{item_identifier}' was not loaded: value '{val}' is incompatible with REAL.")
                return (False, None)
        print(f"[!] Warning: Field '{col_name}' for item '{item_identifier}' was not loaded: value '{val}' is incompatible with REAL.")
        return (False, None)

    else:  # TEXT, VARCHAR, STRING or others
        if val is None:
            return (True, None)
        if isinstance(val, (int, float, bool)):
            return (True, str(val))
        return (True, sanitize_and_serialize(val))


def resolve_template_key(template: str, service_id: str, rec: dict) -> str:
    """Interpolate template string such as '{service}:{id}' or '{service}:{data.path}'.
    Returns empty string if any placeholder cannot be resolved or is missing.
    """
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


class TaskScheduler:
    def __init__(self):
        self._running = False
        self._tasks: Dict[str, asyncio.Task] = {}
        self._last_runs: Dict[str, str] = {}
        self._status: Dict[str, Dict[str, Any]] = {}
        self._tag_cache: Dict[str, Dict[int, str]] = {}
        self._tag_cache_ts: Dict[str, float] = {}

    def is_running(self) -> bool:
        return self._running

    async def _get_service_tags(self, service_id: str, service_cfg: Any) -> Dict[int, str]:
        """Fetch and cache tag id-to-label dictionary with 10-minute TTL."""
        try:
            loop = asyncio.get_running_loop()
            now = loop.time()
        except RuntimeError:
            now = 0.0

        cached = self._tag_cache.get(service_id)
        last_ts = self._tag_cache_ts.get(service_id, 0.0)

        if cached is not None and (now - last_ts) < 600.0:
            return cached

        tags_map: Dict[int, str] = {}
        try:
            url, headers = prepare_service_request(service_cfg.base_url, "/api/v3/tag", service_cfg.api_key or "")
            async with httpx.AsyncClient(timeout=5.0) as client:
                resp = await client.get(url, headers=headers)
                if resp.status_code == 200:
                    data = resp.json()
                    if isinstance(data, list):
                        for item in data:
                            if isinstance(item, dict) and "id" in item and "label" in item:
                                tags_map[int(item["id"])] = str(item["label"]).strip()
        except Exception:
            pass

        self._tag_cache[service_id] = tags_map
        self._tag_cache_ts[service_id] = now
        return tags_map

    async def start(self) -> None:
        if self._running:
            return
        self._running = True
        print("[i] TaskScheduler started.")
        settings = await config_manager.get_settings()
        services_dict = settings.services
        for s_id, s_cfg in services_dict.items():
            if s_cfg.enabled:
                self._tasks[s_id] = asyncio.create_task(self._service_loop(s_id))

    async def stop(self) -> None:
        self._running = False
        for s_id, task in self._tasks.items():
            task.cancel()
        self._tasks.clear()
        print("[i] TaskScheduler stopped.")

    async def restart(self) -> None:
        await self.stop()
        await self.start()

    async def trigger_now(self, service_id: str) -> Dict[str, Any]:
        """Trigger ingestion execution for a service if it belongs to an enabled root stage."""
        settings = await config_manager.get_settings()
        services_dict = settings.services
        if service_id not in services_dict:
            return {"status": "error", "message": f"Service '{service_id}' not found"}

        service_cfg = services_dict[service_id]
        now_str = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        self._last_runs[service_id] = now_str

        if not service_cfg.enabled or not service_cfg.base_url:
            self._status[service_id] = {
                "last_run": now_str,
                "status": "skipped",
                "message": f"Service '{service_cfg.name}' is disabled or has no base_url configured.",
            }
            return self._status[service_id]

        # Check if the service is assigned to any ACTIVE root stage or ACTIVE consumer stage
        active_root_stages = [
            st for st in settings.stages
            if st.enabled and (not st.start_condition or st.start_condition.strip() == "") and service_id in st.service_ids
        ]
        active_consumer_stages = [
            st for st in settings.stages
            if st.enabled and st.start_condition and st.start_condition.strip() and service_id in st.service_ids
        ]

        if not active_root_stages and not active_consumer_stages:
            self._status[service_id] = {
                "last_run": now_str,
                "status": "idle",
                "message": f"Service '{service_cfg.name}' is idle (not assigned to any active stage).",
            }
            return self._status[service_id]

        try:
            allowed_events = set(service_cfg.allowed_event_types) if service_cfg.allowed_event_types else None
            new_ingested = 0
            records = []

            # 1. FIRST: Reconcile stages for existing pipeline records at the start of the interval
            reconcile_updates = await self.reconcile_stages()

            # 2. SECOND: Root stage ingestion for new incoming records (NEW_ENTRY)
            if active_root_stages:
                max_created_res = await db_manager.query(
                    "SELECT MAX(CREATED_AT) as latest FROM SERVICES_PIPELINE WHERE PIPELINE_KEY LIKE ?",
                    (f"{service_id}:%",)
                )
                latest_created_at = max_created_res[0]["latest"] if max_created_res and max_created_res[0]["latest"] else None
                latest_dt = _parse_timestamp(latest_created_at) if latest_created_at else None

                poll_ep = getattr(service_cfg, "poll_endpoint", None) or "/api/v3/history?pageSize=100&sortKey=date&sortDirection=descending"

                # Fetch records across pages until all new records are retrieved or known items are reached
                records = []
                current_page = 1
                max_pages = 25  # Safety boundary preventing runaway pagination loops

                async with httpx.AsyncClient(timeout=15.0) as client:
                    while current_page <= max_pages:
                        ep_to_fetch = poll_ep
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

                        data = resp.json()
                        page_records = []
                        total_available = None
                        page_size = None

                        if isinstance(data, list):
                            records.extend(data)
                            break  # Unpaginated array endpoint
                        elif isinstance(data, dict):
                            page_records = data.get("records") or data.get("Items") or data.get("files") or []
                            total_available = data.get("totalRecords") or data.get("TotalRecordCount")
                            page_size = data.get("pageSize")
                            records.extend(page_records)

                        if not page_records:
                            break

                        # Check if all records on this page already exist in SERVICES_PIPELINE or are older than latest_created_at
                        all_seen = True
                        for r in page_records:
                            if not isinstance(r, dict):
                                continue

                            # Check if older than latest_created_at
                            is_older = False
                            if latest_dt:
                                r_dt = _parse_timestamp(_get_item_date(r))
                                if r_dt and r_dt <= latest_dt:
                                    is_older = True
                            elif latest_created_at:
                                r_date = _get_item_date(r)
                                if r_date and r_date <= latest_created_at:
                                    is_older = True

                            if is_older:
                                continue

                            pk = resolve_template_key(service_cfg.pipeline_key_template, service_id, r)
                            if pk:
                                existing_row = await db_manager.query("SELECT 1 FROM SERVICES_PIPELINE WHERE PIPELINE_KEY = ?", (pk,))
                                if existing_row:
                                    continue

                            all_seen = False
                            break

                        if all_seen:
                            # Reached already ingested history or items older than latest_created_at; stop pagination early
                            break

                        if total_available is not None and len(records) >= total_available:
                            break

                        if page_size is not None and len(page_records) < page_size:
                            break

                        current_page += 1

                # Filter and sort records chronologically ascending (from oldest to newest)
                records.sort(key=_get_item_date)

            # Read existing table columns to avoid referencing non-existent columns
            table_cols = {c["name"].upper() for c in await db_manager.get_table_columns("SERVICES_PIPELINE")}
            service_tags = await self._get_service_tags(service_id, service_cfg)

            for active_stage in active_root_stages:
                stage_activated_dt = _parse_timestamp(active_stage.last_activated_at) if active_stage.last_activated_at else None

                for rec in records:
                    if not isinstance(rec, dict):
                        continue

                    event_type = rec.get("eventType")
                    if allowed_events and event_type not in allowed_events:
                        continue

                    # Filter out historical events that occurred prior to stage activation
                    rec_date_val = _get_item_date(rec)
                    if stage_activated_dt and rec_date_val:
                        rec_dt = _parse_timestamp(rec_date_val)
                        if rec_dt and rec_dt < stage_activated_dt:
                            continue

                    pipeline_key = resolve_template_key(service_cfg.pipeline_key_template, service_id, rec)
                    # Check if pipeline_key failed to resolve placeholders (e.g. contains unmatched '{' or evaluates to f"{service_id}:None" or f"{service_id}:")
                    is_key_unresolved = (
                        not pipeline_key or
                        "{" in pipeline_key or
                        pipeline_key.endswith(":None") or
                        pipeline_key == f"{service_id}:"
                    )
                    if is_key_unresolved and getattr(service_cfg, "fallback_lookup_column", None) and getattr(service_cfg, "fallback_lookup_field", None):
                        lookup_col = service_cfg.fallback_lookup_column.strip().upper()
                        lookup_field = service_cfg.fallback_lookup_field.strip()
                        if lookup_col in table_cols:
                            lookup_val = extract_dotted_value(rec, lookup_field)
                            if lookup_val is None:
                                lookup_val = rec.get(lookup_field)
                            if lookup_val:
                                match_query = f"SELECT PIPELINE_KEY FROM SERVICES_PIPELINE WHERE {lookup_col} = ? AND PIPELINE_KEY LIKE ? LIMIT 1;"
                                matched_rows = await db_manager.query(match_query, (str(lookup_val), f"{service_id}:%"))
                                if matched_rows and matched_rows[0].get("PIPELINE_KEY"):
                                    pipeline_key = matched_rows[0]["PIPELINE_KEY"]
                                    is_key_unresolved = False

                    if not pipeline_key or is_key_unresolved:
                        # Cannot be identified and cannot be correlated to existing row, skip safely
                        continue

                    # Query existing row for in-place update vs insert
                    existing_rows = await db_manager.query("SELECT * FROM SERVICES_PIPELINE WHERE PIPELINE_KEY = ?", (pipeline_key,))
                    existing_row = existing_rows[0] if existing_rows else None

                    # Secondary enrichment queries with namespaces
                    enrichment_data: Dict[str, Any] = {}
                    if service_cfg.enrichment_endpoints:
                        for namespace, ep_template in service_cfg.enrichment_endpoints.items():
                            if not ep_template or not ep_template.strip():
                                continue
                            try:
                                resolved_ep = ep_template.strip()
                                context_dict = {**rec, **enrichment_data}
                                for ph in re.findall(r"\{([^}]+)\}", ep_template):
                                    val = extract_dotted_value(context_dict, ph)
                                    if val is None:
                                        val = context_dict.get(ph)
                                    if val is not None:
                                        resolved_ep = resolved_ep.replace(f"{{{ph}}}", urllib.parse.quote(str(val)))

                                if "{" not in resolved_ep:
                                    enrich_url, enrich_headers = prepare_service_request(
                                        service_cfg.base_url, resolved_ep, service_cfg.api_key or ""
                                    )
                                    async with httpx.AsyncClient(timeout=10.0, follow_redirects=True) as client:
                                        e_resp = await client.get(enrich_url, headers=enrich_headers)
                                        if e_resp.status_code == 200:
                                            e_json = e_resp.json()
                                            if isinstance(e_json, dict):
                                                enrichment_data[namespace.strip()] = e_json
                            except Exception as e_err:
                                print(f"[!] Warning enrichment error ({namespace}) for {pipeline_key}: {e_err}")

                    # Resolve numeric tag IDs to readable tag labels if tag map is available
                    if service_tags:
                        for ns, payload in enrichment_data.items():
                            if isinstance(payload, dict) and "tags" in payload:
                                raw_tags = payload.get("tags")
                                if isinstance(raw_tags, list) and any(isinstance(t, int) for t in raw_tags):
                                    payload["tag_ids"] = raw_tags
                                    payload["tags"] = [service_tags.get(t, str(t)) for t in raw_tags]
                                    payload["tag_labels"] = payload["tags"]

                    context_dict = {"records": rec, **rec, **enrichment_data}

                    # Evaluate field mappings
                    mapped_fields: Dict[str, Any] = {}
                    for mapping in service_cfg.field_mappings:
                        if not mapping.target_column:
                            continue
                        col_name = mapping.target_column.strip().upper()
                        if col_name in SYSTEM_RESERVED_COLUMNS or col_name not in table_cols:
                            continue

                        val = extract_dotted_value(context_dict, mapping.source_field)
                        if val is None:
                            val = context_dict.get(mapping.source_field)

                        if mapping.transformer:
                            try:
                                val = TransformerEvaluator.evaluate(mapping.transformer, val, context_dict)
                            except Exception:
                                pass

                        if mapping.source_field.strip().endswith("[*]") and val is not None and not isinstance(val, list):
                            val = [val]

                        data_type = getattr(mapping, "data_type", "TEXT") or "TEXT"
                        ok, coerced_val = coerce_value_to_type(val, data_type, col_name=col_name, item_identifier=pipeline_key)
                        if not ok:
                            continue

                        if existing_row:
                            existing_val = existing_row.get(col_name)
                            if existing_val is None:
                                existing_val = existing_row.get(col_name.lower())
                            merged_val = merge_field_value(existing_val, coerced_val, col_name=col_name, item_id=pipeline_key)
                            mapped_fields[col_name] = merged_val
                        else:
                            mapped_fields[col_name] = coerced_val

                    # Authoritative Mermaid Lifecycle: In-Place UPDATE or NEW_ENTRY INSERT
                    if existing_row:
                        # Perform in-place UPDATE
                        set_clauses = [f"{col} = ?" for col in mapped_fields.keys()]
                        if set_clauses:
                            update_sql = f"UPDATE SERVICES_PIPELINE SET {', '.join(set_clauses)}, LAST_UPDATED = CURRENT_TIMESTAMP WHERE PIPELINE_KEY = ?;"
                            await db_manager.execute(update_sql, tuple(mapped_fields.values()) + (pipeline_key,))
                            reconcile_updates += 1
                            print(f"[i] Existing entry updated in-place: '{pipeline_key}'.")
                    else:
                        # Perform INSERT of new row
                        is_sink = not active_stage.complete_condition or not active_stage.complete_condition.strip()
                        initial_status = "SINK" if is_sink else "PENDING"
                        item_created_at = _get_item_date(rec) or datetime.datetime.now(datetime.timezone.utc).isoformat()
                        col_names = ["PIPELINE_KEY", "STAGE", "STATUS", "CREATED_AT"] + list(mapped_fields.keys())
                        placeholders = ["?"] * len(col_names)
                        values = [pipeline_key, active_stage.id, initial_status, item_created_at] + list(mapped_fields.values())

                        insert_sql = f'INSERT INTO SERVICES_PIPELINE ({", ".join(col_names)}) VALUES ({", ".join(placeholders)});'
                        await db_manager.execute(insert_sql, tuple(values))
                        new_ingested += 1
                        print(f"[i] New entry ingested: '{pipeline_key}' into stage '{active_stage.id}' with STATUS = '{initial_status}' (END_OF_CICLE).")


            self._status[service_id] = {
                "last_run": now_str,
                "status": "success",
                "message": f"Execution completed ({service_cfg.name}): {new_ingested} new entries ingested, {reconcile_updates} items reconciled.",
                "new_items": new_ingested,
            }
            return self._status[service_id]

        except Exception as e:
            print(f"[x] Error executing ingestion for {service_id}: {e}")
            self._status[service_id] = {
                "last_run": now_str,
                "status": "error",
                "message": f"Execution failed: {str(e)}",
            }
            return self._status[service_id]

    async def _execute_consumer_enrichment(
        self, service_cfg: Any, row_dict: Dict[str, Any], table_cols: set, service_id: Optional[str] = None
    ) -> bool:
        """Execute enrichment endpoints and apply field mappings for an existing row."""
        endpoints_to_query: Dict[str, str] = dict(service_cfg.enrichment_endpoints or {})
        if service_cfg.poll_endpoint and "{" in service_cfg.poll_endpoint:
            endpoints_to_query["primary"] = service_cfg.poll_endpoint

        if not endpoints_to_query and not service_cfg.field_mappings:
            return False

        enrichment_data: Dict[str, Any] = {}
        for namespace, ep_template in endpoints_to_query.items():
            if not ep_template or not ep_template.strip():
                continue
            resolved_ep = ep_template.strip()
            context_dict = {"records": row_dict, **row_dict, **enrichment_data}
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
                    break

            if missing_ph or "{" in resolved_ep:
                continue

            try:
                enrich_url, enrich_headers = prepare_service_request(
                    service_cfg.base_url, resolved_ep, service_cfg.api_key or ""
                )
                async with httpx.AsyncClient(timeout=10.0, follow_redirects=True) as client:
                    e_resp = await client.get(enrich_url, headers=enrich_headers)
                    if e_resp.status_code == 200:
                        e_json = e_resp.json()
                        if isinstance(e_json, dict):
                            enrichment_data[namespace.strip()] = e_json
                        elif isinstance(e_json, list):
                            enrichment_data[namespace.strip()] = {"List": e_json}
            except Exception as e_err:
                print(f"[!] Warning consumer enrichment error ({namespace}) for row {row_dict.get('ID')}: {e_err}")

        # Resolve numeric tag IDs to readable tag labels if tag map is available
        if service_id and service_cfg.base_url:
            service_tags = await self._get_service_tags(service_id, service_cfg)
            if service_tags:
                for ns, payload in enrichment_data.items():
                    if isinstance(payload, dict) and "tags" in payload:
                        raw_tags = payload.get("tags")
                        if isinstance(raw_tags, list) and any(isinstance(t, int) for t in raw_tags):
                            payload["tag_ids"] = raw_tags
                            payload["tags"] = [service_tags.get(t, str(t)) for t in raw_tags]
                            payload["tag_labels"] = payload["tags"]

        context_dict = {"records": row_dict, **row_dict, **enrichment_data}
        mapped_fields: Dict[str, Any] = {}
        for mapping in service_cfg.field_mappings:
            if not mapping.target_column:
                continue
            col_name = mapping.target_column.strip().upper()
            if col_name in SYSTEM_RESERVED_COLUMNS or col_name not in table_cols:
                continue

            val = extract_dotted_value(context_dict, mapping.source_field)
            if val is None:
                val = context_dict.get(mapping.source_field)

            if mapping.transformer:
                try:
                    val = TransformerEvaluator.evaluate(mapping.transformer, val, context_dict)
                except Exception:
                    pass

            if mapping.source_field.strip().endswith("[*]") and val is not None and not isinstance(val, list):
                val = [val]

            existing_val = row_dict.get(col_name)
            data_type = getattr(mapping, "data_type", "TEXT") or "TEXT"
            item_id = str(row_dict.get("PIPELINE_KEY") or row_dict.get("ID"))
            ok, coerced_val = coerce_value_to_type(val, data_type, col_name=col_name, item_identifier=item_id)
            if not ok:
                continue

            mapped_fields[col_name] = merge_field_value(existing_val, coerced_val, col_name=col_name, item_id=item_id)

        has_changes = any(row_dict.get(k) != v for k, v in mapped_fields.items())
        if mapped_fields and has_changes:
            set_clauses = [f"{k} = ?" for k in mapped_fields.keys()]
            vals = list(mapped_fields.values()) + [row_dict["ID"]]
            await db_manager.execute(
                f"UPDATE SERVICES_PIPELINE SET {', '.join(set_clauses)}, LAST_UPDATED = CURRENT_TIMESTAMP WHERE ID = ?;",
                tuple(vals)
            )
            print(f"[i] Row {row_dict['ID']} ({row_dict.get('PIPELINE_KEY')}) enriched with {len(mapped_fields)} mapped columns.")
            return True
        return False

    async def _update_mapped_values_for_stage(
        self, stage: Any, row_id: int, table_cols: set, settings: Any
    ) -> bool:
        """Run UPDATE_VALUES: enrichment and mapping for all services assigned to the given stage."""
        if not stage or not stage.service_ids:
            return False

        updated_any = False
        for s_id in stage.service_ids:
            service_cfg = settings.services.get(s_id)
            if not service_cfg or not service_cfg.enabled:
                continue

            try:
                # Re-query row to ensure latest mapped columns are available for subsequent services
                current_rows = await db_manager.query(
                    "SELECT * FROM SERVICES_PIPELINE WHERE ID = ?;",
                    (row_id,)
                )
                if not current_rows:
                    break
                row_dict = dict(current_rows[0])
                updated = await self._execute_consumer_enrichment(service_cfg, row_dict, table_cols, service_id=s_id)
                if updated:
                    updated_any = True
            except Exception as enrich_err:
                print(f"[!] Error during enrichment with service '{s_id}' for row {row_id}: {enrich_err}")

        return updated_any

    async def reconcile_stages(self) -> int:
        """Evaluate existing pipeline items strictly following the authoritative Mermaid lifecycle state machine:
        END_OF_CICLE -> IS_SINK -> (YES) -> UPDATE_VALUES -> END_OF_CICLE
                     -> (NO)  -> CHECK_STATUS -> (FALSE) -> UPDATE_VALUES -> END_OF_CICLE
                                              -> (TRUE)  -> IS_NEXT_STAGE -> (YES) -> NEXT_STAGE -> STATUS_TO_PENDING -> UPDATE_VALUES -> END_OF_CICLE
                                                                          -> (NO)  -> UPDATE_VALUES -> END_OF_CICLE
        """
        updates_count = 0
        try:
            settings = await config_manager.get_settings()
            enabled_stages = sorted([s for s in settings.stages if s.enabled], key=lambda s: s.order)
            stages_by_id = {s.id: s for s in enabled_stages}
            table_cols = {c["name"].upper() for c in await db_manager.get_table_columns("SERVICES_PIPELINE")}

            # Retrieve existing pipeline records
            pipeline_rows = await db_manager.query(
                "SELECT * FROM SERVICES_PIPELINE ORDER BY ID ASC;"
            )
            if not pipeline_rows:
                return 0

            for row in pipeline_rows:
                row_dict = dict(row)
                row_id = row_dict["ID"]
                current_stage_slug = row_dict.get("STAGE")

                # Resolve current stage from configuration
                current_stage = stages_by_id.get(current_stage_slug)
                if not current_stage:
                    current_stage = next((s for s in enabled_stages if str(s.order) == str(current_stage_slug)), None)
                if not current_stage:
                    continue

                status = str(row_dict.get("STATUS") or "").upper()
                is_sink = (status == "SINK") or (not current_stage.complete_condition or not current_stage.complete_condition.strip())

                # Node: IS_SINK
                if is_sink:
                    # IS_SINK == YES -> UPDATE_VALUES -> continue (END_OF_CICLE)
                    enriched = await self._update_mapped_values_for_stage(current_stage, row_id, table_cols, settings)
                    if enriched:
                        updates_count += 1
                    continue

                # Node: IS_SINK == NO -> CHECK_STATUS
                if status == "PENDING":
                    cond = current_stage.complete_condition
                    is_completed = False
                    if cond and cond.strip():
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
                        # CHECK_STATUS -> FALSE: STATUS = STATUS -> UPDATE_VALUES -> continue (END_OF_CICLE)
                        enriched = await self._update_mapped_values_for_stage(current_stage, row_id, table_cols, settings)
                        if enriched:
                            updates_count += 1
                        continue
                    else:
                        # CHECK_STATUS -> TRUE: Update DB STATUS = 'COMPLETED', status = 'COMPLETED', proceed immediately to IS_NEXT_STAGE
                        await db_manager.execute(
                            "UPDATE SERVICES_PIPELINE SET STATUS = 'COMPLETED', LAST_UPDATED = CURRENT_TIMESTAMP WHERE ID = ?;",
                            (row_id,)
                        )
                        print(f"[i] Stage '{current_stage.id}' marked COMPLETED for row {row_id} ({row_dict.get('PIPELINE_KEY')}) via complete_condition.")
                        status = "COMPLETED"
                        row_dict["STATUS"] = "COMPLETED"
                        updates_count += 1
                        # Proceeds immediately to IS_NEXT_STAGE below

                # Node: IS_NEXT_STAGE (for STATUS == 'COMPLETED', already completed or freshly promoted in this cycle)
                if status == "COMPLETED":
                    candidate_stages = sorted(
                        [
                            s for s in enabled_stages
                            if s.order > current_stage.order and s.start_condition and s.start_condition.strip()
                        ],
                        key=lambda s: s.order
                    )

                    # Build evaluation context
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
                        # IS_NEXT_STAGE -> YES -> NEXT_STAGE -> STATUS_TO_PENDING -> UPDATE_VALUES -> END_OF_CICLE
                        is_sink = not transitioned_stage.complete_condition or not transitioned_stage.complete_condition.strip()
                        new_status = "SINK" if is_sink else "PENDING"
                        await db_manager.execute(
                            "UPDATE SERVICES_PIPELINE SET STAGE = ?, STATUS = ?, LAST_UPDATED = CURRENT_TIMESTAMP WHERE ID = ?;",
                            (transitioned_stage.id, new_status, row_id)
                        )
                        print(f"[i] Row {row_id} ({row_dict.get('PIPELINE_KEY')}) transitioned: Stage '{current_stage.id}' -> Stage '{transitioned_stage.id}' (STATUS = '{new_status}').")
                        updates_count += 1
                        # Run UPDATE_VALUES for target_stage.service_ids
                        await self._update_mapped_values_for_stage(transitioned_stage, row_id, table_cols, settings)
                        continue  # END_OF_CICLE
                    else:
                        # IS_NEXT_STAGE -> NO -> UPDATE_VALUES -> END_OF_CICLE
                        # Remains in current stage with STATUS = 'COMPLETED'
                        enriched = await self._update_mapped_values_for_stage(current_stage, row_id, table_cols, settings)
                        if enriched:
                            updates_count += 1
                        continue  # END_OF_CICLE

        except Exception as err:
            print(f"[!] Error in reconcile_stages: {err}")

        return updates_count

    async def _service_loop(self, service_id: str) -> None:
        while self._running:
            try:
                settings = await config_manager.get_settings()
                services_dict = settings.services
                service_cfg = services_dict.get(service_id)
                if not service_cfg or not service_cfg.enabled:
                    break

                configured_interval = service_cfg.poll_interval_seconds
                if configured_interval is None or configured_interval <= 0:
                    configured_interval = getattr(settings, "global_poll_interval_seconds", 300)

                interval = max(int(configured_interval), 10)
                await self.trigger_now(service_id)
                await asyncio.sleep(interval)
            except asyncio.CancelledError:
                break
            except Exception as e:
                print(f"[x] Error in scheduler loop for service {service_id}: {e}")
                await asyncio.sleep(30)

    def get_scheduler_status(self) -> Dict[str, Any]:
        return {
            "running": self._running,
            "tasks": self._status,
            "last_runs": self._last_runs,
        }


scheduler = TaskScheduler()
