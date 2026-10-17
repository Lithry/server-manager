# ServerManager Modular Frontend Architecture & Technical Specification

**Current Version:** `v0.2.0` (Multi-Pipeline, Stage-Centric Intervals & Dual-Mode Views/Tables Complete)  
**Core Technologies:** Native ES Modules + `lit-html` (v3.1.2) + Vite 5 + LightningCSS  
**Self-Hosted Typography:** `@fontsource/inter` + `@fontsource/jetbrains-mono`  
**Build Target:** `src/static/` (Delivered natively via FastAPI StaticFiles)  
**Status:** Modular Architecture Active & Validated  
**Language Standard:** English (Universal Codebase Standard)

---

## 1. Architectural Principles & Paradigm

1. **Lightweight Reactive Rendering without Framework Overhead**:
   - Built on `lit-html` (~3 KB gzip) utilizing native ES template literals (`html\`...\``).
   - Zero virtual-DOM overhead, zero heavy client framework runtimes (eliminates React/Vue/Angular baggage).
   - **Automatic XSS Prevention**: All interpolated strings are safely escaped by construction within tagged templates, eliminating inline string injection vectors.
2. **Feature-Sliced Component Decoupling**:
   - Codebase is organized into functional feature slices (`features/`) and reusable presentation components (`shared/ui/`).
   - Every file is bounded to a single responsibility (strict rule: under ~250 lines per module).
3. **No Global State Pollution**:
   - Legacy `window.app` singleton has been completely eliminated.
   - Component state is managed via discrete observable stores and in-memory caches.
4. **Offline & LAN-Resilient Design**:
   - Zero external CDN dependencies (Google Fonts CDN completely replaced with self-hosted `@fontsource` packages).
   - Content-hashed static assets ensure seamless browser caching and cache-busting on updates.

---

## 2. Directory Structure & Feature Slices

```
frontend/
├── package.json              # Frontend dependencies and build scripts
├── vite.config.js            # Vite bundler configuration & lightningcss minifier
├── index.html                # Vite HTML entry point
└── src/
    ├── main.js               # Application bootstrap, routing initialization & shell mounting
    ├── app/
    │   ├── router.js         # Reactive hash/path router engine
    │   ├── routes.js         # Navigation route definitions
    │   └── shell/
    │       ├── AppShell.js   # Master layout component (Sidebar + Topbar + Content slot)
    │       ├── Sidebar.js    # Collapsible navigation drawer with dynamic versioning
    │       └── Topbar.js     # Global header with dynamic backend version binding
    ├── features/             # Domain-specific slices (UI + API handlers + Local State)
    │   ├── gitops/           # Git status card & commit details
    │   ├── incidents/        # IncidentTable, CatalogTable, ReportIncidentModal, AddErrorModal
    │   ├── overview/         # OverviewPanel, multi-pipeline telemetry cards & stage metrics
    │   ├── pipeline/         # PipelineTable, ManageColumnsModal, multi-pipeline API client
    │   ├── sandbox/          # PayloadInspector, ContextSourceControls, SavedEndpointsList, sandboxStore
    │   ├── settings/         # ServicesPanel, ServiceModal, ServiceEventDiscovery, PipelinesPanel, PipelineModal, StagesPanel, StageModal, ServiceScopeSelector, MappingModal, NotificationTriggerModal, EnginePanel
    │   ├── tools/            # ToolList & live streaming ToolRunnerModal
    │   └── views/            # ViewList, ViewModal, ViewDataModal & dual-mode API client
    ├── pages/                # Page route views connecting features to layout
    │   ├── GitOpsPage.js
    │   ├── IncidentsPage.js
    │   ├── OverviewPage.js
    │   ├── PipelinePage.js
    │   ├── SandboxPage.js
    │   ├── SettingsPage.js
    │   ├── ToolsPage.js
    │   └── ViewsPage.js
    └── shared/               # Shared cross-cutting presentation & utilities
        ├── api/              # HTTP client, interceptors, error handling & query cache
        ├── lib/              # DOM helpers and form serializers
        ├── styles/           # CSS design tokens, reset, base, and utilities
        └── ui/               # Atomic Design Presentation Components
            ├── atoms/        # Badge, Button, Icon, Spinner, Toggle
            ├── molecules/    # FormField, SearchBar
            └── organisms/    # ConfirmDialog, ConsoleOutput, DataTable, Modal
```

---

## 3. Shared Presentation Layer (Atomic UI)

All UI elements utilize predefined styles and components rather than arbitrary ad-hoc inline styles.

### 3.1 Atoms (`shared/ui/atoms/`)
- **`Button`**: Clickable action element with semantic variants and integrated async `loading` spinner state.
- **`Badge`**: Status indicator supporting tones: `info`, `success`, `warning`, `danger`, `neutral`, `sink` (amber).
- **`Icon`**: Standardized SVG glyph renderer with consistent sizing tokens (`sm`, `md`, `lg`). Includes `copy`, `plus`, `package`, and `terminal` paths.
- **`Spinner`**: Non-blocking CSS animation spinner for async loading states.
- **`Toggle`**: Accessible toggle switch for boolean settings and stage toggles.

### 3.2 Molecules (`shared/ui/molecules/`)
- **`FormField`**: Accessible form wrapper providing standardized label, input element, hint text, and error validation messages.
- **`SearchBar`**: Debounced search input with integrated clear button and search glyph.

### 3.3 Organisms (`shared/ui/organisms/`)
- **`ModalHost` / `modalManager`**: Accessible modal dialog manager supporting stacking, ESC-key dismissal, backdrop clicking, and native focus trapping.
- **`DataTable`**: Universal responsive table component with sortable headers, column visibility toggling, pagination controls, and empty/loading states.
- **`ConsoleOutput`**: ANSI-compatible live console runner for streaming Custom Tools output with auto-scrolling and lightweight status icons.
- **`ConfirmDialog`**: Standardized confirmation prompt replacing native blocking `window.confirm()`.

### 3.4 Feature Subcomponents & Modular Modals
- **`PipelinesPanel` & `PipelineModal` (`features/settings/ui/PipelinesPanel.js`, `PipelineModal.js`)**:
  - Dedicated multi-pipeline management tab in Settings allowing operators to register, edit, enable/disable, and delete isolated telemetry pipelines (`PIPELINE_<SLUG>`).
  - Supports per-pipeline `retention_days` overrides (or inheriting global retention) and displays stages assigned to each pipeline.
- **`StagesPanel` & `StageModal` (`features/settings/ui/StagesPanel.js`, `StageModal.js`)**:
  - Configures multi-pipeline assignment (`pipeline_ids`), stage-level execution cadence (`interval_seconds` or global inheritance), `grace_period_minutes`, and `timeout_minutes`.
  - Distinguishes **Active Root + Sink Stages** (`ROOT + SINK` — ingests directly into `STATUS = 'SINK'`) from **Downstream Passive Sink Stages** (`SINK (PASSIVE)` — no active polling loop; receives passive updates by `PIPELINE_KEY` and retains rows until `retention_days` expires since `LAST_UPDATED`).
- **`ServiceScopeSelector` (`features/settings/ui/ServiceScopeSelector.js`)**:
  - Standalone presentation and selection component (<125 lines) extracted to maintain the strict ~250 lines per module boundary in `StageModal.js`.
  - Integrates native HTML5 `<details>` / `<summary>` accordions per assigned service to scope which mapped columns are evaluated/updated by a given stage.
- **`ServiceModal` & `ServiceEventDiscovery` (`features/settings/ui/ServiceModal.js`, `ServiceEventDiscovery.js`)**:
  - Service registration and editing (<240 lines) with zero service-level polling intervals (intervals belong strictly to Stages) and inline guidance for relative lookback placeholders (`{lookback_seconds}`, `{lookback_minutes}`, `{lookback_iso}`, `{cutoff_iso}`).
  - `ServiceEventDiscovery.js` (<140 lines) encapsulates live event discovery against `POST /api/v1/pipeline/sample`.
- **`MappingModal` (`features/settings/ui/MappingModal.js`)**:
  - Field mapping and transformer configuration dialog (<135 lines) with interactive transformer testing against `POST /api/v1/settings/test-transformer`, supporting both `value` and previously mapped custom columns in `context_dict`.
- **`ViewList`, `ViewModal` & `ViewDataModal` (`features/views/`)**:
  - Complete dual-mode management for **Virtual SQL Views (`MODE = 'VIEW'`)** and **Persistent Custom Tables (`MODE = 'TABLE'`)**.
  - Supports configuring `sync_key_column` (`PIPELINE_KEY` default) and automated refresh cycle $T_s$ (`refresh_interval_seconds`), manual **Sync Now** (`POST /api/v1/views/{name}/sync`), live data inspection (`GET /api/v1/views/{name}/data` in `ViewDataModal.js`), and deletion (`DELETE /api/v1/views/{name}`).
- **Developer API Sandbox Feature Slice (`features/sandbox/`)**:
  - **`PayloadInspector` (`features/sandbox/ui/PayloadInspector.js`)**: Four-tab inspection view (`Discovered Keys`, `Endpoint Result`, `Cumulative Context`, and `Logs`).
  - **`ContextSourceControls` (`features/sandbox/ui/ContextSourceControls.js`)**: Multi-source parameter inputs supporting service selection, `pipeline_id` selection for database `record_id` lookups, direct live `sample_endpoint` sampling, and collapsible Custom JSON Mock Context panel.
  - **`SavedEndpointsList` (`features/sandbox/ui/SavedEndpointsList.js`)** & **`sandboxStore` (`features/sandbox/model/sandboxStore.js`)**: Reactive state store dispatching to `/api/v1/pipeline/sandbox/enrichment` and persisting saved endpoints to `POST /api/v1/settings`.

---

## 4. State Management & API Client

### 4.1 Centralized HTTP Client (`shared/api/http.js`)
- Standardizes requests with timeout management (15s default), custom header injection, and consistent error extraction.
- Maps HTTP status codes into typed application errors (`ApiError`, `NetworkError`).

### 4.2 In-Memory Query Cache (`shared/api/queryCache.js`)
- Employs a *Stale-While-Revalidate* query caching strategy.
- **Security Rule**: API keys and secrets returned by `GET /api/v1/settings` are stored **strictly in memory** and never written to `localStorage`.
- Visibility-aware polling: automatically pauses background fetching when the browser tab is hidden or backgrounded.

### 4.3 Settings Store, Change-Tracking Modification Array & Reactive `isDirty` Reactivity (`SettingsPage.js`)
- **Server Baseline Snapshotting**:
  - Captured upon page mount or initial query cache resolution via `baseline = JSON.parse(JSON.stringify(snapshot.data))`.
  - Guarantees an immutable reference snapshot representing the verified server state.
- **Change-Tracking Modification Array Architecture (`pendingModifications = []`)**:
  - Replaces volatile flags with an explicit tracking array storing discrete modification records: `{ key, oldValue, newValue }`.
  - Canonical `deepEqual(a, b)` Comparison: Recursively validates primitives, order-sensitive arrays, and nested objects without external dependencies.
  - Granular Path Tracking: Evaluates edits across upstream services (`services.<id>`), telemetry pipelines (`pipelines.<id>`), notification triggers (`notification_triggers`), pipeline stages (`stages`), and engine retention/polling cadences.
  - Reversion Detection & Splicing: Whenever an operator edits a field, `trackModification` inspects the state. If `deepEqual(oldValue, newValue)` evaluates to `true`, the modification is spliced out (`splice`) from `pendingModifications`.
- **Reactive `isDirty` State & UI Binding**:
  - Store update interceptor continuously evaluates current cache against baseline, deriving `isDirty = pendingModifications.length > 0`.
  - Directly drives the "Save All Settings" button state (`disabled: !isDirty`) and toggles the red `!` notification badge.
- **Navigation Safety & Unsaved Changes Guard**:
  - Intercepts client-side routing via `router.setBeforeNavigateHook()`: when `pendingModifications.length > 0`, displays an asynchronous `ConfirmDialog` warning before navigation.
  - Attaches browser `beforeunload` listener to prevent accidental page refresh or tab close.
- **Atomic Persistence & Verified Baseline Rollback**:
  - On successful `POST /api/v1/settings`: updates `baseline` to the confirmed configuration, flushes `pendingModifications = []`, and resets `isDirty = false`.
  - On network error or schema rejection: restores `queryCache` to `baseline`, clears `pendingModifications = []`, and displays an informative alert explaining the rollback.
  - On page unmount with unsaved changes left behind: safely rolls back `queryCache` to `baseline` to prevent dirty configuration leakage into other application routes.

---

## 5. Build Pipeline & Bundling Specification

Configured via `frontend/vite.config.js`:

```javascript
export default defineConfig(({ mode }) => ({
  root: '.',
  base: '/static/',
  build: {
    outDir: '../src/static',
    emptyOutDir: true,
    cssMinify: 'lightningcss',
    rollupOptions: {
      output: {
        manualChunks: { vendor: ['lit-html'] },
        assetFileNames: (assetInfo) => 
          assetInfo.name.endsWith('.css') 
            ? 'assets/[name]-[hash][extname]' 
            : 'assets/images/[name]-[hash][extname]'
      }
    }
  }
}));
```

### Build Characteristics
- **Bundle Time**: ~1.3 seconds via Vite and Rollup.
- **Vendor Splitting**: `lit-html` isolated into `vendor-[hash].js` (~7.4 KB, ~3.2 KB gzip).
- **CSS Compilation**: Minified via `lightningcss` into a single content-hashed stylesheet (`index-[hash].css`).
- **Static Placement**: Directly outputs to `src/static/`, enabling FastAPI to serve all production assets without requiring Node.js in the production Docker image.

---

## 6. Legacy Audit & Defect Remediation Matrix

The initial architectural audit of `old_app.js` and `old_index.html` identified 16 key defects (D1–D16). The table below details their resolution within the modular frontend:

| ID | Issue Description | Original Monolith Evidence | Modular Architecture Resolution | Status |
| :--- | :--- | :--- | :--- | :---: |
| **D1** | Undefined CSS variables & missing keyframes (`--primary`, `--surface-subtle`) | `old_app.js` / `style.css` | Defined in `shared/styles/tokens.css` with unified design tokens. | **RESOLVED ✓** |
| **D2** | ~25 orphan utility classes used in markup but absent from CSS | `old_index.html` | Unified utilities implemented in `shared/styles/utilities.css`. | **RESOLVED ✓** |
| **D3** | Notification trigger inputs rendered but never read back into save payload | `old_app.js:2429` | Form binding reads `target_url` and `topic` in `NotificationsPanel.js` & `NotificationTriggerModal.js`. | **RESOLVED ✓** |
| **D4** | Unbound "Report Incident" button and unused backend endpoints | `old_app.js` | Dedicated `ReportIncidentModal` wired to `POST /api/v1/incidents` and `AddErrorModal` wired to `ERROR_INDEX`. | **RESOLVED ✓** |
| **D5** | Discrepancy in severity-to-badge color mappings across tables | `old_app.js:390, 842` | Unified `Badge` component with standardized severity tone mapping. | **RESOLVED ✓** |
| **D6** | Pipeline `STATUS` badges all render blue; SINK stage lacks distinct amber tone | `old_app.js:473` | SINK status explicitly styled with amber tone in `PipelineTable.js`. | **RESOLVED ✓** |
| **D7** | **XSS vulnerability via unescaped inline handlers** (`onclick="app.selectTool(...)"`) | `old_app.js:1057` | Completely eliminated: `lit-html` tagged templates bind real closure callbacks. | **RESOLVED ✓** |
| **D8** | Sidebar incidents counter badge only refreshed when on Overview tab | `old_app.js:370` | Shell-level event subscription updates badge across all tabs. | **RESOLVED ✓** |
| **D9** | Background polling persists when browser tab is hidden; race conditions | `old_app.js:31` | `queryCache.js` pauses requests on `document.visibilityState === 'hidden'`. | **RESOLVED ✓** |
| **D10** | Uncaught fetch rejections leave UI permanently stuck in "Loading..." | 10 `console.error` blocks | Standardized `AsyncBoundary` component renders error message with retry button. | **RESOLVED ✓** |
| **D11** | System reserved columns duplicated across frontend and backend code | `old_app.js:6` | Dynamically derived from backend `GET /api/v1/pipeline/columns` (`is_system`). | **RESOLVED ✓** |
| **D12** | External Google Fonts CDN dependency on local LAN homelab | `index.html:8` | Fonts self-hosted locally via `@fontsource/inter` and `@fontsource/jetbrains-mono`. | **RESOLVED ✓** |
| **D13** | Settings optimistic mutation lacks rollback on failed `POST` | `old_app.js:2492` | `SettingsPage.js` implements rollback to pre-mutation snapshot on failure. | **RESOLVED ✓** |
| **D14** | Accessibility gaps: `closeModals()` closed all modals; mouse-only cards | `old_app.js:281` | Native keyboard accessible dialogs (`ESC` key, focus trap, ARIA roles). | **RESOLVED ✓** |
| **D15** | Hardcoded endpoint presets inside modal code using `.includes('sonarr')` | `old_app.js:2178` | Extracted into declarative service configuration catalog. | **RESOLVED ✓** |
| **D16** | Duplicate topbar version badge (redundant right-hand pill) | `old_index.html` | Removed duplicate badge; topbar dynamically displays `__version__`. | **RESOLVED ✓** |
