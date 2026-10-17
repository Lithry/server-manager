import { html, nothing } from 'lit-html';

export function SavedEndpointsList({
  endpoints = {},
  activeEndpoints = [],
  onToggleEndpoint
}) {
  const entries = Object.entries(endpoints);
  const activeSet = activeEndpoints instanceof Set
    ? activeEndpoints
    : new Set(
        Array.isArray(activeEndpoints)
          ? activeEndpoints.map((l) => String(l || '').trim()).filter(Boolean)
          : String(activeEndpoints || '')
              .split('\n')
              .map((l) => l.trim())
              .filter(Boolean)
      );

  const activeCount = entries.filter(([_, ep]) => activeSet.has(String(ep || '').trim())).length;

  return html`
    <div
      class="u-flex u-flex-col"
      style="height: 100%; min-height: 0; background: var(--color-bg-card); border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: var(--space-3); overflow-y: auto;"
    >
      <div class="u-flex u-items-center u-justify-between u-mb-3" style="flex-shrink: 0;">
        <h4 style="margin: 0; color: var(--color-text); font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);">
          Saved Endpoints
        </h4>
        <span class="u-text-2xs u-text-muted u-font-mono">${activeCount}/${entries.length}</span>
      </div>

      <div class="u-flex u-flex-col u-gap-2" style="flex: 1; min-height: 0;">
        ${entries.length === 0 ? html`
          <div class="u-text-xs u-text-muted u-text-center" style="padding: var(--space-4) 0;">
            No saved endpoints for this service.
          </div>
        ` : nothing}

        ${entries.map(([name, ep]) => {
          const trimmedEp = String(ep || '').trim();
          const isActive = activeSet.has(trimmedEp);
          return html`
            <div
              class="u-flex u-flex-col u-gap-1"
              style="padding: var(--space-2); border-radius: var(--radius-xs); border: 1px solid ${isActive ? 'var(--color-accent)' : 'var(--color-border)'}; background: ${isActive ? 'color-mix(in srgb, var(--color-accent) 12%, transparent)' : 'var(--color-bg-surface)'}; cursor: pointer; transition: all var(--transition-fast);"
              @click=${() => onToggleEndpoint?.(name, trimmedEp)}
            >
              <div class="u-flex u-items-center u-justify-between">
                <strong class="u-font-mono u-text-xs" style="color: ${isActive ? 'var(--color-accent)' : 'var(--color-text)'};">
                  ${name}
                </strong>
                <span
                  class="u-font-mono u-text-2xs"
                  style="padding: 1px 6px; border-radius: var(--radius-xs); font-size: 0.65rem; font-weight: var(--font-weight-medium); ${isActive ? 'background: var(--color-accent); color: #fff;' : 'background: var(--color-bg-base); color: var(--color-text-muted); border: 1px solid var(--color-border);'}"
                >
                  ${isActive ? 'ON' : 'OFF'}
                </span>
              </div>
              <div
                class="u-font-mono u-text-2xs u-text-muted u-truncate"
                title=${ep}
              >
                ${ep}
              </div>
            </div>
          `;
        })}
      </div>
    </div>
  `;
}
