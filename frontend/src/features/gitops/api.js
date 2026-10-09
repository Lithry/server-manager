import { http, queryCache } from '../../shared/api/index.js';

export const gitopsKeys = { all: ['gitops'] };

export const gitopsApi = {
  getGitOps: (opts) => queryCache.load(gitopsKeys.all, () => http.get('/api/v1/meta/query', { query: { target: 'gitops' } }), opts),
};
