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

export default function Resume() {
  return (
    <main className="resume-page">
      <div className="container">
        <div className="page-header">
          <h1 className="section-title">My <span>Resume</span></h1>
          <div className="section-line" />
        </div>

        {/* Experience */}
        <section className="resume-section">
          <h2 className="resume-section-title">Work Experience</h2>
          <div className="timeline">
            <div className="timeline-item card">
              <div className="timeline-dot" />
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
      </div>
    </main>
  );
}
