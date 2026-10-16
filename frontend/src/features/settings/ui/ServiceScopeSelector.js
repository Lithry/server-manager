import { html, nothing } from 'lit-html';
import { Button } from '../../../shared/ui/atoms/Button/Button.js';

function updateScopeStatus(sid, total) {
  const checked = document.querySelectorAll(`.stage-scope-col-${sid}:checked`).length;
  const statusEl = document.getElementById(`stage-scope-status-${sid}`);
  if (!statusEl) return;
  const text = (checked > 0 && checked < total) ? `(${checked} of ${total} active)` : '(All fields active by default)';
  statusEl.setAttribute('data-status', text);
}

export function renderServiceListWithScopes(allServiceIds, servicesData, editingStage) {
  if (!allServiceIds || allServiceIds.length === 0) {
    return html`<span class="u-text-muted u-text-sm">No services configured.</span>`;
  }

  const stageScopes = editingStage?.service_mapping_scopes || {};

  return html`
    <style>
      .stage-scope-status-badge::after {
        content: attr(data-status);
      }
    </style>
    <div class="u-flex u-flex-col u-gap-3">
      ${allServiceIds.map((sid) => {
        const isServiceAssigned = editingStage?.service_ids?.includes(sid) ?? false;
        const mappings = servicesData[sid]?.field_mappings || [];
        const currentServiceScopes = stageScopes[sid] || [];
        const isCustomScoped = Array.isArray(currentServiceScopes) && currentServiceScopes.length > 0 && currentServiceScopes.length < mappings.length;
        const initialStatus = isCustomScoped
          ? `(${currentServiceScopes.length} of ${mappings.length} active)`
          : '(All fields active by default)';

        return html`
          <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
            <div class="u-flex u-items-center u-justify-between">
              <label class="form-checkbox" style="cursor: pointer; margin: 0;">
                <input type="checkbox" name="stage-service" value="${sid}" ?checked=${isServiceAssigned}>
                <span class="u-text-sm font-mono" style="font-weight: 600;">${sid}</span>
              </label>
              ${mappings.length > 0
                ? html`<span class="u-text-xs u-text-muted font-mono stage-scope-status-badge" id="stage-scope-status-${sid}" data-status="${initialStatus}"></span>`
                : nothing}
            </div>

            ${mappings.length > 0 ? html`
              <details ?open=${isCustomScoped} style="margin-top: var(--space-2); padding-top: var(--space-2); border-top: 1px dashed var(--color-border);">
                <summary style="cursor: pointer; user-select: none;" class="u-text-xs u-text-muted">
                  <span>Configure Field Scope for <strong>${sid}</strong></span>
                </summary>
                <div style="margin-top: var(--space-2);">
                  <div class="u-flex u-items-center u-justify-between u-mb-2">
                    <p class="u-text-xs u-text-muted" style="margin: 0;">
                      Leaving columns unselected updates all mapped fields for this service. Check specific columns to restrict updates for this stage.
                    </p>
                    <div class="u-flex u-gap-1">
                      ${Button({
                        label: 'Select All',
                        variant: 'ghost',
                        size: 'sm',
                        onClick: (e) => {
                          e.preventDefault();
                          document.querySelectorAll(`.stage-scope-col-${sid}`).forEach(el => { el.checked = true; });
                          updateScopeStatus(sid, mappings.length);
                        }
                      })}
                      ${Button({
                        label: 'Clear All',
                        variant: 'ghost',
                        size: 'sm',
                        onClick: (e) => {
                          e.preventDefault();
                          document.querySelectorAll(`.stage-scope-col-${sid}`).forEach(el => { el.checked = false; });
                          updateScopeStatus(sid, mappings.length);
                        }
                      })}
                    </div>
                  </div>
                  <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: var(--space-2);">
                    ${mappings.map((m) => {
                      const colUpper = (m.target_column || '').toUpperCase();
                      const isColChecked = isCustomScoped && currentServiceScopes.map(c => c.toUpperCase()).includes(colUpper);
                      return html`
                        <label class="form-checkbox u-flex u-items-center u-gap-2" style="font-size: 0.8rem; background: var(--color-bg-card); padding: 4px 6px; border-radius: var(--radius-sm); border: 1px solid var(--color-border); margin: 0; cursor: pointer;">
                          <input type="checkbox"
                            class="stage-scope-col stage-scope-col-${sid}"
                            data-service="${sid}"
                            value="${colUpper}"
                            ?checked=${isColChecked}
                            @change=${() => updateScopeStatus(sid, mappings.length)}>
                          <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                            <strong class="font-mono">${m.target_column}</strong>
                            <small class="u-text-muted font-mono">(${m.source_field})</small>
                          </span>
                        </label>
                      `;
                    })}
                  </div>
                </div>
              </details>
            ` : nothing}
          </div>
        `;
      })}
    </div>
  `;
}

export function collectServiceMappingScopes(selectedServiceIds, servicesData) {
  const scopes = {};
  for (const sid of selectedServiceIds) {
    const totalMappings = servicesData[sid]?.field_mappings?.length || 0;
    if (totalMappings === 0) continue;
    const checked = Array.from(document.querySelectorAll(`.stage-scope-col-${sid}:checked`));
    if (checked.length > 0 && checked.length < totalMappings) {
      scopes[sid] = checked.map(el => el.value.toUpperCase());
    }
  }
  return scopes;
}
