# ServerManager Technical Backlog & Roadmap

**Appliance:** `server-manager` (Universal Telemetry & Cross-Service Pipeline)  
**Tracking Repository:** `Lithry/server-manager.git`  
**Current Baseline Version:** `v0.1.8`  
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
| **SBX-01** | **P2 (Medium)** | WebUI / Tooling | API Sandbox Architectural Debate, Payload Inspector & Visual Refactor | Phase 1 (`v0.1.9`) | **PLANNED 📅** |
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

### 3.3 SBX-01: API Sandbox Architectural Debate, Payload Inspector & Visual Refactor (`v0.1.9`)
- **Objective**: Overhaul the developer API Sandbox into an ergonomic, visually consistent testing environment for upstream services and enrichment chains prior to multi-pipeline expansion.
- **Tasks**:
  1. **Architectural Analysis & Design Debate**:
     - Evaluate testing workflow: sample record selection, multi-endpoint enrichment chaining, and transformer live-preview.
     - Establish requirements for step-by-step request/response inspection and schema extraction.
  2. **Visual & UX Refactor (`SandboxPage.js`)**:
     - Redesign panel layout with responsive split-pane architecture (Request Configurator on left, Response & Mappings Inspector on right).
     - Fix CSS styling inconsistencies, card borders, contrast ratios, and dark theme alignment.
     - Implement structured tree visualizer for nested JSON payloads with one-click path copying (e.g. `series.title`, `data.id`).
     - Integrate live feedback for predicate and transformer evaluation directly inside the sandbox view.

---

### 3.4 CORE-02: Multi-Pipeline Dynamic Registry & Scoped DAG Progression Engine (`v0.2.0` - Phase 2)
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

### 3.5 VIEW-01: Dual-Mode Table & View Builder (`v0.3.0` - Phase 3)
- **Objective**: Allow operators to create both virtual SQL views and persistent materialized destination tables.
- **Tasks**:
  1. Support two dataset types:
     - **Dynamic Views**: Virtual SQLite views (`CREATE VIEW ...`) for ad-hoc inspection and prototyping.
     - **Persistent Tables**: Real SQLite destination tables with background incremental Upsert synchronization (`INSERT INTO ... ON CONFLICT DO UPDATE`).
  2. Factory preset for `CATALOG_MEDIA` consolidated playable library catalog, decoupled from pipeline retention purging.

---

### 3.6 API-02: Tier 3 Guided Remediation API (`v0.4.0` - Phase 4)
- **Objective**: Complete Tier 3 LLM tool suite for LibreChat / Ollama with safe remediation handoff.
- **Tasks**:
  1. Implement `POST /api/v1/meta/remediate`:
     - Accepts `{ "incident_id": int, "action": str, "target": str }`.
     - Validates payload against pre-authorized runbook in `ERROR_INDEX.REMEDY`.
     - Triggers corresponding Custom Tool script or container action.
     - Appends resolution note to `SYSTEM_INCIDENTS` and returns structured execution status.
  2. Embed HATEOAS payload in `GET /api/v1/meta/query?target=incidents` so LLMs mirror exact parameters without hallucination.

---

### 3.7 UX-02 & CFG-01: Guided Setup Flow & Out-of-the-Box Presets (`v0.5.0` - Phase 5)
- **Objective**: Enable zero-friction initial setup for new installations.
- **Tasks**:
  1. Add built-in service presets for Sonarr, Radarr, Shoko, and Jellyfin with pre-configured endpoints and mappings.
  2. Implement guided first-run wizard in WebUI.

---

### 3.8 DB-01: Granular Ingestion Log Audit & Telemetry Timing (`v0.6.0` - Phase 6)
- **Objective**: Ingestion performance observability.
- **Tasks**:
  1. Record execution duration in milliseconds for each service loop and secondary enrichment query.
  2. Expose latency metrics on Overview dashboard.

---

### 3.9 Production MVP Release Gate (`v1.0.0`)
- **Criteria**:
  - All Phases 1 through 6 completed and verified.
  - 100% test pass rate with automated integration suites.
  - Zero spin-up regressions on mechanical storage drives.
  - Explicit user authorization in chat to tag and bump `v1.0.0`.
