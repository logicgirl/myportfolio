"use client";

import { useState, useEffect } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  {
    category: "Languages & Markup",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    badge: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)"],
  },
  {
    category: "Frameworks & Libraries",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    badge: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
    items: ["React", "Next.js (App Router)", "Tailwind CSS"],
  },
  {
    category: "UI & Design",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    border: "border-violet-500/30",
    bg: "bg-violet-500/10",
    text: "text-violet-400",
    badge: "bg-violet-500/10 text-violet-300 border border-violet-500/20",
    items: ["Responsive Design", "CSS Animations", "Figma (basic)", "Accessibility"],
  },
  {
    category: "Tools & Workflow",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    border: "border-orange-500/30",
    bg: "bg-orange-500/10",
    text: "text-orange-400",
    badge: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
    items: ["Git", "GitHub", "VS Code", "Vercel", "Chrome DevTools"],
  },
];

const PROJECTS = [
  {
    title: "Personal Portfolio Website",
    tech: ["HTML5", "CSS3", "JavaScript"],
    description:
      "A fully responsive personal portfolio built from scratch with pure HTML, CSS, and vanilla JavaScript. Features smooth scroll navigation, CSS animations, a mobile-first layout, and a working contact section.",
    highlights: [
      "Mobile-first responsive layout",
      "CSS keyframe animations & transitions",
      "Smooth scroll & active nav highlighting",
    ],
    accent: "emerald",
    badgeClass: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
    borderClass: "border-emerald-500/20",
    glowClass: "hover:shadow-emerald-500/10",
    iconBg: "bg-emerald-500/10",
    iconText: "text-emerald-400",
    level: "Beginner",
    levelClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  {
    title: "Weather Dashboard",
    tech: ["JavaScript", "Fetch API", "CSS3"],
    description:
      "A real-time weather app that fetches live data from the OpenWeather API. Users can search any city and instantly see temperature, humidity, wind speed, and a 5-day forecast — all styled with a clean card-based UI.",
    highlights: [
      "Live data via OpenWeather REST API",
      "5-day forecast with weather icons",
      "Search history with localStorage",
    ],
    accent: "cyan",
    badgeClass: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
    borderClass: "border-cyan-500/20",
    glowClass: "hover:shadow-cyan-500/10",
    iconBg: "bg-cyan-500/10",
    iconText: "text-cyan-400",
    level: "Beginner",
    levelClass: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  },
  {
    title: "Task Manager App",
    tech: ["React", "CSS Modules", "localStorage"],
    description:
      "A fully functional task management app built with React. Users can create, edit, delete, and filter tasks by status. State persists across sessions via localStorage, and the UI updates reactively with zero page reloads.",
    highlights: [
      "React state & component architecture",
      "Filter by All / Active / Completed",
      "Persistent state via localStorage",
    ],
    accent: "violet",
    badgeClass: "bg-violet-500/10 text-violet-300 border border-violet-500/20",
    borderClass: "border-violet-500/20",
    glowClass: "hover:shadow-violet-500/10",
    iconBg: "bg-violet-500/10",
    iconText: "text-violet-400",
    level: "Mid",
    levelClass: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  },
  {
    title: "Movie Discovery App",
    tech: ["Next.js", "Tailwind CSS", "TMDB API"],
    description:
      "A movie browsing platform powered by the TMDB API, built with Next.js App Router. Browse trending films, search by title, and view full detail pages — each with cast info, ratings, and trailers.",
    highlights: [
      "Next.js App Router + server components",
      "Dynamic routes for per-movie detail pages",
      "Search, trending, & genre filtering",
    ],
    accent: "orange",
    badgeClass: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
    borderClass: "border-orange-500/20",
    glowClass: "hover:shadow-orange-500/10",
    iconBg: "bg-orange-500/10",
    iconText: "text-orange-400",
    level: "Mid",
    levelClass: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  },
];

const EXPERIENCE = [
  {
    role: "Frontend Developer (Self-Directed Learning)",
    org: "Independent Study & Project Building",
    period: "Ongoing",
    dotClass: "bg-emerald-400",
    accent: "emerald",
    bullets: [
      "Built and deployed multiple frontend projects across HTML/CSS, vanilla JS, React, and Next.js.",
      "Practiced responsive, mobile-first design using Tailwind CSS and modern CSS layouts (Flexbox, Grid).",
      "Learned component-based architecture, state management, and API integration through hands-on projects.",
      "Versioned all work with Git/GitHub and deployed live sites via Vercel.",
    ],
  },
  {
    role: "Peer Mentor — Programming Fundamentals",
    org: "Piscine-Go Curriculum",
    period: "2023 – 2024",
    dotClass: "bg-cyan-400",
    accent: "cyan",
    bullets: [
      "Guided peers through core programming logic, debugging, and problem-solving strategies.",
      "Built strong foundations in algorithms and data structures that directly support frontend performance thinking.",
    ],
  },
  {
    role: "National Youth Service Corps (NYSC)",
    org: "Certificate of National Service",
    period: "Completed 2024",
    dotClass: "bg-violet-400",
    accent: "violet",
    bullets: [
      "Completed mandatory national service in Nigeria.",
      "Background in Philosophy sharpens analytical thinking and structured reasoning — key skills for breaking down complex UI/UX problems.",
    ],
  },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#020817]/90 backdrop-blur-md border-b border-slate-800/60 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#about" className="text-sm font-mono font-semibold text-slate-300 hover:text-emerald-400 transition-colors tracking-widest uppercase">
          CEJ<span className="text-emerald-400">.</span>dev
        </a>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-slate-400 hover:text-emerald-400 font-medium transition-colors rounded-lg hover:bg-emerald-400/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:juliuschristiana585@gmail.com"
            className="ml-4 px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors"
          >
            Hire Me
          </a>
        </div>

        <button
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#020817]/95 backdrop-blur-md border-t border-slate-800 px-6 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-400 hover:text-emerald-400 font-medium transition-colors rounded-lg"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:juliuschristiana585@gmail.com"
            className="block mt-2 px-3 py-2 text-sm font-semibold rounded-lg bg-emerald-500 text-slate-950 text-center"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="text-xs font-mono font-semibold text-emerald-400 tracking-[0.2em] uppercase">
        {children}
      </span>
      <div className="h-px flex-1" style={{ background: "linear-gradient(to right, rgba(16,185,129,0.3), transparent)" }} />
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020817] overflow-x-hidden">
      <Navbar />

      {/* Ambient blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -left-48 w-96 h-96 rounded-full blur-3xl" style={{ background: "rgba(16,185,129,0.05)" }} />
        <div className="absolute top-1/3 -right-48 w-96 h-96 rounded-full blur-3xl" style={{ background: "rgba(6,182,212,0.05)" }} />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl" style={{ background: "rgba(139,92,246,0.05)" }} />
      </div>

      <main className="relative max-w-6xl mx-auto px-6">

        {/* ── HERO ── */}
        <section id="about" className="min-h-screen flex flex-col justify-center pt-20 pb-16 dot-grid">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

            <div className="max-w-2xl space-y-6 animate-fade-up text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono font-semibold tracking-wider"
                style={{ background: "rgba(16,185,129,0.1)", borderColor: "rgba(16,185,129,0.2)", color: "#34d399" }}>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for opportunities
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight text-white">
                Hi, I&apos;m{" "}
                <span className="gradient-text">Christiana</span>
              </h1>

              <p className="text-lg text-slate-400 font-mono font-medium">
                Frontend Developer &nbsp;·&nbsp; React / Next.js / Tailwind CSS
              </p>

              <p className="text-base text-slate-400 leading-relaxed">
                I build clean, responsive, and interactive web experiences. Combining a background in <strong className="text-slate-200">Philosophy</strong> with hands-on frontend development, I bring structured thinking to every UI challenge — from pixel-perfect layouts to smooth user interactions.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
                <a href="#projects"
                  className="px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                  style={{ background: "#10b981", color: "#020817", boxShadow: "0 8px 24px rgba(16,185,129,0.2)" }}>
                  View My Work
                </a>
                <a href="#contact"
                  className="px-6 py-3 rounded-xl font-semibold text-sm transition-colors border text-slate-200"
                  style={{ background: "rgba(30,41,59,0.8)", borderColor: "rgba(71,85,105,0.6)" }}>
                  Get in Touch
                </a>
                <a href="https://github.com/logicgirl" target="_blank" rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl font-semibold text-sm transition-colors border text-slate-400 hover:text-white flex items-center gap-2"
                  style={{ borderColor: "rgba(71,85,105,0.4)" }}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  GitHub
                </a>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-4 border-t border-slate-800">
                {[
                  { label: "Projects Built", value: "4+" },
                  { label: "Core Stack", value: "React" },
                  { label: "Location", value: "Nigeria" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile image */}
            <div className="relative flex-shrink-0 animate-fade-up-delay animate-float">
              <div className="absolute inset-0 rounded-full blur-2xl scale-110"
                style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.15), rgba(139,92,246,0.15))" }} />
              <div className="w-52 h-52 lg:w-64 lg:h-64 relative">
                <div className="absolute inset-0 rounded-full p-0.5 animate-pulse-ring"
                  style={{ background: "linear-gradient(135deg, #10b981, #06b6d4, #8b5cf6)" }}>
                  <div className="w-full h-full rounded-full overflow-hidden" style={{ background: "#020817" }}>
                    <img src="/profile.jpg" alt="Christiana Edem Julius" className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-4 px-3 py-1.5 rounded-xl border shadow-xl flex items-center gap-2"
                style={{ background: "#0f172a", borderColor: "rgba(71,85,105,0.6)" }}>
                <span className="text-lg">🇳🇬</span>
                <span className="text-xs font-medium text-slate-300">Ado-Ekiti, Nigeria</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16 animate-bounce-y opacity-40">
            <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" className="py-24 border-t border-slate-800/60">
          <SectionLabel>What I Know</SectionLabel>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">Technical Skills</h2>
          <p className="text-slate-400 mb-12 max-w-xl">
            A frontend-focused stack for building responsive, interactive, and well-crafted web apps.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {SKILLS.map((group) => (
              <div key={group.category}
                className={`relative p-6 rounded-2xl border transition-all duration-300 group overflow-hidden`}
                style={{ background: "rgba(15,23,42,0.5)", borderColor: group.border.replace("border-", "").replace("/30", "") }}>
                <div className={`flex items-center gap-3 mb-4 ${group.text}`}>
                  <div className={`p-2 rounded-lg ${group.bg}`}>{group.icon}</div>
                  <h3 className="font-semibold text-sm text-slate-200">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className={`px-2.5 py-1 rounded-md text-xs font-medium ${group.badge}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-5 rounded-2xl border border-slate-800" style={{ background: "rgba(15,23,42,0.3)" }}>
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">Currently Learning</p>
            <div className="flex flex-wrap gap-2">
              {["TypeScript", "React Query", "Framer Motion", "Jest & Testing Library"].map((s) => (
                <span key={s} className="px-3 py-1.5 text-xs rounded-full text-slate-400 border"
                  style={{ background: "rgba(30,41,59,0.6)", borderColor: "rgba(71,85,105,0.4)" }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" className="py-24 border-t border-slate-800/60">
          <SectionLabel>Portfolio</SectionLabel>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">Projects</h2>
          <p className="text-slate-400 mb-12 max-w-xl">
            Four projects ranging from beginner to mid-level — each one built to sharpen a specific frontend skill.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((proj) => (
              <div key={proj.title}
                className={`relative flex flex-col p-6 rounded-2xl border transition-all duration-300 hover:shadow-2xl group`}
                style={{ background: "rgba(15,23,42,0.5)", borderColor: "rgba(51,65,85,0.4)" }}>

                <div className="flex items-start justify-between mb-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${proj.iconBg} ${proj.iconText}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                  </div>
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${proj.levelClass}`}>
                    {proj.level}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3">{proj.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">{proj.description}</p>

                <ul className="space-y-1.5 mb-5">
                  {proj.highlights.map((h) => (
                    <li key={h} className={`flex items-center gap-2 text-xs ${proj.iconText}`}>
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-400">{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
                  {proj.tech.map((t) => (
                    <span key={t} className={`px-2.5 py-1 rounded-md text-xs font-semibold font-mono ${proj.badgeClass}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a href="https://github.com/logicgirl" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border text-slate-400 text-sm font-medium hover:text-emerald-400 transition-all"
              style={{ borderColor: "rgba(71,85,105,0.5)" }}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              View all on GitHub
            </a>
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience" className="py-24 border-t border-slate-800/60">
          <SectionLabel>Background</SectionLabel>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">Experience & Training</h2>
          <p className="text-slate-400 mb-12 max-w-xl">
            Self-directed learning reinforced by structured mentorship and a strong analytical foundation.
          </p>

          <div className="relative space-y-8 pl-8">
            <div className="absolute left-2.5 top-2 bottom-2 w-px"
              style={{ background: "linear-gradient(to bottom, rgba(16,185,129,0.4), rgba(6,182,212,0.2), transparent)" }} />

            {EXPERIENCE.map((item, i) => (
              <div key={i} className="relative">
                <div className={`absolute -left-[23px] top-2 w-3 h-3 rounded-full ${item.dotClass}`}
                  style={{ boxShadow: "0 0 0 3px #020817" }} />
                <div className="p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors"
                  style={{ background: "rgba(15,23,42,0.5)" }}>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-bold text-white text-lg">{item.role}</h3>
                      <p className="text-sm text-slate-400 mt-0.5">{item.org}</p>
                    </div>
                    <span className="px-3 py-1 text-xs font-mono font-medium rounded-full border text-slate-400"
                      style={{ background: "rgba(30,41,59,0.6)", borderColor: "rgba(71,85,105,0.4)" }}>
                      {item.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {item.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-slate-400">
                        <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${item.accent === "emerald" ? "text-emerald-500" : item.accent === "cyan" ? "text-cyan-500" : "text-violet-500"}`}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="py-24 border-t border-slate-800/60">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <SectionLabel>Get in Touch</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Let&apos;s Build Something Together
            </h2>
            <p className="text-slate-400 leading-relaxed">
              I&apos;m looking for frontend developer opportunities, freelance projects, and open-source collaborations. If you have something in mind, I&apos;d love to hear about it.
            </p>

            <div className="relative mt-8 p-8 rounded-2xl border overflow-hidden"
              style={{ background: "rgba(15,23,42,0.6)", borderColor: "rgba(51,65,85,0.5)" }}>
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.04), transparent, rgba(139,92,246,0.04))" }} />
              <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:juliuschristiana585@gmail.com"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all"
                  style={{ background: "#10b981", color: "#020817", boxShadow: "0 8px 24px rgba(16,185,129,0.2)" }}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  juliuschristiana585@gmail.com
                </a>
                <a href="https://github.com/logicgirl" target="_blank" rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-colors border text-slate-200"
                  style={{ background: "rgba(30,41,59,0.8)", borderColor: "rgba(71,85,105,0.5)" }}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="py-8 border-t border-slate-800/60 text-center">
          <p className="text-sm text-slate-600">
            Built with Next.js & Tailwind CSS &nbsp;·&nbsp;
            <span className="gradient-text font-medium">Christiana Edem Julius</span>
            &nbsp;·&nbsp; {new Date().getFullYear()}
          </p>
        </footer>

      </main>
    </div>
  );
}
