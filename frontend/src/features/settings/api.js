import { http, queryCache } from '../../shared/api/index.js';

export const settingsKeys = { all: ['settings'] };

export const settingsApi = {
  getSettings: (opts) => queryCache.load(settingsKeys.all, () => http.get('/api/v1/settings'), opts),
  saveConfig: (payload) => http.post('/api/v1/settings/config', payload),
  triggerSweep: () => http.post('/api/v1/settings/sweep'),
  triggerBackup: () => http.post('/api/v1/settings/backup'),
};
