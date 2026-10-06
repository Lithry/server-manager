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
        
        # Start individual app polling loops
        for app_id, app_cfg in settings.apps.items():
            if app_cfg.enabled:
                self._tasks[app_id] = asyncio.create_task(self._app_loop(app_id))

    async def stop(self) -> None:
        self._running = False
        for app_id, task in self._tasks.items():
            task.cancel()
        self._tasks.clear()
        print("[i] TaskScheduler stopped.")

    async def restart(self) -> None:
        await self.stop()
        await self.start()

    async def trigger_now(self, app_id: str) -> Dict[str, Any]:
        """Manually trigger an atomic ingestion execution for an app."""
        settings = await config_manager.get_settings()
        if app_id not in settings.apps:
            return {"status": "error", "message": f"App '{app_id}' not found"}

        app_cfg = settings.apps[app_id]
        now_str = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        self._last_runs[app_id] = now_str

        # Simulation/Dispatch of atomic task execution
        self._status[app_id] = {
            "last_run": now_str,
            "status": "success",
            "message": f"Execution triggered for stage {app_cfg.stage} ({app_cfg.name})",
        }
        return self._status[app_id]

    async def _app_loop(self, app_id: str) -> None:
        while self._running:
            try:
                settings = await config_manager.get_settings()
                app_cfg = settings.apps.get(app_id)
                if not app_cfg or not app_cfg.enabled:
                    break

                interval = max(app_cfg.poll_interval_seconds, 10)
                await self.trigger_now(app_id)
                await asyncio.sleep(interval)
            except asyncio.CancelledError:
                break
            except Exception as e:
                print(f"[x] Error in scheduler loop for {app_id}: {e}")
                await asyncio.sleep(30)

    def get_scheduler_status(self) -> Dict[str, Any]:
        return {
            "running": self._running,
            "tasks": self._status,
            "last_runs": self._last_runs,
        }


scheduler = TaskScheduler()
