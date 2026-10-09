import { html } from 'lit-html';
import { Button } from '../../../shared/ui/atoms/Button/Button.js';
import { createStore } from '../../../shared/lib/lib.js';
import { Modal } from '../../../shared/ui/organisms/Modal/Modal.js';

// Local state for the modal to handle sink/root toggles
const localStore = createStore({ isSink: false, isRoot: false });

export function createStageModal(store) {
  const state = store.get();
  const isSink = state.stageIsSink || false;
  const isRoot = state.stageIsRoot || false;
  
  const handleClose = () => {
    store.set(s => ({ ...s, isStageModalOpen: false, stageIsRoot: false, stageIsSink: false }));
  };

  const body = html`
    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Stage Semantic Slug (ID)</label>
        <input type="text" class="form-input font-mono" placeholder="ingest, recognition, library" autocomplete="off" @input=${(e) => { e.target.value = e.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, ''); }}>
        <small class="u-text-muted">Unique key used in predicates (e.g. <code>stage.ingest.completed</code>).</small>
      </div>
      <div class="form-group">
        <label>Display Name</label>
        <input type="text" class="form-input" placeholder="Ingestion (Sonarr / Radarr)">
      </div>
    </div>

    <div class="form-group u-mb-3">
      <label>Description</label>
      <input type="text" class="form-input" placeholder="Primary file arrival and tag discovery">
    </div>

    <div class="form-group u-mb-3">
      <label>Assigned Services</label>
      <div class="services-checkbox-grid" style="display: flex; gap: var(--space-3); flex-wrap: wrap; background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
        <span class="u-text-muted u-text-sm">Mock services selection...</span>
      </div>
      <small class="u-text-muted">Select services operating within this pipeline stage.</small>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-stage-root" .checked=${isRoot} @change=${(e) => store.set(s => ({...s, stageIsRoot: e.target.checked}))}>
        <label for="chk-stage-root"><strong>Root Entry Stage (Root Producer)</strong> — <code>start_condition IS NULL</code></label>
      </div>
      <p class="u-text-sm u-text-muted u-mb-2">Root stages have no prerequisites and can autonomously create new rows in <code>SERVICES_PIPELINE</code>.</p>
      
      <div style="display: ${isRoot ? 'none' : 'block'};">
        <label class="form-label u-text-sm">Start Condition Predicate</label>
        <div class="u-flex u-gap-2">
          <input type="text" class="form-input font-mono" placeholder="stage.ingest.completed AND IS_ANIME == 1" style="flex: 1;">
          ${Button({ label: 'Test Syntax', variant: 'test', size: 'sm' })}
        </div>
      </div>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-stage-sink" .checked=${isSink} @change=${(e) => store.set(s => ({...s, stageIsSink: e.target.checked}))}>
        <label for="chk-stage-sink"><strong>Sink Collector Stage (Final)</strong> — <code>complete_condition IS NULL</code></label>
      </div>
      <p class="u-text-sm u-text-muted u-mb-2">Sink stages never "complete" in the DAG; they collect items at the end of the pipeline.</p>
      
      <div style="display: ${isSink ? 'none' : 'block'};">
        <label class="form-label u-text-sm"><strong>Complete Condition Predicate (Optional)</strong></label>
        <p class="u-text-sm u-text-muted u-mb-2">Evaluated to determine if this stage has finished processing the item. Leave empty to complete immediately upon mapping.</p>
        <div class="u-flex u-gap-2">
          <input type="text" class="form-input font-mono" placeholder="FILE_PATH is not None" style="flex: 1;">
          ${Button({ label: 'Test Syntax', variant: 'test', size: 'sm' })}
        </div>
      </div>
    </div>

    <div class="form-grid-2">
      <div class="form-group">
        <label>Grace Period (Minutes)</label>
        <input type="number" class="form-input" min="0" max="1440" value="10">
        <small class="u-text-muted">Stability window before marking completed (0 to disable).</small>
      </div>
      <div class="form-group">
        <label>Watchdog Timeout (Minutes)</label>
        <input type="number" class="form-input" min="0" max="1440" value="30">
        <small class="u-text-muted">Emits WARN_PIPELINE_STALLED if exceeded (0 to disable).</small>
      </div>
    </div>

    <div class="form-checkbox u-mt-3">
      <input type="checkbox" id="chk-stage-enabled">
      <label for="chk-stage-enabled"><strong>Enable this stage</strong> (Active in execution pipeline)</label>
    </div>
  `;

  const footer = html`
    <div class="u-flex u-gap-2">
      ${Button({ label: 'Cancel', variant: 'secondary', onClick: handleClose })}
      ${Button({ label: 'Save Stage', variant: 'save', onClick: () => alert('Save Stage') })}
    </div>
  `;

  return Modal({
    title: 'Configure DAG Stage',
    size: 'lg',
    onClose: handleClose,
    body,
    footer
  });
}
