import { html, nothing } from 'lit-html';
import { ref } from 'lit-html/directives/ref.js';
import { cx, uid } from '../../../lib/dom.js';
import { IconButton } from '../../atoms/Button/Button.js';
import styles from './Modal.module.css';

export function Modal({ title, size = 'md', body, footer = nothing, onClose, dismissible = true }) {
  const titleId = uid('modal-title');
  const open = (el) => { 
    if (el && !el.open) {
      requestAnimationFrame(() => {
        if (!el.open && el.isConnected) el.showModal();
      });
    }
  };
  const onCancel = (e) => { e.preventDefault(); if (dismissible) onClose(undefined); };
  const onBackdrop = (e) => { if (dismissible && e.target === e.currentTarget) onClose(undefined); };

  return html`<dialog class=${cx(styles.modal, styles[`modal--${size}`])} aria-labelledby=${titleId}
      ${ref(open)} @cancel=${onCancel} @click=${onBackdrop}>
    <div class=${styles['modal__panel']}>
      <header class=${styles['modal__header']}>
        <h2 id=${titleId} class=${styles['modal__title']}>${title}</h2>
        ${dismissible ? IconButton({ icon: 'x', ariaLabel: 'Close dialog', onClick: () => onClose(undefined) }) : nothing}
      </header>
      <div class=${styles['modal__body']}>${body}</div>
      ${footer !== nothing ? html`<footer class=${styles['modal__footer']}>${footer}</footer>` : nothing}
    </div>
  </dialog>`;
}
