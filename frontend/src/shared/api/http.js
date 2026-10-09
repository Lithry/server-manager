import { ApiError, ERROR_CODES, formatDetail, isAbortError } from './errors.js';

const SAFE_METHODS = new Set(['GET', 'HEAD']);
const DEFAULTS = Object.freeze({ baseUrl: '', timeoutMs: 10_000, retries: 2, retryBaseMs: 300, retryMaxMs: 4_000 });

export function createHttpClient(options = {}) {
  const cfg = { ...DEFAULTS, ...options };
  const fetchImpl = options.fetchImpl ?? ((...args) => globalThis.fetch(...args));
  const interceptors = { request: [], response: [], error: [] };
  const inflight = new Map();

  const abortedError = () => new ApiError('Request aborted', { code: ERROR_CODES.ABORTED });
  const buildUrl = (path, query) => {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(query ?? {})) {
      if (value !== undefined && value !== null && value !== '') params.set(key, String(value));
    }
    const qs = params.toString();
    return `${cfg.baseUrl}${path}${qs ? '?' + qs : ''}`;
  };

  async function parseBody(response) {
    if (response.status === 204) return null;
    const type = response.headers.get('content-type') ?? '';
    try {
      return type.includes('application/json') ? await response.json() : await response.text();
    } catch (cause) {
      throw new ApiError('Malformed response body', { code: ERROR_CODES.PARSE, status: response.status, cause });
    }
  }

  async function sendOnce(req, signal, timeoutMs) {
    const timeoutSignal = AbortSignal.timeout(timeoutMs);
    const combined = signal ? AbortSignal.any([signal, timeoutSignal]) : timeoutSignal;
    let response;
    try {
      response = await fetchImpl(req.url, { method: req.method, headers: req.headers, body: req.body, signal: combined });
    } catch (cause) {
      if (timeoutSignal.aborted) throw new ApiError(`Request timed out after ${timeoutMs} ms`, { code: ERROR_CODES.TIMEOUT, cause });
      if (signal?.aborted) throw abortedError();
      throw new ApiError('Network request failed', { code: ERROR_CODES.NETWORK, cause });
    }
    const payload = await parseBody(response);
    if (!response.ok) throw new ApiError(formatDetail(payload) ?? `HTTP ${response.status}`, { code: ERROR_CODES.HTTP, status: response.status, detail: payload });
    return { status: response.status, data: payload, headers: response.headers };
  }

  const sleep = (ms, signal) => new Promise((resolve, reject) => {
    const timer = setTimeout(resolve, ms);
    signal?.addEventListener('abort', () => { clearTimeout(timer); reject(abortedError()); }, { once: true });
  });
  const backoffMs = (attempt) => Math.random() * Math.min(cfg.retryMaxMs, cfg.retryBaseMs * 2 ** attempt);

  async function sendWithRetry(req, { signal, timeoutMs, retries }) {
    for (let attempt = 0; ; attempt += 1) {
      try { return await sendOnce(req, signal, timeoutMs); }
      catch (error) {
        if (!(error instanceof ApiError) || !error.retryable || attempt >= retries) throw error;
        await sleep(backoffMs(attempt), signal);
      }
    }
  }

  function joinInflight(key, run, signal) {
    let entry = inflight.get(key);
    if (!entry) {
      const controller = new AbortController();
      const created = { controller, refs: 0, promise: null };
      created.promise = run(controller.signal).finally(() => { if (inflight.get(key) === created) inflight.delete(key); });
      created.promise.catch(() => {});
      inflight.set(key, created);
      entry = created;
    }
    entry.refs += 1;
    return new Promise((resolve, reject) => {
      const onAbort = () => {
        entry.refs -= 1;
        if (entry.refs === 0) {
          if (inflight.get(key) === entry) inflight.delete(key);
          entry.controller.abort();
        }
        reject(abortedError());
      };
      if (signal?.aborted) { onAbort(); return; }
      signal?.addEventListener('abort', onAbort, { once: true });
      entry.promise.then(
        (value) => { signal?.removeEventListener('abort', onAbort); resolve(value); },
        (error) => { signal?.removeEventListener('abort', onAbort); reject(error); }
      );
    });
  }

  async function request(method, path, opts = {}) {
    const { query, body, headers = {}, signal, meta = {} } = opts;
    const timeoutMs = opts.timeoutMs ?? cfg.timeoutMs;
    const retries = opts.retries ?? (SAFE_METHODS.has(method) ? cfg.retries : 0);
    const dedupe = opts.dedupe ?? method === 'GET';

    let req = { method, url: buildUrl(path, query), headers: { Accept: 'application/json', ...headers }, body: undefined, meta };
    if (body !== undefined) { req.body = JSON.stringify(body); req.headers['Content-Type'] = 'application/json'; }
    for (const fn of interceptors.request) req = await fn(req);

    const run = async (sig) => {
      try {
        let res = await sendWithRetry(req, { signal: sig, timeoutMs, retries });
        for (const fn of interceptors.response) res = await fn(res, req);
        return res.data;
      } catch (error) {
        let current = error;
        for (const fn of interceptors.error) current = (await fn(current, req)) ?? current;
        throw current;
      }
    };
    return dedupe ? joinInflight(`${req.method} ${req.url}`, run, signal) : run(signal);
  }

  return {
    get: (path, opts) => request('GET', path, opts),
    post: (path, body, opts) => request('POST', path, { ...opts, body }),
    put: (path, body, opts) => request('PUT', path, { ...opts, body }),
    delete: (path, opts) => request('DELETE', path, opts),
    use({ request: onRequest, response: onResponse, error: onError }) {
      if (onRequest) interceptors.request.push(onRequest);
      if (onResponse) interceptors.response.push(onResponse);
      if (onError) interceptors.error.push(onError);
    },
  };
}
