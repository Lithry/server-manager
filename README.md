# server-manager — Universal Pipeline, Monitoring & Telemetry Appliance (`v0.1.6`)

`server-manager` is an autonomous, containerized administration and telemetry platform designed for homelab and media server environments (`cubi-server`). It operates on port **8099** with a native FastAPI backend, SQLite in WAL mode, and a responsive vanilla WebUI.

---

## 🌟 Core Features

1. **Universal Multi-Pipeline Architecture & Dynamic Schema Engine**:
   - Centralizes telemetry and item tracking across arbitrary, isolated workflows registered in `PIPELINES`:
     - Dynamically provisions independent SQLite tables per pipeline: `PIPELINE_<SLUG>` (e.g. `PIPELINE_MEDIA`, `PIPELINE_BACKUPS`).
     - Eliminates schema bloat: media metadata columns remain cleanly decoupled from backup or document tracking.
   - **Dynamic Schema Mapper**: Live-sample service APIs, discover scalar arrays (`genres`, `tags`), and automatically apply sanitized columns (`^[A-Z0-9_]+$`).
   - **Namespaced Multi-Enrichment**: Configure multiple secondary API endpoints per service without key collisions (e.g., `series: /api/v3/series/{seriesId}`, `episode: /api/v3/episode/{episodeId}`, `movie: /api/v3/movie/{movieId}`).
   - **Generic Dotted-Path List Projection**: Extract attributes across arrays of nested objects (e.g. `movie.alternateTitles.title` or `[*]`) into clean string lists without hardcoded schemas.
   - **Field Transformers & Tag Resolution**: Map incoming attributes using conditional expressions (e.g. `if 'anime' in tags then 1 else 0 -> IS_ANIME`). Automatically resolves numeric tag IDs to human-readable labels via in-memory cached `/api/v3/tag` queries.
   - **Clean Database Principle & Cross-Service Merging**: Empty lists, empty objects, and blank strings normalize to SQL `NULL` (preventing `"[]"` noise). Multi-stage updates seamlessly accumulate and deduplicate array elements natively across different downstream services (e.g. merging English names from Sonarr with Japanese names from Shoko into a unified list). Ignored files route to a volatile ring-buffer.
   - **API Sandbox**: Integrated playground to simulate full enrichment pipelines in isolation, allowing administrators to visually extract dot-notation mapping paths and execute new nested API endpoints against real database contexts.

2. **Tri-State Unidirectional Stage Progression Engine (`SERVICES_PIPELINE`)**:
   - **Tri-State Stage Taxonomy**:
     - **Root Producer (`start_condition IS NULL`)**: Autonomously ingests new rows into `SERVICES_PIPELINE` from upstream APIs (Sonarr, Radarr). Multiple root producers can exist for different services and stages. Initial state: `STAGE = order, STATUS = 'PENDING' -> 'COMPLETED'`.
     - **Consumer Stage (`start_condition != NULL` & `complete_condition != NULL`)**: Forward-only intermediate processing stage. Promotes rows with `STATUS = 'COMPLETED'` from earlier stages (`STAGE < target_stage`). Assigned services query enrichment endpoints resolving `{COLUMN}` placeholders from row data and apply field mappings. Once `complete_condition` passes, marks `STATUS = 'COMPLETED'`.
     - **Sink Stage (`start_condition != NULL` & `complete_condition IS NULL`)**: Collector / terminal end-state (e.g. archived, discarded, or permanent library items). Promotes qualifying rows directly to `STATUS = 'SINK'` rendered with an orange visual badge. Terminal state prevents any further stage transitions.
   - **Unidirectional Progression**: Progresses strictly forward (`order > current_stage`). Stages cannot transition backward or jump to Root Producers. Enables dynamic skipping of stages based on predicates (e.g. anime routes to Shoko recognition, while non-anime skips directly to downstream stages or sinks).
   - **Context-Aware Predicate Evaluation**: Injects row columns, numeric stage indicators (`STAGE`, `stage`), and stage completion flags (`stage.<id>.completed = True`) into AST evaluation context.
   - **Stability & Watchdogs**:
     - Ingestion grace period (`grace_period_minutes`, default 10m) ensures files stabilize on disk before Stage 1 completes.
     - Stage watchdog timeout (`timeout_minutes`, default 30m) automatically emits `WARN_PIPELINE_STALLED`.
   - **Native API Tag Classification**:
     - Resolves anime status directly from `/api/v3/tag` in Sonarr/Radarr. Zero regex or deduction from `FILE_PATH`.
     - Detects misclassified items (`WARN_ANIME_TAG_MISCLASSIFIED` if Jellyfin finds VFS with `IS_ANIME = 0`).

3. **Dual-Mode Table & View Builder (`MEDIA_CATALOG` Preset)**:
   - Create custom derived datasets over any active pipeline table supporting two distinct modes:
     - **Persistent Materialized Tables**: Real destination SQLite tables with automated incremental Upsert synchronization. Decoupled 100% from pipeline retention to preserve catalogs and inventories even when operational pipeline history is pruned.
     - **Virtual Dynamic Views**: Pure on-the-fly SQL views for ad-hoc inspection, temporary filtering, and rapid schema prototyping.
   - **One-Click Promotion**: Test queries and schemas as a Dynamic View, then promote to a Persistent Materialized Table once validated.
   - Factory preset for consolidated playable media library (`CATALOG_MEDIA`).

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
   - Lean REST API for edge LLMs (LibreChat / Ollama `llama3.2:3b`) with minimal token footprint (<80 tokens prefill):
     - `GET /api/v1/meta/status`: Compact system health and disk anti-wake state.
     - `GET /api/v1/meta/incidents`: Unresolved anomaly catalog with priority tags.
     - `GET /api/v1/meta/pipelines/{id}/summary`: Aggregated stage progression counts.
     - `POST /api/v1/remedies/{remedy_id}/execute`: Triggers pre-approved operational runbook remedies with audit logging.
   - Purely decoupled telemetry; zero raw database connections, log scraping, or unconstrained shell execution.

8. **Modern Modular Frontend & Vite Build Pipeline**:
   - WebUI architecture decoupled into strict ES Modules (Core, Components, Views, Styles).
   - Multi-stage containerized build pipeline leveraging Vite to minify, obfuscate, and bundle assets.
   - Final production image delivers static content through FastAPI with zero Node.js runtime overhead.

---

## 🧭 WebUI Navigation Structure

- **Overview**: System telemetry, storage state, and health summaries.
- **Universal Pipeline**: Live interactive table of `SERVICES_PIPELINE` across all stages.
- **View Builder**: Custom SQL view manager and `MEDIA_CATALOG` visual explorer.
- **Incidents & Errors**: Unified anomaly logs (`SYSTEM_INCIDENTS`) and catalog (`ERROR_INDEX`).
- **Custom Tools**: Host telemetry script runner with live log console.
- **GitOps State**: Deployment tracking and commit synchronization with `cubi-server`.
- **Settings**: Modular configuration hub featuring 6 specialized sub-tabs:
  - *Services*: Dynamic API endpoints, credentials, and polling intervals (zero pre-baked templates).
  - *API Sandbox*: Interactive playground to simulate and register enrichment endpoints or extract data paths.
  - *Field Mappings & Transformers*: Field extractor, column sanitizer, and conditional transformers.
  - *Stages & Predicates*: DAG stage graph, root producers, predicates, grace periods, and watchdogs.
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
