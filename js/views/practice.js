import { SCENARIOS } from '../data/scenarios.js';
import { state, currentStep } from '../state.js';
import { tx } from '../i18n.js';
import { bot } from '../components/bot.js';

export const practice = () => {
  const s = SCENARIOS[state.sc], sc = s.s[currentStep()];
  return `<h2>${s.title}</h2><div class="cols"><aside class="card"><h3>Objective</h3><p>${tx(s.obj)}</p><details><summary style="min-height:48px;cursor:pointer;font-weight:700">💡 Need a hint?</summary><p>${tx(s.hint)}</p></details>${bot(tx(['No pressure. You can always go back.', 'Koi dabao nahi. Aap hamesha wapas ja sakte hain.', 'کوئی دباؤ نہیں۔ آپ ہمیشہ واپس جا سکتے ہیں۔']))}</aside>
<section><div class="phone" aria-label="Simulated phone"><div class="scr"><small style="color:#087F83;font-weight:700">${sc.app} · SIMULATION</small><h3>${sc.h}</h3><p>${sc.b[0]}</p><div class="pop">${sc.o.length ? sc.o.map((o) => `<button class="${o[2]}" data-opt="${o[1]}">${o[0]}</button>`).join('') : '<small>✔ Simulation complete. Use Go Back to try another option.</small>'}</div></div></div>
<p style="text-align:center"><button data-act="back" ${state.hist.length ? '' : 'disabled'}>⏪ Go Back</button> <button data-act="reset">🔄 Try Again</button> <button class="g" data-act="cont" ${sc.end ? '' : 'disabled'}>Continue</button></p></section>
<aside class="card" aria-live="polite"><h3>What happened?</h3><p>${tx(sc.w)}</p><h3>Takeaway</h3><p>${tx(sc.k)}</p><h3>Action History</h3><ol class="tl">${state.hist.length ? state.hist.map((h, i) => `<li>${i + 1}. ${state.lab[i]}</li>`).join('') : '<li>Opened the fictional app</li>'}</ol></aside></div>`;
};
