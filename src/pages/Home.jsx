import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import './Home.css';

const stack = [
  ['C#', 'Python', 'JavaScript', 'React.js', 'ASP.NET Core', 'Django'],
  ['AWS', 'Terraform', 'CI/CD', 'MySQL', 'DynamoDB', 'Serverless'],
  ['LLMs', 'LangChain', 'RAG', 'Prompt Engineering', 'Agentic AI'],
];

const stats = [
  { n: '4+',   l: 'Years Experience'      },
  { n: '2',    l: 'Enterprise Products'   },
  { n: '3×',   l: 'Rockstar of the Month' },
  { n: '2025', l: 'Pinnacle Award'        },
];

const featured = [
  {
    title:  'School ERP',
    desc:   'End-to-end ERP system covering student management, records, and school operations. Python backend + .NET API + React client.',
    tags:   ['Python', 'ASP.NET', 'React', 'SQL'],
    github: 'https://github.com/sumantharjun/SCHOOL-ERP',
  },
  {
    title:  'Mock Test Generation',
    desc:   'AI-assisted platform that auto-generates mock tests from textbook content using LangChain to process and extract questions from raw text.',
    tags:   ['Python', 'LangChain'],
    github: 'https://github.com/sumantharjun/MockTestGeneration',
  },
  {
    title:  'Billing Management System',
    desc:   'Full billing platform with client-specific pricing rules, invoice generation, and a super-admin dashboard.',
    tags:   ['TypeScript', 'Next.js', 'Supabase', 'JWT'],
    github: 'https://github.com/sumantharjun/BillingManagementSystem',
  },
];

export default function Home() {
  const fadeRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); }),
      { threshold: 0.08 }
    );
    fadeRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const ref = i => el => { fadeRefs.current[i] = el; };

  return (
    <main className="home">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-glow-primary" />
          <div className="hero-glow-secondary" />
          <div className="hero-grid" />
        </div>

        <div className="container hero-inner">
          <p className="hero-tag">
            <span className="status-dot" />
            full-stack engineer &nbsp;·&nbsp; aws certified developer &nbsp;·&nbsp; building in ai
          </p>

          <h1 className="hero-name">
            Kolli<br />
            <span className="hero-name-accent">Sumanth</span>
          </h1>

          <p className="hero-pitch">
            Four years shipping production software — React, .NET, Python, AWS.
            Joined my current project from <em>architecture kickoff</em>, not just the coding phase.
            Now five months into R&amp;D: LLM pipelines, RAG, and agentic AI with LangChain.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">View Projects ↗</Link>
            <a
              href="/Sumanth_Resume.pdf"
              download="Sumanth_Kolli_Resume.pdf"
              className="btn btn-outline"
            >
              Download Resume
            </a>
          </div>

          <div className="hero-links">
            <a href="mailto:sumanthkolli12@gmail.com">sumanthkolli12@gmail.com</a>
            <span className="dot">·</span>
            <a href="https://www.linkedin.com/in/kolli-sumanth-84954b186/" target="_blank" rel="noreferrer">LinkedIn</a>
            <span className="dot">·</span>
            <a href="https://github.com/sumantharjun" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────── */}
      <section className="stats-band" ref={ref(0)}>
        <div className="container stats-row">
          {stats.map(({ n, l }) => (
            <div key={l} className="stat-item">
              <span className="stat-n">{n}</span>
              <span className="stat-l">{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Architecture story ─────────────────────────────────── */}
      <section className="arch-section fade-up" ref={ref(1)}>
        <div className="container arch-inner">
          <p className="section-label">// what shaped me</p>
          <blockquote className="arch-quote">
            "I joined my current project from day one — part of the architecture
            discussions from the very beginning. That early exposure gave me a strong
            foundation in how scalable systems are actually <em>designed</em>, not just coded."
          </blockquote>
          <p className="arch-attr">— The thing that separates me</p>
        </div>
      </section>

      {/* ── Stack ─────────────────────────────────────────────── */}
      <section className="stack-section fade-up" ref={ref(2)}>
        <div className="container">
          <p className="section-label">// stack</p>
          <div className="stack-lines">
            {stack.map((row, i) => (
              <p key={i} className="stack-row">{row.join('  ·  ')}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Selected Work ─────────────────────────────────────── */}
      <section className="work-section fade-up" ref={ref(3)}>
        <div className="container">
          <div className="work-header">
            <p className="section-label">// selected work</p>
            <Link to="/projects" className="view-all">all projects ↗</Link>
          </div>
          <div className="work-grid">
            {featured.map(({ title, desc, tags, github }) => (
              <div key={title} className="work-card card">
                <h3 className="work-title">{title}</h3>
                <p className="work-desc">{desc}</p>
                <div className="work-footer">
                  <div className="work-tags">
                    {tags.map(t => <span key={t} className="badge">{t}</span>)}
                  </div>
                  <a href={github} target="_blank" rel="noreferrer" className="work-link">
                    GitHub ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Currently / Open to ────────────────────────────────── */}
      <section className="split-section fade-up" ref={ref(4)}>
        <div className="container split-inner">
          <div className="split-block">
            <p className="section-label">// currently</p>
            <p className="split-text">
              Deepening in <strong>agentic AI</strong> — RAG pipelines, LangChain orchestration,
              and LLM systems that solve real problems. Five months in R&amp;D, and the depth keeps growing.
            </p>
          </div>
          <div className="split-rule" />
          <div className="split-block">
            <p className="section-label">// open to</p>
            <p className="split-text">
              Roles where full-stack engineering and AI compound each other.
              Particularly drawn to <strong>Azure or AWS hosted applications</strong> and teams
              that take architecture as seriously as delivery.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
