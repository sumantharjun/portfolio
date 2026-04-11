import { Link } from 'react-router-dom';
import './Home.css';

const techStack = [
  'React.js', '.NET Core', 'Python', 'AWS', 'Terraform',
  'Django', 'MySQL', 'DynamoDB', 'LangChain', 'RAG',
];

export default function Home() {
  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        <div className="container hero-content">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">Kolli Sumanth</h1>
          <h2 className="hero-title">
            Full-Stack Developer <span>&</span> AI Enthusiast
          </h2>
          <p className="hero-desc">
            4+ years building scalable web & cloud-native applications.
            Currently exploring Generative AI, LLMs, and agent-based systems.
            Based in Visakhapatnam, India.
          </p>

          <div className="hero-ctas">
            <Link to="/resume" className="btn btn-primary">View Resume</Link>
            <Link to="/projects" className="btn btn-outline">See Projects</Link>
            <Link to="/contact" className="btn btn-outline">Contact Me</Link>
          </div>

          <div className="hero-stack">
            <span className="stack-label">Tech I work with:</span>
            <div className="stack-badges">
              {techStack.map(t => (
                <span key={t} className="badge">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative glow */}
        <div className="hero-glow" aria-hidden="true" />
      </section>

      {/* Quick Stats */}
      <section className="stats-section">
        <div className="container stats-grid">
          {[
            { value: '4+',  label: 'Years Experience'    },
            { value: '2',   label: 'Major Projects'       },
            { value: '8',   label: 'Certifications'       },
            { value: '3x',  label: 'Rock Star of the Month' },
          ].map(({ value, label }) => (
            <div key={label} className="stat-card card">
              <span className="stat-value">{value}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
