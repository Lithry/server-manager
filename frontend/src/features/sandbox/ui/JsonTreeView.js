import { html, nothing } from 'lit-html';

const TREE_STYLES = html`
  <style>
    .json-tree-wrapper { display: flex; flex-direction: column; height: 100%; min-height: 0; background: var(--color-bg-base); font-family: var(--font-mono); font-size: 0.85rem; line-height: 1.5; }
    .json-tree-toolbar { display: flex; align-items: center; justify-content: space-between; padding: var(--space-2) var(--space-3); background: var(--color-bg-surface); border-bottom: 1px solid var(--color-border); flex-shrink: 0; gap: var(--space-2); }
    .json-tree-content { flex: 1; min-height: 0; overflow: auto; padding: var(--space-3); }
    .json-tree-details summary::-webkit-details-marker, .json-tree-details summary::marker { display: none; }
    .json-tree-details summary { list-style: none; display: flex; align-items: center; cursor: pointer; user-select: none; padding: 1px 4px; border-radius: var(--radius-xs); white-space: nowrap; }
    .json-tree-details summary:hover { background: rgba(255, 255, 255, 0.04); }
    .json-tree-arrow { display: inline-flex; align-items: center; justify-content: center; width: 14px; height: 14px; font-size: 9px; color: var(--color-text-secondary); margin-right: 4px; flex-shrink: 0; user-select: none; }
    .json-tree-details:not([open]) > summary > .json-tree-arrow::before { content: "►"; }
    .json-tree-details[open] > summary > .json-tree-arrow::before { content: "▼"; }
    .json-tree-spacer { display: inline-block; width: 18px; flex-shrink: 0; }
    .json-tree-children { margin-left: 6px; padding-left: 12px; border-left: 1px solid rgba(255, 255, 255, 0.08); }
    .json-tree-line { display: flex; align-items: center; padding: 1px 4px; white-space: nowrap; }
    .json-tree-line:hover { background: rgba(255, 255, 255, 0.02); }
    .json-tree-key { color: #38bdf8; cursor: pointer; font-weight: 500; }
    .json-tree-key:hover { text-decoration: underline dotted #38bdf8; color: #93c5fd; }
    .json-tree-colon { color: var(--color-text-secondary); margin-right: 4px; }
    .json-tree-syntax { color: var(--color-text-secondary); }
    .json-tree-preview { color: var(--color-text-muted); font-size: 0.78rem; margin-left: 6px; }
    .json-tree-details[open] > summary .json-tree-preview { display: none; }
    .json-tree-details:not([open]) > summary .json-tree-bracket-open { display: none; }
    .json-val-str { color: #34d399; word-break: break-all; }
    .json-val-num { color: #38bdf8; font-weight: 500; }
    .json-val-bool { color: #fbbf24; font-weight: 600; }
    .json-val-null { color: #f87171; font-weight: 600; }
    .json-copied-badge { color: var(--color-success); font-size: 0.72rem; margin-left: 6px; font-weight: 500; }
    .json-btn-tool { padding: 2px 8px; background: var(--color-bg-card); border: 1px solid var(--color-border); color: var(--color-text-secondary); border-radius: var(--radius-xs); cursor: pointer; font-size: var(--font-size-xs); font-family: var(--font-mono); transition: all 0.15s ease; }
    .json-btn-tool:hover { color: var(--color-text); border-color: var(--color-accent); background: color-mix(in srgb, var(--color-accent) 10%, transparent); }
  </style>
`;

function countSummary(data) {
  if (data === null || data === undefined) return '0 items';
  if (Array.isArray(data)) return `${data.length} ${data.length === 1 ? 'item' : 'items'} (Array)`;
  if (typeof data === 'object') {
    const keys = Object.keys(data);
    return `${keys.length} ${keys.length === 1 ? 'key' : 'keys'} (Object)`;
  }
  return '1 value';
}

function renderPrimitive(val) {
  if (typeof val === 'string') return html`<span class="json-val-str">${JSON.stringify(val)}</span>`;
  if (typeof val === 'number') return html`<span class="json-val-num">${val}</span>`;
  if (typeof val === 'boolean') return html`<span class="json-val-bool">${val ? 'true' : 'false'}</span>`;
  if (val === null) return html`<span class="json-val-null">null</span>`;
  return html`<span class="json-val-null">undefined</span>`;
}

function renderNode(val, key, path, copiedPath, onCopyPath) {
  const handleKeyClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    onCopyPath?.(path);
  };

  const isCopied = copiedPath && copiedPath === path;
  const keyHeader = key !== null ? html`
    <span class="json-tree-key" title="Click to copy path: ${path}" @click=${handleKeyClick}>${key}</span>
    <span class="json-tree-colon">: </span>
  ` : nothing;

  if (Array.isArray(val)) {
    if (val.length === 0) {
      return html`
        <div class="json-tree-line">
          <span class="json-tree-spacer"></span>
          ${keyHeader}<span class="json-tree-syntax">[]</span>
          ${isCopied ? html`<span class="json-copied-badge">✓ copied</span>` : nothing}
        </div>
      `;
    }
    return html`
      <details open class="json-tree-details">
        <summary>
          <span class="json-tree-arrow"></span>
          ${keyHeader}
          <span class="json-tree-syntax json-tree-bracket-open">[</span>
          <span class="json-tree-preview">[ ${val.length} items ]</span>
          ${isCopied ? html`<span class="json-copied-badge">✓ copied</span>` : nothing}
        </summary>
        <div class="json-tree-children">
          ${val.map((item, idx) => renderNode(item, idx, path ? `${path}.${idx}` : String(idx), copiedPath, onCopyPath))}
        </div>
        <div class="json-tree-line"><span class="json-tree-spacer"></span><span class="json-tree-syntax">]</span></div>
      </details>
    `;
  }

  if (val !== null && typeof val === 'object') {
    const keys = Object.keys(val);
    if (keys.length === 0) {
      return html`
        <div class="json-tree-line">
          <span class="json-tree-spacer"></span>
          ${keyHeader}<span class="json-tree-syntax">{}</span>
          ${isCopied ? html`<span class="json-copied-badge">✓ copied</span>` : nothing}
        </div>
      `;
    }
    return html`
      <details open class="json-tree-details">
        <summary>
          <span class="json-tree-arrow"></span>
          ${keyHeader}
          <span class="json-tree-syntax json-tree-bracket-open">{</span>
          <span class="json-tree-preview">{ ${keys.length} keys }</span>
          ${isCopied ? html`<span class="json-copied-badge">✓ copied</span>` : nothing}
        </summary>
        <div class="json-tree-children">
          ${keys.map((k) => renderNode(val[k], k, path ? `${path}.${k}` : k, copiedPath, onCopyPath))}
        </div>
        <div class="json-tree-line"><span class="json-tree-spacer"></span><span class="json-tree-syntax">}</span></div>
      </details>
    `;
  }

  return html`
    <div class="json-tree-line">
      <span class="json-tree-spacer"></span>
      ${keyHeader}${renderPrimitive(val)}
      ${isCopied ? html`<span class="json-copied-badge">✓ copied</span>` : nothing}
    </div>
  `;
}

export function JsonTreeView({ data = null, copiedPath = null, onCopyPath }) {
  if (data === null || data === undefined) {
    return html`
      <div class="u-flex u-flex-col u-items-center u-justify-center" style="padding: var(--space-6); text-align: center; color: var(--color-text-muted); height: 100%;">
        <span style="font-size: 1.5rem; margin-bottom: var(--space-2);">🌳</span>
        <div class="u-text-sm" style="color: var(--color-text);">No payload data available.</div>
        <div class="u-text-xs" style="margin-top: var(--space-1);">Execute a test request to inspect and navigate the JSON hierarchy.</div>
      </div>
    `;
  }

  const handleExpandAll = (e) => {
    const wrapper = e.currentTarget.closest('.json-tree-wrapper');
    if (wrapper) wrapper.querySelectorAll('details').forEach((d) => { d.open = true; });
  };

  const handleCollapseAll = (e) => {
    const wrapper = e.currentTarget.closest('.json-tree-wrapper');
    if (wrapper) wrapper.querySelectorAll('details').forEach((d, idx) => { d.open = idx === 0; });
  };

  return html`
    <div class="json-tree-wrapper">
      ${TREE_STYLES}
      <div class="json-tree-toolbar">
        <span class="u-text-xs u-font-mono" style="color: var(--color-text-secondary);">
          ${countSummary(data)}
        </span>
        <div class="u-flex u-items-center u-gap-1">
          <button type="button" class="json-btn-tool" @click=${handleExpandAll}>Expand All</button>
          <button type="button" class="json-btn-tool" @click=${handleCollapseAll}>Collapse All</button>
        </div>
      </div>
      <div class="json-tree-content">
        ${renderNode(data, null, '', copiedPath, onCopyPath)}
      </div>
    </div>
  `;
}
