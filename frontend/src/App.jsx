import React, { useEffect, useRef, useState } from "react";
import PHOTO from "./assets/dharani.jpeg";

const ROLES = ["Full-Stack Developer", "Generative AI Engineer", "AI Engineer"];

const SKILLS_ICONS = [
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", label: "Python" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: "React.js" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", label: "FastAPI" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", label: "MySQL" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", label: "PyTorch" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", label: "Docker" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", label: "Git" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", label: "Linux" },
  { icon: null, label: "LangGraph" },
];

const PROJECTS = [
  {
    num: "01",
    title: "Jarvix",
    year: "2024",
    desc: "A voice-first personal AI assistant with wake-word detection, real-time speech-to-text, LLM reasoning through Groq, and GPU-accelerated text-to-speech. Built with a modular skill architecture for native cross-OS use.",
    tags: ["Python", "Groq API", "faster-whisper", "Coqui TTS", "PyQt6", "LLM"],
    github: "https://github.com/dharanidh75/",
  },
  {
    num: "02",
    title: "TeamCodeX",
    year: "2024",
    desc: "A collaborative developer platform where teams create groups, assign tasks, track progress, and review contribution analytics through role-based workflows and interactive visual dashboards.",
    tags: ["React.js", "FastAPI", "MySQL", "Python", "Graph UI"],
    github: "https://github.com/dharanidh75/",
  },
  {
    num: "03",
    title: "TaskNest",
    year: "2025",
    desc: "An AI-powered project workspace with per-project RAG chatbots, multi-agent orchestration, vector database ingestion, notes, tasks, and isolated context-aware AI memory for each project.",
    tags: ["LangGraph", "RAG", "Vector DB", "Agentic AI", "FastAPI", "React.js"],
    github: "https://github.com/dharanidh75/",
  },
  {
    num: "04",
    title: "PDF RAG Assistant",
    year: "2025",
    desc: "A document intelligence system that converts PDFs into searchable knowledge bases and enables source-grounded natural language Q&A through a retrieval-augmented generation pipeline.",
    tags: ["RAG", "Vector DB", "Python", "LLM", "FastAPI"],
    github: "https://github.com/dharanidh75/",
  },
];

const SKILL_GROUPS = [
  { label: "Languages", items: ["Python", "JavaScript", "Rust", "SQL"] },
  { label: "Frameworks", items: ["React.js", "FastAPI", "LangGraph", "PyQt6"] },
  { label: "AI / ML", items: ["RAG", "Agentic AI", "LLMs", "Vector DB", "Groq API"] },
  { label: "Infra & Tools", items: ["MySQL", "Docker", "Git", "Railway", "Linux"] },
];

const STATS = [
  { value: "04", label: "featured builds", detail: "AI assistants, RAG apps, team tools" },
  { value: "03+", label: "AI system areas", detail: "RAG, agents, LLM integrations" },
  { value: "Full-stack", label: "delivery style", detail: "frontend, API, database, deployment" },
  { value: "2026", label: "availability", detail: "open to roles and collaborations" },
];

const CAPABILITIES = [
  {
    num: "01",
    title: "AI application engineering",
    desc: "Designing applied AI features that are useful, grounded, and connected to real product workflows.",
    points: ["RAG pipelines", "LLM integration", "Agent orchestration"],
  },
  {
    num: "02",
    title: "Full-stack product systems",
    desc: "Building clean interfaces, scalable APIs, database-backed workflows, and production-ready application logic.",
    points: ["React interfaces", "FastAPI services", "MySQL schemas"],
  },
  {
    num: "03",
    title: "Developer tooling",
    desc: "Creating tools for teams, projects, notes, tasks, analytics, and productivity-focused engineering workflows.",
    points: ["Dashboards", "Role-based flows", "Task systems"],
  },
  {
    num: "04",
    title: "Deployment mindset",
    desc: "Thinking beyond prototypes — focusing on maintainability, modular design, reliability, and clear architecture.",
    points: ["Docker", "Git", "Linux", "Railway"],
  },
];

const EXPERIENCE = [
  {
    title: "B.Tech — Computer Science",
    sub: "Sri Shakthi Institute · 2022 – Present",
    desc: "Focused on AI systems, full-stack development, applied machine learning, and production-oriented software engineering.",
  },
  {
    title: "Meta × PyTorch OpenEnv Hackathon",
    sub: "2026 · Participant",
    desc: "Working on reinforcement-learning-oriented solutions using AI agents within the PyTorch ecosystem.",
  },
  {
    title: "Independent Projects",
    sub: "2023 – Present",
    desc: "Built Jarvix, TaskNest, TeamCodeX, and PDF RAG Assistant across voice AI, agentic workflows, and collaborative tooling.",
  },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function useTyper() {
  const [text, setText] = useState("");

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const currentRole = ROLES[roleIndex];

      if (!deleting) {
        charIndex += 1;
        setText(currentRole.slice(0, charIndex));

        if (charIndex === currentRole.length) {
          deleting = true;
          timer = setTimeout(tick, 1100);
          return;
        }
      } else {
        charIndex -= 1;
        setText(currentRole.slice(0, charIndex));

        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % ROLES.length;
        }
      }

      timer = setTimeout(tick, deleting ? 42 : 76);
    };

    timer = setTimeout(tick, 350);
    return () => clearTimeout(timer);
  }, []);

  return text;
}

function useInView(threshold = 0.14) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

/* Minimal premium cursor */
function CustomCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  const target = useRef({ x: -120, y: -120 });
  const current = useRef({ x: -120, y: -120 });
  const hovering = useRef(false);
  const clicking = useRef(false);
  const raf = useRef(null);

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      const shouldEnable = finePointer.matches && !reduceMotion.matches;
      setEnabled(shouldEnable);
      document.body.classList.toggle("has-custom-cursor", shouldEnable);
    };

    sync();

    const addListener = (mq) => {
      if (mq.addEventListener) mq.addEventListener("change", sync);
      else mq.addListener(sync);
    };

    const removeListener = (mq) => {
      if (mq.removeEventListener) mq.removeEventListener("change", sync);
      else mq.removeListener(sync);
    };

    addListener(finePointer);
    addListener(reduceMotion);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      removeListener(finePointer);
      removeListener(reduceMotion);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const interactiveSelector =
      "a, button, input, textarea, select, [role='button'], .cursor-hover";

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
      hovering.current =
        e.target instanceof Element && Boolean(e.target.closest(interactiveSelector));
    };

    const onDown = () => {
      clicking.current = true;
    };

    const onUp = () => {
      clicking.current = false;
    };

    const onLeave = () => {
      target.current = { x: -120, y: -120 };
      hovering.current = false;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.22;
      current.current.y += (target.current.y - current.current.y) * 0.22;

      const isVisible = target.current.x > -50;
      const scale = clicking.current ? 0.72 : hovering.current ? 1.42 : 1;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${current.current.x - 18}px, ${
          current.current.y - 18
        }px, 0) scale(${scale})`;
        ringRef.current.style.opacity = isVisible ? (hovering.current ? "0.95" : "0.55") : "0";
        ringRef.current.style.borderColor = hovering.current
          ? "rgba(255,255,255,0.86)"
          : "rgba(255,255,255,0.42)";
        ringRef.current.style.background = hovering.current
          ? "rgba(255,255,255,0.055)"
          : "rgba(255,255,255,0)";
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.current.x - 3}px, ${
          target.current.y - 3
        }px, 0)`;
        dotRef.current.style.opacity = isVisible ? (hovering.current ? "0.25" : "0.82") : "0";
      }

      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}

function FadeIn({ children, delay = 0, style = {} }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`fade-in ${inView ? "is-visible" : ""}`}
      style={{ transitionDelay: `${delay}s`, ...style }}
    >
      {children}
    </div>
  );
}

function SectionTitle({ index, title, count }) {
  return (
    <FadeIn>
      <div className="section-title">
        <span className="section-index">{index} /</span>
        <h2>{title}</h2>
        {count && <span className="section-count">{count}</span>}
      </div>
    </FadeIn>
  );
}

function RightColumn() {
  const [lampOn, setLampOn] = useState(true);

  return (
    <aside className={`right-column ${lampOn ? "is-lit" : "is-dim"}`}>
      <div className={`lamp ${lampOn ? "is-on" : ""}`}>
        <div className="lamp-cord" />
        <div className="lamp-shade" />
        <button
          type="button"
          className="lamp-pull cursor-hover"
          aria-label="Toggle lamp glow"
          aria-pressed={lampOn}
          onClick={() => setLampOn((v) => !v)}
        />
        <div className="lamp-bulb" />
        <div className="lamp-light" />
      </div>

      <div className="portrait-frame">
        <img src={PHOTO} alt="Dharanidharan" />
      </div>

      <div className="profile-note">
        <span>// current focus</span>
        <strong>AI-first web products, RAG systems, and agentic workflows.</strong>
      </div>

      <div className="skill-cloud">
        {SKILLS_ICONS.map((s) => (
          <div key={s.label} className="skill-pill">
            {s.icon ? (
              <img src={s.icon} alt={s.label} loading="lazy" />
            ) : (
              <span className="skill-symbol">⬡</span>
            )}
            <span className="skill-label">{s.label}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

function NavBar({ active }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40);
    handle();

    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "capabilities", label: "Skills" },
    { id: "projects", label: "Work" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <button
        type="button"
        className="nav-logo cursor-hover"
        onClick={() => scrollTo("hero")}
        aria-label="Scroll to home"
      >
        JD
      </button>

      <div className="nav-links">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollTo(item.id)}
            className={`nav-link cursor-hover ${active === item.id ? "active" : ""}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="nav-status">
        <span />
        Available for work
      </div>
    </nav>
  );
}

function Hero() {
  const typed = useTyper();

  return (
    <section id="hero" className="hero">
      <div className="ambient-grid" />

      <div className="hero-inner">
        <div className="hero-content">
          <div className="eyebrow">
            <span />
            Coimbatore, India — Portfolio 2026
          </div>

          <h1 className="hero-name">Dharanidharan</h1>

          <div className="role-line">
            {typed}
            <span className="caret">_</span>
          </div>

          <p className="hero-copy">
            I build intelligent full-stack systems that combine clean product engineering
            with practical AI — from scalable APIs and dashboards to RAG pipelines,
            multi-agent workflows, and LLM-powered tools.
          </p>

          <div className="hero-tags" aria-label="Core focus areas">
            {["RAG Systems", "AI Agents", "FastAPI", "React", "LLM Apps"].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="hero-actions">
            <button type="button" onClick={() => scrollTo("projects")} className="btn btn-primary cursor-hover">
              View Work
            </button>
            <button type="button" onClick={() => scrollTo("contact")} className="btn btn-ghost cursor-hover">
              Contact
            </button>
          </div>
        </div>

        <RightColumn />
      </div>

      <div className="scroll-cue">
        <span>Scroll</span>
        <i />
      </div>
    </section>
  );
}

function SignalStrip() {
  return (
    <section className="signal-strip" aria-label="Portfolio quick facts">
      <div className="signal-grid">
        {STATS.map((item, index) => (
          <FadeIn key={item.label} delay={index * 0.05}>
            <div className="signal-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
              <p>{item.detail}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="section">
      <SectionTitle index="02" title="What I Build" count="focused capabilities" />

      <div className="capability-grid">
        {CAPABILITIES.map((item, index) => (
          <FadeIn key={item.num} delay={index * 0.06}>
            <article className="capability-card cursor-hover">
              <span className="card-num">{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              <div className="capability-points">
                {item.points.map((point) => (
                  <span key={point}>{point}</span>
                ))}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle index="03" title="Selected Work" count={`${PROJECTS.length} projects`} />

      <div className="projects-list">
        {PROJECTS.map((project, index) => (
          <FadeIn key={project.num} delay={index * 0.06}>
            <article className="project-row cursor-hover">
              <div className="project-meta">
                <span>{project.num}</span>
                <small>{project.year}</small>
              </div>

              <div className="project-main">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-link cursor-hover"
              >
                GitHub ↗
              </a>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about-section">
      <SectionTitle index="04" title="About" />

      <div className="about-grid">
        <FadeIn delay={0.08}>
          <div className="about-copy">
            <p>
              I'm <strong>Dharanidharan</strong>, a Full-Stack Developer and AI Engineer
              from Coimbatore, India. I enjoy building practical systems that connect
              modern web engineering with applied AI.
            </p>

            <p>
              My work focuses on <strong>RAG architectures</strong>, multi-agent systems,
              LLM integrations, APIs, dashboards, and developer-focused productivity tools.
            </p>

            <p>
              Currently pursuing <strong>B.Tech in Computer Science</strong> at Sri Shakthi
              Institute of Engineering and Technology, with a strong interest in reliability,
              product thinking, and scalable software design.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.16}>
          <div className="timeline">
            {EXPERIENCE.map((item, index) => (
              <div key={item.title} className="timeline-item">
                <div className="timeline-marker">
                  <span />
                  {index < EXPERIENCE.length - 1 && <i />}
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <small>{item.sub}</small>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.1} style={{ marginTop: 90 }}>
        <div className="skills-block">
          <div className="block-label">// Technical Expertise</div>

          <div className="skill-matrix">
            {SKILL_GROUPS.map((group) => (
              <div key={group.label} className="skill-group">
                <h3>{group.label}</h3>

                <div>
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function Contact() {
  const emailHref =
    "mailto:dharanidh777@gmail.com?subject=Portfolio%20enquiry%20-%20AI%20or%20Full-stack%20opportunity";

  return (
    <section id="contact" className="section contact-section">
      <SectionTitle index="05" title="Get in Touch" />

      <div className="contact-grid">
        <FadeIn delay={0.08}>
          <div>
            <p className="contact-intro">
              Open to full-time roles, internships, freelance projects, and collaborations
              around AI engineering, full-stack applications, RAG systems, and developer tools.
            </p>

            <div className="contact-table">
              {[
                { label: "Email", val: "dharanidh777@gmail.com", href: "mailto:dharanidh777@gmail.com" },
                { label: "Phone", val: "+91 93637 78981", href: "tel:+919363778981" },
                { label: "Location", val: "Coimbatore, Tamil Nadu, India", href: null },
                { label: "Status", val: "Available for work", href: null },
              ].map((row) => (
                <div key={row.label} className="contact-row">
                  <span>{row.label}</span>
                  {row.href ? (
                    <a href={row.href} className="cursor-hover">
                      {row.val}
                    </a>
                  ) : (
                    <p>{row.val}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.16}>
          <div className="contact-side">
            <div className="availability-card">
              <div className="block-label">// Best fit</div>
              <h3>AI engineering and full-stack product roles.</h3>
              <p>
                I am especially interested in teams building AI tools, internal automation,
                knowledge systems, developer platforms, and intelligent web products.
              </p>

              <a href={emailHref} className="btn btn-primary cursor-hover">
                Start a Conversation
              </a>
            </div>

            <div className="profiles">
              <div className="block-label">// Online Profiles</div>

              {[
                {
                  name: "GitHub",
                  handle: "@dharanidh75",
                  desc: "Source code & projects",
                  href: "https://github.com/dharanidh75/",
                },
                {
                  name: "LinkedIn",
                  handle: "dharanidharan-j",
                  desc: "Professional network",
                  href: "https://www.linkedin.com/in/dharanidharan-j-7757a9321/",
                },
                {
                  name: "LeetCode",
                  handle: "Dharani75",
                  desc: "Problem solving",
                  href: "https://leetcode.com/u/Dharani75/",
                },
              ].map((profile) => (
                <a
                  key={profile.name}
                  href={profile.href}
                  target="_blank"
                  rel="noreferrer"
                  className="profile-link cursor-hover"
                >
                  <div>
                    <h3>{profile.name}</h3>
                    <span>{profile.handle}</span>
                  </div>

                  <div>
                    <p>{profile.desc}</p>
                    <b>↗</b>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>© 2026 Dharanidharan · Built with precision.</span>
      <span>Coimbatore, IN</span>
    </footer>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const ids = ["hero", "capabilities", "projects", "about", "contact"];

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(visible.target.id);
      },
      {
        threshold: [0.2, 0.35, 0.55],
        rootMargin: "-70px 0px -45% 0px",
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

        :root {
          --bg: #080808;
          --panel: #0d0d0d;
          --panel-2: #111111;
          --text: #f4f4f1;
          --muted: rgba(244, 244, 241, 0.58);
          --dim: rgba(244, 244, 241, 0.32);
          --faint: rgba(244, 244, 241, 0.16);
          --line: rgba(255, 255, 255, 0.075);
          --line-strong: rgba(255, 255, 255, 0.14);
          --soft: rgba(255, 255, 255, 0.035);
          --font-sans: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          --font-display: 'Space Grotesk', system-ui, sans-serif;
          --font-mono: 'IBM Plex Mono', 'Share Tech Mono', monospace;
        }

        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
          background: var(--bg);
        }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-sans);
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        body.has-custom-cursor,
        body.has-custom-cursor * {
          cursor: none !important;
        }

        a {
          color: inherit;
        }

        button {
          font: inherit;
        }

        ::selection {
          background: rgba(255, 255, 255, 0.14);
        }

        .portfolio-root {
          min-height: 100vh;
          overflow-x: hidden;
          background:
            radial-gradient(circle at 20% -10%, rgba(255,255,255,0.05), transparent 34%),
            radial-gradient(circle at 90% 8%, rgba(255,255,255,0.035), transparent 30%),
            var(--bg);
        }

        .cursor-ring,
        .cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 9999;
          will-change: transform, opacity;
        }

        .cursor-ring {
          width: 36px;
          height: 36px;
          border: 1px solid rgba(255,255,255,0.42);
          border-radius: 999px;
          opacity: 0;
          transition:
            opacity 160ms ease,
            border-color 160ms ease,
            background 160ms ease;
        }

        .cursor-ring::before,
        .cursor-ring::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          background: rgba(255,255,255,0.32);
          transform: translate(-50%, -50%);
        }

        .cursor-ring::before {
          width: 12px;
          height: 1px;
        }

        .cursor-ring::after {
          width: 1px;
          height: 12px;
        }

        .cursor-dot {
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: rgba(255,255,255,0.82);
          opacity: 0;
        }

        .fade-in {
          opacity: 0;
          transform: translateY(22px);
          transition:
            opacity 720ms ease,
            transform 720ms ease;
        }

        .fade-in.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 200;
          height: 66px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 clamp(20px, 4vw, 48px);
          background: transparent;
          border-bottom: 1px solid transparent;
          transition: background 280ms ease, border-color 280ms ease, backdrop-filter 280ms ease;
        }

        .nav.nav-scrolled {
          background: rgba(8, 8, 8, 0.88);
          border-bottom-color: var(--line);
          backdrop-filter: blur(18px);
        }

        .nav-logo {
          border: 0;
          background: linear-gradient(135deg, #fff 30%, rgba(255,255,255,0.38));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: #fff;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 16px;
          letter-spacing: 0.16em;
          padding: 4px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-link {
          position: relative;
          border: 0;
          background: transparent;
          color: var(--dim);
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 6px 0;
          transition: color 180ms ease;
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--text);
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 1px;
          background: rgba(255,255,255,0.68);
          transition: width 220ms ease;
        }

        .nav-link.active::after {
          width: 100%;
        }

        .nav-status {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.08em;
          color: var(--dim);
          white-space: nowrap;
        }

        .nav-status span {
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: rgba(255,255,255,0.74);
          box-shadow: 0 0 12px rgba(255,255,255,0.28);
          animation: pulse 2.2s ease-in-out infinite;
        }

        .hero {
          min-height: 100svh;
          position: relative;
          display: flex;
          align-items: center;
          padding: 98px clamp(20px, 4vw, 48px) 84px;
          overflow: hidden;
        }

        .ambient-grid {
          position: absolute;
          inset: 0;
          z-index: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 78px 78px;
          mask-image: radial-gradient(ellipse 80% 78% at 50% 46%, #000 35%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 80% 78% at 50% 46%, #000 35%, transparent 100%);
          pointer-events: none;
        }

        .hero-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 360px;
          align-items: center;
          gap: clamp(54px, 7vw, 90px);
        }

        .hero-content {
          min-width: 0;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 28px;
          padding: 7px 14px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.018);
          color: var(--dim);
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          animation: fadeUp 800ms ease both;
        }

        .eyebrow span {
          width: 5px;
          height: 5px;
          border-radius: 999px;
          background: rgba(255,255,255,0.52);
        }

        .hero-name {
          max-width: 900px;
          margin-bottom: 24px;
          font-family: var(--font-display);
          font-size: clamp(46px, 7vw, 86px);
          font-weight: 700;
          line-height: 0.94;
          letter-spacing: -0.07em;
          background: linear-gradient(90deg, #fff 56%, rgba(255,255,255,0.34));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: #fff;
          animation: fadeUp 800ms ease 120ms both;
        }

        .role-line {
          min-height: 32px;
          margin-bottom: 26px;
          color: rgba(255,255,255,0.66);
          font-family: var(--font-mono);
          font-size: clamp(15px, 1.6vw, 19px);
          letter-spacing: 0.08em;
          animation: fadeUp 800ms ease 240ms both;
        }

        .caret {
          margin-left: 2px;
          opacity: 0.55;
          animation: blink 1s steps(2, start) infinite;
        }

        .hero-copy {
          max-width: 585px;
          margin-bottom: 26px;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.88;
          font-weight: 400;
          animation: fadeUp 800ms ease 360ms both;
        }

        .hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 42px;
          animation: fadeUp 800ms ease 440ms both;
        }

        .hero-tags span {
          padding: 6px 11px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.018);
          color: var(--dim);
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.08em;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 14px;
          animation: fadeUp 800ms ease 540ms both;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 13px 30px;
          border: 1px solid var(--line-strong);
          background: transparent;
          color: var(--text);
          text-decoration: none;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          transition:
            background 180ms ease,
            color 180ms ease,
            border-color 180ms ease,
            transform 180ms ease;
        }

        .btn:hover {
          transform: translateY(-1px);
        }

        .btn-primary {
          border-color: rgba(255,255,255,0.72);
        }

        .btn-primary:hover {
          background: #f4f4f1;
          color: #080808;
        }

        .btn-ghost {
          color: var(--dim);
        }

        .btn-ghost:hover {
          border-color: rgba(255,255,255,0.42);
          color: var(--text);
        }

        .right-column {
          width: 360px;
          justify-self: end;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          animation: fadeUp 900ms ease 360ms both;
        }

        .lamp {
          position: relative;
          width: 340px;
          height: 168px;
          overflow: visible;
          flex-shrink: 0;
        }

        .lamp-cord {
          position: absolute;
          top: 0;
          left: 50%;
          width: 1px;
          height: 34px;
          background: rgba(255,255,255,0.24);
        }

        .lamp-shade {
          position: absolute;
          top: 30px;
          left: 50%;
          margin-left: -154px;
          width: 0;
          height: 0;
          border-left: 154px solid transparent;
          border-right: 154px solid transparent;
          border-bottom: 72px solid #333;
          filter: drop-shadow(0 8px 18px rgba(0,0,0,0.65));
          z-index: 3;
        }

        .lamp-pull {
          position: absolute;
          top: 101px;
          left: calc(50% + 22px);
          width: 18px;
          height: 62px;
          border: 0;
          background: transparent;
          z-index: 6;
        }

        .lamp-pull::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          width: 1px;
          height: 54px;
          background: rgba(255,255,255,0.34);
        }

        .lamp-pull::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: calc(50% - 4px);
          width: 8px;
          height: 8px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.45);
          background: #111;
        }

        .lamp-bulb {
          position: absolute;
          top: 92px;
          left: 50%;
          margin-left: -13px;
          width: 26px;
          height: 26px;
          border-radius: 999px;
          background: #f4f4f1;
          z-index: 5;
          box-shadow: 0 0 24px rgba(255,255,255,0.28);
          transition: opacity 200ms ease, box-shadow 200ms ease;
        }

        .lamp-light {
          position: absolute;
          top: 108px;
          left: 50%;
          width: 310px;
          height: 270px;
          transform: translateX(-50%);
          background: linear-gradient(to bottom, rgba(255,255,255,0.08), transparent 72%);
          clip-path: polygon(44% 0%, 56% 0%, 100% 100%, 0% 100%);
          opacity: 0.9;
          pointer-events: none;
          z-index: 1;
          transition: opacity 240ms ease;
        }

        .right-column.is-dim .lamp-bulb {
          opacity: 0.45;
          box-shadow: 0 0 10px rgba(255,255,255,0.12);
        }

        .right-column.is-dim .lamp-light {
          opacity: 0.14;
        }

        .portrait-frame {
          position: relative;
          z-index: 2;
          width: 222px;
          height: 222px;
          margin-top: 8px;
          margin-bottom: 18px;
          overflow: hidden;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.13);
          background: #111;
          box-shadow:
            0 0 40px rgba(255,255,255,0.06),
            0 28px 80px rgba(0,0,0,0.45);
        }

        .portrait-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          filter: grayscale(8%) contrast(1.04);
        }

        .profile-note {
          width: min(320px, 100%);
          margin-bottom: 18px;
          padding: 14px 16px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.018);
        }

        .profile-note span,
        .block-label {
          display: block;
          margin-bottom: 7px;
          color: var(--dim);
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .profile-note strong {
          display: block;
          color: rgba(255,255,255,0.68);
          font-size: 13px;
          font-weight: 500;
          line-height: 1.65;
        }

        .skill-cloud {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          width: min(330px, 100%);
        }

        .skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 12px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.016);
          transition: border-color 180ms ease, background 180ms ease;
        }

        .skill-pill:hover {
          border-color: rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.038);
        }

        .skill-pill img {
          width: 15px;
          height: 15px;
        }

        .skill-symbol {
          color: var(--dim);
          font-size: 10px;
        }

        .skill-label {
          color: rgba(255,255,255,0.56);
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.06em;
        }

        .scroll-cue {
          position: absolute;
          left: 50%;
          bottom: 34px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          transform: translateX(-50%);
          animation: fadeUp 900ms ease 900ms both;
        }

        .scroll-cue span {
          color: rgba(255,255,255,0.18);
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .scroll-cue i {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.28), transparent);
          animation: scrollLine 2s ease infinite;
        }

        .signal-strip {
          padding: 0 clamp(20px, 4vw, 48px) 70px;
        }

        .signal-grid {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1px;
          border: 1px solid var(--line);
          background: var(--line);
        }

        .signal-grid .fade-in {
          height: 100%;
        }

        .signal-card {
          height: 100%;
          padding: 23px 24px;
          background: rgba(8,8,8,0.96);
        }

        .signal-card strong {
          display: block;
          margin-bottom: 8px;
          color: #fff;
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 600;
          letter-spacing: -0.03em;
        }

        .signal-card span {
          display: block;
          margin-bottom: 8px;
          color: rgba(255,255,255,0.58);
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .signal-card p {
          color: var(--dim);
          font-size: 13px;
          line-height: 1.65;
        }

        .section {
          max-width: 1180px;
          margin: 0 auto;
          padding: 130px clamp(20px, 4vw, 48px);
        }

        .section-title {
          display: flex;
          align-items: baseline;
          gap: 20px;
          margin-bottom: 68px;
        }

        .section-index {
          color: var(--dim);
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.2em;
          white-space: nowrap;
        }

        .section-title h2 {
          color: #fff;
          font-family: var(--font-display);
          font-size: clamp(30px, 3.4vw, 44px);
          font-weight: 600;
          letter-spacing: -0.045em;
          line-height: 1.05;
        }

        .section-count {
          margin-left: auto;
          color: var(--dim);
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .capability-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1px;
          border: 1px solid var(--line);
          background: var(--line);
        }

        .capability-grid .fade-in {
          height: 100%;
        }

        .capability-card {
          height: 100%;
          min-height: 310px;
          padding: 28px 24px;
          background: #080808;
          transition: background 180ms ease, transform 180ms ease;
        }

        .capability-card:hover {
          background: #0d0d0d;
          transform: translateY(-2px);
        }

        .card-num {
          display: block;
          margin-bottom: 34px;
          color: var(--dim);
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.16em;
        }

        .capability-card h3 {
          margin-bottom: 14px;
          color: rgba(255,255,255,0.9);
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 600;
          letter-spacing: -0.03em;
          line-height: 1.25;
        }

        .capability-card p {
          margin-bottom: 24px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.78;
        }

        .capability-points {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .capability-points span,
        .project-tags span {
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.018);
          color: var(--dim);
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.08em;
          padding: 5px 9px;
        }

        .projects-list {
          border-top: 1px solid var(--line);
        }

        .project-row {
          display: grid;
          grid-template-columns: 74px minmax(0, 1.05fr) minmax(220px, 0.85fr) 86px;
          gap: 34px;
          align-items: start;
          padding: 38px 0;
          border-bottom: 1px solid var(--line);
          transition: background 180ms ease;
        }

        .project-row:hover {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.018), transparent);
        }

        .project-meta span,
        .project-meta small {
          display: block;
          font-family: var(--font-mono);
          letter-spacing: 0.14em;
        }

        .project-meta span {
          color: var(--dim);
          font-size: 11px;
          margin-bottom: 6px;
        }

        .project-meta small {
          color: var(--faint);
          font-size: 10px;
        }

        .project-main h3 {
          margin-bottom: 12px;
          color: rgba(255,255,255,0.86);
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 600;
          letter-spacing: -0.035em;
          transition: color 180ms ease;
        }

        .project-row:hover .project-main h3 {
          color: #fff;
        }

        .project-main p {
          max-width: 590px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.82;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          padding-top: 2px;
        }

        .project-link {
          color: var(--dim);
          text-decoration: none;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          white-space: nowrap;
          transition: color 180ms ease;
        }

        .project-link:hover,
        .project-row:hover .project-link {
          color: rgba(255,255,255,0.84);
        }

        .about-section {
          position: relative;
        }

        .about-section::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 0;
          width: 100vw;
          height: 100%;
          transform: translateX(-50%);
          background: linear-gradient(180deg, transparent, rgba(255,255,255,0.012), transparent);
          pointer-events: none;
          z-index: -1;
        }

        .about-grid,
        .contact-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 78px;
        }

        .about-copy p {
          margin-bottom: 22px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.92;
        }

        .about-copy strong {
          color: rgba(255,255,255,0.9);
          font-weight: 500;
        }

        .timeline {
          display: flex;
          flex-direction: column;
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 22px minmax(0, 1fr);
          gap: 18px;
          padding-bottom: 30px;
        }

        .timeline-marker {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 6px;
        }

        .timeline-marker span {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.34);
        }

        .timeline-marker i {
          width: 1px;
          flex: 1;
          min-height: 70px;
          margin-top: 9px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.1), transparent);
        }

        .timeline-item h3 {
          margin-bottom: 5px;
          color: rgba(255,255,255,0.84);
          font-size: 15px;
          font-weight: 500;
        }

        .timeline-item small {
          display: block;
          margin-bottom: 9px;
          color: var(--dim);
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.1em;
        }

        .timeline-item p {
          color: var(--muted);
          font-size: 13px;
          line-height: 1.72;
        }

        .skills-block {
          border-top: 1px solid var(--line);
          padding-top: 58px;
        }

        .skill-matrix {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1px;
          border: 1px solid var(--line);
          background: var(--line);
        }

        .skill-group {
          background: #080808;
          padding: 27px 23px;
        }

        .skill-group h3 {
          margin-bottom: 18px;
          color: var(--dim);
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .skill-group div {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .skill-group span {
          padding: 8px 11px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.018);
          color: rgba(255,255,255,0.58);
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.04em;
        }

        .contact-section {
          padding-bottom: 100px;
        }

        .contact-intro {
          max-width: 470px;
          margin-bottom: 42px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.9;
        }

        .contact-table {
          border-top: 1px solid var(--line);
        }

        .contact-row {
          display: grid;
          grid-template-columns: 92px minmax(0, 1fr);
          gap: 20px;
          padding: 15px 0;
          border-bottom: 1px solid var(--line);
        }

        .contact-row > span {
          color: var(--dim);
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .contact-row a,
        .contact-row p {
          color: rgba(255,255,255,0.62);
          text-decoration: none;
          font-size: 13px;
          line-height: 1.5;
        }

        .contact-row a:hover {
          color: #fff;
        }

        .contact-side {
          display: flex;
          flex-direction: column;
          gap: 34px;
        }

        .availability-card {
          padding: 28px;
          border: 1px solid var(--line);
          background:
            linear-gradient(135deg, rgba(255,255,255,0.045), transparent 48%),
            rgba(255,255,255,0.014);
        }

        .availability-card h3 {
          max-width: 420px;
          margin-bottom: 14px;
          color: #fff;
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 600;
          letter-spacing: -0.04em;
          line-height: 1.16;
        }

        .availability-card p {
          margin-bottom: 26px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.78;
        }

        .profiles {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .profile-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
          padding: 22px 24px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.014);
          text-decoration: none;
          transition: background 180ms ease, border-color 180ms ease;
        }

        .profile-link:hover {
          border-color: rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.035);
        }

        .profile-link h3 {
          margin-bottom: 5px;
          color: #fff;
          font-family: var(--font-display);
          font-size: 15px;
          font-weight: 600;
          letter-spacing: -0.02em;
        }

        .profile-link span {
          color: var(--dim);
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.08em;
        }

        .profile-link div:last-child {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .profile-link p {
          color: var(--dim);
          font-size: 12px;
        }

        .profile-link b {
          color: rgba(255,255,255,0.42);
          font-weight: 400;
        }

        .footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 24px clamp(20px, 4vw, 48px);
          border-top: 1px solid var(--line);
        }

        .footer span {
          color: var(--faint);
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.16em;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 0 10px rgba(255,255,255,0.24);
          }
          50% {
            opacity: 0.52;
            box-shadow: 0 0 18px rgba(255,255,255,0.34);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scrollLine {
          0% {
            transform: scaleY(0);
            transform-origin: top;
          }
          50% {
            transform: scaleY(1);
            transform-origin: top;
          }
          51% {
            transform: scaleY(1);
            transform-origin: bottom;
          }
          100% {
            transform: scaleY(0);
            transform-origin: bottom;
          }
        }

        @media (max-width: 1040px) {
          .hero-inner {
            grid-template-columns: 1fr;
            gap: 54px;
          }

          .right-column {
            width: min(100%, 360px);
            justify-self: start;
          }

          .signal-grid,
          .capability-grid,
          .skill-matrix {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .project-row {
            grid-template-columns: 64px minmax(0, 1fr);
            gap: 20px 28px;
          }

          .project-tags,
          .project-link {
            grid-column: 2;
          }

          .about-grid,
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 56px;
          }
        }

        @media (max-width: 760px) {
          .nav {
            height: 62px;
            padding: 0 20px;
          }

          .nav-links {
            display: none;
          }

          .hero {
            padding: 88px 20px 72px;
          }

          .hero-name {
            font-size: clamp(38px, 12vw, 56px);
            letter-spacing: -0.065em;
          }

          .role-line {
            font-size: 14px;
          }

          .hero-copy {
            font-size: 15px;
          }

          .hero-actions {
            width: 100%;
            flex-direction: column;
            align-items: stretch;
          }

          .btn {
            width: 100%;
          }

          .right-column {
            justify-self: center;
          }

          .lamp {
            transform: scale(0.86);
            transform-origin: top center;
            margin-bottom: -14px;
          }

          .scroll-cue {
            display: none;
          }

          .signal-strip {
            padding-left: 20px;
            padding-right: 20px;
          }

          .section {
            padding: 100px 20px;
          }

          .section-title {
            flex-wrap: wrap;
            margin-bottom: 48px;
          }

          .section-count {
            width: 100%;
            margin-left: 0;
          }

          .signal-grid,
          .capability-grid,
          .skill-matrix {
            grid-template-columns: 1fr;
          }

          .project-row {
            grid-template-columns: 1fr;
            gap: 14px;
            padding: 32px 0;
          }

          .project-meta,
          .project-tags,
          .project-link {
            grid-column: auto;
          }

          .contact-row {
            grid-template-columns: 1fr;
            gap: 6px;
          }

          .profile-link {
            align-items: flex-start;
            flex-direction: column;
          }

          .footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 520px) {
          .nav-status {
            display: none;
          }

          .portrait-frame {
            width: 206px;
            height: 206px;
          }

          .profile-note,
          .skill-cloud {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }

          .fade-in {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <div className="portfolio-root">
        <CustomCursor />
        <NavBar active={active} />
        <Hero />
        <SignalStrip />
        <Capabilities />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}