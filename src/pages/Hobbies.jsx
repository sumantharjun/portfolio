import './Hobbies.css';

const hobbies = [
  {
    icon:  '🤖',
    title: 'Learning & AI',
    desc:  'Passionate about AI and actively learning Large Language Models (LLMs), agent-based systems, and Generative AI. Never stop leveling up.',
    tags:  ['LLMs', 'LangChain', 'GenAI', 'RAG'],
  },
  {
    icon:  '♟️',
    title: 'Chess & Puzzles',
    desc:  'Love solving challenges that sharpen problem-solving skills and build confidence. Actively play chess — strategy, patience, and always thinking two moves ahead.',
    tags:  ['Chess', 'Logic', 'Strategy', 'Problem Solving'],
    link:  { label: 'Up for a game? Challenge me on Chess.com', href: 'https://www.chess.com/member/sumanthkolli12' },
  },
  {
    icon:  '✈️',
    title: 'Traveling',
    desc:  'Traveling to explore, adapt, and connect with diverse people and cultures. Every journey brings a fresh perspective.',
    tags:  ['Exploration', 'Culture', 'Adventure'],
  },
  {
    icon:  '🏍️',
    title: 'Riding',
    desc:  'Find inner peace and joy in biking, making every distance meaningful. The open road is where the mind unwinds.',
    tags:  ['Biking', 'Mindfulness', 'Freedom'],
  },
  {
    icon:  '🏸',
    title: 'Sports',
    desc:  'Enthusiastic about badminton and cricket — staying active, building connections, and enjoying the spirit of the game.',
    tags:  ['Badminton', 'Cricket', 'Fitness'],
    link:  { label: 'Find me on Playo', href: 'https://playo.co/profile/0858f464-6218-4fd4-a7be-d44888183a63' },
  },
];

export default function Hobbies() {
  return (
    <main className="hobbies-page">
      <div className="container">
        <div className="page-header">
          <h1 className="section-title">My <span>Hobbies</span></h1>
          <div className="section-line" />
          <p className="hobbies-subtitle">
            Beyond the code — things that keep me curious, active, and inspired.
          </p>
        </div>

        <div className="hobbies-grid">
          {hobbies.map(({ icon, title, desc, tags, link }) => (
            <div key={title} className="hobby-card card">
              <span className="hobby-icon">{icon}</span>
              <h3 className="hobby-title">{title}</h3>
              <p className="hobby-desc">{desc}</p>
              <div className="hobby-tags">
                {tags.map(tag => (
                  <span key={tag} className="badge">{tag}</span>
                ))}
              </div>
              {link && (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hobby-link"
                >
                  {link.label} ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
