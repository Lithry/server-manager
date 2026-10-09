import { html } from 'lit-html';
import { Button } from '../../../shared/ui/atoms/Button/Button.js';
import { createStore } from '../../../shared/lib/lib.js';
import { Modal } from '../../../shared/ui/organisms/Modal/Modal.js';
import { queryCache } from '../../../shared/api/index.js';
import { settingsKeys } from '../api.js';

// Local state for the modal to handle sink/root toggles
const localStore = createStore({ isSink: false, isRoot: false });

export function createStageModal(store) {
  const state = store.get();
  const snapshot = queryCache.read(settingsKeys.all);
  const stages = snapshot?.data?.stages || [];
  const editingStage = state.editingStageId ? stages.find(s => s.id === state.editingStageId) : null;
  
  // Initialize local toggles only once when opening
  const isSink = state.stageIsSink ?? (editingStage ? !editingStage.complete_condition : false);
  const isRoot = state.stageIsRoot ?? (editingStage ? !editingStage.start_condition : false);
  
  const handleClose = () => {
    store.set(s => ({ ...s, isStageModalOpen: false, stageIsRoot: null, stageIsSink: null, editingStageId: null }));
  };

  const handleSave = () => {
    const stageId = document.getElementById('stage-id').value.trim();
    if (!stageId) { alert('Stage ID is required'); return; }
    
    const newStage = {
      id: stageId,
      name: document.getElementById('stage-name').value.trim() || stageId,
      description: document.getElementById('stage-desc').value.trim(),
      services: [], // Mocked for now
      start_condition: isRoot ? null : (document.getElementById('stage-start')?.value.trim() || null),
      complete_condition: isSink ? null : (document.getElementById('stage-complete')?.value.trim() || null),
      grace_period_minutes: parseInt(document.getElementById('stage-grace').value) || 0,
      watchdog_timeout_minutes: parseInt(document.getElementById('stage-watchdog').value) || 0
    };
    
    let newStages = [...stages];
    if (state.editingStageId) {
      newStages = newStages.map(s => s.id === state.editingStageId ? newStage : s);
    } else {
      newStages.push(newStage);
    }
    
    queryCache.set(settingsKeys.all, { ...snapshot.data, stages: newStages });
    store.set(s => ({ ...s, isDirty: true, isStageModalOpen: false, stageIsRoot: null, stageIsSink: null, editingStageId: null }));
  };

  const body = html`
    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Stage Semantic Slug (ID)</label>
        <input type="text" id="stage-id" class="form-input font-mono" placeholder="ingest, recognition, library" autocomplete="off" .value=${editingStage?.id || ''} ?disabled=${!!editingStage} @input=${(e) => { e.target.value = e.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, ''); }}>
        <small class="u-text-muted">Unique key used in predicates (e.g. <code>stage.ingest.completed</code>).</small>
      </div>
      <div class="form-group">
        <label>Display Name</label>
        <input type="text" id="stage-name" class="form-input" placeholder="Ingestion (Sonarr / Radarr)" .value=${editingStage?.name || ''}>
      </div>
    </div>

    <div class="form-group u-mb-3">
      <label>Description</label>
      <input type="text" id="stage-desc" class="form-input" placeholder="Primary file arrival and tag discovery" .value=${editingStage?.description || ''}>
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
          <input type="text" id="stage-start" class="form-input font-mono" placeholder="stage.ingest.completed AND IS_ANIME == 1" style="flex: 1;" .value=${editingStage?.start_condition || ''}>
          ${Button({ label: 'Test Syntax', variant: 'test', size: 'sm', onClick: () => alert('Syntax valid!') })}
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
          <input type="text" id="stage-complete" class="form-input font-mono" placeholder="FILE_PATH is not None" style="flex: 1;" .value=${editingStage?.complete_condition || ''}>
          ${Button({ label: 'Test Syntax', variant: 'test', size: 'sm', onClick: () => alert('Syntax valid!') })}
        </div>
      </div>
    </div>

    <div class="form-grid-2">
      <div class="form-group">
        <label>Grace Period (Minutes)</label>
        <input type="number" id="stage-grace" class="form-input" min="0" max="1440" .value=${editingStage?.grace_period_minutes ?? 10}>
        <small class="u-text-muted">Stability window before marking completed (0 to disable).</small>
      </div>
      <div class="form-group">
        <label>Watchdog Timeout (Minutes)</label>
        <input type="number" id="stage-watchdog" class="form-input" min="0" max="1440" .value=${editingStage?.watchdog_timeout_minutes ?? 30}>
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
      ${Button({ label: state.editingStageId ? 'Save Changes' : 'Create Stage', variant: 'save', onClick: handleSave })}
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
