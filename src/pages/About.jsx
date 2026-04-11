import './About.css';

const languages = [
  { lang: 'English',  level: 'Proficient'   },
  { lang: 'Telugu',   level: 'Native'        },
  { lang: 'Hindi',    level: 'Fluent'        },
  { lang: 'Kannada',  level: 'Intermediate'  },
  { lang: 'Tamil',    level: 'Beginner'      },
];

const awards = [
  {
    title: 'Pinnacle Award',
    desc: 'Awarded for consistently exceeding project goals and demonstrating exceptional teamwork and impactful contributions at Hexaware.',
  },
  {
    title: 'Hall of Fame',
    desc: 'Honored for consistent excellence and significant contributions in successfully completing a key project at Hexaware.',
  },
  {
    title: 'Rock Star of the Month (3x)',
    desc: 'Awarded thrice for outstanding performance, innovation, and contributions to project success.',
  },
];

const development = [
  'Regularly attend webinars and explore new concepts in AI, ML, and DSA to stay updated with industry trends.',
  'Currently gaining hands-on experience in Agentic AI systems using LangChain and experimenting with AI-driven workflows.',
  'Learning about LLMs, Retrieval-Augmented Generation (RAG), and practical prompt engineering techniques.',
  'Built a project using the Wav2Lip GenAI model to generate videos from text and image inputs.',
];

export default function About() {
  return (
    <main className="about-page">
      <div className="container">
        <div className="page-header">
          <h1 className="section-title">About <span>Me</span></h1>
          <div className="section-line" />
        </div>

        {/* Summary */}
        <div className="about-summary card">
          <p>
            Full-Stack Developer with <strong>4+ years of experience</strong> building and deploying scalable
            web and cloud-native applications using .NET Core, React, REST APIs, SQL, and Azure/AWS Cloud.
            Skilled in delivering end-to-end solutions including user-facing websites and cloud deployments.
          </p>
          <p>
            Currently expanding expertise in <strong>Generative AI</strong> application development —
            Azure OpenAI, LLM-based systems, AI agents, RAG architectures, Semantic Kernel, and advanced
            prompt engineering. Passionate about AI and actively learning Large Language Models (LLMs)
            and agent-based systems.
          </p>
        </div>

        {/* Awards */}
        <section className="about-section">
          <h2 className="sub-title">Awards <span>&</span> Recognition</h2>
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
        <section className="about-section">
          <h2 className="sub-title">Professional <span>Development</span></h2>
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
        <section className="about-section">
          <h2 className="sub-title">Languages <span>Spoken</span></h2>
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
