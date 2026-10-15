import { html } from 'lit-html';
import { Button } from '../../shared/ui/atoms/Button/Button.js';
import { Modal } from '../../shared/ui/organisms/Modal/Modal.js';
import { ConfirmDialog } from '../../shared/ui/organisms/ConfirmDialog/ConfirmDialog.js';
import { incidentsApi, incidentsKeys } from './api.js';
import { queryCache } from '../../shared/api/index.js';

export function createAddErrorModal({ onClose, onErrorCreated, initialData = null }) {
  let isSubmitting = false;
  const isEdit = Boolean(initialData && initialData.ERROR_CODE);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const code = form.error_code.value.trim().toUpperCase();
    const category = form.category.value.trim().toUpperCase();
    const severity = form.severity.value;
    const description = form.description.value.trim();
    const trigger_condition = form.trigger_condition.value.trim();
    const remedy = form.remedy.value.trim();

    if (!code || !category || !description) {
      alert('Please fill in Error Code, Category, and Description.');
      return;
    }

    // If adding new, check if code already exists in catalog
    if (!isEdit) {
      const catalogSnapshot = queryCache.read(incidentsKeys.catalog);
      const catalog = Array.isArray(catalogSnapshot?.data) ? catalogSnapshot.data : (catalogSnapshot?.data?.items ?? []);
      const existing = catalog.find(item => item.ERROR_CODE === code);
      if (existing) {
        const confirmed = await ConfirmDialog({
          title: 'Error Template Already Exists',
          message: `An error template with code '${code}' is already registered under category '${existing.CATEGORY}'. Do you want to overwrite it with these new values?`,
          confirmLabel: 'Overwrite Existing',
          tone: 'warning'
        });
        if (!confirmed) return;
      }
    }

    isSubmitting = true;
    try {
      await incidentsApi.upsertError({
        error_code: code,
        category,
        severity,
        description,
        trigger_condition,
        remedy
      });
      queryCache.invalidate(incidentsKeys.catalog);
      onErrorCreated?.();
      onClose();
    } catch (err) {
      alert('Failed to save error template: ' + err.message);
    } finally {
      isSubmitting = false;
    }
  }

  const body = html`
    <form id="add-error-form" @submit=${handleSubmit}>
      <div class="u-flex u-gap-3 u-mb-3">
        <div class="form-group" style="flex: 2;">
          <label for="input-err-code" class="u-text-sm u-font-medium">Error Code</label>
          <input 
            id="input-err-code" 
            name="error_code" 
            type="text" 
            class="form-input u-font-mono" 
            placeholder="e.g. ERR_DB_CORRUPTION" 
            value="${initialData?.ERROR_CODE || ''}"
            ?readonly=${isEdit}
            style="${isEdit ? 'background: var(--color-bg-surface); opacity: 0.8;' : ''}"
            required 
          />
          ${isEdit ? html`<small class="u-text-muted u-text-xs">Error code cannot be changed when editing.</small>` : ''}
        </div>
        <div class="form-group" style="flex: 1;">
          <label for="input-err-category" class="u-text-sm u-font-medium">Category</label>
          <input 
            id="input-err-category" 
            name="category" 
            type="text" 
            class="form-input" 
            placeholder="e.g. DATABASE" 
            value="${initialData?.CATEGORY || ''}"
            required 
          />
        </div>
      </div>

      <div class="form-group u-mb-3">
        <label for="input-err-severity" class="u-text-sm u-font-medium">Severity</label>
        <select id="input-err-severity" name="severity" class="form-select">
          <option value="CRITICAL" ?selected=${initialData?.SEVERITY === 'CRITICAL'}>CRITICAL</option>
          <option value="WARNING" ?selected=${!initialData || initialData?.SEVERITY === 'WARNING'}>WARNING</option>
          <option value="INFO" ?selected=${initialData?.SEVERITY === 'INFO'}>INFO</option>
        </select>
      </div>

      <div class="form-group u-mb-3">
        <label for="input-err-desc" class="u-text-sm u-font-medium">Description</label>
        <input 
          id="input-err-desc" 
          name="description" 
          type="text" 
          class="form-input" 
          placeholder="Clear explanation of the error condition" 
          value="${initialData?.DESCRIPTION || ''}"
          required 
        />
      </div>

      <div class="form-group u-mb-3">
        <label for="input-err-trigger" class="u-text-sm u-font-medium">Trigger Condition (Optional)</label>
        <input 
          id="input-err-trigger" 
          name="trigger_condition" 
          type="text" 
          class="form-input u-font-mono" 
          placeholder="e.g. integrity_check == false" 
          value="${initialData?.TRIGGER_CONDITION || ''}"
        />
      </div>

      <div class="form-group u-mb-3">
        <label for="input-err-remedy" class="u-text-sm u-font-medium">Remedy Runbook / Script (Optional)</label>
        <textarea 
          id="input-err-remedy" 
          name="remedy" 
          class="form-input" 
          rows="2" 
          placeholder="Runbook action or script name in /config/custom_tools/..."
        >${initialData?.REMEDY || ''}</textarea>
      </div>
    </form>
  `;

  const footer = html`
    <div class="u-flex u-gap-2 u-justify-end">
      ${Button({ label: 'Cancel', variant: 'secondary', onClick: onClose })}
      ${Button({ 
        label: isEdit ? 'Update Error' : 'Register Error', 
        variant: 'save', 
        type: 'submit',
        loading: isSubmitting,
        onClick: () => {
          const form = document.getElementById('add-error-form');
          if (form) form.requestSubmit();
        }
      })}
    </div>
  `;

  return Modal({
    title: isEdit ? `Edit Error: ${initialData.ERROR_CODE}` : 'Register Error Template (ERROR_INDEX)',
    size: 'md',
    onClose,
    body,
    footer
  });
}
