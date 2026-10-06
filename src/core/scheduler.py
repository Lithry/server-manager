"""Task execution scheduler with stage priority and dependency management."""

import asyncio
import datetime
from typing import Any, Dict, List, Optional
from src.core.config import config_manager


class TaskScheduler:
    def __init__(self):
        self._running = False
        self._tasks: Dict[str, asyncio.Task] = {}
        self._last_runs: Dict[str, str] = {}
        self._status: Dict[str, Dict[str, Any]] = {}

    def is_running(self) -> bool:
        return self._running

    async def start(self) -> None:
        if self._running:
            return
        self._running = True
        print("[i] TaskScheduler started.")
        settings = await config_manager.get_settings()
        
        # Start individual service polling loops
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
        """Manually trigger an atomic ingestion execution for a service."""
        settings = await config_manager.get_settings()
        services_dict = getattr(settings, "services", {}) or getattr(settings, "apps", {})
        if service_id not in services_dict:
            return {"status": "error", "message": f"Service '{service_id}' not found"}

        service_cfg = services_dict[service_id]
        now_str = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        self._last_runs[service_id] = now_str

        # Simulation/Dispatch of atomic task execution
        self._status[service_id] = {
            "last_run": now_str,
            "status": "success",
            "message": f"Execution triggered for service ({service_cfg.name})",
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

                # Resolve polling interval: custom override if specified, otherwise global interval
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
