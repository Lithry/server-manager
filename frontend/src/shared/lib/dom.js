export const isDev = () => import.meta.env?.MODE === 'development';

export function cx(...args) {
  return args.filter(Boolean).join(' ');
}

export function uid(prefix = 'id') {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}

export function assertOneOf(value, allowed, name) {
  if (value !== undefined && !allowed.includes(value)) {
    throw new TypeError(`Invalid ${name}: expected one of [${allowed.join(', ')}], got '${value}'`);
  }
}

export function formatCell(val) {
  if (val === null || val === undefined) return '-';
  if (typeof val === 'boolean') return val ? 'Yes' : 'No';
  return String(val);
}
