import { html, nothing } from 'lit-html';
import { Button } from '../../../shared/ui/atoms/Button/Button.js';
import { Icon } from '../../../shared/ui/atoms/Icon/Icon.js';

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
        <div style="width: 140px;">
          <input
            type="number"
            class="form-input u-font-mono u-text-sm"
            placeholder="Record ID (opt)"
            title="Optional Pipeline Record ID from database"
            .value=${selectedRecordId}
            @input=${(e) => onRecordIdChange?.(e.target.value)}
          />
        </div>

        <!-- Optional Live Sample Endpoint -->
        <div style="flex: 2; min-width: 220px;">
          <input
            type="text"
            class="form-input u-font-mono u-text-sm"
            placeholder="Sample Endpoint (e.g. /api/v3/history?pageSize=1)"
            title="Optional upstream live sample endpoint to seed context without DB records"
            .value=${sampleEndpoint}
            @input=${(e) => onSampleEndpointChange?.(e.target.value)}
          />
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
            style="resize: vertical; line-height: 1.4; width: 100%;"
          ></textarea>
        </div>
      </details>
    </div>
  `;
}
