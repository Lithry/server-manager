import { http, queryCache } from '../../shared/api/index.js';

export const pipelineKeys = {
  all: ['pipeline'],
  columns: ['pipeline', 'columns']
};

let currentParams = { limit: 50, offset: 0 };

export const pipelineApi = {
  getPipeline: (params = {}, opts = {}) => {
    const { dedupe, staleMs, signal, ...cleanParams } = params;
    const effectiveOpts = {
      ...(dedupe !== undefined ? { dedupe } : {}),
      ...(staleMs !== undefined ? { staleMs } : {}),
      ...(signal !== undefined ? { signal } : {}),
      ...opts
    };
    currentParams = { ...currentParams, ...cleanParams };
    return queryCache.load(
      pipelineKeys.all,
      () => http.get('/api/v1/pipeline', { query: currentParams, dedupe: false }),
      { dedupe: false, ...effectiveOpts }
    );
  },
  getCurrentParams: () => ({ ...currentParams }),
  getColumns: (opts) => queryCache.load(pipelineKeys.columns, () => http.get('/api/v1/pipeline/columns'), opts),
};

