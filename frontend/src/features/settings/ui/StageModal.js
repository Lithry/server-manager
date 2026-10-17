import { html, nothing } from 'lit-html';
import { Button } from '../../../shared/ui/atoms/Button/Button.js';
import { Modal } from '../../../shared/ui/organisms/Modal/Modal.js';
import { queryCache, http } from '../../../shared/api/index.js';
import { settingsKeys } from '../api.js';
import { renderServiceListWithScopes, collectServiceMappingScopes } from './ServiceScopeSelector.js';

function formatDateTimeLocal(isoStr) {
  if (!isoStr) return '';
  try {
    const d = new Date(isoStr);
    if (isNaN(d.getTime())) return '';
    const pad = (n) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  } catch { return ''; }
}

async function testStagePredicate(inputId) {
  const exp = (document.getElementById(inputId)?.value || '').trim();
  if (!exp) { alert('Expression is empty!'); return; }
  try {
    const res = await http.post('/api/v1/settings/test-predicate', { expression: exp });
    alert(res.valid ? '✓ Syntax Valid!' : '✗ Syntax Error: ' + res.message);
  } catch (e) { alert('Validation failed: ' + e.message); }
}

export function createStageModal(store) {
  const state = store.get();
  const snapshot = queryCache.read(settingsKeys.all);
  const stages = snapshot?.data?.stages || [];
  const globalPoll = snapshot?.data?.global_poll_interval_seconds || 300;
  const rawPipelines = snapshot?.data?.pipelines || {};
  const pipelinesMap = Object.keys(rawPipelines).length > 0 ? rawPipelines : { default: { id: 'default', name: 'Default Pipeline' } };
  const allPipelineIds = Object.keys(pipelinesMap);
  const servicesData = snapshot?.data?.services || {};
  const allServiceIds = Object.keys(servicesData);
  const editingStage = state.editingStageId ? stages.find(s => s.id === state.editingStageId) : null;

  const isSink = state.stageIsSink ?? (editingStage ? !editingStage.complete_condition : false);
  const isRoot = state.stageIsRoot ?? (editingStage ? !editingStage.start_condition : false);
  const isPassiveSink = !isRoot && isSink;
  const inheritInterval = state.stageInheritInterval ?? (editingStage ? editingStage.interval_seconds == null : true);
  const currentPipelineIds = editingStage?.pipeline_ids?.length ? editingStage.pipeline_ids : ['default'];

  const handleClose = () => {
    store.set(s => ({ ...s, isStageModalOpen: false, stageIsRoot: null, stageIsSink: null, stageInheritInterval: null, editingStageId: null }));
  };

  const handleSave = () => {
    try {
      const stageId = (document.getElementById('stage-id')?.value || '').trim();
      if (!stageId) { alert('Stage ID is required'); return; }

      let lastActivatedAt = null;
      if (isRoot) {
        const rawDateVal = document.getElementById('stage-last-activated')?.value;
        if (rawDateVal) {
          try { lastActivatedAt = new Date(rawDateVal).toISOString(); }
          catch { lastActivatedAt = editingStage?.last_activated_at || null; }
        }
      }

      const selectedPipelines = Array.from(document.querySelectorAll('input[name="stage-pipeline"]:checked')).map(el => el.value);
      const effectivePipelines = selectedPipelines.length > 0 ? selectedPipelines : ['default'];
      const selectedServices = isPassiveSink ? [] : Array.from(document.querySelectorAll('input[name="stage-service"]:checked')).map(el => el.value);
      const serviceMappingScopes = isPassiveSink ? {} : collectServiceMappingScopes(selectedServices, servicesData);

      let intervalSeconds = null;
      if (!isPassiveSink && !inheritInterval) {
        const parsed = parseInt(document.getElementById('stage-interval')?.value || '', 10);
        intervalSeconds = (Number.isFinite(parsed) && parsed >= 10) ? parsed : globalPoll;
      }

      const newStage = {
        id: stageId,
        name: (document.getElementById('stage-name')?.value || '').trim() || stageId,
        description: (document.getElementById('stage-desc')?.value || '').trim(),
        pipeline_ids: effectivePipelines,
        service_ids: selectedServices,
        service_mapping_scopes: serviceMappingScopes,
        interval_seconds: intervalSeconds,
        start_condition: isRoot ? null : (document.getElementById('stage-start')?.value.trim() || null),
        complete_condition: isSink ? null : (document.getElementById('stage-complete')?.value.trim() || null),
        grace_period_minutes: parseInt(document.getElementById('stage-grace')?.value || '0', 10) || 0,
        timeout_minutes: parseInt(document.getElementById('stage-watchdog')?.value || '0', 10) || 0,
        enabled: document.getElementById('chk-stage-enabled')?.checked ?? false,
        order: editingStage ? editingStage.order : stages.length + 1,
        last_activated_at: lastActivatedAt
      };

      const newStages = state.editingStageId
        ? stages.map(s => s.id === state.editingStageId ? newStage : s)
        : [...stages, newStage];

      queryCache.setData(settingsKeys.all, () => ({ ...snapshot.data, stages: newStages }));
      store.set(s => ({ ...s, isDirty: true, isStageModalOpen: false, stageIsRoot: null, stageIsSink: null, stageInheritInterval: null, editingStageId: null }));
    } catch (err) { alert('Error in Save Stage: ' + err.stack); }
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
        <input type="text" id="stage-name" class="form-input" placeholder="Ingestion (Primary Services)" .value=${editingStage?.name || ''}>
      </div>
    </div>

    <div class="form-group u-mb-3">
      <label>Description</label>
      <input type="text" id="stage-desc" class="form-input" placeholder="Primary event arrival and custom field discovery" .value=${editingStage?.description || ''}>
    </div>

    <div class="form-group u-mb-3">
      <label>Assigned Pipelines</label>
      <div class="u-flex u-gap-2" style="flex-wrap: wrap; background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
        ${allPipelineIds.map(pid => html`
          <label class="form-checkbox u-flex u-items-center u-gap-2" style="background: var(--color-bg-card); padding: 4px 10px; border-radius: var(--radius-sm); border: 1px solid var(--color-border); margin: 0; cursor: pointer;">
            <input type="checkbox" name="stage-pipeline" value="${pid}" ?checked=${currentPipelineIds.includes(pid)}>
            <span class="font-mono u-text-xs"><strong>${pipelinesMap[pid]?.name || pid}</strong> (${pid})</span>
          </label>
        `)}
      </div>
      <small class="u-text-muted">Select one or more pipelines where this stage will evaluate and store records.</small>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-stage-root" .checked=${isRoot} @change=${(e) => store.set(s => ({ ...s, stageIsRoot: e.target.checked }))}>
        <label for="chk-stage-root"><strong>Root Entry Stage (Root Producer)</strong> — <code>start_condition IS NULL</code></label>
      </div>
      <p class="u-text-sm u-text-muted u-mb-2">Root stages have no prerequisites and autonomously ingest new rows into assigned pipeline tables.</p>
      
      <div style="display: ${isRoot ? 'none' : 'block'};">
        <label class="form-label u-text-sm">Start Condition Predicate</label>
        <div class="u-flex u-gap-2">
          <input type="text" id="stage-start" class="form-input font-mono" placeholder="stage.ingest.completed AND IS_ANIME == 1" style="flex: 1;" .value=${editingStage?.start_condition || ''}>
          ${Button({ label: 'Test Syntax', variant: 'test', size: 'sm', onClick: () => testStagePredicate('stage-start') })}
        </div>
      </div>

      <div style="display: ${isRoot ? 'block' : 'none'};" class="u-mt-3">
        <label class="form-label u-text-sm"><strong>Historical Event Cutoff (last_activated_at)</strong></label>
        <div class="u-flex u-gap-2" style="align-items: center;">
          <input type="datetime-local" id="stage-last-activated" class="form-input font-mono" style="flex: 1;" .value=${formatDateTimeLocal(editingStage ? editingStage.last_activated_at : (isRoot ? new Date().toISOString() : ''))}>
          ${Button({ label: 'Now', variant: 'secondary', size: 'sm', onClick: () => { const el = document.getElementById('stage-last-activated'); if (el) el.value = formatDateTimeLocal(new Date().toISOString()); }})}
          ${Button({ label: 'Clear', variant: 'secondary', size: 'sm', onClick: () => { const el = document.getElementById('stage-last-activated'); if (el) el.value = ''; }})}
        </div>
      </div>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-stage-sink" .checked=${isSink} @change=${(e) => store.set(s => ({ ...s, stageIsSink: e.target.checked }))}>
        <label for="chk-stage-sink"><strong>Sink Retention Stage</strong> — <code>complete_condition IS NULL</code></label>
      </div>
      <p class="u-text-sm u-text-muted u-mb-2">
        ${isRoot && isSink
          ? html`<strong>Root + Sink Mode:</strong> Actively polls assigned services and ingests items directly into <code>STATUS = 'SINK'</code> for retention monitoring.`
          : html`Downstream Sink stages are <strong>Passive Collectors</strong>: they do not run an active polling loop, receive passive updates by <code>PIPELINE_KEY</code>, and retain items until <code>retention_days</code> expires since <code>LAST_UPDATED</code>.`}
      </p>
      
      <div style="display: ${isSink ? 'none' : 'block'};">
        <label class="form-label u-text-sm"><strong>Complete Condition Predicate (Optional)</strong></label>
        <div class="u-flex u-gap-2">
          <input type="text" id="stage-complete" class="form-input font-mono" placeholder="FILE_PATH is not None" style="flex: 1;" .value=${editingStage?.complete_condition || ''}>
          ${Button({ label: 'Test Syntax', variant: 'test', size: 'sm', onClick: () => testStagePredicate('stage-complete') })}
        </div>
      </div>
    </div>

    ${!isPassiveSink ? html`
      <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
        <div class="form-checkbox u-mb-2">
          <input type="checkbox" id="chk-stage-inherit-interval" .checked=${inheritInterval} @change=${(e) => store.set(s => ({ ...s, stageInheritInterval: e.target.checked }))}>
          <label for="chk-stage-inherit-interval"><strong>Inherit Global Stage Interval</strong> (${globalPoll}s)</label>
        </div>
        <div style="display: ${inheritInterval ? 'none' : 'block'};" class="u-mt-2">
          <label class="form-label u-text-sm">Stage Execution Interval (Seconds)</label>
          <input type="number" id="stage-interval" class="form-input font-mono" min="10" max="86400" .value=${editingStage?.interval_seconds ?? globalPoll}>
          <small class="u-text-muted">All services assigned to this stage are polled on this cycle for their scoped fields.</small>
        </div>
      </div>

      <div class="form-group u-mb-3">
        <label>Assigned Services & Monitored Field Scopes</label>
        ${renderServiceListWithScopes(allServiceIds, servicesData, editingStage)}
        <small class="u-text-muted u-mt-1" style="display: block;">Select services operating in this stage and restrict which mapped columns are evaluated/updated.</small>
      </div>
    ` : nothing}

    <div class="form-grid-2">
      <div class="form-group">
        <label>Grace Period (Minutes)</label>
        <input type="number" id="stage-grace" class="form-input" min="0" max="1440" .value=${editingStage?.grace_period_minutes ?? 10}>
        <small class="u-text-muted">Stability window before marking completed (0 to disable).</small>
      </div>
      <div class="form-group">
        <label>Watchdog Timeout (Minutes)</label>
        <input type="number" id="stage-watchdog" class="form-input" min="0" max="1440" .value=${editingStage?.timeout_minutes ?? 30}>
        <small class="u-text-muted">Emits WARN_PIPELINE_STALLED if exceeded (0 to disable).</small>
      </div>
    </div>

    <div class="form-checkbox u-mt-3">
      <input type="checkbox" id="chk-stage-enabled" ?checked=${editingStage ? editingStage.enabled : true}>
      <label for="chk-stage-enabled"><strong>Enable this stage</strong> (Active in execution pipeline)</label>
    </div>
  `;

  const footer = html`
    <div class="u-flex u-gap-2">
      ${Button({ label: 'Cancel', variant: 'secondary', onClick: handleClose })}
      ${Button({ label: state.editingStageId ? 'Save Changes' : 'Create Stage', variant: 'save', onClick: handleSave })}
    </div>
  `;

  return Modal({ title: 'Configure DAG Stage', size: 'lg', onClose: handleClose, body, footer });
}


