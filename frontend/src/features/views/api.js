import { http, queryCache } from '../../shared/api/index.js';

export const viewsKeys = { all: ['views'] };

export const viewsApi = {
  getViews: (opts) => queryCache.load(viewsKeys.all, () => http.get('/api/v1/views'), opts),
  saveView: (payload) => http.post('/api/v1/views', payload),
  deleteView: (viewName) => http.delete(`/api/v1/views/${encodeURIComponent(viewName)}`),
  syncView: (viewName) => http.post(`/api/v1/views/${encodeURIComponent(viewName)}/sync`),
  getViewData: (viewName, limit = 50, offset = 0) =>
    http.get(`/api/v1/views/${encodeURIComponent(viewName)}/data`, { query: { limit, offset } })
};
