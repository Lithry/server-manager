const noop = () => {};
function withSignal(promise, signal) {
  if (!signal) return promise;
  return new Promise((resolve, reject) => {
    const abort = () => reject(new DOMException('Aborted', 'AbortError'));
    if (signal.aborted) { abort(); return; }
    signal.addEventListener('abort', abort, { once: true });
    promise.then(resolve, reject).finally(() => signal.removeEventListener('abort', abort));
  });
}

const hash = (value) => JSON.stringify(value, (_k, v) => v && typeof v === 'object' && !Array.isArray(v) ? Object.fromEntries(Object.entries(v).sort(([a], [b]) => (a < b ? -1 : 1))) : v);
const startsWith = (parts, prefix) => prefix.every((p, i) => i < parts.length && hash(p) === hash(parts[i]));

export function createQueryCache({ now = () => Date.now(), gcMs = 5 * 60_000 } = {}) {
  const entries = new Map();
  const snapshotOf = (e) => Object.freeze({ status: e.status, data: e.data, error: e.error, isFetching: Boolean(e.promise), updatedAt: e.updatedAt });

  function entryFor(keyParts) {
    const key = hash(keyParts);
    let entry = entries.get(key);
    if (!entry) {
      entry = { keyParts, data: undefined, error: null, status: 'idle', updatedAt: 0, invalidated: false, promise: null, fetcher: null, listeners: new Set(), snapshot: null };
      entry.snapshot = snapshotOf(entry);
      entries.set(key, entry);
    }
    return entry;
  }

  function publish(entry) {
    entry.snapshot = snapshotOf(entry);
    for (const listener of [...entry.listeners]) listener(entry.snapshot);
  }

  function sweep() {
    for (const [key, e] of entries) {
      if (e.listeners.size === 0 && !e.promise && e.updatedAt && now() - e.updatedAt > gcMs) entries.delete(key);
    }
  }

  function fetchEntry(entry) {
    if (entry.promise) return entry.promise; // Deduplicate
    entry.invalidated = false;
    if (entry.status === 'idle') entry.status = 'loading';
    entry.promise = Promise.resolve().then(() => entry.fetcher())
      .then(
        (data) => { Object.assign(entry, { data, error: null, status: 'success', updatedAt: now() }); return data; },
        (error) => { Object.assign(entry, { error, status: 'error' }); throw error; }
      )
      .finally(() => {
        entry.promise = null; publish(entry);
        if (entry.invalidated && entry.listeners.size > 0) fetchEntry(entry).catch(noop);
      });
    entry.promise.catch(noop);
    publish(entry);
    return entry.promise;
  }

  return {
    load(keyParts, fetcher, { staleMs = 0, signal } = {}) {
      sweep();
      const entry = entryFor(keyParts);
      entry.fetcher = fetcher;
      const isFresh = entry.status === 'success' && !entry.invalidated && now() - entry.updatedAt < staleMs;
      return withSignal(isFresh ? Promise.resolve(entry.data) : fetchEntry(entry), signal);
    },
    read: (keyParts) => entryFor(keyParts).snapshot,
    subscribe(keyParts, listener) {
      const entry = entryFor(keyParts);
      entry.listeners.add(listener); listener(entry.snapshot);
      return () => { entry.listeners.delete(listener); };
    },
    invalidate(prefix) {
      for (const entry of entries.values()) {
        if (!startsWith(entry.keyParts, prefix)) continue;
        entry.invalidated = true; publish(entry);
        if (entry.listeners.size > 0 && entry.fetcher) fetchEntry(entry).catch(noop);
      }
    },
    setData(keyParts, updater) {
      const entry = entryFor(keyParts);
      const previous = { data: entry.data, status: entry.status, updatedAt: entry.updatedAt };
      const optimistic = updater(entry.data);
      Object.assign(entry, { data: optimistic, status: 'success', updatedAt: now() });
      publish(entry);
      return function rollback() {
        if (entry.data !== optimistic) return;
        Object.assign(entry, previous); publish(entry);
      };
    },
  };
}

export function createMutation(cache, { mutationFn, optimistic, invalidates = [] }) {
  return async function mutate(variables) {
    const rollbacks = (optimistic?.(variables) ?? []).map(({ key, update }) => cache.setData(key, update));
    try {
      const result = await mutationFn(variables);
      const keys = typeof invalidates === 'function' ? invalidates(variables, result) : invalidates;
      keys.forEach((key) => cache.invalidate(key));
      return result;
    } catch (error) {
      rollbacks.reverse().forEach((rollback) => rollback());
      throw error;
    }
  };
}
