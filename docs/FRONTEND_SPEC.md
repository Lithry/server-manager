# ServerManager Modular Frontend Architecture & Technical Specification

**Current Version:** `v0.1.9` (REF-01 Phase Complete & Validated)  
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
    │   ├── overview/         # OverviewPanel, telemetry cards & metrics
    │   ├── pipeline/         # PipelineTable, ManageColumnsModal, cell renderers
    │   ├── settings/         # ServiceModal, StageModal, ServiceScopeSelector, MappingModal, NotificationTriggerModal
    │   ├── tools/            # ToolList & live streaming ToolRunnerModal
    │   └── views/            # ViewList & dynamic SQL view query modal
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
- **`Button`**: Clickable action element with 5 semantic variants (`primary`, `secondary`, `ghost`, `danger`, `warning`) and integrated async `loading` spinner state.
- **`Badge`**: Status indicator supporting tones: `info`, `success`, `warning`, `danger`, `neutral`, `sink` (amber).
- **`Icon`**: Standardized SVG glyph renderer with consistent sizing tokens (`sm`, `md`, `lg`).
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
- **`ServiceScopeSelector` (`features/settings/ui/ServiceScopeSelector.js`)**:
  - Standalone presentation and selection component (<120 lines) extracted to maintain the strict ~250 lines per module boundary in `StageModal.js`.
  - Integrates native HTML5 `<details>` / `<summary>` accordions per assigned service.
  - Dynamically computes and displays status badges: `(${checkedCount} of ${totalCount} active)` if scoped, or `All fields active by default` when unscoped.
  - Controls: "Select All" and "Clear All" buttons, with inline guidance for operators.
  - Exports `collectServiceMappingScopes` with clean default fallback: omits the service key from the resulting dictionary if 0 or all columns are checked, preserving the backend engine's default all-columns behavior without blocking alerts.

---

## 4. State Management & API Client

### 4.1 Centralized HTTP Client (`shared/api/http.js`)
- Standardizes requests with timeout management (15s default), custom header injection, and consistent error extraction.
- Maps HTTP status codes into typed application errors (`ApiError`, `NetworkError`).

### 4.2 In-Memory Query Cache (`shared/api/queryCache.js`)
- Employs a *Stale-While-Revalidate* query caching strategy.
- **Security Rule**: API keys and secrets returned by `GET /api/v1/settings` are stored **strictly in memory** and never written to `localStorage`.
- Visibility-aware polling: automatically pauses background fetching when the browser tab is hidden or backgrounded.

### 4.3 Settings Store with Optimistic Rollback
- Settings are modified in memory and committed as an atomic payload to `POST /api/v1/settings`.
- In the event of network failure or schema rejection, the store rolls back to the prior server-verified state, preventing UI divergence.

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
