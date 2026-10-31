import { views } from './views/index.js';
import { renderNav } from './ui/nav.js';

let page = 'home';

export function render() {
  renderNav(page);
  document.getElementById('app').innerHTML = (views[page] || views.home)();
}

export function go(p) {
  page = p;
  if (p != 'practice' && location.hash != '#' + p) history.replaceState(null, '', '#' + p);
  render();
  scrollTo(0, 0);
}

export function initRouter() {
  addEventListener('hashchange', () => {
    const h = location.hash.slice(1);
    if (views[h] && h != page && h != 'practice') go(h);
  });
  const h0 = location.hash.slice(1);
  if (views[h0] && h0 != 'practice' && h0 != 'intro') page = h0;
  render();
}
