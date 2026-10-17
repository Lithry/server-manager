import { html, nothing } from 'lit-html';
import { Button } from '../../../shared/ui/atoms/Button/Button.js';
import { Icon } from '../../../shared/ui/atoms/Icon/Icon.js';

const KNOWN_SERVICE_ENDPOINTS = {
  sonarr: [
    '/api/v3/history?pageSize=1',
    '/api/v3/queue?pageSize=1',
    '/api/v3/history',
    '/api/v3/queue',
    '/api/v3/series',
    '/api/v3/episode',
    '/api/v3/tag'
  ],
  radarr: [
    '/api/v3/history?pageSize=1',
    '/api/v3/queue?pageSize=1',
    '/api/v3/history',
    '/api/v3/queue',
    '/api/v3/movie',
    '/api/v3/tag'
  ],
  shoko: [
    '/api/v3/Series',
    '/api/v3/Episode',
    '/api/v3/File'
  ],
  jellyfin: [
    '/Items?Recursive=true',
    '/Users',
    '/System/Info'
  ]
};

function resolveAvailableEndpoints(selectedService, currentService) {
  if (!currentService && !selectedService) {
    return [];
  }

  const endpoints = [];

  if (currentService?.poll_endpoint && typeof currentService.poll_endpoint === 'string') {
    const trimmed = currentService.poll_endpoint.trim();
    if (trimmed) {
      endpoints.push(trimmed);
    }
  }

  if (currentService?.enrichment_endpoints) {
    const rawValues = Array.isArray(currentService.enrichment_endpoints)
      ? currentService.enrichment_endpoints
      : Object.values(currentService.enrichment_endpoints);

    for (const val of rawValues) {
      if (typeof val === 'string' && val.trim()) {
        endpoints.push(val.trim());
      }
    }
  }

  const keyLower = String(selectedService || '').toLowerCase();
  const nameLower = String(currentService?.name || '').toLowerCase();
  const combined = `${keyLower} ${nameLower}`;

  if (combined.includes('sonarr')) {
    endpoints.push(...KNOWN_SERVICE_ENDPOINTS.sonarr);
  } else if (combined.includes('radarr')) {
    endpoints.push(...KNOWN_SERVICE_ENDPOINTS.radarr);
  } else if (combined.includes('shoko')) {
    endpoints.push(...KNOWN_SERVICE_ENDPOINTS.shoko);
  } else if (combined.includes('jellyfin')) {
    endpoints.push(...KNOWN_SERVICE_ENDPOINTS.jellyfin);
  }

  return Array.from(new Set(endpoints));
}

export function ContextSourceControls({
  services = {},
  selectedService = '',
  selectedRecordId = '',
  sampleEndpoint = '',
  customContextText = '',
  customContextError = null,
  testName = '',
  isLoading = false,
  saveSuccess = false,
  onServiceChange,
  onRecordIdChange,
  onSampleEndpointChange,
  onCustomContextChange,
  onTestNameChange,
  onRunTest,
  onSaveToService
}) {
  const serviceKeys = Object.keys(services);
  const currentService = services[selectedService];
  const availableEndpoints = resolveAvailableEndpoints(selectedService, currentService);

  return html`
    <div class="u-flex u-flex-col u-gap-3" style="flex-shrink: 0;">
      <!-- Primary Controls Row -->
      <div class="u-flex u-gap-3 u-items-center" style="flex-wrap: wrap;">
        <!-- Service Selector -->
        <div style="flex: 1; min-width: 160px; max-width: 240px;">
          <select
            class="form-select u-font-mono u-text-sm"
            @change=${(e) => onServiceChange?.(e.target.value)}
          >
            ${serviceKeys.length === 0 ? html`<option value="">No services configured</option>` : nothing}
            ${serviceKeys.map((k) => html`
              <option value=${k} ?selected=${selectedService === k}>
                ${services[k].name || k}
              </option>
            `)}
          </select>
        </div>

        <!-- Optional Record ID -->
        <div style="min-width: 120px; max-width: 140px; flex: 1;">
          <input
            type="number"
            class="form-input u-font-mono u-text-sm"
            placeholder="Record ID"
            title="Optional Pipeline Record ID from database"
            .value=${selectedRecordId}
            @input=${(e) => onRecordIdChange?.(e.target.value)}
          />
        </div>

        <!-- Optional Live Sample Endpoint -->
        <div style="flex: 2; min-width: 220px;">
          <input
            type="text"
            list="sandbox-endpoints-list"
            class="form-input u-font-mono u-text-sm"
            placeholder="Sample Endpoint"
            title="Optional upstream live sample endpoint to seed context without DB records"
            .value=${sampleEndpoint}
            @input=${(e) => onSampleEndpointChange?.(e.target.value)}
          />
          <datalist id="sandbox-endpoints-list">
            ${availableEndpoints.map((ep) => html`<option value="${ep}">${ep}</option>`)}
          </datalist>
        </div>

        <!-- Run Action -->
        ${Button({
          label: 'RUN',
          variant: 'test',
          loading: isLoading,
          disabled: isLoading || !selectedService || !!customContextError,
          onClick: onRunTest,
          style: 'padding: 6px 24px; letter-spacing: 0.5px;'
        })}

        <!-- Save Namespace Controls -->
        <div class="u-flex u-items-center u-gap-2" style="margin-left: auto;">
          <span style="color: var(--color-text-muted);">&gt;</span>
          <input
            type="text"
            class="form-input u-font-mono u-text-sm"
            placeholder="namespace"
            title="Enrichment point namespace name"
            .value=${testName}
            @input=${(e) => onTestNameChange?.(e.target.value)}
            style="width: 130px;"
          />
          ${Button({
            label: 'SAVE',
            variant: 'secondary',
            disabled: isLoading || !selectedService,
            onClick: onSaveToService,
            style: 'padding: 6px 20px;'
          })}
          ${saveSuccess ? html`<span style="color: var(--color-success);">${Icon({ name: 'check' })}</span>` : nothing}
        </div>
      </div>

      <!-- Collapsible Custom Context Row -->
      <details
        style="background: var(--color-bg-surface); border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3);"
      >
        <summary class="u-flex u-items-center u-justify-between u-text-xs u-font-mono" style="cursor: pointer; user-select: none; color: var(--color-text-secondary);">
          <div class="u-flex u-items-center u-gap-2">
            <span>Custom JSON Context (Mock / Override)</span>
            ${customContextText.trim() ? (
              customContextError
                ? html`<span class="u-text-2xs" style="color: var(--color-danger);">${customContextError}</span>`
                : html`<span class="u-text-2xs" style="color: var(--color-success);">✓ Valid JSON</span>`
            ) : html`<span class="u-text-2xs u-text-muted">(Optional)</span>`}
          </div>
          <span class="u-text-2xs u-text-muted">Click to toggle</span>
        </summary>
        <div class="u-mt-2">
          <textarea
            class="form-input u-font-mono u-text-xs"
            rows="3"
            placeholder='{"series": {"id": 101, "title": "Custom Show"}, "episodeId": 456}'
            .value=${customContextText}
            @input=${(e) => onCustomContextChange?.(e.target.value)}
            style="resize: none; line-height: 1.4; width: 100%;"
          ></textarea>
        </div>
      </details>
    </div>
  `;
}
