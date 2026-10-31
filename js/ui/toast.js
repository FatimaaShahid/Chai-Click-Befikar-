export function toast(message) {
  const d = document.createElement('div');
  d.textContent = message;
  d.setAttribute('role', 'status');
  d.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--green);color:#fff;padding:14px 24px;border-radius:30px;font-weight:700;z-index:50';
  document.body.appendChild(d);
  setTimeout(() => d.remove(), 2600);
}
