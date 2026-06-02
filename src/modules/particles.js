export function initParticles() {
      const container = document.getElementById('particles');
      if (!container) return;
      for (let i = 0; i < 15; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDelay = Math.random() * 15 + 's';
        p.style.background = ['#38bdf8', '#818cf8', '#c084fc'][Math.floor(Math.random() * 3)];
        p.style.width = p.style.height = (2 + Math.random() * 3) + 'px';
        container.appendChild(p);
      }
    }