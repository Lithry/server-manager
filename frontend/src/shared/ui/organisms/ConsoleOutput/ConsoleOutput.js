import { html } from 'lit-html';
import styles from './ConsoleOutput.module.css';

export function ConsoleOutput({ text, status = 'idle' }) {
  return html`
    <div class=${styles.console}>
      <pre class=${styles.output}>${text || 'Waiting for output...'}</pre>
    </div>
  `;
}
