import { html } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat.js';
import { Icon } from '../../shared/ui/atoms/Icon/Icon.js';
import styles from './Sidebar.module.css';
import { queryCache } from '../../shared/api/index.js';
import { overviewKeys } from '../../features/overview/api.js';

let isExpanded = false;
function toggleSidebar() {
  isExpanded = !isExpanded;
  const el = document.getElementById('app-sidebar');
  if (el) {
    if (isExpanded) el.classList.add(styles.expanded);
    else el.classList.remove(styles.expanded);
  }
}

export function Sidebar({ routes, activeId, onNavigate }) {
  const meta = queryCache.read(overviewKeys.all);
  const commit = meta?.data?.telemetry?.short_commit || '6b319ac';
  const branch = meta?.data?.telemetry?.branch || 'main';

  return html`<aside id="app-sidebar" class="${styles.sidebar} ${isExpanded ? styles.expanded : ''}">
    <div class=${styles.brand}>
      <div class=${styles.logo}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
      </div>
      <div class=${styles.brandText}>
        <div class=${styles.title}>ServerManager <span style="font-size: 0.65rem; color: var(--color-accent); font-family: var(--font-mono); border: 1px solid var(--color-accent); padding: 1px 4px; border-radius: 4px; margin-left: 4px;">v0.1.6</span></div>
        <div style="font-size: 0.65rem; color: var(--color-text-muted); letter-spacing: 0.05em;">CUBI-SERVER ENGINE</div>
      </div>
    </div>
    <nav class=${styles.nav}>
      ${repeat(routes, r => r.id, r => html`
        <button class=${styles.navItem} aria-current=${r.id === activeId ? 'page' : 'false'}
          @click=${() => onNavigate(r.path)}>
          ${Icon({ name: r.icon, size: 16 })}
          <span>${r.title}</span>
        </button>
      `)}
    </nav>
    <div class=${styles.sidebarFooter}>
      <button class=${styles.toggleBtn} @click=${toggleSidebar}>
        ${Icon({ name: 'menu', size: 16 })}
        <span class=${styles.toggleText}>Collapse Menu</span>
      </button>
      <div class=${styles.footerDetails}>
        <div class=${styles.statusWrapper}>
          <div class=${styles.statusDot}></div>
          <span class=${styles.statusText}>Manager Online</span>
        </div>
        <div class=${styles.branchBox}>
          <span style="color: var(--color-accent);">${branch}</span>
          <span class=${styles.commitText}>${commit}</span>
        </div>
      </div>
    </div>
  </aside>`;
}
