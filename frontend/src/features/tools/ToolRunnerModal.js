import { html } from 'lit-html';
import { ConsoleOutput } from '../../shared/ui/organisms/ConsoleOutput/ConsoleOutput.js';
import { modalManager } from '../../shared/ui/organisms/Modal/modalManager.js';
import { Modal } from '../../shared/ui/organisms/Modal/Modal.js';
import { http } from '../../shared/api/index.js';
import { Button } from '../../shared/ui/atoms/Button/Button.js';

export function runToolModal(tool) {
  let output = 'Starting execution...\n';
  let status = 'running';

  let modalCloseFn;
  
  const renderContent = () => Modal({
    title: `Run Tool: ${tool.name}`,
    size: 'lg',
    body: html`${ConsoleOutput({ text: output, status })}`,
    footer: html`
      <div class="u-flex u-justify-end" style="width: 100%;">
        ${Button({ label: 'Close', onClick: () => modalCloseFn() })}
      </div>
    `,
    onClose: () => modalCloseFn()
  });

  modalManager.open(({ close }) => {
    modalCloseFn = close;
    return renderContent();
  });

  const update = () => {
    // Force re-render without complex reactive state for now:
    // Replace original view() function in store with one returning updated content.
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
