import { html, nothing } from 'lit-html';
import { Button } from '../../../shared/ui/atoms/Button/Button.js';
import { http } from '../../../shared/api/index.js';

export function renderServiceEventDiscovery({
  store,
  getDraftForm,
  currentAllowedEvents,
  discoveredEvents,
  isDiscovering,
  discoveryError
}) {
  const handleDiscoverEvents = async () => {
    const draft = getDraftForm();
    const srvId = draft.id.trim();
    const endpoint = draft.poll_endpoint.trim() || '/api/v3/history';

    if (!srvId) {
      alert('Service ID is required before discovering events.');
      return;
    }

    store.set(s => ({
      ...s,
      serviceModalDraft: draft,
      isDiscoveringEvents: true,
      discoveryEventsError: null
    }));

    try {
      const res = await http.post('/api/v1/pipeline/sample', {
        service_id: srvId,
        endpoint
      });

      if (res && res.success === false) {
        store.set(s => ({
          ...s,
          serviceModalDraft: getDraftForm(),
          isDiscoveringEvents: false,
          discoveryEventsError: res.error || 'Failed to discover events from API.'
        }));
        return;
      }

      let records = [];
      if (Array.isArray(res?.sample_payload)) {
        records = res.sample_payload;
      } else if (Array.isArray(res?.sample_payload?.records)) {
        records = res.sample_payload.records;
      } else if (res?.sample_payload && typeof res.sample_payload === 'object') {
        records = [res.sample_payload];
      }

      const distinctEvents = new Set();
      for (const item of records) {
        if (item && typeof item === 'object') {
          if (item.eventType) distinctEvents.add(String(item.eventType));
          else if (item.event_type) distinctEvents.add(String(item.event_type));
          else if (item.type) distinctEvents.add(String(item.type));
        }
      }

      const eventList = Array.from(distinctEvents);
      store.set(s => ({
        ...s,
        serviceModalDraft: getDraftForm(),
        isDiscoveringEvents: false,
        serviceDiscoveredEvents: eventList,
        discoveryEventsError: eventList.length === 0 ? `No eventType found in sample payload (${records.length} records).` : null
      }));
    } catch (err) {
      store.set(s => ({
        ...s,
        serviceModalDraft: getDraftForm(),
        isDiscoveringEvents: false,
        discoveryEventsError: err.message || 'Error communicating with sample endpoint.'
      }));
    }
  };

  const toggleEventType = (evt) => {
    const draft = getDraftForm();
    const updated = currentAllowedEvents.includes(evt)
      ? currentAllowedEvents.filter(e => e !== evt)
      : [...currentAllowedEvents, evt];
    store.set(s => ({
      ...s,
      serviceModalDraft: draft,
      serviceAllowedEvents: updated
    }));
  };

  const allEventsToDisplay = Array.from(new Set([...currentAllowedEvents, ...discoveredEvents]));

  return html`
    <div class="form-group u-mb-0">
      <div class="u-flex u-justify-between u-items-center u-mb-2">
        <label class="u-mb-0"><strong>Allowed Ingestion Event Types</strong></label>
        ${Button({
          label: isDiscovering ? 'Discovering...' : 'Discover Events from API',
          variant: 'secondary',
          size: 'sm',
          loading: isDiscovering,
          disabled: isDiscovering,
          onClick: handleDiscoverEvents
        })}
      </div>
      <p class="u-text-xs u-text-muted u-mb-2">Only checked event types will create new entries in assigned pipelines when event filtering is used. Leave empty to accept all events.</p>

      ${discoveryError ? html`<div class="u-text-danger u-text-xs u-mb-2">${discoveryError}</div>` : nothing}

      ${allEventsToDisplay.length > 0 ? html`
        <div class="u-flex u-flex-wrap u-gap-2 u-mt-2" style="max-height: 140px; overflow-y: auto; padding: 6px; background: var(--color-bg); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
          ${allEventsToDisplay.map(evt => {
            const isChecked = currentAllowedEvents.includes(evt);
            return html`
              <label class="u-flex u-items-center u-gap-2" style="background: var(--color-bg-card); padding: 4px 10px; border-radius: var(--radius-sm); border: 1px solid ${isChecked ? 'var(--color-accent)' : 'var(--color-border)'}; cursor: pointer; user-select: none;">
                <input
                  type="checkbox"
                  .checked=${isChecked}
                  @change=${() => toggleEventType(evt)}
                >
                <span class="font-mono u-text-xs" style="color: ${isChecked ? 'var(--color-accent)' : 'var(--color-text)'}; font-weight: ${isChecked ? '600' : 'normal'};">
                  ${evt}
                </span>
              </label>
            `;
          })}
        </div>
      ` : html`
        <div class="u-text-muted u-text-sm">Click 'Discover Events from API' to fetch supported eventTypes from the primary poll endpoint.</div>
      `}
    </div>
  `;
}
