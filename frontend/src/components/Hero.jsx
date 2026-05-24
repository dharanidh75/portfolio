import { useEffect, useState } from "react";
import dharaniPhoto from "./assets/dharanidh.png";

const ROLES = ["Full-Stack Developer", "Gen AI Enthusiast", "AI Engineer"];

const SKILLS = [
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",   label: "Python"    },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",     label: "React.js"  },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", label: "FastAPI"   },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",     label: "MySQL"     },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",   label: "Docker"    },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",         label: "Git"       },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",     label: "Linux"     },
  { icon: null,                                                                               label: "LangGraph", symbol: "⬡" },
];

export default function Hero({ scrollTo }) {
  const [typedText, setTypedText] = useState("");
  const [photoError, setPhotoError] = useState(false);

  useEffect(() => {
    let ri = 0, ci = 0, del = false, pause = 0;
    const interval = setInterval(() => {
      const t = ROLES[ri];
      if (!del) {
        if (ci < t.length) { setTypedText(t.slice(0, ++ci)); }
        else { pause++; if (pause > 22) { del = true; pause = 0; } }
      } else {
        if (ci > 0) { setTypedText(t.slice(0, --ci)); }
        else { del = false; ri = (ri + 1) % ROLES.length; }
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        {/* Left */}
        <div className="hero-left">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Coimbatore, India — 2025
          </div>

          <div className="hero-name">Dharanidharan</div>

          <div className="hero-typed">
            <span>{typedText}</span>
            <span className="hero-typed-cursor">_</span>
          </div>

          <p className="hero-bio">
            Building intelligent systems that bridge{" "}
            <strong>full-stack engineering</strong> and modern AI —
            from scalable APIs to multi-agent pipelines and RAG architectures.
          </p>

          <div className="hero-cta">
            <button className="btn-primary"    onClick={() => scrollTo("projects")}>View Work</button>
            <button className="btn-secondary"  onClick={() => scrollTo("contact")}>Contact</button>
          </div>
        </div>

        {/* Right */}
        <div className="hero-right">
          <div className="hero-photo-ring">
            <div className="photo-orbit" />
            {!photoError ? (
              <img
                src={dharaniPhoto}
                alt="Dharanidharan"
                onError={() => setPhotoError(true)}
              />
            ) : (
              <div className="hero-photo-placeholder">JD</div>
            )}
          </div>

          <div className="skills-float">
            {SKILLS.map(({ icon, label, symbol }) => (
              <div className="skill-pill" key={label}>
                {icon ? (
                  <img src={icon} alt={label} />
                ) : (
                  <span style={{ fontFamily: "monospace", fontSize: "12px", color: "#1a3a5c", fontWeight: 700 }}>
                    {symbol}
                  </span>
                )}
                <span className="skill-pill-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-cue">
        <span className="scroll-label">Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
