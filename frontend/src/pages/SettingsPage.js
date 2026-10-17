import { html, nothing } from 'lit-html';
import { settingsApi, settingsKeys } from '../features/settings/api.js';
import { queryCache, http } from '../shared/api/index.js';
import { createStore } from '../shared/lib/lib.js';
import { Button } from '../shared/ui/atoms/Button/Button.js';
import { Icon } from '../shared/ui/atoms/Icon/Icon.js';
import { ConfirmDialog } from '../shared/ui/organisms/ConfirmDialog/ConfirmDialog.js';

import { createServicesPanel } from '../features/settings/ui/ServicesPanel.js';
import { createServiceModal } from '../features/settings/ui/ServiceModal.js';
import { createPipelinesPanel } from '../features/settings/ui/PipelinesPanel.js';
import { createPipelineModal } from '../features/settings/ui/PipelineModal.js';
import { createStagesPanel } from '../features/settings/ui/StagesPanel.js';
import { createStageModal } from '../features/settings/ui/StageModal.js';
import { createMappingsPanel } from '../features/settings/ui/MappingsPanel.js';
import { createMappingModal } from '../features/settings/ui/MappingModal.js';
import { createSampleApiModal } from '../features/settings/ui/SampleApiModal.js';
import { createNotificationsPanel } from '../features/settings/ui/NotificationsPanel.js';
import { createNotificationTriggerModal } from '../features/settings/ui/NotificationTriggerModal.js';
import { createEnginePanel } from '../features/settings/ui/EnginePanel.js';
import { createSandboxPage } from './SandboxPage.js';

function deepEqual(a, b) {
  if (a === b) return true;
  if (!a || !b || typeof a !== 'object' || typeof b !== 'object') return false;
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  if (Array.isArray(a)) {
    if (a.length !== b.length) return false;
    return a.every((item, i) => deepEqual(item, b[i]));
  }
  const keysA = Object.keys(a), keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  return keysA.every(k => Object.prototype.hasOwnProperty.call(b, k) && deepEqual(a[k], b[k]));
}

export function createSettingsPage(router) {
  const sandboxPanel = createSandboxPage();
  let baseline = null, pendingModifications = [], unsubState, unsubData;

  function trackModification(key, oldValue, newValue) {
    const idx = pendingModifications.findIndex(m => m.key === key);
    if (deepEqual(oldValue, newValue)) {
      if (idx !== -1) pendingModifications.splice(idx, 1);
    } else if (idx !== -1) {
      pendingModifications[idx].newValue = newValue;
    } else {
      pendingModifications.push({ key, oldValue, newValue });
    }
  }

  function evaluateModifications(cur) {
    if (!baseline || !cur) return;
    const allKeys = new Set([...Object.keys(baseline), ...Object.keys(cur), ...pendingModifications.map(m => m.key.split('.')[0])]);
    for (const key of allKeys) {
      if (key === 'services') {
        const sKeys = new Set([...Object.keys(baseline.services || {}), ...Object.keys(cur.services || {}), ...pendingModifications.filter(m => m.key.startsWith('services.')).map(m => m.key.slice(9))]);
        for (const sKey of sKeys) trackModification(`services.${sKey}`, baseline.services?.[sKey], cur.services?.[sKey]);
      } else if (key === 'pipelines') {
        const pKeys = new Set([...Object.keys(baseline.pipelines || {}), ...Object.keys(cur.pipelines || {}), ...pendingModifications.filter(m => m.key.startsWith('pipelines.')).map(m => m.key.slice(10))]);
        for (const pKey of pKeys) trackModification(`pipelines.${pKey}`, baseline.pipelines?.[pKey], cur.pipelines?.[pKey]);
      } else if (key === 'notification_triggers' || key === 'triggers') {
        trackModification('notification_triggers', baseline.notification_triggers ?? baseline.triggers ?? [], cur.notification_triggers ?? cur.triggers ?? []);
      } else {
        trackModification(key, baseline[key], cur[key]);
      }
    }
  }

  const store = createStore({ 
    activeTab: 'services', saving: false, isDirty: false,
    isServiceModalOpen: false, isPipelineModalOpen: false, isStageModalOpen: false,
    isMappingModalOpen: false, isSampleApiModalOpen: false, isNotificationModalOpen: false,
    selectedMappingService: ''
  });

  const rawSet = store.set;
  store.set = (updater) => {
    rawSet((prev) => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      const curData = queryCache.read(settingsKeys.all)?.data;
      if (baseline && curData) evaluateModifications(curData);
      return { ...next, isDirty: pendingModifications.length > 0 };
    });
  };

  const handleBeforeUnload = (e) => {
    if (pendingModifications.length > 0) {
      e.preventDefault();
      e.returnValue = '';
    }
  };

  return {
    mount(onUpdate) {
      unsubState = store.subscribe(() => onUpdate());
      unsubData = queryCache.subscribe(settingsKeys.all, (snapshot) => {
        if (snapshot?.data) {
          if (!baseline) {
            baseline = JSON.parse(JSON.stringify(snapshot.data));
            pendingModifications = [];
          } else {
            evaluateModifications(snapshot.data);
          }
          store.set(s => ({ ...s, isDirty: pendingModifications.length > 0 }));
        }
        onUpdate();
      });

      const cached = queryCache.read(settingsKeys.all);
      if (cached?.data && !baseline) {
        baseline = JSON.parse(JSON.stringify(cached.data));
        pendingModifications = [];
      }

      settingsApi.getSettings();
      sandboxPanel.mount(onUpdate);
      window.addEventListener('beforeunload', handleBeforeUnload);
      if (router) {
        router.setBeforeNavigateHook(async () => {
          if (pendingModifications.length === 0) return true;
          return await ConfirmDialog({
            title: 'Unsaved Changes',
            message: 'You have unsaved changes. Are you sure you want to leave this page without saving?',
            confirmLabel: 'Leave without saving',
            tone: 'danger'
          });
        });
      }
    },
    unmount() {
      if (unsubState) unsubState();
      if (unsubData) unsubData();
      sandboxPanel.unmount();
      window.removeEventListener('beforeunload', handleBeforeUnload);
      if (router) router.setBeforeNavigateHook(null);
      if (baseline && pendingModifications.length > 0) {
        queryCache.setData(settingsKeys.all, () => JSON.parse(JSON.stringify(baseline)));
      }
      baseline = null;
      pendingModifications = [];
    },
    view() {
      const state = store.get();
      const { activeTab, saving, isServiceModalOpen, isPipelineModalOpen, isStageModalOpen, isMappingModalOpen, isSampleApiModalOpen, isNotificationModalOpen } = state;
      const snapshot = queryCache.read(settingsKeys.all);
      const { data, status, error } = snapshot;

      if (status === 'loading' && !data) return html`<p class="u-text-muted">Loading settings...</p>`;
      if (status === 'error' && !data) return html`<p class="u-text-danger">Error: ${error?.message}</p>`;

      const isDirty = pendingModifications.length > 0;
      const config = { retention_days: data?.retention_days || 30, global_poll_interval_seconds: data?.global_poll_interval_seconds || 300 };
      const servicesData = data?.services || {}, pipelinesData = data?.pipelines || {}, stagesData = data?.stages || [], globalPoll = config.global_poll_interval_seconds;

      const renderTabButton = (id, icon, label) => html`
        <button type="button" class="tab-btn ${activeTab === id ? 'is-active' : ''}" @click=${() => store.set(s => ({ ...s, activeTab: id }))}>
          ${Icon({ name: icon, size: 16 })}
          <span>${label}</span>
        </button>
      `;

      return html`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between u-mb-2" style="flex-wrap: wrap; gap: var(--space-2);">
            <div class="u-flex u-gap-2" style="flex-wrap: wrap;">
              ${renderTabButton('services', 'database', 'Services')}
              ${renderTabButton('sandbox', 'terminal', 'API Sandbox')}
              ${renderTabButton('mappings', 'code', 'Field Mappings')}
              ${renderTabButton('pipelines', 'package', 'Pipelines')}
              ${renderTabButton('stages', 'activity', 'Stages & Predicates')}
              ${renderTabButton('notifications', 'bell', 'Notification Triggers')}
              ${renderTabButton('engine', 'settings', 'Engine & Retention')}
            </div>
            <div class="u-flex u-items-center u-gap-3">
              <div style="position: relative; display: inline-block;">
                ${Button({ 
                  label: 'Save All Settings', variant: 'save', size: 'sm', loading: saving, disabled: !isDirty,
                  onClick: async () => {
                    const snap = queryCache.read(settingsKeys.all);
                    if (!snap || !snap.data) return;
                    const backup = baseline ? JSON.parse(JSON.stringify(baseline)) : JSON.parse(JSON.stringify(snap.data));
                    store.set(s => ({ ...s, saving: true }));
                    try {
                      const updatedData = await http.post('/api/v1/settings', snap.data);
                      queryCache.setData(settingsKeys.all, () => updatedData);
                      baseline = JSON.parse(JSON.stringify(updatedData));
                      pendingModifications = [];
                      store.set(s => ({ ...s, isDirty: false, saving: false }));
                      alert('✓ Settings saved successfully, schema migrated, and scheduler refreshed.');
                    } catch (err) {
                      queryCache.setData(settingsKeys.all, () => backup);
                      baseline = backup;
                      pendingModifications = [];
                      store.set(s => ({ ...s, isDirty: false, saving: false }));
                      alert('Failed to save settings: ' + err.message + '\nRolled back to previous verified configuration.');
                    }
                  } 
                })}
                ${isDirty ? html`<div title="Unsaved modifications" style="position: absolute; top: -6px; right: -6px; display: flex; align-items: center; justify-content: center; width: 18px; height: 18px; background: var(--color-danger); color: white; border-radius: 50%; font-weight: bold; font-size: 11px; cursor: help; pointer-events: none; z-index: 10;">!</div>` : nothing}
              </div>
            </div>
          </div>
          
          ${activeTab === 'services' ? createServicesPanel(store, servicesData) : nothing}
          ${activeTab === 'sandbox' ? sandboxPanel.view() : nothing}
          ${activeTab === 'mappings' ? createMappingsPanel(store, servicesData) : nothing}
          ${activeTab === 'pipelines' ? createPipelinesPanel(store, pipelinesData, stagesData, config.retention_days) : nothing}
          ${activeTab === 'stages' ? createStagesPanel(store, stagesData, globalPoll) : nothing}
          ${activeTab === 'notifications' ? createNotificationsPanel(store, data) : nothing}
          ${activeTab === 'engine' ? createEnginePanel(store, config, data) : nothing}
          
          <!-- Modals -->
          ${isServiceModalOpen ? createServiceModal(store) : nothing}
          ${isPipelineModalOpen ? createPipelineModal(store) : nothing}
          ${isStageModalOpen ? createStageModal(store) : nothing}
          ${isMappingModalOpen ? createMappingModal(store) : nothing}
          ${isSampleApiModalOpen ? createSampleApiModal(store) : nothing}
          ${isNotificationModalOpen ? createNotificationTriggerModal(store) : nothing}
        </div>
      `;
    }
  };
}
