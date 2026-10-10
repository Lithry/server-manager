import { html, nothing } from 'lit-html';
import { createPipelineTable } from '../features/pipeline/PipelineTable.js';
import { pipelineApi, pipelineKeys } from '../features/pipeline/api.js';
import { queryCache, http } from '../shared/api/index.js';
import { Button } from '../shared/ui/atoms/Button/Button.js';
import { ConfirmDialog } from '../shared/ui/organisms/ConfirmDialog/ConfirmDialog.js';
import { createStore } from '../shared/lib/lib.js';
import { createManageColumnsModal } from '../features/pipeline/ui/ManageColumnsModal.js';

export function createPipelinePage() {
  const store = createStore({
    isManageColumnsModalOpen: false,
    columnsData: [],
    isLoadingColumns: false
  });
  const table = createPipelineTable();
  let unsub, unsubStore;

  async function handlePurge() {
    const confirmed = await ConfirmDialog({
      title: 'Purge Pipeline',
      message: 'Are you sure you want to completely clear the pipeline? This will remove all items and reset statistics.',
      requireText: 'PURGE',
      confirmLabel: 'Purge Data'
    });

    if (confirmed) {
      try {
        await http.post('/api/v1/pipeline/purge');
        pipelineApi.getPipeline({ dedupe: false }); // force refresh
      } catch (err) {
        alert('Error purging pipeline: ' + err.message);
      }
    }
  }

  return {
    mount(onUpdate) {
      unsub = queryCache.subscribe(pipelineKeys.all, () => onUpdate());
      unsubStore = store.subscribe(() => onUpdate());
      pipelineApi.getPipeline(); // Triggers fetch
    },
    unmount() {
      if (unsub) unsub();
      if (unsubStore) unsubStore();
    },
    view() {
      return html`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between">
            <div class="u-flex u-gap-2">
              ${Button({ label: '+ Add Column', variant: 'add', size: 'sm', onClick: () => alert('Add Column') })}
              ${Button({ label: 'Manage Columns', variant: 'secondary', size: 'sm', icon: 'settings', onClick: async () => {
                store.set(s => ({ ...s, isManageColumnsModalOpen: true, isLoadingColumns: true }));
                try {
                  const cols = await http.get('/api/v1/pipeline/columns');
                  store.set(s => ({ ...s, columnsData: cols, isLoadingColumns: false }));
                } catch (e) {
                  alert('Error loading columns: ' + e.message);
                  store.set(s => ({ ...s, isLoadingColumns: false }));
                }
              }})}
              ${Button({ label: 'Sample Service API', variant: 'test', size: 'sm', icon: 'search', onClick: () => alert('Sample API') })}
            </div>
            <div>
              ${Button({ label: 'Purge DB', variant: 'delete', size: 'sm', icon: 'trash', onClick: handlePurge })}
            </div>
            <div class="u-flex u-gap-2">
              <select class="u-text-sm" style="background: var(--color-bg-surface); border: 1px solid var(--color-border); color: var(--color-text); padding: 5px var(--space-3); border-radius: var(--radius-sm); outline: none;"><option>All Stages</option></select>
              <select class="u-text-sm" style="background: var(--color-bg-surface); border: 1px solid var(--color-border); color: var(--color-text); padding: 5px var(--space-3); border-radius: var(--radius-sm); outline: none;"><option>All Statuses</option></select>
            </div>
          </div>
          ${table.view()}
          
          ${store.get().isManageColumnsModalOpen ? createManageColumnsModal(store) : nothing}
        </div>
      `;
    }
  };
}
