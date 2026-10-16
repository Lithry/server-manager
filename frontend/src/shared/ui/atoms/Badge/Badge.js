import { html } from 'lit-html';
import { cx, isDev, assertOneOf } from '../../../lib/dom.js';
import styles from './Badge.module.css';

const TONES = Object.freeze(['info', 'success', 'warning', 'danger', 'neutral', 'accent']);

export function Badge({ label, tone = 'neutral', mono = false, uppercase = false }) {
  if (isDev()) assertOneOf(tone, TONES, 'Badge.tone');
  const classes = cx(
    styles.badge, 
    styles[`badge--${tone}`],
    mono && styles['badge--mono'],
    uppercase && styles['badge--uppercase']
  );
  return html`<span class=${classes}>${label}</span>`;
}

export function BooleanBadge({ value }) {
  if (value === null || value === undefined || value === '') {
    return html`<span class="u-text-muted">-</span>`;
  }
  const isTrue = value === 1 || value === '1' || value === true || String(value).toLowerCase() === 'true';
  return html`<span class=${cx(styles.badge, styles['badge--bool'], isTrue ? styles['badge--bool-true'] : styles['badge--bool-false'])}>${isTrue ? 'TRUE' : 'FALSE'}</span>`;
}
