import { html, nothing } from 'lit-html';
import { createViewList } from '../features/views/ViewList.js';
import { viewsApi, viewsKeys } from '../features/views/api.js';
import { createViewModal } from '../features/views/ui/ViewModal.js';
import { createViewDataModal } from '../features/views/ui/ViewDataModal.js';
import { queryCache } from '../shared/api/index.js';
import { createStore } from '../shared/lib/lib.js';
import { Button } from '../shared/ui/atoms/Button/Button.js';

export function createViewsPage() {
  const store = createStore({
    isViewModalOpen: false,
    editingView: null,
    draftMode: null,
    isSavingView: false,
    viewModalError: null,
    inspectingView: null,
    viewDataPayload: null,
    isLoadingViewData: false,
    viewDataError: null
  });
  const list = createViewList(store);
  let unsub, unsubStore;

  return {
    mount(onUpdate) {
      unsub = queryCache.subscribe(viewsKeys.all, () => onUpdate());
      unsubStore = store.subscribe(() => onUpdate());
      viewsApi.getViews();
    },
    unmount() {
      if (unsub) unsub();
      if (unsubStore) unsubStore();
    },
    view() {
      const state = store.get();
      const snapshot = queryCache.read(viewsKeys.all);
      const items = Array.isArray(snapshot.data) ? snapshot.data : (snapshot.data?.items ?? []);
      const tableCount = items.filter(i => i.MODE === 'TABLE').length;
      const viewCount = items.length - tableCount;

      return html`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between">
            <div class="u-text-muted u-text-sm">
              ${items.length === 0
                ? 'Define virtual SQLite views for quick confirmation or persistent custom tables with automated Ts refresh.'
                : `${items.length} registered (${viewCount} virtual view${viewCount === 1 ? '' : 's'}, ${tableCount} persistent table${tableCount === 1 ? '' : 's'})`}
            </div>
            ${Button({
              label: '+ New View / Custom Table',
              variant: 'add',
              size: 'sm',
              onClick: () => store.set(s => ({
                ...s,
                isViewModalOpen: true,
                editingView: null,
                draftMode: 'VIEW',
                viewModalError: null
              }))
            })}
          </div>
          ${list.view()}
          ${state.isViewModalOpen ? createViewModal(store) : nothing}
          ${state.inspectingView ? createViewDataModal(store) : nothing}
        </div>
      `;
    }
  };
}

