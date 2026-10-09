export const ERROR_CODES = Object.freeze({
  NETWORK: 'NETWORK', TIMEOUT: 'TIMEOUT', ABORTED: 'ABORTED', HTTP: 'HTTP', PARSE: 'PARSE'
});

const RETRYABLE_HTTP_STATUSES = new Set([502, 503, 504]);
export const isAbortError = (error) => error?.name === 'AbortError' || error?.code === ERROR_CODES.ABORTED;

export function formatDetail(payload) {
  const detail = payload && typeof payload === 'object' ? payload.detail : null;
  if (typeof detail === 'string') return detail;
  if (Array.isArray(detail)) return detail.map((d) => `${(d.loc ?? []).slice(1).join('.') || 'body'}: ${d.msg}`).join('; ');
  return null;
}

export class ApiError extends Error {
  constructor(message, { code, status = 0, detail = null, cause } = {}) {
    super(message, { cause });
    this.name = 'ApiError'; this.code = code; this.status = status; this.detail = detail;
  }
  get retryable() { return this.code === ERROR_CODES.NETWORK || this.code === ERROR_CODES.TIMEOUT || (this.code === ERROR_CODES.HTTP && RETRYABLE_HTTP_STATUSES.has(this.status)); }
  get userMessage() {
    switch (this.code) {
      case ERROR_CODES.NETWORK: return 'Cannot reach the ServerManager API. Check that the container is running.';
      case ERROR_CODES.TIMEOUT: return 'The request timed out. The service may be busy or unreachable.';
      case ERROR_CODES.ABORTED: return '';
      case ERROR_CODES.PARSE: return 'The server returned an unreadable response.';
      default: return this.status >= 500 ? `Server error (${this.status}). ${this.message}` : this.message;
    }
  }
}
