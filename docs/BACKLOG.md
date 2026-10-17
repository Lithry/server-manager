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
| **TRANS-01** | **P1 (High)** | Core / Engine | Single-Line Multi-Branch Transformer Engine & Syntax Normalization | Phase 1 (`v0.1.9`) | **COMPLETED ✓** |
| **SCHED-02** | **P1 (High)** | Core / Ingestion | Ingestion Watermark, Immutable CREATED_AT & Accurate LAST_UPDATED | Phase 1 (`v0.1.9`) | **COMPLETED ✓** |
| **UI-04** | **P2 (Medium)** | WebUI / Settings | Change-Tracking Modification Array & Accurate isDirty Reactivity | Phase 1 (`v0.1.9`) | **COMPLETED ✓** |
| **CORE-02** | **P1 (High)** | Core / Engine | Multi-Pipeline Dynamic Registry, Stage-Driven Loops & Passive SINK | Phase 2 (`v0.2.0`) | **COMPLETED ✓** |
| **API-01** | **P2 (Medium)** | Core / Presets | Shoko Server Verified API Schema & Presets | Phase 1 (`v0.1.6`) | **COMPLETED ✓** |
| **API-02** | **P2 (Medium)** | LLM / Telemetry | Tier 3 Guided Remediation API (`/api/v1/meta/remediate`) | Phase 4 (`v0.4.0`) | **PLANNED 📅** |
| **VIEW-01** | **P2 (Medium)** | Storage / Views | Dual-Mode Table & View Builder (Persistent Tables + Views) | Phase 3 (`v0.3.0`) | **COMPLETED ✓** |
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

### 3.8 TRANS-01: Single-Line Multi-Branch Transformer Engine & Syntax Normalization (`v0.1.9`) [COMPLETED ✓]
- **Objective**: Provide operators with an expressive, human-friendly single-line multi-branch syntax (`if ... then ... else if ... then ... else ...`) for field transformations without multiline textarea layout disruptions.
- **Architectural Solution & Implemented Changes**:
  1. **Decoupled Architecture (`src/core/transformers.py`)**:
     - Extracted `TransformerEvaluator` and `SafeContext` from `src/core/predicates.py` into dedicated `src/core/transformers.py` (<160 lines), isolating transformation processing from stage progression predicates.
     - Re-exported both classes in `src/core/predicates.py` for 100% backward compatibility across callers.
  2. **String Literal Masking Engine (`_mask_strings` & `_unmask_strings`)**:
     - Replaces string literals matching single- and double-quotes with placeholder tokens (`__STR_LIT_{idx}__`) before regex parsing.
     - Prevents token collisions when keywords (e.g. `then`, `else`, `return`, `if`) appear inside string values.
  3. **Multi-Branch Syntax Normalization (`normalize_transformer_syntax`)**:
     - Normalizes `else return <val>` to `else <val>` and `(if|elif|else if) <cond> return <val>` to `\1 <cond> then <val>`.
     - Normalizes human-friendly single-line branching syntax into nested Python ternary expressions:
       - 2-State: `if <cond> then <val1> else <val2>` $\rightarrow$ `(<val1>) if (<cond>) else (<val2>)`
       - Multi-Branch: `if <cond1> then <val1> else if <cond2> then <val2> else <default>` (or with `elif`) $\rightarrow$ chained backwards from `else` into `(<val1>) if (<cond1>) else ((<val2>) if (<cond2>) else (<default>))`.
       - Pure Python ternaries (e.g., `'DELETED' if EVENT == 'DELETED' else 'ACTIVE'`) pass through unmodified.
  4. **Syntax Validation & Safe Context Evaluation (`validate_syntax` & `evaluate`)**:
     - Pre-validates syntax using `ast.parse(norm, mode="eval")`.
     - `SafeContext` resolves missing keys to `None` and looks up identifiers case-insensitively.
     - Sandboxed evaluation environment with empty built-ins (`safe_globals = {"__builtins__": {}}`) and safe injected helpers (`str`, `int`, `bool`, `len`, `lower`, `upper`, `merge`).
  5. **Modular WebUI Guidance (`MappingModal.js`)**:
     - Retained single-line text input ergonomics.
     - Updated syntax help to illustrate direct booleans, 2-state conditionals, multi-branch conditionals (`if EVENT == 'DELETED' then 'DELETED' else if SHOKO_ID is not None then 'RECOGNIZED' else 'UNRECOGNIZED'`), and utility helpers.
     - Compiled production bundle cleanly via Vite to `src/static/`.
  6. **Automated Verification**:
     - Implemented 10 comprehensive unit tests in `tests/test_transformers.py` covering multi-branch chaining, keyword masking, case-insensitivity, syntax validation, and backward compatibility (all 29 project tests passing).

---

### 3.9 SCHED-02: Global Ingestion Watermark, Immutable CREATED_AT, Source None Skip & Accurate LAST_UPDATED (`v0.1.9`) [COMPLETED ✓]
- **Objective**: Establish robust ingestion cutoff boundaries, preserve item creation timestamps immutably, prevent unmapped None value overwrites, and eliminate false `LAST_UPDATED` timestamp churn.
- **Architectural Solution & Implemented Changes**:
  1. **Global Ingestion Watermark (`src/core/scheduler.py`)**: [✓ COMPLETED]
     - Updated polling watermark query to `SELECT MAX(CREATED_AT) as latest FROM SERVICES_PIPELINE` globally across the entire table without service key filtering (`PIPELINE_KEY LIKE ?`).
     - Added fallback to root stage activation timestamp (`active_root_stages[0].last_activated_at`) when the table is empty or `latest` is `None`.
     - In pagination evaluation, strictly evaluates events newer than (`>`) `latest_dt`. Any event with `r_dt <= latest_dt` is flagged as `is_older = True`, skipped, and halts pagination early when all records on a page have been processed.
  2. **Immutable `CREATED_AT`**: [✓ COMPLETED]
     - Reaffirmed that `CREATED_AT` is established strictly upon initial row insertion (`NEW_ENTRY`) using upstream event timestamp or UTC now.
     - Protected via `SYSTEM_RESERVED_COLUMNS`, excluded from dynamic mapping targets, and strictly omitted from all in-place SQL updates.
  3. **Skip `None` Source Values in Field Mappings (`src/core/scheduler.py`)**: [✓ COMPLETED]
     - In root stage ingestion mapping loop: if `val is None` after dotted path and direct key extraction, immediately `continue`, skipping transformer evaluation and preventing `None` from overwriting columns.
     - In consumer stage reconciliation (`_execute_consumer_enrichment`): if `val is None`, immediately `continue`, avoiding unnecessary evaluation and column writes.
  4. **`LAST_UPDATED` Modified Exclusively on Real Row Changes (`src/core/scheduler.py`)**: [✓ COMPLETED]
     - In root stage in-place updates: added `has_changes = any(existing_row.get(k) != v and existing_row.get(k.lower()) != v for k, v in mapped_fields.items())`. SQL `UPDATE` and `LAST_UPDATED = CURRENT_TIMESTAMP` execute only if `mapped_fields` has values and `has_changes` is `True`.
     - In consumer stage reconciliation (`_execute_consumer_enrichment`): maintained the strict `has_changes` check before executing SQL `UPDATE`, guaranteeing `LAST_UPDATED` updates only when real data differences exist.
  5. **Automated Verification**: [✓ COMPLETED]
     - Verified with `.venv\Scripts\python.exe -m py_compile src\core\scheduler.py` (0 errors).
     - Executed full test suite: 29 tests passing cleanly in 0.317s.

---

### 3.10 UI-04: Change-Tracking Modification Array & Accurate isDirty Reactivity in SettingsPage (`v0.1.9`) [COMPLETED ✓]
- **Objective**: Implement robust dirty state tracking, deep equality comparison, accurate button/badge reactivity, and unsaved changes navigation guards in `SettingsPage.js`.
- **Architectural Solution & Implemented Changes**:
  1. **Change-Tracking Modification Array Architecture (`frontend/src/pages/SettingsPage.js`)**: [✓ COMPLETED]
     - Implemented `pendingModifications = []` tracking array storing `{ key, oldValue, newValue }` records.
     - Initialized `baseline` from server settings snapshot upon page mount / query resolution.
     - Built canonical `deepEqual(a, b)` comparison algorithm handling nested dictionaries, order-sensitive arrays, and primitives without external dependencies.
     - Implemented `trackModification(key, oldValue, newValue)`:
       - When `deepEqual(oldValue, newValue)` is `true`: removes the entry from `pendingModifications` via `splice`.
       - When `deepEqual(oldValue, newValue)` is `false`: creates or updates the entry in `pendingModifications`.
     - Built `evaluateModifications(current)` to granularly track upstream services (`services.<id>`), notification triggers, pipeline stages, and engine retention / global polling.
  2. **Accurate `isDirty` Reactivity & Store Synchronization**: [✓ COMPLETED]
     - Intercepted `store.set` to continuously evaluate current cache data against `baseline` and derive `isDirty = pendingModifications.length > 0`.
     - When inputs or configurations are modified, `pendingModifications.length > 0` enables "Save All Settings" and displays the red `!` badge.
     - When modifications are undone, reverted, or newly added items deleted, `pendingModifications.length === 0` automatically resets `isDirty = false`, disabling the Save button and hiding the badge.
  3. **Atomic Save & Verified Baseline Rollback**: [✓ COMPLETED]
     - On successful `POST /api/v1/settings`: updates `baseline` to confirmed settings, clears `pendingModifications = []`, and resets `isDirty = false`.
     - On save error: restores `queryCache` from `baseline`, clears `pendingModifications = []`, and alerts the operator of rollback.
     - On unmount with unsaved changes left behind: safely rolls back `queryCache` to `baseline` to prevent dirty state contamination across routes.
  4. **Strict Module Boundary & Vite Production Compilation**: [✓ COMPLETED]
     - Refactored `frontend/src/pages/SettingsPage.js` to 215 lines (strictly below the 250-line boundary).
     - Executed `npm run build` in `frontend/`: successfully compiled production bundle into `src/static/` in 996ms with 0 errors.

---

### 3.11 CORE-02: Multi-Pipeline Dynamic Registry, Stage-Driven Loops, Passive SINK & Retention Engine (`v0.2.0`) [COMPLETED ✓]
- **Objective**: Upgrade from single hardcoded `SERVICES_PIPELINE` to a 100% service-agnostic multi-pipeline dynamic architecture with stage-driven intervals, relative lookback windows, passive `SINK` stages, and `LAST_UPDATED`-based `SINK` retention pruning.
- **Architectural Solution & Implemented Changes**:
  1. **Destructive Legacy Removal & `PIPELINES` Registry (`src/core/database.py`, `src/core/config.py`)**: [✓ COMPLETED]
     - Dropped legacy `SERVICES_PIPELINE` / `SERVICE_PIPELINE` tables.
     - Created `PIPELINES` metadata registry table and dynamic `PIPELINE_<SLUG>` tables (`PIPELINE_DEFAULT` seeded by default).
     - Added `PipelineConfig` and `StageConfig.pipeline_ids` (M:N assignment of stages to one or multiple pipelines).
     - Added `/api/v1/pipeline/registry` CRUD endpoints and parameterized all `/api/v1/pipeline*` endpoints by `pipeline_id`.
  2. **Stage-Driven Intervals & Relative Lookback Window ($\Delta t$) (`src/core/scheduler.py`)**: [✓ COMPLETED]
     - Moved polling interval ownership to `StageConfig.interval_seconds` (removing `poll_interval_seconds` from `ServiceConfig`).
     - Implemented `_stage_loop(stage_id)` and `run_stage_cycle(stage_id)`.
     - Root stage ingestion filters incoming events using a relative lookback window ($\Delta t = \text{interval\_seconds}$) referenced against the upstream HTTP `Date` response header (with fallback to ServerManager UTC) and supports `{interval_seconds}`, `{interval_minutes}`, `{lookback_iso}`, `{lookback_unix}` placeholders in `poll_endpoint`.
     - Stamped `CREATED_AT` strictly with ServerManager's internal UTC clock.
  3. **Passive `SINK` Stages & Root+Sink Support (`src/core/scheduler.py`)**: [✓ COMPLETED]
     - Downstream `SINK` stages (`start_condition != NULL` and `complete_condition IS NULL`) are 100% passive (no active polling loop).
     - Root stages with `complete_condition IS NULL` ingest directly with `STATUS = 'SINK'` (Root + Sink).
     - When a new event arrives in a Root stage matching an existing `PIPELINE_KEY` (even if the row is in `SINK`), the Root stage updates changed monitored columns and `LAST_UPDATED = CURRENT_TIMESTAMP` in-place without resetting `STAGE` or `STATUS`.
  4. **Retention Pruning & Watchdog Enforcement (`src/core/database.py`, `src/core/scheduler.py`)**: [✓ COMPLETED]
     - Implemented `prune_pipeline_retention` and `_retention_loop` to delete exclusively `STATUS = 'SINK'` records whose `LAST_UPDATED` is older than `retention_days`.
     - Enforced `grace_period_minutes` for Root stages and `timeout_minutes` watchdog emitting `WARN_PIPELINE_STALLED` incidents.

---

### 3.12 VIEW-01: Dual-Mode Table & View Builder (`v0.3.0`) [COMPLETED ✓]
- **Objective**: Allow operators to create both virtual SQL views (`MODE = 'VIEW'`) for temporary checks and persistent materialized custom tables (`MODE = 'TABLE'`) populated from pipeline data with manual or automated $T_s$ synchronization.
- **Architectural Solution & Implemented Changes**:
  1. **Upgraded `CUSTOM_VIEWS` Registry (`src/core/database.py`)**: [✓ COMPLETED]
     - Extended `CUSTOM_VIEWS` with `MODE` (`'VIEW'` or `'TABLE'`), `SYNC_KEY_COLUMN` (default `'PIPELINE_KEY'`), `REFRESH_INTERVAL_SECONDS` ($T_s$), and `LAST_SYNCED_AT`.
  2. **Materialized Custom Table Synchronization Engine (`sync_custom_table`)**: [✓ COMPLETED]
     - Dynamically provisions `<VIEW_NAME>` table with `"<SYNC_KEY_COLUMN>" TEXT PRIMARY KEY` and `LAST_SYNCED_AT`, adds projected columns automatically, and executes `INSERT INTO <VIEW_NAME> ... ON CONFLICT("<SYNC_KEY_COLUMN>") DO UPDATE SET ...`.
     - Persistent tables retain their records even after source rows are pruned from `PIPELINE_<SLUG>` by retention policies.
  3. **Manual & Automated $T_s$ Synchronization (`src/api/views.py`, `src/core/scheduler.py`)**: [✓ COMPLETED]
     - Added `POST /api/v1/views/{view_name}/sync` for on-demand manual synchronization and `PATCH /api/v1/views/{view_name}` to update `refresh_interval_seconds` or promote a `VIEW` to `TABLE`.
     - Added `_custom_tables_loop` in `TaskScheduler` to automatically synchronize `MODE = 'TABLE'` entries whenever their `REFRESH_INTERVAL_SECONDS` ($T_s$) elapses.
     - Queryable via `GET /api/v1/views/{view_name}/data`.

---

### 3.13 API-02: Tier 3 Guided Remediation API (`v0.4.0` - Phase 4)
- **Objective**: Complete Tier 3 LLM tool suite for LibreChat / Ollama with safe remediation handoff.
- **Tasks**:
  1. Implement `POST /api/v1/meta/remediate`:
     - Accepts `{ "incident_id": int, "action": str, "target": str }`.
     - Validates payload against pre-authorized runbook in `ERROR_INDEX.REMEDY`.
     - Triggers corresponding Custom Tool script or container action.
     - Appends resolution note to `SYSTEM_INCIDENTS` and returns structured execution status.
  2. Embed HATEOAS payload in `GET /api/v1/meta/query?target=incidents` so LLMs mirror exact parameters without hallucination.

---

### 3.14 UX-02 & CFG-01: Guided Setup Flow & Out-of-the-Box Presets (`v0.5.0` - Phase 5)
- **Objective**: Enable zero-friction initial setup for new installations.
- **Tasks**:
  1. Add built-in service presets for Sonarr, Radarr, Shoko, and Jellyfin with pre-configured endpoints and mappings.
  2. Implement guided first-run wizard in WebUI.

---

### 3.15 DB-01: Granular Ingestion Log Audit & Telemetry Timing (`v0.6.0` - Phase 6)
- **Objective**: Ingestion performance observability.
- **Tasks**:
  1. Record execution duration in milliseconds for each service loop and secondary enrichment query.
  2. Expose latency metrics on Overview dashboard.

---

### 3.16 Production MVP Release Gate (`v1.0.0`)
- **Criteria**:
  - All Phases 1 through 6 completed and verified.
  - 100% test pass rate with automated integration suites.
  - Zero spin-up regressions on mechanical storage drives.
  - Explicit user authorization in chat to tag and bump `v1.0.0`.
