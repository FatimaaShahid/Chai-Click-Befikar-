import { state } from '../state.js';
import { tx } from '../i18n.js';
import { bot } from '../components/bot.js';

export const learn = () => `<h1>Every mistake teaches something.</h1><div class="card">${state.log.length ? `<ol class="tl">${state.log.map((l) => `<li><b>${l.a}</b><br>What happened: ${tx(l.w)}<br>What to try differently: ${tx(l.k)}</li>`).join('')}</ol>` : '<p>Your timeline is empty. Try a practice and it will appear here, step by step.</p>'}</div><div style="margin:16px 0">${bot(tx(['Every step teaches something new!', 'Har step se kuch naya seekhne ko milta hai!', 'ہر قدم کچھ نیا سکھاتا ہے!']))}</div><button class="p" data-go="explore">Explore Another Scenario</button>`;
