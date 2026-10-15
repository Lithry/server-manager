import { html } from 'lit-html';
import { Button } from '../../shared/ui/atoms/Button/Button.js';
import { Modal } from '../../shared/ui/organisms/Modal/Modal.js';
import { incidentsApi, incidentsKeys } from './api.js';
import { queryCache } from '../../shared/api/index.js';

export function createReportIncidentModal({ onClose, onIncidentCreated }) {
  let isSubmitting = false;

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const code = form.incident_code.value.trim().toUpperCase();
    const severity = form.severity.value;
    const component = form.component.value.trim();
    const details = form.details.value.trim();

    if (!code || !component || !details) {
      alert('Please fill in Code, Component, and Details.');
      return;
    }

    isSubmitting = true;
    try {
      await incidentsApi.createIncident({
        incident_code: code,
        severity,
        component,
        details
      });
      queryCache.invalidate(incidentsKeys.all);
      onIncidentCreated?.();
      onClose();
    } catch (err) {
      alert('Failed to report incident: ' + err.message);
    } finally {
      isSubmitting = false;
    }
  }

  const body = html`
    <form id="report-incident-form" @submit=${handleSubmit}>
      <div class="form-group u-mb-3">
        <label for="input-inc-code" class="u-text-sm u-font-medium">Incident / Error Code</label>
        <input 
          id="input-inc-code" 
          name="incident_code" 
          type="text" 
          class="form-input u-font-mono" 
          placeholder="e.g. ERR_SERVICE_UNREACHABLE" 
          required 
        />
        <small class="u-text-muted u-text-xs">Identifies the error category. If new, it auto-registers in catalog.</small>
      </div>

      <div class="u-flex u-gap-3 u-mb-3">
        <div class="form-group" style="flex: 1;">
          <label for="input-inc-severity" class="u-text-sm u-font-medium">Severity</label>
          <select id="input-inc-severity" name="severity" class="form-select">
            <option value="CRITICAL">CRITICAL</option>
            <option value="WARNING" selected>WARNING</option>
            <option value="INFO">INFO</option>
          </select>
        </div>
        <div class="form-group" style="flex: 1;">
          <label for="input-inc-component" class="u-text-sm u-font-medium">Component</label>
          <input 
            id="input-inc-component" 
            name="component" 
            type="text" 
            class="form-input" 
            placeholder="e.g. sonarr, storage, docker" 
            required 
          />
        </div>
      </div>

      <div class="form-group u-mb-3">
        <label for="input-inc-details" class="u-text-sm u-font-medium">Incident Details</label>
        <textarea 
          id="input-inc-details" 
          name="details" 
          class="form-input" 
          rows="3" 
          placeholder="Detailed description of the observed anomaly..." 
          required
        ></textarea>
      </div>
    </form>
  `;

  const footer = html`
    <div class="u-flex u-gap-2 u-justify-end">
      ${Button({ label: 'Cancel', variant: 'secondary', onClick: onClose })}
      ${Button({ 
        label: 'Report Incident', 
        variant: 'save', 
        type: 'submit',
        loading: isSubmitting,
        onClick: () => {
          const form = document.getElementById('report-incident-form');
          if (form) form.requestSubmit();
        }
      })}
    </div>
  `;

  return Modal({
    title: 'Report System Incident',
    size: 'md',
    onClose,
    body,
    footer
  });
}
