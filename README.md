# Yahya Hafidz | QA Engineer Portfolio

A modern, single-page QA engineer portfolio built with **Vite** and **vanilla JavaScript**, featuring animated UI, interactive experience tabs, and scroll-based navigation highlighting.

## Features

- **Dynamic content rendering** from `src/content.js`
- **Responsive navigation**
  - Desktop section links
  - Mobile hamburger menu
  - Active section highlighting while scrolling
- **Scroll experience**
  - Scroll progress bar at the top
  - Reveal animations using `IntersectionObserver`
- **Experience timeline**
  - Career history displayed as a timeline
  - Company sub-sections controlled by **tabs**
- **Visual polish**
  - TailwindCSS (via CDN) + custom styles in `src/style.css`
  - Animated particle background (`src/modules/particles.js`)
  - Hover/lift effects, gradients, marquee tech stack, etc.

## Tech Stack

- **Vite** (build/dev tooling)
- **Vanilla JavaScript** (ES modules)
- **Tailwind CSS** via CDN (`https://cdn.tailwindcss.com`)
- **IntersectionObserver** for reveal, counters, and animations

## Project Structure

- `src/content.js`  
  Holds all CV data (profile, tech stack, skills, experience, education, certifications).
- `src/components/render.js`  
  Generates the HTML structure for all sections.
- `src/modules/*.js`  
  Isolated behaviors:
  - `scroll.js` (scroll progress + navbar shadow)
  - `menu.js` (mobile menu toggle)
  - `animations.js` (reveal animations)
  - `counters.js` (stat/language progress animations)
  - `tabs.js` (experience tab switching)
  - `particles.js` (particle background)
  - `nav.js` (active nav section detection)
- `src/style.css`  
  Custom CSS for the effects (reveal, timeline line, particles, tabs, etc.)
