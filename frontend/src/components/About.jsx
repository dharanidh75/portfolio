import { useEffect, useRef } from "react";

const SKILL_GROUPS = [
  {
    label: "Languages",
    tags: ["Python", "JavaScript", "SQL"],
  },
  {
    label: "Frameworks",
    tags: ["React.js", "FastAPI", "LangGraph", "LangChain", "PyQt6"],
  },
  {
    label: "AI / ML",
    tags: ["RAG", "Agentic AI", "LLMs", "Vector DB", "Groq API", "ChromaDB", "NVIDIA NIM"],
  },
  {
    label: "Infra & Tools",
    tags: ["MySQL", "Docker", "Redis", "Git", "Vercel", "Linux"],
  },
];

export default function About() {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <div className="fade-in" ref={(el) => (itemsRef.current[0] = el)}>
          <div className="section-header">
            <span className="section-counter">03 /</span>
            <h2 className="section-title">About</h2>
          </div>
        </div>

        <div className="about-grid">
          {/* Left: bio */}
          <div className="about-text fade-in" ref={(el) => (itemsRef.current[1] = el)}>
            <p>
              I'm <strong>Dharanidharan</strong>, a Full-Stack Developer and AI Engineer from
              Coimbatore, India. I build production-ready systems that combine modern web
              engineering with applied AI — specialising in RAG architectures, multi-agent
              systems, and LLM integration.
            </p>
            <p>
              Currently pursuing <em>B.Tech in Computer Science</em> at Sri Shakthi Institute
              of Engineering and Technology, with a product-minded approach to engineering —
              I treat every build as a versioned product with a roadmap.
            </p>
            <p>
              My work spans from AI-adaptive learning platforms (SIA) and agentic research
              workspaces (ResHub) to collaborative developer tools (TeamCodeX) — each solving
              real problems with real architecture.
            </p>
            <div className="about-highlight">
              <span className="about-highlight-icon">🎓</span>
              <span className="about-highlight-text">B.Tech CSE · Expected 2028 · CGPA 7.8</span>
            </div>
          </div>

          {/* Right: skills */}
          <div
            className="skills-grid-section fade-in"
            ref={(el) => (itemsRef.current[2] = el)}
            style={{ transitionDelay: "0.15s" }}
          >
            {SKILL_GROUPS.map(({ label, tags }) => (
              <div className="skill-group" key={label}>
                <div className="skill-group-label">{label}</div>
                <div className="skill-tags">
                  {tags.map((tag) => (
                    <span className="skill-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
