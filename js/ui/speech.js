import { state } from '../state.js';
import { speechLang } from '../i18n.js';

/** Speak text aloud when Sound is on (Web Speech API, if available). */
export function speak(text) {
  if (!state.sound || !window.speechSynthesis) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = speechLang();
    speechSynthesis.speak(u);
  } catch (e) {}
}
