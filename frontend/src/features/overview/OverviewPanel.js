import { html } from 'lit-html';
import { overviewApi, overviewKeys } from './api.js';
import { queryCache } from '../../shared/api/index.js';
import { Icon } from '../../shared/ui/atoms/Icon/Icon.js';

export function createOverviewPanel() {
  return {
    view() {
      const { status, data, error } = queryCache.read(overviewKeys.all);
      if (status === 'error') return html`<div class="u-text-danger">${error.message}</div>`;
      if (status === 'loading' || !data) return html`<div style="color: var(--color-text-muted);">Cargando resumen...</div>`;

      const pipelineItems = data.pipeline_total_items || 0;
      const activeIncidents = data.active_incidents || 0;
      const activeServices = data.registered_services || 0;
      const gitBranch = data.telemetry?.branch || 'main';
      const isClean = data.telemetry?.clean !== false;

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
          <!-- Top row: 4 stat cards -->
          <div class="u-flex u-gap-4" style="flex-wrap: wrap;">
            ${statCard('Pipeline Items', pipelineItems, 'Items tracked in universal pipeline', 'package', 'u-text-accent')}
            ${statCard('Active Incidents', activeIncidents, activeIncidents > 0 ? `${activeIncidents} critical anomalies` : '0 critical anomalies', 'alert', activeIncidents > 0 ? 'u-text-danger' : 'u-text-danger')}
            ${statCard('Active Services', activeServices, 'Configured upstream services', 'play', 'u-text-success')}
            ${statCard('GitOps Status', gitBranch, isClean ? 'Tree is clean' : 'Local changes detected', 'git-branch', 'u-text-accent')}
          </div>
          
          <!-- Bottom row: 2 panels -->
          <div class="u-flex u-gap-4" style="flex-wrap: wrap;">
            <!-- Left panel: Recent Incidents -->
            <div style="background: var(--color-bg-card); padding: var(--space-4); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; min-width: 300px;">
              <div class="u-flex u-items-center u-justify-between u-mb-4">
                <h3 style="margin: 0; font-size: 1.1rem;">Recent System Incidents</h3>
                <a href="#/incidents" class="u-text-sm u-text-accent" style="text-decoration: none;">View All</a>
              </div>
              <div style="background: var(--color-bg-surface); border: 1px dashed var(--color-border); border-radius: var(--radius-md); padding: var(--space-6); text-align: center; color: var(--color-text-muted);">
                ✓ No active incidents. All telemetry nominal.
              </div>
            </div>

            <!-- Right panel: Pipeline Stages -->
            <div style="background: var(--color-bg-card); padding: var(--space-4); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; min-width: 300px;">
              <div class="u-flex u-items-center u-justify-between u-mb-4">
                <h3 style="margin: 0; font-size: 1.1rem;">Services Pipeline Stages</h3>
                <a href="#/pipeline" class="u-text-sm u-text-accent" style="text-decoration: none;">Open Pipeline</a>
              </div>
              <div class="u-flex u-flex-col u-gap-2">
                ${data.stages?.length ? data.stages.map(s => html`
                  <div style="background: var(--color-bg-surface); padding: var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--color-border); display: grid; grid-template-columns: 1fr auto 1fr; align-items: center;">
                    <div class="u-flex u-items-center">
                      <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${s.id}</span>
                    </div>
                    <div class="u-text-center">
                      <span class="u-text-sm"><strong>${s.name}</strong> <span class="u-text-muted">(${s.service_ids.join(', ')})</span></span>
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
