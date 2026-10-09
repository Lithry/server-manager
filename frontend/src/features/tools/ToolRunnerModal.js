import { html } from 'lit-html';
import { ConsoleOutput } from '../../shared/ui/organisms/ConsoleOutput/ConsoleOutput.js';
import { modalManager } from '../../shared/ui/organisms/Modal/modalManager.js';
import { Modal } from '../../shared/ui/organisms/Modal/Modal.js';
import { http } from '../../shared/api/index.js';
import { Button } from '../../shared/ui/atoms/Button/Button.js';

export function runToolModal(tool) {
  let output = 'Iniciando ejecución...\n';
  let status = 'running';

  let modalCloseFn;
  
  const renderContent = () => Modal({
    title: `Run Tool: ${tool.name}`,
    size: 'lg',
    body: html`${ConsoleOutput({ text: output, status })}`,
    footer: html`
      <div class="u-flex u-justify-end" style="width: 100%;">
        ${Button({ label: 'Cerrar', onClick: () => modalCloseFn() })}
      </div>
    `,
    onClose: () => modalCloseFn()
  });

  modalManager.open(({ close }) => {
    modalCloseFn = close;
    return renderContent();
  });

  const update = () => {
    // Truco para forzar re-render sin usar estado reactivo complejo por ahora:
    // Sustituimos la función view() original en el store por la misma que devuelve el contenido actualizado.
    const state = modalManager.store.get();
    const active = state.stack[state.stack.length - 1];
    if (active) {
      active.view = () => renderContent();
      modalManager.refresh();
    }
  };

  http.post(`/api/v1/tools/${encodeURIComponent(tool.name)}/run`)
    .then(data => {
      status = 'success';
      output += '\n\n' + JSON.stringify(data, null, 2);
      update();
    })
    .catch(err => {
      status = 'error';
      output += '\n\nERROR:\n' + err.message;
      update();
    });
}
