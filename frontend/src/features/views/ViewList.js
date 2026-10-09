import { html } from 'lit-html';
import { DataTable } from '../../shared/ui/organisms/DataTable/DataTable.js';
import { viewsApi, viewsKeys } from './api.js';
import { queryCache } from '../../shared/api/index.js';

export function createViewList() {
  return {
    view() {
      const snapshot = queryCache.read(viewsKeys.all);
      const items = Array.isArray(snapshot.data) ? snapshot.data : (snapshot.data?.items ?? []);

      if (!items.length && snapshot.status !== 'loading') {
        return html`
          <div style="background: var(--color-bg-card); border: 1px solid var(--color-border); border-radius: var(--radius-md); overflow: hidden;">
            <div style="padding: var(--space-4);">
              <div style="font-weight: bold; margin-bottom: var(--space-1); font-size: var(--font-size-md);">No Views Configured</div>
              <div class="u-text-muted u-text-sm">Click "+ Create Custom View" to define an aggregated projection over SERVICES_PIPELINE.</div>
            </div>
            <div style="border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border); padding: var(--space-4); text-align: center; background: var(--color-bg-surface); font-weight: 500;" class="u-text-sm">
              No active views in database. Click "+ Create Custom View" to define a projection.
            </div>
            <div style="padding: var(--space-3) var(--space-4);" class="u-text-sm u-text-muted">
              Showing 0 rows
            </div>
          </div>
        `;
      }

      return DataTable({
        id: 'views-table',
        snapshot,
        columns: [
          { key: 'VIEW_NAME', header: 'VIEW NAME' },
          { key: 'QUERY', header: 'QUERY' }
        ],
        getRows: () => items,
        onRetry: () => viewsApi.getViews()
      });
    }
  };
}
