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
