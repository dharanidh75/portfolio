import { useEffect, useState } from "react";

const LINKS = [
  { id: "hero",     label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about",    label: "About" },
  { id: "contact",  label: "Contact" },
];

export default function Navbar({ activeSection, scrollTo }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="nav-logo" onClick={() => scrollTo("hero")}>JD</div>

      <ul className="nav-links">
        {LINKS.map(({ id, label }) => (
          <li
            key={id}
            className={activeSection === id ? "active" : ""}
            onClick={() => scrollTo(id)}
          >
            {label}
          </li>
        ))}
      </ul>

      <div className="nav-status">
        <span className="status-dot" />
        Available for work
      </div>
    </nav>
  );
}
