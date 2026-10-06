"""ServerManager container entrypoint and FastAPI application."""

import os
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from src.core.database import db_manager
from src.core.scheduler import scheduler

from src.api.pipeline import router as pipeline_router
from src.api.views import router as views_router
from src.api.incidents import router as incidents_router
from src.api.tools import router as tools_router
from src.api.settings import router as settings_router
from src.api.meta import router as meta_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Initialize SQLite WAL tables and seed factory presets
    print("[i] Initializing ServerManager database schema...")
    await db_manager.initialize_schema()

    # Start background task scheduler
    print("[i] Starting task scheduler...")
    await scheduler.start()

    yield

    # Shutdown: Stop task scheduler gracefully
    print("[i] Stopping task scheduler...")
    await scheduler.stop()


app = FastAPI(
    title="Cubi ServerManager",
    version="0.1.3",
    description="Universal pipeline orchestrator, dynamic schema mapper, and telemetry engine for cubi-server.",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API Routers
app.include_router(pipeline_router)
app.include_router(views_router)
app.include_router(incidents_router)
app.include_router(tools_router)
app.include_router(settings_router)
app.include_router(meta_router)

# Mount Static Files and WebUI
static_dir = os.path.join(os.path.dirname(__file__), "static")
if os.path.exists(static_dir):
    app.mount("/static", StaticFiles(directory=static_dir), name="static")


@app.get("/", include_in_schema=False)
async def serve_index():
    index_file = os.path.join(static_dir, "index.html")
    if os.path.exists(index_file):
        return FileResponse(index_file)
    return {"message": "ServerManager API running. WebUI static assets not found."}


@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "app": "server-manager",
        "version": "0.1.3",
        "scheduler_running": scheduler.is_running(),
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("src.main:app", host="0.0.0.0", port=8099, reload=False)
