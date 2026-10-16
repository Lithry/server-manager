import { html, nothing } from 'lit-html';
import { Button } from '../../../shared/ui/atoms/Button/Button.js';
import { Modal } from '../../../shared/ui/organisms/Modal/Modal.js';
import { http, queryCache } from '../../../shared/api/index.js';
import { settingsKeys } from '../api.js';

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
    const inheritEl = document.getElementById('chk-service-inherit-poll');
    const endpointEl = document.getElementById('srv-endpoint');
    const pipelineEl = document.getElementById('srv-pipeline');
    const enrichEl = document.getElementById('srv-enrich');
    const enabledEl = document.getElementById('chk-service-enabled');

    return {
      name: nameEl ? nameEl.value : (editingService?.name || ''),
      id: idEl ? idEl.value : (state.editingServiceId || ''),
      base_url: urlEl ? urlEl.value : (editingService?.base_url || ''),
      api_key: apiEl ? apiEl.value : (editingService?.api_key || ''),
      inherit_poll: inheritEl ? inheritEl.checked : (editingService ? editingService.poll_interval_seconds == null : true),
      poll_endpoint: endpointEl ? endpointEl.value : (editingService?.poll_endpoint || editingService?.primary_endpoint || '/api/v3/history?pageSize=100&sortKey=date&sortDirection=descending'),
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
      
      // Parse enrichments from textarea
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
        poll_interval_seconds: document.getElementById('chk-service-inherit-poll')?.checked ? null : 60,
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
        delete newServices[state.editingServiceId]; // Handle rename slug
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

  const handleDiscoverEvents = async () => {
    const draft = getDraftForm();
    const srvId = draft.id.trim();
    const endpoint = draft.poll_endpoint.trim() || '/api/v3/history';

    if (!srvId) {
      alert('Service ID is required before discovering events.');
      return;
    }

    store.set(s => ({
      ...s,
      serviceModalDraft: draft,
      isDiscoveringEvents: true,
      discoveryEventsError: null
    }));

    try {
      const res = await http.post('/api/v1/pipeline/sample', {
        service_id: srvId,
        endpoint: endpoint
      });

      if (res && res.success === false) {
        store.set(s => ({
          ...s,
          serviceModalDraft: getDraftForm(),
          isDiscoveringEvents: false,
          discoveryEventsError: res.error || 'Failed to discover events from API.'
        }));
        return;
      }

      let records = [];
      if (Array.isArray(res?.sample_payload)) {
        records = res.sample_payload;
      } else if (res?.sample_payload?.records && Array.isArray(res.sample_payload.records)) {
        records = res.sample_payload.records;
      } else if (res?.sample_payload && typeof res.sample_payload === 'object') {
        records = [res.sample_payload];
      }

      const distinctEvents = new Set();
      for (const item of records) {
        if (item && typeof item === 'object') {
          if (item.eventType) distinctEvents.add(String(item.eventType));
          else if (item.event_type) distinctEvents.add(String(item.event_type));
          else if (item.type) distinctEvents.add(String(item.type));
        }
      }

      const eventList = Array.from(distinctEvents);
      store.set(s => ({
        ...s,
        serviceModalDraft: getDraftForm(),
        isDiscoveringEvents: false,
        serviceDiscoveredEvents: eventList,
        discoveryEventsError: eventList.length === 0 ? `No eventType found in sample payload (${records.length} records).` : null
      }));
    } catch (err) {
      store.set(s => ({
        ...s,
        serviceModalDraft: getDraftForm(),
        isDiscoveringEvents: false,
        discoveryEventsError: err.message || 'Error communicating with sample endpoint.'
      }));
    }
  };

  const toggleEventType = (evt) => {
    const draft = getDraftForm();
    let updated;
    if (currentAllowedEvents.includes(evt)) {
      updated = currentAllowedEvents.filter(e => e !== evt);
    } else {
      updated = [...currentAllowedEvents, evt];
    }
    store.set(s => ({
      ...s,
      serviceModalDraft: draft,
      serviceAllowedEvents: updated
    }));
  };

  const applyPreset = (preset) => {
    const cur = getDraftForm();
    if (preset === 'sonarr') {
      cur.name = cur.name || 'Sonarr';
      cur.id = cur.id || 'sonarr';
      cur.poll_endpoint = '/api/v3/history?pageSize=100&sortKey=date&sortDirection=descending';
      cur.pipeline_key_template = '{service}:{id}';
      cur.enrichments = 'episode: /api/v3/episode/{episodeId}\nseries: /api/v3/series/{seriesId}';
    } else if (preset === 'radarr') {
      cur.name = cur.name || 'Radarr';
      cur.id = cur.id || 'radarr';
      cur.poll_endpoint = '/api/v3/history?pageSize=100&sortKey=date&sortDirection=descending';
      cur.pipeline_key_template = '{service}:{id}';
      cur.enrichments = 'movie: /api/v3/movie/{movieId}';
    } else if (preset === 'jellyfin') {
      cur.name = cur.name || 'Jellyfin';
      cur.id = cur.id || 'jellyfin';
      cur.poll_endpoint = '/Items?Recursive=true';
      cur.pipeline_key_template = '{service}:{Id}';
    } else if (preset === 'shoko') {
      cur.name = cur.name || 'Shoko';
      cur.id = cur.id || 'shoko';
      cur.poll_endpoint = '/api/v3/Series';
      cur.pipeline_key_template = '{service}:{id}';
    }
    store.set(s => ({ ...s, serviceModalDraft: cur }));
  };

  const draft = state.serviceModalDraft;
  const formName = draft ? draft.name : (editingService?.name || '');
  const formId = draft ? draft.id : (state.editingServiceId || '');
  const formUrl = draft ? draft.base_url : (editingService?.base_url || '');
  const formApi = draft ? draft.api_key : (editingService?.api_key || '');
  const formInherit = draft ? draft.inherit_poll : (editingService ? editingService.poll_interval_seconds == null : true);
  const formEndpoint = draft ? draft.poll_endpoint : (editingService?.poll_endpoint || editingService?.primary_endpoint || '/api/v3/history?pageSize=100&sortKey=date&sortDirection=descending');
  const formPipeline = draft ? draft.pipeline_key_template : (editingService?.pipeline_key_template || '{service}:{id}');
  const formEnrich = draft ? draft.enrichments : (editingService?.enrichment_endpoints ? Object.entries(editingService.enrichment_endpoints).map(([k, v]) => `${k}: ${v}`).join('\n') : '');
  const formFallbackCol = draft?.fallback_lookup_column ?? (editingService?.fallback_lookup_column || '');
  const formFallbackField = draft?.fallback_lookup_field ?? (editingService?.fallback_lookup_field || '');
  const formEnabled = draft ? draft.enabled : (editingService ? editingService.enabled : true);

  const allEventsToDisplay = Array.from(new Set([...currentAllowedEvents, ...discoveredEvents]));

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
        <input type="text" id="srv-name" class="form-input" placeholder="Sonarr, Radarr, Jellyfin, etc." .value=${formName}>
      </div>
      <div class="form-group">
        <label>Service ID (Slug)</label>
        <input type="text" id="srv-id" class="form-input font-mono" placeholder="sonarr, radarr, jellyfin" autocomplete="off" .value=${formId} @input=${(e) => { e.target.value = e.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, ''); }}>
        <small class="u-text-muted">Auto-generated or custom identifier (lowercase, no spaces).</small>
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
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-service-inherit-poll" .checked=${formInherit}>
        <label for="chk-service-inherit-poll"><strong>Inherit Global Polling Cadence</strong> (Default: 300s)</label>
      </div>
    </div>

    <!-- Ingestion Pipeline Key & Filters -->
    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <h4 class="u-text-sm u-font-bold u-mb-2" style="color: var(--color-text);">Ingestion & Pipeline Identity</h4>
      
      <div class="form-group u-mb-3">
        <label>Primary Ingestion Endpoint (Root Stages)</label>
        <input type="text" id="srv-endpoint" class="form-input font-mono" placeholder="/api/v3/history?pageSize=100" .value=${formEndpoint}>
        <small class="u-text-muted">Polled when this service is assigned to a Root Stage (e.g. <code>/api/v3/history</code> for Sonarr/Radarr).</small>
      </div>

      <div class="form-grid-2 u-mb-3">
        <div class="form-group">
          <label>Pipeline Key Template</label>
          <input type="text" id="srv-pipeline" class="form-input font-mono" placeholder="{service}:{id}" .value=${formPipeline}>
          <small class="u-text-muted">Unique tracking identifier. Presets: <code>{service}:{id}</code> or <code>{data.path}</code></small>
        </div>
        <div class="form-group">
          <label>Secondary Enrichment Endpoints (Optional)</label>
          <textarea id="srv-enrich" class="form-input font-mono" rows="4" style="resize: none;" placeholder="episode: /api/v3/episode/{episodeId}&#10;series: /api/v3/series/{seriesId}">${formEnrich}</textarea>
          <small class="u-text-muted">Specify <code>namespace: /endpoint/{param}</code> per line to isolate attributes.</small>
        </div>
      </div>

      <div class="form-grid-2 u-mb-3">
        <div class="form-group">
          <label>Fallback Match Column (Optional)</label>
          <input type="text" id="srv-fallback-col" class="form-input font-mono" placeholder="FILE_PATH" .value=${formFallbackCol}>
          <small class="u-text-muted">DB column to search if primary key cannot be resolved on mutation/deletion events (e.g. <code>FILE_PATH</code>).</small>
        </div>
        <div class="form-group">
          <label>Fallback Source Field (Optional)</label>
          <input type="text" id="srv-fallback-field" class="form-input font-mono" placeholder="sourceTitle" .value=${formFallbackField}>
          <small class="u-text-muted">Incoming event payload field to match against the DB column (e.g. <code>sourceTitle</code>).</small>
        </div>
      </div>

      <div class="form-group u-mb-0">
        <div class="u-flex u-justify-between u-items-center u-mb-2">
          <label class="u-mb-0"><strong>Allowed Ingestion Event Types</strong></label>
          ${Button({ 
            label: isDiscovering ? 'Discovering...' : 'Discover Events from API', 
            variant: 'secondary', 
            size: 'sm',
            loading: isDiscovering,
            disabled: isDiscovering,
            onClick: handleDiscoverEvents 
          })}
        </div>
        <p class="u-text-xs u-text-muted u-mb-2">Only checked event types will create new entries in SERVICES_PIPELINE. Deletions and pending downloads are excluded by default.</p>
        
        ${discoveryError ? html`<div class="u-text-danger u-text-xs u-mb-2">${discoveryError}</div>` : nothing}

        ${allEventsToDisplay.length > 0 ? html`
          <div class="u-flex u-flex-wrap u-gap-2 u-mt-2" style="max-height: 140px; overflow-y: auto; padding: 6px; background: var(--color-bg); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
            ${allEventsToDisplay.map(evt => {
              const isChecked = currentAllowedEvents.includes(evt);
              return html`
                <label class="u-flex u-items-center u-gap-2" style="background: var(--color-bg-card); padding: 4px 10px; border-radius: var(--radius-sm); border: 1px solid ${isChecked ? 'var(--color-accent)' : 'var(--color-border)'}; cursor: pointer; user-select: none;">
                  <input 
                    type="checkbox" 
                    .checked=${isChecked}
                    @change=${() => toggleEventType(evt)}
                  >
                  <span class="font-mono u-text-xs" style="color: ${isChecked ? 'var(--color-accent)' : 'var(--color-text)'}; font-weight: ${isChecked ? '600' : 'normal'};">
                    ${evt}
                  </span>
                </label>
              `;
            })}
          </div>
        ` : html`
          <div class="u-text-muted u-text-sm">Click 'Discover Events from API' to fetch supported eventTypes from the primary poll endpoint.</div>
        `}
      </div>
    </div>

    <div class="form-checkbox">
      <input type="checkbox" id="chk-service-enabled" .checked=${formEnabled}>
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
    title: state.editingServiceId ? 'Edit Service' : 'Register Service',
    size: 'lg',
    onClose: handleClose,
    body,
    footer
  });
}
