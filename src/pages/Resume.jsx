import './Resume.css';

const skills = [
  { category: 'Languages',        items: ['C#', 'Python', 'JavaScript'] },
  { category: 'Frameworks',       items: ['React.js', 'Django', 'ASP.NET Web API', 'Serverless Framework', 'Entity Framework'] },
  { category: 'Cloud',            items: ['AWS EC2', 'AWS S3', 'AWS Lambda', 'CloudFormation', 'Terraform', 'CI/CD'] },
  { category: 'DevOps & Tools',   items: ['VS Code', 'Visual Studio', 'GitHub', 'Postman', 'AWS Pipeline'] },
  { category: 'Databases',        items: ['MySQL', 'DynamoDB'] },
  { category: 'AI & GenAI',       items: ['LLMs', 'LangChain', 'RAG', 'Embeddings', 'Prompt Engineering', 'Agent-based AI'] },
  { category: 'Operating Systems',items: ['Windows', 'Linux (Ubuntu)', 'macOS'] },
];

const certifications = [
  'AWS Certified Developer – Associate (DVA-C02)',
  'Python Developer Certificate – W3Schools',
  'PostMan API Fundamentals Student Expert',
  'Prompt Engineering for AI Bootcamp 2025',
  'AZ-900 – Microsoft Azure Fundamentals',
  'Oracle Cloud Infrastructure – Application Integration Professional',
  'Oracle Cloud Infrastructure – Multicloud Architect Professional',
  'Katalon Web UI Design',
];

const awards = [
  {
    title: 'Pinnacle Award',
    desc:  'Awarded for consistently exceeding project goals and demonstrating exceptional teamwork and impactful contributions at Hexaware.',
  },
  {
    title: 'Hall of Fame',
    desc:  'Honored for consistent excellence and significant contributions in successfully completing a key project at Hexaware.',
  },
  {
    title: 'Rock Star of the Month (3×)',
    desc:  'Awarded thrice for outstanding performance, innovation, and contributions to project success.',
  },
];

const languages = [
  { lang: 'English',  level: 'Proficient'  },
  { lang: 'Telugu',   level: 'Native'       },
  { lang: 'Hindi',    level: 'Fluent'       },
  { lang: 'Kannada',  level: 'Intermediate' },
  { lang: 'Tamil',    level: 'Beginner'     },
];

const development = [
  'Regularly attend webinars and explore new concepts in AI, ML, and DSA to stay updated with industry trends.',
  'Currently gaining hands-on experience in Agentic AI systems using LangChain and experimenting with AI-driven workflows.',
  'Learning about LLMs, Retrieval-Augmented Generation (RAG), and practical prompt engineering techniques.',
  'Built a project using the Wav2Lip GenAI model to generate videos from text and image inputs.',
];

export default function Resume() {
  return (
    <main className="resume-page">
      <div className="container">
        <div className="resume-page-header">
          <div>
            <h1 className="section-title">My <span>Resume</span></h1>
            <div className="section-line" />
          </div>
          <a
            href="/Sumanth_Resume.pdf"
            download="Sumanth_Kolli_Resume.pdf"
            className="btn btn-primary resume-download-btn"
          >
            ⬇ Download Resume
          </a>
        </div>

        {/* Summary */}
        <section className="resume-section">
          <h2 className="resume-section-title">Summary</h2>
          <div className="card summary-card">
            <p>
              Full-stack engineer with <strong>4+ years of experience</strong> building cloud-hosted applications
              using C# .NET and Python on the backend, React on the frontend, and AWS for infrastructure —
              including an <strong>AWS Developer Associate</strong> certification. Joined my current project from
              day one, participating in architecture discussions from the ground up. Over the past five months,
              moved into an R&amp;D team deepening expertise in <strong>LLMs, RAG pipelines using LangChain,
              and agentic AI</strong>. Recognised with the Pinnacle Award in 2025 and three Rockstar of the Month awards.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="resume-section">
          <h2 className="resume-section-title">Work Experience</h2>
          <div className="timeline">
            <div className="timeline-item card">
              <div className="timeline-content">
                <div className="tl-header">
                  <div>
                    <h3>Software Engineer</h3>
                    <span className="tl-company">Hexaware Technologies</span>
                  </div>
                  <span className="tl-date badge">June 2022 – Present</span>
                </div>
                <ul className="tl-bullets">
                  <li>Worked on critical projects — <strong>Conduent Meditrac</strong> (Healthcare System) and <strong>Amplify</strong> (Educational Assessment Platform), focusing on performance optimisation.</li>
                  <li>Conducted a comprehensive analysis of existing applications during the Discovery Phase, identifying key areas for optimisation and proposing actionable improvements.</li>
                  <li>Developed scalable RESTful APIs using the Rapidx Tool (low-code API platform), reducing clean architecture overhead by <strong>30%</strong>.</li>
                  <li>Leveraged AWS for cloud deployment and Git for version control in CI/CD pipelines, reducing deployment time by <strong>15%</strong>.</li>
                  <li>Implemented Terraform to automate packaging and deployment processes, significantly reducing deployment failures.</li>
                  <li>Managed library dependencies to ensure compatibility and performance across environments.</li>
                  <li>Utilised GitHub Copilot and Claude to enhance development productivity and code efficiency by <strong>30%</strong>.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="resume-section">
          <h2 className="resume-section-title">Education</h2>
          <div className="card edu-card">
            <div className="edu-header">
              <div>
                <h3>Bachelor of Technology – Electronics &amp; Communication</h3>
                <p>Jawaharlal Nehru Technological University, Kakinada</p>
              </div>
              <span className="badge">July 2018 – June 2022</span>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="resume-section">
          <h2 className="resume-section-title">Skills</h2>
          <div className="skills-grid">
            {skills.map(({ category, items }) => (
              <div key={category} className="skill-group card">
                <h4 className="skill-category">{category}</h4>
                <div className="skill-badges">
                  {items.map(item => (
                    <span key={item} className="badge">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="resume-section">
          <h2 className="resume-section-title">Certifications</h2>
          <div className="cert-grid">
            {certifications.map((cert, i) => (
              <div key={i} className="cert-card card">
                <span className="cert-icon">✦</span>
                <p>{cert}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section className="resume-section">
          <h2 className="resume-section-title">Awards &amp; Recognition</h2>
          <div className="awards-grid">
            {awards.map(({ title, desc }) => (
              <div key={title} className="award-card card">
                <span className="award-icon">🏆</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Development */}
        <section className="resume-section">
          <h2 className="resume-section-title">Professional Development</h2>
          <ul className="dev-list">
            {development.map((item, i) => (
              <li key={i} className="dev-item card">
                <span className="dev-bullet" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Languages */}
        <section className="resume-section">
          <h2 className="resume-section-title">Languages</h2>
          <div className="languages-grid">
            {languages.map(({ lang, level }) => (
              <div key={lang} className="lang-card card">
                <span className="lang-name">{lang}</span>
                <span className="badge">{level}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
