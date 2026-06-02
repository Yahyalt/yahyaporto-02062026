export function initNav() {
      const sections = document.querySelectorAll('section[id], header[id]');
      const links = document.querySelectorAll('.nav-link');
      window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.id; });
        links.forEach(l => { l.classList.toggle('active', l.getAttribute('href') === '#' + current); });
      });
    }