import { SCENARIOS } from '../data/scenarios.js';
import { progress, doneCount } from '../state.js';
import { tx } from '../i18n.js';
import { bot } from '../components/bot.js';
import { badgesHtml } from '../components/badges.js';

export const explore = () => `<h1>Welcome to your Befikar space!</h1><h2 style="color:var(--teal)">What would you like to practise today?</h2><div class="three">${Object.entries(SCENARIOS).map(([k, s]) => `<div class="card" style="border-color:var(${s.col});box-shadow:6px 6px 0 var(${s.col})"><div style="font-size:72px;text-align:center;background:var(--peach);border-radius:20px">${s.ic}</div><h3>${s.title}</h3><p>${s.desc}</p><p>⏱ About ${s.time} ${progress.done[k] ? '· ✔ Explored' : ''}</p><button class="o" data-intro="${k}">Explore</button></div>`).join('')}</div>
<div style="margin:26px 0">${bot(tx(['Take your time! Nobody is in a hurry here.', 'Take your time! Yahan koi jaldi nahi hai.', 'آرام سے کریں! یہاں کسی کو جلدی نہیں ہے۔']))}</div>
<div class="card"><h2>My Learning Journey</h2><div class="bar" role="progressbar" aria-valuenow="${doneCount()}" aria-valuemax="3"><i style="width:${doneCount() / 3 * 100}%"></i></div><p>${doneCount()} of 3 activities explored. ${doneCount() ? 'Great exploration!' : 'There’s no rush.'}</p>${badgesHtml()}</div>`;
