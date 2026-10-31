import { BADGES } from '../data/badges.js';
import { progress, save } from '../state.js';
import { toast } from '../ui/toast.js';

/** Award a badge once and notify the learner. */
export const give = (key) => {
  if (!progress.badges[key]) {
    progress.badges[key] = 1;
    save();
    toast('New badge: ' + BADGES[key][0] + ' ' + BADGES[key][2]);
  }
};

export const badgesHtml = () =>
  Object.entries(BADGES)
    .map(([k, b]) => `<span class="bd ${progress.badges[k] ? '' : 'off'}" title="${b[1]}">${b[2]} ${b[0]}</span>`)
    .join('');
