import { createStore } from '../shared/lib/lib.js';

export function createRouter(routes) {
  const store = createStore({ current: null, params: {} });
  
  let beforeNavigateHook = null;

  async function handleHash(e) {
    const hash = window.location.hash.slice(1) || '/';
    
    if (beforeNavigateHook && store.get().current && store.get().current.path !== hash) {
      const canNavigate = await beforeNavigateHook(hash);
      if (!canNavigate) {
        // user aborted, revert URL
        window.removeEventListener('hashchange', handleHash);
        window.location.hash = store.get().current.path;
        setTimeout(() => window.addEventListener('hashchange', handleHash), 0);
        return;
      }
    }
    
    const route = routes.find(r => r.path === hash) || routes[0];
    store.set({ current: route, params: {} });
  }

  window.addEventListener('hashchange', handleHash);
  handleHash();

  return {
    store,
    navigate(path) {
      window.location.hash = path;
    },
    setBeforeNavigateHook(hook) {
      beforeNavigateHook = hook;
    }
  };
}
