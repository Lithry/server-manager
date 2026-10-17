import { html } from 'lit-html';
import { Button } from '../../../shared/ui/atoms/Button/Button.js';
import { Modal } from '../../../shared/ui/organisms/Modal/Modal.js';
import { http, queryCache } from '../../../shared/api/index.js';
import { settingsKeys } from '../api.js';

const TYPE_MAP = { int: 'INTEGER', float: 'REAL', bool: 'BOOLEAN', str: 'TEXT', list: 'TEXT', dict: 'TEXT' };

export function createSampleApiModal(store) {
  const state = store.get();
  const snapshot = queryCache.read(settingsKeys.all);
  const services = snapshot?.data?.services || {};
  const serviceKeys = Object.keys(services);
  const selectedService = state.selectedMappingService || serviceKeys[0] || '';
  const currentServiceObj = services[selectedService];
  const serviceDisplayName = currentServiceObj?.name || selectedService || 'No Service Selected';

  const defaultEndpoint = currentServiceObj?.poll_endpoint || '/api/v3/history';
  const currentEndpoint = state.sampleApiEndpoint !== undefined ? state.sampleApiEndpoint : defaultEndpoint;
  const isLoading = state.sampleApiLoading || false;
  const errorMsg = state.sampleApiError || null;
  const fields = state.sampleApiFields || null;
  const filterText = (state.sampleApiFilter || '').trim().toLowerCase();
  const prefix = (state.sampleApiPrefix || '').trim();

  const handleClose = () => {
    store.set(s => ({
      ...s,
      isSampleApiModalOpen: false,
      sampleApiLoading: false,
      sampleApiError: null,
      sampleApiFilter: '',
      sampleApiFields: null
    }));
  };

  const handleFetchSample = async () => {
    const endpointInput = document.getElementById('sample-endpoint-input');
    const endpointVal = endpointInput ? endpointInput.value.trim() : currentEndpoint;
    if (!selectedService) { alert('Please select or configure a service before sampling.'); return; }
    if (!endpointVal) { alert('Please provide an endpoint to sample.'); return; }

    store.set(s => ({ ...s, sampleApiLoading: true, sampleApiError: null, sampleApiEndpoint: endpointVal }));
    try {
      const res = await http.post('/api/v1/pipeline/sample', { service_id: selectedService, endpoint: endpointVal });
      if (res && res.success === false) {
        store.set(s => ({ ...s, sampleApiLoading: false, sampleApiError: res.error || 'Failed to sample API endpoint', sampleApiFields: [] }));
      } else {
        store.set(s => ({ ...s, sampleApiLoading: false, sampleApiFields: res.fields || [], sampleApiError: null }));
      }
    } catch (err) {
      store.set(s => ({ ...s, sampleApiLoading: false, sampleApiError: err.message || 'Error communicating with sample endpoint', sampleApiFields: [] }));
    }
  };

  const handleMapField = (field) => {
    const prefixInput = document.getElementById('sample-namespace-prefix');
    const currentPrefix = prefixInput ? prefixInput.value.trim() : prefix;
    const fullSourcePath = currentPrefix ? `${currentPrefix}.${field.path}` : field.path;
    const sanitizedColumn = fullSourcePath.replace(/[^a-zA-Z0-9_]/g, '_').toUpperCase();

    store.set(s => ({
      ...s,
      isSampleApiModalOpen: false,
      isMappingModalOpen: true,
      editingMapping: {
        source_field: fullSourcePath,
        target_column: sanitizedColumn,
        data_type: TYPE_MAP[field.type] || 'TEXT',
        transformer: ''
      },
      editingMappingIndex: -1
    }));
  };

  const displayedFields = fields ? fields.filter(f => {
    if (!filterText) return true;
    return (
      (f.path && f.path.toLowerCase().includes(filterText)) ||
      (f.type && f.type.toLowerCase().includes(filterText)) ||
      (f.sample && String(f.sample).toLowerCase().includes(filterText))
    );
  }) : [];

  const renderFieldsContent = () => {
    const emptyBox = (msg) => html`
      <div style="background: var(--color-bg-subtle); border-radius: var(--radius-md); border: 1px dashed var(--color-border); padding: var(--space-5); text-align: center;">
        <p class="u-text-muted u-text-sm" style="margin: 0;">${msg}</p>
      </div>
    `;

    if (isLoading) return emptyBox(html`Fetching and analyzing schema from <code>${currentEndpoint}</code>...`);
    if (errorMsg) {
      return html`
        <div style="background: color-mix(in srgb, var(--color-danger) 10%, transparent); border-radius: var(--radius-md); border: 1px solid var(--color-danger); padding: var(--space-4);">
          <strong class="u-text-danger u-text-sm">Sampling Error:</strong>
          <p class="u-text-danger u-text-xs u-mt-1 font-mono" style="margin-bottom: 0;">${errorMsg}</p>
        </div>
      `;
    }
    if (fields === null) return emptyBox(html`Click <strong>Fetch Sample</strong> to inspect payload JSON schema and available keys.`);
    if (fields.length === 0) return emptyBox('No fields discovered at this endpoint.');
    if (displayedFields.length === 0) return emptyBox(html`No fields match the current filter "<strong>${filterText}</strong>".`);

    return html`
      <div style="max-height: 380px; overflow-y: auto; border: 1px solid var(--color-border); border-radius: var(--radius-sm);">
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.85rem;">
          <thead>
            <tr style="background: var(--color-bg-subtle); border-bottom: 1px solid var(--color-border); position: sticky; top: 0; z-index: 1;">
              <th style="padding: 8px 12px; font-weight: 600;">Payload Path</th>
              <th style="padding: 8px 12px; font-weight: 600; width: 80px;">Type</th>
              <th style="padding: 8px 12px; font-weight: 600;">Sample Value</th>
              <th style="padding: 8px 12px; font-weight: 600; width: 95px; text-align: right;">Action</th>
            </tr>
          </thead>
          <tbody>
            ${displayedFields.map(f => html`
              <tr style="border-bottom: 1px solid var(--color-border); background: var(--color-bg-card);">
                <td style="padding: 8px 12px;"><span class="font-mono" style="color: var(--color-text); font-weight: 600;">${f.path}</span></td>
                <td style="padding: 8px 12px;"><span class="font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 15%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${f.type}</span></td>
                <td style="padding: 8px 12px;"><span class="font-mono u-text-xs u-text-muted" style="word-break: break-all;">${f.sample}</span></td>
                <td style="padding: 8px 12px; text-align: right;">
                  ${Button({ label: '+ Map', variant: 'secondary', size: 'sm', onClick: () => handleMapField(f) })}
                </td>
              </tr>
            `)}
          </tbody>
        </table>
      </div>
      <div class="u-text-xs u-text-muted u-mt-2">
        Showing ${displayedFields.length} of ${fields.length} discovered fields.
      </div>
    `;
  };

  const body = html`
    <div class="u-flex u-items-center u-gap-3 u-mb-3">
      <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 6px 10px; border-radius: 4px; font-weight: bold; white-space: nowrap;">
        ${serviceDisplayName} (${selectedService})
      </span>
      <input
        type="text"
        id="sample-endpoint-input"
        list="common-endpoints-list"
        class="form-input font-mono"
        placeholder="Select an endpoint below or type custom..."
        style="flex: 1;"
        .value=${currentEndpoint}
        @input=${(e) => store.set(s => ({ ...s, sampleApiEndpoint: e.target.value }))}
      >
      <datalist id="common-endpoints-list">
        <option value="/api/v3/history">History (Sonarr / Radarr)</option>
        <option value="/api/v3/queue">Queue (Sonarr / Radarr)</option>
        <option value="/api/v3/series">Series (Sonarr)</option>
        <option value="/api/v3/movie">Movies (Radarr)</option>
        <option value="/api/v3/tag">Tags (Sonarr / Radarr)</option>
        <option value="/Items?Recursive=true">Items (Jellyfin)</option>
      </datalist>
      ${Button({
        label: isLoading ? 'Fetching...' : 'Fetch Sample',
        variant: 'test',
        loading: isLoading,
        disabled: isLoading,
        onClick: handleFetchSample
      })}
    </div>

    <div class="u-mb-3" style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="form-grid-2">
        <input
          type="text"
          id="sample-filter-input"
          class="form-input"
          placeholder="Filter discovered attributes (e.g. episode, id, title)..."
          .value=${state.sampleApiFilter || ''}
          @input=${(e) => store.set(s => ({ ...s, sampleApiFilter: e.target.value }))}
        >
        <input
          type="text"
          id="sample-namespace-prefix"
          class="form-input font-mono"
          placeholder="Namespace prefix (optional, e.g. series, episode)"
          .value=${state.sampleApiPrefix || ''}
          @input=${(e) => store.set(s => ({ ...s, sampleApiPrefix: e.target.value }))}
        >
      </div>
    </div>

    ${renderFieldsContent()}
  `;

  const footer = html`
    <div class="u-flex u-gap-2">
      ${Button({ label: 'Close', variant: 'secondary', onClick: handleClose })}
    </div>
  `;

  return Modal({
    title: 'Sample Service API Schema',
    size: 'lg',
    onClose: handleClose,
    body,
    footer
  });
}

