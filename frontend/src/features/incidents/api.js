import { http, queryCache } from '../../shared/api/index.js';

export const incidentsKeys = {
  all: ['incidents'],
  list: (resolved) => [...incidentsKeys.all, resolved ? 'resolved' : 'active'],
  catalog: ['incidents', 'catalog']
};

export const incidentsApi = {
  getIncidents: (resolved, opts) => queryCache.load(incidentsKeys.list(resolved), () => http.get('/api/v1/incidents', { query: { resolved: resolved ? 1 : 0 } }), opts),
  resolveIncident: (id, note) => http.post(`/api/v1/incidents/${id}/resolve`, { resolution_note: note || '' }),
  createIncident: (payload) => http.post('/api/v1/incidents', payload),
  getCatalog: (opts) => queryCache.load(incidentsKeys.catalog, () => http.get('/api/v1/incidents/catalog/errors'), opts),
  upsertError: (payload) => http.post('/api/v1/incidents/catalog/errors', payload),
  deleteError: (code) => http.delete(`/api/v1/incidents/catalog/errors/${code}`),
};
