import {
  profile,
  stats,
  techStack,
  skills,
  experience,
  education,
  certifications,
} from "../content.js";

const svgIcons = {
  play: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>`,
  code: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>`,
  settings: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>`,
  mail: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>`,
  phone: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>`,
  location: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>`,
  grad: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>`,
  cert: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>`,
};

export function renderComponents(data) {
  const app = document.getElementById("app");
  const mobileLinks = document.getElementById("mobileLinks");

  ["About", "Skills", "Experience", "Education", "Contact"].forEach((link) => {
    const a = document.createElement("a");
    a.href = `#${link.toLowerCase()}`;
    a.className = "block hover:text-sky-400";
    a.textContent = link;
    mobileLinks.appendChild(a);
  });

  app.innerHTML = `
        <header id="about" class="hero-gradient min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
          <div class="blob blob-1"></div><div class="blob blob-2"></div><div class="blob blob-3"></div>
          <div class="absolute inset-0 animated-grid opacity-40 pointer-events-none"></div>
          <div class="absolute inset-0 overflow-hidden pointer-events-none" id="particles"></div>
          <div class="max-w-5xl mx-auto px-6 text-center relative z-10">
            <div class="inline-block px-4 py-1 mb-6 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium reveal reveal-up delay-1">
              <span class="inline-block w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>Open to New Opportunities
            </div>
            <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight reveal reveal-up delay-2">${data.profile.name} <br><span class="text-gradient">${data.profile.title}</span></h1>
            <p class="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed reveal reveal-up delay-3">${data.profile.summary}</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center reveal reveal-up delay-4">
              <a href="#contact" class="btn-shine px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg transition shadow-lg shadow-sky-500/25 hover:shadow-sky-500/50 hover:-translate-y-1">Get In Touch</a>
              <a href="#experience" class="btn-shine px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg border border-slate-700 hover:border-sky-500/50 transition hover:-translate-y-1">View Experience</a>
            </div>
            <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-slate-800 pt-8">
              ${data.stats.map((s, i) => `<div class="stat-card reveal reveal-up delay-${i + 2}"><div class="text-3xl md:text-4xl font-bold text-white stat-number" data-target="${s.target}" data-suffix="${s.suffix}">0${s.suffix}</div><div class="text-sm text-slate-500 mt-1">${s.label}</div></div>`).join("")}
            </div>
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-hint text-slate-500"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg></div>
          </div>
        </header>

        <section class="py-8 bg-slate-950 border-y border-slate-800"><div class="marquee"><div class="marquee-content gap-8 pr-8">${data.techStack.map((t) => `<span class="text-slate-500 font-medium whitespace-nowrap">● ${t}</span>`).join("")}</div><div class="marquee-content gap-8 pr-8" aria-hidden="true">${data.techStack.map((t) => `<span class="text-slate-500 font-medium whitespace-nowrap">● ${t}</span>`).join("")}</div></div></section>

        <section id="skills" class="py-24 bg-slate-900 relative overflow-hidden"><div class="max-w-7xl mx-auto px-6"><div class="text-center mb-16"><div class="inline-block px-3 py-1 mb-4 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-medium reveal reveal-up">TECHNICAL EXPERTISE</div><h2 class="text-3xl md:text-5xl font-bold text-white mb-4 reveal reveal-up delay-1">Full-Stack QA Arsenal</h2></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">${data.skills.map((sk, i) => `<div class="group glass hover-lift p-6 rounded-2xl reveal reveal-up delay-${i + 1}"><div class="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center mb-4 text-sky-400 icon-rotate"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">${svgIcons[sk.icon]}</svg></div><h3 class="text-lg font-bold text-white mb-3">${sk.title}</h3><div class="flex flex-wrap gap-2">${sk.tags.map((t) => `<span class="skill-tag px-2 py-1 bg-slate-800 rounded text-xs text-slate-300 border border-slate-700">${t}</span>`).join("")}</div></div>`).join("")}</div></div></section>

        <div class="max-w-6xl mx-auto px-6"><div class="section-divider"></div></div>

        <section id="experience" class="py-24 bg-slate-900 relative overflow-hidden"><div class="max-w-6xl mx-auto px-6"><div class="text-center mb-16"><div class="inline-block px-3 py-1 mb-4 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium reveal reveal-up">CAREER PATH</div><h2 class="text-3xl md:text-5xl font-bold text-white mb-4 reveal reveal-up delay-1">Professional Journey</h2></div><div class="relative timeline-line pl-4 sm:pl-0" id="timeline">${data.experience
          .map((exp, i) => {
            const isOdd = i % 2 !== 0;
            const subHtml = exp.sub
              ? `<span class="text-slate-500 text-xs italic mt-1 block">${exp.sub}</span>`
              : "";
            const tabsHtml = exp.tabs
              ? `
            <div class="flex flex-wrap gap-2 mb-4">${exp.tabs.map((t, idx) => `<button class="project-tab ${idx === 0 ? "active" : ""} px-3 py-1 text-xs rounded-full border border-slate-700" data-target="${t.id}">${t.label}</button>`).join("")}</div>
            ${exp.tabs.map((t, idx) => `<div class="project-content ${idx === 0 ? "active" : ""}" data-content="${t.id}"><ul class="text-slate-400 text-sm space-y-2">${t.items.map((it) => `<li class="flex items-start gap-2"><span class="text-${exp.color}-400 mt-1">▹</span><span>${it}</span></li>`).join("")}</ul></div>`).join("")}`
              : "";

            const itemsHtml = exp.items
              ? `<ul class="text-slate-400 text-sm space-y-2">${exp.items.map((it) => `<li class="flex items-start gap-2"><span class="text-${exp.color}-400 mt-1">▹</span><span>${it}</span></li>`).join("")}</ul>`
              : "";

            return `
            <div class="relative sm:flex sm:justify-between sm:items-start mb-16">
              <div class="sm:w-5/12 sm:text-right mb-4 sm:mb-0 sm:pr-12 ${isOdd ? "order-1 sm:order-none" : ""} reveal reveal-${isOdd ? "right" : "left"}"><span class="inline-block px-3 py-1 rounded-full bg-${exp.color}-500/10 text-${exp.color}-400 text-xs font-semibold mb-2">${exp.period}</span><h3 class="text-xl font-bold text-white mt-2">${exp.role}</h3><p class="text-${exp.color}-400 text-sm font-medium mt-1">${exp.company}</p>${subHtml}<p class="text-slate-500 text-xs mt-1">${exp.location}</p></div>
              <div class="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-${exp.color}-500 rounded-full border-4 border-slate-900 z-10 timeline-dot"></div>
              <div class="sm:w-5/12 pl-12 sm:pl-12 ${isOdd ? "order-2 sm:order-none" : ""} reveal reveal-${isOdd ? "left" : "right"}"><div class="bg-slate-800/80 backdrop-blur p-6 rounded-xl border border-slate-700 hover:border-${exp.color}-500/50 transition-all duration-300 hover:-translate-y-1">${tabsHtml}${itemsHtml}</div></div>
            </div>`;
          })
          .join("")}</div></div></section>

        <div class="max-w-6xl mx-auto px-6"><div class="section-divider"></div></div>

        <section id="education" class="py-24 bg-slate-900 relative overflow-hidden"><div class="max-w-6xl mx-auto px-6"><div class="text-center mb-16"><div class="inline-block px-3 py-1 mb-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium reveal reveal-up">BACKGROUND</div><h2 class="text-3xl md:text-5xl font-bold text-white mb-4 reveal reveal-up delay-1">Education, Certs & Languages</h2></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="reveal reveal-left"><div class="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-sky-500/50 transition-all duration-500 hover:-translate-y-2 h-full"><div class="w-14 h-14 bg-sky-500/20 rounded-xl flex items-center justify-center mb-5 text-sky-400 icon-rotate"><svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">${svgIcons.grad}</svg></div><h3 class="text-2xl font-bold text-white mb-1">${data.education.school}</h3><p class="text-sky-400 font-medium mb-3">${data.education.degree}</p><div class="flex flex-wrap items-center gap-3 mb-4"><span class="px-3 py-1 bg-sky-500/10 rounded-full text-sky-400 text-xs font-bold">GPA ${data.education.gpa}</span><span class="text-slate-500 text-sm">Graduated ${data.education.gradYear}</span></div><ul class="text-slate-400 text-sm space-y-2 mb-4">${data.education.highlights.map((h) => `<li class="flex items-start gap-2"><span class="text-sky-400">★</span><span>${h}</span></li>`).join("")}</ul><div class="border-t border-slate-700 pt-4 mt-4"><h4 class="text-white font-semibold text-sm mb-2">Languages</h4><div class="space-y-3">${data.education.languages.map((l) => `<div><div class="flex justify-between text-xs mb-1"><span class="text-slate-300">${l.name}</span><span class="text-sky-400">${l.level}</span></div><div class="lang-bar"><div class="lang-progress" data-progress="${l.percent}"></div></div></div>`).join("")}</div></div></div></div>
          <div class="reveal reveal-right"><div class="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 h-full"><div class="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-5 text-purple-400 icon-rotate"><svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">${svgIcons.cert}</svg></div><h3 class="text-2xl font-bold text-white mb-5">Certifications</h3><div class="space-y-3">${data.certifications.map((c) => `<div class="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-sky-500/30 transition hover:translate-x-1"><div class="w-2 h-2 bg-sky-400 rounded-full"></div><div class="flex-1"><h4 class="text-white font-semibold text-sm">${c.name}</h4><p class="text-slate-500 text-xs">${c.org}</p></div></div>`).join("")}</div></div></div>
        </div></div></section>

        <section id="contact" class="py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800 relative overflow-hidden"><div class="blob blob-1" style="opacity: 0.15;"></div><div class="blob blob-2" style="opacity: 0.15;"></div><div class="max-w-3xl mx-auto px-6 text-center relative z-10"><div class="inline-block px-3 py-1 mb-4 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-medium reveal reveal-up">GET IN TOUCH</div><h2 class="text-3xl md:text-5xl font-bold text-white mb-4 reveal reveal-up delay-1">Let's Build Quality Together</h2><p class="text-slate-400 mb-10 reveal reveal-up delay-2">Open to QA engineering roles, automation consulting, and agile process optimization.</p><div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <a href="mailto:${data.profile.email}" class="group bg-slate-800/60 backdrop-blur p-6 rounded-xl border border-slate-700 hover:border-sky-500/50 transition-all duration-300 hover:-translate-y-2 reveal reveal-up delay-1"><div class="w-12 h-12 mx-auto mb-3 bg-sky-500/20 rounded-lg flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">${svgIcons.mail}</svg></div><span class="text-white font-medium text-sm block">${data.profile.email}</span><span class="text-slate-500 text-xs">Email</span></a>
          <a href="${data.profile.phoneLink || `tel:${data.profile.phone.replace(/\s/g, "")}`}" class="group bg-slate-800/60 backdrop-blur p-6 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 reveal reveal-up delay-2"><div class="w-12 h-12 mx-auto mb-3 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">${svgIcons.phone}</svg></div><span class="text-white font-medium text-sm block">${data.profile.phone}</span><span class="text-slate-500 text-xs">Phone</span></a>
          <div class="group bg-slate-800/60 backdrop-blur p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 reveal reveal-up delay-3"><div class="w-12 h-12 mx-auto mb-3 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">${svgIcons.location}</svg></div><span class="text-white font-medium text-sm block">${data.profile.location}</span><span class="text-slate-500 text-xs">Location</span></div>
        </div></div></section>
      `;
}
