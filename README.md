# server-manager — Universal Pipeline, Monitoring & Telemetry Appliance (`v0.1.3`)

`server-manager` is an autonomous, containerized administration and telemetry platform designed for homelab and media server environments (`cubi-server`). It operates on port **8099** with a native FastAPI backend, SQLite in WAL mode, and a responsive vanilla WebUI.

---

## 🌟 Core Features

1. **Universal Ingestion Pipeline (`SERVICES_PIPELINE`) & Dynamic Schema Engine**:
   - Centralizes media tracking and application telemetry across external services (Sonarr, Radarr, Shoko Server, Jellyfin, AniBridge, etc.).
   - **Dynamic Schema Mapper**: Live-sample service APIs, select fields, and automatically apply sanitized columns (`^[A-Z0-9_]+$`).
   - **Field Transformers**: Map incoming attributes using conditional expressions (e.g. `if "anime" in tags then 1 else 0 -> IS_ANIME`).
   - **Clean Database Principle**: Non-monitored or filtered files are dispatched to an in-memory volatile ring-buffer event log for operator review, preventing unneeded rows in SQLite.

2. **DAG Stage Engine, Predicate Execution & Correlation Model**:
   - **Semantic Slugs**: Stages are defined by semantic keys (`id: "ingest"`, `id: "recognition"`, `id: "library"`) with visual drag-and-drop sequencing.
   - **Root Producer Stages (`start_condition IS NULL`)**: Only stages without prerequisites can create new rows in `SERVICES_PIPELINE`. Multiple root services produce independent rows.
   - **Consumer Stages (`start_condition IS NOT NULL`)**: Require correlation with existing rows and evaluate boolean predicates to `true` (e.g. `stage.ingest.completed AND IS_ANIME == 1`).
   - **Two-Phase Handshake Correlation**:
     - *Handshake Phase*: Correlates items via physical `FILE_PATH` (or `VFS_PATH` resolved via `os.readlink()` over `/DATA:ro` with zero disk spin).
     - *Lifecycle Phase*: Services track and update items strictly by native IDs (`SONARR_EPISODE_ID`, `SHOKO_FILE_ID`, `JELLYFIN_ITEM_ID`).
   - **Stability & Watchdogs**:
     - Ingestion grace period (`grace_period_minutes`, default 10m) ensures files stabilize on disk before Stage 1 completes.
     - Stage watchdog timeout (`timeout_minutes`, default 30m) automatically emits `WARN_PIPELINE_STALLED`.
   - **Native API Tag Classification**:
     - Resolves anime status directly from `/api/v3/tag` in Sonarr/Radarr. Zero regex or deduction from `FILE_PATH`.
     - Detects misclassified items (`WARN_ANIME_TAG_MISCLASSIFIED` if Jellyfin finds VFS with `IS_ANIME = 0`).

3. **Visual SQL View Builder (`MEDIA_CATALOG` Preset)**:
   - Create custom tables and views over `SERVICES_PIPELINE` using visual SQL builders.
   - Factory preset for consolidated playable media libraries (`WHERE JELLYFIN_STATUS = 'AVAILABLE'`).

4. **Extensible Error Index & System Incidents**:
   - Normalized incident tracker (`SYSTEM_INCIDENTS`) linked to an extensible error definition catalog (`ERROR_INDEX`).
   - Includes custom `REMEDY` runbook column for operator guidance.

5. **WebUI Event-Driven Notification Engine**:
   - Visual rule builder for alerts (`ON_INCIDENT_OPEN`, `ON_DEPLOY_SUCCESS`, `ON_MEDIA_ADDED`, etc.).
   - Dispatches payloads to NTFY topics or custom Webhooks.

6. **Custom Tools Bridge (`/config/custom_tools/`)**:
   - Sandboxed execution of host monitoring scripts (Storage Anti-Wake, VFS checks, Docker socket health).
   - Live streaming execution console directly in the WebUI.

7. **Three-Tier Decoupled LLM Architecture (Rule 9)**:
   - Lean read-only meta-tools API (`GET /api/v1/meta/query`) for edge LLMs (LibreChat / `llama3.2:3b`).
   - Purely passive and informational; zero destructive host actions.

---

## 🧭 WebUI Navigation Structure

- **Overview**: System telemetry, storage state, and health summaries.
- **Universal Pipeline**: Live interactive table of `SERVICES_PIPELINE` across all stages.
- **View Builder**: Custom SQL view manager and `MEDIA_CATALOG` visual explorer.
- **Incidents & Errors**: Unified anomaly logs (`SYSTEM_INCIDENTS`) and catalog (`ERROR_INDEX`).
- **Custom Tools**: Host telemetry script runner with live log console.
- **GitOps State**: Deployment tracking and commit synchronization with `cubi-server`.
- **Settings**: Modular configuration hub featuring 5 specialized sub-tabs:
  - *Services*: Dynamic API endpoints, credentials, and polling intervals (zero pre-baked templates).
  - *Stages & Predicates*: DAG stage graph, root producers, predicates, grace periods, and watchdogs.
  - *Field Mappings & Transformers*: Field extractor, column sanitizer, and conditional transformers.
  - *Notification Triggers*: Event bus to NTFY and Webhooks.
  - *Engine & Retention*: Database maintenance, WAL checkpoints, and retention pruning.

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
