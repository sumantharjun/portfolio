import './Projects.css';

/*
  ┌─────────────────────────────────────────────────────────────────┐
  │  ADD YOUR PROJECTS HERE                                          │
  │  Each object in the `projects` array becomes a card on the page.│
  │                                                                  │
  │  Fields:                                                         │
  │    title       – project name                                    │
  │    desc        – short description (1-2 sentences)              │
  │    tags        – array of tech/tag strings                       │
  │    github      – GitHub repo URL (or '' to hide the button)      │
  │    live        – live demo URL   (or '' to hide the button)      │
  └─────────────────────────────────────────────────────────────────┘
*/
const projects = [
  {
    title:  'School ERP',
    desc:   'An end-to-end School ERP system with a Python/ASP.NET backend and a React client — covering student management, records, and school operations.',
    tags:   ['Python', 'ASP.NET', 'React', 'ERP', 'SQL'],
    github: 'https://github.com/sumantharjun/SCHOOL-ERP',
    live:   '',
  },
  {
    title:  'Mock Test Generation',
    desc:   'An AI-assisted platform that auto-generates mock tests from textbook content. Built with a Python backend and a Next.js frontend connected to Supabase.',
    tags:   ['Python', 'Next.js', 'Supabase', 'AI', 'TypeScript'],
    github: 'https://github.com/sumantharjun/MockTestGeneration',
    live:   '',
  },
  {
    title:  'Cafe Cheroney',
    desc:   'Full UI redesign of a cafe website with a warm & cozy aesthetic — glassmorphism header, smooth animations, admin panel, and a rich design system built from scratch.',
    tags:   ['JavaScript', 'UI Design', 'Admin Panel', 'CSS Animations'],
    github: 'https://github.com/sumantharjun/Cafe',
    live:   '',
  },
  {
    title:  'Billing Management System',
    desc:   'A full-featured billing platform with client-specific pricing rules, fixed value pricing, invoice generation, and a super-admin dashboard. Built with Next.js and Supabase.',
    tags:   ['TypeScript', 'Next.js', 'Supabase', 'Tailwind CSS', 'JWT'],
    github: 'https://github.com/sumantharjun/BillingManagementSystem',
    live:   '',
  },
  {
    title:  'GoMandir',
    desc:   'A Next.js + Supabase web app for discovering and exploring temples — built with TypeScript, Tailwind CSS, and secure JWT-based authentication.',
    tags:   ['TypeScript', 'Next.js', 'Supabase', 'Tailwind CSS', 'JWT'],
    github: 'https://github.com/sumantharjun/GoMandir',
    live:   '',
  },
  {
    title:  'News App',
    desc:   'A clean, responsive news aggregator app built with Next.js and TypeScript — browse and read the latest news across categories in a modern UI.',
    tags:   ['TypeScript', 'Next.js', 'News API'],
    github: 'https://github.com/sumantharjun/news',
    live:   '',
  },
  // ── Add more projects below this line ───────────────────────────
  // {
  //   title:  'Project Name',
  //   desc:   'Short description.',
  //   tags:   ['React', 'AWS'],
  //   github: 'https://github.com/sumantharjun/...',
  //   live:   'https://...',
  // },
];

export default function Projects() {
  return (
    <main className="projects-page">
      <div className="container">
        <div className="page-header">
          <h1 className="section-title">My <span>Projects</span></h1>
          <div className="section-line" />
          <p className="projects-subtitle">
            A collection of things I've built — from full-stack apps to AI experiments.
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="projects-empty card">
            <span className="empty-icon">🚧</span>
            <p>Projects coming soon. Check back later!</p>
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map(({ title, desc, tags, github, live }) => (
              <div key={title} className="project-card card">
                <div className="project-top">
                  <span className="project-folder">◈</span>
                  <div className="project-links">
                    {github && (
                      <a href={github} target="_blank" rel="noreferrer" className="project-link" aria-label="GitHub">
                        GitHub ↗
                      </a>
                    )}
                    {live && (
                      <a href={live} target="_blank" rel="noreferrer" className="project-link" aria-label="Live demo">
                        Live ↗
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="project-title">{title}</h3>
                <p className="project-desc">{desc}</p>
                <div className="project-tags">
                  {tags.map(tag => (
                    <span key={tag} className="badge">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
