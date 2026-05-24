import { useEffect, useRef } from "react";

const PROJECTS = [
  {
    num: "01",
    year: "2026",
    title: "SIA",
    fullTitle: "Self-Improving Agentic Learning Platform",
    desc: "An AI-powered adaptive learning platform where a multi-agent system acts as curriculum designer, personal tutor, and live code demonstrator. Features a LangGraph state machine orchestrating a Researcher, Tutor, and Developer agent — each with independent token budgets — plus a contextual industry news feed filtered to the user's active roadmap phase.",
    tags: ["LangGraph", "Multi-Agent AI", "RAG", "FastAPI", "React + Vite", "NVIDIA NIM", "ChromaDB", "Redis", "MySQL", "SSE"],
    link: "https://github.com/dharanidh75",
  },
  {
    num: "02",
    year: "2025",
    title: "ResHub",
    fullTitle: "AI Research Workspace",
    desc: "An AI-powered research workspace with per-project RAG chatbots, multi-agent orchestration via LangGraph, vector DB resource ingestion, task management, and notes — all within an isolated, context-aware AI workspace per project.",
    tags: ["LangGraph", "RAG", "Vector DB", "Agentic AI", "FastAPI", "React.js"],
    link: "https://github.com/dharanidh75/RESHUB",
  },
  {
    num: "03",
    year: "2024",
    title: "TeamCodeX",
    fullTitle: "Collaborative Developer Platform",
    desc: "A collaborative developer platform where teams form groups, assign tasks through a TL-managed system, and track progress via interactive graphs. Features team analytics, contribution views, and role-based workflows.",
    tags: ["React.js", "FastAPI", "MySQL", "Python", "Graph UI"],
    link: "https://github.com/dharanidh75",
  },
  {
    num: "04",
    year: "2024",
    title: "PDF RAG Assistant",
    fullTitle: "Document Intelligence Tool",
    desc: "A document intelligence tool that ingests PDFs into a vector database and enables natural language Q&A using a retrieval-augmented generation pipeline with source-grounded, hallucination-resistant responses.",
    tags: ["RAG", "Vector DB", "Python", "LLM", "FastAPI"],
    link: "https://github.com/dharanidh75/RAG-PDF-ASSISTANT-1-",
  },
];

export default function Projects() {
  const rowsRef = useRef([]);

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
    rowsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div
        className="fade-in"
        ref={(el) => (rowsRef.current[0] = el)}
      >
        <div className="section-header">
          <span className="section-counter">02 /</span>
          <h2 className="section-title">Selected Work</h2>
          <span className="section-meta">04 projects</span>
        </div>
      </div>

      <div className="project-list">
        {PROJECTS.map((p, i) => (
          <div
            key={p.num}
            className="project-row fade-in"
            ref={(el) => (rowsRef.current[i + 1] = el)}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div>
              <div className="proj-num">{p.num}</div>
              <div className="proj-year">{p.year}</div>
            </div>

            <div>
              <div className="proj-title">{p.title}</div>
              <p className="proj-desc">{p.desc}</p>
            </div>

            <div className="proj-tags">
              {p.tags.map((tag) => (
                <span className="proj-tag" key={tag}>{tag}</span>
              ))}
            </div>

            <a
              className="proj-link"
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
