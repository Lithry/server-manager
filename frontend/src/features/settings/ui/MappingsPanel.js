import { html, nothing } from 'lit-html';
import { Button } from '../../../shared/ui/atoms/Button/Button.js';

export function createMappingsPanel(store, servicesData = {}) {
  const serviceKeys = Object.keys(servicesData);
  const selectedService = store.get().selectedMappingService || serviceKeys[0] || '';

  const handleOpenSampleApi = () => {
    store.set(s => ({ ...s, isSampleApiModalOpen: true }));
  };

  const handleAddMapping = () => {
    store.set(s => ({ ...s, isMappingModalOpen: true }));
  };

  const renderServiceSelect = () => {
    return html`
      <div class="form-group u-mb-4" style="max-width: 320px;">
        <label>Select Service</label>
        <select 
          class="form-select"
          @change=${(e) => store.set(s => ({...s, selectedMappingService: e.target.value}))}
        >
          ${serviceKeys.map(k => html`<option value="${k}" ?selected=${k === selectedService}>${servicesData[k].name}</option>`)}
        </select>
      </div>
    `;
  };

  return html`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Field Mappings & Transformers</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Extract payload attributes and map them to sanitized uppercase columns.</p>
        </div>
        <div class="u-flex u-gap-2">
          ${Button({ label: 'Sample API', variant: 'test', size: 'sm', onClick: handleOpenSampleApi })}
          ${Button({ label: '+ Add Mapping', variant: 'add', size: 'sm', onClick: handleAddMapping })}
        </div>
      </div>
      
      <div style="padding: var(--space-4);">
        ${serviceKeys.length > 0 ? renderServiceSelect() : nothing}
        
        ${(() => {
          const s = servicesData[selectedService];
          if (!s || !s.field_mappings || s.field_mappings.length === 0) {
            return html`
              <div style="background: var(--color-bg-subtle); border-radius: var(--radius-sm); border: 1px dashed var(--color-border); padding: var(--space-4); text-align: center;">
                <p class="u-text-muted u-text-sm">No field mappings configured for this service. Click <strong>+ Add Mapping</strong> or sample the API.</p>
              </div>
            `;
          }
          return html`
            <div class="u-flex u-flex-col u-gap-3">
              ${s.field_mappings.map(m => html`
                <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-flex u-items-center u-justify-between">
                  <div>
                    <strong style="color: var(--color-text); font-family: monospace;">${m.source_field}</strong>
                    <span style="color: var(--color-text-muted); margin: 0 var(--space-2);">→</span>
                    <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px; font-weight: bold;">${m.target_column}</span>
                    <span class="u-text-xs u-text-muted u-ml-2">(${m.data_type})</span>
                    ${m.transformer ? html`<div class="u-text-xs u-text-muted u-mt-1 font-mono">Transformer: ${m.transformer}</div>` : nothing}
                  </div>
                  <div class="u-flex u-gap-2">
                    ${Button({ label: 'Edit', variant: 'ghost', size: 'sm', onClick: () => alert('Edit mapping (coming soon)') })}
                    ${Button({ label: 'Delete', variant: 'delete', size: 'sm', onClick: () => confirm('Delete mapping?') })}
                  </div>
                </div>
              `)}
            </div>
          `;
        })()}
      </div>
    </div>
  `;
}
