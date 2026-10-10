import { html, nothing } from 'lit-html';
import { Button } from '../shared/ui/atoms/Button/Button.js';
import { Icon } from '../shared/ui/atoms/Icon/Icon.js';
import { http, queryCache } from '../shared/api/index.js';
import { settingsKeys } from '../features/settings/api.js';

function createSandboxStore() {
  let state = {
    selectedService: '',
    selectedRecordId: '',
    testName: '',
    testEndpoint: '',
    testResponse: null,
    logs: [],
    isLoading: false,
    error: null,
    saveSuccess: false,
    testVariable: ''
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
    const state = store.get();
    const { selectedService, selectedRecordId, testEndpoint, testName } = state;
    
    if (!selectedService || !selectedRecordId) {
      alert("Please select a service and provide a valid Pipeline Record ID.");
      return;
    }

    if (!selectedService || !selectedRecordId) {
      alert("Please select a service and provide a valid Pipeline Record ID.");
      return;
    }

    const snapshot = queryCache.read(settingsKeys.all);
    const services = snapshot?.data?.services || {};
    const currentService = services[selectedService];
    
    // Combine saved endpoints with the one being tested
    const enrichmentEndpoints = { ...(currentService?.enrichment_endpoints || {}) };
    
    // We add the test endpoint under a temporary namespace 'sandbox_test' (or the provided name)
    const activeNamespace = testName.trim() || 'sandbox_test';
    const isTestEndpointProvided = !!testEndpoint.trim();
    if (isTestEndpointProvided) {
      enrichmentEndpoints[activeNamespace] = testEndpoint.trim();
    }

    store.set(s => ({ ...s, isLoading: true, error: null, logs: [], testResponse: null }));
    
    try {
      const res = await http.post('/api/v1/pipeline/sandbox/enrichment', {
        service_id: selectedService,
        record_id: parseInt(selectedRecordId, 10),
        enrichment_endpoints: enrichmentEndpoints
      });

      // If a new endpoint was provided, show its result. Otherwise, show the entire context tree!
      const dataToShow = isTestEndpointProvided ? (res.context_data?.[activeNamespace] || null) : res.context_data;

      store.set(s => ({
        ...s,
        isLoading: false,
        logs: res.logs || [],
        testResponse: dataToShow
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
    const currentService = services[state.selectedService];

    const enrichmentEndpoints = { ...(currentService?.enrichment_endpoints || {}) };
    const name = state.testName.trim();
    const endpoint = state.testEndpoint.trim();

    if (!name || !endpoint) {
      alert("Please provide both a namespace name and an endpoint to save.");
      return;
    }

    enrichmentEndpoints[name] = endpoint;

    const newServices = { ...services, [state.selectedService]: { ...currentService, enrichment_endpoints: enrichmentEndpoints } };
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

  const view = () => {
    const state = store.get();
    const snapshot = queryCache.read(settingsKeys.all);
    const services = snapshot?.data?.services || {};
    const serviceKeys = Object.keys(services);
    const currentService = services[state.selectedService];

    if (!state.selectedService && serviceKeys.length > 0) {
      setTimeout(() => store.set(s => ({ ...s, selectedService: serviceKeys[0] })), 0);
    }

    const resolvePath = (obj, path) => {
      if (!path || !obj) return undefined;
      try {
        return path.split('.').reduce((acc, part) => acc && acc[part] !== undefined ? acc[part] : undefined, obj);
      } catch (e) {
        return undefined;
      }
    };
    
    const evaluatedVar = state.testVariable.trim() ? resolvePath(state.testResponse, state.testVariable.trim()) : undefined;

    return html`
      <div class="page-container" style="display: flex; flex-direction: column; height: 100%; min-height: 500px;">
        <!-- Top Controls -->
        <div class="u-flex u-gap-4 u-items-center u-mb-4" style="flex-shrink: 0;">
          <div style="flex: 1; max-width: 300px;">
            <select class="form-select font-mono" @change=${e => store.set(s => ({...s, selectedService: e.target.value}))} style="border: 1px solid var(--color-text);">
              ${serviceKeys.length === 0 ? html`<option value="">No services</option>` : nothing}
              ${serviceKeys.map(k => html`<option value=${k} ?selected=${state.selectedService === k}>${services[k].name || k}</option>`)}
            </select>
          </div>
          
          <div style="flex: 1; max-width: 200px;">
            <input type="number" class="form-input font-mono" placeholder="Record ID (e.g. 42)" .value=${state.selectedRecordId} @input=${e => store.set(s => ({...s, selectedRecordId: e.target.value}))} style="border: 1px solid var(--color-text);">
          </div>
          
          ${Button({ label: 'RUN', variant: 'test', onClick: handleTest, disabled: state.isLoading, style: 'border: 1px solid var(--color-text); padding: 8px 32px; letter-spacing: 1px;' })}
          
          <div class="u-flex u-items-center u-gap-2" style="margin-left: auto;">
            <span style="font-size: 1.2rem; color: var(--color-text);">&gt;</span>
            <input type="text" class="form-input font-mono" placeholder="namespace" .value=${state.testName} @input=${e => store.set(s => ({...s, testName: e.target.value}))} style="border: 1px solid var(--color-text); width: 120px;">
            ${Button({ label: 'SAVE', variant: 'secondary', onClick: handleSaveToService, disabled: state.isLoading, style: 'border: 1px solid var(--color-text); padding: 8px 32px; letter-spacing: 1px;' })}
            ${state.saveSuccess ? html`<span style="color: var(--color-success);">${Icon({ name: 'check' })}</span>` : nothing}
          </div>
        </div>

        <!-- Main Workspace -->
        <div class="u-flex u-gap-4" style="flex: 1; min-height: 0;">
          
          <!-- Left Column (Inputs and Response) -->
          <div class="u-flex u-flex-col u-gap-4" style="flex: 3; min-height: 0;">
            
            <div style="flex: 1; border: 1px solid var(--color-text); display: flex; flex-direction: column;">
              <textarea class="font-mono" placeholder="/api/v3/Endpoint/{ID}?query=..." style="flex: 1; background: transparent; border: none; padding: var(--space-3); color: var(--color-text); resize: none; outline: none;" .value=${state.testEndpoint} @input=${e => store.set(s => ({...s, testEndpoint: e.target.value}))}></textarea>
            </div>
            
            <div class="u-flex u-items-center u-justify-between u-mb-2">
              <h4 style="margin: 0; color: var(--color-text);">Respond</h4>
              <div class="u-text-xs u-text-muted">
                ${state.testEndpoint.trim() ? `Showing result for new namespace: ${state.testName.trim() || 'sandbox_test'}` : 'Showing complete cumulative context'}
              </div>
            </div>
            
            <!-- JSON Path Evaluator -->
            ${state.testResponse ? html`
              <div class="u-flex u-flex-col u-gap-2 u-mb-2" style="background: var(--color-bg-surface); padding: var(--space-2); border: 1px solid var(--color-border); border-radius: var(--radius-sm); min-width: 0;">
                <div class="u-flex u-gap-2 u-items-center">
                  <span style="color: var(--color-text-muted); font-size: 0.85rem;">Test Path:</span>
                  <input type="text" class="form-input font-mono u-text-sm" placeholder="e.g. file.List.0.ID" .value=${state.testVariable} @input=${e => store.set(s => ({...s, testVariable: e.target.value}))} style="flex: 1; min-width: 0; border: 1px solid var(--color-border); padding: 4px 8px; background: transparent;">
                </div>
                ${state.testVariable.trim() ? html`
                  <div style="padding: 8px; background: #000; color: ${evaluatedVar !== undefined ? 'var(--color-success)' : 'var(--color-error)'}; font-family: monospace; font-size: 0.85rem; max-height: 200px; overflow: auto; border-radius: var(--radius-sm);">
                    <pre style="margin: 0; white-space: pre-wrap;">${evaluatedVar !== undefined ? JSON.stringify(evaluatedVar, null, 2) : 'undefined'}</pre>
                  </div>
                ` : nothing}
              </div>
            ` : nothing}
            
            <div style="flex: 2; border: 1px solid var(--color-text); background: #000; overflow: auto; padding: var(--space-3); color: #FFFFFF; font-family: monospace; font-size: 0.85rem;">
              ${state.isLoading ? 'Running test...' : nothing}
              ${state.error ? html`<div style="color: var(--color-error);">${state.error}</div>` : nothing}
              ${!state.isLoading && !state.error && state.testResponse ? html`<pre style="margin: 0; white-space: pre-wrap;">${JSON.stringify(state.testResponse, null, 2)}</pre>` : nothing}
              ${!state.isLoading && !state.error && !state.testResponse && state.logs.length > 0 ? html`<div style="color: var(--color-warning);">Endpoint returned empty or failed.\n\nCheck logs:\n${state.logs.join('\n')}</div>` : nothing}
              ${!state.isLoading && !state.error && !state.testResponse && state.logs.length === 0 && !state.testEndpoint.trim() ? html`<div style="color: var(--color-text-muted);">Click RUN with an empty input to fetch the full context, or type an endpoint to test a new request.</div>` : nothing}
            </div>
            
          </div>
          
          <!-- Right Column (Saved Enrichment Points) -->
          <div style="flex: 1; border: 1px solid var(--color-text); padding: var(--space-4); overflow-y: auto;">
            <h3 style="margin-top: 0; text-align: center; color: var(--color-text); font-weight: 500; font-size: 1.1rem; margin-bottom: var(--space-4);">Enrichment Points</h3>
            
            <div class="u-flex u-flex-col u-gap-3">
              ${Object.keys(currentService?.enrichment_endpoints || {}).length === 0 ? html`<div class="u-text-muted u-text-center">No saved endpoints.</div>` : nothing}
              
              ${Object.entries(currentService?.enrichment_endpoints || {}).map(([name, ep]) => html`
                <div style="padding: var(--space-2) 0; cursor: pointer;" @click=${() => store.set(s => ({...s, testName: name, testEndpoint: ep}))}>
                  <strong style="color: var(--color-text); display: block; margin-bottom: 2px;">${name}</strong>
                  <div style="color: var(--color-text-muted); font-size: 0.75rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title=${ep}>${ep}</div>
                </div>
              `)}
            </div>
          </div>
          
        </div>
      </div>
    `;
  };

  let unsub;
  return {
    view,
    mount: (render) => {
      unsub = store.subscribe(render);
      // Preload settings if not available
      const snapshot = queryCache.read(settingsKeys.all);
      if (!snapshot?.data) {
        http.get('/api/v1/settings').then(data => {
          queryCache.setData(settingsKeys.all, () => data);
          store.set(s => ({...s}));
        }).catch(console.error);
      }
    },
    unmount: () => {
      if (unsub) unsub();
    }
  };
}
