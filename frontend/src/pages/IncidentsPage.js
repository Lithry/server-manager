import { html, nothing } from 'lit-html';
import { createIncidentTable } from '../features/incidents/IncidentTable.js';
import { createCatalogTable } from '../features/incidents/CatalogTable.js';
import { incidentsApi, incidentsKeys } from '../features/incidents/api.js';
import { queryCache } from '../shared/api/index.js';
import { createStore } from '../shared/lib/lib.js';
import { Button } from '../shared/ui/atoms/Button/Button.js';
import { Icon } from '../shared/ui/atoms/Icon/Icon.js';

export function createIncidentsPage() {
  const activeTable = createIncidentTable({ resolved: false });
  const resolvedTable = createIncidentTable({ resolved: true });
  const catalogTable = createCatalogTable();
  const store = createStore({ activeTab: 'active' }); // 'active', 'resolved', 'catalog'
  
  let unsubActive, unsubResolved, unsubCatalog, unsubState;

  return {
    mount(onUpdate) {
      unsubActive = queryCache.subscribe(incidentsKeys.list(false), () => onUpdate());
      unsubResolved = queryCache.subscribe(incidentsKeys.list(true), () => onUpdate());
      unsubCatalog = queryCache.subscribe(incidentsKeys.catalog, () => onUpdate());
      unsubState = store.subscribe(() => onUpdate());
      
      incidentsApi.getIncidents(false);
      incidentsApi.getIncidents(true);
      incidentsApi.getCatalog();
    },
    unmount() { 
      if (unsubActive) unsubActive();
      if (unsubResolved) unsubResolved();
      if (unsubCatalog) unsubCatalog();
      if (unsubState) unsubState();
    },
    view() {
      const { activeTab } = store.get();

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
              ${renderTabButton('active', 'alert', 'Active Incidents')}
              ${renderTabButton('resolved', 'check', 'Resolved')}
              ${renderTabButton('catalog', 'search', 'Error Index Catalog')}
            </div>
            
            ${activeTab === 'catalog' 
              ? Button({ label: '+ Add Error', variant: 'add', size: 'sm', onClick: () => alert('Add Error') }) 
              : Button({ label: '+ Report Incident', variant: 'delete', size: 'sm', onClick: () => alert('Report Incident') })}
          </div>
          
          ${activeTab === 'active' ? activeTable.view() : nothing}
          ${activeTab === 'resolved' ? resolvedTable.view() : nothing}
          ${activeTab === 'catalog' ? catalogTable.view() : nothing}
        </div>
      `;
    }
  };
}
