# ServerManager Engineering & Activity Log (`PROJECT_LOG.md`)

This log maintains cross-session operational continuity, recording architectural decisions, completed milestones, modified files, and pending backlog items for the `server-manager` appliance.

---

## Session Baseline: 2026-10-14 — Step 1: Project Isolation & Documentation Baseline

### Role & Agent Assignment
- **Orchestrator (`Role 0`)**: Evaluated initial user objective, performed capability-based routing, and coordinated Step 1 plan presentation and confirmation gate.
- **Systems Architect / Analyst (`Role 1`)**: Analyzed source documentation from `c:\Users\sargi\Desktop\Mis Proyectos\Agents\03_ServerManager\` and current repository code to author the canonical isolated technical documentation suite.

### Architectural Decisions & Governance
1. **Repository Independence**:
   - `server-manager` is completely decoupled from the parent infrastructure tracking repository (`cubi-server.git`) and the source planning directory (`Agents/03_ServerManager/`).
   - All runtime specifications, schema references, backend contracts, and backlog tracking now reside canonically inside `server-manager/docs/`.
2. **Strict Semantic Versioning Standard (`va.b.c`)**:
   - Current active baseline established at `v0.1.6`.
   - `v1.0.0` is strictly protected and reserved for the final production MVP, requiring explicit user authorization.
3. **Container Isolation & Anti-Wake Enforcement**:
   - Reaffirmed `:ro` host mount policy (`/DATA:ro`, Docker socket `:ro`, `/proc:ro`, `/repo:ro`).
   - Anti-wake preservation confirmed: zero disk read polling on mechanical drives (`/mnt/MediaServer1`, `/mnt/MediaServer2`).
4. **Universal Language Standard**:
   - All codebase documentation, technical specifications, and system logs authored 100% in English.
   - User interaction in chat remains 100% in Spanish.

### Files Created
- `docs/ARCHITECTURE.md`: Master architectural blueprint, container boundaries, dynamic schema mapper, tri-state DAG progression engine, and Tier 3 LLM meta-tools interface.
- `docs/BACKEND_SPEC.md`: Backend technical specification for `v0.1.6` covering all modules in `src/main.py`, `src/core/*`, and `src/api/*`, SQLite WAL schema, and endpoint catalog.
- `docs/FRONTEND_SPEC.md`: Modular frontend architecture documentation (Feature-Sliced design, `lit-html`, Vite build pipeline, self-hosted `@fontsource` typography, and legacy defect audit matrix D1–D16).
- `docs/BACKLOG.md`: Appliance-exclusive prioritized technical backlog, phased roadmap (`v0.1.6` through `v1.0.0`), and work packages.
- `PROJECT_LOG.md`: Initialized activity and continuity log.

### Technical State Summary
- **Backend**: 15 Python modules in `src/` validated with zero syntax errors (`python -m py_compile`). Version: `0.1.6`.
- **Frontend**: Modular ES architecture in `frontend/src/` compiles cleanly via Vite into `src/static/` in 1.35 seconds (`npm run build` verified).
- **Docker**: Self-contained multi-stage build ready (`Dockerfile`, port 8099).

### Remaining Work Items (Next Steps)
1. **STG-01 / STG-02 (`v0.1.7`)**:
   - Conduct collaborative requirements analysis for numeric stage ordering and dedicated sink stage UI toggle.
2. **Phase 2 Preparation (`v0.2.0`)**:
   - Plan implementation of `CORE-02` (Multi-Pipeline Dynamic Registry `PIPELINES`).

---

## Session Milestone: 2026-10-14 — REF-02: Stage Ordering System Implementation (Frontend Phase 1)

### Role & Agent Assignment
- **Frontend & WebUI Specialist (`Role 3`)**: Implemented stage reordering UI and edit protections.

### Architectural Decisions & Changes Applied
1. **Stage Reordering UI (`StagesPanel.js`)**:
   - Added "Move Up" (↑) and "Move Down" (↓) buttons to each stage card.
   - Implemented `handleMoveStage` logic to swap elements in the local state via `queryCache` and mark settings as `isDirty`.
   - Enforced boundary protections: "Move Up" is disabled for the first item, "Move Down" for the last.
2. **Stage ID Edit Protection (`StageModal.js`)**:
   - Verified that the `id` input field is `disabled` when `editingStage` is present, preventing modifications to existing stage identifiers.

### Files Modified
- `frontend/src/features/settings/ui/StagesPanel.js`
- `frontend/src/features/settings/ui/StageModal.js` (Verified existing logic)

---

## Session Milestone: 2026-10-14 — REF-03: Backend Phase 1 Implementation

### Role & Agent Assignment
- **Backend Systems Engineer (`Role 2`)**: Implemented backend infrastructure for stage identification and ordering.

### Architectural Decisions & Changes Applied
1. **Stage Identification**:
   - Added `STAGE_SLUG` (TEXT) column to `SERVICES_PIPELINE` in `src/core/database.py` to allow stable, human-readable stage identifiers.
2. **ID Immutability**:
   - Implemented an immutability guard in `src/api/settings.py` that returns a `400 Bad Request` if a request attempts to modify an existing stage's ID.
3. **Order Normalization**:
   - Implemented automatic Order Normalization in `src/api/settings.py` (`stage.order = index + 1`) to ensure sequential ordering regardless of user input.
4. **Scheduler Update**:
   - Updated `src/core/scheduler.py` to identify stages by `STAGE_SLUG` and utilize the normalized `order` value for the promotion logic.

### Files Modified
- `src/core/database.py`
- `src/api/settings.py`
- `src/core/scheduler.py`

---

## Session Milestone: 2026-10-15 — REF-04: Fix STAGE_SLUG Sync in Scheduler

### Role & Agent Assignment
- **Backend Systems Engineer (`Role 2`)**: Fixed a critical synchronization bug in the stage reconciliation process.

### Bug Fixed
- **Issue**: In `reconcile_stages`, when a row transitioned to a new stage, only the `STAGE` (numeric) and `STATUS` columns were updated. The `STAGE_SLUG` remained stuck on the previous stage.
- **Fix**: Updated the transition `UPDATE` statement in `src/core/scheduler.py` to simultaneously update `STAGE` and `STAGE_SLUG` using `target_stage.order` and `target_stage.id` respectively.


---

## Session Milestone: 2026-10-15 — REF-05: Hard Reset of Pipeline Table (Phase 2 Consolidation)

### Role & Agent Assignment
- **Backend Systems Engineer (`Role 2`)**: Performed destructive cleanup and consolidation of stage identifiers.

### Architectural Decisions & Changes Applied
1. **Schema Hard Reset**:
   - Modified `SERVICES_PIPELINE` table: `STAGE` column changed from `INTEGER` to `TEXT` to store immutable slugs directly.
   - Removed all references to temporary `STAGE_SLUG` column.
2. **System Column Protection**:
    - Finalized `SYSTEM_RESERVED_COLUMNS` as `{"ID", "PIPELINE_KEY", "STAGE", "STATUS", "LAST_UPDATED"}`.
    - These columns are now strictly protected from WebUI modifications/deletions.
3. **Progression Engine Refactor**:
    - Updated `src/core/scheduler.py` to identify stages exclusively by slug.
    - Logic now resolves numeric `order` from configuration based on the slug found in the database.
    - All `INSERT` and `UPDATE` operations now write the slug to the `STAGE` column.
4. **API Cleanup**:
    - Simplified `src/api/pipeline.py` to treat `STAGE` as a text field, removing legacy numeric resolution and cleaning up dead code.

### Files Modified
- `src/core/database.py`
- `src/core/scheduler.py`
- `src/api/pipeline.py`
- `src/api/settings.py`

---

## Session Milestone: 2026-10-15 — REF-06: Pipeline Dynamic Column Sync, SINK Stage Engine & Retrocompatibility Purge

### Role & Agent Assignment
- **Orchestrator (`Role 0`)**: Evaluated pipeline breakdown, coordinated architectural analysis, presented root causes, and routed domain tasks following explicit user confirmation.
- **Backend Systems Engineer (`Role 2`)**: Executed core refactoring across settings, database dynamic column sync, and scheduler progression engine.
- **Technical Documentation Specialist (`Role 5`)**: Synchronized backend technical specification and updated operational log.

### Architectural Decisions & Changes Applied
1. **Retrocompatibility Purge**:
   - Permanently purged obsolete aliases and fallbacks to `apps` (`AppConfig = ServiceConfig`, `getattr(..., "apps")`) in `src/core/config.py`, `src/api/settings.py`, `src/core/scheduler.py`, and `src/api/pipeline.py`.
   - Replaced with direct, strongly-typed access via `settings.services`.
2. **Settings API Column Renaming Guard**:
   - Defined `old_services = old_settings.services` in `src/api/settings.py`, resolving the `NameError` preventing settings persistence and dynamic schema migrations.
3. **Startup Dynamic Column Synchronization**:
   - Implemented `DatabaseManager.sync_dynamic_columns()` in `src/core/database.py` to ensure all columns defined in service `field_mappings` physically exist in `SERVICES_PIPELINE`.
   - Integrated into the `lifespan` lifecycle of `src/main.py` ensuring automatic synchronization during container startup.
4. **Ascending Sequential Progression Engine**:
   - Refactored `TaskScheduler.reconcile_stages()` in `src/core/scheduler.py`:
     - Resolves current stage order from slug (`current_stage.order`).
     - Evaluates candidates with `order > current_stage.order` strictly sequentially in ascending order.
     - Transitions row immediately to the first candidate stage whose `start_condition` evaluates to `True`.
     - If none evaluates to `True`, the row remains in the current stage with `STATUS = 'COMPLETED'`.
5. **Terminal SINK Stage Invariance**:
   - Rows in `SINK` status are completely isolated from subsequent stage evaluation (never evaluate forward stages).
   - Rows in a `SINK` stage allow upstream data updates and enrichment (`STATUS IN ('PENDING', 'SINK')`), keeping their `STATUS = 'SINK'` immutable.
6. **Consumer Stage Reconciliation Fix**:
   - Corrected `complete_condition` query to filter pending rows by text slug `WHERE STAGE = ?` passing `(stage.id,)` instead of numeric order `(stage.order,)`.
   - Cleaned predicate evaluation context (`eval_ctx` and `ctx`) to preserve `STAGE` as the canonical string slug.

### Files Modified
- `src/core/config.py`
- `src/api/settings.py`
- `src/core/database.py`
- `src/main.py`
- `src/core/scheduler.py`
- `src/api/pipeline.py`
- `docs/BACKEND_SPEC.md`
- `PROJECT_LOG.md`

---

## Session Milestone: 2026-10-15 — DOC-01: Canonical Documentation Synchronization for STG-02

### Role & Agent Assignment
- **Orchestrator (`Role 0`)**: Evaluated operator feedback, audited `StageModal.js` implementation, and coordinated canonical alignment.
- **Technical Documentation Specialist (`Role 5`)**: Synchronized project backlog and technical specifications.

### Audit & Synchronization Details
1. **Verification of STG-02 (`StageModal.js`)**:
   - Inspected `frontend/src/features/settings/ui/StageModal.js` (lines 114–137).
   - Confirmed dedicated `chk-stage-sink` checkbox, explanatory tooltip/hint, and reactive nullification of `complete_condition` were already fully functional.
2. **Canonical Alignment**:
   - Marked `STG-02` as `COMPLETED ✓` in `docs/BACKLOG.md`.
   - Purged `STG-02` from pending architectural gaps in `docs/BACKEND_SPEC.md`.

### Files Modified
- `docs/BACKLOG.md`
- `docs/BACKEND_SPEC.md`
- `PROJECT_LOG.md`

---

## Session Milestone: 2026-10-15 — STG-03: Configurable Root Stage Activation Cutoff & Consumer Date Decoupling

### Role & Agent Assignment
- **Orchestrator (`Role 0`)**: Evaluated objectives, coordinated plan presentation and authorization gate for STG-03.
- **Backend Systems Engineer (`Role 2`)**: Implemented consumer stage decoupling, auto-stamping of `last_activated_at` on root stage enablement in `src/api/settings.py`, and robust timezone-aware cutoff comparisons in `src/core/scheduler.py`.
- **Frontend & WebUI Specialist (`Role 3`)**: Added `datetime-local` Historical Event Cutoff input with "Now" / "Clear" actions in `StageModal.js`, auto-stamping on card toggle in `StagesPanel.js`, and stage card cutoff indicator.
- **QA & Integration Tester (`Role 4`)**: Verified backend compilation (`py_compile`) and frontend production build (`npm run build`).
- **Technical Documentation Specialist (`Role 5`)**: Updated `docs/BACKLOG.md` marking `STG-03` as complete and bumped baseline version to `v0.1.8`.

### Architectural Decisions & Changes Applied
1. **Root Cutoff User Control (`StageModal.js`)**:
   - Added `datetime-local` input for `last_activated_at` displayed exclusively when a stage is marked as Root (`isRoot == true`).
   - Integrated quick-action buttons "Now" and "Clear" for operator convenience.
   - Formatted ISO timestamps cleanly to local datetime and mapped back to ISO strings upon saving.
2. **Consumer Stage Decoupling (`src/api/settings.py`)**:
   - Explicitly nullified `last_activated_at` for consumer/intermediate stages (`start_condition IS NOT NULL`), guaranteeing they process rows regardless of when stages were enabled.
3. **Automatic Timestamp Initialization**:
   - In `src/api/settings.py`, if a root stage is toggled enabled (`enabled == True`) without a timestamp, the current UTC timestamp is auto-populated.
   - In `StagesPanel.js`, toggling a root stage active from the card view similarly stamps current UTC timestamp if previously empty.
   - Added card metadata badge indicating active `CUTOFF` timestamp for root stages.
4. **Timezone Normalization in Scheduler (`src/core/scheduler.py`)**:
   - Defensive normalization of `tzinfo` to UTC on both `stage_activated_dt` and `rec_dt` before evaluation, preventing `TypeError` on offset-naive vs offset-aware comparisons.

### Files Modified
- `src/api/settings.py`
- `src/core/scheduler.py`
- `frontend/src/features/settings/ui/StageModal.js`
- `frontend/src/features/settings/ui/StagesPanel.js`
- `src/static/index.html`
- `src/static/assets/index-*.js`
- `docs/BACKLOG.md`
- `PROJECT_LOG.md`

---

## Session Milestone: 2026-10-15 — REF-07: Inverted Stage Reconciliation Order & Immediate Post-Transition Enrichment

### Role & Agent Assignment
- **Backend Systems Engineer (`Role 2`)**: Refactored `TaskScheduler.reconcile_stages()` in `src/core/scheduler.py` to invert the reconciliation sequence and implement immediate early data enrichment upon stage transitions.

### Architectural Decisions & Changes Applied
1. **Inverted Evaluation Order in `reconcile_stages()`**:
   - **Step 1 (Stage Completion)**: First evaluates completion conditions (`stage.complete_condition`) for `PENDING` rows across all active stages. Satisfied rows are marked `STATUS = 'COMPLETED'`.
   - **Step 2 (Stage Progression)**: Sequentially evaluates candidate forward stages (`order > current_stage.order`) for `COMPLETED` rows. Newly completed rows from Step 1 can now immediately progress within the same reconciliation cycle.
2. **Immediate Post-Transition Data Enrichment**:
   - When a row advances to `target_stage`, its DB status is updated to `SINK` (if sink stage) or `PENDING`.
   - The scheduler immediately triggers `_execute_consumer_enrichment()` for each active service assigned in `target_stage.service_ids`.
   - Row data is re-queried between service enrichments to ensure subsequent services receive cumulative mapped columns.
3. **Immediate Post-Transition Completion Check**:
   - If `target_stage` is not a sink stage and has a `complete_condition`, the freshly enriched row is immediately re-queried and evaluated against `target_stage.complete_condition`.
   - If satisfied, the row is promoted to `STATUS = 'COMPLETED'` without waiting for subsequent polling intervals.

### Files Modified
- `src/core/scheduler.py`
- `PROJECT_LOG.md`

---

## Session Milestone: 2026-10-15 — REF-08: Purge Post-Transition Immediate Completion Evaluation

### Role & Agent Assignment
- **Backend Systems Engineer (`Role 2`)**: Corrected `reconcile_stages()` in `src/core/scheduler.py` by purging post-transition immediate completion checks.

### Architectural Decisions & Changes Applied
1. **Purged Immediate Post-Transition Completion Check**:
   - Removed lines in `reconcile_stages()` that immediately evaluated `target_stage.complete_condition` right after row transition and early data enrichment.
   - Prevents potential state loops, premature completion alarms, and uncoordinated multi-stage skips within a single interval.
2. **Strict Single-Transition-Per-Interval State Machine**:
   - When a row transitions to `target_stage`, it is stamped with `STAGE = target_stage.id`, `STATUS = ('SINK' if is_sink else 'PENDING')`, and `LAST_UPDATED = CURRENT_TIMESTAMP`.
   - Early consumer enrichment executes for all active services in `target_stage.service_ids`.
   - The transition loop breaks immediately for this row.
   - The row strictly remains in `PENDING` (or `SINK`). Its `complete_condition` is evaluated solely during Step 1 in subsequent reconciliation cycles.

### Files Modified
- `src/core/scheduler.py`
- `PROJECT_LOG.md`

---

## Session Milestone: 2026-10-15 — REF-09: Implement Mermaid Flowchart State Machine for Stage Progression and Enrichment

### Role & Agent Assignment
- **Backend Systems Engineer (`Role 2`)**: Refactored `src/core/scheduler.py` to strictly implement the authoritative Mermaid lifecycle state machine for stage progression, status transitions, and data enrichment.

### Architectural Decisions & Changes Applied
1. **Authoritative State Machine Implementation**:
   - Strictly implemented the canonical Mermaid lifecycle flowchart:
     * `NEW_ENTRY --> STATUS_TO_PENDING --> UPDATE_VALUES --> END_OF_CICLE`
     * `END_OF_CICLE --> IS_SINK`
     * `IS_SINK --> (YES) --> UPDATE_VALUES --> END_OF_CICLE`
     * `IS_SINK --> (NO)  --> CHECK_STATUS`
     * `CHECK_STATUS --> (TRUE, STATUS = COMPLETED)  --> IS_NEXT_STAGE`
     * `CHECK_STATUS --> (FALSE, STATUS = STATUS)    --> UPDATE_VALUES --> END_OF_CICLE`
     * `IS_NEXT_STAGE --> (YES) --> NEXT_STAGE --> STATUS_TO_PENDING --> UPDATE_VALUES --> END_OF_CICLE`
     * `IS_NEXT_STAGE --> (NO)  --> UPDATE_VALUES --> END_OF_CICLE`
2. **New Entry Lifecycle Alignment (`trigger_now`)**:
   - Purged premature completion evaluation at initial record discovery.
   - For all newly ingested records:
     * Compute `is_sink = not active_stage.complete_condition or not active_stage.complete_condition.strip()`
     * Set `initial_status = "SINK" if is_sink else "PENDING"`
     * Populate mapped fields (`UPDATE_VALUES`) and insert into `SERVICES_PIPELINE`.
     * Successfully completes new entry cycle (`END_OF_CICLE`).
3. **Unified Pipeline Reconciliation (`reconcile_stages`)**:
   - Replaced fragmented stage-based queries with unified per-row lifecycle reconciliation:
     * **SINK rows**: Evaluates `IS_SINK == YES` -> triggers `_update_mapped_values_for_stage` -> `END_OF_CICLE`.
     * **PENDING rows**: Evaluates stage `complete_condition`. If False -> stays `PENDING` -> triggers stage enrichment -> `END_OF_CICLE`. If True -> updates DB to `STATUS = 'COMPLETED'` and proceeds immediately to `IS_NEXT_STAGE`.
     * **COMPLETED rows**: Evaluates forward candidate stages (`order > current_stage.order`) for `start_condition == True`. If matched -> transitions to `NEXT_STAGE`, computes `is_sink`, sets `new_status = "SINK" if is_sink else "PENDING"`, updates DB, triggers target stage enrichment (`UPDATE_VALUES`), and reaches `END_OF_CICLE`. If not matched -> remains `COMPLETED`, triggers current stage enrichment (`UPDATE_VALUES`), and reaches `END_OF_CICLE`.
4. **Targeted Stage Enrichment Helper (`_update_mapped_values_for_stage`)**:
   - Added helper method iterating all active services configured in `stage.service_ids`, re-querying cumulative columns between service passes, resolving service tag labels, and executing field mapping with transformers.
   - Avoids no-op DB writes when mapped field values have not changed.

### Files Modified
- `src/core/scheduler.py`
- `PROJECT_LOG.md`

---

## Session Milestone: 2026-10-15 — REF-10: Invert trigger_now Execution Order and Finalize Mermaid State Machine

### Role & Agent Assignment
- **Backend Systems Engineer (`Role 2`)**: Refactored `src/core/scheduler.py` to invert the execution sequence in `trigger_now(service_id)` and strictly enforce the Mermaid state machine with explicit cycle termination.

### Architectural Decisions & Changes Applied
1. **Inverted Execution Sequence in `trigger_now`**:
   - **Step 1 (Existing Pipeline Reconciliation)**: Executes `reconcile_updates = await self.reconcile_stages()` FIRST to evaluate and progress existing records already residing in `SERVICES_PIPELINE` at the start of the interval.
   - **Step 2 (Root Stage Ingestion for New Incoming Records)**: Executes root stage ingestion SECOND (`NEW_ENTRY`). Newly discovered records are evaluated for initial field mappings (`UPDATE_VALUES`), assigned `initial_status = "SINK"` (if no completion condition) or `"PENDING"`, and inserted into `SERVICES_PIPELINE`.
   - **Purged Trailing Reconciliation**: Purged the second `reconcile_stages()` invocation from the end of `trigger_now`. Newly ingested items strictly remain in the root stage for at least one full polling interval before evaluating progression.
2. **Strict Mermaid State Machine Enforcement (`reconcile_stages`)**:
   - `IS_SINK == YES`: Triggers `_update_mapped_values_for_stage(current_stage)` and explicitly issues `continue` (`END_OF_CICLE`).
   - `IS_SINK == NO` -> `CHECK_STATUS`:
     * If `status == "PENDING"`: Evaluates `current_stage.complete_condition`.
       - If False: Runs `_update_mapped_values_for_stage(current_stage)` and explicitly issues `continue` (`END_OF_CICLE`).
       - If True: Updates DB `STATUS = 'COMPLETED'`, promotes local status to `"COMPLETED"`, and proceeds immediately to `IS_NEXT_STAGE`.
     * If `status == "COMPLETED"` (already completed or freshly promoted in this cycle) -> `IS_NEXT_STAGE`:
       - Evaluates candidate stages (`order > current_stage.order` and `start_condition == True`).
       - If matched: Transitions row (`NEXT_STAGE`), computes `is_sink`, sets `new_status = "SINK" if is_sink else "PENDING"`, updates DB, triggers target stage enrichment `_update_mapped_values_for_stage(target_stage)`, and explicitly issues `continue` (`END_OF_CICLE`).
       - If not matched: Row remains in current stage with `STATUS = 'COMPLETED'`, triggers current stage enrichment `_update_mapped_values_for_stage(current_stage)`, and explicitly issues `continue` (`END_OF_CICLE`).

### Files Modified
- `src/core/scheduler.py`
- `PROJECT_LOG.md`

---

## Session Milestone: 2026-10-15 — REF-11: Backend Type Coercion, Strict Validation & Schema-Driven Column Alignment

### Role & Agent Assignment
- **Orchestrator (`Role 0`)**: Coordinated requirements, governance confirmation, and agent task delegation.
- **Backend Systems Engineer (`Role 2`)**: Implemented `coerce_value_to_type` in `src/core/scheduler.py` with strict type validation, English warning telemetry, and schema delivery in `src/api/pipeline.py`.
- **Frontend & WebUI Specialist (`Role 3`)**: Added `col.align === 'center'` support to `DataTable.js`, schema-driven column alignment for system and integer columns in `PipelineTable.js`, and centered `ID` in `IncidentTable.js`.
- **Technical Documentation Specialist (`Role 5`)**: Logged task `LOG-01` in `docs/BACKLOG.md` and updated `PROJECT_LOG.md`.

### Architectural Decisions & Changes Applied
1. **Backend Data Type Coercion & Validation (`src/core/scheduler.py`)**:
   - Implemented `coerce_value_to_type(val, data_type, col_name, item_identifier)`:
     * **`INTEGER` / `INT`**: Converts integers and valid numeric strings (`^[-+]?\d+$`) to `int`. Rejects booleans, non-integer floats, and arbitrary text with standard English warnings (`[!] Warning: Field '{col_name}' for item '{item_identifier}' was not loaded because value is incompatible: Field requires INT (value: '{val}')`).
     * **`BOOLEAN`**: Coerces native booleans, `0`/`1`, and standard boolean strings (`"true"`, `"false"`). Rejects incompatible strings.
     * **`REAL` / `FLOAT`**: Converts numeric values and float strings; rejects non-numeric types.
     * **`TEXT`**: Converts primitives to string representation (`str(val)`) and serializes lists/dicts to JSON strings.
   - Applied during both initial root stage ingestion (`_poll_and_ingest`) and consumer enrichment (`_execute_consumer_enrichment`), protecting the pipeline against type corruption.
2. **Schema-Driven Column Metadata (`src/api/pipeline.py`)**:
   - `GET /api/v1/pipeline` now exposes `"column_types": { [col_name]: col_type }` derived directly from `PRAGMA table_info(SERVICES_PIPELINE)`.
3. **Deterministic Column Alignment (`DataTable.js`, `PipelineTable.js`, `IncidentTable.js`)**:
   - `DataTable.js` wired `col.align === 'center'` to `.table__cell--center` for both `<th>` and `<td>`.
   - `PipelineTable.js` assigns centered alignment to system columns (`ID`, `PIPELINE_KEY`, `STAGE`, `STATUS`, `LAST_UPDATED`) and any column with `INTEGER`/`INT` schema type. Text and dynamic string columns remain left-aligned.
   - `IncidentTable.js` centers the `ID` column.
4. **Technical Debt Backlog Entry (`LOG-01`)**:
   - Documented task `LOG-01` in `docs/BACKLOG.md` for dedicated `Log` navigation menu displaying filtered error telemetry.

### Files Modified
- `src/core/scheduler.py`
- `src/api/pipeline.py`
- `frontend/src/shared/ui/organisms/DataTable/DataTable.js`
- `frontend/src/shared/ui/organisms/DataTable/DataTable.module.css`
- `frontend/src/features/pipeline/PipelineTable.js`
- `frontend/src/features/incidents/IncidentTable.js`

---

## Session Milestone: 2026-10-15 — REF-12: Dynamic Pipeline Pagination, Multi-Page Ingestion & Boolean Badge Sizing

### Role & Agent Assignment
- **Orchestrator (`Role 0`)**: Coordinated root-cause diagnosis of the 50-item ingestion ceiling, pagination planning, and confirmation gate.
- **Backend Systems Engineer (`Role 2`)**: Implemented multi-page pagination for root stage history polling in `src/core/scheduler.py` with intelligent early termination when reaching existing records. Increased default `pageSize` to 100 in `src/core/config.py`.
- **Frontend & WebUI Specialist (`Role 3`)**:
  * Added dynamic pagination controls (`limit`, `offset`), active range display, reactive Previous/Next navigation, and rows-per-page selector in `PipelineTable.js`.
  * Fixed row key mapping to uppercase `r.ID` from SQLite schema.
  * Added "Sync Now" quick-trigger button in `PipelinePage.js` to immediately restart the scheduler and refresh pipeline records.
  * Fixed service primary endpoint property mapping to `poll_endpoint` in `ServiceModal.js`.
  * Unified `BooleanBadge` container to a fixed 64px width and 3px solid border in `Badge.module.css`.
  * Restored centered muted hyphen (`-`) placeholder for empty/null cells in `PipelineTable.js`.

### Architectural Decisions & Changes Applied
1. **Multi-Page Upstream History Ingestion (`src/core/scheduler.py`)**:
   - In `TaskScheduler.trigger_now()`, replaced the single unpaginated HTTP request to `poll_endpoint` with an iterative pagination loop supporting query parameter `page=1, page=2...` up to a safety boundary of 25 pages.
   - Incorporated intelligent early-stop detection: if all records on a queried page already exist in `SERVICES_PIPELINE` or fall before `last_activated_at`, pagination concludes immediately, preserving sub-second cadence during routine polling.
2. **Endpoint Schema Synchronization (`src/core/config.py`, `ServiceModal.js`)**:
   - Corrected property naming in `ServiceModal.js` to persist to `ServiceConfig.poll_endpoint`.
   - Raised default pagination page size from 50 to 100 in both frontend input and backend defaults.
3. **Dynamic Pagination & Controls (`PipelineTable.js`, `api.js`)**:
   - Extracted `total`, `limit`, and `offset` from `GET /api/v1/pipeline`.
   - Wires dynamic page navigation (`offset: Math.max(0, offset - limit)` for Previous, `offset: offset + limit` for Next) with reactive `disabled` bindings.
   - Provided rows-per-page selector (50, 100, 200, 500) that resets offset to 0 and re-queries the backend.
   - Added immediate "Sync Now" action in `PipelinePage.js` to allow operators to trigger ingestion cycles on demand.
4. **Visual Badge Standardization (`Badge.module.css`, `Badge.js`)**:
   - Fixed `BooleanBadge` width to `64px` (`box-sizing: border-box`) so both `TRUE` and `FALSE` badges occupy identical horizontal space.
   - Styled badge border with `3px solid` contrast.
   - Rendered centered `-` placeholder for empty/null table values.

### Files Modified
- `src/core/scheduler.py`
- `src/core/config.py`
- `frontend/src/features/settings/ui/ServiceModal.js`
- `frontend/src/features/pipeline/PipelineTable.js`
- `frontend/src/features/pipeline/api.js`
- `frontend/src/pages/PipelinePage.js`
- `frontend/src/shared/ui/atoms/Badge/Badge.js`
- `frontend/src/shared/ui/atoms/Badge/Badge.module.css`
- `src/static/index.html`
- `src/static/assets/index-*.js`
- `src/static/assets/index-*.css`
- `PROJECT_LOG.md`

---

## Session Milestone: 2026-10-15 — REF-13: Universal Delta Ingestion with CREATED_AT & Chronological Ingestion Sequence

### Role & Agent Assignment
- **Orchestrator (`Role 0`)**: Coordinated universal delta ingestion requirement and delegated backend and frontend modifications.
- **Backend Systems Engineer (`Role 2`)**: Added `CREATED_AT` to `SERVICES_PIPELINE` in `src/core/database.py`, exposed it in `src/api/pipeline.py`, and refactored `TaskScheduler.trigger_now()` in `src/core/scheduler.py` to stop at `MAX(CREATED_AT)` and ingest records chronologically ascending 1 by 1.
- **Frontend & WebUI Specialist (`Role 3`)**: Integrated `CREATED_AT` into system reserved columns in `PipelineTable.js` and rebuilt production bundle.
- **Documentation Specialist (`Role 5`)**: Updated `PROJECT_LOG.md`.

### Architectural Decisions & Changes Applied
1. **Immutable `CREATED_AT` System Column (`src/core/database.py`, `src/api/pipeline.py`)**:
   - Added `CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP` to `SERVICES_PIPELINE` to permanently record event creation timestamps separately from `LAST_UPDATED`.
   - Included in `SYSTEM_RESERVED_COLUMNS` and system column ordering.
2. **Universal Delta Polling (`src/core/scheduler.py`)**:
   - Scheduler evaluates `SELECT MAX(CREATED_AT) as latest FROM SERVICES_PIPELINE WHERE PIPELINE_KEY LIKE ?` for the active service.
   - Paged polling stops immediately once a page contains records with timestamps older than or equal to `MAX(CREATED_AT)` (or already in DB), ensuring single-request speed during steady state without redundant history queries.
3. **Ascending Chronological Ingestion (`src/core/scheduler.py`)**:
   - Candidate records are sorted chronologically ascending (oldest to newest) prior to insertion.
   - Ingested 1 by 1 so the oldest item receives the lowest ID and the newest item receives the highest ID.
   - Preserves natural top-of-table positioning for recent events under `ORDER BY ID DESC`.

### Files Modified
- `src/core/database.py`
- `src/api/pipeline.py`
- `src/core/scheduler.py`
- `frontend/src/features/pipeline/PipelineTable.js`
- `src/static/index.html`
- `src/static/assets/index-*.js`
- `PROJECT_LOG.md`

---

## Session Milestone: 2026-10-16 — REF-14: Dynamic Stage and Status Filtering in Universal Pipeline

### Role & Agent Assignment
- **Orchestrator (`Role 0`)**: Triaged UI filter limitation, coordinated requirements, and delegated backend and frontend implementations.
- **Backend Systems Engineer (`Role 2`)**: Updated `get_pipeline_items()` in `src/api/pipeline.py` to dynamically collect and expose `available_stages` (combining `settings.stages` and database entries) and `available_statuses` (combining baseline statuses with database entries).
- **Frontend & WebUI Specialist (`Role 3`)**: Updated `frontend/src/features/pipeline/api.js` to manage `stage` and `status` query parameters and refactored `frontend/src/pages/PipelinePage.js` to render reactive, dynamic `<select>` dropdowns for filtering stages and statuses. Rebuilt production assets into `src/static/`.
- **Technical Documentation Specialist (`Role 5`)**: Updated `PROJECT_LOG.md`.

### Architectural Decisions & Changes Applied
1. **Dynamic Stage & Status Enumeration (`src/api/pipeline.py`)**:
   - `GET /api/v1/pipeline` now dynamically queries `SELECT DISTINCT STAGE FROM SERVICES_PIPELINE` and merges with `settings.stages`, returning the full list of `available_stages` (`id` and `name`).
   - Dynamically queries `SELECT DISTINCT STATUS FROM SERVICES_PIPELINE` and merges with baseline statuses (`PENDING`, `COMPLETED`, `SINK`), returning `available_statuses`.
2. **Reactive Filter Binding & Parameter Management (`PipelinePage.js`, `api.js`)**:
   - Replaced static placeholder dropdowns in `PipelinePage.js` with reactive `<select>` controls populated from API response metadata.
   - Tied `@change` events to `pipelineApi.getPipeline({ stage / status, offset: 0 })`, automatically resetting pagination to page 1 upon filtering.
   - Cleaned falsy/empty values in `api.js` to avoid transmitting superfluous empty query parameters.
3. **Production Asset Compilation**:
   - Compiled production bundle using `npm --prefix frontend run build`, updating `src/static/`.

### Files Modified
- `src/api/pipeline.py`
- `frontend/src/features/pipeline/api.js`
- `frontend/src/pages/PipelinePage.js`
- `src/static/index.html`
- `src/static/assets/index-*.js`
- `src/static/assets/index-*.css`
- `PROJECT_LOG.md`

---

## Session Milestone: 2026-10-16 — REF-15: Chained Mapping Context, Safe Transformer Fallback, API Discovery & Mapping Reordering

### Role & Agent Assignment
- **Orchestrator (`Role 0`)**: Decomposed issues across transformer evaluation, API discovery, and mapping controls; coordinated cross-tier solution.
- **Backend Systems Engineer (`Role 2`)**: Implemented `SafeContext` dictionary in `src/core/predicates.py` ensuring undefined variables evaluate to `None` instead of raising `NameError`. In `src/core/scheduler.py`, added sequential `context_dict` population during field mapping evaluation for both root ingestion and consumer enrichment.
- **Frontend & WebUI Specialist (`Role 3`)**: Added Move Up (`▲`) and Move Down (`▼`) reordering controls in `MappingsPanel.js`. Connected `Discover Events from API` in `ServiceModal.js` with dynamic event-type checkboxes. Connected `Fetch Sample` in `SampleApiModal.js` with live search and direct mapping creation. Rebuilt production bundle into `src/static/`.
- **Technical Documentation Specialist (`Role 5`)**: Updated `PROJECT_LOG.md`.

### Architectural Decisions & Changes Applied
1. **Safe Variable Resolution (`src/core/predicates.py`)**:
   - `TransformerEvaluator` now wraps evaluation context in `SafeContext(dict)`. Any missing or undefined variable resolves to `None` with case-insensitive fallback instead of throwing a `NameError`.
   - Prevents transformers like `if eventType == 'downloadFolderImported' then value else None` from failing towards the default `value` when `eventType` is absent in consumer enrichment.
2. **Sequential Mapping Chaining (`src/core/scheduler.py`)**:
   - Immediately upon computing and coercing a target column in `field_mappings`, the scheduler updates `context_dict[col_name]` and `context_dict[col_name.lower()]`.
   - Allows downstream mappings within the same service to directly reference previously calculated columns (e.g. referencing `EVENT`).
3. **Interactive API Discovery & Reordering (`MappingsPanel.js`, `ServiceModal.js`, `SampleApiModal.js`)**:
   - Added `▲` and `▼` reordering controls to each mapping row in `MappingsPanel.js`, persisting array ordering.
   - Connected `Discover Events from API` in `ServiceModal.js` to `POST /api/v1/pipeline/sample`, discovering distinct `eventType`s and binding them to `allowed_event_types`.
   - Connected `Fetch Sample` in `SampleApiModal.js` to inspect external schemas with live search filtering and direct `+ Map` shortcuts.
4. **Production Asset Compilation**:
   - Compiled production bundle using `npm --prefix frontend run build`, updating `src/static/`.

### Files Modified
- `src/core/predicates.py`
- `src/core/scheduler.py`
- `frontend/src/features/settings/ui/MappingsPanel.js`
- `frontend/src/features/settings/ui/ServiceModal.js`
- `frontend/src/features/settings/ui/SampleApiModal.js`
- `src/static/index.html`
- `src/static/assets/index-*.js`
- `PROJECT_LOG.md`

---

## Session Milestone: 2026-10-16 — UX-03: Register Discrete Multi-Variable Context Inputs in Backlog

### Role & Agent Assignment
- **Technical Documentation Specialist (`Role 5`)**: Synchronized canonical project backlog in `docs/BACKLOG.md` to register `UX-03` under Phase 1 (`v0.1.9`).

### Documentation Decisions & Changes Applied
1. **Priority Overview Matrix Update (`docs/BACKLOG.md`)**:
   - Registered `UX-03` with priority `P3 (Polish)`, domain `WebUI / Tooling`, targeting Phase 1 (`v0.1.9`), status `PLANNED 📅`.
2. **Detailed Work Package (`docs/BACKLOG.md`)**:
   - Added work package `3.5 UX-03: Discrete Multi-Variable Context Inputs for Transformer Test Harness (v0.1.9)`.
   - Specified tasks for dedicated `value` input, multi-variable parallel and key=value context inputs, and automatic type coercion.
   - Incrementally renumbered subsequent work packages `3.5` through `3.10` to `3.6` through `3.11`.

### Files Modified
- `docs/BACKLOG.md`
- `PROJECT_LOG.md`

---

## Session Milestone: 2026-10-16 — REF-16: Generic Fallback Lookup Correlation & Root Ingestion In-Place Updates

### Role & Agent Assignment
- **Orchestrator (`Role 0`)**: Diagnosed Sonarr API behavior (absence of fileId in deletion events), architected the agnostic correlation fallback design, and delegated backend, frontend, and documentation tasks.
- **Backend Systems Engineer (`Role 2`)**: Added `fallback_lookup_column` and `fallback_lookup_field` to `ServiceConfig` in `src/core/config.py`. In `src/core/scheduler.py`, updated `resolve_template_key` to fail safely on missing template variables, implemented database fallback lookup correlation when primary keys cannot be resolved, and added in-place `UPDATE` support in `_poll_and_ingest()` for existing records using `merge_field_value`.
- **Frontend & WebUI Specialist (`Role 3`)**: Integrated `fallback_lookup_column` and `fallback_lookup_field` inputs into `ServiceModal.js` under Ingestion & Pipeline Identity. Rebuilt production Vite bundle in `src/static/`.
- **Technical Documentation Specialist (`Role 5`)**: Updated `PROJECT_LOG.md`.

### Architectural Decisions & Changes Applied
1. **Generic Fallback Correlation (`src/core/config.py`, `src/core/scheduler.py`)**:
   - Extended `ServiceConfig` with optional `fallback_lookup_column` (DB column name) and `fallback_lookup_field` (payload property path).
   - When an incoming event lacks primary key template parameters (e.g. deletion events lacking internal surrogate IDs like `data.fileId`), the scheduler queries `SELECT PIPELINE_KEY FROM SERVICES_PIPELINE WHERE {col} = ? AND PIPELINE_KEY LIKE ? LIMIT 1`.
   - If correlated, adopts the existing record's `PIPELINE_KEY`, ensuring events like `episodeFileDeleted` map directly to the original file's row without creating orphaned or ghost entries.
2. **In-Place Updates during Root Ingestion (`src/core/scheduler.py`)**:
   - Refactored `_poll_and_ingest()`: when an incoming record resolves to an existing `PIPELINE_KEY`, it now evaluates service `field_mappings` with sequential context chaining, applies `merge_field_value`, and executes an in-place `UPDATE SERVICES_PIPELINE SET ..., LAST_UPDATED = CURRENT_TIMESTAMP WHERE PIPELINE_KEY = ?`.
   - Preserves existing immutable fields (like `CREATED_AT` and non-null `FILE_PATH`) while updating dynamic fields (such as `EVENT = 'DELETED'`).
3. **WebUI Service Configuration Controls (`ServiceModal.js`)**:
   - Added responsive inputs for Fallback Match Column and Fallback Source Field in the Service Modal, allowing users to configure correlation rules without touching code.
4. **Production Asset Compilation**:
   - Compiled production bundle using `npm --prefix frontend run build`, updating `src/static/`.

### Files Modified
- `src/core/config.py`
- `src/core/scheduler.py`
- `frontend/src/features/settings/ui/ServiceModal.js`
- `src/static/index.html`
- `src/static/assets/index-*.js`
- `src/static/assets/index-*.css`
- `PROJECT_LOG.md`

---

## Session Milestone: 2026-10-16 — REF-17: Pure Evaluation Context & Elimination of In-Place Context Mutation

### Role & Agent Assignment
- **Orchestrator (`Role 0`)**: Diagnosed context clobbering between SQL target column names and API namespace dictionaries; directed pure evaluation refactor.
- **Backend Systems Engineer (`Role 2`)**: Refactored `_poll_and_ingest()` and `_execute_consumer_enrichment()` in `src/core/scheduler.py` to eliminate `context_dict` in-place mutations, guaranteeing API payloads and namespaces remain immutable during field mapping evaluation. Added `follow_redirects=True` to HTTP enrichment requests.
- **Technical Documentation Specialist (`Role 5`)**: Updated `PROJECT_LOG.md`.

### Architectural Decisions & Changes Applied
1. **Immutable Evaluation Context (`src/core/scheduler.py`)**:
   - Removed sequential mutation of `context_dict[col_name]` and `context_dict[col_name.lower()]` during field mapping loops in both root ingestion and consumer enrichment stages.
   - Prevents SQL target column names (e.g. `EPISODE = 16`) from clobbering incoming payload and secondary enrichment namespace dictionaries (`context_dict["episode"]`), resolving null values in subsequent field evaluations (e.g. `episode.title`).
2. **HTTP Redirect Resilience (`src/core/scheduler.py`)**:
   - Enabled `follow_redirects=True` on `httpx.AsyncClient` for all secondary enrichment endpoint queries.

### Files Modified
- `src/core/scheduler.py`
- `PROJECT_LOG.md`

---

## Session Milestone: 2026-10-16 — DOC-06: Backlog Synchronization for SBX-01 Upstream Decoupling & CORE-04 Accumulative JSON Lists

### Role & Agent Assignment
- **Technical Documentation Specialist (`Role 5`)**: Synchronized canonical project backlog in `docs/BACKLOG.md` reflecting operator directives for SBX-01 (API Sandbox database decoupling and raw payload attribute explorer) and CORE-04 (Accumulative JSON list merging and deduplication).

### Documentation Decisions & Changes Applied
1. **API Sandbox Decoupling & Upstream Inspection (`docs/BACKLOG.md` - Section 3.3 SBX-01)**:
   - Formulated explicit problem statement detailing Sandbox coupling to `SERVICES_PIPELINE` row IDs and missing placeholder errors when upstream attributes (e.g. `episodeId`) are not pre-mapped into SQLite columns.
   - Expanded task breakdown:
     * Untethering the sandbox from mandatory `SERVICES_PIPELINE` rows and enabling live upstream sample testing (e.g. `/api/v3/history`) or manual JSON pasting.
     * Incorporating an Upstream Attribute Explorer displaying real keys and dot-notation paths with direct placeholder replacement tests.
     * Split-pane visual refactor in `SandboxPage.js` with direct "+ Map to Column" shortcuts.
2. **Accumulative JSON List Merging & Deduplication (`docs/BACKLOG.md` - Table 2 & Section 3.6 CORE-04)**:
   - Registered `CORE-04` in Priority Overview Matrix under `P2 (Medium)`, targeting Phase 1 (`v0.1.9`).
   - Defined detailed work package `3.6 CORE-04: Accumulative JSON List Merging & Deduplication (v0.1.9)`:
     * Universal list coercion in `merge_field_value` when target column holds a JSON list, treating scalar values as single-item lists `[new_val]` and appending them with case-insensitive deduplication.
     * Explicit accumulative / set mapping option in `MappingModal.js`.
   - Incrementally renumbered subsequent Phase 2–6 packages (`3.7` through `3.12`).

### Files Modified
- `docs/BACKLOG.md`
- `PROJECT_LOG.md`

---

## Session Milestone: 2026-10-16 — DOC-07: Backlog Synchronization for STG-04 Granular Stage-Scoped Field Mappings

### Role & Agent Assignment
- **Technical Documentation Specialist (`Role 5`)**: Synchronized canonical project backlog in `docs/BACKLOG.md` reflecting architectural requirements for `STG-04` (Stage-Scoped Field Mapping Selection & Granular Column Execution).

### Documentation Decisions & Changes Applied
1. **Priority Overview Matrix Update (`docs/BACKLOG.md` - Table 2)**:
   - Registered `STG-04` under Phase 1 (`v0.1.9`) with priority `P2 (Medium)` in the Core / WebUI domain, status `PLANNED 📅`.
2. **Detailed Work Package (`docs/BACKLOG.md` - Section 3.7 STG-04)**:
   - Defined work package `3.7 STG-04: Stage-Scoped Field Mapping Selection & Granular Column Execution (v0.1.9)`.
   - Documented explicit problem statement regarding indiscriminate execution of all service field mappings within stages and column overwrite hazards across multi-stage lifecycles.
   - Specified tasks:
     * Stage configuration schema enhancement (`src/core/config.py`): `service_mapping_scopes` dictionary mapping service IDs to permitted target columns.
     * Granular mapping evaluation in scheduler (`src/core/scheduler.py`): stage-scoped filtering in `_update_mapped_values_for_stage` and `_execute_consumer_enrichment`.
     * WebUI granular scope selector (`frontend/src/features/settings/ui/StageModal.js`): collapsible mapping checklist per checked service.
   - Incrementally renumbered subsequent packages `3.7` through `3.12` to `3.8` through `3.13`.

### Files Modified
- `docs/BACKLOG.md`
- `PROJECT_LOG.md`

---

## Session Milestone: 2026-10-16 — CORE-04: Accumulative JSON List Extraction, Merging, and Type Safety (v0.1.9)

### Role & Agent Assignment
- **Backend Systems Engineer (`Role 2`)**: Implemented mandatory `[*]` syntax for array traversal, terminal scalar wrapping `[*]` in `extract_dotted_value`, JSON list detection helper `is_json_list`, strict type-boundary validation and case-insensitive deduplication in `merge_field_value`, and list pre-coercion in ingestion and consumer loops (`src/core/scheduler.py`). Updated `flatten_json_keys` in `src/api/pipeline.py` to annotate array paths with `[*]`.
- **QA & Integration Tester (`Role 4`)**: Authored comprehensive 9-case test suite (`tests/test_core04_list_merging.py`) validating list extraction, intermediate projection, scalar wrapping, deduplication, and rejection of type-mismatched updates.
- **Technical Documentation Specialist (`Role 5`)**: Updated `PROJECT_LOG.md`, `docs/BACKLOG.md`, `docs/ARCHITECTURE.md`, and `docs/BACKEND_SPEC.md` to reflect system-wide canonical alignment.

### Architectural Decisions & Changes Applied
1. **Mandatory Array Traversal Syntax (`src/core/scheduler.py` - `extract_dotted_value`)**:
   - Disallowed implicit list traversal. Extracting nested properties through list structures now strictly requires explicit `[*]` syntax (e.g. `tags[*].name`, `objeto[*].data`). Traversing arrays without explicit `[*]` or numeric index returns `None` to prevent unintended projections.
   - Preserved zero-based integer index projection (e.g., `tags[0].name`, `tags.1.name`).
2. **Terminal Scalar-to-List Wrapping (`src/core/scheduler.py` - `extract_dotted_value`)**:
   - Added support for terminal `[*]` notation (e.g., `episode.title[*]`). When evaluated against scalar values (strings, integers, floats, booleans), automatically wraps the value into a single-element list `[val]`. If the source field is already a list, preserves it as-is. Returns `None` if the source field is missing or null.
   - Enforced list pre-coercion across ingestion and consumer loops (`_poll_and_ingest()` and `_execute_consumer_enrichment()`) when a mapping ends with `[*]`, ensuring values enter storage as JSON lists.
3. **Strict Type-Safe Merging & Deduplication (`src/core/scheduler.py` - `merge_field_value`, `is_json_list`)**:
   - Added `is_json_list(val)` helper recognizing Python lists and JSON-encoded array strings.
   - Enforced strict type preservation: prevents scalar values from overwriting existing list columns and prevents list values from overwriting existing scalar columns. Mismatches are safely rejected, retaining existing database values and emitting informative terminal warnings (`[!] Error: Field '{col_name}' for item '{item_id}' requires a list, but received incompatible scalar value: '{new_val}'. Update rejected.`).
   - For list-to-list merging, performs exact, stripped-whitespace, and case-insensitive deduplication while preserving element insertion order and existing item formatting.
4. **Upstream Schema Inspection Alignment (`src/api/pipeline.py` - `flatten_json_keys`)**:
   - Updated JSON key flattener to format array paths with `[*]` notation (e.g. `tags[*].name`, `genres[*]`, `empty_list[*]`), synchronizing the WebUI attribute explorer with scheduler path syntax.
5. **Automated Verification (`tests/test_core04_list_merging.py`)**:
   - Developed and executed 9 unit tests covering terminal wrapping, intermediate projection, omission of `[*]`, `is_json_list` identification, list merging with case deduplication, scalar-into-list rejection, list-into-scalar rejection, scalar replacement, and key flattening. All 9 tests passed cleanly.

### Files Modified & Created
- `src/core/scheduler.py`
- `src/api/pipeline.py`
- `tests/test_core04_list_merging.py` (Created)
- `docs/BACKLOG.md`
- `docs/ARCHITECTURE.md`
- `docs/BACKEND_SPEC.md`
- `PROJECT_LOG.md`

---

## Session Milestone: 2026-10-16 — UI-03: Dynamic AppShell Version & GitOps Telemetry Reactivity

### Role & Agent Assignment
- **Frontend & WebUI Specialist (`Role 3`)**: Implemented global overview telemetry subscription in `main.js`, eliminated hardcoded version and commit fallback values in `Sidebar.js`, aligned gitops telemetry keys, and recompiled production assets into `src/static/` via Vite.

### Architectural Decisions & Changes Applied
1. **Global Telemetry Reactivity (`frontend/src/main.js`)**:
   - Subscribed `renderApp` directly to `overviewKeys.all` via `queryCache.subscribe(overviewKeys.all, renderApp)`.
   - Added startup trigger `overviewApi.getOverview().catch(() => {})` on app bootstrap, ensuring version and git telemetry are retrieved immediately across all routes (including `/pipeline`, `/settings`, etc.).
2. **Dynamic Telemetry & Version Resolution in Sidebar (`frontend/src/app/shell/Sidebar.js`)**:
   - Removed hardcoded fallback version `'v0.1.7'` and hardcoded commit `'6b319ac'`.
   - Aligned GitOps commit resolution with backend `gitops` payload (`meta?.data?.gitops?.commit || meta?.data?.telemetry?.short_commit || '-'`).
   - Aligned GitOps branch resolution (`meta?.data?.gitops?.branch || meta?.data?.telemetry?.branch || '-'`).
   - Dynamically resolves application version with leading 'v' formatting or `'...'` pending cache resolution (`meta?.data?.version ? (meta.data.version.startsWith('v') ? meta.data.version : \`v\${meta.data.version}\`) : '...'`).
3. **Vite Production Compilation**:
   - Executed `npm run build` in `frontend/`, compiling all assets into `src/static/` with 0 errors.

### Files Modified
- `frontend/src/main.js`
- `frontend/src/app/shell/Sidebar.js`
- `src/static/index.html`
- `src/static/assets/index-*.js`
- `PROJECT_LOG.md`

---

## Session Milestone: 2026-10-16 — ARCH-04: Architectural Blueprint & Impact Analysis for STG-04 (Stage-Scoped Field Mappings)

### Role & Agent Assignment
- **Systems Architect & Governance (`Role 1`)**: Executed comprehensive pre-change impact analysis and authored end-to-end architectural specification for workpackage `STG-04` (Stage-Scoped Field Mapping Selection & Granular Column Execution).

### Architectural Decisions & System Blueprint
1. **Schema & Model Contract (`src/core/config.py` - `StageConfig`)**:
   - Added `service_mapping_scopes: Dict[str, list[str]] = Field(default_factory=dict)` to `StageConfig`.
   - Backward-compatibility contract: If a service is assigned in `service_ids` but omitted from `service_mapping_scopes` or declared with an empty list `[]`/`None`, the scheduler defaults to executing all configured field mappings for that service.
   - Column identifiers within scopes are normalized to uppercase (`^[A-Z0-9_]+$`) ensuring exact matching against SQLite column identifiers.
2. **Scheduler Execution Filtering (`src/core/scheduler.py`)**:
   - Traced and specified exact filtering logic in both ingestion paths:
     * **Root Stage Ingestion (`trigger_now`)**: For each active root stage, resolves `allowed_cols = active_stage.service_mapping_scopes.get(service_id)`. If present and non-empty, restricts mapping loop to columns in `allowed_cols`.
     * **Consumer Stage Enrichment (`_update_mapped_values_for_stage` & `_execute_consumer_enrichment`)**: Resolves `allowed_cols` for each service from `stage.service_mapping_scopes.get(s_id)`. Passes `allowed_columns=allowed_cols` into `_execute_consumer_enrichment()`. Only scoped columns are computed, type-coerced, merged, and updated via SQL `UPDATE`. Unscoped columns remain intact.
3. **Frontend Modularity & Subcomponent Extraction (`frontend/src/features/settings/`)**:
   - Extracted `ServiceScopeSelector.js` (~95 lines) under `features/settings/ui/` to guarantee `StageModal.js` remains strictly under the ~250 lines per module boundary (Invariant 6).
   - Utilizes native HTML5 `<details>` / `<summary>` tags for lightweight, zero-JS collapsible accordions under each assigned service.
   - Supports Select All / Clear toggles and visual badges indicating scoped vs total columns (`N of M active`).
   - Integrated validation in `handleSave` preventing assigned services from being saved with 0 columns selected.
4. **Settings API Normalization & Orphan Cleanup (`src/api/settings.py`)**:
   - In `update_settings`, added validation pass that prunes unassigned service keys and non-existent column names from `service_mapping_scopes`.
   - Synchronizes column renames across `service_mapping_scopes` when a field mapping's target column is modified in service settings.

### Canonical Documentation Alignment
- Architectural specification ready for handoff to `backend-engineer` and `frontend-specialist`.

### Files Modified
- `PROJECT_LOG.md`

---

## Session Milestone: 2026-10-16 — STG-04: Backend Implementation of Stage-Scoped Field Mapping Selection & Granular Column Execution

### Role & Agent Assignment
- **Backend Systems Engineer (`Role 2`)**: Implemented backend schema extension, granular execution engine filtering in root ingestion and consumer enrichment, scope sanitization, and column rename synchronization.

### Architectural Decisions & Changes Applied
1. **Pydantic Schema Extension (`src/core/config.py`)**:
   - Added `service_mapping_scopes: Dict[str, list[str]] = Field(default_factory=dict)` to `StageConfig`.
   - Guaranteed empty dictionary default behavior ensuring full backward compatibility for unconfigured stages.
2. **Granular Execution Engine Filtering (`src/core/scheduler.py`)**:
   - **Root Stage Ingestion (`trigger_now`)**:
     * Resolves `allowed_cols = active_stage.service_mapping_scopes.get(service_id)` per active root stage.
     * Evaluates only scoped columns in `service_cfg.field_mappings` during payload ingestion; unscoped columns remain `NULL`.
     * Defaults to all mappings if the service key is absent or list is empty.
   - **Consumer Stage Enrichment (`_update_mapped_values_for_stage` & `_execute_consumer_enrichment`)**:
     * Resolves `allowed_cols` for each service from `stage.service_mapping_scopes.get(s_id)` and passes `allowed_columns=allowed_cols` to `_execute_consumer_enrichment`.
     * In `_execute_consumer_enrichment`, skips mappings whose `target_column` is not present in `allowed_columns`.
     * Generates SQL `UPDATE` clauses strictly for the allowed columns, leaving other table columns untouched.
3. **Settings API Normalization, Orphan Cleanup & Rename Sync (`src/api/settings.py`)**:
   - **Column Rename Synchronization**: When a service target column is renamed (`old_target != new_target`), automatically propagates the new column name into all matching entries within `stage.service_mapping_scopes`.
   - **Scope Sanitization & Pruning**:
     * Prunes any service key not present in `stage.service_ids` or not registered in `settings.services`.
     * Validates column names against `services_dict[s_id].field_mappings`, pruning unmapped columns.
     * Normalizes all column names to uppercase and deduplicates entries.
     * Deletes any service key whose column list resolves to empty, cleanly falling back to default all-columns execution.
4. **Automated Verification & Test Suite (`tests/test_stg04_stage_mapping_scopes.py`)**:
   - Authored 5 new test cases covering `StageConfig` defaults, scope sanitization and pruning, column rename propagation, consumer enrichment filtering, and root stage ingestion scoping.
   - Validated complete test suite: 15 passing tests (`0.426s`), 0 failures, 0 syntax/lint errors.

### Files Modified & Created
- `src/core/config.py`
- `src/core/scheduler.py`
- `src/api/settings.py`
- `tests/test_stg04_stage_mapping_scopes.py` (Created)
- `PROJECT_LOG.md`

---

## Session Milestone: 2026-10-16 — STG-04: Frontend Implementation of Stage-Scoped Field Mapping Selection & WebUI Granular Column Execution

### Role & Agent Assignment
- **Frontend & WebUI Specialist (`Role 3`)**: Implemented WebUI component for stage-scoped field mapping selection (`ServiceScopeSelector.js`), integrated into `StageModal.js`, verified clean default semantics, and compiled production assets via Vite.

### Architectural Decisions & Changes Applied
1. **ServiceScopeSelector Subcomponent Extraction (`frontend/src/features/settings/ui/ServiceScopeSelector.js`)**:
   - Created decoupled standalone UI component (119 lines, adhering to strict <250 lines module invariant and <120 lines target).
   - Exports `renderServiceListWithScopes(allServiceIds, servicesData, editingStage)`:
     * Renders service checkbox for pipeline stage assignment.
     * When field mappings exist for a service, embeds a collapsible `<details>` accordion (automatically open if stage is custom scoped).
     * Displays a dynamic status badge in the summary bar: `(${checkedCount} of ${totalCount} active)` if scoped, or `(All fields active by default)` if unscoped (0 or all checked).
     * Includes atomic `Button` controls for "Select All" and "Clear All".
     * Provides operator guidance: *"Leaving columns unselected updates all mapped fields for this service. Check specific columns to restrict updates for this stage."*
     * Formats grid of field mapping checkboxes with uppercase `target_column` and muted `source_field`.
   - Exports `collectServiceMappingScopes(selectedServiceIds, servicesData)`:
     * Gathers checked column mappings for assigned services.
     * Enforces execution semantics: if 0 columns or all columns are checked, omits the service key from `scopes` dictionary so the backend execution engine defaults cleanly to all mapped fields.
2. **StageModal Integration (`frontend/src/features/settings/ui/StageModal.js`)**:
   - Integrated `renderServiceListWithScopes` into modal template.
   - Updated `handleSave` to serialize `service_mapping_scopes` alongside `service_ids`.
   - Maintained clean, non-blocking UX: zero blocking alerts when saving with 0 columns checked.
   - Maintained compact file footprint at 226 lines.
3. **Vite Production Compilation & Static Artifact Deployment**:
   - Executed `npm run build` in `frontend/` generating updated bundle in `src/static/` (built in 875ms, 0 errors).

### Files Modified & Created
- `frontend/src/features/settings/ui/ServiceScopeSelector.js` (Created)
- `frontend/src/features/settings/ui/StageModal.js` (Modified)
- `src/static/assets/index-BvdhWyUj.js` (Compiled artifact)
- `src/static/index.html` (Compiled artifact)
- `PROJECT_LOG.md` (Updated)

---

## Session Milestone: 2026-10-16 — STG-04: Canonical Documentation Synchronization & Version Alignment (`v0.1.9`)

### Role & Agent Assignment
- **Technical Documentation Specialist (`Role 4` / `docs-specialist`)**: Synchronized canonical documentation suite, roadmap status, and semantic version headers across all project specifications following the successful completion and verification of workpackage STG-04.

### Documentation Updates & Architectural Alignment
1. **Backlog & Phased Roadmap (`docs/BACKLOG.md`)**:
   - Updated baseline version to `v0.1.9` matching `src/__init__.py`.
   - Marked `STG-04` (Stage-Scoped Field Mapping Selection & Granular Column Execution) as `COMPLETED ✓` in Priority Overview Matrix (Section 2) and Work Packages (Section 3.7).
   - Documented completed tasks: `StageConfig.service_mapping_scopes` schema, granular engine execution in `trigger_now` and `_execute_consumer_enrichment`, settings API scope sanitization and column rename synchronization, modular `ServiceScopeSelector.js` WebUI component, and test validation suite.
2. **Platform Architecture Blueprint (`docs/ARCHITECTURE.md`)**:
   - Synchronized document version to `v0.1.9`.
   - Added Section 5.5 "Granular Stage-Scoped Field Mapping Selection (`service_mapping_scopes`)" documenting scope data models, default fallback behavior, root ingestion and consumer enrichment filtering semantics, and settings rename/pruning synchronization.
3. **Backend Technical Specification (`docs/BACKEND_SPEC.md`)**:
   - Synchronized specification version to `v0.1.9` across header, inventory, and health probe.
   - Documented `service_mapping_scopes` in `StageConfig` schema (Section 2.2).
   - Documented settings scope sanitization and automatic rename propagation in `src/api/settings.py` (Section 2.2).
   - Documented stage-scoped field mapping execution during root ingestion (`trigger_now`) and consumer enrichment (`_update_mapped_values_for_stage` / `_execute_consumer_enrichment`) in `src/core/scheduler.py` (Section 2.5).
4. **Modular Frontend Specification (`docs/FRONTEND_SPEC.md`)**:
   - Synchronized specification version to `v0.1.9`.
   - Documented `ServiceScopeSelector.js` in directory structure under `features/settings/`.
   - Added Section 3.4 documenting `ServiceScopeSelector.js` design: native `<details>` accordions, status badges, Select All / Clear All controls, and `collectServiceMappingScopes` serialization semantics.
5. **Project Overview (`README.md`)**:
   - Synchronized version badge and specification links to `v0.1.9`.
   - Added Granular Stage-Scoped Field Mapping Selection (`service_mapping_scopes`) under Core Features.

### Files Modified
- `docs/BACKLOG.md`
- `docs/ARCHITECTURE.md`
- `docs/BACKEND_SPEC.md`
- `docs/FRONTEND_SPEC.md`
- `README.md`
- `PROJECT_LOG.md`

---

## Session Milestone: 2026-10-16 — STG-04 Frontend Bugfix: Lit-html ChildPart DOM Mutation in ServiceScopeSelector

### Role & Agent Assignment
- **Frontend & WebUI Specialist (`Role 3` / `frontend-specialist`)**: Resolved Lit-html `ChildPart` DOM mutation crash in `ServiceScopeSelector.js` and recompiled production assets via Vite.

### Architectural Decisions & Changes Applied
1. **Elimination of Destructive `.textContent` Mutations on Lit Part Containers**:
   - In `ServiceScopeSelector.js`, `stage-scope-status-${sid}` previously rendered `${initialStatus}` as an interpolated child node.
   - When checkbox interactions invoked `updateScopeStatus(sid, total)`, setting `statusEl.textContent` removed all inner nodes, wiping out Lit-html's internal comment markers (`ChildPart`).
   - Consequently, when saving changes or closing the modal, Lit's template teardown threw: `Error: This ChildPart has no parentNode and therefore cannot accept a value`.
2. **CSS `attr(data-status)` Architecture**:
   - Refactored `stage-scope-status-${sid}` to render an empty span with `data-status="${initialStatus}"` attribute and class `stage-scope-status-badge`.
   - Added scoped CSS rule `.stage-scope-status-badge::after { content: attr(data-status); }`.
   - Updated `updateScopeStatus(sid, total)` to mutate `statusEl.setAttribute('data-status', text)`, preserving complete DOM node hierarchy and Lit's internal tree integrity.
3. **Vite Production Compilation**:
   - Rebuilt frontend bundles with `npm run build` in `frontend/`.
   - Generated updated assets in `src/static/` with zero errors.

### Files Modified
- `frontend/src/features/settings/ui/ServiceScopeSelector.js`
- `PROJECT_LOG.md`
- Production static bundle (`src/static/index.html`, `src/static/assets/index-CxxlFXEb.js`)









