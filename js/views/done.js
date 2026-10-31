import { progress, doneCount } from '../state.js';
import { scene } from '../art/scene.js';
import { ch } from '../art/characters.js';
import { badgesHtml } from '../components/badges.js';

export const done = () => `<div class="border"><h1 style="text-align:center">Well Done! You Did It!</h1>${scene(ch('chaibot', 470, 230, 110), 1)}<div class="three" style="margin-top:14px"><div class="card"><h3>${doneCount()}</h3>activities completed</div><div class="card"><h3>${Object.keys(progress.seen).length}</h3>decisions explored</div><div class="card"><h3>${Object.keys(progress.badges).length}</h3>badges earned</div></div><p style="text-align:center">You explored with curiosity. That is exactly how everyone learns. Chai break?</p><div style="text-align:center">${badgesHtml()}</div></div><p style="text-align:center"><button class="p" data-go="explore">Explore Another Scenario</button> <button class="t" data-go="whatif">Try What-If</button> <button data-go="home">Return Home</button></p>`;
