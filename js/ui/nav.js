import { state } from '../state.js';
import { LANGUAGES } from '../i18n.js';

const NAV_ITEMS = [['home', 'Home'], ['explore', 'Explore'], ['meet', 'Meet the Family'], ['how', 'How It Works']];

export function renderNav(page) {
  document.getElementById('nav').innerHTML =
    `<button class="logo" data-go="home">☕ Chai &amp; Clicks</button>` +
    NAV_ITEMS.map((n) => `<button class="l ${page == n[0] ? 'on' : ''}" data-go="${n[0]}" ${page == n[0] ? 'aria-current="page"' : ''}>${n[1]}</button>`).join('') +
    `<div class="langs" role="group" aria-label="Language">${LANGUAGES.map((l) => `<button class="sw${l.rtl ? ' ur-font' : ''}" aria-pressed="${state.lang === l.id}" data-lang="${l.id}"${l.rtl ? ` lang="${l.id}"` : ''}>${l.label}</button>`).join('')}</div>` +
    `<button class="sw" aria-pressed="${state.easy}" data-act="easy">Easy View</button>` +
    `<button class="sw" aria-pressed="${state.sound}" data-act="sound">${state.sound ? '🔊' : '🔇'} Sound</button>`;
}
