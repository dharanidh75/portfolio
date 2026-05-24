import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import Background from "./components/Background";
import "./styles/globals.css";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "projects", "about", "contact"].map((id) =>
      document.getElementById(id)
    );

    const onScroll = () => {
      let current = "hero";
      sections.forEach((s) => {
        if (s && window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Cursor />
      <Background />
      <Navbar activeSection={activeSection} scrollTo={scrollTo} />
      <main>
        <Hero scrollTo={scrollTo} />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer scrollTo={scrollTo} />
    </>
  );
}
