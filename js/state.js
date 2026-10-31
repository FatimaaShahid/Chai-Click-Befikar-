// Central app state. Two stores:
//  - state:    session-only UI/simulation state
//  - progress: persisted learning progress (localStorage)

const STORAGE_KEY = 'cc';

export const state = {
  lang: 'en',   // 'en' | 'ru' | 'ur'  (see i18n.js)
  easy: false,
  sound: false,
  sc: 'perm',   // active scenario key
  hist: [],     // ids of steps taken in the current run
  lab: [],      // button labels matching `hist`
  log: [],      // learning-journey timeline: { a: label, w: [..], k: [..] }
  wi: undefined // selected "what-if" option
};

export const progress = { done: {}, badges: {}, seen: {}, lang: 'en' };
try { Object.assign(progress, JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')); } catch (e) {}
state.lang = progress.lang;  // restore the saved language

export const save = () => {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch (e) {}
};

export const doneCount = () => Object.keys(progress.done).length;
export const currentStep = () => (state.hist.length ? state.hist[state.hist.length - 1] : 'start');
export const resetRun = () => { state.hist = []; state.lab = []; };
