import { html, nothing } from 'lit-html';
import { Button } from '../../../shared/ui/atoms/Button/Button.js';
import { Badge } from '../../../shared/ui/atoms/Badge/Badge.js';
import { ConfirmDialog } from '../../../shared/ui/organisms/ConfirmDialog/ConfirmDialog.js';
import { http, queryCache } from '../../../shared/api/index.js';
import { settingsKeys } from '../api.js';

export function createNotificationsPanel(store, notificationsData = {}) {
  const triggers = Array.isArray(notificationsData.notification_triggers) 
    ? notificationsData.notification_triggers 
    : (Array.isArray(notificationsData.triggers) ? notificationsData.triggers : []);

  const handleAddTrigger = () => {
    store.set(s => ({ ...s, isNotificationModalOpen: true }));
  };

  const handleTestTrigger = async (trig) => {
    try {
      const resp = await http.post('/api/v1/settings/test-notification', {
        trigger_id: trig?.id,
        channel: trig?.channel || 'ntfy',
        target_url: trig?.target_url || 'http://host.docker.internal:8090',
        topic: trig?.topic || 'cubi-alerts',
        message: `Test alert from ServerManager for trigger: ${trig?.id || 'manual'}`
      });
      if (resp && resp.success) {
        alert(`✓ Notification successfully dispatched to ${trig?.channel || 'ntfy'}`);
      } else {
        const errorMsg = resp?.error || (resp?.status_code ? `HTTP ${resp.status_code}: ${resp.response || 'Failed'}` : (resp?.response || 'Unknown response'));
        alert(`Failed to send alert: ${errorMsg}`);
      }
    } catch (err) {
      alert(`Error sending test notification: ${err.message}`);
    }
  };

  const handleDeleteTrigger = async (triggerId) => {
    const confirmed = await ConfirmDialog({
      title: 'Delete Notification Trigger',
      message: `Are you sure you want to delete trigger '${triggerId}'? This change will be applied upon saving settings.`,
      confirmLabel: 'Delete',
      tone: 'danger'
    });

    if (confirmed) {
      const snapshot = queryCache.read(settingsKeys.all);
      if (!snapshot || !snapshot.data) return;

      const currentTriggers = Array.isArray(snapshot.data.notification_triggers) ? snapshot.data.notification_triggers : [];
      const updatedTriggers = currentTriggers.filter(t => t.id !== triggerId);
      queryCache.setData(settingsKeys.all, (prev) => ({
        ...prev,
        notification_triggers: updatedTriggers
      }));
      store.set(s => ({ ...s, isDirty: true }));
    }
  };

  const handleToggleEnabled = (triggerId, currentEnabled) => {
    const snapshot = queryCache.read(settingsKeys.all);
    if (!snapshot || !snapshot.data) return;

    const currentTriggers = Array.isArray(snapshot.data.notification_triggers) ? snapshot.data.notification_triggers : [];
    const updatedTriggers = currentTriggers.map(t => {
      if (t.id === triggerId) {
        return { ...t, enabled: !currentEnabled };
      }
      return t;
    });
    queryCache.setData(settingsKeys.all, (prev) => ({
      ...prev,
      notification_triggers: updatedTriggers
    }));
    store.set(s => ({ ...s, isDirty: true }));
  };

  const getEventTone = (event) => {
    if (event.includes('OPEN') || event.includes('FAIL')) return 'warning';
    if (event.includes('RESOLVED') || event.includes('SUCCESS') || event.includes('COMPLETE')) return 'success';
    return 'info';
  };

  return html`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Notification Triggers</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Configure event-driven alerts dispatching to NTFY topics or custom Webhooks.</p>
        </div>
        <div class="u-flex u-gap-2">
          ${Button({ 
            label: 'Test NTFY Endpoint', 
            variant: 'secondary', 
            size: 'sm', 
            onClick: () => handleTestTrigger({ channel: 'ntfy', target_url: 'http://host.docker.internal:8090', topic: 'cubi-alerts' }) 
          })}
          ${Button({ 
            label: '+ Add Trigger', 
            variant: 'save', 
            size: 'sm', 
            onClick: handleAddTrigger 
          })}
        </div>
      </div>
      
      <div class="u-flex u-flex-col" style="padding: var(--space-4); gap: var(--space-3);">
        ${triggers.length === 0 
          ? html`<div class="u-text-muted u-text-sm" style="text-align: center; padding: var(--space-6);">No notification triggers configured. Click <strong>+ Add Trigger</strong> to register one.</div>` 
          : triggers.map(trig => html`
            <div 
              class="u-flex u-flex-col u-gap-2"
              style="background: var(--color-bg-surface); border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: var(--space-3);"
            >
              <div class="u-flex u-items-center u-justify-between">
                <div class="u-flex u-items-center u-gap-2">
                  <strong class="u-font-mono u-text-sm" style="color: var(--color-text);">${trig.id}</strong>
                  ${Badge({ label: trig.event || 'ON_INCIDENT_OPEN', tone: getEventTone(trig.event || ''), size: 'sm' })}
                  ${Badge({ label: trig.channel || 'ntfy', tone: 'neutral', size: 'sm' })}
                  ${trig.enabled === false ? Badge({ label: 'Disabled', tone: 'danger', size: 'sm' }) : nothing}
                </div>
                <div class="u-flex u-items-center u-gap-2">
                  <button 
                    class="u-text-xs" 
                    style="background: transparent; border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: 3px 8px; color: var(--color-text-muted); cursor: pointer;"
                    @click=${() => handleToggleEnabled(trig.id, trig.enabled !== false)}
                  >
                    ${trig.enabled === false ? 'Enable' : 'Disable'}
                  </button>
                  ${Button({ 
                    label: 'Test Alert', 
                    variant: 'secondary', 
                    size: 'sm', 
                    onClick: () => handleTestTrigger(trig) 
                  })}
                  ${Button({ 
                    label: 'Delete', 
                    variant: 'delete', 
                    size: 'sm', 
                    onClick: () => handleDeleteTrigger(trig.id) 
                  })}
                </div>
              </div>

              <div class="u-flex u-gap-4 u-mt-1 u-text-xs" style="color: var(--color-text-muted);">
                <div>
                  <span class="u-font-medium" style="color: var(--color-text);">Target:</span>
                  <span class="u-font-mono u-ml-1">${trig.target_url || '-'}</span>
                </div>
                ${trig.topic ? html`
                  <div>
                    <span class="u-font-medium" style="color: var(--color-text);">Topic:</span>
                    <span class="u-font-mono u-ml-1">${trig.topic}</span>
                  </div>
                ` : nothing}
                ${trig.priority ? html`
                  <div>
                    <span class="u-font-medium" style="color: var(--color-text);">Priority:</span>
                    <span class="u-ml-1">${trig.priority}</span>
                  </div>
                ` : nothing}
                ${trig.tags ? html`
                  <div>
                    <span class="u-font-medium" style="color: var(--color-text);">Tags:</span>
                    <span class="u-ml-1">${trig.tags}</span>
                  </div>
                ` : nothing}
              </div>
            </div>
          `)}
      </div>
    </div>
  `;
}
