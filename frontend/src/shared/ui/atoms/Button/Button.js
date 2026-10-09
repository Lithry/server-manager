import { html, nothing } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { cx, isDev, assertOneOf } from '../../../lib/dom.js';
import { Icon } from '../Icon/Icon.js';
import { Spinner } from '../Spinner/Spinner.js';
import styles from './Button.module.css';

const VARIANTS = Object.freeze(['add', 'save', 'delete', 'test', 'execute', 'secondary', 'ghost']);
const SIZES = Object.freeze(['sm', 'md']);

export function Button({ label, variant = 'secondary', size = 'md', icon, iconOnly = false, ariaLabel, loading = false, disabled = false, type = 'button', id, onClick }) {
  if (isDev()) {
    assertOneOf(variant, VARIANTS, 'Button.variant');
    assertOneOf(size, SIZES, 'Button.size');
    if (iconOnly && !ariaLabel) throw new TypeError('Button: iconOnly requires ariaLabel');
  }
  const classes = cx(styles.btn, styles[`btn--${variant}`], styles[`btn--${size}`], iconOnly && styles['btn--icon-only']);
  return html`<button id=${ifDefined(id)} class=${classes} type=${type}
    aria-label=${ifDefined(ariaLabel)} aria-busy=${loading ? 'true' : 'false'}
    ?disabled=${disabled || loading} @click=${onClick}>
    ${loading ? Spinner() : icon ? Icon({ name: icon, size: size === 'sm' ? 14 : 16 }) : nothing}
    ${iconOnly ? nothing : html`<span class=${styles['btn__label']}>${label}</span>`}
  </button>`;
}

export const IconButton = ({ icon, ariaLabel, ...rest }) => Button({ ...rest, icon, ariaLabel, iconOnly: true, variant: rest.variant ?? 'ghost' });
