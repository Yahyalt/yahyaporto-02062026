export function initReveal() {
      const observer = new IntersectionObserver((e) => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('visible'); }), { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
      document.querySelectorAll('.reveal, .section-divider').forEach(el => observer.observe(el));
      const tl = document.getElementById('timeline');
      if (tl) new IntersectionObserver(e => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('animate'); }), { threshold: 0.1 }).observe(tl);
    }