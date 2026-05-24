export default function Footer({ scrollTo }) {
  return (
    <footer>
      <div className="footer-logo">JD</div>
      <span className="footer-copy">© 2025 Dharanidharan J</span>
      <button className="footer-back" onClick={() => scrollTo("hero")}>
        Back to top ↑
      </button>
    </footer>
  );
}
