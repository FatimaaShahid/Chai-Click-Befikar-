// Language support. Translatable text is a triple: [English, Roman Urdu, Urdu].
// To add a language: add it to LANGUAGES, give it a column index, and extend the data triples.
import { state } from './state.js';

export const LANGUAGES = [
  { id: 'en', label: 'English',    index: 0, speech: 'en-US' },
  { id: 'ru', label: 'Roman Urdu', index: 1, speech: 'en-IN' },
  { id: 'ur', label: 'اردو',        index: 2, speech: 'ur-PK', rtl: true }
];

const current = () => LANGUAGES.find((l) => l.id === state.lang) || LANGUAGES[0];

/** Plain text in the active language (falls back to English). */
export const t = (triple) => triple[current().index] || triple[0];

/** HTML-safe text: right-to-left languages are wrapped so they render correctly. */
export const tx = (triple) => {
  const lang = current();
  return lang.rtl && triple[lang.index]
    ? `<span class="ur" lang="${lang.id}" dir="rtl">${t(triple)}</span>`
    : t(triple);
};

export const speechLang = () => current().speech;
