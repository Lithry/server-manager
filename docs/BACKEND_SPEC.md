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
│   ├── predicates.py     # AST-based safe boolean expression & transformer evaluator
│   └── scheduler.py      # Background task loops, API polling, tag caching & stage engine
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
  - `StageConfig`:
    - `id`: Semantic string slug (`ingest`, `recognition`, `library`).
    - `name`: Display label.
    - `order`: Visual sequence integer.
    - `start_condition`: Safe boolean predicate. `None` indicates a Root Producer stage.
    - `complete_condition`: Boolean predicate for stage completion. `None` indicates a Sink Stage.
    - `grace_period_minutes`: File stabilization delay before completing stage 1 (default: 10m).
    - `timeout_minutes`: Watchdog threshold before emitting `WARN_PIPELINE_STALLED` (default: 30m).
    - `service_ids`: List of assigned service keys (M:N mapping).
    - `service_mapping_scopes`: Dictionary mapping `service_id` to a list of allowed `target_column`s for that stage (default: `{}`). Empty or omitted service key defaults to evaluating all mappings.
    - `enabled`: Stage activation toggle.
    - `last_activated_at`: ISO timestamp recorded when stage is toggled active.
  - `FieldMapping`:
    - `source_field`: Dotted path into upstream API payload (e.g., `series.title`, `data.droppedPath`).
    - `target_column`: Sanitized destination column (`^[A-Z0-9_]+$`).
    - `data_type`: SQLite column type (`TEXT`, `INTEGER`, `REAL`).
    - `transformer`: Optional condition (e.g., `if 'anime' in tags then 1 else 0`).
  - `ServiceConfig`:
    - `base_url`: Target service URL (e.g., `http://sonarr:8989`).
    - `api_key`: API credential.
    - `poll_endpoint`: Primary polling URI (e.g., `/api/v3/history`).
    - `poll_interval_seconds`: Optional per-service override for global interval.
    - `pipeline_key_template`: Template for unique item key (e.g., `{service}:{id}`).
    - `enrichment_endpoints`: Namespaced dictionary of secondary APIs (e.g., `{"series": "/api/v3/series/{seriesId}"}`).
    - `field_mappings`: List of configured `FieldMapping` entries.
  - `NotificationTrigger`:
    - `event`: Event identifier (`ON_INCIDENT_OPEN`, `ON_DEPLOY_SUCCESS`, etc.).
    - `channel`: `ntfy` or `webhook`.
    - `target_url`, `topic`, `priority`, `tags`, `message_template`.
  - `Settings`: Root configuration aggregate with retention, polling, stages, and services.
- **Settings Normalization & Scope Sanitization (`src/api/settings.py`)**:
  - Automatically synchronizes column renames into `service_mapping_scopes` across all stages when a target column is edited.
  - Prunes unassigned services or non-existent columns during settings update, uppercase-normalizing and deduplicating entries. Removes empty scopes so stages fall back cleanly to all-columns execution.

---

### 2.3 `src/core/database.py` — SQLite WAL & Schema Evolution
- **Pragmas**:
  - `PRAGMA journal_mode = WAL;` (High concurrency with zero reader blocking).
  - `PRAGMA synchronous = NORMAL;` (Optimal durability balance).
  - `PRAGMA busy_timeout = 5000;` (5-second lock retry window).
- **Schema DDL**:
  ```sql
  -- 1. Universal Pipeline Table
  CREATE TABLE IF NOT EXISTS SERVICES_PIPELINE (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      PIPELINE_KEY TEXT UNIQUE NOT NULL,
      STAGE TEXT,
      STATUS TEXT DEFAULT 'PENDING',
      LAST_UPDATED TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  -- 2. Extensible Error Definition Catalog
  CREATE TABLE IF NOT EXISTS ERROR_INDEX (
      ERROR_CODE TEXT PRIMARY KEY,
      CATEGORY TEXT NOT NULL,
      SEVERITY TEXT NOT NULL,
      DESCRIPTION TEXT NOT NULL,
      TRIGGER_CONDITION TEXT DEFAULT '',
      REMEDY TEXT DEFAULT '',
      UPDATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  -- 3. Normalized Incident Tracker
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

  -- 4. Custom SQL Views Registry
  CREATE TABLE IF NOT EXISTS CUSTOM_VIEWS (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      VIEW_NAME TEXT UNIQUE NOT NULL,
      SQL_QUERY TEXT NOT NULL,
      IS_PRESET INTEGER DEFAULT 0,
      CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```
- **Dynamic Migration Engine**:
  - `ensure_column(table_name, column_name, column_type)`: Executes `ALTER TABLE <table_name> ADD COLUMN "<column_name>" <type>` if column is absent. Rejects system-reserved columns.
  - `sync_dynamic_columns(services)`: Auto-ensures all target columns defined in service field mappings exist in `SERVICES_PIPELINE` on startup and configuration update.
  - `drop_column(table_name, column_name)`: Removes user-defined columns (`ALTER TABLE ... DROP COLUMN`).
  - `rename_column(table_name, old_col, new_col)`: Renames column dynamically while preserving table indices.

---

### 2.4 `src/core/predicates.py` — Safe AST Evaluation
- **Security Policy**: Zero usage of arbitrary `eval()` on raw user strings.
- **`PredicateEvaluator`**:
  - Normalizes SQL-like tokens (`IS NOT NULL` $\rightarrow$ `is not None`, `AND` $\rightarrow$ `and`, `NULL` $\rightarrow$ `None`).
  - Evaluates standard comparison and logical AST nodes (`ast.Compare`, `ast.BoolOp`, `ast.UnaryOp`).
  - Resolves identifiers case-insensitively against context dictionary (`IS_ANIME`, `FILE_PATH`, `stage.<id>.completed`).
  - `validate_syntax(expr)`: Performs syntax linting and operator checks before saving settings.
- **`TransformerEvaluator`**:
  - Evaluates conditional expressions matching `if <condition> then <val_true> else <val_false>`.
  - Injects safe lambda helpers (`lower`, `upper`, `merge`) without exposing unsafe `__builtins__`.

---

### 2.5 `src/core/scheduler.py` — Ingestion & State Progression
- **In-Memory Tag Cache**:
  - Upstream services provide numeric tag IDs (`series.tags: [1, 5]`).
  - Scheduler fetches `/api/v3/tag` from upstream and caches `{id: label}` for 10 minutes.
  - Automatically resolves numeric tags to string labels (`['anime']`) during payload flattening.
- **Nested List Projection (`extract_dotted_value`)**:
  - Traverses nested objects and projects arrays using mandatory `[*]` syntax (e.g. `movie.alternateTitles[*].title` $\rightarrow$ `["Sousou no Frieren", "Frieren: Beyond Journey's End"]`). Traversal over arrays without explicit `[*]` or numeric index returns `None`.
  - Supports terminal `[*]` syntax (e.g. `episode.title[*]`) to wrap scalar values into single-item lists `[val]` for accumulative list columns.
- **Data Sanitization (`sanitize_and_serialize`)**:
  - Null normalization: empty lists (`[]`), empty strings (`""`), and whitespace convert to `NULL`.
  - Non-empty lists are deduplicated and serialized as JSON arrays.
- **Cross-Service Array Merging (`merge_field_value`)**:
  - Enforces strict type boundaries via `is_json_list` helper: safely rejects scalar updates into list columns and list updates into scalar columns with diagnostic error logging.
  - Merges list-to-list with exact, stripped, and case-insensitive deduplication while preserving element insertion order.
- **Stage-Scoped Field Mapping Execution (`service_mapping_scopes`)**:
  - **Root Stage Scoping (`trigger_now`)**: Extracts `allowed_cols = active_stage.service_mapping_scopes.get(service_id)`. If defined and non-empty, restricts evaluated field mappings to columns in `allowed_cols`. Unscoped attributes are not mapped, preserving `NULL`.
  - **Consumer Enrichment Scoping (`_update_mapped_values_for_stage` & `_execute_consumer_enrichment`)**: Resolves `allowed_cols` per service from `stage.service_mapping_scopes` and passes `allowed_columns=allowed_cols` to consumer enrichment. Only scoped columns are computed, merged, and updated in SQLite. Unscoped columns are skipped and untouched.
- **Stage Progression Engine (`reconcile_stages`)**:
  - **Grace Period Check**: Verifies if Stage 1 items have matured beyond `grace_period_minutes`.
  - **Watchdog Check**: Detects intermediate rows stalled longer than `timeout_minutes` and inserts `WARN_PIPELINE_STALLED` into `SYSTEM_INCIDENTS`.
  - **Consumer Promotion**: Identifies rows with `STATUS = 'COMPLETED'` eligible for subsequent stages (`STAGE < target.order`), queries configured enrichment endpoints, executes field mappings, and updates row status.
  - **Sink Promotion**: Promotes matching rows to terminal `STATUS = 'SINK'`.

---

### 2.6 `src/core/gitops.py` — Git Inspection
- Inspects `/repo` via non-mutating Git subprocess calls (`git rev-parse HEAD`, `git branch --show-current`, `git status --porcelain`).
- Reports commit hash, short hash, active branch, and uncommitted dirty file count to the WebUI and Tier 3 meta-tools.

---

### 2.7 `src/api/pipeline.py` — Pipeline Data, Sampling & Decoupled Sandbox Engine
- **Decoupled API Sandbox (`POST /api/v1/pipeline/sandbox/enrichment`)**:
  - **`SandboxEnrichmentRequest` Schema**:
    - `service_id: str`: Target upstream service configuration key.
    - `record_id: Optional[int] = None`: Optional `SERVICES_PIPELINE` row ID. If omitted, database queries are entirely bypassed.
    - `sample_endpoint: Optional[str] = None`: Direct upstream path (e.g., `/api/v3/history?pageSize=1`) sampled live via HTTP GET.
    - `custom_context: Optional[Dict[str, Any]] = None`: Arbitrary operator-defined JSON mock context.
    - `enrichment_endpoints: Dict[str, str] = Field(default_factory=dict)`: Mapping of namespace labels to endpoint URI templates.
  - **Multi-Source Context Resolution**:
    - Assembles unified context: `{**row_dict, **sample_dict, **custom_context, **enrichment_data}`.
    - If `record_id` is supplied, fetches row from `SERVICES_PIPELINE`; raises `404` if not found.
    - If `sample_endpoint` is supplied, queries upstream service via `httpx.AsyncClient`, storing payload under `"sample"` and merging at root.
    - Injects `custom_context` for mock evaluation.
    - Sequentially iterates over `enrichment_endpoints`, resolving `{placeholder}` expressions using `extract_dotted_value` with case-insensitive fallbacks. Unresolved placeholders are recorded in execution logs without aborting the simulation.
    - Returns `{ "success": True, "logs": logs, "context_data": final_context, "flattened_keys": flatten_json_keys(final_context) }`.
- **Payload Schema Flattening (`flatten_json_keys`)**:
  - Recursively flattens nested dictionaries and collections into discrete paths, types, and sample strings.
  - Formats array items using explicit `[*]` wildcard projection notation (e.g. `items[*].id`, `tags[*]`) matching `CORE-04` array extractor semantics.

---

## 3. REST API Contract & Route Matrix

| Method | Path | Summary | Tags |
| :--- | :--- | :--- | :--- |
| `GET` | `/health` | Container and scheduler health probe | System |
| `GET` | `/api/v1/pipeline` | Query `SERVICES_PIPELINE` records with pagination & filters | Pipeline |
| `POST` | `/api/v1/pipeline/purge` | Purge all rows from `SERVICES_PIPELINE` | Pipeline |
| `GET` | `/api/v1/pipeline/columns` | Retrieve all table columns and deprecation state | Pipeline |
| `POST` | `/api/v1/pipeline/columns` | Add a dynamic column with strict naming checks | Pipeline |
| `DELETE` | `/api/v1/pipeline/columns/{name}` | Delete a user-defined column | Pipeline |
| `POST` | `/api/v1/pipeline/columns/prune` | Batch prune unused dynamic columns | Pipeline |
| `PUT` | `/api/v1/pipeline/columns/order` | Persist visual column display order | Pipeline |
| `POST` | `/api/v1/pipeline/sample` | Live sample upstream service API payloads | Pipeline |
| `POST` | `/api/v1/pipeline/sandbox/enrichment` | Simulate enrichment chains against DB records, live samples, or custom contexts | Pipeline |
| `GET` | `/api/v1/pipeline/services/{id}/events` | Discover unique event types from upstream history | Pipeline |
| `GET` | `/api/v1/pipeline/stats` | Aggregated pipeline progression counts | Pipeline |
| `GET` | `/api/v1/views` | List all custom and preset SQL views | Views |
| `GET` | `/api/v1/views/{name}` | Get specific view metadata | Views |
| `GET` | `/api/v1/views/{name}/data` | Execute view query with pagination | Views |
| `POST` | `/api/v1/views` | Register a new custom SQL view | Views |
| `DELETE` | `/api/v1/views/{name}` | Remove a custom SQL view | Views |
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
| `POST` | `/api/v1/settings` | Save settings, migrate columns, and restart scheduler | Settings |
| `POST` | `/api/v1/settings/test-predicate` | Validate predicate expression syntax | Settings |
| `POST` | `/api/v1/settings/test-transformer` | Validate transformer expression syntax | Settings |
| `GET` | `/api/v1/settings/scheduler/status` | Ingestion scheduler running status and loop state | Settings |
| `POST` | `/api/v1/settings/scheduler/restart` | Manually restart all background ingestion loops | Settings |
| `POST` | `/api/v1/settings/test-notification` | Dispatch test push alert to NTFY or Webhook | Settings |
| `GET` | `/api/v1/meta/query` | Tier 3 LLM Telemetry Query (Overview, Incidents, etc.) | LLM Meta-Tools |
| `GET` | `/api/v1/meta/tools` | OpenAPI function spec for LibreChat tool integration | LLM Meta-Tools |

---

## 4. Identified Backend Technical Gaps (Roadmap Input)

1. **CORE-02 (Multi-Pipeline Dynamic Registry `PIPELINES`)**:
   - Currently, all workflows share a single `SERVICES_PIPELINE` table.
   - Future architectural phase must support dynamic isolated tables (`PIPELINE_<SLUG>`) registered in a `PIPELINES` catalog table.
2. **API-02 (Remediation REST API for LLM Agents)**:
   - `POST /api/v1/meta/remediate` is planned to execute pre-authorized remediation runbooks via HATEOAS parameter handoff.
