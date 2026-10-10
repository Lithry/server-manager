import { html, nothing } from 'lit-html';
import { Button } from '../../../shared/ui/atoms/Button/Button.js';
import { queryCache } from '../../../shared/api/index.js';
import { settingsKeys } from '../api.js';

export function createStagesPanel(store, stagesData = []) {
  const handleAddStage = () => {
    store.set(s => ({ ...s, isStageModalOpen: true, editingStageId: null }));
  };

  const getStageType = (stage) => {
    if (!stage.start_condition) return { label: 'ROOT', color: 'var(--color-success)', bg: 'color-mix(in srgb, var(--color-success) 20%, transparent)' };
    if (!stage.complete_condition) return { label: 'SINK', color: 'var(--color-warning)', bg: 'color-mix(in srgb, var(--color-warning) 20%, transparent)' };
    return { label: 'CONSUMER', color: 'var(--color-accent)', bg: 'color-mix(in srgb, var(--color-accent) 20%, transparent)' };
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
      
      <div class="u-flex u-flex-col u-gap-3" style="padding: var(--space-4);">
        ${stagesData.length === 0 
          ? html`<div class="u-text-muted u-text-sm">No execution stages defined yet. Click <strong>+ Add Stage</strong> to create your first pipeline stage.</div>` 
          : stagesData.map((stage, i) => {
              const type = getStageType(stage);
              return html`
              <div style="padding: var(--space-4); border: 1px solid var(--color-border); border-left: 4px solid ${type.color}; border-radius: var(--radius-md); background: color-mix(in srgb, ${type.color} 5%, var(--color-bg-card)); transition: background 0.2s;">
                <div class="u-flex u-items-center u-justify-between">
                  <div class="u-flex u-items-center u-gap-3">
                    <strong style="color: var(--color-text); font-size: 1.1rem;">${stage.name}</strong>
                    <span class="u-font-mono u-text-xs" style="color: var(--color-text-muted);">${stage.id}</span>
                    <span class="u-font-mono u-text-xs" style="background: ${type.bg}; color: ${type.color}; padding: 2px 6px; border-radius: 4px; font-weight: bold;">${type.label}</span>
                  </div>
                  <div class="u-flex u-items-center u-gap-3">
                    ${Button({ 
                      label: stage.enabled ? 'ACTIVE' : 'INACTIVE', 
                      variant: stage.enabled ? 'save' : 'secondary', 
                      size: 'sm', 
                      onClick: () => {
                        const newSettings = { ...queryCache.read(settingsKeys.all).data };
                        const stg = newSettings.stages.find(x => x.id === stage.id);
                        if (stg) {
                          stg.enabled = !stg.enabled;
                          queryCache.setData(settingsKeys.all, () => newSettings);
                          store.set(s => ({ ...s, isDirty: true }));
                        }
                      } 
                    })}
                    ${Button({ label: 'Edit', variant: 'ghost', size: 'sm', onClick: () => store.set(s => ({ ...s, isStageModalOpen: true, editingStageId: stage.id })) })}
                    ${Button({ label: 'Delete', variant: 'delete', size: 'sm', onClick: () => confirm('Delete stage?') })}
                  </div>
                </div>
                <div class="u-text-sm u-text-muted u-mt-1">${stage.description || 'No description provided.'}</div>
                <div class="u-text-xs u-font-mono u-mt-3" style="background: color-mix(in srgb, var(--color-bg-card) 50%, transparent); padding: 8px; border-radius: 4px; border: 1px solid color-mix(in srgb, var(--color-border) 50%, transparent);">
                  <div style="margin-bottom: 4px; color: var(--color-success);">
                    ${!stage.start_condition ? '✓ ' : ''}<strong>START CONDITION:</strong> ${stage.start_condition ? stage.start_condition : 'NULL (ROOT STAGE - Immediate Execution)'}
                  </div>
                  <div style="color: var(--color-warning);">
                    ${!stage.complete_condition ? '✗ ' : ''}<strong>COMPLETE CONDITION:</strong> ${stage.complete_condition ? stage.complete_condition : 'NULL (SINK STAGE - Ends on Start)'}
                  </div>
                </div>
              </div>
            `;
          })
        }
      </div>
    </div>
  `;
}
