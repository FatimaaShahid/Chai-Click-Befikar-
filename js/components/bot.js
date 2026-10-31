import { ch } from '../art/characters.js';

export const robot = () =>
  `<svg viewBox="0 0 220 190" width="150" role="img" aria-label="ChaiBot the robot in its decorated truck"><rect x="10" y="120" width="190" height="44" rx="12" fill="#E74736" stroke="#F4B83F" stroke-width="4"/><rect x="150" y="96" width="50" height="40" rx="10" fill="#F4B83F"/><g fill="#087F83"><circle cx="40" cy="142" r="6"/><circle cx="75" cy="142" r="6"/><circle cx="110" cy="142" r="6"/></g><circle cx="50" cy="168" r="16" fill="#252525"/><circle cx="165" cy="168" r="16" fill="#252525"/>${ch('chaibot', 45, -6, 100)}</svg>`;

/** ChaiBot with a speech bubble. */
export const bot = (txt) =>
  `<div style="display:flex;gap:10px;align-items:flex-end">${robot()}<div class="bub" aria-live="polite">${txt}</div></div>`;
