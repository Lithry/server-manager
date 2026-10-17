import { html } from 'lit-html';
import { Button } from '../../../shared/ui/atoms/Button/Button.js';
import { queryCache, http } from '../../../shared/api/index.js';
import { settingsKeys } from '../../settings/api.js';

export function createEnginePanel(store, config = {}, fullSettings = {}) {
  const retention = config.retention_days || 30;
  const globalPoll = config.global_poll_interval_seconds || 300;
  const stages = fullSettings?.stages || [];
  const pipelines = fullSettings?.pipelines || {};

  const stageOverrides = stages.filter(s => s.interval_seconds != null && (s.complete_condition != null || s.start_condition == null));
  const pipelineOverrides = Object.values(pipelines).filter(p => p && p.retention_days != null);

  const handleRestartLoops = async () => {
    try {
      await http.post('/api/v1/settings/scheduler/restart');
      alert('✓ Scheduler stage and custom table loops restarted.');
    } catch (err) {
      alert('✗ Failed to restart scheduler loops: ' + err.message);
    }
  };

  return html`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Storage & Engine Maintenance</h3>
        <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Control default data retention, global stage polling cadence, and inspect per-stage / per-pipeline overrides.</p>
      </div>
      
      <div style="padding: var(--space-4);">
        <div class="form-grid-2 u-mb-4">
          <div class="form-group">
            <label>Default Data Retention (Days)</label>
            <input type="number" class="form-input" min="1" max="3650" .value=${retention} 
              @input=${e => {
                const snapshot = queryCache.read(settingsKeys.all);
                const updated = { ...snapshot.data, retention_days: parseInt(e.target.value, 10) || 30 };
                queryCache.setData(settingsKeys.all, () => updated);
                store.set(s => ({ ...s, isDirty: true }));
              }}>
            <small class="u-text-muted">Sink rows with <code>LAST_UPDATED</code> older than the retention window are pruned during maintenance.</small>
          </div>
          <div class="form-group">
            <label>Global Stage Polling Interval (Seconds)</label>
            <input type="number" class="form-input" min="10" max="86400" .value=${globalPoll}
              @input=${e => {
                const snapshot = queryCache.read(settingsKeys.all);
                const updated = { ...snapshot.data, global_poll_interval_seconds: parseInt(e.target.value, 10) || 300 };
                queryCache.setData(settingsKeys.all, () => updated);
                store.set(s => ({ ...s, isDirty: true }));
              }}>
            <small class="u-text-muted">Default execution cadence for active Root and Consumer stages unless overridden.</small>
          </div>
        </div>

        <div class="form-grid-2 u-mb-4">
          <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
            <div class="u-flex u-justify-between u-items-center u-mb-2">
              <h4 class="u-text-sm u-font-bold u-mb-0" style="color: var(--color-text);">Stage Interval Overrides</h4>
              <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${stageOverrides.length} Overrides</span>
            </div>
            <p class="u-text-xs u-text-muted u-mb-2">Stages with explicit <code>interval_seconds</code> overriding the global cadence.</p>
            ${stageOverrides.length > 0 ? html`
              <div class="u-flex u-flex-col u-gap-1">
                ${stageOverrides.map(st => html`
                  <div class="u-flex u-justify-between u-text-xs u-font-mono" style="padding: 4px 6px; background: var(--color-bg-card); border-radius: 4px; border: 1px solid var(--color-border);">
                    <span>${st.name} (${st.id})</span>
                    <strong style="color: var(--color-accent);">${st.interval_seconds}s</strong>
                  </div>
                `)}
              </div>
            ` : html`<div class="u-text-sm u-text-muted">All active stages inherit global (${globalPoll}s).</div>`}
          </div>

          <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
            <div class="u-flex u-justify-between u-items-center u-mb-2">
              <h4 class="u-text-sm u-font-bold u-mb-0" style="color: var(--color-text);">Pipeline Retention Overrides</h4>
              <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-success) 20%, transparent); color: var(--color-success); padding: 2px 6px; border-radius: 4px;">${pipelineOverrides.length} Overrides</span>
            </div>
            <p class="u-text-xs u-text-muted u-mb-2">Pipelines with custom <code>retention_days</code> overriding global retention.</p>
            ${pipelineOverrides.length > 0 ? html`
              <div class="u-flex u-flex-col u-gap-1">
                ${pipelineOverrides.map(p => html`
                  <div class="u-flex u-justify-between u-text-xs u-font-mono" style="padding: 4px 6px; background: var(--color-bg-card); border-radius: 4px; border: 1px solid var(--color-border);">
                    <span>${p.name} (${p.id})</span>
                    <strong style="color: var(--color-success);">${p.retention_days} days</strong>
                  </div>
                `)}
              </div>
            ` : html`<div class="u-text-sm u-text-muted">All pipelines inherit global (${retention} days).</div>`}
          </div>
        </div>

        <div style="display: grid; gap: var(--space-2); background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px dashed var(--color-border);" class="u-mb-4">
          <div class="u-flex u-justify-between u-items-center">
            <span class="u-text-sm u-font-bold" style="color: var(--color-text-muted);">SQLite Journal Mode:</span>
            <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-success) 20%, transparent); color: var(--color-success); padding: 2px 6px; border-radius: 4px;">WAL (Write-Ahead Logging)</span>
          </div>
          <div class="u-flex u-justify-between u-items-center">
            <span class="u-text-sm u-font-bold" style="color: var(--color-text-muted);">Scheduler Engine:</span>
            <span class="u-font-mono u-text-xs" style="color: var(--color-text);">Active (Per-Stage & Custom Table Loops)</span>
          </div>
        </div>

        ${Button({ label: 'Restart Scheduler Loops', variant: 'execute', size: 'sm', onClick: handleRestartLoops })}
      </div>
    </div>
  `;
}

