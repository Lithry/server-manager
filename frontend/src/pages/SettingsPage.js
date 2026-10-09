import { html, nothing } from 'lit-html';
import { settingsApi, settingsKeys } from '../features/settings/api.js';
import { queryCache } from '../shared/api/index.js';
import { createStore } from '../shared/lib/lib.js';
import { Button } from '../shared/ui/atoms/Button/Button.js';
import { Icon } from '../shared/ui/atoms/Icon/Icon.js';
import { ConfirmDialog } from '../shared/ui/organisms/ConfirmDialog/ConfirmDialog.js';
import { http } from '../shared/api/index.js';

import { createServicesPanel } from '../features/settings/ui/ServicesPanel.js';
import { createServiceModal } from '../features/settings/ui/ServiceModal.js';
import { createStagesPanel } from '../features/settings/ui/StagesPanel.js';
import { createStageModal } from '../features/settings/ui/StageModal.js';
import { createMappingsPanel } from '../features/settings/ui/MappingsPanel.js';
import { createMappingModal } from '../features/settings/ui/MappingModal.js';
import { createSampleApiModal } from '../features/settings/ui/SampleApiModal.js';
import { createNotificationsPanel } from '../features/settings/ui/NotificationsPanel.js';
import { createNotificationTriggerModal } from '../features/settings/ui/NotificationTriggerModal.js';
import { createEnginePanel } from '../features/settings/ui/EnginePanel.js';

export function createSettingsPage(router) {
  const store = createStore({ 
    activeTab: 'services', 
    saving: false,
    isDirty: false,
    isServiceModalOpen: false,
    isStageModalOpen: false,
    isMappingModalOpen: false,
    isSampleApiModalOpen: false,
    isNotificationModalOpen: false,
    selectedMappingService: ''
  });
  let unsubState, unsubData;

  const handleBeforeUnload = (e) => {
    if (store.get().isDirty) {
      e.preventDefault();
      e.returnValue = '';
    }
  };

  return {
    mount(onUpdate) {
      unsubState = store.subscribe(() => onUpdate());
      unsubData = queryCache.subscribe(settingsKeys.all, () => onUpdate());
      settingsApi.getSettings();
      
      window.addEventListener('beforeunload', handleBeforeUnload);
      if (router) {
        router.setBeforeNavigateHook(async (hash) => {
          if (store.get().isDirty) {
            return await ConfirmDialog({
              title: 'Unsaved Changes',
              message: 'You have unsaved changes. Are you sure you want to leave this page without saving?',
              confirmLabel: 'Leave without saving',
              tone: 'danger'
            });
          }
          return true;
        });
      }
    },
    unmount() {
      if (unsubState) unsubState();
      if (unsubData) unsubData();
      window.removeEventListener('beforeunload', handleBeforeUnload);
      if (router) router.setBeforeNavigateHook(null);
    },
    view() {
      const state = store.get();
      const { activeTab, saving, isServiceModalOpen, isStageModalOpen, isMappingModalOpen, isSampleApiModalOpen, isNotificationModalOpen } = state;
      const snapshot = queryCache.read(settingsKeys.all);
      const { data, status, error } = snapshot;

      if (status === 'loading' && !data) return html`<p class="u-text-muted">Loading settings...</p>`;
      if (status === 'error' && !data) return html`<p class="u-text-danger">Error: ${error?.message}</p>`;

      const config = {
        retention_days: data?.retention_days || 30,
        global_poll_interval_seconds: data?.global_poll_interval_seconds || 300
      };
      const servicesData = data?.services || {};
      const stagesData = data?.stages || [];
      const globalPoll = config.global_poll_interval_seconds;

      const renderTabButton = (id, icon, label) => {
        const isActive = activeTab === id;
        const color = isActive ? 'var(--color-accent)' : 'var(--color-text-muted)';
        const border = isActive ? '1px solid var(--color-accent)' : '1px solid var(--color-border)';
        const bg = isActive ? 'color-mix(in srgb, var(--color-accent) 15%, transparent)' : 'var(--color-bg-card)';
        
        return html`
          <button 
            class="u-flex u-items-center u-gap-2 u-text-sm"
            style="background: ${bg}; border: ${border}; border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); color: ${color}; cursor: pointer; transition: all 0.2s;"
            @click=${() => store.set(s => ({ ...s, activeTab: id }))}
          >
            ${Icon({ name: icon, size: 16 })}
            <span>${label}</span>
          </button>
        `;
      };

      return html`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between u-mb-2">
            <div class="u-flex u-gap-2">
              ${renderTabButton('services', 'database', 'Services')}
              ${renderTabButton('stages', 'activity', 'Stages & Predicates')}
              ${renderTabButton('mappings', 'code', 'Field Mappings')}
              ${renderTabButton('notifications', 'bell', 'Notification Triggers')}
              ${renderTabButton('engine', 'settings', 'Engine & Retention')}
            </div>
            <div class="u-flex u-items-center u-gap-3">
              ${state.isDirty ? html`<div title="Unsaved modifications" style="display: flex; align-items: center; justify-content: center; width: 20px; height: 20px; background: var(--color-danger); color: white; border-radius: 50%; font-weight: bold; font-size: 12px; cursor: help;">!</div>` : nothing}
              ${Button({ 
                label: 'Save All Settings', 
              variant: state.isDirty ? 'add' : 'secondary', 
              size: 'sm', 
              loading: saving, 
              disabled: !state.isDirty,
              onClick: async () => {
                const snapshot = queryCache.read(settingsKeys.all);
                store.set(s => ({ ...s, saving: true }));
                try {
                  await http.put('/api/v1/settings', snapshot.data);
                  store.set(s => ({ ...s, isDirty: false, saving: false }));
                  alert('Settings saved successfully!');
                } catch (err) {
                  alert('Error saving settings: ' + err.message);
                  store.set(s => ({ ...s, saving: false }));
                }
              } 
            })}
            </div>
          </div>
          
          ${activeTab === 'services' ? createServicesPanel(store, servicesData, globalPoll) : nothing}
          ${activeTab === 'stages' ? createStagesPanel(store, stagesData) : nothing}
          ${activeTab === 'mappings' ? createMappingsPanel(store, servicesData) : nothing}
          ${activeTab === 'notifications' ? createNotificationsPanel(store, data) : nothing}
          ${activeTab === 'engine' ? createEnginePanel(store, config) : nothing}
          
          <!-- Modals -->
          ${isServiceModalOpen ? createServiceModal(store) : nothing}
          ${isStageModalOpen ? createStageModal(store) : nothing}
          ${isMappingModalOpen ? createMappingModal(store) : nothing}
          ${isSampleApiModalOpen ? createSampleApiModal(store) : nothing}
          ${isNotificationModalOpen ? createNotificationTriggerModal(store) : nothing}
        </div>
      `;
    }
  };
}
