import { html, nothing } from 'lit-html';
import { Badge } from '../../../shared/ui/atoms/Badge/Badge.js';
import { Icon } from '../../../shared/ui/atoms/Icon/Icon.js';

const TYPE_TONES = { int: 'info', float: 'info', bool: 'success', list: 'accent', dict: 'warning' };
const getTypeTone = (t) => TYPE_TONES[t?.toLowerCase()] || 'neutral';

function resolvePath(obj, path) {
  if (!path || !obj) return undefined;
  try {
    return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
  } catch (e) {
    return undefined;
  }
}

export function PayloadInspector({
  flattenedKeys = [],
  response = null,
  rawContext = null,
  logs = [],
  activeTab = 'keys',
  filterQuery = '',
  copiedPath = null,
  testVariable = '',
  onTabChange,
  onFilterChange,
  onCopyPath,
  onInsertPlaceholder,
  onTestVariableChange
}) {
  const query = (filterQuery || '').toLowerCase().trim();
  const filteredKeys = flattenedKeys.filter((k) => (
    !query ||
    k.path.toLowerCase().includes(query) ||
    (k.type && k.type.toLowerCase().includes(query)) ||
    (k.sample && String(k.sample).toLowerCase().includes(query))
  ));

  const renderTabBtn = (tabId, label) => {
    const isActive = activeTab === tabId;
    return html`
      <button
        type="button"
        class="u-text-xs u-font-mono"
        style="background: ${isActive ? 'color-mix(in srgb, var(--color-accent) 15%, transparent)' : 'transparent'}; border: 1px solid ${isActive ? 'var(--color-accent)' : 'var(--color-border)'}; color: ${isActive ? 'var(--color-accent)' : 'var(--color-text-secondary)'}; padding: 3px var(--space-2); border-radius: var(--radius-xs); cursor: pointer;"
        @click=${() => onTabChange?.(tabId)}
      >
        ${label}
      </button>
    `;
  };

  return html`
    <div class="payload-inspector u-flex u-flex-col" style="height: 100%; min-height: 0; background: var(--color-bg-card); border: 1px solid var(--color-border); border-radius: var(--radius-sm); overflow: hidden;">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-2) var(--space-3); border-bottom: 1px solid var(--color-border); background: var(--color-bg-surface); flex-shrink: 0; gap: var(--space-2); flex-wrap: wrap;">
        <div class="u-flex u-items-center u-gap-2">
          ${renderTabBtn('keys', `Discovered Keys (${flattenedKeys.length})`)}
          ${renderTabBtn('response', 'Endpoint Result')}
          ${renderTabBtn('context', 'Cumulative Context')}
          ${renderTabBtn('logs', `Logs (${logs.length})`)}
        </div>
        ${activeTab === 'keys' && flattenedKeys.length > 0 ? html`
          <div style="max-width: 180px; flex: 1;">
            <input type="text" class="form-input u-font-mono u-text-xs" placeholder="Filter keys..." .value=${filterQuery} @input=${(e) => onFilterChange?.(e.target.value)} style="padding: 2px var(--space-2); height: 26px;" />
          </div>
        ` : nothing}
      </div>

      <div style="flex: 1; min-height: 0; overflow-y: auto;">
        ${activeTab === 'keys' ? renderKeysView({ filteredKeys, totalCount: flattenedKeys.length, copiedPath, onCopyPath, onInsertPlaceholder }) : nothing}
        ${activeTab === 'response' ? renderResponseView({ response, testVariable, onTestVariableChange }) : nothing}
        ${activeTab === 'context' ? renderPreView(rawContext, 'No cumulative context data available.') : nothing}
        ${activeTab === 'logs' ? renderLogsView(logs) : nothing}
      </div>
    </div>
  `;
}

function renderKeysView({ filteredKeys, totalCount, copiedPath, onCopyPath, onInsertPlaceholder }) {
  if (totalCount === 0) {
    return html`
      <div class="u-flex u-flex-col u-items-center u-justify-center" style="padding: var(--space-6); text-align: center; color: var(--color-text-muted); height: 100%;">
        <span style="font-size: 1.5rem; margin-bottom: var(--space-2);">🔍</span>
        <div class="u-text-sm" style="color: var(--color-text);">No payload attributes discovered yet.</div>
        <div class="u-text-xs" style="margin-top: var(--space-1);">Execute a test request to inspect and extract available placeholder paths.</div>
      </div>
    `;
  }
  if (filteredKeys.length === 0) {
    return html`<div style="padding: var(--space-4); text-align: center; color: var(--color-text-muted); font-size: var(--font-size-sm);">No keys match filter query.</div>`;
  }
  return html`
    <div class="u-flex u-flex-col">
      ${filteredKeys.map((item) => {
        const isCopied = copiedPath === item.path;
        return html`
          <div class="u-flex u-items-center u-justify-between u-gap-2" style="padding: var(--space-2) var(--space-3); border-bottom: 1px solid var(--color-border); font-size: var(--font-size-xs);">
            <div class="u-flex u-flex-col u-gap-1" style="min-width: 0; flex: 1;">
              <div class="u-flex u-items-center u-gap-2">
                <span class="u-font-mono u-truncate" style="color: var(--color-accent); font-weight: var(--font-weight-medium); cursor: pointer;" title="Click to copy: ${item.path}" @click=${() => onCopyPath?.(item.path)}>${item.path}</span>
                ${Badge({ label: item.type || 'unknown', tone: getTypeTone(item.type), mono: true })}
              </div>
              ${item.sample ? html`<span class="u-font-mono u-truncate u-text-muted" style="font-size: 0.7rem;" title=${item.sample}>sample: ${item.sample}</span>` : nothing}
            </div>
            <div class="u-flex u-items-center u-gap-1" style="flex-shrink: 0;">
              <button type="button" class="u-flex u-items-center u-gap-1 u-text-2xs u-font-mono" title="Copy path to clipboard" style="padding: 3px 6px; background: ${isCopied ? 'var(--color-success)' : 'var(--color-bg-surface)'}; border: 1px solid ${isCopied ? 'var(--color-success)' : 'var(--color-border)'}; color: ${isCopied ? '#fff' : 'var(--color-text-secondary)'}; border-radius: var(--radius-xs); cursor: pointer;" @click=${() => onCopyPath?.(item.path)}>
                ${Icon({ name: isCopied ? 'check' : 'copy', size: 12 })}
                <span>${isCopied ? 'Copied' : 'Copy'}</span>
              </button>
              <button type="button" class="u-flex u-items-center u-gap-1 u-text-2xs u-font-mono" title="Insert placeholder {${item.path}} into endpoint" style="padding: 3px 6px; background: var(--color-bg-surface); border: 1px solid var(--color-border); color: var(--color-accent); border-radius: var(--radius-xs); cursor: pointer;" @click=${() => onInsertPlaceholder?.(item.path)}>
                ${Icon({ name: 'plus', size: 12 })}
                <span>Insert</span>
              </button>
            </div>
          </div>
        `;
      })}
    </div>
  `;
}

function renderResponseView({ response, testVariable, onTestVariableChange }) {
  if (!response) {
    return html`<div style="padding: var(--space-4); text-align: center; color: var(--color-text-muted); font-size: var(--font-size-sm);">No endpoint response data. Execute a test request to inspect output.</div>`;
  }
  const evaluatedVar = testVariable.trim() ? resolvePath(response, testVariable.trim()) : undefined;
  return html`
    <div class="u-flex u-flex-col" style="height: 100%;">
      <div class="u-flex u-flex-col u-gap-2" style="padding: var(--space-2) var(--space-3); border-bottom: 1px solid var(--color-border); background: var(--color-bg-surface);">
        <div class="u-flex u-gap-2 u-items-center">
          <span style="color: var(--color-text-muted); font-size: var(--font-size-xs);">Test Path:</span>
          <input type="text" class="form-input u-font-mono u-text-xs" placeholder="e.g. List.0.ID or title" .value=${testVariable} @input=${(e) => onTestVariableChange?.(e.target.value)} style="flex: 1; height: 26px;" />
        </div>
        ${testVariable.trim() ? html`
          <div style="padding: var(--space-2); background: var(--color-bg-base); color: ${evaluatedVar !== undefined ? 'var(--color-success)' : 'var(--color-danger)'}; font-family: var(--font-mono); font-size: var(--font-size-xs); max-height: 120px; overflow: auto; border-radius: var(--radius-xs); border: 1px solid var(--color-border);">
            <pre style="margin: 0; white-space: pre-wrap;">${evaluatedVar !== undefined ? JSON.stringify(evaluatedVar, null, 2) : 'undefined'}</pre>
          </div>
        ` : nothing}
      </div>
      <pre class="u-font-mono u-text-xs" style="margin: 0; padding: var(--space-3); color: var(--color-console-text); background: var(--color-bg-base); white-space: pre-wrap; overflow-x: auto; line-height: 1.4; flex: 1;">${JSON.stringify(response, null, 2)}</pre>
    </div>
  `;
}

function renderPreView(data, emptyMsg) {
  if (!data) return html`<div style="padding: var(--space-4); text-align: center; color: var(--color-text-muted); font-size: var(--font-size-sm);">${emptyMsg}</div>`;
  return html`<pre class="u-font-mono u-text-xs" style="margin: 0; padding: var(--space-3); color: var(--color-console-text); background: var(--color-bg-base); white-space: pre-wrap; overflow-x: auto; line-height: 1.4;">${JSON.stringify(data, null, 2)}</pre>`;
}

function renderLogsView(logs) {
  if (!logs || logs.length === 0) return html`<div style="padding: var(--space-4); text-align: center; color: var(--color-text-muted); font-size: var(--font-size-sm);">No server execution logs recorded.</div>`;
  return html`<div class="u-font-mono u-text-xs" style="padding: var(--space-3); color: var(--color-console-text); background: var(--color-bg-base); min-height: 100%; line-height: 1.5; white-space: pre-wrap;">${logs.map((log) => html`<div>${log}</div>`)}</div>`;
}
