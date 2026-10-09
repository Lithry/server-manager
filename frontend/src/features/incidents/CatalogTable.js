import { html } from 'lit-html';
import { queryCache } from '../../shared/api/index.js';
import { incidentsApi, incidentsKeys } from './api.js';
import { DataTable } from '../../shared/ui/organisms/DataTable/DataTable.js';

export function createCatalogTable() {
  const columns = [
    { key: 'ERROR_CODE', header: 'Code', render: (row) => html`<strong class="u-text-sm u-font-mono">${row.ERROR_CODE}</strong>` },
    { key: 'CATEGORY', header: 'Category', render: (row) => html`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${row.CATEGORY}</span>` },
    { key: 'SEVERITY', header: 'Severity', render: (row) => {
        if (row.SEVERITY === 'INFO') {
          return html`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, #d5c378 20%, transparent); color: #d5c378; padding: 2px 6px; border-radius: 4px;">${row.SEVERITY}</span>`;
        }
        const color = row.SEVERITY === 'CRITICAL' ? 'danger' : 'warning';
        return html`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-${color}) 20%, transparent); color: var(--color-${color}); padding: 2px 6px; border-radius: 4px;">${row.SEVERITY}</span>`;
      }
    },
    { key: 'DESCRIPTION', header: 'Description', render: (row) => html`<span class="u-text-sm">${row.DESCRIPTION}</span>` },
    { key: 'TRIGGER_CONDITION', header: 'Trigger Condition', render: (row) => html`<span class="u-text-sm u-text-muted">${row.TRIGGER_CONDITION || 'None'}</span>` },
    { key: 'REMEDY', header: 'Remedy Script/Action', render: (row) => html`<span class="u-text-sm">${row.REMEDY}</span>` }
  ];

  return {
    view() {
      const snapshot = queryCache.read(incidentsKeys.catalog);
      return DataTable({
        id: 'error-catalog-table',
        columns,
        snapshot,
        getRows: (data) => Array.isArray(data) ? data : (data?.value || data?.items || []),
        emptyMessage: 'No error templates registered in catalog.',
        onRetry: () => incidentsApi.getCatalog()
      });
    }
  };
}
