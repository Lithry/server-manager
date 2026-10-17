import { html, nothing } from 'lit-html';
import { Button } from '../../../shared/ui/atoms/Button/Button.js';
import { queryCache } from '../../../shared/api/index.js';
import { settingsKeys } from '../api.js';

export function createPipelinesPanel(store, pipelinesData = {}, stagesData = [], globalRetention = 30) {
  const effectivePipelines = Object.keys(pipelinesData).length > 0
    ? pipelinesData
    : {
        default: {
          id: 'default',
          name: 'Default Pipeline',
          description: 'Primary telemetry pipeline',
          table_name: 'PIPELINE_DEFAULT',
          retention_days: null,
          enabled: true,
          column_order: []
        }
      };

  const pipelineKeys = Object.keys(effectivePipelines);

  const handleAddPipeline = () => {
    store.set(s => ({ ...s, isPipelineModalOpen: true, editingPipelineId: null }));
  };

  const handleDeletePipeline = (key) => {
    if (key === 'default') {
      alert('The default pipeline cannot be deleted.');
      return;
    }
    if (!confirm(`Delete pipeline '${key}' from configuration?`)) return;

    const snapshot = queryCache.read(settingsKeys.all);
    if (!snapshot?.data) return;

    const nextPipelines = { ...(snapshot.data.pipelines || {}) };
    delete nextPipelines[key];

    const nextStages = (snapshot.data.stages || []).map(st => {
      const filteredIds = (st.pipeline_ids || ['default']).filter(pid => pid !== key);
      return {
        ...st,
        pipeline_ids: filteredIds.length > 0 ? filteredIds : ['default']
      };
    });

    queryCache.setData(settingsKeys.all, () => ({
      ...snapshot.data,
      pipelines: nextPipelines,
      stages: nextStages
    }));
    store.set(s => ({ ...s, isDirty: true }));
  };

  const renderPipelineItem = (key, p, isLast) => {
    const resolvedTable = p.table_name || `PIPELINE_${key.toUpperCase().replace(/[^A-Z0-9_]/g, '_')}`;
    const assignedStages = stagesData.filter(st => (st.pipeline_ids || ['default']).includes(key));
    const stageNames = assignedStages.map(st => st.name || st.id).join(', ');

    return html`
      <div style="padding: var(--space-4); border-bottom: ${isLast ? 'none' : '1px solid var(--color-border)'};">
        <div class="u-flex u-items-center u-justify-between u-mb-2">
          <div class="u-flex u-items-center u-gap-3" style="flex-wrap: wrap;">
            <strong style="font-size: 1.1rem; color: var(--color-text);">${p.name || key}</strong>
            <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${key}</span>
            <span class="u-font-mono u-text-xs" style="background: var(--color-bg-subtle); color: var(--color-text-secondary); padding: 2px 6px; border-radius: 4px; border: 1px solid var(--color-border);">TABLE: ${resolvedTable}</span>
            ${p.enabled !== false
              ? html`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-success) 20%, transparent); color: var(--color-success); padding: 2px 6px; border-radius: 4px;">ACTIVE</span>`
              : html`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-text-muted) 20%, transparent); color: var(--color-text-muted); padding: 2px 6px; border-radius: 4px;">DISABLED</span>`
            }
            <span class="u-font-mono u-text-xs" style="color: var(--color-text-secondary); font-weight: 600;">
              ${p.retention_days ? `RETENTION: ${p.retention_days}D (OVERRIDE)` : `RETENTION: GLOBAL (${globalRetention}D)`}
            </span>
          </div>
          <div class="u-flex u-gap-2">
            ${Button({
              label: 'Edit',
              variant: 'ghost',
              size: 'sm',
              onClick: () => store.set(s => ({ ...s, isPipelineModalOpen: true, editingPipelineId: key }))
            })}
            ${Button({
              label: 'Delete',
              variant: 'delete',
              size: 'sm',
              disabled: key === 'default',
              onClick: () => handleDeletePipeline(key)
            })}
          </div>
        </div>
        <div class="u-text-sm u-text-muted u-mb-1">${p.description || 'No description provided.'}</div>
        <div class="u-text-xs u-font-mono u-text-muted">
          Assigned Stages (${assignedStages.length}): <span style="color: var(--color-text);">${stageNames || 'none'}</span>
        </div>
      </div>
    `;
  };

  return html`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Telemetry Pipelines</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Manage isolated pipeline tables, retention lifecycles, and multi-stage routing targets.</p>
        </div>
        ${Button({ label: '+ Add Pipeline', variant: 'add', size: 'sm', onClick: handleAddPipeline })}
      </div>

      <div class="u-flex u-flex-col">
        ${pipelineKeys.map((key, i) => renderPipelineItem(key, effectivePipelines[key], i === pipelineKeys.length - 1))}
      </div>
    </div>
  `;
}
