import { html, nothing } from 'lit-html';
import { Button } from '../../../shared/ui/atoms/Button/Button.js';
import { Modal } from '../../../shared/ui/organisms/Modal/Modal.js';
import { viewsApi } from '../api.js';

export function createViewModal(store) {
  const state = store.get();
  const editingItem = state.editingView || null;
  const currentMode = state.draftMode || editingItem?.MODE || 'VIEW';
  const isTableMode = currentMode === 'TABLE';
  const isSaving = state.isSavingView || false;

  const handleClose = () => {
    store.set(s => ({
      ...s,
      isViewModalOpen: false,
      editingView: null,
      draftMode: null,
      isSavingView: false,
      viewModalError: null
    }));
  };

  const handleSave = async () => {
    const viewName = (document.getElementById('view-name')?.value || '').trim().toUpperCase().replace(/[^A-Z0-9_]/g, '');
    const description = (document.getElementById('view-desc')?.value || '').trim();
    const sqlQuery = (document.getElementById('view-sql')?.value || '').trim();
    const syncKeyCol = (document.getElementById('view-sync-key')?.value || 'PIPELINE_KEY').trim().toUpperCase().replace(/[^A-Z0-9_]/g, '') || 'PIPELINE_KEY';
    const rawInterval = (document.getElementById('view-refresh-interval')?.value || '').trim();
    const parsedInterval = rawInterval ? parseInt(rawInterval, 10) : null;

    if (!viewName) {
      store.set(s => ({ ...s, viewModalError: 'View / Table Name is required (strictly uppercase alphanumeric and underscores).' }));
      return;
    }
    if (!sqlQuery) {
      store.set(s => ({ ...s, viewModalError: 'SQL SELECT query is required.' }));
      return;
    }

    store.set(s => ({ ...s, isSavingView: true, viewModalError: null }));
    try {
      await viewsApi.saveView({
        view_name: viewName,
        description,
        sql_query: sqlQuery,
        mode: currentMode,
        sync_key_column: isTableMode ? syncKeyCol : 'PIPELINE_KEY',
        refresh_interval_seconds: (isTableMode && Number.isFinite(parsedInterval) && parsedInterval >= 10) ? parsedInterval : null
      });
      await viewsApi.getViews();
      handleClose();
    } catch (err) {
      store.set(s => ({
        ...s,
        isSavingView: false,
        viewModalError: err.message || 'Failed to save custom view / table.'
      }));
    }
  };

  const body = html`
    ${state.viewModalError ? html`
      <div class="u-text-danger u-text-xs u-mb-3" style="padding: var(--space-2) var(--space-3); background: color-mix(in srgb, var(--color-danger) 12%, transparent); border: 1px solid var(--color-danger); border-radius: var(--radius-sm);">
        ${state.viewModalError}
      </div>
    ` : nothing}

    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Object Identifier (Uppercase)</label>
        <input
          type="text"
          id="view-name"
          class="form-input font-mono"
          placeholder="V_ANIME_LIBRARY or TBL_RECOGNIZED_MEDIA"
          autocomplete="off"
          .value=${editingItem?.VIEW_NAME || ''}
          ?disabled=${!!editingItem}
          @input=${(e) => { e.target.value = e.target.value.toUpperCase().replace(/[^A-Z0-9_]/g, ''); }}
        >
        <small class="u-text-muted">Strict identifier regex: <code>^[A-Z0-9_]+$</code></small>
      </div>
      <div class="form-group">
        <label>Execution & Storage Mode</label>
        <select
          class="form-select font-mono"
          .value=${currentMode}
          @change=${(e) => store.set(s => ({ ...s, draftMode: e.target.value }))}
        >
          <option value="VIEW" ?selected=${currentMode === 'VIEW'}>VIEW — Virtual SQLite View (On-Demand)</option>
          <option value="TABLE" ?selected=${currentMode === 'TABLE'}>TABLE — Persistent Custom Table (Upsert & Automated Ts)</option>
        </select>
        <small class="u-text-muted">
          ${isTableMode
            ? 'Materializes rows into a persistent SQLite table with incremental upserts.'
            : 'Creates a virtual SQLite VIEW evaluated dynamically on query.'}
        </small>
      </div>
    </div>

    <div class="form-group u-mb-3">
      <label>Description</label>
      <input
        type="text"
        id="view-desc"
        class="form-input"
        placeholder="Aggregated projection or persistent telemetry dataset"
        .value=${editingItem?.DESCRIPTION || ''}
      >
    </div>

    ${isTableMode ? html`
      <div class="form-grid-2 u-mb-3" style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
        <div class="form-group u-mb-0">
          <label>Unique Upsert Key Column</label>
          <input
            type="text"
            id="view-sync-key"
            class="form-input font-mono"
            placeholder="PIPELINE_KEY"
            .value=${editingItem?.SYNC_KEY_COLUMN || 'PIPELINE_KEY'}
            @input=${(e) => { e.target.value = e.target.value.toUpperCase().replace(/[^A-Z0-9_]/g, ''); }}
          >
          <small class="u-text-muted">Must be returned by the SELECT query to perform non-destructive upserts.</small>
        </div>
        <div class="form-group u-mb-0">
          <label>Automated Refresh Cycle Ts (Seconds)</label>
          <input
            type="number"
            id="view-refresh-interval"
            class="form-input font-mono"
            min="10"
            max="86400"
            placeholder="Leave empty for manual sync only"
            .value=${editingItem?.REFRESH_INTERVAL_SECONDS ?? ''}
          >
          <small class="u-text-muted">Optional background sync interval (&ge; 10s). Leave empty for manual-only sync.</small>
        </div>
      </div>
    ` : nothing}

    <div class="form-group u-mb-0">
      <label>Read-Only SQL SELECT Query</label>
      <textarea
        id="view-sql"
        class="form-input font-mono"
        rows="5"
        style="resize: vertical;"
        placeholder="SELECT PIPELINE_KEY, STAGE, STATUS, LAST_UPDATED FROM PIPELINE_DEFAULT WHERE STATUS = 'SINK'"
        .value=${editingItem?.SQL_QUERY || ''}
      ></textarea>
      <small class="u-text-muted">Strictly read-only <code>SELECT</code> over pipeline tables (e.g. <code>PIPELINE_DEFAULT</code>). Destructive SQL keywords are blocked.</small>
    </div>
  `;

  const footer = html`
    <div class="u-flex u-gap-2">
      ${Button({ label: 'Cancel', variant: 'secondary', onClick: handleClose })}
      ${Button({
        label: isSaving ? 'Saving...' : (editingItem ? 'Update & Sync' : 'Create & Sync'),
        variant: 'save',
        loading: isSaving,
        disabled: isSaving,
        onClick: handleSave
      })}
    </div>
  `;

  return Modal({
    title: editingItem ? `Edit ${editingItem.VIEW_NAME}` : 'Create Custom View / Persistent Table',
    size: 'lg',
    onClose: handleClose,
    body,
    footer
  });
}
