export default function Home() {
  const skills = [
    {
      category: "Frontend & Frameworks",
      items: ["JavaScript", "Next.js", "HTML", "CSS", "Tailwind CSS"],
    },
    { category: "Backend & Logic", items: ["Go (Golang)"] },
    { category: "Tools & Deployment", items: ["Git", "Vercel"] },
  ];

  const projects = [
    {
      title: "Full-Stack Portfolio Website",
      desc: "A modern, responsive web application built with React and Next.js, styled cleanly using Tailwind CSS.",
      tech: "JavaScript, Next.js, Tailwind CSS, Vercel",
    },
    {
      title: "Terminal Tool Recreations",
      desc: "Backend practice scripts in Go that mimic standard Unix terminal commands like cat and tail.",
      tech: "Go (Golang)",
    },
    {
      title: "Data Structure & Logic Practice",
      desc: "Problem-solving exercises focused on Binary Trees and efficient data organization.",
      tech: "Go (Golang), Git",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto py-16 px-6 space-y-20">
      {/* --- HERO / ABOUT ME SECTION --- */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 pt-6">
        <div className="space-y-4 max-w-2xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Hi, I'm <span className="text-blue-600">Christiana</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            I'm a web developer focused on building clean, interactive web
            applications. I love bridging frontend design using technologies
            like <strong className="text-slate-800">Next.js</strong> and{" "}
            <strong className="text-slate-800">Tailwind CSS</strong> with solid
            backend logic in <strong className="text-slate-800">Go</strong>. I'm
            constantly learning, building new projects, and expanding my
            full-stack skills.
          </p>
          <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-slate-100 text-slate-700 font-medium rounded-lg shadow-sm hover:bg-slate-200 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
        {/* Profile Picture Container */}
        <div className="w-48 h-48 md:w-56 md:h-56 relative flex-shrink-0 flex items-center justify-center">
          {/* The white background shadow ring */}
          <div className="w-[102%] h-[102%] rounded-full absolute bg-white shadow-xl"></div>

          {/* The image mask and frame */}
          <div className="w-full h-full rounded-full overflow-hidden relative z-10 border-4 border-white">
            <img
              src="/profile.jpg"
              alt="Christiana"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section className="border-t border-slate-100 pt-12">
        <h2 className="text-3xl font-bold mb-8 text-slate-800">
          Technical Skills
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {skills.map((skillGroup, idx) => (
            <div
              key={idx}
              className="p-6 bg-slate-50 rounded-xl border border-slate-200"
            >
              <h3 className="font-semibold text-lg text-slate-700 mb-3">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white border border-slate-300 rounded-md text-sm text-slate-600 font-medium shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="border-t border-slate-100 pt-12">
        <h2 className="text-3xl font-bold mb-8 text-slate-800">Projects</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-slate-800">
                {proj.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                {proj.desc}
              </p>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                {proj.tech}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section
        id="contact"
        className="border-t border-slate-100 pt-12 text-center md:text-left max-w-2xl"
      >
        <h2 className="text-3xl font-bold mb-4 text-slate-800">
          Let's Connect
        </h2>
        <p className="text-slate-600 mb-6 leading-relaxed">
          I'm always open to discussing new development projects, open-source
          ideas, full-stack opportunities, or just chatting about code. Drop me
          a line!
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href="mailto:juliuschristiana585@email.com"
            className="px-5 py-2.5 bg-slate-900 text-white font-medium rounded-lg text-sm hover:bg-slate-800 transition-colors shadow-sm"
          >
            Email Me
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg text-sm hover:bg-slate-50 transition-colors shadow-sm"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg text-sm hover:bg-slate-50 transition-colors shadow-sm"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
