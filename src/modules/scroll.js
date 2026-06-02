export function initScroll() {
      window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        document.getElementById('scrollProgress').style.width = scrolled + '%';
        document.getElementById('navbar').classList.toggle('shadow-2xl', window.scrollY > 50);
      });
    }