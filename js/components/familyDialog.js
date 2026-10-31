import { FAMILY } from '../data/family.js';
import { CH } from '../art/characters.js';

export function openFamilyDialog(index) {
  const f = FAMILY[index];
  const dl = document.getElementById('dlg');
  dl.innerHTML = `<svg viewBox="0 0 200 220" width="220" style="background:var(--peach);border-radius:24px;display:block;margin:auto">${CH[f[0]]}</svg><h2>${f[1]}</h2><b>${f[2]}</b><p>${f[4]}</p><p class="f" style="color:var(--teal);font-size:24px">“${f[5]}”</p><button class="p" id="cl">Close</button>`;
  dl.showModal();
  document.getElementById('cl').onclick = () => dl.close();
}
