import { html, nothing } from 'lit-html';
import { toolsApi, toolsKeys } from '../features/tools/api.js';
import { queryCache, http } from '../shared/api/index.js';
import { createStore } from '../shared/lib/lib.js';
import { Button } from '../shared/ui/atoms/Button/Button.js';
import { ConsoleOutput } from '../shared/ui/organisms/ConsoleOutput/ConsoleOutput.js';

export function createToolsPage() {
  const store = createStore({
    selectedTool: null,
    output: 'Ready for execution...',
    executionStatus: 'idle', // idle, running, success, error
  });

  let unsubData, unsubState;

  const executeTool = async (tool) => {
    store.set(s => ({ ...s, executionStatus: 'running', output: 'Executing...\n' }));
    try {
      const result = await http.post(`/api/v1/tools/${encodeURIComponent(tool.name)}/run`);
      store.set(s => ({ ...s, executionStatus: 'success', output: s.output + '\n' + JSON.stringify(result, null, 2) }));
    } catch (err) {
      store.set(s => ({ ...s, executionStatus: 'error', output: s.output + '\nERROR: ' + err.message }));
    }
  };

  return {
    mount(onUpdate) {
      unsubData = queryCache.subscribe(toolsKeys.all, () => onUpdate());
      unsubState = store.subscribe(() => onUpdate());
      toolsApi.getTools();
    },
    unmount() {
      if (unsubData) unsubData();
      if (unsubState) unsubState();
    },
    view() {
      const { status, data, error, isFetching } = queryCache.read(toolsKeys.all);
      const state = store.get();
      
      const tools = Array.isArray(data) ? data : (data?.items ?? []);

      return html`
        <div class="u-flex u-gap-4" style="height: calc(100vh - var(--topbar-height) - (var(--space-6) * 2));">
          <!-- Left Sidebar -->
          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); width: 300px; display: flex; flex-direction: column;">
            <div style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">Available Tools</h3>
              <div class="u-font-mono u-text-muted u-text-xs u-mt-1">/config/custom_tools/</div>
            </div>
            <div style="flex: 1; overflow-y: auto; padding: var(--space-3);" class="u-flex u-flex-col u-gap-2">
              ${status === 'loading' && !data ? html`<div class="u-text-muted u-text-sm u-text-center u-mt-4">Loading tools...</div>` : nothing}
              ${status === 'error' && !data ? html`<div class="u-text-danger u-text-sm u-text-center u-mt-4">${error?.message}</div>` : nothing}
              ${tools.length === 0 && data ? html`<div class="u-text-muted u-text-sm u-text-center u-mt-4" style="border: 1px dashed var(--color-border); padding: var(--space-4); border-radius: var(--radius-sm);">No tools found in<br>/config/custom_tools/</div>` : nothing}
              
              ${tools.map(tool => html`
                <button 
                  class="u-text-left"
                  style="background: ${state.selectedTool?.name === tool.name ? 'color-mix(in srgb, var(--color-accent) 15%, transparent)' : 'transparent'}; 
                         border: 1px solid ${state.selectedTool?.name === tool.name ? 'var(--color-accent)' : 'transparent'};
                         border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); cursor: pointer; color: var(--color-text);"
                  @click=${() => store.set(s => ({ ...s, selectedTool: tool, output: 'Ready for execution...', executionStatus: 'idle' }))}
                >
                  <div class="u-font-mono u-text-sm ${state.selectedTool?.name === tool.name ? 'u-text-accent' : ''}">${tool.name}</div>
                  <div class="u-text-xs u-text-muted u-truncate u-mt-1" title=${tool.description}>${tool.description}</div>
                </button>
              `)}
            </div>
          </div>
          
          <!-- Right Content Area -->
          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; display: flex; flex-direction: column; overflow: hidden;">
            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">${state.selectedTool ? `Select a tool to execute` : 'Select a tool to execute'}</h3>
              ${Button({ 
                label: 'Execute Tool', 
                icon: 'check', 
                size: 'sm', 
                variant: 'execute', 
                disabled: !state.selectedTool || state.executionStatus === 'running',
                loading: state.executionStatus === 'running',
                onClick: () => executeTool(state.selectedTool) 
              })}
            </div>
            <div style="flex: 1; display: flex; flex-direction: column;">
              ${ConsoleOutput({ text: state.output, status: state.executionStatus })}
            </div>
          </div>
        </div>
      `;
    }
  };
}
