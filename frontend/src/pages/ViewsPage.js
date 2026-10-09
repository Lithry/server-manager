import { html } from 'lit-html';
import { createViewList } from '../features/views/ViewList.js';
import { viewsApi, viewsKeys } from '../features/views/api.js';
import { queryCache } from '../shared/api/index.js';
import { Button } from '../shared/ui/atoms/Button/Button.js';

export function createViewsPage() {
  const list = createViewList();
  let unsub;
  return {
    mount(onUpdate) {
      unsub = queryCache.subscribe(viewsKeys.all, () => onUpdate());
      viewsApi.getViews();
    },
    unmount() { if (unsub) unsub(); },
    view() {
      return html`<div class="u-flex u-flex-col u-gap-4">
        <div class="u-flex u-items-center u-justify-between u-mb-4">
          <div class="u-text-muted u-text-sm">No views configured yet.</div>
          ${Button({ label: '+ New Custom View', variant: 'add', size: 'sm', onClick: () => alert('New Custom View') })}
        </div>
        ${list.view()}
      </div>`;
    }
  };
}
