import { html, nothing } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat.js';
import { cx, formatCell } from '../../../lib/dom.js';
import { Button } from '../../atoms/Button/Button.js';
import styles from './DataTable.module.css';

export function DataTable({ id, caption, columns, snapshot, getRows = (d) => d?.items ?? [], rowKey = (_r, i) => i, emptyMessage = 'No records found.', onRetry, footer = nothing, fallbackColumns = [] }) {
  const { status, data, error, isFetching } = snapshot;
  const hasData = data !== undefined;
  const cols = typeof columns === 'function' ? (hasData ? columns(data) : fallbackColumns) : columns;
  const colSpan = Math.max(cols.length, 1);
  const rows = hasData ? getRows(data) : [];

  const cell = (col, row) => html`<td class=${cx(col.align === 'end' && styles['table__cell--end'], col.mono && styles['table__cell--mono'])}>
    ${col.render ? col.render(row) : formatCell(row[col.key])}</td>`;

  let body;
  if (!hasData && (status === 'idle' || status === 'loading')) {
    body = Array.from({ length: 5 }, () => html`<tr aria-hidden="true">${cols.map(() => html`<td><span class=${styles['table__skeleton']}></span></td>`)}</tr>`);
  } else if (!hasData) {
    body = html`<tr><td colspan=${colSpan} class=${styles['table__message']} role="alert">
      ${error?.userMessage || error?.message || 'Failed to load data.'}
      ${onRetry ? Button({ label: 'Retry', icon: 'refresh', size: 'sm', onClick: onRetry }) : nothing}</td></tr>`;
  } else if (rows.length === 0) {
    body = html`<tr><td colspan=${colSpan} class=${styles['table__message']}>${emptyMessage}</td></tr>`;
  } else {
    body = repeat(rows, rowKey, (row) => html`<tr>${cols.map((col) => cell(col, row))}</tr>`);
  }

  return html`<div class=${styles.table}>
    ${status === 'error' && hasData ? html`<div class=${styles['table__stale']} role="status">Showing cached data. ${error?.userMessage ?? ''} ${onRetry ? Button({ label: 'Retry', size: 'sm', variant: 'ghost', onClick: onRetry }) : nothing}</div>` : nothing}
    <div class=${styles['table__scroll']} aria-busy=${isFetching ? 'true' : 'false'}>
      <table id=${id ?? nothing} class=${styles['table__grid']}>
        ${caption ? html`<caption class="u-sr-only">${caption}</caption>` : nothing}
        <thead><tr>${cols.map((c) => html`<th scope="col" class=${cx(c.align === 'end' && styles['table__cell--end'])}>${c.header}</th>`)}</tr></thead>
        <tbody>${body}</tbody>
      </table>
    </div>
    ${footer}
  </div>`;
}
