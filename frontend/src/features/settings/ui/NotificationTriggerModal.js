import { html } from 'lit-html';
import { Button } from '../../../shared/ui/atoms/Button/Button.js';
import { Modal } from '../../../shared/ui/organisms/Modal/Modal.js';
import { queryCache } from '../../../shared/api/index.js';
import { settingsKeys } from '../api.js';

export function createNotificationTriggerModal(store) {
  const handleClose = () => {
    store.set(s => ({ ...s, isNotificationModalOpen: false }));
  };

  const handleSave = (e) => {
    if (e) e.preventDefault();
    const id = document.getElementById('input-trig-id')?.value.trim();
    if (!id) {
      alert('Trigger ID is required.');
      return;
    }

    const event = document.getElementById('input-trig-event')?.value;
    const channel = document.getElementById('input-trig-channel')?.value;
    const target_url = document.getElementById('input-trig-url')?.value.trim();
    if (!target_url) {
      alert('Target URL is required.');
      return;
    }
    const topic = document.getElementById('input-trig-topic')?.value.trim() || '';
    const priority = document.getElementById('input-trig-priority')?.value.trim() || 'default';
    const tags = document.getElementById('input-trig-tags')?.value.trim() || 'server';
    const message_template = document.getElementById('input-trig-template')?.value.trim() || '{event}: {details}';

    const snapshot = queryCache.read(settingsKeys.all);
    if (!snapshot || !snapshot.data) return;

    const triggers = Array.isArray(snapshot.data.notification_triggers) ? [...snapshot.data.notification_triggers] : [];
    const filtered = triggers.filter(t => t.id !== id);

    filtered.push({
      id,
      event,
      enabled: true,
      channel,
      target_url,
      topic,
      priority,
      tags,
      message_template
    });

    queryCache.setData(settingsKeys.all, (prev) => ({
      ...prev,
      notification_triggers: filtered
    }));
    store.set(s => ({ ...s, isDirty: true, isNotificationModalOpen: false }));
  };

  const body = html`
    <form id="notification-trigger-form" @submit=${handleSave}>
      <div class="form-group u-mb-3">
        <label for="input-trig-id" class="u-text-sm u-font-medium">Trigger ID</label>
        <input 
          id="input-trig-id" 
          name="trigger_id" 
          type="text" 
          class="form-input u-font-mono" 
          placeholder="e.g. alert_critical_incident" 
          required 
        />
        <small class="u-text-muted u-text-xs">Unique identifier for this notification trigger rule.</small>
      </div>

      <div class="u-flex u-gap-3 u-mb-3">
        <div class="form-group" style="flex: 1;">
          <label for="input-trig-event" class="u-text-sm u-font-medium">Event</label>
          <select id="input-trig-event" name="event" class="form-select">
            <option value="ON_INCIDENT_OPEN" selected>Incident Opened</option>
            <option value="ON_INCIDENT_RESOLVED">Incident Resolved</option>
            <option value="ON_PIPELINE_COMPLETE">Pipeline Completed</option>
            <option value="ON_DEPLOY_SUCCESS">Deployment Succeeded</option>
          </select>
        </div>
        <div class="form-group" style="flex: 1;">
          <label for="input-trig-channel" class="u-text-sm u-font-medium">Channel</label>
          <select id="input-trig-channel" name="channel" class="form-select">
            <option value="ntfy" selected>NTFY Push Notification</option>
            <option value="webhook">Generic HTTP Webhook</option>
          </select>
        </div>
      </div>

      <div class="form-group u-mb-3">
        <label for="input-trig-url" class="u-text-sm u-font-medium">Target URL</label>
        <input 
          id="input-trig-url" 
          name="target_url" 
          type="text" 
          class="form-input" 
          value="http://host.docker.internal:8090" 
          placeholder="http://host.docker.internal:8090" 
          required 
        />
      </div>

      <div class="u-flex u-gap-3 u-mb-3">
        <div class="form-group" style="flex: 1;">
          <label for="input-trig-topic" class="u-text-sm u-font-medium">Topic (NTFY)</label>
          <input 
            id="input-trig-topic" 
            name="topic" 
            type="text" 
            class="form-input" 
            value="cubi-alerts" 
            placeholder="cubi-alerts" 
          />
        </div>
        <div class="form-group" style="flex: 1;">
          <label for="input-trig-priority" class="u-text-sm u-font-medium">Priority</label>
          <select id="input-trig-priority" name="priority" class="form-select">
            <option value="low">Low</option>
            <option value="default" selected>Default</option>
            <option value="high">High</option>
            <option value="urgent">Urgent</option>
          </select>
        </div>
      </div>

      <div class="form-group u-mb-3">
        <label for="input-trig-tags" class="u-text-sm u-font-medium">Tags (Comma-separated)</label>
        <input 
          id="input-trig-tags" 
          name="tags" 
          type="text" 
          class="form-input" 
          value="warning,server" 
          placeholder="warning,server" 
        />
      </div>

      <div class="form-group u-mb-3">
        <label for="input-trig-template" class="u-text-sm u-font-medium">Message Template</label>
        <input 
          id="input-trig-template" 
          name="message_template" 
          type="text" 
          class="form-input u-font-mono" 
          value="{event}: {details}" 
          placeholder="{event}: {details}" 
        />
      </div>
    </form>
  `;

  const footer = html`
    <div class="u-flex u-gap-2 u-justify-end">
      ${Button({ label: 'Cancel', variant: 'secondary', onClick: handleClose })}
      ${Button({ 
        label: 'Save Trigger', 
        variant: 'save', 
        onClick: () => handleSave()
      })}
    </div>
  `;

  return Modal({
    title: 'Configure Notification Trigger',
    size: 'md',
    onClose: handleClose,
    body,
    footer
  });
}
