"""Configuration manager for ServerManager."""

import json
import os
import asyncio
from typing import Any, Dict
from pydantic import BaseModel, Field


class AppConfig(BaseModel):
    name: str
    enabled: bool = False
    base_url: str = ""
    api_key: str = ""
    poll_interval_seconds: int = 300
    stage: int = 1
    prerequisites: list[str] = Field(default_factory=list)
    field_mappings: Dict[str, str] = Field(default_factory=dict)


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
    apps: Dict[str, AppConfig] = Field(default_factory=dict)
    notification_triggers: list[NotificationTrigger] = Field(default_factory=list)


def get_default_settings() -> Settings:
    return Settings(
        apps={
            "sonarr": AppConfig(
                name="Sonarr",
                enabled=True,
                base_url="http://host.docker.internal:8989",
                api_key="",
                poll_interval_seconds=300,
                stage=1,
                prerequisites=[],
                field_mappings={
                    "title": "SONARR_TITLE",
                    "status": "SONARR_STATUS",
                    "seriesId": "SONARR_SERIES_ID",
                    "episodeId": "SONARR_EPISODE_ID",
                },
            ),
            "radarr": AppConfig(
                name="Radarr",
                enabled=True,
                base_url="http://host.docker.internal:7878",
                api_key="",
                poll_interval_seconds=300,
                stage=1,
                prerequisites=[],
                field_mappings={
                    "title": "RADARR_TITLE",
                    "status": "RADARR_STATUS",
                    "movieId": "RADARR_MOVIE_ID",
                },
            ),
            "shoko": AppConfig(
                name="Shoko Server",
                enabled=True,
                base_url="http://host.docker.internal:8111",
                api_key="",
                poll_interval_seconds=300,
                stage=2,
                prerequisites=["SONARR_STATUS=IMPORTED"],
                field_mappings={
                    "anidbId": "ANIDB_ID",
                    "status": "SHOKO_STATUS",
                    "vfsPath": "SHOKO_VFS_PATH",
                },
            ),
            "jellyfin": AppConfig(
                name="Jellyfin",
                enabled=True,
                base_url="http://host.docker.internal:8096",
                api_key="",
                poll_interval_seconds=600,
                stage=3,
                prerequisites=["SHOKO_STATUS=RECOGNIZED"],
                field_mappings={
                    "itemId": "JELLYFIN_ITEM_ID",
                    "status": "JELLYFIN_STATUS",
                    "playCount": "JELLYFIN_PLAY_COUNT",
                },
            ),
            "anibridge": AppConfig(
                name="AniBridge",
                enabled=True,
                base_url="http://host.docker.internal:8098",
                api_key="",
                poll_interval_seconds=600,
                stage=4,
                prerequisites=["JELLYFIN_STATUS=AVAILABLE"],
                field_mappings={
                    "syncStatus": "ANIBRIDGE_SYNC",
                },
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
