import { html, nothing } from 'lit-html';
import { Button } from '../../shared/ui/atoms/Button/Button.js';
import { viewsApi, viewsKeys } from './api.js';
import { queryCache } from '../../shared/api/index.js';

export function createViewList(store) {
  const handleInspect = async (item) => {
    store.set(s => ({
      ...s,
      inspectingView: item,
      viewDataPayload: null,
      isLoadingViewData: true,
      viewDataError: null
    }));
    try {
      const res = await viewsApi.getViewData(item.VIEW_NAME, 100, 0);
      store.set(s => ({ ...s, viewDataPayload: res, isLoadingViewData: false }));
    } catch (err) {
      store.set(s => ({ ...s, isLoadingViewData: false, viewDataError: err.message }));
    }
  };

  const handleSync = async (item) => {
    try {
      const res = await viewsApi.syncView(item.VIEW_NAME);
      await viewsApi.getViews();
      alert(`✓ Synced '${item.VIEW_NAME}' (${res.rows_synced ?? 0} rows upserted).`);
    } catch (err) {
      alert(`✗ Sync failed for '${item.VIEW_NAME}': ${err.message}`);
    }
  };

  const handleEdit = (item) => {
    store.set(s => ({
      ...s,
      isViewModalOpen: true,
      editingView: item,
      draftMode: item.MODE || 'VIEW',
      viewModalError: null
    }));
  };

  const handleDelete = async (item) => {
    if (!confirm(`Delete ${item.MODE === 'TABLE' ? 'persistent table' : 'virtual view'} '${item.VIEW_NAME}'?`)) return;
    try {
      await viewsApi.deleteView(item.VIEW_NAME);
      await viewsApi.getViews();
    } catch (err) {
      alert(`✗ Failed to delete '${item.VIEW_NAME}': ${err.message}`);
    }
  };

  return {
    view() {
      const snapshot = queryCache.read(viewsKeys.all);
      const items = Array.isArray(snapshot.data) ? snapshot.data : (snapshot.data?.items ?? []);

      if (snapshot.status === 'loading' && !items.length) {
        return html`<div class="u-text-muted u-text-sm">Loading views and custom tables...</div>`;
      }

      if (!items.length) {
        return html`
          <div style="background: var(--color-bg-card); border: 1px solid var(--color-border); border-radius: var(--radius-md); overflow: hidden;">
            <div style="padding: var(--space-4);">
              <div style="font-weight: bold; margin-bottom: var(--space-1); font-size: var(--font-size-md);">No Views or Custom Tables Configured</div>
              <div class="u-text-muted u-text-sm">Click "+ New View / Custom Table" to define a virtual SQLite VIEW or a persistent custom table with automated Ts refresh over any pipeline.</div>
            </div>
            <div style="border-top: 1px solid var(--color-border); padding: var(--space-4); text-align: center; background: var(--color-bg-surface); font-weight: 500;" class="u-text-sm u-text-muted">
              0 active projections or persistent tables registered.
            </div>
          </div>
        `;
      }

      return html`
        <div class="u-flex u-flex-col u-gap-3">
          ${items.map(item => {
            const isTable = (item.MODE || 'VIEW') === 'TABLE';
            const modeColor = isTable ? 'var(--color-success)' : 'var(--color-accent)';
            const scheduleText = isTable
              ? (item.REFRESH_INTERVAL_SECONDS ? `AUTO EVERY ${item.REFRESH_INTERVAL_SECONDS}S` : 'MANUAL SYNC ONLY')
              : 'ON-DEMAND SQL VIEW';

            return html`
              <div style="background: var(--color-bg-card); border: 1px solid var(--color-border); border-left: 4px solid ${modeColor}; border-radius: var(--radius-md); padding: var(--space-4);">
                <div class="u-flex u-items-center u-justify-between u-mb-2" style="flex-wrap: wrap; gap: var(--space-2);">
                  <div class="u-flex u-items-center u-gap-3" style="flex-wrap: wrap;">
                    <strong class="u-font-mono" style="font-size: 1.05rem; color: var(--color-text);">${item.VIEW_NAME}</strong>
                    <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, ${modeColor} 20%, transparent); color: ${modeColor}; padding: 2px 6px; border-radius: 4px; font-weight: bold;">
                      ${isTable ? 'PERSISTENT TABLE' : 'VIRTUAL VIEW'}
                    </span>
                    <span class="u-font-mono u-text-xs" style="background: var(--color-bg-subtle); color: var(--color-text-secondary); padding: 2px 6px; border-radius: 4px; border: 1px solid var(--color-border);">
                      ${scheduleText}
                    </span>
                    ${isTable ? html`
                      <span class="u-font-mono u-text-xs u-text-muted">
                        KEY: <strong style="color: var(--color-text);">${item.SYNC_KEY_COLUMN || 'PIPELINE_KEY'}</strong>
                        ${item.LAST_SYNCED_AT ? html` | LAST SYNC: ${item.LAST_SYNCED_AT}` : nothing}
                      </span>
                    ` : nothing}
                  </div>
                  <div class="u-flex u-gap-2">
                    ${Button({ label: 'Inspect Data', variant: 'secondary', size: 'sm', icon: 'search', onClick: () => handleInspect(item) })}
                    ${isTable ? Button({ label: 'Sync Now', variant: 'test', size: 'sm', icon: 'refresh', onClick: () => handleSync(item) }) : nothing}
                    ${Button({ label: 'Edit', variant: 'ghost', size: 'sm', onClick: () => handleEdit(item) })}
                    ${Button({ label: 'Delete', variant: 'delete', size: 'sm', onClick: () => handleDelete(item) })}
                  </div>
                </div>
                ${item.DESCRIPTION ? html`<div class="u-text-sm u-text-muted u-mb-2">${item.DESCRIPTION}</div>` : nothing}
                <div class="u-font-mono u-text-xs" style="background: var(--color-bg-subtle); padding: 8px 10px; border-radius: var(--radius-sm); border: 1px solid var(--color-border); color: var(--color-text-secondary); overflow-x: auto; white-space: pre-wrap;">${item.SQL_QUERY || ''}</div>
              </div>
            `;
          })}
        </div>
      `;
    }
  };
}

