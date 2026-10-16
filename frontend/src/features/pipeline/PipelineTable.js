import { html } from 'lit-html';
import { DataTable } from '../../shared/ui/organisms/DataTable/DataTable.js';
import { pipelineApi, pipelineKeys } from './api.js';
import { queryCache } from '../../shared/api/index.js';

import { Button } from '../../shared/ui/atoms/Button/Button.js';
import { BooleanBadge } from '../../shared/ui/atoms/Badge/Badge.js';

const SYSTEM_COLUMNS = new Set(['ID', 'PIPELINE_KEY', 'STAGE', 'STATUS', 'CREATED_AT', 'LAST_UPDATED']);

// Uses the order and columns returned by the API
function getColumns(data) {
  if (!data || !data.columns) return [];
  const colTypes = data?.column_types || {};
  return data.columns.map(key => {
    const upperKey = key.toUpperCase();
    const colType = (colTypes[key] || colTypes[upperKey] || '').toUpperCase();
    const isSystem = SYSTEM_COLUMNS.has(upperKey);
    const isInt = colType.includes('INT');
    const isBool = colType.includes('BOOL');
    const align = (isSystem || isInt || isBool) ? 'center' : undefined;
    return {
      key,
      header: upperKey,
      align,
      render: (row) => {
        const val = row[key];
        if (val === null || val === undefined || val === '') {
          return html`<span class="u-text-muted" style="display: block; text-align: center;">-</span>`;
        }
        if (isBool) {
          return BooleanBadge({ value: val });
        }
        return html`<span class="u-truncate" style="max-width: 250px; display: inline-block; ${align === 'center' ? 'text-align: center;' : ''}" title=${val}>${val}</span>`;
      }
    };
  });
}

export function createPipelineTable() {
  return {
    view() {
      const snapshot = queryCache.read(pipelineKeys.all);
      const items = snapshot.data?.items ?? [];
      const total = snapshot.data?.total ?? items.length;
      const limit = snapshot.data?.limit ?? 50;
      const offset = snapshot.data?.offset ?? 0;

      const startItem = total === 0 ? 0 : offset + 1;
      const endItem = Math.min(offset + items.length, total);
      const hasPrev = offset > 0;
      const hasNext = offset + limit < total;

      const footer = html`
        <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-top: 1px solid var(--color-border); background: var(--color-bg-card);">
          <div class="u-text-sm u-text-muted">Showing ${startItem}-${endItem} of ${total} records</div>
          <div class="u-flex u-items-center u-gap-4">
            <div class="u-flex u-items-center u-gap-2">
              <span class="u-text-sm u-text-muted">Rows per page:</span>
              <select
                class="form-select u-text-sm"
                style="width: auto; padding: 2px var(--space-2); height: auto;"
                .value=${String(limit)}
                ?disabled=${snapshot.isFetching}
                @change=${(e) => {
                  const newLimit = Number(e.target.value);
                  pipelineApi.getPipeline({ limit: newLimit, offset: 0 });
                }}
              >
                <option value="50" ?selected=${limit === 50}>50</option>
                <option value="100" ?selected=${limit === 100}>100</option>
                <option value="200" ?selected=${limit === 200}>200</option>
                <option value="500" ?selected=${limit === 500}>500</option>
              </select>
            </div>
            <div class="u-flex u-gap-2">
              ${Button({
                label: 'Previous',
                size: 'sm',
                variant: 'secondary',
                disabled: !hasPrev || snapshot.isFetching,
                onClick: () => pipelineApi.getPipeline({ offset: Math.max(0, offset - limit) })
              })}
              ${Button({
                label: 'Next',
                size: 'sm',
                variant: 'secondary',
                disabled: !hasNext || snapshot.isFetching,
                onClick: () => pipelineApi.getPipeline({ offset: offset + limit })
              })}
            </div>
          </div>
        </div>
      `;

      return DataTable({
        id: 'pipeline-table',
        snapshot,
        columns: (data) => getColumns(data),
        getRows: (data) => data?.items ?? [],
        rowKey: (r, i) => r.ID ?? r.id ?? i,
        onRetry: () => pipelineApi.getPipeline(),
        footer
      });
    }
  };
}
