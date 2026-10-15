import { html, nothing } from 'lit-html';
import { createMutation } from '../../shared/api/queryCache.js';
import { queryCache } from '../../shared/api/index.js';
import { incidentsApi, incidentsKeys } from './api.js';
import { DataTable } from '../../shared/ui/organisms/DataTable/DataTable.js';
import { Button } from '../../shared/ui/atoms/Button/Button.js';
import { Badge } from '../../shared/ui/atoms/Badge/Badge.js';
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
    { key: 'ID', header: 'ID', mono: true, align: 'center' },
    { 
      key: 'SEVERITY', 
      header: 'Severity', 
      render: (row) => {
        const tone = row.SEVERITY === 'CRITICAL' ? 'danger' : row.SEVERITY === 'WARNING' ? 'warning' : 'info';
        return Badge({ label: row.SEVERITY || 'INFO', tone, size: 'sm' });
      } 
    },
    { 
      key: 'COMPONENT', 
      header: 'Component', 
      render: (row) => html`<strong class="u-text-sm">${row.COMPONENT || 'SYSTEM'}</strong>` 
    },
    { 
      key: 'INCIDENT_CODE', 
      header: 'Code', 
      mono: true, 
      render: (row) => html`<span class="u-font-mono u-text-xs">${row.INCIDENT_CODE || '-'}</span>` 
    },
    { 
      key: 'DETAILS', 
      header: 'Details', 
      render: (row) => html`<span class="u-text-sm">${row.DETAILS || '-'}</span>` 
    },
    { 
      key: 'REMEDY', 
      header: 'Remedy', 
      render: (row) => row.REMEDY ? html`<span class="u-text-xs u-text-muted">${row.REMEDY}</span>` : nothing 
    },
    { 
      key: 'CREATED_AT', 
      header: 'Created At', 
      mono: true, 
      render: (row) => html`<span class="u-text-xs u-text-muted">${row.CREATED_AT || '-'}</span>` 
    },
    { 
      key: 'ACTIONS', 
      header: '', 
      align: 'end', 
      render: (row) => row.RESOLVED 
        ? html`<span class="u-text-success u-text-xs">Resolved${row.RESOLUTION_NOTE ? `: ${row.RESOLUTION_NOTE}` : ''}</span>` 
        : Button({ label: 'Resolve', size: 'sm', variant: 'secondary', onClick: () => handleResolve(row.ID) }) 
    }
  ];

  return {
    view() {
      const snapshot = queryCache.read(incidentsKeys.list(resolved));
      return DataTable({
        id: `incidents-table-${resolved ? 'resolved' : 'active'}`,
        columns,
        snapshot,
        getRows: (d) => d?.items ?? (Array.isArray(d) ? d : []),
        emptyMessage: resolved ? 'No resolved incidents.' : 'No active incidents. System is healthy.'
      });
    }
  };
}
