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
