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
    const activePipelineId = pipelineApi.getCurrentParams().pipeline_id || 'default';
    const confirmed = await ConfirmDialog({
      title: `Purge Pipeline (${activePipelineId})`,
      message: `Are you sure you want to completely clear all rows in pipeline '${activePipelineId}'? This cannot be undone.`,
      requireText: 'PURGE',
      confirmLabel: 'Purge Data'
    });

    if (confirmed) {
      try {
        await pipelineApi.purgePipeline(activePipelineId);
        pipelineApi.getPipeline({ offset: 0 });
      } catch (err) {
        alert('Error purging pipeline: ' + err.message);
      }
    }
  }

  return {
    mount(onUpdate) {
      unsub = queryCache.subscribe(pipelineKeys.all, () => onUpdate());
      unsubStore = store.subscribe(() => onUpdate());
      pipelineApi.getPipeline();
    },
    unmount() {
      if (unsub) unsub();
      if (unsubStore) unsubStore();
    },
    view() {
      const snapshot = queryCache.read(pipelineKeys.all);
      const availablePipelines = snapshot.data?.available_pipelines ?? [];
      const availableStages = snapshot.data?.available_stages ?? [];
      const availableStatuses = snapshot.data?.available_statuses ?? [];
      const currentParams = pipelineApi.getCurrentParams();
      const currentPipelineId = currentParams.pipeline_id || snapshot.data?.pipeline_id || 'default';
      const currentStage = currentParams.stage || '';
      const currentStatus = currentParams.status || '';
      const tableName = snapshot.data?.table_name || `PIPELINE_${currentPipelineId.toUpperCase()}`;
      const activePipelineMeta = availablePipelines.find(p => p.id === currentPipelineId);

      return html`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between" style="flex-wrap: wrap; gap: var(--space-3);">
            <div class="u-flex u-items-center u-gap-2" style="flex-wrap: wrap;">
              <label class="u-text-xs u-font-mono u-text-muted">PIPELINE:</label>
              <select
                class="u-text-sm u-font-mono"
                style="background: var(--color-bg-surface); border: 1px solid var(--color-accent); color: var(--color-text); padding: 5px var(--space-3); border-radius: var(--radius-sm); outline: none; cursor: pointer; font-weight: 600;"
                @change=${(e) => {
                  pipelineApi.getPipeline({ pipeline_id: e.target.value, stage: '', status: '', offset: 0 });
                }}
              >
                ${availablePipelines.length > 0
                  ? availablePipelines.map(p => html`
                      <option value=${p.id} ?selected=${currentPipelineId === p.id}>
                        ${p.name} (${p.id})
                      </option>
                    `)
                  : html`<option value="default" selected>Default Pipeline (default)</option>`}
              </select>
              <span class="u-font-mono u-text-xs" style="background: var(--color-bg-subtle); color: var(--color-text-secondary); padding: 4px 8px; border-radius: 4px; border: 1px solid var(--color-border);">
                TABLE: ${tableName}${activePipelineMeta?.retention_days ? ` | RETENTION: ${activePipelineMeta.retention_days}D` : ''}
              </span>
              ${Button({
                label: 'Manage Columns',
                variant: 'secondary',
                size: 'sm',
                icon: 'settings',
                onClick: async () => {
                  store.set(s => ({ ...s, isManageColumnsModalOpen: true, isLoadingColumns: true }));
                  try {
                    const cols = await pipelineApi.getColumns(currentPipelineId);
                    store.set(s => ({ ...s, columnsData: cols, isLoadingColumns: false }));
                  } catch (e) {
                    alert('Error loading columns: ' + e.message);
                    store.set(s => ({ ...s, isLoadingColumns: false }));
                  }
                }
              })}
              ${Button({
                label: 'Configure Mappings & Stages',
                variant: 'ghost',
                size: 'sm',
                onClick: () => { window.location.hash = '#/settings'; }
              })}
            </div>

            <div class="u-flex u-items-center u-gap-2" style="flex-wrap: wrap;">
              <select
                class="u-text-sm"
                style="background: var(--color-bg-surface); border: 1px solid var(--color-border); color: var(--color-text); padding: 5px var(--space-3); border-radius: var(--radius-sm); outline: none; cursor: pointer;"
                @change=${(e) => {
                  pipelineApi.getPipeline({ stage: e.target.value, offset: 0 });
                }}
              >
                <option value="" ?selected=${!currentStage}>All Stages</option>
                ${availableStages.map(s => html`
                  <option value=${s.id} ?selected=${currentStage === s.id}>${s.name || s.id}</option>
                `)}
              </select>
              <select
                class="u-text-sm"
                style="background: var(--color-bg-surface); border: 1px solid var(--color-border); color: var(--color-text); padding: 5px var(--space-3); border-radius: var(--radius-sm); outline: none; cursor: pointer;"
                @change=${(e) => {
                  pipelineApi.getPipeline({ status: e.target.value, offset: 0 });
                }}
              >
                <option value="" ?selected=${!currentStatus}>All Statuses</option>
                ${availableStatuses.map(st => html`
                  <option value=${st} ?selected=${currentStatus === st}>${st}</option>
                `)}
              </select>
              ${Button({
                label: 'Sync Now',
                variant: 'secondary',
                size: 'sm',
                icon: 'refresh',
                onClick: async () => {
                  try {
                    await http.post('/api/v1/settings/scheduler/restart');
                    setTimeout(() => pipelineApi.getPipeline({ offset: 0 }), 1200);
                  } catch (err) {
                    alert('Error triggering sync: ' + err.message);
                  }
                }
              })}
              ${Button({ label: 'Purge DB', variant: 'delete', size: 'sm', icon: 'trash', onClick: handlePurge })}
            </div>
          </div>
          ${table.view()}
          
          ${store.get().isManageColumnsModalOpen ? createManageColumnsModal(store) : nothing}
        </div>
      `;
    }
  };
}

