import { ch } from './characters.js';

const ORNAMENT = '<g fill="#E74736"><circle cx="20" cy="20" r="9"/><circle cx="46" cy="20" r="6" fill="#F4B83F"/></g>';

/**
 * Living-room scene with the family on a sofa.
 * @param {string} [extra]  extra SVG markup drawn over the scene (e.g. a character)
 * @param {boolean} [celebrating]  adds confetti emoji + celebratory aria-label
 */
export function scene(extra, celebrating) {
  const label = celebrating ? 'The family celebrating' : 'A Pakistani family on a sofa learning phone together over chai';
  return `<svg viewBox="0 0 640 440" role="img" aria-label="${label}"><rect width="640" height="440" rx="28" fill="#7ccfc4"/><rect x="30" y="30" width="110" height="130" rx="55" fill="#087F83" stroke="#F4B83F" stroke-width="6"/><circle cx="85" cy="95" r="26" fill="#F4B83F"/><g transform="translate(470 30)">${ORNAMENT}<path d="M20 60l30 30M50 60l-30 30" stroke="#E74736" stroke-width="5"/></g><rect x="60" y="250" width="520" height="110" rx="40" fill="#E8745F" stroke="#4a1f2b" stroke-width="4"/><rect x="40" y="200" width="60" height="120" rx="28" fill="#C9573F" stroke="#4a1f2b" stroke-width="4"/><rect x="540" y="200" width="60" height="120" rx="28" fill="#C9573F" stroke="#4a1f2b" stroke-width="4"/><circle cx="130" cy="300" r="14" fill="#F4B83F"/><circle cx="520" cy="300" r="14" fill="#E74736"/>${ch('bashir', 90, 110, 160)}${ch('ahmed', 240, 100, 170)}${ch('shabana', 400, 110, 160)}<rect x="230" y="340" width="190" height="20" rx="8" fill="#8a5a2b"/><rect x="250" y="360" width="10" height="46" fill="#8a5a2b"/><rect x="390" y="360" width="10" height="46" fill="#8a5a2b"/><ellipse cx="310" cy="338" rx="26" ry="6" fill="#fff"/><rect x="340" y="322" width="22" height="18" rx="5" fill="#fff" stroke="#087F83" stroke-width="3"/>${extra || ''}${ch('mano', 70, 330, 100)}<path d="M0 424h640" stroke="#F4B83F" stroke-width="8" stroke-dasharray="14 10"/>${celebrating ? '<g font-size="34"><text x="60" y="70">🎉</text><text x="560" y="90">✨</text><text x="300" y="60">🎊</text><text x="440" y="40">👍</text></g>' : ''}</svg>`;
}
