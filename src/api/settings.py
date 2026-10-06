"""Configuration and settings management API."""

import httpx
from typing import Any, Dict
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from src.core.config import config_manager, Settings, NotificationTrigger
from src.core.scheduler import scheduler
from src.core.predicates import PredicateEvaluator, TransformerEvaluator
from src.core.database import db_manager


router = APIRouter(prefix="/api/v1/settings", tags=["Settings"])


class TestNotificationRequest(BaseModel):
    trigger_id: str | None = None
    channel: str = "ntfy"
    target_url: str = "http://host.docker.internal:8090"
    topic: str = "cubi-alerts"
    message: str = "Test notification from ServerManager WebUI"


class TestPredicateRequest(BaseModel):
    expression: str | None = None


class TestTransformerRequest(BaseModel):
    expression: str | None = None
    sample_value: Any = None


@router.get("")
async def get_settings() -> Settings:
    """Retrieve full application settings."""
    return await config_manager.get_settings()


@router.put("")
async def update_settings(settings: Settings) -> Settings:
    """Update settings, auto-migrate database columns, and reload background scheduler."""
    # Auto-ensure dynamic columns in APPS_PIPELINE for all field mappings
    for app_name, app_conf in settings.apps.items():
        for mapping in app_conf.field_mappings:
            if mapping.target_column:
                try:
                    await db_manager.ensure_column("APPS_PIPELINE", mapping.target_column, mapping.data_type)
                except Exception as e:
                    print(f"[!] Warning ensuring column {mapping.target_column}: {e}")

    updated = await config_manager.update_settings(settings)
    await scheduler.restart()
    return updated


@router.post("/test-predicate")
async def test_predicate(req: TestPredicateRequest) -> Dict[str, Any]:
    """Test and validate predicate syntax."""
    valid, message = PredicateEvaluator.validate_syntax(req.expression)
    return {"valid": valid, "message": message}


@router.post("/test-transformer")
async def test_transformer(req: TestTransformerRequest) -> Dict[str, Any]:
    """Test and validate field transformer expression."""
    valid, message = TransformerEvaluator.validate_syntax(req.expression)
    result = None
    if valid and req.expression:
        try:
            result = TransformerEvaluator.evaluate(req.expression, req.sample_value)
        except Exception as e:
            valid = False
            message = str(e)
    return {"valid": valid, "result": result, "message": message}


@router.get("/scheduler/status")
async def get_scheduler_status() -> Dict[str, Any]:
    """Get status of the asynchronous task runner."""
    return scheduler.get_scheduler_status()


@router.post("/scheduler/restart")
async def restart_scheduler() -> Dict[str, Any]:
    """Manually restart scheduler loops."""
    await scheduler.restart()
    return {"success": True, "message": "Scheduler successfully restarted"}


@router.post("/test-notification")
async def send_test_notification(req: TestNotificationRequest) -> Dict[str, Any]:
    """Dispatch a test notification to verify ntfy or webhook connectivity."""
    settings = await config_manager.get_settings()

    target_url = req.target_url
    topic = req.topic
    channel = req.channel

    if req.trigger_id:
        # Match configured trigger
        matching = [t for t in settings.notification_triggers if t.id == req.trigger_id]
        if matching:
            t = matching[0]
            target_url = t.target_url
            topic = t.topic
            channel = t.channel

    try:
        async with httpx.AsyncClient(timeout=10.0) as client:
            if channel == "ntfy":
                url = f"{target_url.rstrip('/')}/{topic}"
                resp = await client.post(
                    url,
                    content=req.message.encode("utf-8"),
                    headers={"Title": "ServerManager Test Alert", "Tags": "test,bell"},
                )
            else:
                resp = await client.post(
                    target_url,
                    json={"message": req.message, "event": "TEST_ALERT"},
                )

            return {
                "success": resp.status_code in [200, 201, 202, 204],
                "status_code": resp.status_code,
                "response": resp.text[:200],
            }
    except Exception as e:
        return {
            "success": False,
            "error": str(e),
        }
