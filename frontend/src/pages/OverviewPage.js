import { html } from 'lit-html';
import { createOverviewPanel } from '../features/overview/OverviewPanel.js';
import { overviewApi, overviewKeys } from '../features/overview/api.js';
import { queryCache } from '../shared/api/index.js';

export function createOverviewPage() {
  const panel = createOverviewPanel();
  let unsub;
  return {
    mount(onUpdate) {
      unsub = queryCache.subscribe(overviewKeys.all, () => onUpdate());
      overviewApi.getOverview();
    },
    unmount() { if (unsub) unsub(); },
    view() {
      return html`<div class="u-flex u-flex-col u-gap-4">
        ${panel.view()}
      </div>`;
    }
  };
}
