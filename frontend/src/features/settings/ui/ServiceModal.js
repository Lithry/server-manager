import { html, nothing } from 'lit-html';
import { Button } from '../../../shared/ui/atoms/Button/Button.js';
import { Modal } from '../../../shared/ui/organisms/Modal/Modal.js';
import { queryCache } from '../../../shared/api/index.js';
import { settingsKeys } from '../api.js';

export function createServiceModal(store) {
  const state = store.get();
  const snapshot = queryCache.read(settingsKeys.all);
  const services = snapshot?.data?.services || {};
  const editingService = state.editingServiceId ? services[state.editingServiceId] : null;
  
  const handleClose = () => {
    store.set(s => ({ ...s, isServiceModalOpen: false, editingServiceId: null }));
  };

  const handleSave = () => {
    const srvId = document.getElementById('srv-id').value.trim();
    if (!srvId) { alert('Service ID is required'); return; }
    
    // Parse enrichments from textarea
    const enrichRaw = document.getElementById('srv-enrich').value.trim();
    const enrichments = {};
    if (enrichRaw) {
      enrichRaw.split('\n').forEach(line => {
        const parts = line.split(':');
        if (parts.length >= 2) {
          enrichments[parts[0].trim()] = parts.slice(1).join(':').trim();
        }
      });
    }

    const newService = {
      name: document.getElementById('srv-name').value.trim() || srvId,
      base_url: document.getElementById('srv-url').value.trim(),
      api_key: document.getElementById('srv-api').value.trim(),
      poll_interval_seconds: document.getElementById('chk-service-inherit-poll').checked ? null : 60,
      primary_endpoint: document.getElementById('srv-endpoint').value.trim(),
      pipeline_key_template: document.getElementById('srv-pipeline').value.trim(),
      enrichment_endpoints: enrichments,
      enabled: document.getElementById('chk-service-enabled').checked,
      field_mappings: editingService?.field_mappings || []
    };
    
    const newServices = { ...services, [srvId]: newService };
    if (state.editingServiceId && state.editingServiceId !== srvId) {
      delete newServices[state.editingServiceId]; // Handle rename slug
    }
    
    queryCache.set(settingsKeys.all, { ...snapshot.data, services: newServices });
    store.set(s => ({ ...s, isDirty: true, isServiceModalOpen: false, editingServiceId: null }));
  };

  const applyPreset = (preset) => {
    // Logic to pre-fill the form based on preset
    alert(`Applied preset: ${preset}`);
  };

  const body = html`
    <!-- CFG-01: Quick Presets -->
    <div class="u-flex u-gap-2 u-mb-4">
      <span class="u-text-sm u-text-muted u-flex u-items-center">Quick Presets:</span>
      ${Button({ label: 'Sonarr', variant: 'secondary', size: 'sm', onClick: () => applyPreset('sonarr') })}
      ${Button({ label: 'Radarr', variant: 'secondary', size: 'sm', onClick: () => applyPreset('radarr') })}
      ${Button({ label: 'Jellyfin', variant: 'secondary', size: 'sm', onClick: () => applyPreset('jellyfin') })}
      ${Button({ label: 'Shoko', variant: 'secondary', size: 'sm', onClick: () => applyPreset('shoko') })}
    </div>

    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Display Name</label>
        <input type="text" id="srv-name" class="form-input" placeholder="Sonarr, Radarr, Jellyfin, etc." .value=${editingService?.name || ''}>
      </div>
      <div class="form-group">
        <label>Service ID (Slug)</label>
        <input type="text" id="srv-id" class="form-input font-mono" placeholder="sonarr, radarr, jellyfin" autocomplete="off" .value=${state.editingServiceId || ''} @input=${(e) => { e.target.value = e.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, ''); }}>
        <small class="u-text-muted">Auto-generated or custom identifier (lowercase, no spaces).</small>
      </div>
    </div>

    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Base URL</label>
        <input type="text" id="srv-url" class="form-input font-mono" placeholder="http://localhost:<port>" .value=${editingService?.base_url || ''}>
        <small class="u-text-muted">Use <code>http://localhost:&lt;port&gt;</code> for services on host.</small>
      </div>
      <div class="form-group">
        <label>API Key / Bearer Token</label>
        <input type="password" id="srv-api" class="form-input font-mono" placeholder="••••••••••••••••" .value=${editingService?.api_key || ''}>
      </div>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-service-inherit-poll" .checked=${editingService ? editingService.poll_interval_seconds == null : true}>
        <label for="chk-service-inherit-poll"><strong>Inherit Global Polling Cadence</strong> (Default: 300s)</label>
      </div>
    </div>

    <!-- Ingestion Pipeline Key & Filters -->
    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <h4 class="u-text-sm u-font-bold u-mb-2" style="color: var(--color-text);">Ingestion & Pipeline Identity</h4>
      
      <div class="form-group u-mb-3">
        <label>Primary Ingestion Endpoint (Root Stages)</label>
        <input type="text" id="srv-endpoint" class="form-input font-mono" placeholder="/api/v3/history?pageSize=50" .value=${editingService?.primary_endpoint || '/api/v3/history?pageSize=50&sortKey=date&sortDirection=descending'}>
        <small class="u-text-muted">Polled when this service is assigned to a Root Stage (e.g. <code>/api/v3/history</code> for Sonarr/Radarr).</small>
      </div>

      <div class="form-grid-2 u-mb-3">
        <div class="form-group">
          <label>Pipeline Key Template</label>
          <input type="text" id="srv-pipeline" class="form-input font-mono" placeholder="{service}:{id}" .value=${editingService?.pipeline_key_template || '{service}:{id}'}>
          <small class="u-text-muted">Unique tracking identifier. Presets: <code>{service}:{id}</code> or <code>{data.path}</code></small>
        </div>
        <div class="form-group">
          <label>Secondary Enrichment Endpoints (Optional)</label>
          <textarea id="srv-enrich" class="form-input font-mono" rows="4" style="resize: none;" placeholder="episode: /api/v3/episode/{episodeId}&#10;series: /api/v3/series/{seriesId}">${
            editingService?.enrichment_endpoints 
              ? Object.entries(editingService.enrichment_endpoints).map(([k, v]) => `${k}: ${v}`).join('\n') 
              : ''
          }</textarea>
          <small class="u-text-muted">Specify <code>namespace: /endpoint/{param}</code> per line to isolate attributes.</small>
        </div>
      </div>

      <div class="form-group u-mb-0">
        <div class="u-flex u-justify-between u-items-center u-mb-2">
          <label class="u-mb-0"><strong>Allowed Ingestion Event Types</strong></label>
          ${Button({ label: 'Discover Events from API', variant: 'secondary', size: 'sm' })}
        </div>
        <p class="u-text-xs u-text-muted u-mb-2">Only checked event types will create new entries in SERVICES_PIPELINE. Deletions and pending downloads are excluded by default.</p>
        <div class="u-text-muted u-text-sm">Save or click 'Discover Events from API' to fetch supported eventTypes.</div>
      </div>
    </div>

    <div class="form-checkbox">
      <input type="checkbox" id="chk-service-enabled" .checked=${editingService ? editingService.enabled : true}>
      <label for="chk-service-enabled">Enable active polling loop for this service</label>
    </div>
  `;

  const footer = html`
    <div class="u-flex u-gap-2">
      ${Button({ label: 'Cancel', variant: 'secondary', onClick: handleClose })}
      ${Button({ label: state.editingServiceId ? 'Save Changes' : 'Create Service', variant: 'save', onClick: handleSave })}
    </div>
  `;

  return Modal({
    title: 'Register Service',
    size: 'lg',
    onClose: handleClose,
    body,
    footer
  });
}
