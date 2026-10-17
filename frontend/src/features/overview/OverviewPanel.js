import { html } from 'lit-html';
import { overviewKeys } from './api.js';
import { queryCache } from '../../shared/api/index.js';
import { Icon } from '../../shared/ui/atoms/Icon/Icon.js';

export function createOverviewPanel() {
  return {
    view() {
      const { status, data, error } = queryCache.read(overviewKeys.all);
      if (status === 'error') return html`<div class="u-text-danger">${error.message}</div>`;
      if (status === 'loading' || !data) return html`<div style="color: var(--color-text-muted);">Loading overview...</div>`;

      const pipelineItems = data.pipeline_total_items || 0;
      const activeIncidents = data.active_incidents || 0;
      const criticalIncidents = data.critical_incidents || 0;
      const activeServices = data.registered_services || 0;
      const pipelinesList = data.pipelines || [];
      const gitBranch = data.gitops?.branch || 'main';
      const isClean = data.gitops?.clean !== false;

      const statCard = (title, value, subtitle, iconName, colorClass = 'u-text-accent') => html`
        <div style="background: var(--color-bg-card); padding: var(--space-4); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; min-width: 200px; display: flex; flex-direction: column; justify-content: space-between;">
          <div class="u-flex u-items-center u-justify-between">
            <span class="u-text-sm u-text-muted">${title}</span>
            <span class="${colorClass}">${Icon({ name: iconName, size: 18 })}</span>
          </div>
          <div>
            <div class="u-font-mono ${colorClass}" style="font-size: 1.75rem; font-weight: bold; line-height: 1; margin: var(--space-3) 0;">${value}</div>
            <div class="u-text-xs u-text-muted u-truncate" title=${subtitle}>${subtitle}</div>
          </div>
        </div>
      `;

      return html`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-gap-4" style="flex-wrap: wrap;">
            ${statCard('Pipeline Items', pipelineItems, `Across ${pipelinesList.length || 1} pipeline table(s)`, 'package', 'u-text-accent')}
            ${statCard('Active Incidents', activeIncidents, `${criticalIncidents} critical anomalies`, 'alert', activeIncidents > 0 ? 'u-text-danger' : 'u-text-success')}
            ${statCard('Active Services', activeServices, 'Configured upstream services', 'play', 'u-text-success')}
            ${statCard('GitOps Status', gitBranch, isClean ? 'Tree is clean' : 'Local changes detected', 'git-branch', 'u-text-accent')}
          </div>
          
          <div class="u-flex u-gap-4" style="flex-wrap: wrap;">
            <div style="background: var(--color-bg-card); padding: var(--space-4); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; min-width: 300px;">
              <div class="u-flex u-items-center u-justify-between u-mb-4">
                <h3 style="margin: 0; font-size: 1.1rem;">Telemetry Pipelines & Health</h3>
                <a href="#/incidents" class="u-text-sm u-text-accent" style="text-decoration: none;">View Incidents</a>
              </div>
              <div style="background: var(--color-bg-surface); border: 1px dashed var(--color-border); border-radius: var(--radius-md); padding: var(--space-3); text-align: center; color: ${activeIncidents > 0 ? 'var(--color-danger)' : 'var(--color-text-muted)'};" class="u-mb-3 u-text-sm">
                ${activeIncidents > 0
                  ? `! ${activeIncidents} active incident(s) (${criticalIncidents} critical). Check System Incidents.`
                  : '✓ No active incidents. All telemetry nominal.'}
              </div>
              <div class="u-flex u-flex-col u-gap-2">
                ${pipelinesList.map(p => html`
                  <div style="background: var(--color-bg-surface); padding: var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--color-border);" class="u-flex u-items-center u-justify-between">
                    <div>
                      <strong class="u-text-sm">${p.name}</strong>
                      <span class="u-font-mono u-text-xs u-text-muted u-ml-2">(${p.table_name})</span>
                    </div>
                    <div class="u-font-mono u-text-xs">
                      <span style="color: var(--color-accent); font-weight: bold;">${p.total_items} items</span>
                      <span class="u-text-muted"> | ${p.completed_or_sink_items} completed/sink</span>
                    </div>
                  </div>
                `)}
              </div>
            </div>

            <div style="background: var(--color-bg-card); padding: var(--space-4); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; min-width: 300px;">
              <div class="u-flex u-items-center u-justify-between u-mb-4">
                <h3 style="margin: 0; font-size: 1.1rem;">DAG Pipeline Stages</h3>
                <a href="#/pipeline" class="u-text-sm u-text-accent" style="text-decoration: none;">Open Pipeline</a>
              </div>
              <div class="u-flex u-flex-col u-gap-2">
                ${data.stages?.length ? data.stages.map(s => html`
                  <div style="background: var(--color-bg-surface); padding: var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--color-border); display: grid; grid-template-columns: auto 1fr auto; gap: var(--space-3); align-items: center;">
                    <div class="u-flex u-items-center u-gap-2">
                      <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${s.id}</span>
                    </div>
                    <div>
                      <div class="u-text-sm"><strong>${s.name}</strong> <span class="u-text-xs u-text-muted">(${(s.service_ids || []).join(', ') || 'passive'})</span></div>
                      <div class="u-font-mono u-text-xs u-text-muted">
                        Pipelines: ${(s.pipeline_ids || ['default']).join(', ')}${s.interval_seconds ? ` | ${s.interval_seconds}s` : ''}
                      </div>
                    </div>
                    <div style="text-align: right;">
                      ${s.enabled ? html`<span class="u-text-xs u-text-success">Active</span>` : html`<span class="u-text-xs u-text-muted">Inactive</span>`}
                    </div>
                  </div>
                `) : html`<div class="u-text-muted u-text-center u-mt-4">No stages configured.</div>`}
              </div>
            </div>
          </div>
        </div>
      `;
    }
  };
}

