export function initMenu() {
      const btn = document.getElementById('menuBtn');
      const menu = document.getElementById('mobileMenu');
      if (!btn || !menu) return;
      btn.addEventListener('click', () => menu.classList.toggle('hidden'));
      menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.add('hidden')));
    }