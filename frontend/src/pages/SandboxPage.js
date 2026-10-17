import { html, nothing } from 'lit-html';
import { http, queryCache } from '../shared/api/index.js';
import { settingsKeys } from '../features/settings/api.js';
import { createSandboxStore } from '../features/sandbox/model/sandboxStore.js';
import { ContextSourceControls } from '../features/sandbox/ui/ContextSourceControls.js';
import { PayloadInspector } from '../features/sandbox/ui/PayloadInspector.js';
import { SavedEndpointsList } from '../features/sandbox/ui/SavedEndpointsList.js';

export function createSandboxPage() {
  const store = createSandboxStore();

  const handleCustomContextChange = (val) => {
    let err = null;
    if (val.trim()) {
      try {
        JSON.parse(val);
      } catch (e) {
        err = 'Invalid JSON syntax';
      }
    }
    store.set({ customContextText: val, customContextError: err });
  };

  const view = () => {
    const state = store.get();
    const snapshot = queryCache.read(settingsKeys.all);
    const services = snapshot?.data?.services || {};
    const serviceKeys = Object.keys(services);
    const currentService = services[state.selectedService];

    if (!state.selectedService && serviceKeys.length > 0) {
      setTimeout(() => store.set({ selectedService: serviceKeys[0] }), 0);
    }

    return html`
      <div class="u-flex u-flex-col u-gap-3" style="height: 100%; min-height: 520px;">
        <!-- Top Controls: Service, Record ID, Sample Endpoint, Mock Context, Actions -->
        ${ContextSourceControls({
          services,
          selectedService: state.selectedService,
          selectedRecordId: state.selectedRecordId,
          sampleEndpoint: state.sampleEndpoint,
          customContextText: state.customContextText,
          customContextError: state.customContextError,
          testName: state.testName,
          isLoading: state.isLoading,
          saveSuccess: state.saveSuccess,
          onServiceChange: (val) => store.set({ selectedService: val }),
          onRecordIdChange: (val) => store.set({ selectedRecordId: val }),
          onSampleEndpointChange: (val) => store.set({ sampleEndpoint: val }),
          onCustomContextChange: handleCustomContextChange,
          onTestNameChange: (val) => store.set({ testName: val }),
          onRunTest: store.runTest,
          onSaveToService: store.saveEndpoint
        })}

        <!-- Error Feedback Banner -->
        ${state.error ? html`
          <div class="u-flex u-items-center u-justify-between u-text-xs" style="padding: var(--space-2) var(--space-3); background: color-mix(in srgb, var(--color-danger) 15%, transparent); border: 1px solid var(--color-danger); color: var(--color-danger); border-radius: var(--radius-sm);">
            <span>${state.error}</span>
            <button type="button" style="background: none; border: none; color: inherit; cursor: pointer;" @click=${() => store.set({ error: null })}>✕</button>
          </div>
        ` : nothing}

        <!-- Main Workspace -->
        <div class="u-flex u-gap-3" style="flex: 1; min-height: 0;">
          <!-- Left Column: Endpoint Input & Payload Inspector -->
          <div class="u-flex u-flex-col u-gap-2" style="flex: 3; min-height: 0;">
            <div style="background: var(--color-bg-card); border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: var(--space-2);">
              <div class="u-flex u-items-center u-justify-between u-mb-1">
                <span class="u-font-mono" style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">Endpoint Templates (one per line, e.g. /api/v3/series/{seriesId})</span>
                <span style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">Use {path} placeholders</span>
              </div>
              <textarea
                class="form-input u-font-mono"
                placeholder="/api/v3/endpoint/{id} (one per line)"
                rows="3"
                style="resize: none; min-height: 48px; width: 100%; border: none; background: transparent; padding: 0; outline: none; line-height: 1.4; font-size: var(--font-size-sm);"
                .value=${state.testEndpoint}
                @input=${(e) => store.set({ testEndpoint: e.target.value })}
              ></textarea>
            </div>

            <div style="flex: 1; min-height: 0;">
              ${PayloadInspector({
                flattenedKeys: state.flattenedKeys,
                response: state.testResponse,
                rawContext: state.rawContextData,
                logs: state.logs,
                activeTab: state.inspectorTab,
                filterQuery: state.inspectorFilter,
                copiedPath: state.copiedPath,
                onTabChange: (tab) => store.set({ inspectorTab: tab }),
                onFilterChange: (q) => store.set({ inspectorFilter: q }),
                onCopyPath: store.copyPath,
                onInsertPlaceholder: store.insertPlaceholder
              })}
            </div>
          </div>

          <!-- Right Column: Saved Endpoints List -->
          <div style="flex: 1; max-width: 280px; min-height: 0;">
            ${SavedEndpointsList({
              endpoints: currentService?.enrichment_endpoints || {},
              activeEndpoints: state.testEndpoint,
              onToggleEndpoint: store.toggleEndpoint
            })}
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
      const snapshot = queryCache.read(settingsKeys.all);
      if (!snapshot?.data) {
        http.get('/api/v1/settings').then((data) => {
          queryCache.setData(settingsKeys.all, () => data);
          store.set({});
        }).catch(console.error);
      }
    },
    unmount: () => {
      if (unsub) unsub();
    }
  };
}
