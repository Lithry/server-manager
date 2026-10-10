import { html, nothing } from 'lit-html';
import { Button } from '../../../shared/ui/atoms/Button/Button.js';
import { Modal } from '../../../shared/ui/organisms/Modal/Modal.js';
import { http, queryCache } from '../../../shared/api/index.js';
import { pipelineKeys, pipelineApi } from '../api.js';

export function createManageColumnsModal(store) {
  const state = store.get();
  
  const handleClose = () => {
    store.set(s => ({ ...s, isManageColumnsModalOpen: false }));
  };

  const handleMoveUp = (index) => {
    if (index === 0) return;
    const newCols = [...state.columnsData];
    const temp = newCols[index - 1];
    newCols[index - 1] = newCols[index];
    newCols[index] = temp;
    store.set(s => ({ ...s, columnsData: newCols }));
  };

  const handleMoveDown = (index) => {
    if (index === state.columnsData.length - 1) return;
    const newCols = [...state.columnsData];
    const temp = newCols[index + 1];
    newCols[index + 1] = newCols[index];
    newCols[index] = temp;
    store.set(s => ({ ...s, columnsData: newCols }));
  };

  const handleSave = async () => {
    const order = state.columnsData.map(c => c.name);
    try {
      await http.put('/api/v1/pipeline/columns/order', { column_order: order });
      store.set(s => ({ ...s, isManageColumnsModalOpen: false }));
      pipelineApi.getPipeline({ dedupe: false }); // Refresh pipeline data and columns
    } catch (err) {
      alert("Failed to save column order: " + err.message);
    }
  };

  const handlePrune = async () => {
    if (!confirm('Are you sure you want to delete all deprecated columns? This cannot be undone.')) return;
    try {
      await http.post('/api/v1/pipeline/columns/prune');
      // Refetch columns
      const cols = await http.get('/api/v1/pipeline/columns');
      store.set(s => ({ ...s, columnsData: cols }));
      pipelineApi.getPipeline({ dedupe: false });
    } catch (err) {
      alert("Failed to prune columns: " + err.message);
    }
  };

  const body = html`
    <div class="u-mb-4">
      <p class="u-text-muted u-text-sm">
        Change the display order of columns in the Universal Pipeline. System columns are always pinned to the left.
        <br><br>
        <strong>Note:</strong> Deprecated columns are columns that exist in the database but are no longer used by any Service Field Mapping.
      </p>
    </div>

    ${state.isLoadingColumns ? html`<div class="u-text-center u-p-4">Loading columns...</div>` : nothing}
    
    ${!state.isLoadingColumns && state.columnsData ? html`
      <div class="u-flex u-flex-col u-gap-2" style="max-height: 400px; overflow-y: auto; padding-right: 8px;">
        ${state.columnsData.map((col, idx) => {
          const isSystem = col.is_system;
          return html`
            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-2) var(--space-3); background: var(--color-bg-surface); border: 1px solid var(--color-border); border-radius: var(--radius-sm);">
              <div class="u-flex u-items-center u-gap-3">
                <span style="font-weight: 500; font-family: monospace; color: ${isSystem ? 'var(--color-accent)' : 'var(--color-text)'};">${col.name}</span>
                <span class="u-text-xs u-text-muted">${col.type}</span>
                ${col.is_deprecated ? html`<span class="badge" style="background: var(--color-danger); color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem;">Deprecated</span>` : nothing}
                ${isSystem ? html`<span class="badge" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px; font-size: 0.7rem;">System</span>` : nothing}
              </div>
              
              <div class="u-flex u-gap-1">
                ${Button({ label: '▲', variant: 'ghost', size: 'sm', disabled: isSystem || (idx > 0 && state.columnsData[idx - 1].is_system), onClick: () => handleMoveUp(idx), style: 'padding: 2px 8px;' })}
                ${Button({ label: '▼', variant: 'ghost', size: 'sm', disabled: isSystem || idx === state.columnsData.length - 1, onClick: () => handleMoveDown(idx), style: 'padding: 2px 8px;' })}
              </div>
            </div>
          `;
        })}
      </div>
    ` : nothing}
  `;

  const footer = html`
    <div class="u-flex u-justify-between u-items-center" style="width: 100%;">
      <div>
        ${Button({ label: 'Prune Deprecated', variant: 'delete', onClick: handlePrune })}
      </div>
      <div class="u-flex u-gap-2">
        ${Button({ label: 'Cancel', variant: 'secondary', onClick: handleClose })}
        ${Button({ label: 'Save Order', variant: 'save', onClick: handleSave })}
      </div>
    </div>
  `;

  return Modal({
    title: 'Manage Columns',
    size: 'md',
    onClose: handleClose,
    body,
    footer
  });
}
