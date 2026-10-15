import { html } from 'lit-html';
import { Button } from '../../atoms/Button/Button.js';
import { modalManager } from '../Modal/modalManager.js';
import { Modal } from '../Modal/Modal.js';

export function ConfirmDialog({ title, message, tone = 'danger', confirmLabel = 'Confirm', requireText }) {
  return new Promise((resolve) => {
    let inputValue = '';
    const id = 'confirm-' + Math.random().toString(36).substring(2);
    
    const updateModal = () => {
      // Use open only once. Since this is a simple self-resolving promise,
      // we do not need complex reactivity here, just open the Modal via lit-html.
      modalManager.open(({ close }) => Modal({
        title,
        body: html`
          <div class="u-flex u-flex-col u-gap-3">
            <p>${message}</p>
            ${requireText ? html`
              <p class="u-text-sm u-text-muted">Type <strong>${requireText}</strong> to confirm.</p>
              <input type="text" style="background: var(--color-bg-input); border: 1px solid var(--color-border); padding: var(--space-2); color: white; border-radius: var(--radius-sm);" 
                @input=${(e) => { inputValue = e.target.value; renderModalContent(); }} />
            ` : ''}
          </div>
        `,
        footer: html`
          <div class="u-flex u-gap-2" style="justify-content: flex-end; width: 100%;">
            ${Button({ label: 'Cancel', variant: 'ghost', onClick: () => { close(); resolve(false); } })}
            ${Button({ 
              label: confirmLabel, 
              variant: tone === 'danger' ? 'delete' : 'add', 
              disabled: requireText ? inputValue !== requireText : false,
              onClick: () => { close(); resolve(true); } 
            })}
          </div>
        `,
        onClose: () => { close(); resolve(false); }
      }));
    };

    function renderModalContent() {
      modalManager.refresh(); // Force lit-html re-render
    }

    updateModal();
  });
}
