import { createStore } from '../shared/lib/lib.js';

export function createRouter(routes) {
  const store = createStore({ current: null, params: {} });
  
  function handleHash() {
    const hash = window.location.hash.slice(1) || '/';
    const route = routes.find(r => r.path === hash) || routes[0];
    store.set({ current: route, params: {} });
  }

  window.addEventListener('hashchange', handleHash);
  handleHash();

  return {
    store,
    navigate(path) {
      window.location.hash = path;
    }
  };
}
