export function createEventBus() {
  const listeners = new Map();
  return {
    on(event, callback) {
      if (!listeners.has(event)) listeners.set(event, new Set());
      listeners.get(event).add(callback);
      return () => listeners.get(event).delete(callback);
    },
    emit(event, payload) {
      if (listeners.has(event)) {
        for (const callback of listeners.get(event)) callback(payload);
      }
    }
  };
}

export function createStore(initial) {
  let state = initial;
  const listeners = new Set();
  return {
    get: () => state,
    set: (updater) => {
      state = typeof updater === 'function' ? updater(state) : updater;
      for (const listener of listeners) listener(state);
    },
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    }
  };
}

export function debounce(fn, ms) {
  let timer;
  let lastArgs;
  const debounced = (...args) => {
    lastArgs = args;
    clearTimeout(timer);
    timer = setTimeout(() => { fn(...lastArgs); lastArgs = null; }, ms);
  };
  debounced.cancel = () => { clearTimeout(timer); lastArgs = null; };
  debounced.flush = () => {
    clearTimeout(timer);
    if (lastArgs) { fn(...lastArgs); lastArgs = null; }
  };
  return debounced;
}
