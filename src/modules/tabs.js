export function initTabs() {
      document.querySelectorAll('.project-tab').forEach(tab => {
        tab.addEventListener('click', function() {
          const parent = this.closest('.bg-slate-800\\/80');
          const target = this.dataset.target;
          parent.querySelectorAll('.project-tab').forEach(t => t.classList.remove('active'));
          parent.querySelectorAll('.project-content').forEach(c => c.classList.remove('active'));
          this.classList.add('active');
          parent.querySelector(`[data-content="${target}"]`).classList.add('active');
        });
      });
    }