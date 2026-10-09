import { createStore } from './lib.js';

export function createForm({ initialValues, fields, onSubmit }) {
  const store = createStore({ values: { ...initialValues }, errors: {}, touched: {}, status: 'idle', submitError: null });
  const check = (name, values) => {
    for (const validator of fields[name]?.validators ?? []) {
      const msg = validator(values[name], values); if (msg) return msg;
    }
    return null;
  };
  const withError = (errors, name, message) => { const { [name]: _, ...rest } = errors; return message ? { ...rest, [name]: message } : rest; };
  
  return {
    store,
    setValue(name, raw) {
      const value = fields[name]?.transform ? fields[name].transform(raw) : raw;
      store.set((s) => {
        const values = { ...s.values, [name]: value };
        return { ...s, values, errors: s.touched[name] ? withError(s.errors, name, check(name, values)) : s.errors };
      });
    },
    blur(name) { store.set((s) => ({ ...s, touched: { ...s.touched, [name]: true }, errors: withError(s.errors, name, check(name, s.values)) })); },
    async submit() {
      const { values } = store.get();
      const errors = Object.keys(fields).reduce((acc, name) => withError(acc, name, check(name, values)), {});
      store.set((s) => ({ ...s, errors, submitError: null, touched: Object.fromEntries(Object.keys(fields).map((n) => [n, true])) }));
      if (Object.keys(errors).length > 0) return { ok: false, errors };
      store.set((s) => ({ ...s, status: 'submitting' }));
      try { const result = await onSubmit(values); store.set((s) => ({ ...s, status: 'idle' })); return { ok: true, result }; }
      catch (error) { store.set((s) => ({ ...s, status: 'idle', submitError: error })); return { ok: false, error }; }
    }
  };
}
