import { createHttpClient } from './http.js';
import { createQueryCache } from './queryCache.js';
import { createEventBus } from '../lib/lib.js';

export const bus = createEventBus();

export const http = createHttpClient({
  baseUrl: import.meta.env?.VITE_API_BASE ?? '',
  timeoutMs: Number(import.meta.env?.VITE_HTTP_TIMEOUT_MS ?? 10_000),
});

export const queryCache = createQueryCache();

// Global interceptors (e.g. for generic Auth flows)
http.use({
  error: (error) => {
    if (error?.status === 401) {
      bus.emit('auth:required', error);
    }
    return error;
  },
});
