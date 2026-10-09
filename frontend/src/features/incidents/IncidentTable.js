import { html, nothing } from 'lit-html';
import { createMutation } from '../../shared/api/queryCache.js';
import { queryCache } from '../../shared/api/index.js';
import { incidentsApi, incidentsKeys } from './api.js';
import { DataTable } from '../../shared/ui/organisms/DataTable/DataTable.js';
import { Button } from '../../shared/ui/atoms/Button/Button.js';
import { ConfirmDialog } from '../../shared/ui/organisms/ConfirmDialog/ConfirmDialog.js';

export function createIncidentTable({ resolved }) {
  const resolveMutation = createMutation(queryCache, {
    mutationFn: (variables) => incidentsApi.resolveIncident(variables.id, variables.note),
    invalidates: [incidentsKeys.all]
  });

  async function handleResolve(id) {
    const note = prompt('Enter a resolution note (optional):', 'Resolved manually');
    if (note === null) return; // cancelled
    
    const confirmed = await ConfirmDialog({
      title: 'Resolve Incident',
      message: `Are you sure you want to mark incident #${id} as resolved?`,
      confirmLabel: 'Resolve',
      tone: 'primary'
    });

    if (confirmed) {
      try {
        await resolveMutation({ id, note });
      } catch (err) {
        alert('Failed to resolve incident: ' + err.message);
      }
    }
  }

  const columns = [
    { key: 'ID', header: 'ID', mono: true },
    { key: 'PRIORITY', header: 'PRIORITY', render: (row) => html`<span class="u-text-${row.PRIORITY === 'CRITICAL' ? 'danger' : row.PRIORITY === 'WARNING' ? 'accent' : 'muted'}">${row.PRIORITY}</span>` },
    { key: 'CREATED_AT', header: 'CREATED_AT', render: (row) => new Date(row.CREATED_AT * 1000).toLocaleString(), mono: true },
    { key: 'APP_NAME', header: 'APP', render: (row) => row.APP_NAME || 'SYSTEM' },
    { key: 'MESSAGE', header: 'MESSAGE' },
    { key: 'ACTIONS', header: '', align: 'end', render: (row) => row.RESOLVED ? html`<span class="u-text-success">Resolved</span>` : Button({ label: 'Resolve', size: 'sm', variant: 'secondary', onClick: () => handleResolve(row.ID) }) }
  ];

  return {
    view() {
      const snapshot = queryCache.read(incidentsKeys.list(resolved));
      return DataTable({
        id: `incidents-table-${resolved ? 'resolved' : 'active'}`,
        columns,
        snapshot,
        emptyMessage: resolved ? 'No resolved incidents.' : 'No active incidents. System is healthy.'
      });
    }
  };
}
