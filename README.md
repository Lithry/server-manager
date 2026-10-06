# server-manager — Universal Pipeline, Monitoring & Telemetry Appliance

`server-manager` is an autonomous, containerized administration and telemetry platform designed for homelab and media server environments (`cubi-server`). It operates on port **8099** with a native FastAPI backend, SQLite in WAL mode, and a responsive vanilla WebUI.

---

## 🌟 Core Features

1. **Universal Ingestion Pipeline (`APPS_PIPELINE`)**:
   - Centralizes media tracking and application telemetry across Sonarr, Radarr, Shoko Server, Jellyfin, and AniBridge.
   - Dynamic schema mapper: live-sample application APIs, select fields, and automatically apply sanitized columns (`^[A-Z0-9_]+$`).
   - App execution stages and dependency chains (e.g. Stage 1: Ingest -> Stage 2: Recognize -> Stage 3: Available).

2. **Visual SQL View Builder (`MEDIA_CATALOG` Preset)**:
   - Create custom tables and views over `APPS_PIPELINE` using visual SQL builders.
   - Factory preset for consolidated playable media libraries (`WHERE JELLYFIN_STATUS = 'AVAILABLE'`).

3. **Extensible Error Index & System Incidents**:
   - Normalized incident tracker (`SYSTEM_INCIDENTS`) linked to an extensible error definition catalog (`ERROR_INDEX`).
   - Includes custom `REMEDY` runbook column for operator guidance.

4. **WebUI Event-Driven Notification Engine**:
   - Visual rule builder for alerts (`ON_INCIDENT_OPEN`, `ON_DEPLOY_SUCCESS`, etc.).
   - Dispatches payloads to NTFY topics or custom Webhooks.

5. **Custom Tools Bridge (`/config/custom_tools/`)**:
   - Sandboxed execution of host monitoring scripts (Storage Anti-Wake, VFS checks, Docker socket health).
   - Live streaming execution console directly in the WebUI.

6. **Three-Tier Decoupled LLM Architecture (Rule 9)**:
   - Lean read-only meta-tools API (`GET /api/v1/meta/query`) for edge LLMs (LibreChat / `llama3.2:3b`).
   - Purely passive and informational; zero destructive host actions.

---

## 🚀 Running with Docker

```bash
docker run -d \
  --name server-manager \
  -p 8099:8099 \
  -v /DATA/AppData/server-manager:/data \
  -v /DATA/AppData/server-manager/custom_tools:/config/custom_tools:ro \
  -v /var/run/docker.sock:/var/run/docker.sock:ro \
  -v /proc:/host/proc:ro \
  -v /home/facundo/cubi-server:/repo:ro \
  server-manager:latest
```

---

## 🛠️ Local Development

```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # Or .\venv\Scripts\Activate.ps1 on Windows

# Install dependencies
pip install -r requirements.txt

# Run development server
uvicorn src.main:app --host 0.0.0.0 --port 8099 --reload
```
