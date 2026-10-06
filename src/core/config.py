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
    enabled: bool = True


class FieldMapping(BaseModel):
    source_field: str
    target_column: str  # Sanitized SQL identifier (^[A-Z0-9_]+$)
    data_type: str = "TEXT"
    transformer: str | None = None  # Optional expression e.g. "if 'anime' in value then 1 else 0"


class AppConfig(BaseModel):
    name: str
    enabled: bool = False
    base_url: str = ""
    api_key: str = ""
    poll_interval_seconds: int = 300
    stage_id: str = ""  # References StageConfig.id
    field_mappings: list[FieldMapping] = Field(default_factory=list)


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
    stages: list[StageConfig] = Field(default_factory=list)
    apps: Dict[str, AppConfig] = Field(default_factory=dict)
    notification_triggers: list[NotificationTrigger] = Field(default_factory=list)


def get_default_settings() -> Settings:
    return Settings(
        stages=[],  # Clean default: fully configured via WebUI
        apps={
            "sonarr": AppConfig(
                name="Sonarr",
                enabled=False,
                base_url="http://host.docker.internal:8989",
                api_key="",
                poll_interval_seconds=300,
                stage_id="",
                field_mappings=[],
            ),
            "radarr": AppConfig(
                name="Radarr",
                enabled=False,
                base_url="http://host.docker.internal:7878",
                api_key="",
                poll_interval_seconds=300,
                stage_id="",
                field_mappings=[],
            ),
            "shoko": AppConfig(
                name="Shoko Server",
                enabled=False,
                base_url="http://host.docker.internal:8111",
                api_key="",
                poll_interval_seconds=300,
                stage_id="",
                field_mappings=[],
            ),
            "jellyfin": AppConfig(
                name="Jellyfin",
                enabled=False,
                base_url="http://host.docker.internal:8096",
                api_key="",
                poll_interval_seconds=600,
                stage_id="",
                field_mappings=[],
            ),
        },
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
                print(f"[!] Error loading settings from {self.settings_path}: {e}. Initializing defaults.")
        
        self._settings = get_default_settings()
        await self._save()

    async def _save(self) -> None:
        if self._settings is None:
            return
        os.makedirs(os.path.dirname(self.settings_path), exist_ok=True)
        with open(self.settings_path, "w", encoding="utf-8") as f:
            json.dump(self._settings.model_dump(), f, indent=2)


config_manager = ConfigManager()
