import { http, queryCache } from '../../shared/api/index.js';
export const viewsKeys = { all: ['views'] };
export const viewsApi = {
  getViews: (opts) => queryCache.load(viewsKeys.all, () => http.get('/api/v1/views'), opts),
};
