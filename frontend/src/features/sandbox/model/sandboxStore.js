import { http, queryCache } from '../../../shared/api/index.js';
import { settingsKeys } from '../../settings/api.js';
import { sandboxApi } from '../api.js';

export function createSandboxStore() {
  let state = {
    selectedService: '',
    selectedPipelineId: 'default',
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

  const toggleEndpoint = (name, ep) => {
    const trimmed = (ep || '').trim();
    if (!trimmed) return;
    const current = get().testEndpoint;
    const lines = current
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);

    let nextLines;
    if (lines.includes(trimmed)) {
      nextLines = lines.filter((l) => l !== trimmed);
    } else {
      nextLines = [...lines, trimmed];
    }
    set({ testEndpoint: nextLines.join('\n') });
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

    const lines = s.testEndpoint
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);

    const enrichmentEndpoints = {};
    if (lines.length > 0) {
      const saved = currentService?.enrichment_endpoints || {};
      const urlToSavedKey = new Map();
      for (const [k, v] of Object.entries(saved)) {
        if (typeof v === 'string' && v.trim()) {
          urlToSavedKey.set(v.trim(), k);
        }
      }

      lines.forEach((line, idx) => {
        let key = urlToSavedKey.get(line);
        if (!key) {
          const candidate = s.testName.trim();
          if (candidate && !enrichmentEndpoints[candidate]) {
            key = candidate;
          } else {
            key = `test_${idx}`;
            let counter = idx;
            while (enrichmentEndpoints[key]) {
              counter++;
              key = `test_${counter}`;
            }
          }
        }
        enrichmentEndpoints[key] = line;
      });
    }

    set({ isLoading: true, error: null, logs: [], testResponse: null });
    try {
      const res = await sandboxApi.testEnrichment({
        service_id: s.selectedService,
        pipeline_id: s.selectedPipelineId || 'default',
        record_id: s.selectedRecordId ? parseInt(s.selectedRecordId, 10) : null,
        sample_endpoint: s.sampleEndpoint.trim() || null,
        custom_context: parsedCustomContext,
        enrichment_endpoints: enrichmentEndpoints
      });

      let dataToShow = res.context_data;
      if (lines.length === 1) {
        const onlyKey = Object.keys(enrichmentEndpoints)[0];
        if (onlyKey && res.context_data?.[onlyKey] !== undefined) {
          dataToShow = res.context_data[onlyKey];
        }
      } else if (lines.length > 1) {
        const multiData = {};
        for (const k of Object.keys(enrichmentEndpoints)) {
          if (res.context_data?.[k] !== undefined) {
            multiData[k] = res.context_data[k];
          }
        }
        if (Object.keys(multiData).length > 0) {
          dataToShow = multiData;
        }
      }

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
    const lines = s.testEndpoint
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);

    if (!name || lines.length === 0) {
      set({ error: 'Please provide both a namespace name and an endpoint to save.' });
      return;
    }
    const snapshot = queryCache.read(settingsKeys.all);
    const services = snapshot?.data?.services || {};
    const currentService = services[s.selectedService];
    const existing = currentService?.enrichment_endpoints || {};
    const unsavedLine = lines.find((l) => !Object.values(existing).map((v) => String(v).trim()).includes(l));
    const epToSave = unsavedLine || lines[lines.length - 1];

    const enrichmentEndpoints = { ...existing, [name]: epToSave };
    const newServices = { ...services, [s.selectedService]: { ...currentService, enrichment_endpoints: enrichmentEndpoints } };
    const newSettings = { ...snapshot.data, services: newServices };
    try {
      const updated = await http.post('/api/v1/settings', newSettings);
      queryCache.setData(settingsKeys.all, () => updated);
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
    if (!cur) {
      set({ testEndpoint: placeholder });
      return;
    }
    const lines = cur.split('\n');
    const lastLine = lines[lines.length - 1];
    let nextLastLine;
    if (!lastLine || lastLine.endsWith('/') || lastLine.endsWith('=') || lastLine.endsWith('&')) {
      nextLastLine = lastLine + placeholder;
    } else {
      nextLastLine = lastLine + (lastLine.includes('?') ? '&' : '/') + placeholder;
    }
    lines[lines.length - 1] = nextLastLine;
    set({ testEndpoint: lines.join('\n') });
  };

  return { get, set, subscribe, toggleEndpoint, runTest, saveEndpoint, copyPath, insertPlaceholder };
}
