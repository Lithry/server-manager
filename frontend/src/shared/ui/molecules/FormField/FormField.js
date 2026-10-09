import { html, nothing } from 'lit-html';
import styles from './FormField.module.css';

export function FormField({ id, label, hint, error, required = false, control }) {
  const hintId = `${id}-hint`, errorId = `${id}-error`;
  const describedBy = error ? errorId : hint ? hintId : undefined;
  return html`<div class=${styles.field}>
    <label class=${styles['field__label']} for=${id}>
      ${label}${required ? html`<span class=${styles['field__required']} aria-hidden="true"> *</span>` : nothing}
    </label>
    ${control({ id, invalid: Boolean(error), describedBy })}
    ${error ? html`<p id=${errorId} class=${styles['field__error']} role="alert">${error}</p>` : hint ? html`<p id=${hintId} class=${styles['field__hint']}>${hint}</p>` : nothing}
  </div>`;
}
