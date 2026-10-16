# ServerManager Technical Backlog & Roadmap

**Appliance:** `server-manager` (Universal Telemetry & Cross-Service Pipeline)  
**Tracking Repository:** `Lithry/server-manager.git`  
**Current Baseline Version:** `v0.1.9`  
**Status:** Living Technical Backlog  
**Language Standard:** English (Universal Codebase Standard)

---

## 1. Semantic Versioning Governance & Release Gates

> [!IMPORTANT]
> **Strict Semantic Versioning Standard (`va.b.c`)**:  
> - `a`: Must remain `0` during active development, refactoring, and stabilization.
> - `b`: Major architectural phase number currently in progress.
> - `c`: Subphase milestone, critical bugfix, or component iteration.
> 
> **Release Gate for `v1.0.0`**:  
> The `v1.0.0` milestone is **STRICTLY RESERVED** for the final production MVP. Under zero circumstances will `v1.0.0` be tagged, released, or bumped autonomously. It **strictly requires explicit, direct confirmation from the user** in chat once all production stabilization gates are satisfied. Until then, active development remains in `v0.x.y`.

---

## 2. Priority Overview Matrix

| Task ID | Priority | Domain | Title | Phase / Milestone | Status |
| :--- | :---: | :---: | :--- | :---: | :---: |
| **FIX-01** | **P0 (Critical)** | Core / Ingestion | Multi-Enrichment Endpoints with Namespaces | Phase 1 (`v0.1.4`) | **COMPLETED ✓** |
| **FIX-02** | **P0 (Critical)** | Core / Ingestion | Automatic In-Memory Tag ID to Label Resolution | Phase 1 (`v0.1.4`) | **COMPLETED ✓** |
| **FIX-04** | **P1 (High)** | Core / Ingestion | Generic List Projection & Clean Serialization | Phase 1 (`v0.1.5`) | **COMPLETED ✓** |
| **CORE-01** | **P1 (High)** | Core / Engine | Tri-State Unidirectional Stage Progression Engine | Phase 1 (`v0.1.6`) | **COMPLETED ✓** |
| **AUDIT-01** | **P1 (High)** | Governance | Comprehensive Codebase Audit & Dead Code Elimination | Phase 1 (`v0.1.6`) | **COMPLETED ✓** |
| **REF-01** | **P1 (High)** | Frontend / Build | Modular ES Architecture & Vite Bundler Pipeline | Phase 1 (`v0.1.7`) | **COMPLETED ✓** |
| **STG-01** | **P1 (High)** | Core / WebUI | Auto-Assigned Numeric Stage IDs & Visual Reordering | Phase 1 (`v0.1.7`) | **COMPLETED ✓** |
| **STG-02** | **P2 (Medium)** | WebUI / Modal | Dedicated Sink Stage Option Checkbox in Stage Modal | Phase 1 (`v0.1.8`) | **COMPLETED ✓** |
| **STG-03** | **P1 (High)** | Core / Ingestion | Configurable Root Stage Activation Cutoff & Consumer Date Decoupling | Phase 1 (`v0.1.8`) | **COMPLETED ✓** |
| **SBX-01** | **P2 (Medium)** | WebUI / Tooling | API Sandbox Architectural Debate, Payload Inspector & Visual Refactor | Phase 1 (`v0.1.9`) | **COMPLETED ✓** |
| **LOG-01** | **P1 (High)** | WebUI / Observability | Dedicated Error Log View & Type Incompatibility Alerts | Phase 1 (`v0.1.9`) | **PLANNED 📅** |
| **UX-03** | **P3 (Polish)** | WebUI / Tooling | Discrete Multi-Variable Context Inputs for Transformer Test Harness | Phase 1 (`v0.1.9`) | **PLANNED 📅** |
| **CORE-04** | **P2 (Medium)** | Core / Storage | Accumulative JSON List Merging & Deduplication | Phase 1 (`v0.1.9`) | **COMPLETED ✓** |
| **STG-04** | **P2 (Medium)** | Core / WebUI | Stage-Scoped Field Mapping Selection & Granular Column Execution | Phase 1 (`v0.1.9`) | **COMPLETED ✓** |
| **CORE-02** | **P1 (High)** | Core / Engine | Multi-Pipeline Dynamic Registry & Scoped DAG Progression Engine | Phase 2 (`v0.2.0`) | **PLANNED 📅** |
| **API-01** | **P2 (Medium)** | Core / Presets | Shoko Server Verified API Schema & Presets | Phase 1 (`v0.1.6`) | **COMPLETED ✓** |
| **API-02** | **P2 (Medium)** | LLM / Telemetry | Tier 3 Guided Remediation API (`/api/v1/meta/remediate`) | Phase 4 (`v0.4.0`) | **PLANNED 📅** |
| **VIEW-01** | **P2 (Medium)** | Storage / Views | Dual-Mode Table & View Builder (Persistent Tables + Views) | Phase 3 (`v0.3.0`) | **PLANNED 📅** |
| **UX-01** | **P2 (Medium)** | WebUI / Tooling | Sample API Auto-Namespace Detection & Prefilling | Phase 1 (`v0.1.6`) | **COMPLETED ✓** |
| **UX-02** | **P2 (Medium)** | WebUI / Wizard | Guided Setup Flow & Pipeline Wizard | Phase 5 (`v0.5.0`) | **PLANNED 📅** |
| **CFG-01** | **P2 (Medium)** | Core / Config | Out-of-the-Box Service Presets (Sonarr, Radarr, Jellyfin) | Phase 5 (`v0.5.0`) | **PLANNED 📅** |
| **CFG-02** | **P2 (Medium)** | Core / WebUI | Single Source of Truth for Application Version | Phase 1 (`v0.1.6`) | **COMPLETED ✓** |
| **FIX-03** | **P2 (Medium)** | Ingestion / API | Sample API Flattener Support for Primitive & Empty Lists | Phase 1 (`v0.1.5`) | **COMPLETED ✓** |
| **DB-01** | **P3 (Polish)** | Telemetry | Granular Ingestion Log Audit & Secondary Query Timing | Phase 6 (`v0.6.0`) | **PLANNED 📅** |
| **UI-01** | **P3 (Polish)** | WebUI / Design | Deduplicate Topbar Version Badge | Phase 1 (`v0.1.6`) | **COMPLETED ✓** |

---

## 3. Detailed Work Packages (Planned & In Progress)

### 3.1 REF-01: Modular Frontend Stabilization & Legacy Cleanup (`v0.1.7`) [COMPLETED ✓]
- **Objective**: Complete stabilization of modular frontend assets and eliminate legacy monolith files.
- **Tasks**:
  1. Verify all modal event bindings and inputs (complete D3: readback of `target_url` and `topic` in `NotificationsPanel.js`, fixed `NotificationTriggerModal.js` persistence and closure). [✓ COMPLETED]
  2. Implement settings mutation rollback store (D13: rollback to previous verified configuration on failed `POST /api/v1/settings`). [✓ COMPLETED]
  3. Wire unhandled UI actions (D4: wire "Report Incident" modal to `POST /api/v1/incidents` and `AddErrorModal` to `POST /api/v1/incidents/catalog/errors`). [✓ COMPLETED]
  4. Archive / remove legacy monolithic files (`frontend/old_app.js` and `frontend/old_index.html`). [✓ COMPLETED]
  5. Validate production build and bundle size with zero console regressions (`npm run build`). [✓ COMPLETED]

---

### 3.2 STG-01, STG-02 & STG-03: Stage Order Automation, Dedicated Sink UI & Root Cutoff (`v0.1.8`)
- **Objective**: Improve stage configuration ergonomics, decouple historical date filtering, and finalize dedicated sink UI controls.
- **Tasks**:
  1. **STG-01 (Auto-Assigned Stage IDs & Visual Reordering)**: [✓ COMPLETED]
     - Visual stage reordering via Move Up / Move Down controls with boundary protections (`StagesPanel.js`).
     - Automatic normalization of integer `order` based on visual array position (`index + 1`) and slug immutability enforcement (`src/api/settings.py`).
  2. **STG-02 (Dedicated Sink Stage Checkbox)**: [✓ COMPLETED]
     - Add explicit "Sink Stage" toggle/checkbox in `StageModal.js` reflecting the backend engine rules established in `REF-06`.
     - When checked, sets `complete_condition = NULL` and displays informative hint: *"Items entering this stage are marked as SINK and will not transition further."*
  3. **STG-03 (Configurable Root Stage Activation Cutoff & Consumer Date Decoupling)**: [✓ COMPLETED]
     - Restrict `last_activated_at` filtering exclusively to Root stages (`start_condition IS NULL`) in `src/core/scheduler.py`.
     - Make `last_activated_at` user-configurable in `StageModal.js`, defaulting to `new Date().toISOString()` upon initial activation but allowing operator editing (e.g. to reprocess past events or constrain ingestion window).
     - Decouple Consumer and Sink stages from all activation timestamps, ensuring they evaluate and enrich any pipeline row satisfying their `start_condition`.

---

### 3.3 SBX-01: API Sandbox Decoupling, Payload Inspector & Visual Refactor (`v0.1.9`) [COMPLETED ✓]
- **Objective**: Overhaul the developer API Sandbox into an ergonomic, visually consistent testing environment for upstream services and enrichment chains decoupled from mandatory database rows.
- **Architectural Solution & Implemented Changes**:
  1. **Backend Database Decoupling & Multi-Source Resolution (`src/api/pipeline.py`)**: [✓ COMPLETED]
     - Updated `SandboxEnrichmentRequest` schema: `record_id: Optional[int] = None`, `sample_endpoint: Optional[str] = None`, `custom_context: Optional[Dict[str, Any]] = None`, and `enrichment_endpoints: Dict[str, str] = Field(default_factory=dict)`.
     - Completely decoupled sandbox execution from requiring an existing SQLite record: when `record_id` is omitted (`None`), database querying is entirely bypassed.
     - Direct Upstream Sampling: When `sample_endpoint` is provided (e.g., `/api/v3/history?pageSize=1`), performs an asynchronous HTTP GET against the service `base_url`, storing response data under `"sample"` and merging into root context.
     - Arbitrary Custom Context: Integrates user-provided JSON mock contexts into the evaluation dictionary.
     - Unified Sequential Enrichment: Evaluates secondary enrichment endpoints resolving `{placeholder}` expressions against the merged multi-source context (`{**row_dict, **sample_dict, **custom_context, **enrichment_data}`).
     - Returns unified response containing execution `logs`, `context_data`, and `flattened_keys` with wildcard projection paths (`[*]`).
  2. **Interactive Payload Inspector (`frontend/src/features/sandbox/ui/PayloadInspector.js`)**: [✓ COMPLETED]
     - Implemented 4-tab inspection workspace: `Discovered Keys (${N})`, `Endpoint Result`, `Cumulative Context`, and `Logs (${N})`.
     - Discovered Keys view renders all payload attributes with live search filtering, typed badges (`int`, `float`, `bool`, `list`, `dict`), and sample value previews.
     - 1-Click Copy: Copies dot-notation path to clipboard with temporary visual feedback.
     - 1-Click Insert: Appends or interpolates `{path}` placeholders directly into the active endpoint input template.
     - Endpoint Result tab provides a live JSON Path evaluation input field for quick ad-hoc extraction.
  3. **Modular Context Source Controls & Saved Endpoints (`frontend/src/features/sandbox/`)**: [✓ COMPLETED]
     - Extracted `ContextSourceControls.js` (<130 lines) providing service selector, optional `record_id` input, upstream live sample input, collapsible custom JSON context panel with live syntax validation, and action buttons.
     - Extracted `SavedEndpointsList.js` (<55 lines) displaying existing service enrichment endpoints with one-click template loading.
     - Extracted `sandboxStore.js` (<135 lines) for decoupled state management, error handling, and settings persistence.
     - Replaced blocking `alert()` popups with inline non-blocking feedback banners.
     - Replaced hardcoded inline styles with standard CSS design tokens (`var(--color-bg-*)`, `var(--color-border)`, `var(--color-accent)`).
  4. **Automated Verification & Production Build**: [✓ COMPLETED]
     - 4 unit tests implemented in `tests/test_sbx01_sandbox_decoupling.py` (all 19 project tests passing in 0.48s).
     - Vite production bundle compiled cleanly to `src/static/` with zero errors.

---

### 3.4 LOG-01: Dedicated Error Log View & Type Incompatibility Telemetry (`v0.1.9`)
- **Objective**: Provide an accessible, dedicated `Log` option in the left navigation sidebar displaying exclusively error and warning events in a clean, human-readable format.
- **Problem Statement**: When fields are mapped with incompatible data types (e.g. assigning arbitrary text to an `INTEGER` column), the backend safely rejects the corrupted value, but operators currently have no visible frontend feedback explaining why the column remained unassigned.
- **Tasks**:
  1. **Navigation Entry**: Add `Log` with an alert/file-text icon to the sidebar menu in `AppShell.js`.
  2. **Error Filter View**: Create `LogPage.js` leveraging `DataTable` displaying solely `ERROR` and `WARNING` level telemetry (timestamp, service/pipeline key, column, message).
  3. **Mapping Incompatibility Telemetry**: Expose structured logging / backend event feed (e.g. `"Field 'X' for item 'Z' was not loaded: value incompatible with type INT"`) queryable via `GET /api/v1/system/logs?level=ERROR`.

---

### 3.5 UX-03: Discrete Multi-Variable Context Inputs for Transformer Test Harness (`v0.1.9`)
- **Objective**: Improve ergonomics and eliminate JSON syntax friction when testing transformer expressions in `MappingModal.js`.
- **Problem Statement**: Operators currently have to handcraft a raw JSON object (e.g. `{"EVENT": "ADDED", "value": "/path/..."}`) to test chained predicates and sample values, which frequently causes syntax errors with quotes, types, and brackets.
- **Tasks**:
  1. **Dedicated Sample Value (`value`) Input**:
     - Provide an isolated input field for the primary `value` being mapped (supports strings, numbers, paths, booleans).
  2. **Multi-Variable Context Inputs with Comma-Separated Support**:
     - Allow specifying multiple context variables either via parallel comma-separated lists:
       - Variable Names: `SHOKO_ID, ANIDB_ID, EVENT`
       - Variable Values: `2547, 3587, ADDED`
     - Or via key=value shorthand: `SHOKO_ID=2547, ANIDB_ID=3587, EVENT=ADDED`.
  3. **Automatic Type Coercion**:
     - Automatically infer numeric types (e.g. integers, floats), booleans, and strings without manual quotes.
     - Construct the final `context_dict` payload sent to `POST /api/v1/settings/test-transformer`.

---

### 3.6 CORE-04: Accumulative JSON List Extraction, Merging, and Type Safety (`v0.1.9`) [COMPLETED ✓]
- **Objective**: Support extracting nested JSON array attributes, appending scalar values into accumulative list columns, and merging lists with deduplication and strict type boundaries.
- **Architectural Solution & Implemented Changes**:
  1. **Mandatory Array Traversal Syntax (`extract_dotted_value`)**:
     - Enforce explicit `[*]` syntax (e.g., `tags[*].name`, `objeto[*].data`) for array projection; implicit array traversal without `[*]` returns `None` to prevent accidental projections.
     - Retain zero-based numeric indexing (e.g., `tags[0].name`, `tags.1.name`).
  2. **Terminal Scalar-to-List Wrapping (`[*]`)**:
     - Support terminal `[*]` syntax on scalar paths (e.g., `episode.title[*]`) to wrap scalar values into single-item lists `[val]`.
     - Ensures list pre-coercion in both root ingestion (`_poll_and_ingest`) and consumer enrichment (`_execute_consumer_enrichment`) when field mappings declare terminal `[*]`.
  3. **JSON List Detection & Strict Type Integrity (`merge_field_value` & `is_json_list`)**:
     - Implemented `is_json_list` helper detecting native Python lists and JSON-encoded array strings.
     - Rejects scalar updates into list columns and list updates into scalar columns, preserving existing column values and emitting structured error diagnostics.
     - Merges list-to-list with exact, whitespace-stripped, and case-insensitive deduplication while preserving element insertion order.
  4. **Upstream Schema Inspection (`flatten_json_keys`)**:
     - Formats discovered array paths with `[*]` notation (e.g., `tags[*].name`, `genres[*]`) in `src/api/pipeline.py`.
  5. **Automated Test Suite**:
     - Validated via 9 unit tests in `tests/test_core04_list_merging.py`.

---

### 3.7 STG-04: Stage-Scoped Field Mapping Selection & Granular Column Execution (`v0.1.9`) [COMPLETED ✓]
- **Objective**: Allow stages to select and execute specific subsets of a service's field mappings rather than applying all service mappings indiscriminately.
- **Architectural Solution & Implemented Changes**:
  1. **Stage Configuration Schema Enhancement (`src/core/config.py`)**:
     - Extended `StageConfig` with `service_mapping_scopes: Dict[str, list[str]] = Field(default_factory=dict)` mapping `service_id` to allowed `target_column` names for that stage.
     - Guaranteed empty dictionary default behavior ensuring full backward compatibility for unconfigured stages (empty or omitted scope = all field mappings active). [✓ COMPLETED]
  2. **Granular Execution Engine in Scheduler (`src/core/scheduler.py`)**:
     - In `trigger_now` (root ingestion), resolves `allowed_cols` for each active root stage and restricts incoming payload mapping strictly to scoped columns; unscoped columns remain `NULL`. [✓ COMPLETED]
     - In `_update_mapped_values_for_stage` and `_execute_consumer_enrichment`, resolves `allowed_cols` per service and passes `allowed_columns` to consumer enrichment. Only scoped columns are evaluated, type-coerced, merged, and updated via SQL `UPDATE`; unscoped columns remain untouched. [✓ COMPLETED]
  3. **Settings API Normalization, Scope Sanitization & Rename Propagation (`src/api/settings.py`)**:
     - Automatically propagates column renames into `service_mapping_scopes` whenever a service mapping's `target_column` is edited. [✓ COMPLETED]
     - Sanitizes scopes during save: prunes unassigned services or non-existent columns, uppercase-normalizes and deduplicates column names, and removes empty scopes so stages fall back cleanly to all-columns execution. [✓ COMPLETED]
  4. **Modular WebUI Scope Selector (`ServiceScopeSelector.js` & `StageModal.js`)**:
     - Extracted standalone `ServiceScopeSelector.js` (<120 lines) to preserve component boundaries (<250 lines in `StageModal.js`). [✓ COMPLETED]
     - Renders native `<details>` accordions with Select All / Clear All controls, scoped column badges (`${checkedCount} of ${totalCount} active` or `All fields active by default`), and operator guidance. [✓ COMPLETED]
     - Implemented `collectServiceMappingScopes` with clean default fallback (omits service key if 0 or all columns checked) and non-blocking modal UX. [✓ COMPLETED]
  5. **Automated Verification**:
     - Authored and verified 5 isolated unit and integration test cases in `tests/test_stg04_stage_mapping_scopes.py` (all 15 project tests passing cleanly in `0.43s`). [✓ COMPLETED]

---

### 3.8 CORE-02: Multi-Pipeline Dynamic Registry & Scoped DAG Progression Engine (`v0.2.0` - Phase 2)
- **Objective**: Upgrade from single `SERVICES_PIPELINE` to multi-pipeline dynamic architecture.
- **Dependencies**: Requires stabilization of single-pipeline stage mechanics (`STG-01` through `STG-03`) and developer sandbox tooling (`SBX-01`).
- **Tasks**:
  1. Create metadata registry table in SQLite:
     ```sql
     CREATE TABLE IF NOT EXISTS PIPELINES (
         ID TEXT PRIMARY KEY,
         NAME TEXT NOT NULL,
         DESCRIPTION TEXT,
         TABLE_NAME TEXT NOT NULL,
         ENABLED INTEGER DEFAULT 1,
         CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
     );
     ```
  2. Support dynamically generated isolated SQLite tables: `PIPELINE_<SLUG>` (e.g. `PIPELINE_MEDIA`, `PIPELINE_BACKUPS`).
  3. Scope stages, services, and field mappings to specific `pipeline_id`.
  4. Update WebUI navigation with pipeline selector switcher and scoped pipeline views.

---

### 3.9 VIEW-01: Dual-Mode Table & View Builder (`v0.3.0` - Phase 3)
- **Objective**: Allow operators to create both virtual SQL views and persistent materialized destination tables.
- **Tasks**:
  1. Support two dataset types:
     - **Dynamic Views**: Virtual SQLite views (`CREATE VIEW ...`) for ad-hoc inspection and prototyping.
     - **Persistent Tables**: Real SQLite destination tables with background incremental Upsert synchronization (`INSERT INTO ... ON CONFLICT DO UPDATE`).
  2. Factory preset for `CATALOG_MEDIA` consolidated playable library catalog, decoupled from pipeline retention purging.

---

### 3.10 API-02: Tier 3 Guided Remediation API (`v0.4.0` - Phase 4)
- **Objective**: Complete Tier 3 LLM tool suite for LibreChat / Ollama with safe remediation handoff.
- **Tasks**:
  1. Implement `POST /api/v1/meta/remediate`:
     - Accepts `{ "incident_id": int, "action": str, "target": str }`.
     - Validates payload against pre-authorized runbook in `ERROR_INDEX.REMEDY`.
     - Triggers corresponding Custom Tool script or container action.
     - Appends resolution note to `SYSTEM_INCIDENTS` and returns structured execution status.
  2. Embed HATEOAS payload in `GET /api/v1/meta/query?target=incidents` so LLMs mirror exact parameters without hallucination.

---

### 3.11 UX-02 & CFG-01: Guided Setup Flow & Out-of-the-Box Presets (`v0.5.0` - Phase 5)
- **Objective**: Enable zero-friction initial setup for new installations.
- **Tasks**:
  1. Add built-in service presets for Sonarr, Radarr, Shoko, and Jellyfin with pre-configured endpoints and mappings.
  2. Implement guided first-run wizard in WebUI.

---

### 3.12 DB-01: Granular Ingestion Log Audit & Telemetry Timing (`v0.6.0` - Phase 6)
- **Objective**: Ingestion performance observability.
- **Tasks**:
  1. Record execution duration in milliseconds for each service loop and secondary enrichment query.
  2. Expose latency metrics on Overview dashboard.

---

### 3.13 Production MVP Release Gate (`v1.0.0`)
- **Criteria**:
  - All Phases 1 through 6 completed and verified.
  - 100% test pass rate with automated integration suites.
  - Zero spin-up regressions on mechanical storage drives.
  - Explicit user authorization in chat to tag and bump `v1.0.0`.
