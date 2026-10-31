const STEPS = [
  ['🧭', 'Explore', 'Choose an everyday digital situation.'],
  ['🧪', 'Experiment', 'Try different actions without fear.'],
  ['⏪', 'Rewind', 'Understand what happened and try again.']
];

export const stepsHtml = () =>
  `<div class="three">${STEPS.map((s) => `<div class="card"><div style="font-size:44px">${s[0]}</div><h3>${s[1]}</h3><p>${s[2]}</p></div>`).join('')}</div>`;
