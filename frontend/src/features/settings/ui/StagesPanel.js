import { html, nothing } from 'lit-html';
import { Button } from '../../../shared/ui/atoms/Button/Button.js';
import { Toggle } from '../../../shared/ui/atoms/Toggle/Toggle.js';
import { queryCache } from '../../../shared/api/index.js';
import { settingsKeys } from '../api.js';

export function createStagesPanel(store, stagesData = [], globalPoll = 300) {
  const handleAddStage = () => {
    store.set(s => ({ ...s, isStageModalOpen: true, editingStageId: null, stageIsRoot: null, stageIsSink: null, stageInheritInterval: null }));
  };

  const handleMoveStage = (index, direction) => {
    const currentSettings = queryCache.read(settingsKeys.all);
    if (!currentSettings || !currentSettings.data) return;

    const stages = [...currentSettings.data.stages];
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= stages.length) return;

    [stages[index], stages[newIndex]] = [stages[newIndex], stages[index]];

    queryCache.setData(settingsKeys.all, () => ({
      ...currentSettings.data,
      stages
    }));
    store.set(s => ({ ...s, isDirty: true }));
  };

  const handleDeleteStage = (stageId) => {
    if (!confirm(`Delete stage '${stageId}'?`)) return;
    const currentSettings = queryCache.read(settingsKeys.all);
    if (!currentSettings?.data) return;

    const nextStages = (currentSettings.data.stages || []).filter(st => st.id !== stageId);
    queryCache.setData(settingsKeys.all, () => ({
      ...currentSettings.data,
      stages: nextStages
    }));
    store.set(s => ({ ...s, isDirty: true }));
  };

  const getStageType = (stage) => {
    const isRoot = !stage.start_condition;
    const isSink = !stage.complete_condition;
    if (isRoot && isSink) {
      return { label: 'ROOT + SINK', color: 'var(--color-warning)', bg: 'color-mix(in srgb, var(--color-warning) 20%, transparent)', isPassiveSink: false };
    }
    if (isRoot) {
      return { label: 'ROOT', color: 'var(--color-success)', bg: 'color-mix(in srgb, var(--color-success) 20%, transparent)', isPassiveSink: false };
    }
    if (isSink) {
      return { label: 'SINK (PASSIVE)', color: 'var(--color-warning)', bg: 'color-mix(in srgb, var(--color-warning) 20%, transparent)', isPassiveSink: true };
    }
    return { label: 'CONSUMER', color: 'var(--color-accent)', bg: 'color-mix(in srgb, var(--color-accent) 20%, transparent)', isPassiveSink: false };
  };

  return html`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">DAG Execution Stages</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Define pipeline stages, execution intervals, and multi-pipeline routing. Stages with <code>start_condition IS NULL</code> act as Root Producers.</p>
        </div>
        ${Button({ label: '+ Add Stage', variant: 'add', size: 'sm', onClick: handleAddStage })}
      </div>
      
      <div class="u-flex u-flex-col u-gap-3" style="padding: var(--space-4);">
        ${stagesData.length === 0 
          ? html`<div class="u-text-muted u-text-sm">No execution stages defined yet. Click <strong>+ Add Stage</strong> to create your first pipeline stage.</div>` 
          : stagesData.map((stage, i) => {
              const type = getStageType(stage);
              const pipelinesList = (stage.pipeline_ids && stage.pipeline_ids.length > 0) ? stage.pipeline_ids : ['default'];
              const servicesList = stage.service_ids || [];
              const intervalLabel = type.isPassiveSink
                ? 'PASSIVE RETENTION (NO POLL)'
                : (stage.interval_seconds ? `EVERY ${stage.interval_seconds}S` : `GLOBAL (${globalPoll}S)`);

              return html`
              <div style="padding: var(--space-4); border: 1px solid var(--color-border); border-left: 4px solid ${type.color}; border-radius: var(--radius-md); background: color-mix(in srgb, ${type.color} 5%, var(--color-bg-card)); transition: background 0.2s;">
                <div class="u-flex u-items-center u-justify-between" style="flex-wrap: wrap; gap: var(--space-2);">
                  <div class="u-flex u-items-center u-gap-3" style="flex-wrap: wrap;">
                    <strong style="color: var(--color-text); font-size: 1.1rem;">${stage.name}</strong>
                    <span class="u-font-mono u-text-xs" style="color: var(--color-text-muted);">${stage.id}</span>
                    <span class="u-font-mono u-text-xs" style="background: ${type.bg}; color: ${type.color}; padding: 2px 6px; border-radius: 4px; font-weight: bold;">${type.label}</span>
                    <span class="u-font-mono u-text-xs" style="background: var(--color-bg-subtle); color: var(--color-text-secondary); padding: 2px 6px; border-radius: 4px; border: 1px solid var(--color-border);">
                      PIPELINES: ${pipelinesList.join(', ')}
                    </span>
                    <span class="u-font-mono u-text-xs" style="color: var(--color-text); font-weight: 600;">
                      ${intervalLabel}
                    </span>
                  </div>
                  <div class="u-flex u-items-center u-gap-3">
                    ${Toggle({
                      checked: stage.enabled,
                      label: stage.enabled ? 'ACTIVE' : 'INACTIVE',
                      onChange: (newVal) => {
                        const newSettings = { ...queryCache.read(settingsKeys.all).data };
                        const stg = newSettings.stages.find(x => x.id === stage.id);
                        if (stg) {
                          stg.enabled = newVal;
                          if (newVal && !stg.start_condition && !stg.last_activated_at) {
                            stg.last_activated_at = new Date().toISOString();
                          }
                          queryCache.setData(settingsKeys.all, () => newSettings);
                          store.set(s => ({ ...s, isDirty: true }));
                        }
                      }
                    })}
                    <div class="u-flex u-gap-1 u-ml-2">
                      ${Button({
                        label: '▲',
                        variant: 'ghost',
                        size: 'sm',
                        disabled: i === 0,
                        ariaLabel: 'Move Up',
                        onClick: () => handleMoveStage(i, -1)
                      })}
                      ${Button({
                        label: '▼',
                        variant: 'ghost',
                        size: 'sm',
                        disabled: i === stagesData.length - 1,
                        ariaLabel: 'Move Down',
                        onClick: () => handleMoveStage(i, 1)
                      })}
                      ${Button({ label: 'Edit', variant: 'ghost', size: 'sm', onClick: () => store.set(s => ({ ...s, isStageModalOpen: true, editingStageId: stage.id, stageIsRoot: null, stageIsSink: null, stageInheritInterval: null })) })}
                      ${Button({ label: 'Delete', variant: 'delete', size: 'sm', onClick: () => handleDeleteStage(stage.id) })}
                    </div>
                  </div>
                </div>
                <div class="u-text-sm u-text-muted u-mt-1">
                  ${stage.description || 'No description provided.'}
                  <span class="u-font-mono u-text-xs u-ml-2" style="color: var(--color-text-secondary);">
                    | Services: ${servicesList.length > 0 ? servicesList.join(', ') : (type.isPassiveSink ? 'passive updates only' : 'none')}
                  </span>
                </div>
                <div class="u-text-xs u-font-mono u-mt-3" style="background: color-mix(in srgb, var(--color-bg-card) 50%, transparent); padding: 8px; border-radius: 4px; border: 1px solid color-mix(in srgb, var(--color-border) 50%, transparent);">
                  <div style="margin-bottom: 4px; color: var(--color-success);">
                    ${!stage.start_condition ? '✓ ' : ''}<strong>START CONDITION:</strong> ${stage.start_condition ? stage.start_condition : 'NULL (ROOT STAGE - Immediate Ingestion)'}
                  </div>
                  <div style="color: var(--color-warning);">
                    ${!stage.complete_condition ? '✗ ' : ''}<strong>COMPLETE CONDITION:</strong> ${stage.complete_condition ? stage.complete_condition : 'NULL (SINK STAGE - Retained Until Retention Window Expires)'}
                  </div>
                  ${!stage.start_condition && stage.last_activated_at ? html`
                    <div style="margin-top: 4px; color: var(--color-text-muted);">
                      <strong>CUTOFF:</strong> ${stage.last_activated_at}
                    </div>
                  ` : nothing}
                </div>
              </div>
            `;
          })
        }
      </div>
    </div>
  `;
}

