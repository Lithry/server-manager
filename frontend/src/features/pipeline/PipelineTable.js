import { html } from 'lit-html';
import { DataTable } from '../../shared/ui/organisms/DataTable/DataTable.js';
import { pipelineApi, pipelineKeys } from './api.js';
import { queryCache } from '../../shared/api/index.js';

import { Button } from '../../shared/ui/atoms/Button/Button.js';

// Utiliza el orden y las columnas devueltas por la API
function getColumns(data) {
  if (!data || !data.columns) return [];
  return data.columns.map(key => ({
    key, 
    header: key.toUpperCase(),
    render: (row) => html`<span class="u-truncate" style="max-width: 250px; display: inline-block;" title=${row[key]}>${row[key]}</span>`
  }));
}

export function createPipelineTable() {
  return {
    view() {
      const snapshot = queryCache.read(pipelineKeys.all);
      const items = snapshot.data?.items ?? [];
      const total = snapshot.data?.total ?? items.length;
      
      const footer = html`
        <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-top: 1px solid var(--color-border); background: var(--color-bg-card);">
          <div class="u-text-sm u-text-muted">Showing ${items.length ? '1' : '0'}-${items.length} of ${total} records</div>
          <div class="u-flex u-gap-2">
            ${Button({ label: 'Previous', size: 'sm', variant: 'secondary', disabled: true })}
            ${Button({ label: 'Next', size: 'sm', variant: 'secondary', disabled: true })}
          </div>
        </div>
      `;

      return DataTable({
        id: 'pipeline-table',
        snapshot,
        columns: (data) => getColumns(data),
        getRows: (data) => data?.items ?? [],
        rowKey: (r, i) => r.id ?? i,
        onRetry: () => pipelineApi.getPipeline(),
        footer
      });
    }
  };
}
