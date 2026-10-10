import { html } from 'lit-html';
import { Button } from '../../../shared/ui/atoms/Button/Button.js';
import { Modal } from '../../../shared/ui/organisms/Modal/Modal.js';
import { queryCache, http } from '../../../shared/api/index.js';
import { settingsKeys } from '../api.js';

export function createMappingModal(store) {
  const state = store.get();
  const mapping = state.editingMapping || { source_field: '', target_column: '', data_type: 'TEXT', transformer: '' };

  const handleClose = () => {
    store.set(s => ({ ...s, isMappingModalOpen: false, editingMapping: null, editingMappingIndex: -1 }));
  };

  const handleSave = () => {
    const snapshot = queryCache.read(settingsKeys.all);
    const newSettings = { ...snapshot.data };
    const serviceKeys = Object.keys(newSettings.services || {});
    const srv = state.selectedMappingService || serviceKeys[0];
    
    if (!srv) return;
    if (!newSettings.services[srv].field_mappings) {
      newSettings.services[srv].field_mappings = [];
    }

    if (state.editingMappingIndex >= 0) {
      newSettings.services[srv].field_mappings[state.editingMappingIndex] = mapping;
    } else {
      newSettings.services[srv].field_mappings.push(mapping);
    }

    queryCache.setData(settingsKeys.all, () => newSettings);
    store.set(s => ({ ...s, isDirty: true, isMappingModalOpen: false, editingMapping: null, editingMappingIndex: -1 }));
  };

  const body = html`
    <div class="form-group u-mb-3">
      <label>Target Service</label>
      <input type="text" class="form-input" readonly value="${state.selectedMappingService}">
    </div>

    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Source Payload Field</label>
        <input type="text" class="form-input font-mono" placeholder="tags, title, seriesId" .value=${mapping.source_field} @input=${e => mapping.source_field = e.target.value}>
      </div>
      <div class="form-group">
        <label>Target DB Column (Uppercase)</label>
        <input type="text" class="form-input font-mono" placeholder="IS_ANIME, TITLE_SONARR" autocomplete="off" .value=${mapping.target_column} @input=${(e) => {
          let val = e.target.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
          val = val.replace(/\s+/g, '_').toUpperCase().replace(/[^A-Z0-9_]/g, '');
          e.target.value = val;
          mapping.target_column = val;
        }}>
        <small class="u-text-muted">Strict regex: <code>^[A-Z0-9_]+$</code></small>
      </div>
    </div>

    <div class="form-group u-mb-3">
      <label>Data Type</label>
      <select class="form-select" .value=${mapping.data_type} @change=${e => mapping.data_type = e.target.value}>
        <option value="TEXT" ?selected=${mapping.data_type === 'TEXT'}>TEXT</option>
        <option value="INTEGER" ?selected=${mapping.data_type === 'INTEGER'}>INTEGER</option>
        <option value="REAL" ?selected=${mapping.data_type === 'REAL'}>REAL</option>
        <option value="BOOLEAN" ?selected=${mapping.data_type === 'BOOLEAN'}>BOOLEAN</option>
      </select>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-2">
      <label class="form-label u-text-sm">Transformer Expression (Optional)</label>
      <input type="text" class="form-input font-mono u-mb-2" placeholder="'anime' in value" .value=${mapping.transformer || ''} @input=${e => mapping.transformer = e.target.value}>
      <div class="u-text-xs u-text-muted u-mb-2">
        Leave empty to store direct value. The payload data is in <code>value</code>.<br>
        <strong>Syntax examples:</strong><br>
        • Direct boolean: <code>'anime' in value</code> or <code>value == 'anime'</code><br>
        • Explicit condition: <code>if 'anime' in value then 1 else 0</code><br>
        • Functions: <code>lower(value)</code> or <code>len(value) &gt; 0</code>
      </div>
      
      <div class="u-mt-3">
        <label class="form-label u-text-sm">Test Transformer with Sample Value or Context (JSON Object)</label>
        <div class="u-flex u-gap-2">
          <input type="text" id="transformerTestVal" class="form-input font-mono" placeholder='{"SHOKO_ID": 2639, "ANIDB_ID": 4821}' style="flex: 1;">
          ${Button({ label: 'Test Transform', variant: 'test', size: 'sm', onClick: async () => {
            const valStr = document.getElementById('transformerTestVal').value;
            let val;
            try {
              val = JSON.parse(valStr);
            } catch (e) {
              val = valStr;
            }
            try {
              const reqBody = { 
                expression: mapping.transformer, 
                sample_value: val 
              };
              if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                reqBody.context_dict = val;
              }
              const res = await http.post('/api/v1/settings/test-transformer', reqBody);
              if (res.valid) {
                alert('Result: ' + JSON.stringify(res.result));
              } else {
                alert('Error: ' + res.message);
              }
            } catch (err) {
              alert('Error: ' + err.message);
            }
          }})}
        </div>
      </div>
    </div>
  `;

  const footer = html`
    <div class="u-flex u-gap-2">
      ${Button({ label: 'Cancel', variant: 'secondary', onClick: handleClose })}
      ${Button({ label: 'Save Mapping', variant: 'save', onClick: handleSave })}
    </div>
  `;

  return Modal({
    title: 'Configure Field Mapping & Transformer',
    size: 'lg',
    onClose: handleClose,
    body,
    footer
  });
}
