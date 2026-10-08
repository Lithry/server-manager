"""Configuration manager for ServerManager."""

import json
import os
import asyncio
from typing import Any, Dict
from pydantic import BaseModel, Field


class StageConfig(BaseModel):
    id: str  # semantic slug e.g. "ingest", "recognition", "library"
    name: str
    description: str = ""
    order: int = 1
    start_condition: str | None = None  # None or empty = Root producer stage
    grace_period_minutes: int = 10
    timeout_minutes: int = 30
    service_ids: list[str] = Field(default_factory=list)  # Assigned service IDs (M:N)
    enabled: bool = False
    last_activated_at: str | None = None  # ISO timestamp recorded when stage is toggled active


class FieldMapping(BaseModel):
    source_field: str
    target_column: str  # Sanitized SQL identifier (^[A-Z0-9_]+$)
    data_type: str = "TEXT"
    transformer: str | None = None  # Optional expression e.g. "if 'anime' in value then 1 else 0"


class ServiceConfig(BaseModel):
    name: str
    enabled: bool = True
    base_url: str = ""
    api_key: str = ""
    poll_interval_seconds: int | None = None  # None = inherit Settings.global_poll_interval_seconds
    poll_endpoint: str = "/api/v3/history?pageSize=50&sortKey=date&sortDirection=descending"
    pipeline_key_template: str = "{service}:{id}"
    allowed_event_types: list[str] = Field(default_factory=list)
    enrichment_endpoints: Dict[str, str] = Field(default_factory=dict)
    field_mappings: list[FieldMapping] = Field(default_factory=list)


# Backward compatibility alias
AppConfig = ServiceConfig


class NotificationTrigger(BaseModel):
    id: str
    event: str  # ON_INCIDENT_OPEN, ON_INCIDENT_RESOLVED, ON_PIPELINE_COMPLETE, ON_DEPLOY_SUCCESS
    enabled: bool = True
    channel: str = "ntfy"  # "ntfy" or "webhook"
    target_url: str = ""
    topic: str = ""
    priority: str = "default"
    tags: str = "server"
    message_template: str = "{event}: {details}"


class Settings(BaseModel):
    db_path: str = Field(default_factory=lambda: os.getenv("DB_PATH", "/data/server_manager.db"))
    repo_path: str = Field(default_factory=lambda: os.getenv("REPO_PATH", "/repo"))
    custom_tools_path: str = Field(default_factory=lambda: os.getenv("CUSTOM_TOOLS_PATH", "/config/custom_tools"))
    retention_days: int = 30
    global_poll_interval_seconds: int = 300
    stages: list[StageConfig] = Field(default_factory=list)
    services: Dict[str, ServiceConfig] = Field(default_factory=dict)
    notification_triggers: list[NotificationTrigger] = Field(default_factory=list)
    pipeline_column_order: list[str] = Field(default_factory=list)


def initiate_settings() -> Settings:
    """Initialize clean default settings with zero pre-populated services or stages."""
    return Settings(
        retention_days=30,
        global_poll_interval_seconds=300,
        stages=[],
        services={},
        notification_triggers=[
            NotificationTrigger(
                id="default_incident",
                event="ON_INCIDENT_OPEN",
                enabled=True,
                channel="ntfy",
                target_url="http://host.docker.internal:8090",
                topic="cubi-alerts",
                priority="high",
                tags="warning,cubi",
                message_template="Incident opened: {incident_code} - {details}",
            )
        ],
    )


# Backward compatibility alias
get_default_settings = initiate_settings


class ConfigManager:
    def __init__(self, settings_path: str | None = None):
        self.settings_path = settings_path or os.getenv("SETTINGS_PATH", "/data/settings.json")
        self._lock = asyncio.Lock()
        self._settings: Settings | None = None

    async def get_settings(self) -> Settings:
        async with self._lock:
            if self._settings is None:
                await self._load()
            return self._settings

    async def update_settings(self, new_settings: Settings) -> Settings:
        async with self._lock:
            self._settings = new_settings
            await self._save()
            return self._settings

    async def _load(self) -> None:
        if os.path.exists(self.settings_path):
            try:
                with open(self.settings_path, "r", encoding="utf-8") as f:
                    data = json.load(f)
                self._settings = Settings.model_validate(data)
                return
            except Exception as e:
                print(f"[!] Error loading settings from {self.settings_path}: {e}. Initializing clean defaults.")
        
        self._settings = initiate_settings()
        await self._save()

    async def _save(self) -> None:
        if self._settings is None:
            return
        os.makedirs(os.path.dirname(self.settings_path), exist_ok=True)
        with open(self.settings_path, "w", encoding="utf-8") as f:
            json.dump(self._settings.model_dump(), f, indent=2)


config_manager = ConfigManager()
