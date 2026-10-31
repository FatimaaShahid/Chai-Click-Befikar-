// Simulation logic: taking a step and rewinding.
import { SCENARIOS } from './data/scenarios.js';
import { state, progress, save, doneCount, currentStep } from './state.js';
import { t } from './i18n.js';
import { give } from './components/badges.js';
import { render } from './router.js';
import { speak } from './ui/speech.js';

export function choose(optionId) {
  const s = SCENARIOS[state.sc];
  const next = s.s[optionId];
  const label = s.s[currentStep()].o.find((x) => x[1] == optionId)[0];

  state.hist.push(optionId);
  state.lab.push(label);
  progress.seen[state.sc + optionId] = 1;
  give('first');
  state.log.push({ a: label, w: next.w, k: next.k });

  if (next.end) {
    progress.done[state.sc] = 1;
    if (next.badge) give(next.badge);
    if (Object.keys(progress.seen).filter((k) => k.startsWith(state.sc)).length >= 3) give('fearless');
    if (doneCount() == 3) give('befikar');
  }
  save();
  render();
  speak(t(next.w));
}

export function rewind() {
  if (!state.hist.length) return;
  state.hist.pop();
  state.lab.pop();
  state.log.push({
    a: 'Rewound one step',
    w: ['The simulation returned to the earlier screen.', 'Simulation pichli screen par wapas aa gayi.', 'سمولیشن پچھلی اسکرین پر واپس آ گئی۔'],
    k: ['Rewinding is always allowed. Try another option.', 'Rewind karna hamesha jaiz hai. Doosra option try karein.', 'ریوائنڈ کرنے کی ہمیشہ اجازت ہے۔ کوئی اور آپشن آزمائیں۔']
  });
  give('rewind');
  save();
  render();
}
