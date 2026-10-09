import { html } from 'lit-html';
import { modalManager } from './modalManager.js';

export function ModalHost() {
  const { stack } = modalManager.store.get();
  return html`<div id="modal-root">${stack.map(m => m.view())}</div>`;
}
