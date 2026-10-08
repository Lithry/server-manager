"""Task execution scheduler with stage priority, dependency management, and active ingestion."""

import re
import json
import asyncio
import datetime
import httpx
from typing import Any, Dict, List, Optional

from src.core.config import config_manager
from src.core.database import db_manager, SYSTEM_RESERVED_COLUMNS
from src.core.predicates import PredicateEvaluator, TransformerEvaluator
from src.api.pipeline import prepare_service_request


def extract_dotted_value(data: dict, path: str) -> Any:
    """Extract nested value using dot notation, supporting list projection and numeric indexing."""
    if not path or not isinstance(data, dict):
        return None

    normalized_path = path.strip().replace("[*]", "")
    parts = [p for p in normalized_path.split(".") if p]

    def _resolve(curr: Any, remaining: List[str]) -> Any:
        if not remaining:
            return curr

        part = remaining[0]
        rest = remaining[1:]

        if isinstance(curr, dict):
            if part in curr:
                return _resolve(curr[part], rest)
            return None

        elif isinstance(curr, list):
            if part.isdigit():
                idx = int(part)
                if 0 <= idx < len(curr):
                    return _resolve(curr[idx], rest)
                return None
            else:
                # Project over all items in the list
                projected = []
                for item in curr:
                    res = _resolve(item, [part] + rest)
                    if res is not None:
                        projected.append(res)
                return projected if projected else None

        return None

    return _resolve(data, parts)


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


def merge_field_value(existing_val: Any, new_val: Any) -> Any:
    """Merge an incoming field value into an existing database value.
    If new_val is empty, preserves existing_val.
    If both are lists/JSON arrays, merges them deduplicating items.
    """
    sanitized_new = sanitize_and_serialize(new_val)
    if sanitized_new is None:
        return existing_val

    if existing_val is None:
        return sanitized_new

    def _to_list(v: Any) -> Optional[List[Any]]:
        if isinstance(v, list):
            return v
        if isinstance(v, str) and v.startswith("[") and v.endswith("]"):
            try:
                parsed = json.loads(v)
                if isinstance(parsed, list):
                    return parsed
            except Exception:
                pass
        return None

    existing_list = _to_list(existing_val)
    new_list = _to_list(sanitized_new)

    if existing_list is not None and new_list is not None:
        seen = set()
        merged = []
        for item in existing_list + new_list:
            if item is None or (isinstance(item, str) and not item.strip()):
                continue
            key = item.strip().lower() if isinstance(item, str) else str(item)
            if key not in seen:
                seen.add(key)
                merged.append(item.strip() if isinstance(item, str) else item)
        return json.dumps(merged, ensure_ascii=False) if merged else None

    return sanitized_new



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
        if val is not None:
            res = res.replace(f"{{{ph}}}", str(val))
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

        services_dict = getattr(settings, "services", {}) or getattr(settings, "apps", {})
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
        services_dict = getattr(settings, "services", {}) or getattr(settings, "apps", {})
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

        # Check if the service is assigned to any ACTIVE (enabled) root stage
        active_root_stages = [
            st for st in settings.stages
            if st.enabled and (not st.start_condition or st.start_condition.strip() == "") and service_id in st.service_ids
        ]

        if not active_root_stages:
            self._status[service_id] = {
                "last_run": now_str,
                "status": "idle",
                "message": f"Service '{service_cfg.name}' is idle (not assigned to an active root stage).",
            }
            return self._status[service_id]

        try:
            # 1. Fetch recent items from service
            poll_ep = getattr(service_cfg, "poll_endpoint", None) or "/api/v3/history?pageSize=50&sortKey=date&sortDirection=descending"
            history_url, headers = prepare_service_request(
                service_cfg.base_url,
                poll_ep,
                service_cfg.api_key or "",
            )
            async with httpx.AsyncClient(timeout=15.0) as client:
                resp = await client.get(history_url, headers=headers)
                if resp.status_code != 200:
                    raise Exception(f"HTTP {resp.status_code}: {resp.text[:150]}")
                data = resp.json()

            if isinstance(data, list):
                records = data
            elif isinstance(data, dict):
                records = data.get("records") or data.get("Items") or data.get("files") or []
            else:
                records = []

            allowed_events = set(service_cfg.allowed_event_types) if service_cfg.allowed_event_types else None
            new_ingested = 0

            # Read existing table columns to avoid referencing non-existent columns
            table_cols = {c["name"].upper() for c in await db_manager.get_table_columns("SERVICES_PIPELINE")}
            service_tags = await self._get_service_tags(service_id, service_cfg)

            for active_stage in active_root_stages:
                stage_activated_dt = None
                if active_stage.last_activated_at:
                    try:
                        clean_ts = active_stage.last_activated_at.replace("Z", "+00:00")
                        stage_activated_dt = datetime.datetime.fromisoformat(clean_ts)
                    except Exception as ts_err:
                        print(f"[!] Warning invalid last_activated_at for stage {active_stage.id}: {ts_err}")

                for rec in records:
                    if not isinstance(rec, dict):
                        continue

                    event_type = rec.get("eventType")
                    if allowed_events and event_type not in allowed_events:
                        continue

                    # Filter out historical events that occurred prior to stage activation
                    rec_date_val = rec.get("date") or rec.get("Imported") or rec.get("Created") or rec.get("DateCreated")
                    if stage_activated_dt and rec_date_val:
                        try:
                            rec_date_str = str(rec_date_val).replace("Z", "+00:00")
                            rec_dt = datetime.datetime.fromisoformat(rec_date_str)
                            if rec_dt < stage_activated_dt:
                                continue
                        except Exception:
                            pass

                    pipeline_key = resolve_template_key(service_cfg.pipeline_key_template, service_id, rec)
                    if not pipeline_key:
                        continue

                    # Avoid duplicate entries
                    existing = await db_manager.query("SELECT 1 FROM SERVICES_PIPELINE WHERE PIPELINE_KEY = ?", (pipeline_key,))
                    if existing:
                        continue

                    # Secondary enrichment queries with namespaces
                    enrichment_data: Dict[str, Any] = {}
                    if service_cfg.enrichment_endpoints:
                        for namespace, ep_template in service_cfg.enrichment_endpoints.items():
                            if not ep_template or not ep_template.strip():
                                continue
                            try:
                                resolved_ep = ep_template.strip()
                                for ph in re.findall(r"\{([^}]+)\}", ep_template):
                                    val = extract_dotted_value(rec, ph) or rec.get(ph)
                                    if val is not None:
                                        resolved_ep = resolved_ep.replace(f"{{{ph}}}", str(val))

                                if "{" not in resolved_ep:
                                    enrich_url, enrich_headers = prepare_service_request(
                                        service_cfg.base_url, resolved_ep, service_cfg.api_key or ""
                                    )
                                    async with httpx.AsyncClient(timeout=10.0) as client:
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
                        if col_name in SYSTEM_RESERVED_COLUMNS:
                            continue

                        val = extract_dotted_value(context_dict, mapping.source_field)
                        if val is None:
                            val = context_dict.get(mapping.source_field)

                        if mapping.transformer:
                            try:
                                val = TransformerEvaluator.evaluate(mapping.transformer, val)
                            except Exception:
                                pass

                        if col_name in table_cols:
                            mapped_fields[col_name] = sanitize_and_serialize(val)

                    # Determine initial STATUS based on active_stage.complete_condition
                    initial_status = "COMPLETED"
                    if active_stage.complete_condition and active_stage.complete_condition.strip():
                        eval_ctx = {
                            "records": rec,
                            **rec,
                            **enrichment_data,
                            **mapped_fields,
                            "STAGE": active_stage.order,
                            "PIPELINE_KEY": pipeline_key,
                        }
                        try:
                            is_completed = PredicateEvaluator.evaluate(active_stage.complete_condition, eval_ctx)
                            initial_status = "COMPLETED" if is_completed else "PENDING"
                        except Exception as cond_err:
                            print(f"[!] Warning evaluating complete_condition for {pipeline_key}: {cond_err}")
                            initial_status = "PENDING"

                    col_names = ["PIPELINE_KEY", "STAGE", "STATUS"] + list(mapped_fields.keys())
                    placeholders = ["?"] * len(col_names)
                    values = [pipeline_key, active_stage.order, initial_status] + list(mapped_fields.values())

                    insert_sql = f'INSERT INTO SERVICES_PIPELINE ({", ".join(col_names)}) VALUES ({", ".join(placeholders)});'
                    await db_manager.execute(insert_sql, tuple(values))
                    new_ingested += 1

            # Reconcile any pending records for active stages
            await self.reconcile_stages()

            self._status[service_id] = {
                "last_run": now_str,
                "status": "success",
                "message": f"Ingestion executed ({service_cfg.name}): {new_ingested} new items added to active stages.",
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

    async def reconcile_stages(self) -> None:
        """Evaluate completion predicates on pending pipeline rows to transition them naturally."""
        try:
            settings = await config_manager.get_settings()
            for stage in settings.stages:
                if not stage.enabled:
                    continue

                cond = stage.complete_condition
                if not cond or not cond.strip():
                    continue

                pending_rows = await db_manager.query(
                    "SELECT * FROM SERVICES_PIPELINE WHERE STAGE = ? AND STATUS = 'PENDING' LIMIT 50;",
                    (stage.order,)
                )
                if not pending_rows:
                    continue

                for row in pending_rows:
                    row_dict = dict(row)
                    try:
                        if PredicateEvaluator.evaluate(cond, row_dict):
                            await db_manager.execute(
                                "UPDATE SERVICES_PIPELINE SET STATUS = 'COMPLETED', LAST_UPDATED = CURRENT_TIMESTAMP WHERE ID = ?;",
                                (row_dict["ID"],)
                            )
                            print(f"[i] Stage '{stage.id}' marked COMPLETED for row {row_dict['ID']} ({row_dict.get('PIPELINE_KEY')}) via complete_condition.")
                    except Exception as eval_err:
                        print(f"[!] Error evaluating complete_condition for row {row_dict.get('ID')}: {eval_err}")
        except Exception as err:
            print(f"[!] Error in reconcile_stages: {err}")

    async def _service_loop(self, service_id: str) -> None:
        while self._running:
            try:
                settings = await config_manager.get_settings()
                services_dict = getattr(settings, "services", {}) or getattr(settings, "apps", {})
                service_cfg = services_dict.get(service_id)
                if not service_cfg or not service_cfg.enabled:
                    break

                configured_interval = service_cfg.poll_interval_seconds
                if configured_interval is None or configured_interval <= 0:
                    configured_interval = getattr(settings, "global_poll_interval_seconds", 300)

                interval = max(int(configured_interval), 10)
                await self.trigger_now(service_id)
                await self.reconcile_stages()
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
