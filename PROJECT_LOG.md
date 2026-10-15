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

