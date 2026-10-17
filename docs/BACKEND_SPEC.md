# ServerManager Backend Architecture & Technical Specification

**Current Version:** `v0.1.9`  
**Runtime:** Python 3.12+ (Slim Container)  
**Framework:** FastAPI + Uvicorn (ASGI)  
**Database:** SQLite 3 in WAL Mode (`aiosqlite`)  
**HTTP Client:** `httpx` (Asynchronous Connection Pools)  
**Validation:** Pydantic v2 / Pydantic Settings  
**Status:** Operational Production Baseline  
**Language Standard:** English (Universal Codebase Standard)

---

## 1. Module Inventory & Architectural Boundaries

```
src/
├── __init__.py           # Package version definition (__version__ = "0.1.9")
├── main.py               # Application entry point, lifespan management & routing
├── core/
│   ├── __init__.py       # Core package marker
│   ├── config.py         # Dynamic settings, Pydantic schemas & atomic persistence
│   ├── database.py       # SQLite WAL manager, schema initialization & DDL migrations
│   ├── gitops.py         # Read-only host repository status inspector
│   ├── predicates.py     # AST-based safe boolean expression evaluator & transformer re-exports
│   ├── scheduler.py      # Background task loops, API polling, tag caching & stage engine
│   └── transformers.py   # Single-line multi-branch transformer evaluator & safe context
└── api/
    ├── __init__.py       # API package marker
    ├── incidents.py      # Incident management and ERROR_INDEX catalog endpoints
    ├── meta.py           # Tier 3 LLM query endpoints (Rule 9 compliance)
    ├── pipeline.py       # Universal pipeline data, columns, API sampling & sandbox
    ├── settings.py       # Configuration updates, scheduler control & test runners
    ├── tools.py          # Custom tools discovery and sandboxed execution
    └── views.py          # Dynamic SQL views and catalog builder endpoints
```

---

## 2. Core Modules Specification

### 2.1 `src/main.py` — Lifecycle & Server Entrypoint
- **Umask Enforcement**: Configures process umask from `UMASK` environment variable (default: `002` for `664/775` homelab permissions).
- **Application Lifespan (`lifespan`)**:
  - *Startup*: Runs `db_manager.initialize_schema()`, ensuring all SQLite tables, indices, and error seeds exist. Synchronizes dynamic columns from configured services via `db_manager.sync_dynamic_columns()`. Starts background ingestion loops via `scheduler.start()`.
  - *Shutdown*: Gracefully stops active scheduler loops via `scheduler.stop()`.
- **CORS Middleware**: Configured to permit cross-origin requests from homelab network dashboards.
- **Static Asset Serving**: Mounts `/static` from `src/static/` (Vite build output) and serves `index.html` at the root path `/`.
- **Health Probe**:
  ```http
  GET /health
  ```
  Returns `{ "status": "healthy", "app": "server-manager", "version": "0.1.9", "scheduler_running": true }`.

---

### 2.2 `src/core/config.py` — Settings Management
- **Persistence Model**: Serialized JSON document stored at `SETTINGS_PATH` (default: `/data/settings.json`).
- **Concurrency Guard**: All read and write operations are synchronized using an `asyncio.Lock` inside `ConfigManager`.
- **Data Models (Pydantic v2)**:
  - `PipelineConfig`:
    - `id`: Pipeline identifier slug (e.g. `default`, `media`, `backups`).
    - `name`, `description`: Display label and description.
    - `table_name`: Resolved via `resolved_table_name()` into sanitized `PIPELINE_<SLUG>`.
    - `retention_days`: Retention window in days for `STATUS = 'SINK'` records (`LAST_UPDATED`).
    - `column_order`: Visual column ordering per pipeline.
    - `enabled`: Pipeline activation toggle.
  - `StageConfig`:
    - `id`: Semantic string slug (`ingest`, `recognition`, `library`).
    - `name`: Display label.
    - `order`: Visual sequence integer.
    - `pipeline_ids`: List of assigned pipeline IDs (M:N mapping; defaults to `["default"]`).
    - `interval_seconds`: Stage execution interval in seconds (`None` inherits `global_poll_interval_seconds`).
    - `start_condition`: Safe boolean predicate. `None` indicates a Root Producer stage.
    - `complete_condition`: Boolean predicate for stage completion. `None` indicates a Passive Sink stage (or Root + Sink when `start_condition` is also `None`).
    - `grace_period_minutes`: Stabilization delay before completing a Root stage (default: 10m).
    - `timeout_minutes`: Watchdog threshold before emitting `WARN_PIPELINE_STALLED` (default: 30m).
    - `service_ids`: List of assigned service keys (M:N mapping).
    - `service_mapping_scopes`: Dictionary mapping `service_id` to a list of allowed `target_column`s for that stage (default: `{}`).
    - `enabled`: Stage activation toggle.
    - `last_activated_at`: ISO timestamp recorded when a Root stage is toggled active.
  - `FieldMapping`:
    - `source_field`: Single or comma-separated dotted paths into upstream API payloads or existing uppercase table columns.
    - `target_column`: Sanitized destination column (`^[A-Z0-9_]+$`).
    - `data_type`: SQLite column type (`TEXT`, `INTEGER`, `REAL`).
    - `transformer`: Optional condition (e.g., `if 'anime' in tags then 1 else 0`).
  - `ServiceConfig`:
    - `base_url`: Target service URL.
    - `api_key`: API credential.
    - `poll_endpoint`: Primary polling URI (supports `{interval_seconds}`, `{interval_minutes}`, `{lookback_iso}`, `{lookback_unix}`).
    - `pipeline_key_template`: Template for unique item key (e.g., `{service}:{id}`).
    - `enrichment_endpoints`: Namespaced dictionary of secondary APIs.
    - `field_mappings`: List of configured `FieldMapping` entries.
  - `NotificationTrigger`:
    - `event`: Event identifier (`ON_INCIDENT_OPEN`, `ON_DEPLOY_SUCCESS`, etc.).
    - `channel`: `ntfy` or `webhook`.
    - `target_url`, `topic`, `priority`, `tags`, `message_template`.
  - `Settings`: Root configuration aggregate with `pipelines`, `stages`, `services`, and `notification_triggers`.
- **Settings Normalization & Safe Column Rename Migration (`src/api/settings.py`)**:
  - Validates stage ID uniqueness and allows visual stage reordering and deletion without index-mismatch errors.
  - Detects genuine column renames by matching unambiguous `source_field` mappings (never by list index), migrating columns across all configured `PIPELINE_<SLUG>` tables and propagating renames into `service_mapping_scopes`.

---

### 2.3 `src/core/database.py` — SQLite WAL, Multi-Pipeline & Custom Tables Engine
- **Pragmas**:
  - `PRAGMA journal_mode = WAL;` (High concurrency with zero reader blocking).
  - `PRAGMA synchronous = NORMAL;` (Optimal durability balance).
  - `PRAGMA busy_timeout = 5000;` (5-second lock retry window).
- **Schema DDL**:
  ```sql
  -- 1. Multi-Pipeline Metadata Registry
  CREATE TABLE IF NOT EXISTS PIPELINES (
      ID TEXT PRIMARY KEY,
      NAME TEXT NOT NULL,
      DESCRIPTION TEXT DEFAULT '',
      TABLE_NAME TEXT UNIQUE NOT NULL,
      RETENTION_DAYS INTEGER DEFAULT 7,
      ENABLED INTEGER DEFAULT 1,
      CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  -- 2. Dynamic Pipeline Table Template (per pipeline slug)
  CREATE TABLE IF NOT EXISTS PIPELINE_<SLUG> (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      PIPELINE_KEY TEXT UNIQUE NOT NULL,
      STAGE TEXT,
      STATUS TEXT DEFAULT 'PENDING',
      CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      LAST_UPDATED TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  -- 3. Extensible Error Definition Catalog
  CREATE TABLE IF NOT EXISTS ERROR_INDEX (
      ERROR_CODE TEXT PRIMARY KEY,
      CATEGORY TEXT NOT NULL,
      SEVERITY TEXT NOT NULL,
      DESCRIPTION TEXT NOT NULL,
      TRIGGER_CONDITION TEXT DEFAULT '',
      REMEDY TEXT DEFAULT '',
      UPDATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  -- 4. Normalized Incident Tracker
  CREATE TABLE IF NOT EXISTS SYSTEM_INCIDENTS (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      INCIDENT_CODE TEXT NOT NULL,
      SEVERITY TEXT NOT NULL,
      COMPONENT TEXT NOT NULL,
      DETAILS TEXT NOT NULL,
      RESOLVED INTEGER DEFAULT 0,
      RESOLUTION_NOTE TEXT DEFAULT '',
      CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      RESOLVED_AT TIMESTAMP,
      FOREIGN KEY (INCIDENT_CODE) REFERENCES ERROR_INDEX (ERROR_CODE)
  );

  -- 5. Dual-Mode Custom SQL Views & Persistent Custom Tables Registry
  CREATE TABLE IF NOT EXISTS CUSTOM_VIEWS (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      VIEW_NAME TEXT UNIQUE NOT NULL,
      SQL_QUERY TEXT NOT NULL,
      MODE TEXT DEFAULT 'VIEW',
      SYNC_KEY_COLUMN TEXT DEFAULT 'PIPELINE_KEY',
      REFRESH_INTERVAL_SECONDS INTEGER DEFAULT NULL,
      LAST_SYNCED_AT TIMESTAMP DEFAULT NULL,
      IS_PRESET INTEGER DEFAULT 0,
      CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```
- **Dynamic Migration, Retention & Custom Table Synchronization**:
  - `ensure_pipeline_table(pipeline_id, name, description, retention_days, enabled)`: Registers pipeline metadata in `PIPELINES` and provisions `PIPELINE_<SLUG>` with indices on `PIPELINE_KEY` and `STATUS`.
  - `sync_dynamic_columns(settings)`: Provisions all configured pipeline tables and ensures target columns exist across the pipelines to which each service's stages are assigned.
  - `prune_pipeline_retention(table_name, retention_days)`: Deletes exclusively `STATUS = 'SINK'` records where `datetime(LAST_UPDATED) < datetime('now', '-N days')`.
  - `sync_custom_table(view_name)`: Materializes and synchronizes a `MODE = 'TABLE'` entry from its `SQL_QUERY` projection using `INSERT INTO <TABLE> (...) VALUES (...) ON CONFLICT("<SYNC_KEY_COLUMN>") DO UPDATE SET ...`, updating `LAST_SYNCED_AT`.

---

### 2.4 `src/core/predicates.py` — Safe AST Boolean Evaluation
- **Security Policy**: Zero usage of arbitrary `eval()` on raw user strings.
- **`PredicateEvaluator`**:
  - Normalizes SQL-like tokens (`IS NOT NULL` $\rightarrow$ `is not None`, `AND` $\rightarrow$ `and`, `NULL` $\rightarrow$ `None`).
  - Evaluates comparison, boolean, unary, and safe function call AST nodes (`ast.Compare`, `ast.BoolOp`, `ast.UnaryOp`, `ast.Call` for `len`, `lower`, `upper`, `str`, `int`, `float`, `bool`).
  - Resolves identifiers case-insensitively against context dictionary and automatically unpacks serialized JSON list strings via `parse_json_list_if_str`.
  - `validate_syntax(expr)`: Performs syntax linting and operator checks before saving settings.

---

### 2.5 `src/core/transformers.py` — Single-Line Multi-Branch Transformer Engine
- **Decoupled Architecture**: Dedicated module isolating transformation parsing, list deduplication (`deduplicate_list`), and JSON list unpacking (`parse_json_list_if_str`).
- **`SafeContext(dict)`**:
  - Automatically resolves missing keys to `None` instead of raising `KeyError`.
  - Performs case-insensitive dictionary lookups and unpacks JSON list strings into Python `list` instances so `len(LIST_COL)` and `'x' in LIST_COL` work natively on SQLite columns.
- **`TransformerEvaluator`**:
  - **String Literal Masking (`_mask_strings` / `_unmask_strings`)**: Masks quoted string literals prior to keyword tokenization.
  - **Syntax Normalization (`normalize_transformer_syntax`)**: Normalizes single-line branching (`if ... then ... else if ... then ... else ...`, `elif`, `return`) into nested Python ternaries.
  - **Safe Sandbox Evaluation (`evaluate`)**: Executes in `safe_globals = {"__builtins__": {}}` with injected helpers (`str`, `int`, `bool`, `len`, `lower`, `upper`, `merge`).

---

### 2.6 `src/core/scheduler.py` — Stage-Driven Ingestion, Lazy Enrichment & DAG Progression
- **Stage-Driven Loops (`_stage_loop` & `run_stage_cycle`)**:
  - Spawns one async loop per enabled active stage (Root and Consumer stages) using `stage.interval_seconds` (falling back to `settings.global_poll_interval_seconds`).
  - Downstream `SINK` stages (`start_condition != NULL` and `complete_condition IS NULL`) are 100% passive and do not spawn polling tasks.
  - Per-table `asyncio.Lock` (`_get_pipeline_lock`) serializes concurrent stage writes to the same `PIPELINE_<SLUG>` table.
- **Relative Lookback Window ($\Delta t$) & ServerManager `CREATED_AT` (`_ingest_root_service_for_stage`)**:
  - Computes lookback window $\Delta t = \text{interval\_seconds}$ referenced against the upstream HTTP `Date` response header (`ref_clock`, with fallback to ServerManager UTC) to prevent timezone/clock-skew drops.
  - Interpolates `{interval_seconds}`, `{interval_minutes}`, `{lookback_iso}`, and `{lookback_unix}` placeholders in `poll_endpoint`.
  - Skips events older than `cutoff_dt = max(ref_clock - delta_t, stage.last_activated_at)`.
  - Stamps `CREATED_AT` strictly with ServerManager's internal UTC clock upon initial insertion (`STATUS = 'SINK'` if Root stage has no `complete_condition`, else `STATUS = 'PENDING'`).
  - **Passive SINK In-Place Updates**: If an incoming Root event matches an existing `PIPELINE_KEY` (even if the row is already in `STATUS = 'SINK'`), evaluates scoped reactive mappings and updates changed columns and `LAST_UPDATED = CURRENT_TIMESTAMP` in-place without resetting `STAGE` or `STATUS`.
- **Lazy Multi-Enrichment (`_compute_required_enrichment_namespaces` & `fetch_enrichment_payloads`)**:
  - Inspects active stage `service_mapping_scopes` (and transitive `{namespace.field}` endpoint placeholders) to fetch exclusively the secondary enrichment endpoints needed by the stage's monitored columns.
- **Reactive Delta Field Mapping Engine (`evaluate_reactive_mappings` & `_propagate_cross_service_table_mappings`)**:
  - Multi-source resolution across endpoint paths and uppercase table columns (`table_cols`), null-source skipping, multi-pass intra-service cascades, and cross-service table-column propagation.
- **Stage Progression, Grace Period & Watchdog (`reconcile_stages`)**:
  - Enforces `grace_period_minutes` for Root stages before allowing `complete_condition` transition.
  - Enforces `timeout_minutes` watchdog for `PENDING` rows, emitting deduplicated `WARN_PIPELINE_STALLED` incidents into `SYSTEM_INCIDENTS`.
  - Promotes `COMPLETED` rows forward to the next qualifying Consumer (`STATUS = 'PENDING'`) or Passive Sink (`STATUS = 'SINK'`) stage.
- **Background Retention & Custom Table Loops (`_retention_loop` & `_custom_tables_loop`)**:
  - `_retention_loop`: Periodically runs `prune_pipeline_retention` across all enabled pipelines.
  - `_custom_tables_loop`: Periodically runs `sync_custom_table` for all `MODE = 'TABLE'` entries in `CUSTOM_VIEWS` whose `REFRESH_INTERVAL_SECONDS` ($T_s$) has elapsed.

---

### 2.7 `src/core/gitops.py` — Git Inspection
- Inspects `/repo` via non-mutating Git subprocess calls (`git rev-parse HEAD`, `git branch --show-current`, `git status --porcelain`).

---

### 2.8 `src/api/pipeline.py` — Multi-Pipeline Data, Registry, Sampling & Sandbox Engine
- **Pipeline Registry CRUD (`/api/v1/pipeline/registry`)**:
  - `GET /api/v1/pipeline/registry`: List all configured pipelines with row/sink statistics.
  - `POST /api/v1/pipeline/registry`: Create a new pipeline and provision `PIPELINE_<SLUG>`.
  - `PATCH /api/v1/pipeline/registry/{pipeline_id}`: Update pipeline metadata, `retention_days`, or `enabled` state.
  - `DELETE /api/v1/pipeline/registry/{pipeline_id}`: Delete a pipeline and drop its `PIPELINE_<SLUG>` table (`default` pipeline is protected).
- **Parameterized Pipeline Operations**:
  - All data, purge, column management, and stats endpoints accept `pipeline_id: str = Query("default")`.
- **Unified Decoupled Sandbox (`POST /api/v1/pipeline/sandbox/enrichment`)**:
  - Uses shared `fetch_enrichment_payloads` and `_extract_payload_records` from `src/core/scheduler.py`.

---

## 3. REST API Contract & Route Matrix

| Method | Path | Summary | Tags |
| :--- | :--- | :--- | :--- |
| `GET` | `/health` | Container and scheduler health probe | System |
| `GET` | `/api/v1/pipeline/registry` | List all registered pipelines and row metrics | Pipeline |
| `POST` | `/api/v1/pipeline/registry` | Create a new pipeline and provision `PIPELINE_<SLUG>` | Pipeline |
| `PATCH` | `/api/v1/pipeline/registry/{id}` | Update pipeline configuration and retention policy | Pipeline |
| `DELETE` | `/api/v1/pipeline/registry/{id}` | Delete pipeline and drop `PIPELINE_<SLUG>` table | Pipeline |
| `GET` | `/api/v1/pipeline` | Query `PIPELINE_<SLUG>` records (`?pipeline_id=default`) | Pipeline |
| `POST` | `/api/v1/pipeline/purge` | Purge all rows from target pipeline (`?pipeline_id=default`) | Pipeline |
| `GET` | `/api/v1/pipeline/columns` | Retrieve pipeline table columns and deprecation state | Pipeline |
| `POST` | `/api/v1/pipeline/columns` | Add a dynamic column to target pipeline | Pipeline |
| `DELETE` | `/api/v1/pipeline/columns/{name}` | Delete a user-defined column from target pipeline | Pipeline |
| `POST` | `/api/v1/pipeline/columns/prune` | Batch prune unused dynamic columns from target pipeline | Pipeline |
| `PUT` | `/api/v1/pipeline/columns/order` | Persist visual column display order for target pipeline | Pipeline |
| `POST` | `/api/v1/pipeline/sample` | Live sample upstream service API payloads | Pipeline |
| `POST` | `/api/v1/pipeline/sandbox/enrichment` | Simulate enrichment chains against DB records, live samples, or custom contexts | Pipeline |
| `GET` | `/api/v1/pipeline/services/{id}/events` | Discover unique event types from upstream `poll_endpoint` | Pipeline |
| `GET` | `/api/v1/pipeline/stats` | Aggregated pipeline progression counts | Pipeline |
| `GET` | `/api/v1/views` | List all registered SQL views (`VIEW`) and custom tables (`TABLE`) | Views & Custom Tables |
| `GET` | `/api/v1/views/{name}` | Get metadata for a specific view or persistent custom table | Views & Custom Tables |
| `GET` | `/api/v1/views/{name}/data` | Execute view or query persistent custom table with pagination | Views & Custom Tables |
| `POST` | `/api/v1/views` | Create a virtual SQL `VIEW` or persistent materialized `TABLE` | Views & Custom Tables |
| `PATCH` | `/api/v1/views/{name}` | Update SQL projection, refresh interval $T_s$, or promote `VIEW` $\rightarrow$ `TABLE` | Views & Custom Tables |
| `POST` | `/api/v1/views/{name}/sync` | Manually trigger immediate `UPSERT` sync for a `MODE='TABLE'` entry | Views & Custom Tables |
| `DELETE` | `/api/v1/views/{name}` | Delete a custom view or persistent custom table | Views & Custom Tables |
| `GET` | `/api/v1/incidents` | List system incidents with error catalog remedies | Incidents |
| `GET` | `/api/v1/incidents/summary` | Fast count summary of active and resolved incidents | Incidents |
| `POST` | `/api/v1/incidents` | Report a new incident | Incidents |
| `POST` | `/api/v1/incidents/{id}/resolve` | Resolve an active incident with audit notes | Incidents |
| `GET` | `/api/v1/incidents/catalog/errors` | List known error definitions from `ERROR_INDEX` | Incidents |
| `POST` | `/api/v1/incidents/catalog/errors` | Upsert error definition template | Incidents |
| `DELETE` | `/api/v1/incidents/catalog/errors/{code}` | Delete error definition template | Incidents |
| `GET` | `/api/v1/tools` | List executable custom tools in `/config/custom_tools` | Custom Tools |
| `POST` | `/api/v1/tools/{name}/run` | Execute sandboxed tool and stream console logs | Custom Tools |
| `GET` | `/api/v1/settings` | Retrieve active application settings | Settings |
| `POST` | `/api/v1/settings` | Save settings, migrate columns across pipelines, and restart scheduler | Settings |
| `POST` | `/api/v1/settings/test-predicate` | Validate predicate expression syntax | Settings |
| `POST` | `/api/v1/settings/test-transformer` | Validate transformer expression syntax | Settings |
| `GET` | `/api/v1/settings/scheduler/status` | Stage-driven scheduler running status and loop state | Settings |
| `POST` | `/api/v1/settings/scheduler/restart` | Manually restart all background stage, retention, and custom table loops | Settings |
| `POST` | `/api/v1/settings/test-notification` | Dispatch test push alert to NTFY or Webhook | Settings |
| `GET` | `/api/v1/meta/query` | Tier 3 LLM Telemetry Query (`overview`, `incidents`, `pipeline`, `views`, `gitops`, `errors`) | LLM Meta-Tools |
| `GET` | `/api/v1/meta/tools` | OpenAPI function spec for LibreChat tool integration | LLM Meta-Tools |

---

## 4. Identified Backend Technical Gaps (Roadmap Input)

1. **API-02 (Remediation REST API for LLM Agents)**:
   - `POST /api/v1/meta/remediate` is planned to execute pre-authorized remediation runbooks via HATEOAS parameter handoff.

