import { http, queryCache } from '../../shared/api/index.js';

export const pipelineKeys = {
  all: ['pipeline'],
  columns: ['pipeline', 'columns']
};

let currentParams = { pipeline_id: 'default', limit: 50, offset: 0 };

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
    if (!currentParams.pipeline_id) {
      currentParams.pipeline_id = 'default';
    }
    if (currentParams.stage === '' || currentParams.stage === null) {
      delete currentParams.stage;
    }
    if (currentParams.status === '' || currentParams.status === null) {
      delete currentParams.status;
    }
    return queryCache.load(
      pipelineKeys.all,
      () => http.get('/api/v1/pipeline', { query: currentParams, dedupe: false }),
      { dedupe: false, ...effectiveOpts }
    );
  },
  getCurrentParams: () => ({ ...currentParams }),
  getColumns: (pipelineId = currentParams.pipeline_id || 'default') =>
    http.get('/api/v1/pipeline/columns', { query: { pipeline_id: pipelineId } }),
  saveColumnOrder: (pipelineId, columnOrder) =>
    http.put('/api/v1/pipeline/columns/order', { column_order: columnOrder }, { query: { pipeline_id: pipelineId } }),
  pruneColumns: (pipelineId) =>
    http.post('/api/v1/pipeline/columns/prune', null, { query: { pipeline_id: pipelineId } }),
  purgePipeline: (pipelineId) =>
    http.post('/api/v1/pipeline/purge', null, { query: { pipeline_id: pipelineId } })
};

