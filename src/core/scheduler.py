"""Task execution scheduler with stage priority, dependency management, and active ingestion."""

import re
import asyncio
import datetime
import httpx
from typing import Any, Dict, List, Optional

from src.core.config import config_manager
from src.core.database import db_manager, SYSTEM_RESERVED_COLUMNS
from src.core.predicates import TransformerEvaluator
from src.api.pipeline import prepare_service_request


def extract_dotted_value(data: dict, path: str) -> Any:
    """Extract nested value using dot notation, supporting flexible hierarchy."""
    if not path or not isinstance(data, dict):
        return None

    parts = path.strip().split(".")
    curr = data
    for part in parts:
        if isinstance(curr, dict) and part in curr:
            curr = curr[part]
        elif isinstance(curr, list) and part.isdigit() and int(part) < len(curr):
            curr = curr[int(part)]
        else:
            return None
    return curr


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
            # 1. Fetch recent history from service
            history_url, headers = prepare_service_request(
                service_cfg.base_url,
                "/api/v3/history?pageSize=50&sortKey=date&sortDirection=descending",
                service_cfg.api_key or "",
            )
            async with httpx.AsyncClient(timeout=15.0) as client:
                resp = await client.get(history_url, headers=headers)
                if resp.status_code != 200:
                    raise Exception(f"HTTP {resp.status_code}: {resp.text[:150]}")
                data = resp.json()

            records = data.get("records", []) if isinstance(data, dict) else (data if isinstance(data, list) else [])
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
                    if stage_activated_dt and rec.get("date"):
                        try:
                            rec_date_str = str(rec["date"]).replace("Z", "+00:00")
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
                            mapped_fields[col_name] = val

                    col_names = ["PIPELINE_KEY", "STAGE", "STATUS"] + list(mapped_fields.keys())
                    placeholders = ["?"] * len(col_names)
                    values = [pipeline_key, active_stage.order, "PENDING"] + list(mapped_fields.values())

                    insert_sql = f'INSERT INTO SERVICES_PIPELINE ({", ".join(col_names)}) VALUES ({", ".join(placeholders)});'
                    await db_manager.execute(insert_sql, tuple(values))
                    new_ingested += 1

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
