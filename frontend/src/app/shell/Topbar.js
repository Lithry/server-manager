import { html } from 'lit-html';
import styles from './Topbar.module.css';

import { Button } from '../../shared/ui/atoms/Button/Button.js';
import { queryCache } from '../../shared/api/index.js';

export function Topbar({ title }) {
  return html`<header class=${styles.topbar}>
    <h1 class=${styles.title}>${title}</h1>
    <div class=${styles.actions} style="display: flex; gap: var(--space-3); align-items: center;">
      ${Button({ 
        label: 'Refresh', 
        icon: 'refresh', 
        size: 'sm', 
        variant: 'secondary', 
        onClick: () => {
          queryCache.invalidate([]);
          window.dispatchEvent(new CustomEvent('app:refresh')); // fallback for things not in cache
        }
      })}
      <div style="background: rgba(46, 204, 113, 0.1); border: 1px solid rgba(46, 204, 113, 0.2); color: var(--color-success); font-family: var(--font-mono); font-size: var(--font-size-xs); padding: 4px 10px; border-radius: 12px; display: flex; align-items: center; gap: 6px;">
        <div style="width: 6px; height: 6px; border-radius: 50%; background: var(--color-success); box-shadow: 0 0 6px var(--color-success);"></div>
        Port 8099
      </div>
    </div>
  </header>`;
}
