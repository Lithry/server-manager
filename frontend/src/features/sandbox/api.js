import { http } from '../../shared/api/index.js';

export const sandboxApi = {
  testEnrichment: (payload) => http.post('/api/v1/pipeline/sandbox/enrichment', payload),
};
