import { html, nothing } from 'lit-html';
import { Button } from '../../../shared/ui/atoms/Button/Button.js';

export function createNotificationsPanel(store, notificationsData = {}) {
  const triggerKeys = Object.keys(notificationsData.triggers || {});

  const handleAddTrigger = () => {
    store.set(s => ({ ...s, isNotificationModalOpen: true }));
  };

  return html`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Notification Triggers</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Configure event-driven alerts dispatching to NTFY topics or custom Webhooks.</p>
        </div>
        <div class="u-flex u-gap-2">
          ${Button({ label: 'Test Alert', variant: 'test', size: 'sm', onClick: () => alert('Test alert') })}
          ${Button({ label: '+ Add Trigger', variant: 'add', size: 'sm', onClick: handleAddTrigger })}
        </div>
      </div>
      
      <div class="u-flex u-flex-col">
        ${triggerKeys.length === 0 
          ? html`<div class="u-text-muted u-text-sm" style="padding: var(--space-4);">No triggers configured.</div>` 
          : nothing}
        <!-- In the future, map and render trigger list here -->
      </div>
    </div>
  `;
}
