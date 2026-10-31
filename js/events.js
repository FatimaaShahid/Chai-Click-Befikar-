// Single delegated click handler for the whole app.
import { SCENARIOS } from './data/scenarios.js';
import { state, progress, save, resetRun } from './state.js';
import { t } from './i18n.js';
import { go, render } from './router.js';
import { choose, rewind } from './game.js';
import { give } from './components/badges.js';
import { openFamilyDialog } from './components/familyDialog.js';
import { speak } from './ui/speech.js';

const ACTIONS = {
  easy() { state.easy = !state.easy; document.body.classList.toggle('easy', state.easy); render(); },
  sound() { state.sound = !state.sound; render(); speak(t(['Sound is on. Chai ke saath, technology ki baat!', 'Sound on hai. Chai ke saath, technology ki baat!', 'آواز چالو ہے۔ چائے کے ساتھ، ٹیکنالوجی کی بات!'])); },
  listen() { const was = state.sound; state.sound = 1; speak(t(SCENARIOS[state.sc].intro)); state.sound = was; },
  back: rewind,
  reset() { resetRun(); render(); },
  cont() { go(state.sc == 'perm' ? 'whatif' : 'learn'); }
};

export function registerEvents() {
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-go],[data-intro],[data-opt],[data-act],[data-wi],[data-fam],[data-lang]');
    if (!b) return;
    const d = b.dataset;

    if (d.go) {
      if (d.go == 'practice') resetRun();
      go(d.go);
    } else if (d.intro) {
      state.sc = d.intro;
      resetRun();
      go('intro');
    } else if (d.opt) {
      choose(d.opt);
    } else if (d.wi) {
      state.wi = d.wi;
      progress.seen['perm' + d.wi] = 1;
      give('first');
      save();
      render();
    } else if (d.lang) {
      state.lang = progress.lang = d.lang;
      save();
      render();
    } else if (d.fam !== undefined) {
      openFamilyDialog(d.fam);
    } else if (ACTIONS[d.act]) {
      ACTIONS[d.act]();
    }
  });
}
