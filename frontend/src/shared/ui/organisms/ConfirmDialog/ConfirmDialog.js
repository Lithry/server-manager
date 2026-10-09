import { html } from 'lit-html';
import { Button } from '../../atoms/Button/Button.js';
import { modalManager } from '../Modal/modalManager.js';
import { Modal } from '../Modal/Modal.js';

export function ConfirmDialog({ title, message, tone = 'danger', confirmLabel = 'Confirmar', requireText }) {
  return new Promise((resolve) => {
    let inputValue = '';
    const id = 'confirm-' + Math.random().toString(36).substring(2);
    
    const updateModal = () => {
      // Usar open solo una vez. Como esto es una promesa simple que se resuelve,
      // no necesitamos reactividad real aquí, solo abrimos el Modal con lit-html.
      modalManager.open(({ close }) => Modal({
        title,
        body: html`
          <div class="u-flex u-flex-col u-gap-3">
            <p>${message}</p>
            ${requireText ? html`
              <p class="u-text-sm u-text-muted">Escribe <strong>${requireText}</strong> para confirmar.</p>
              <input type="text" style="background: var(--color-bg-input); border: 1px solid var(--color-border); padding: var(--space-2); color: white; border-radius: var(--radius-sm);" 
                @input=${(e) => { inputValue = e.target.value; renderModalContent(); }} />
            ` : ''}
          </div>
        `,
        footer: html`
          <div class="u-flex u-gap-2" style="justify-content: flex-end; width: 100%;">
            ${Button({ label: 'Cancelar', variant: 'ghost', onClick: () => { close(); resolve(false); } })}
            ${Button({ 
              label: confirmLabel, 
              variant: tone === 'danger' ? 'danger' : 'primary', 
              disabled: requireText ? inputValue !== requireText : false,
              onClick: () => { close(); resolve(true); } 
            })}
          </div>
        `,
        onClose: () => { close(); resolve(false); }
      }));
    };

    function renderModalContent() {
      modalManager.refresh(); // Fuerzo a lit-html a re-renderizar
    }

    updateModal();
  });
}
