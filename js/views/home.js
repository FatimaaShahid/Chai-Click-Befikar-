import { scene } from '../art/scene.js';
import { stepsHtml } from '../components/steps.js';

export const home = () => `<div class="row"><div><p class="tag">YOUR BEFIKAR DIGITAL PLAYGROUND</p><h1>Technology is easier when we learn together.</h1><p>Ever hesitated before pressing a button on your phone? Don’t worry. Explore everyday digital activities, make mistakes and rewind whenever you want. It’s all safe here!</p><p><button class="p" data-go="explore">Start Exploring</button> <button data-go="how">See How It Works</button></p><p class="f" style="font-size:26px;color:var(--teal)">Chai ke saath, technology ki baat!</p><p><b>Make mistakes. Learn freely. Try again.</b></p></div><div>${scene()}</div></div>
<div class="strip">🛡️ Your real phone and personal data are never affected. Everything happens in a simulation.</div>${stepsHtml()}<p style="text-align:center"><button data-go="meet">Meet the Family</button></p>`;
