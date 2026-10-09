import { html, nothing } from 'lit-html';
import { Button } from '../../../shared/ui/atoms/Button/Button.js';

export function createStagesPanel(store, stagesData = []) {
  const handleAddStage = () => {
    store.set(s => ({ ...s, isStageModalOpen: true }));
  };

  return html`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">DAG Execution Stages</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Define pipeline stages. Stages with <code>start_condition IS NULL</code> act as Root Producers.</p>
        </div>
        ${Button({ label: '+ Add Stage', variant: 'add', size: 'sm', onClick: handleAddStage })}
      </div>
      
      <div class="u-flex u-flex-col">
        ${stagesData.length === 0 
          ? html`<div class="u-text-muted u-text-sm" style="padding: var(--space-4);">No execution stages defined yet. Click <strong>+ Add Stage</strong> to create your first pipeline stage.</div>` 
          : stagesData.map((stage, i) => html`
              <div style="padding: var(--space-4); border-bottom: ${i === stagesData.length - 1 ? 'none' : '1px solid var(--color-border)'};">
                <div class="u-flex u-items-center u-justify-between">
                  <div>
                    <strong style="color: var(--color-text);">${stage.name}</strong>
                    <span class="u-font-mono u-text-xs u-ml-2" style="color: var(--color-text-muted);">${stage.id}</span>
                  </div>
                  <div class="u-flex u-gap-2">
                    ${Button({ label: 'Edit', variant: 'ghost', size: 'sm', onClick: () => alert('Edit ' + stage.name) })}
                    ${Button({ label: 'Delete', variant: 'delete', size: 'sm', onClick: () => alert('Delete ' + stage.name) })}
                  </div>
                </div>
                <div class="u-text-sm u-text-muted u-mt-1">${stage.description || 'No description provided.'}</div>
                <div class="u-text-xs u-font-mono u-text-muted u-mt-2" style="background: var(--color-bg-subtle); padding: 4px 8px; border-radius: 4px;">
                  START: ${stage.start_condition || 'NULL (ROOT)'} | COMPLETE: ${stage.complete_condition || 'IMMEDIATE / SINK'}
                </div>
              </div>
            `)
        }
      </div>
    </div>
  `;
}
