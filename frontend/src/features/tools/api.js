import { http, queryCache } from '../../shared/api/index.js';
export const toolsKeys = { all: ['tools'] };
export const toolsApi = {
  getTools: (opts) => queryCache.load(toolsKeys.all, () => http.get('/api/v1/tools'), opts),
};
