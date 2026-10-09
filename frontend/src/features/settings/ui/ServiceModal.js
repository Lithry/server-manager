import { html, nothing } from 'lit-html';
import { Button } from '../../../shared/ui/atoms/Button/Button.js';
import { Modal } from '../../../shared/ui/organisms/Modal/Modal.js';

export function createServiceModal(store) {
  const handleClose = () => {
    store.set(s => ({ ...s, isServiceModalOpen: false }));
  };

  const applyPreset = (preset) => {
    // Logic to pre-fill the form based on preset
    alert(`Applied preset: ${preset}`);
  };

  const body = html`
    <!-- CFG-01: Quick Presets -->
    <div class="u-flex u-gap-2 u-mb-4">
      <span class="u-text-sm u-text-muted u-flex u-items-center">Quick Presets:</span>
      ${Button({ label: 'Sonarr', variant: 'secondary', size: 'sm', onClick: () => applyPreset('sonarr') })}
      ${Button({ label: 'Radarr', variant: 'secondary', size: 'sm', onClick: () => applyPreset('radarr') })}
      ${Button({ label: 'Jellyfin', variant: 'secondary', size: 'sm', onClick: () => applyPreset('jellyfin') })}
      ${Button({ label: 'Shoko', variant: 'secondary', size: 'sm', onClick: () => applyPreset('shoko') })}
    </div>

    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Display Name</label>
        <input type="text" class="form-input" placeholder="Sonarr, Radarr, Jellyfin, etc.">
      </div>
      <div class="form-group">
        <label>Service ID (Slug)</label>
        <input type="text" class="form-input font-mono" placeholder="sonarr, radarr, jellyfin" autocomplete="off" @input=${(e) => { e.target.value = e.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, ''); }}>
        <small class="u-text-muted">Auto-generated or custom identifier (lowercase, no spaces).</small>
      </div>
    </div>

    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Base URL</label>
        <input type="text" class="form-input font-mono" placeholder="http://localhost:<port>">
        <small class="u-text-muted">Use <code>http://localhost:&lt;port&gt;</code> for services on host.</small>
      </div>
      <div class="form-group">
        <label>API Key / Bearer Token</label>
        <input type="password" class="form-input font-mono" placeholder="••••••••••••••••">
      </div>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-service-inherit-poll" checked>
        <label for="chk-service-inherit-poll"><strong>Inherit Global Polling Cadence</strong> (Default: 300s)</label>
      </div>
    </div>

    <!-- Ingestion Pipeline Key & Filters -->
    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <h4 class="u-text-sm u-font-bold u-mb-2" style="color: var(--color-text);">Ingestion & Pipeline Identity</h4>
      
      <div class="form-group u-mb-3">
        <label>Primary Ingestion Endpoint (Root Stages)</label>
        <input type="text" class="form-input font-mono" placeholder="/api/v3/history?pageSize=50" value="/api/v3/history?pageSize=50&sortKey=date&sortDirection=descending">
        <small class="u-text-muted">Polled when this service is assigned to a Root Stage (e.g. <code>/api/v3/history</code> for Sonarr/Radarr).</small>
      </div>

      <div class="form-grid-2 u-mb-3">
        <div class="form-group">
          <label>Pipeline Key Template</label>
          <input type="text" class="form-input font-mono" placeholder="{service}:{id}" value="{service}:{id}">
          <small class="u-text-muted">Unique tracking identifier. Presets: <code>{service}:{id}</code> or <code>{data.path}</code></small>
        </div>
        <div class="form-group">
          <label>Secondary Enrichment Endpoints (Optional)</label>
          <textarea class="form-input font-mono" rows="4" style="resize: none;" placeholder="episode: /api/v3/episode/{episodeId}&#10;series: /api/v3/series/{seriesId}"></textarea>
          <small class="u-text-muted">Specify <code>namespace: /endpoint/{param}</code> per line to isolate attributes.</small>
        </div>
      </div>

      <div class="form-group u-mb-0">
        <div class="u-flex u-justify-between u-items-center u-mb-2">
          <label class="u-mb-0"><strong>Allowed Ingestion Event Types</strong></label>
          ${Button({ label: 'Discover Events from API', variant: 'secondary', size: 'sm' })}
        </div>
        <p class="u-text-xs u-text-muted u-mb-2">Only checked event types will create new entries in SERVICES_PIPELINE. Deletions and pending downloads are excluded by default.</p>
        <div class="u-text-muted u-text-sm">Save or click 'Discover Events from API' to fetch supported eventTypes.</div>
      </div>
    </div>

    <div class="form-checkbox">
      <input type="checkbox" id="chk-service-enabled" checked>
      <label for="chk-service-enabled">Enable active polling loop for this service</label>
    </div>
  `;

  const footer = html`
    <div class="u-flex u-gap-2">
      ${Button({ label: 'Cancel', variant: 'secondary', onClick: handleClose })}
      ${Button({ label: 'Save Service', variant: 'save', onClick: () => alert('Save Service') })}
    </div>
  `;

  return Modal({
    title: 'Register Service',
    size: 'lg',
    onClose: handleClose,
    body,
    footer
  });
}
