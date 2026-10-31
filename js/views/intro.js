import { SCENARIOS } from '../data/scenarios.js';
import { state } from '../state.js';
import { tx } from '../i18n.js';
import { bot } from '../components/bot.js';

export const intro = () => {
  const s = SCENARIOS[state.sc];
  return `<div class="row"><div><p class="tag">Simulated practice · ${s.time}</p><h1>Let’s understand ${s.title}</h1><p>${tx(s.intro)}</p><div class="strip">This is a pretend phone. Nothing you press here affects your real phone.</div><button class="t" data-act="listen">🔊 Listen to Instructions</button> <button class="p" data-go="practice">Start Practice</button> <button data-go="explore">Back to Explore</button></div><div style="text-align:center;font-size:120px">${s.ic}${bot(tx(['Ready? Let’s begin together.', 'Tayyar? Chalein saath shuru karte hain.', 'تیار؟ آئیے مل کر شروع کرتے ہیں۔']))}</div></div>`;
};
