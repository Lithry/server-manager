import { http, queryCache } from '../../shared/api/index.js';

export const incidentsKeys = {
  all: ['incidents'],
  list: (resolved) => [...incidentsKeys.all, resolved ? 'resolved' : 'active'],
  catalog: ['incidents', 'catalog']
};

export const incidentsApi = {
  getIncidents: (resolved, opts) => queryCache.load(incidentsKeys.list(resolved), () => http.get('/api/v1/incidents', { query: { resolved: resolved ? 1 : 0 } }), opts),
  resolveIncident: (id, note) => http.post('/api/v1/incidents/resolve', { id, note }),
  getCatalog: (opts) => queryCache.load(incidentsKeys.catalog, () => http.get('/api/v1/incidents/catalog/errors'), opts),
};
