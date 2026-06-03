import {
  profile,
  stats,
  techStack,
  skills,
  experience,
  projects,
  education,
  certifications,
} from "./content.js";
import { initScroll } from "./modules/scroll.js";
import { initMenu } from "./modules/menu.js";
import { initReveal } from "./modules/animations.js";
import { initCounters } from "./modules/counters.js";
import { initTabs } from "./modules/tabs.js";
import { initParticles } from "./modules/particles.js";
import { initNav } from "./modules/nav.js";
import { renderComponents } from "./components/render.js";

document.addEventListener("DOMContentLoaded", () => {
  renderComponents({
    profile,
    stats,
    techStack,
    skills,
    experience,
    projects,
    education,
    certifications,
  });
  initScroll();
  initMenu();
  initReveal();
  initCounters();
  initTabs();
  initParticles();
  initNav();
});
