import { html } from 'lit-html';
import { Button } from '../../../shared/ui/atoms/Button/Button.js';
import { Modal } from '../../../shared/ui/organisms/Modal/Modal.js';
import { queryCache } from '../../../shared/api/index.js';
import { settingsKeys } from '../api.js';
import { renderServiceEventDiscovery } from './ServiceEventDiscovery.js';

export function createServiceModal(store) {
  const state = store.get();
  const snapshot = queryCache.read(settingsKeys.all);
  const services = snapshot?.data?.services || {};
  const editingService = state.editingServiceId ? services[state.editingServiceId] : null;

  const currentAllowedEvents = state.serviceAllowedEvents !== undefined
    ? state.serviceAllowedEvents
    : (editingService?.allowed_event_types || []);

  const discoveredEvents = state.serviceDiscoveredEvents || [];
  const isDiscovering = state.isDiscoveringEvents || false;
  const discoveryError = state.discoveryEventsError || null;

  const getDraftForm = () => {
    const nameEl = document.getElementById('srv-name');
    const idEl = document.getElementById('srv-id');
    const urlEl = document.getElementById('srv-url');
    const apiEl = document.getElementById('srv-api');
    const endpointEl = document.getElementById('srv-endpoint');
    const pipelineEl = document.getElementById('srv-pipeline');
    const enrichEl = document.getElementById('srv-enrich');
    const enabledEl = document.getElementById('chk-service-enabled');

    return {
      name: nameEl ? nameEl.value : (editingService?.name || ''),
      id: idEl ? idEl.value : (state.editingServiceId || ''),
      base_url: urlEl ? urlEl.value : (editingService?.base_url || ''),
      api_key: apiEl ? apiEl.value : (editingService?.api_key || ''),
      poll_endpoint: endpointEl ? endpointEl.value : (editingService?.poll_endpoint || '/api/v3/history?pageSize=100&sortKey=date&sortDirection=descending'),
      pipeline_key_template: pipelineEl ? pipelineEl.value : (editingService?.pipeline_key_template || '{service}:{id}'),
      enrichments: enrichEl ? enrichEl.value : (editingService?.enrichment_endpoints ? Object.entries(editingService.enrichment_endpoints).map(([k, v]) => `${k}: ${v}`).join('\n') : ''),
      fallback_lookup_column: (document.getElementById('srv-fallback-col')?.value || '').trim() || null,
      fallback_lookup_field: (document.getElementById('srv-fallback-field')?.value || '').trim() || null,
      enabled: enabledEl ? enabledEl.checked : (editingService ? editingService.enabled : true)
    };
  };

  const handleClose = () => {
    store.set(s => ({
      ...s,
      isServiceModalOpen: false,
      editingServiceId: null,
      serviceModalDraft: null,
      serviceAllowedEvents: undefined,
      serviceDiscoveredEvents: null,
      isDiscoveringEvents: false,
      discoveryEventsError: null
    }));
  };

  const handleSave = () => {
    try {
      const srvId = (document.getElementById('srv-id')?.value || '').trim();
      if (!srvId) { alert('Service ID is required'); return; }

      const enrichRaw = (document.getElementById('srv-enrich')?.value || '').trim();
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
        name: (document.getElementById('srv-name')?.value || '').trim() || srvId,
        base_url: (document.getElementById('srv-url')?.value || '').trim(),
        api_key: (document.getElementById('srv-api')?.value || '').trim(),
        poll_endpoint: (document.getElementById('srv-endpoint')?.value || '').trim(),
        pipeline_key_template: (document.getElementById('srv-pipeline')?.value || '').trim(),
        fallback_lookup_column: (document.getElementById('srv-fallback-col')?.value || '').trim() || null,
        fallback_lookup_field: (document.getElementById('srv-fallback-field')?.value || '').trim() || null,
        enrichment_endpoints: enrichments,
        enabled: document.getElementById('chk-service-enabled')?.checked ?? true,
        allowed_event_types: currentAllowedEvents,
        field_mappings: editingService?.field_mappings || []
      };

      const newServices = { ...services, [srvId]: newService };
      if (state.editingServiceId && state.editingServiceId !== srvId) {
        delete newServices[state.editingServiceId];
      }

      queryCache.setData(settingsKeys.all, () => ({ ...snapshot.data, services: newServices }));
      store.set(s => ({
        ...s,
        isDirty: true,
        isServiceModalOpen: false,
        editingServiceId: null,
        serviceModalDraft: null,
        serviceAllowedEvents: undefined,
        serviceDiscoveredEvents: null,
        isDiscoveringEvents: false,
        discoveryEventsError: null
      }));
    } catch (err) {
      alert('Error saving service: ' + err.stack);
    }
  };

  const applyPreset = (preset) => {
    const cur = getDraftForm();
    const presets = {
      sonarr: { name: 'Sonarr', id: 'sonarr', ep: '/api/v3/history?pageSize=100&sortKey=date&sortDirection=descending', pk: '{service}:{id}', enr: 'episode: /api/v3/episode/{episodeId}\nseries: /api/v3/series/{seriesId}' },
      radarr: { name: 'Radarr', id: 'radarr', ep: '/api/v3/history?pageSize=100&sortKey=date&sortDirection=descending', pk: '{service}:{id}', enr: 'movie: /api/v3/movie/{movieId}' },
      jellyfin: { name: 'Jellyfin', id: 'jellyfin', ep: '/Items?Recursive=true', pk: '{service}:{Id}', enr: '' },
      shoko: { name: 'Shoko', id: 'shoko', ep: '/api/v3/Series', pk: '{service}:{id}', enr: '' }
    };
    const p = presets[preset];
    if (p) {
      cur.name = cur.name || p.name;
      cur.id = cur.id || p.id;
      cur.poll_endpoint = p.ep;
      cur.pipeline_key_template = p.pk;
      if (p.enr) cur.enrichments = p.enr;
    }
    store.set(s => ({ ...s, serviceModalDraft: cur }));
  };

  const draft = state.serviceModalDraft;
  const formName = draft ? draft.name : (editingService?.name || '');
  const formId = draft ? draft.id : (state.editingServiceId || '');
  const formUrl = draft ? draft.base_url : (editingService?.base_url || '');
  const formApi = draft ? draft.api_key : (editingService?.api_key || '');
  const formEndpoint = draft ? draft.poll_endpoint : (editingService?.poll_endpoint || '/api/v3/history?pageSize=100&sortKey=date&sortDirection=descending');
  const formPipeline = draft ? draft.pipeline_key_template : (editingService?.pipeline_key_template || '{service}:{id}');
  const formEnrich = draft ? draft.enrichments : (editingService?.enrichment_endpoints ? Object.entries(editingService.enrichment_endpoints).map(([k, v]) => `${k}: ${v}`).join('\n') : '');
  const formFallbackCol = draft?.fallback_lookup_column ?? (editingService?.fallback_lookup_column || '');
  const formFallbackField = draft?.fallback_lookup_field ?? (editingService?.fallback_lookup_field || '');
  const formEnabled = draft ? draft.enabled : (editingService ? editingService.enabled : true);

  const body = html`
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
        <input type="text" id="srv-name" class="form-input" placeholder="Sonarr, Radarr, Jellyfin, Custom Service..." .value=${formName}>
      </div>
      <div class="form-group">
        <label>Service ID (Slug)</label>
        <input type="text" id="srv-id" class="form-input font-mono" placeholder="sonarr, radarr, custom_api" autocomplete="off" .value=${formId} @input=${(e) => { e.target.value = e.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, ''); }}>
        <small class="u-text-muted">Unique lowercase identifier.</small>
      </div>
    </div>

    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Base URL</label>
        <input type="text" id="srv-url" class="form-input font-mono" placeholder="http://localhost:<port>" .value=${formUrl}>
        <small class="u-text-muted">Use <code>http://localhost:&lt;port&gt;</code> for services on host.</small>
      </div>
      <div class="form-group">
        <label>API Key / Bearer Token</label>
        <input type="password" id="srv-api" class="form-input font-mono" placeholder="••••••••••••••••" .value=${formApi}>
      </div>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <h4 class="u-text-sm u-font-bold u-mb-2" style="color: var(--color-text);">Ingestion & Pipeline Identity</h4>

      <div class="form-group u-mb-3">
        <label>Primary Ingestion Endpoint (Root Stages)</label>
        <input type="text" id="srv-endpoint" class="form-input font-mono" placeholder="/api/v3/history?pageSize=100" .value=${formEndpoint}>
        <small class="u-text-muted">Supports relative lookback placeholders: <code>{lookback_seconds}</code>, <code>{lookback_minutes}</code>, <code>{lookback_iso}</code>, <code>{cutoff_iso}</code>.</small>
      </div>

      <div class="form-grid-2 u-mb-3">
        <div class="form-group">
          <label>Pipeline Key Template</label>
          <input type="text" id="srv-pipeline" class="form-input font-mono" placeholder="{service}:{id}" .value=${formPipeline}>
          <small class="u-text-muted">Unique tracking identifier (e.g. <code>{service}:{id}</code> or <code>{data.path}</code>).</small>
        </div>
        <div class="form-group">
          <label>Secondary Enrichment Endpoints (Optional)</label>
          <textarea id="srv-enrich" class="form-input font-mono" rows="4" style="resize: none;" placeholder="episode: /api/v3/episode/{episodeId}&#10;series: /api/v3/series/{seriesId}">${formEnrich}</textarea>
          <small class="u-text-muted">Specify <code>namespace: /endpoint/{param}</code> per line.</small>
        </div>
      </div>

      <div class="form-grid-2 u-mb-3">
        <div class="form-group">
          <label>Fallback Match Column (Optional)</label>
          <input type="text" id="srv-fallback-col" class="form-input font-mono" placeholder="FILE_PATH" .value=${formFallbackCol}>
          <small class="u-text-muted">DB column to search if primary key cannot be resolved on mutation/deletion events.</small>
        </div>
        <div class="form-group">
          <label>Fallback Source Field (Optional)</label>
          <input type="text" id="srv-fallback-field" class="form-input font-mono" placeholder="sourceTitle" .value=${formFallbackField}>
          <small class="u-text-muted">Incoming event payload field to match against the DB column.</small>
        </div>
      </div>

      ${renderServiceEventDiscovery({
        store,
        getDraftForm,
        currentAllowedEvents,
        discoveredEvents,
        isDiscovering,
        discoveryError
      })}
    </div>

    <div class="form-checkbox">
      <input type="checkbox" id="chk-service-enabled" .checked=${formEnabled}>
      <label for="chk-service-enabled">Enable service for assigned stages</label>
    </div>
  `;

  const footer = html`
    <div class="u-flex u-gap-2">
      ${Button({ label: 'Cancel', variant: 'secondary', onClick: handleClose })}
      ${Button({ label: state.editingServiceId ? 'Save Changes' : 'Create Service', variant: 'save', onClick: handleSave })}
    </div>
  `;

  return Modal({
    title: state.editingServiceId ? 'Edit Service' : 'Register Service',
    size: 'lg',
    onClose: handleClose,
    body,
    footer
  });
}

