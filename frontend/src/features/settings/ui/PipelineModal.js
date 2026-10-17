import { html } from 'lit-html';
import { Button } from '../../../shared/ui/atoms/Button/Button.js';
import { Modal } from '../../../shared/ui/organisms/Modal/Modal.js';
import { queryCache } from '../../../shared/api/index.js';
import { settingsKeys } from '../api.js';

export function createPipelineModal(store) {
  const state = store.get();
  const snapshot = queryCache.read(settingsKeys.all);
  const pipelines = snapshot?.data?.pipelines || {};
  const globalRetention = snapshot?.data?.retention_days || 30;
  const editingId = state.editingPipelineId;
  const editingPipeline = editingId ? pipelines[editingId] : null;

  const inheritRetention = state.pipelineInheritRetention ?? (editingPipeline ? editingPipeline.retention_days == null : true);

  const handleClose = () => {
    store.set(s => ({
      ...s,
      isPipelineModalOpen: false,
      editingPipelineId: null,
      pipelineInheritRetention: null
    }));
  };

  const handleSave = () => {
    const rawId = (document.getElementById('pipeline-id')?.value || '').trim().toLowerCase().replace(/[^a-z0-9_-]/g, '');
    if (!rawId) {
      alert('Pipeline ID is required.');
      return;
    }

    const name = (document.getElementById('pipeline-name')?.value || '').trim() || rawId;
    const description = (document.getElementById('pipeline-desc')?.value || '').trim();
    const isInherit = document.getElementById('chk-pipeline-inherit-retention')?.checked ?? true;
    const customRetention = parseInt(document.getElementById('pipeline-retention')?.value || '', 10);
    const retentionDays = isInherit ? null : (Number.isFinite(customRetention) && customRetention >= 1 ? customRetention : globalRetention);
    const enabled = document.getElementById('chk-pipeline-enabled')?.checked ?? true;

    const sanitizedTable = `PIPELINE_${rawId.toUpperCase().replace(/[^A-Z0-9_]/g, '_')}`;

    const nextPipeline = {
      id: rawId,
      name,
      description,
      table_name: editingPipeline?.table_name || sanitizedTable,
      retention_days: retentionDays,
      enabled,
      column_order: editingPipeline?.column_order || []
    };

    const nextPipelines = {
      default: pipelines.default || {
        id: 'default',
        name: 'Default Pipeline',
        description: 'Primary telemetry pipeline',
        table_name: 'PIPELINE_DEFAULT',
        retention_days: null,
        enabled: true,
        column_order: []
      },
      ...pipelines,
      [rawId]: nextPipeline
    };

    if (editingId && editingId !== rawId && editingId !== 'default') {
      delete nextPipelines[editingId];
    }

    queryCache.setData(settingsKeys.all, () => ({
      ...snapshot.data,
      pipelines: nextPipelines
    }));

    store.set(s => ({
      ...s,
      isDirty: true,
      isPipelineModalOpen: false,
      editingPipelineId: null,
      pipelineInheritRetention: null
    }));
  };

  const body = html`
    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Pipeline ID (Slug)</label>
        <input
          type="text"
          id="pipeline-id"
          class="form-input font-mono"
          placeholder="default, media, security"
          autocomplete="off"
          .value=${editingPipeline?.id || editingId || ''}
          ?disabled=${!!editingId}
          @input=${(e) => { e.target.value = e.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, ''); }}
        >
        <small class="u-text-muted">Creates SQLite table <code>PIPELINE_&lt;SLUG&gt;</code> automatically on save.</small>
      </div>
      <div class="form-group">
        <label>Display Name</label>
        <input
          type="text"
          id="pipeline-name"
          class="form-input"
          placeholder="Media Ingestion Pipeline"
          .value=${editingPipeline?.name || ''}
        >
      </div>
    </div>

    <div class="form-group u-mb-3">
      <label>Description</label>
      <input
        type="text"
        id="pipeline-desc"
        class="form-input"
        placeholder="Tracks arrival, recognition, and library indexing for media events"
        .value=${editingPipeline?.description || ''}
      >
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input
          type="checkbox"
          id="chk-pipeline-inherit-retention"
          .checked=${inheritRetention}
          @change=${(e) => store.set(s => ({ ...s, pipelineInheritRetention: e.target.checked }))}
        >
        <label for="chk-pipeline-inherit-retention">
          <strong>Inherit Global Data Retention</strong> (${globalRetention} days)
        </label>
      </div>
      <div style="display: ${inheritRetention ? 'none' : 'block'};" class="u-mt-2">
        <label class="form-label u-text-sm">Custom Retention Window (Days)</label>
        <input
          type="number"
          id="pipeline-retention"
          class="form-input font-mono"
          min="1"
          max="3650"
          .value=${editingPipeline?.retention_days ?? globalRetention}
        >
        <small class="u-text-muted">Only rows in <code>STATUS = 'SINK'</code> with <code>LAST_UPDATED</code> older than this window are pruned.</small>
      </div>
    </div>

    <div class="form-checkbox">
      <input
        type="checkbox"
        id="chk-pipeline-enabled"
        .checked=${editingPipeline ? editingPipeline.enabled !== false : true}
      >
      <label for="chk-pipeline-enabled"><strong>Enable this pipeline</strong> (Active for stage ingestion and evaluation)</label>
    </div>
  `;

  const footer = html`
    <div class="u-flex u-gap-2">
      ${Button({ label: 'Cancel', variant: 'secondary', onClick: handleClose })}
      ${Button({ label: editingId ? 'Save Pipeline' : 'Create Pipeline', variant: 'save', onClick: handleSave })}
    </div>
  `;

  return Modal({
    title: editingId ? `Edit Pipeline (${editingId})` : 'Create Telemetry Pipeline',
    size: 'md',
    onClose: handleClose,
    body,
    footer
  });
}
