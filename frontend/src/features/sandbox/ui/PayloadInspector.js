import { html, nothing } from 'lit-html';
import { Badge } from '../../../shared/ui/atoms/Badge/Badge.js';
import { Icon } from '../../../shared/ui/atoms/Icon/Icon.js';
import { JsonTreeView } from './JsonTreeView.js';

const TYPE_TONES = {
  int: 'info',
  float: 'info',
  bool: 'success',
  list: 'accent',
  dict: 'warning',
  str: 'neutral',
  string: 'neutral'
};
const getTypeTone = (t) => TYPE_TONES[t?.toLowerCase()] || 'neutral';

export function PayloadInspector({
  flattenedKeys = [],
  response = null,
  rawContext = null,
  logs = [],
  activeTab = 'keys',
  filterQuery = '',
  copiedPath = null,
  onTabChange,
  onFilterChange,
  onCopyPath,
  onInsertPlaceholder
}) {
  const query = (filterQuery || '').toLowerCase().trim();
  const filteredKeys = flattenedKeys.filter((k) => (
    !query ||
    k.path.toLowerCase().includes(query) ||
    (k.type && k.type.toLowerCase().includes(query)) ||
    (k.sample !== undefined && String(k.sample).toLowerCase().includes(query))
  ));

  const renderTabBtn = (tabId, label) => {
    const isActive = activeTab === tabId;
    return html`
      <button
        type="button"
        class="tab-btn u-font-mono ${isActive ? 'is-active' : ''}"
        style="padding: 3px var(--space-2); font-size: var(--font-size-xs);"
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
          ${renderTabBtn('tree', 'Payload Tree')}
          ${renderTabBtn('logs', `Logs (${logs.length})`)}
        </div>
        ${activeTab === 'keys' && flattenedKeys.length > 0 ? html`
          <div style="max-width: 180px; flex: 1;">
            <input type="text" class="form-input u-font-mono u-text-xs" placeholder="Filter keys..." .value=${filterQuery} @input=${(e) => onFilterChange?.(e.target.value)} style="padding: 2px var(--space-2); height: 26px;" />
          </div>
        ` : nothing}
      </div>

      <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; overflow: hidden;">
        ${activeTab === 'keys' ? html`<div style="flex: 1; overflow-y: auto;">${renderKeysView({ filteredKeys, totalCount: flattenedKeys.length, copiedPath, onCopyPath, onInsertPlaceholder })}</div>` : nothing}
        ${activeTab === 'tree' ? JsonTreeView({ data: rawContext || response, copiedPath, onCopyPath }) : nothing}
        ${activeTab === 'logs' ? html`<div style="flex: 1; overflow-y: auto;">${renderLogsView(logs)}</div>` : nothing}
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
          <div class="u-flex u-items-center u-justify-between u-gap-3" style="padding: var(--space-2) var(--space-3); border-bottom: 1px solid var(--color-border); font-family: var(--font-mono);">
            <div class="u-flex u-flex-col u-gap-1" style="min-width: 0; flex: 1;">
              <div class="u-flex u-items-center u-gap-2">
                <span class="u-truncate" style="font-size: var(--font-size-sm); color: var(--color-accent); font-weight: 500; cursor: pointer;" title="Click to copy: ${item.path}" @click=${() => onCopyPath?.(item.path)}>${item.path}</span>
                ${Badge({ label: item.type || 'unknown', tone: getTypeTone(item.type), mono: true })}
              </div>
              ${item.sample !== undefined && item.sample !== null ? html`
                <div class="u-truncate" style="font-size: var(--font-size-xs); color: var(--color-text-secondary); line-height: 1.4;" title=${item.sample}>
                  <span style="color: var(--color-text-muted); font-size: var(--font-size-2xs);">sample: </span>${String(item.sample)}
                </div>
              ` : nothing}
            </div>
            <div class="u-flex u-items-center u-gap-1" style="flex-shrink: 0;">
              <button type="button" class="u-flex u-items-center u-gap-1 u-font-mono" title="Copy path to clipboard" style="padding: 3px 8px; font-size: 0.72rem; background: ${isCopied ? 'var(--color-success)' : 'var(--color-bg-surface)'}; border: 1px solid ${isCopied ? 'var(--color-success)' : 'var(--color-border-strong)'}; color: ${isCopied ? '#fff' : 'var(--color-text)'}; border-radius: var(--radius-xs); cursor: pointer;" @click=${() => onCopyPath?.(item.path)}>
                ${Icon({ name: isCopied ? 'check' : 'copy', size: 12 })}
                <span>${isCopied ? 'Copied' : 'Copy'}</span>
              </button>
              <button type="button" class="u-flex u-items-center u-gap-1 u-font-mono" title="Insert placeholder {${item.path}} into endpoint" style="padding: 3px 8px; font-size: 0.72rem; background: var(--color-bg-surface); border: 1px solid var(--color-border-strong); color: var(--color-accent); border-radius: var(--radius-xs); cursor: pointer;" @click=${() => onInsertPlaceholder?.(item.path)}>
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

function renderLogsView(logs) {
  if (!logs || logs.length === 0) {
    return html`<div style="padding: var(--space-4); text-align: center; color: var(--color-text-muted); font-size: var(--font-size-sm);">No server execution logs recorded.</div>`;
  }
  return html`
    <div class="u-font-mono" style="padding: var(--space-3); font-size: 0.85rem; color: var(--color-console-text); background: var(--color-bg-base); min-height: 100%; line-height: 1.5; white-space: pre-wrap;">
      ${logs.map((log) => html`<div>${log}</div>`)}
    </div>
  `;
}
