import { html, nothing } from 'lit-html';

export function SavedEndpointsList({
  endpoints = {},
  selectedName = '',
  onSelectEndpoint
}) {
  const entries = Object.entries(endpoints);

  return html`
    <div
      class="u-flex u-flex-col"
      style="height: 100%; min-height: 0; background: var(--color-bg-card); border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: var(--space-3); overflow-y: auto;"
    >
      <div class="u-flex u-items-center u-justify-between u-mb-3" style="flex-shrink: 0;">
        <h4 style="margin: 0; color: var(--color-text); font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);">
          Saved Endpoints
        </h4>
        <span class="u-text-2xs u-text-muted u-font-mono">(${entries.length})</span>
      </div>

      <div class="u-flex u-flex-col u-gap-2" style="flex: 1; min-height: 0;">
        ${entries.length === 0 ? html`
          <div class="u-text-xs u-text-muted u-text-center" style="padding: var(--space-4) 0;">
            No saved endpoints for this service.
          </div>
        ` : nothing}

        ${entries.map(([name, ep]) => {
          const isSelected = selectedName === name;
          return html`
            <div
              class="u-flex u-flex-col u-gap-1"
              style="padding: var(--space-2); border-radius: var(--radius-xs); border: 1px solid ${isSelected ? 'var(--color-accent)' : 'var(--color-border)'}; background: ${isSelected ? 'color-mix(in srgb, var(--color-accent) 10%, transparent)' : 'var(--color-bg-surface)'}; cursor: pointer; transition: border-color var(--transition-fast);"
              @click=${() => onSelectEndpoint?.(name, ep)}
            >
              <div class="u-flex u-items-center u-justify-between">
                <strong class="u-font-mono u-text-xs" style="color: ${isSelected ? 'var(--color-accent)' : 'var(--color-text)'};">
                  ${name}
                </strong>
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
