import { http, queryCache } from '../../shared/api/index.js';
export const overviewKeys = { all: ['overview'] };
export const overviewApi = {
  getOverview: (opts) => queryCache.load(overviewKeys.all, () => http.get('/api/v1/meta/query', { query: { target: 'overview' } }), opts),
};
