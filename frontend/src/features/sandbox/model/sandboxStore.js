import { http, queryCache } from '../../../shared/api/index.js';
import { settingsKeys } from '../../settings/api.js';
import { sandboxApi } from '../api.js';

export function createSandboxStore() {
  let state = {
    selectedService: '',
    selectedRecordId: '',
    sampleEndpoint: '',
    customContextText: '',
    customContextError: null,
    testName: '',
    testEndpoint: '',
    testResponse: null,
    rawContextData: null,
    flattenedKeys: [],
    inspectorTab: 'keys',
    inspectorFilter: '',
    copiedPath: null,
    testVariable: '',
    logs: [],
    isLoading: false,
    error: null,
    saveSuccess: false
  };
  const listeners = new Set();

  const get = () => state;
  const set = (updater) => {
    state = typeof updater === 'function' ? updater(state) : { ...state, ...updater };
    listeners.forEach((l) => l());
  };
  const subscribe = (l) => {
    listeners.add(l);
    return () => listeners.delete(l);
  };

  const runTest = async () => {
    const s = get();
    if (!s.selectedService) {
      set({ error: 'Please select a configured service to test.' });
      return;
    }
    let parsedCustomContext = null;
    if (s.customContextText.trim()) {
      try {
        parsedCustomContext = JSON.parse(s.customContextText);
      } catch (e) {
        set({ error: `Invalid Custom JSON Context: ${e.message}` });
        return;
      }
    }
    const snapshot = queryCache.read(settingsKeys.all);
    const services = snapshot?.data?.services || {};
    const currentService = services[s.selectedService];
    const enrichmentEndpoints = { ...(currentService?.enrichment_endpoints || {}) };
    const activeNamespace = s.testName.trim() || 'sandbox_test';
    const isTestEndpointProvided = !!s.testEndpoint.trim();
    if (isTestEndpointProvided) {
      enrichmentEndpoints[activeNamespace] = s.testEndpoint.trim();
    }

    set({ isLoading: true, error: null, logs: [], testResponse: null });
    try {
      const res = await sandboxApi.testEnrichment({
        service_id: s.selectedService,
        record_id: s.selectedRecordId ? parseInt(s.selectedRecordId, 10) : null,
        sample_endpoint: s.sampleEndpoint.trim() || null,
        custom_context: parsedCustomContext,
        enrichment_endpoints: enrichmentEndpoints
      });
      const dataToShow = isTestEndpointProvided ? (res.context_data?.[activeNamespace] || null) : res.context_data;
      set({
        isLoading: false,
        logs: res.logs || [],
        rawContextData: res.context_data || null,
        flattenedKeys: res.flattened_keys || [],
        testResponse: dataToShow
      });
    } catch (err) {
      set({ isLoading: false, error: err.message });
    }
  };

  const saveEndpoint = async () => {
    const s = get();
    if (!s.selectedService) return;
    const name = s.testName.trim();
    const ep = s.testEndpoint.trim();
    if (!name || !ep) {
      set({ error: 'Please provide both a namespace name and an endpoint to save.' });
      return;
    }
    const snapshot = queryCache.read(settingsKeys.all);
    const services = snapshot?.data?.services || {};
    const currentService = services[s.selectedService];
    const enrichmentEndpoints = { ...(currentService?.enrichment_endpoints || {}), [name]: ep };
    const newServices = { ...services, [s.selectedService]: { ...currentService, enrichment_endpoints: enrichmentEndpoints } };
    const newSettings = { ...snapshot.data, services: newServices };
    try {
      await http.post('/api/v1/settings/config', newSettings);
      queryCache.setData(settingsKeys.all, () => newSettings);
      set({ saveSuccess: true, error: null });
      setTimeout(() => set({ saveSuccess: false }), 3000);
    } catch (err) {
      set({ error: `Failed to save to service: ${err.message}` });
    }
  };

  const copyPath = (path) => {
    navigator.clipboard?.writeText(path);
    set({ copiedPath: path });
    setTimeout(() => {
      if (get().copiedPath === path) set({ copiedPath: null });
    }, 1500);
  };

  const insertPlaceholder = (path) => {
    const placeholder = `{${path}}`;
    const cur = get().testEndpoint;
    let next;
    if (!cur) {
      next = placeholder;
    } else if (cur.endsWith('/') || cur.endsWith('=') || cur.endsWith('&')) {
      next = cur + placeholder;
    } else {
      next = cur + (cur.includes('?') ? '&' : '/') + placeholder;
    }
    set({ testEndpoint: next });
  };

  return { get, set, subscribe, runTest, saveEndpoint, copyPath, insertPlaceholder };
}
