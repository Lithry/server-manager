import { html, nothing } from 'lit-html';
import { Button } from '../../../shared/ui/atoms/Button/Button.js';
import { Modal } from '../../../shared/ui/organisms/Modal/Modal.js';
import { viewsApi } from '../api.js';

export function createViewDataModal(store) {
  const state = store.get();
  const targetView = state.inspectingView;
  const payload = state.viewDataPayload;
  const isLoading = state.isLoadingViewData || false;
  const error = state.viewDataError || null;

  if (!targetView) return nothing;

  const handleClose = () => {
    store.set(s => ({
      ...s,
      inspectingView: null,
      viewDataPayload: null,
      isLoadingViewData: false,
      viewDataError: null
    }));
  };

  const handleRefresh = async () => {
    store.set(s => ({ ...s, isLoadingViewData: true, viewDataError: null }));
    try {
      const res = await viewsApi.getViewData(targetView.VIEW_NAME, 100, 0);
      store.set(s => ({ ...s, viewDataPayload: res, isLoadingViewData: false }));
    } catch (err) {
      store.set(s => ({ ...s, isLoadingViewData: false, viewDataError: err.message }));
    }
  };

  const handleSyncAndRefresh = async () => {
    store.set(s => ({ ...s, isLoadingViewData: true, viewDataError: null }));
    try {
      await viewsApi.syncView(targetView.VIEW_NAME);
      const res = await viewsApi.getViewData(targetView.VIEW_NAME, 100, 0);
      await viewsApi.getViews();
      store.set(s => ({ ...s, viewDataPayload: res, isLoadingViewData: false }));
    } catch (err) {
      store.set(s => ({ ...s, isLoadingViewData: false, viewDataError: err.message }));
    }
  };

  const items = payload?.items || [];
  const columns = items.length > 0 ? Object.keys(items[0]) : [];
  const isTable = (targetView.MODE || 'VIEW') === 'TABLE';

  const body = html`
    <div class="u-flex u-items-center u-justify-between u-mb-3" style="flex-wrap: wrap; gap: var(--space-2);">
      <div class="u-flex u-items-center u-gap-2">
        <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, ${isTable ? 'var(--color-success)' : 'var(--color-accent)'} 20%, transparent); color: ${isTable ? 'var(--color-success)' : 'var(--color-accent)'}; padding: 3px 8px; border-radius: 4px; font-weight: bold;">
          ${isTable ? 'PERSISTENT TABLE' : 'VIRTUAL VIEW'}
        </span>
        <span class="u-text-xs u-font-mono u-text-muted">
          Total Rows: <strong>${payload?.total ?? 0}</strong> (Showing ${items.length})
        </span>
      </div>
      <div class="u-flex u-gap-2">
        ${isTable ? Button({
          label: 'Sync Table Now',
          variant: 'test',
          size: 'sm',
          icon: 'refresh',
          loading: isLoading,
          onClick: handleSyncAndRefresh
        }) : nothing}
        ${Button({
          label: 'Refresh Data',
          variant: 'secondary',
          size: 'sm',
          icon: 'refresh',
          loading: isLoading,
          onClick: handleRefresh
        })}
      </div>
    </div>

    ${error ? html`
      <div class="u-text-danger u-text-xs u-mb-3" style="padding: var(--space-3); background: color-mix(in srgb, var(--color-danger) 12%, transparent); border: 1px solid var(--color-danger); border-radius: var(--radius-sm);">
        ${error}
      </div>
    ` : nothing}

    ${isLoading && !payload ? html`
      <div class="u-text-muted u-text-sm" style="padding: var(--space-5); text-align: center;">Loading data from <code>${targetView.VIEW_NAME}</code>...</div>
    ` : nothing}

    ${!isLoading && items.length === 0 ? html`
      <div style="background: var(--color-bg-subtle); border: 1px dashed var(--color-border); border-radius: var(--radius-md); padding: var(--space-5); text-align: center;">
        <p class="u-text-muted u-text-sm" style="margin: 0;">No rows currently returned by <code>${targetView.VIEW_NAME}</code>.</p>
      </div>
    ` : nothing}

    ${items.length > 0 ? html`
      <div style="max-height: 420px; overflow: auto; border: 1px solid var(--color-border); border-radius: var(--radius-sm);">
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.8rem;">
          <thead>
            <tr style="background: var(--color-bg-subtle); border-bottom: 1px solid var(--color-border); position: sticky; top: 0; z-index: 1;">
              ${columns.map(col => html`<th class="font-mono" style="padding: 8px 10px; font-weight: 600; white-space: nowrap;">${col}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${items.map(row => html`
              <tr style="border-bottom: 1px solid var(--color-border); background: var(--color-bg-card);">
                ${columns.map(col => html`
                  <td class="font-mono" style="padding: 6px 10px; max-width: 260px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title=${String(row[col] ?? '')}>
                    ${row[col] === null || row[col] === undefined ? html`<span class="u-text-muted">NULL</span>` : String(row[col])}
                  </td>
                `)}
              </tr>
            `)}
          </tbody>
        </table>
      </div>
    ` : nothing}
  `;

  const footer = html`
    <div class="u-flex u-gap-2">
      ${Button({ label: 'Close', variant: 'secondary', onClick: handleClose })}
    </div>
  `;

  return Modal({
    title: `Inspect Data: ${targetView.VIEW_NAME}`,
    size: 'lg',
    onClose: handleClose,
    body,
    footer
  });
}
