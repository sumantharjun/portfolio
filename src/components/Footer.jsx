import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-logo">KS<span>.</span></span>
        <p className="footer-text">
          Built with React &mdash; Kolli Sumanth &copy; {new Date().getFullYear()}
        </p>
        <div className="footer-links">
          <a href="mailto:sumanthkolli12@gmail.com" aria-label="Email">Email</a>
          <a href="https://www.linkedin.com/in/kolli-sumanth-84954b186/" target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a>
          <a href="https://github.com/sumantharjun" target="_blank" rel="noreferrer" aria-label="GitHub">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
