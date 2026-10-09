import { html } from 'lit-html';
import { Sidebar } from './Sidebar.js';
import { Topbar } from './Topbar.js';
import { ModalHost } from '../../shared/ui/organisms/Modal/ModalHost.js';
import styles from './AppShell.module.css';

export function AppShell({ routerStore, routes, router, pageContent }) {
  const { current } = routerStore;
  return html`<div class=${styles.layout}>
    ${Sidebar({ routes, activeId: current?.id, onNavigate: router.navigate })}
    <div class=${styles.mainContent}>
      ${Topbar({ title: current?.pageTitle || current?.title || '' })}
      <main class=${styles.page}>
        ${pageContent}
      </main>
    </div>
    ${ModalHost()}
  </div>`;
}
