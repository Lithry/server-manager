import { createStore } from '../../../lib/lib.js';

export function createModalManager() {
  const store = createStore({ stack: [] });
  let seq = 0;
  function open(build) {
    return new Promise((resolve) => {
      const id = `modal-${(seq += 1)}`;
      let settled = false;
      const close = (result) => {
        if (settled) return;
        settled = true;
        store.set((s) => ({ stack: s.stack.filter((m) => m.id !== id) }));
        resolve(result);
      };
      store.set((s) => ({ stack: [...s.stack, { id, view: () => build({ close, id }) }] }));
    });
  }
  const refresh = () => store.set((s) => ({ stack: [...s.stack] }));
  return { open, refresh, store };
}
export const modals = createModalManager();
export const modalManager = modals;
