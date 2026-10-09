import { html } from 'lit-html';
import { debounce } from '../../../lib/lib.js';
import { Icon } from '../../atoms/Icon/Icon.js';
import styles from './SearchBar.module.css';

export function createSearchBar({ onSearch, debounceMs = 250 }) {
  const emit = debounce((query) => onSearch(query), debounceMs);
  return {
    view({ id, value = '', label = 'Search', placeholder = 'Search…' }) {
      return html`<div class=${styles.search} role="search">
        <label class="u-sr-only" for=${id}>${label}</label>
        <span class=${styles['search__icon']}>${Icon({ name: 'search', size: 14 })}</span>
        <input id=${id} class=${styles['search__input']} type="search" autocomplete="off"
          .value=${value} placeholder=${placeholder}
          @input=${(e) => { if (!e.isComposing) emit(e.target.value.trim()); }}
          @compositionend=${(e) => emit(e.target.value.trim())}
          @keydown=${(e) => {
            if (e.key === 'Enter') emit.flush();
            if (e.key === 'Escape' && e.target.value) { e.target.value = ''; emit.cancel(); onSearch(''); }
          }} />
      </div>`;
    },
    dispose: () => emit.cancel(),
  };
}
