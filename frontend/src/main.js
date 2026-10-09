import { render } from 'lit-html';
import './shared/styles/reset.css';
import './shared/styles/tokens.css';
import './shared/styles/base.css';
import './shared/styles/utilities.css';

import { createRouter } from './app/router.js';
import { ROUTES } from './app/routes.js';
import { AppShell } from './app/shell/AppShell.js';
import { createPipelinePage } from './pages/PipelinePage.js';
import { createOverviewPage } from './pages/OverviewPage.js';
import { createToolsPage } from './pages/ToolsPage.js';
import { createViewsPage } from './pages/ViewsPage.js';
import { createIncidentsPage } from './pages/IncidentsPage.js';
import { createGitOpsPage } from './pages/GitOpsPage.js';
import { createSettingsPage } from './pages/SettingsPage.js';
import { modalManager } from './shared/ui/organisms/Modal/modalManager.js';
const router = createRouter(ROUTES);

const pages = {
  'overview': createOverviewPage(),
  'pipeline': createPipelinePage(),
  'tools': createToolsPage(),
  'views': createViewsPage(),
  'incidents': createIncidentsPage(),
  'gitops': createGitOpsPage(),
  'settings': createSettingsPage()
};

let activePage = null;

function renderApp() {
  const { current } = router.store.get();
  
  if (activePage && activePage.id !== current.id) {
    activePage.instance.unmount?.();
    activePage = null;
  }

  if (!activePage && current) {
    activePage = { id: current.id, instance: pages[current.id] };
    activePage.instance.mount?.(renderApp);
  }

  const pageContent = activePage ? activePage.instance.view() : '';

  render(
    AppShell({ 
      routerStore: router.store.get(), 
      routes: ROUTES, 
      router, 
      pageContent 
    }), 
    document.getElementById('app')
  );
}

router.store.subscribe(renderApp);
modalManager.store.subscribe(renderApp);
renderApp();
