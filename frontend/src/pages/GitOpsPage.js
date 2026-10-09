import { html, nothing } from 'lit-html';
import { gitopsApi, gitopsKeys } from '../features/gitops/api.js';
import { queryCache } from '../shared/api/index.js';
import { Button } from '../shared/ui/atoms/Button/Button.js';
import { ConsoleOutput } from '../shared/ui/organisms/ConsoleOutput/ConsoleOutput.js';

export function createGitOpsPage() {
  let unsub;

  return {
    mount(onUpdate) {
      unsub = queryCache.subscribe(gitopsKeys.all, () => onUpdate());
      gitopsApi.getGitOps();
    },
    unmount() { if (unsub) unsub(); },
    view() {
      const snapshot = queryCache.read(gitopsKeys.all);
      const { status, data, error, isFetching } = snapshot;

      if (status === 'loading' && !data) {
        return html`<p class="u-text-muted">Loading GitOps status...</p>`;
      }
      if (status === 'error' && !data) {
        return html`<p class="u-text-danger">Error: ${error?.message}</p>`;
      }

      const telemetry = data?.telemetry || {};

      return html`
        <div class="u-flex u-flex-col u-gap-4">

          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); overflow: hidden;">
            
            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">Host Repository Mount (${telemetry.path}:ro)</h3>
              <span class="u-font-mono u-text-xs u-text-bold" style="letter-spacing: 0.05em;">${telemetry.mounted ? 'MOUNTED' : 'NOT MOUNTED'}</span>
            </div>

            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--color-border);">
              <span class="u-text-muted u-text-sm">Current Branch:</span>
              <span class="u-font-mono u-text-accent u-text-sm">${telemetry.branch || 'N/A'}</span>
            </div>

            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--color-border);">
              <span class="u-text-muted u-text-sm">Active Commit:</span>
              <span class="u-font-mono u-text-sm">${telemetry.short_commit || 'N/A'} <span class="u-text-muted">(${telemetry.commit || 'N/A'})</span></span>
            </div>

            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--color-border);">
              <span class="u-text-muted u-text-sm">Working Tree Status:</span>
              <span class="u-text-sm ${telemetry.clean ? 'u-text-success' : 'u-text-danger'}">${telemetry.clean ? '✓ Clean' : 'x Dirty'}</span>
            </div>

            <div class="u-flex u-items-start u-justify-between u-gap-4" style="padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--color-border);">
              <span class="u-text-muted u-text-sm" style="white-space: nowrap;">Last Commit<br>Subject:</span>
              <span class="u-text-sm u-text-right">${telemetry.last_commit || 'N/A'}</span>
            </div>

            <div style="background: color-mix(in srgb, var(--color-info) 10%, transparent); padding: var(--space-3) var(--space-4); color: var(--color-info);" class="u-text-sm">
              <strong>GitOps Protocol:</strong> ServerManager container observes host repo in read-only mode (:ro). Deployment is managed via cubi-deploy or Git on host.
            </div>

          </div>
        </div>
      `;
    }
  };
}
