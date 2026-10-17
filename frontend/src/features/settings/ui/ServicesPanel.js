import { html, nothing } from 'lit-html';
import { Button } from '../../../shared/ui/atoms/Button/Button.js';
import { queryCache } from '../../../shared/api/index.js';
import { settingsKeys } from '../api.js';

export function createServicesPanel(store, servicesData = {}) {
  const serviceKeys = Object.keys(servicesData);

  const handleAddService = () => {
    store.set(s => ({ ...s, isServiceModalOpen: true, editingServiceId: null }));
  };

  const handleDeleteService = (key) => {
    if (!confirm(`Delete service '${key}' and remove it from assigned stages?`)) return;
    const snapshot = queryCache.read(settingsKeys.all);
    if (!snapshot?.data) return;

    const nextServices = { ...(snapshot.data.services || {}) };
    delete nextServices[key];

    const nextStages = (snapshot.data.stages || []).map(st => {
      const nextScopes = { ...(st.service_mapping_scopes || {}) };
      delete nextScopes[key];
      return {
        ...st,
        service_ids: (st.service_ids || []).filter(sid => sid !== key),
        service_mapping_scopes: nextScopes
      };
    });

    queryCache.setData(settingsKeys.all, () => ({
      ...snapshot.data,
      services: nextServices,
      stages: nextStages
    }));
    store.set(s => ({ ...s, isDirty: true }));
  };

  const renderServiceItem = (key, s, isLast) => {
    const fieldMapCount = s.field_mappings?.length || 0;
    const enrichmentKeys = Object.keys(s.enrichment_endpoints || {}).join(', ');

    return html`
      <div style="padding: var(--space-4); border-bottom: ${isLast ? 'none' : '1px solid var(--color-border)'};">
        <div class="u-flex u-items-center u-justify-between u-mb-2">
          <div class="u-flex u-items-center u-gap-3">
            <strong style="font-size: 1.1rem; color: var(--color-text);">${s.name}</strong>
            <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${key.toUpperCase()}</span>
            ${s.enabled 
              ? html`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-success) 20%, transparent); color: var(--color-success); padding: 2px 6px; border-radius: 4px;">ACTIVE</span>`
              : html`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-text-muted) 20%, transparent); color: var(--color-text-muted); padding: 2px 6px; border-radius: 4px;">DISABLED</span>`
            }
          </div>
          <div class="u-flex u-gap-2">
            ${Button({ label: 'Edit', variant: 'ghost', size: 'sm', onClick: () => store.set(s => ({ ...s, isServiceModalOpen: true, editingServiceId: key })) })}
            ${Button({ label: 'Delete', variant: 'delete', size: 'sm', onClick: () => handleDeleteService(key) })}
          </div>
        </div>
        <div class="u-text-sm u-font-mono u-text-muted" style="color: var(--color-text-muted);">
          Base URL: ${s.base_url || 'N/A'} | API Key: ${s.api_key ? 'configured' : 'missing'} | Field Mappings: <span style="color: var(--color-text); font-weight: bold;">${fieldMapCount}</span> | Enrichment: <span style="color: var(--color-text-secondary);">${enrichmentKeys || 'none'}</span>
        </div>
      </div>
    `;
  };

  return html`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Upstream Services</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Configure external API services, endpoints, and credentials dynamically with zero templates.</p>
        </div>
        ${Button({ label: '+ Add Service', variant: 'add', size: 'sm', onClick: handleAddService })}
      </div>
      
      <div class="u-flex u-flex-col">
        ${serviceKeys.length === 0 ? html`<div class="u-text-muted u-text-sm" style="padding: var(--space-4);">No services configured.</div>` : nothing}
        ${serviceKeys.map((key, i) => renderServiceItem(key, servicesData[key], i === serviceKeys.length - 1))}
      </div>
    </div>
  `;
}

