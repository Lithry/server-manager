import { html, nothing } from 'lit-html';
import { Button } from '../shared/ui/atoms/Button/Button.js';
import { Icon } from '../shared/ui/atoms/Icon/Icon.js';
import { http, queryCache } from '../shared/api/index.js';
import { settingsKeys } from '../features/settings/api.js';

function createSandboxStore() {
  let state = {
    selectedService: '',
    selectedRecordId: '',
    namespaces: [{ name: 'file', endpoint: '/api/v3/File/PathEndsWith?path={FILE_PATH}' }],
    logs: [],
    flattenedKeys: [],
    contextData: null,
    isLoading: false,
    error: null,
    saveSuccess: false
  };
  const listeners = new Set();
  
  return {
    get: () => state,
    set: (updater) => {
      state = updater(state);
      listeners.forEach(l => l());
    },
    subscribe: (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    }
  };
}

export function createSandboxPage() {
  const store = createSandboxStore();

  const handleTest = async () => {
    const { selectedService, selectedRecordId, namespaces } = store.get();
    if (!selectedService || !selectedRecordId) {
      alert("Please select a service and provide a valid Pipeline Record ID.");
      return;
    }

    const enrichmentEndpoints = {};
    for (const ns of namespaces) {
      if (ns.name.trim() && ns.endpoint.trim()) {
        enrichmentEndpoints[ns.name.trim()] = ns.endpoint.trim();
      }
    }

    if (Object.keys(enrichmentEndpoints).length === 0) {
      alert("Please define at least one enrichment endpoint to test.");
      return;
    }

    store.set(s => ({ ...s, isLoading: true, error: null, logs: [], flattenedKeys: [], contextData: null }));
    
    try {
      const res = await http.post('/api/v1/pipeline/sandbox/enrichment', {
        service_id: selectedService,
        record_id: parseInt(selectedRecordId, 10),
        enrichment_endpoints: enrichmentEndpoints
      });

      store.set(s => ({
        ...s,
        isLoading: false,
        logs: res.logs || [],
        flattenedKeys: res.flattened_keys || [],
        contextData: res.context_data || null
      }));
    } catch (err) {
      store.set(s => ({ ...s, isLoading: false, error: err.message }));
    }
  };

  const handleSaveToService = async () => {
    const state = store.get();
    if (!state.selectedService) return;

    const snapshot = queryCache.read(settingsKeys.all);
    const services = snapshot?.data?.services || {};
    const svc = services[state.selectedService];
    
    if (!svc) {
      alert("Service not found in settings.");
      return;
    }

    const enrichmentEndpoints = { ...(svc.enrichment_endpoints || {}) };
    let addedCount = 0;
    
    for (const ns of state.namespaces) {
      const name = ns.name.trim();
      const endpoint = ns.endpoint.trim();
      if (name && endpoint) {
        enrichmentEndpoints[name] = endpoint;
        addedCount++;
      }
    }

    if (addedCount === 0) return;

    const newServices = { ...services, [state.selectedService]: { ...svc, enrichment_endpoints: enrichmentEndpoints } };
    const newSettings = { ...snapshot.data, services: newServices };
    
    try {
      await http.post('/api/v1/settings/config', newSettings);
      queryCache.setData(settingsKeys.all, () => newSettings);
      
      store.set(s => ({ ...s, saveSuccess: true }));
      setTimeout(() => {
        store.set(s => ({ ...s, saveSuccess: false }));
      }, 3000);
    } catch (err) {
      alert("Failed to save to service: " + err.message);
    }
  };

  const updateNamespace = (idx, field, value) => {
    store.set(s => {
      const newNamespaces = [...s.namespaces];
      newNamespaces[idx] = { ...newNamespaces[idx], [field]: value };
      return { ...s, namespaces: newNamespaces, saveSuccess: false };
    });
  };

  const addNamespace = () => {
    store.set(s => ({
      ...s,
      namespaces: [...s.namespaces, { name: '', endpoint: '' }]
    }));
  };

  const removeNamespace = (idx) => {
    store.set(s => {
      const newNamespaces = s.namespaces.filter((_, i) => i !== idx);
      return { ...s, namespaces: newNamespaces };
    });
  };

  const renderNamespaces = (state) => {
    return html`
      <div class="u-flex u-flex-col u-gap-3 u-mb-4">
        ${state.namespaces.map((ns, i) => html`
          <div class="u-flex u-items-center u-gap-3" style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
            <div style="flex: 1;">
              <label class="u-text-xs u-text-muted u-mb-1 u-block">Namespace</label>
              <input type="text" class="form-input font-mono" placeholder="e.g. file, episode" .value=${ns.name} @input=${e => updateNamespace(i, 'name', e.target.value)}>
            </div>
            <div style="flex: 3;">
              <label class="u-text-xs u-text-muted u-mb-1 u-block">API Endpoint</label>
              <input type="text" class="form-input font-mono" placeholder="/api/v3/Endpoint/{ID}" .value=${ns.endpoint} @input=${e => updateNamespace(i, 'endpoint', e.target.value)}>
            </div>
            <div style="align-self: flex-end; padding-bottom: 2px;">
              ${Button({ label: Icon({ name: 'trash' }), variant: 'ghost', onClick: () => removeNamespace(i) })}
            </div>
          </div>
        `)}
      </div>
      
      <div class="u-mb-4">
        ${Button({ label: '+ Add Endpoint to Chain', variant: 'secondary', size: 'sm', onClick: addNamespace })}
      </div>
    `;
  };

  const renderResults = (state) => {
    if (state.isLoading) {
      return html`<div class="u-text-muted" style="padding: var(--space-4); text-align: center;">Executing enrichment chain...</div>`;
    }
    
    if (state.error) {
      return html`<div style="color: var(--color-error); padding: var(--space-4); background: color-mix(in srgb, var(--color-error) 10%, transparent); border-radius: var(--radius-md);">${state.error}</div>`;
    }

    if (state.logs.length === 0 && state.flattenedKeys.length === 0) {
      return html`<div class="u-text-muted u-text-sm" style="padding: var(--space-4); text-align: center; border: 1px dashed var(--color-border); border-radius: var(--radius-md);">
        Configure a service, record ID, and at least one endpoint, then click Test.
      </div>`;
    }

    return html`
      <div class="form-grid-2">
        <div style="background: var(--color-bg-subtle); border-radius: var(--radius-md); border: 1px solid var(--color-border); overflow: hidden; display: flex; flex-direction: column;">
          <div style="padding: var(--space-2) var(--space-3); background: var(--color-bg-card); border-bottom: 1px solid var(--color-border); font-weight: bold; font-size: 0.9rem;">
            Execution Logs
          </div>
          <div style="padding: var(--space-3); flex: 1; overflow-y: auto; max-height: 400px; font-family: monospace; font-size: 0.85rem; line-height: 1.5; color: var(--color-text-muted);">
            ${state.logs.map(log => html`<div class="u-mb-1" style="color: ${log.includes('Error') || log.includes('Exception') ? 'var(--color-error)' : (log.includes('Skipped') ? 'var(--color-warning)' : 'inherit')};">${log}</div>`)}
          </div>
        </div>

        <div style="background: var(--color-bg-subtle); border-radius: var(--radius-md); border: 1px solid var(--color-border); overflow: hidden; display: flex; flex-direction: column;">
          <div style="padding: var(--space-2) var(--space-3); background: var(--color-bg-card); border-bottom: 1px solid var(--color-border); font-weight: bold; font-size: 0.9rem;">
            Discovered Context Variables (Flattened)
          </div>
          <div style="padding: var(--space-3); flex: 1; overflow-y: auto; max-height: 400px; font-size: 0.85rem;">
            ${state.flattenedKeys.length === 0 
              ? html`<div class="u-text-muted">No additional fields discovered.</div>`
              : html`<table style="width: 100%; text-align: left; border-collapse: collapse;">
                  <tbody>
                    ${state.flattenedKeys.map(k => html`
                      <tr style="border-bottom: 1px solid var(--color-border);">
                        <td style="padding: 4px 0; font-family: monospace; color: var(--color-accent);">{${k.path}}</td>
                        <td style="padding: 4px 0; color: var(--color-text-muted); font-size: 0.8rem; text-align: right; overflow: hidden; text-overflow: ellipsis; max-width: 150px; white-space: nowrap;" title=${k.sample}>${k.sample}</td>
                      </tr>
                    `)}
                  </tbody>
                </table>`
            }
          </div>
        </div>
      </div>
      
      <div class="u-mt-4 u-flex u-items-center u-justify-between" style="padding-top: var(--space-4); border-top: 1px solid var(--color-border);">
        <p class="u-text-sm u-text-muted" style="margin: 0; max-width: 500px;">
          If the variables look correct, you can save these endpoints directly to the Service configuration.
        </p>
        <div class="u-flex u-gap-2 u-items-center">
          ${state.saveSuccess ? html`<span style="color: var(--color-success); font-weight: bold; font-size: 0.9rem;" class="u-flex u-items-center u-gap-1">${Icon({ name: 'check' })} Saved!</span>` : nothing}
          ${Button({ label: 'Save to Service Config', variant: 'save', onClick: handleSaveToService, disabled: state.isLoading || !state.contextData })}
        </div>
      </div>
    `;
  };

  const view = () => {
    const state = store.get();
    const snapshot = queryCache.read(settingsKeys.all);
    const services = snapshot?.data?.services || {};
    const serviceKeys = Object.keys(services);

    if (!state.selectedService && serviceKeys.length > 0) {
      setTimeout(() => store.set(s => ({ ...s, selectedService: serviceKeys[0] })), 0);
    }

    return html`
      <div class="page-container">
        <header class="page-header u-mb-6">
          <div class="u-flex u-items-center u-gap-3 u-mb-2">
            <h1 class="page-title u-m-0">API Enrichment Sandbox</h1>
            <span class="badge" style="background: var(--color-accent); color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 0.75rem;">BETA</span>
          </div>
          <p class="page-subtitle">Interactively build, test, and chain enrichment endpoints before deploying them.</p>
        </header>

        <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); padding: var(--space-4);" class="u-mb-5">
          <h3 style="margin-top: 0; font-size: 1.1rem; color: var(--color-text); margin-bottom: var(--space-4);">1. Target & Context</h3>
          
          <div class="form-grid-2 u-mb-4">
            <div class="form-group u-mb-0">
              <label>Service Configuration</label>
              <select class="form-select" @change=${e => store.set(s => ({...s, selectedService: e.target.value}))}>
                ${serviceKeys.length === 0 ? html`<option value="">No services configured</option>` : nothing}
                ${serviceKeys.map(k => html`<option value=${k} ?selected=${state.selectedService === k}>${services[k].name || k}</option>`)}
              </select>
            </div>
            
            <div class="form-group u-mb-0">
              <label>Pipeline Record ID (Base Context)</label>
              <input type="number" class="form-input font-mono" placeholder="e.g. 42" .value=${state.selectedRecordId} @input=${e => store.set(s => ({...s, selectedRecordId: e.target.value}))}>
              <small class="u-text-muted">Enter the numeric ID of a row in the Pipeline table to use its columns as starting variables.</small>
            </div>
          </div>
        </div>

        <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); padding: var(--space-4);" class="u-mb-5">
          <div class="u-flex u-items-center u-justify-between u-mb-4">
            <h3 style="margin: 0; font-size: 1.1rem; color: var(--color-text);">2. Enrichment Chain</h3>
            ${Button({ label: 'Test Chain', variant: 'test', onClick: handleTest, disabled: state.isLoading })}
          </div>
          
          ${renderNamespaces(state)}
        </div>

        <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); padding: var(--space-4);">
          <h3 style="margin-top: 0; font-size: 1.1rem; color: var(--color-text); margin-bottom: var(--space-4);">3. Results & Mapping Context</h3>
          
          ${renderResults(state)}
        </div>
      </div>
    `;
  };

  return {
    view,
    mount: () => {
      // Preload settings if not available
      const snapshot = queryCache.read(settingsKeys.all);
      if (!snapshot?.data) {
        http.get('/api/v1/settings').then(data => {
          queryCache.setData(settingsKeys.all, () => data);
          store.set(s => ({...s}));
        }).catch(console.error);
      }
    }
  };
}
