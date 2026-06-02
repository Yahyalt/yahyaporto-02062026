export function initCounters() {
      const animate = (el) => {
        const t = parseInt(el.dataset.target), s = el.dataset.suffix || '';
        let c = 0; const i = t / 60;
        const timer = setInterval(() => { c += i; if (c >= t) { c = t; clearInterval(timer); } el.textContent = Math.floor(c) + s; }, 33);
      };
      // FIX: Use standard forEach instead of observeAll
      const statNumbers = document.querySelectorAll('.stat-number');
      statNumbers.forEach(el => new IntersectionObserver(e => e.forEach(en => { if (en.isIntersecting && !en.target.dataset.counted) { en.target.dataset.counted = 'true'; animate(en.target); } }), { threshold: 0.5 }).observe(el));

      // FIX: Use standard forEach instead of observeAll
      const langBars = document.querySelectorAll('.lang-progress');
      langBars.forEach(el => new IntersectionObserver(e => e.forEach(en => { if (en.isIntersecting) el.style.width = el.dataset.progress + '%'; }), { threshold: 0.5 }).observe(el));
    }