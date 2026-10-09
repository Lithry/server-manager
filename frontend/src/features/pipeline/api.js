import { http, queryCache } from '../../shared/api/index.js';

export const pipelineKeys = {
  all: ['pipeline'],
  columns: ['pipeline', 'columns']
};

export const pipelineApi = {
  getPipeline: (opts) => queryCache.load(pipelineKeys.all, () => http.get('/api/v1/pipeline'), opts),
  getColumns: (opts) => queryCache.load(pipelineKeys.columns, () => http.get('/api/v1/pipeline/columns'), opts),
};
