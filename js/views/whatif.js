import { SCENARIOS } from '../data/scenarios.js';
import { state } from '../state.js';
import { tx } from '../i18n.js';

const OPTIONS = [
  ['allow', 'ALLOW', 'p', 'The app receives the requested access in this simulation.'],
  ['deny', 'DON’T ALLOW', 't', 'The app cannot access the requested information in this simulation.'],
  ['once', 'ALLOW ONCE', 'o', 'The app receives temporary access in this simulation.']
];

export const whatif = () => {
  const s = SCENARIOS.perm.s, sel = state.wi;
  return `<h1>What happens if you choose differently?</h1><p>The app asks to see your contacts. Pick a path to compare.</p><div class="card" style="text-align:center;margin-bottom:16px"><b>📱 Photo Magic asks for contacts</b><div style="font-size:30px">⬇ ⬇ ⬇</div></div><div class="three">${OPTIONS.map((k) => `<div class="card" style="${sel == k[0] ? 'outline:6px solid var(--gold)' : ''}"><h3>${k[1]}</h3><p>${k[3]}</p><button class="${k[2]}" data-wi="${k[0]}">See result</button></div>`).join('')}</div>
${sel ? `<div class="card" style="margin-top:20px;border-color:var(--green)"><h3>${s[sel].h}</h3><p>${tx(s[sel].w)}</p><p><b>${tx(s[sel].k)}</b></p></div>` : '<p>Choose one to see the result.</p>'}<p>Compare: Allow = open access · Don’t Allow = fully private · Allow Once = temporary.</p><p><button class="p" data-go="done">Finish</button> <button data-go="explore">Explore</button></p>`;
};
