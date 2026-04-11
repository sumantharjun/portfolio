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
  // ── Example (replace / delete this and add your own below) ──────
  {
    title:  'Wav2Lip GenAI Project',
    desc:   'Built a project using the Wav2Lip GenAI model to generate videos from text and image inputs — helped understand AI integration and workflow design.',
    tags:   ['Python', 'GenAI', 'Wav2Lip', 'AI Workflow'],
    github: '',
    live:   '',
  },
  // ── Add more projects below this line ───────────────────────────
  // {
  //   title:  'Project Name',
  //   desc:   'Short description.',
  //   tags:   ['React', 'AWS', 'Python'],
  //   github: 'https://github.com/...',
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
                        GitHub
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
