import { html } from 'lit-html';
import { DataTable } from '../../shared/ui/organisms/DataTable/DataTable.js';
import { toolsApi, toolsKeys } from './api.js';
import { queryCache } from '../../shared/api/index.js';
import { Button } from '../../shared/ui/atoms/Button/Button.js';
import { runToolModal } from './ToolRunnerModal.js';

export function createToolList() {
  return {
    view() {
      const snapshot = queryCache.read(toolsKeys.all);
      return DataTable({
        id: 'tools-table',
        snapshot,
        columns: [
          { key: 'name', header: 'NAME' },
          { key: 'description', header: 'DESCRIPTION' },
          { key: 'timeout', header: 'TIMEOUT' },
          { key: 'actions', header: '', render: (row) => html`<div class="u-flex u-justify-end">${Button({ label: 'Run', variant: 'execute', size: 'sm', icon: 'check', onClick: () => runToolModal(row) })}</div>` }
        ],
        getRows: (data) => Array.isArray(data) ? data : (data?.items ?? []),
        onRetry: () => toolsApi.getTools()
      });
    }
  };
}
