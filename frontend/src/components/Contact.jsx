import { useEffect, useRef } from "react";

const LINKS = [
  {
    href: "mailto:dharanidh777@gmail.com",
    label: "Email",
    value: "dharanidh777@gmail.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" stroke="#1a3a5c" strokeWidth="1.5" fill="none">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    href: "https://github.com/dharanidh75",
    label: "GitHub",
    value: "github.com/dharanidh75",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" stroke="#1a3a5c" strokeWidth="1.5" fill="none">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/dharanidharan-j-7757a9321",
    label: "LinkedIn",
    value: "Dharanidharan J",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" stroke="#1a3a5c" strokeWidth="1.5" fill="none">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
];

const INFO = [
  { key: "Status",    val: "Open to Work",      accent: true  },
  { key: "Location",  val: "Coimbatore, India",  accent: false },
  { key: "Education", val: "B.Tech CSE · 2028",  accent: false },
  { key: "Focus",     val: "AI Eng · Full-Stack", accent: false },
  { key: "Phone",     val: "+91 93637 78981",    accent: false },
  { key: "Response",  val: "Within 24hrs",       accent: true  },
];

export default function Contact() {
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
    <section id="contact" className="contact-section">
      <div className="fade-in" ref={(el) => (itemsRef.current[0] = el)}>
        <div className="section-header">
          <span className="section-counter">04 /</span>
          <h2 className="section-title">Contact</h2>
        </div>
      </div>

      <div className="contact-inner">
        <div className="fade-in" ref={(el) => (itemsRef.current[1] = el)}>
          <h3 className="contact-headline">
            Let's build<br /><span>something great.</span>
          </h3>
          <p className="contact-sub">
            Open to internships, collaborations, and full-time opportunities in AI engineering,
            full-stack development, and agentic systems.
          </p>
          <div className="contact-links">
            {LINKS.map(({ href, label, value, icon }) => (
              <a
                key={label}
                className="contact-link"
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                <div className="contact-link-icon">{icon}</div>
                <div className="contact-link-text">
                  <div className="contact-link-label">{label}</div>
                  <div className="contact-link-value">{value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div
          className="contact-info-panel fade-in"
          ref={(el) => (itemsRef.current[2] = el)}
          style={{ transitionDelay: "0.15s" }}
        >
          {INFO.map(({ key, val, accent }) => (
            <div className="contact-info-line" key={key}>
              <span className="cil-key">{key}</span>
              <span className={`cil-val${accent ? " accent" : ""}`}>{val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
