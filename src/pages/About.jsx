import './About.css';

export default function About() {
  return (
    <main className="about-page">
      <div className="container">

        {/* ── Header ────────────────────────────────────── */}
        <div className="page-header">
          <h1 className="section-title">About <span>Me</span></h1>
          <div className="section-line" />
        </div>

        {/* ── Intro ─────────────────────────────────────── */}
        <div className="about-hero">
          <div className="about-photo-wrap">
            <img src="/sumanth.png" alt="Sumanth Kolli" className="about-photo" />
            <div className="about-photo-glow" aria-hidden="true" />
          </div>

          <div className="about-story">
            <h2 className="about-name">Hey, I'm Sumanth.</h2>
            <p>
              I studied Electronics & Communication Engineering — not Computer Science.
              Got into coding entirely on my own, figured out the web, and by graduation
              I was already writing React apps and .NET APIs.
            </p>
            <p>
              Hexaware gave me my first real opportunity in 2022 — and I made the most of it.
              From day one I wasn't just building features, I was in the room for architecture
              decisions. That exposure is what shaped how I think about building software.
            </p>
          </div>
        </div>

        {/* ── How I work ────────────────────────────────── */}
        <section className="about-section">
          <p className="section-label">// how i work</p>
          <div className="how-grid">
            <div className="how-card card">
              <h4>I own things end-to-end</h4>
              <p>Database to deployment. I don't hand off at the API boundary — I want to understand the full system and take responsibility for how it behaves in production.</p>
            </div>
            <div className="how-card card">
              <h4>I think in systems</h4>
              <p>Being in architecture discussions early taught me to ask "why" before "how". Most bugs are design decisions made too fast.</p>
            </div>
            <div className="how-card card">
              <h4>I take quality personally</h4>
              <p>Three Rockstar of the Month awards and a Pinnacle Award didn't come from shipping fast — they came from caring about what gets shipped.</p>
            </div>
          </div>
        </section>

        {/* ── Family ────────────────────────────────────── */}
        <section className="about-section">
          <p className="section-label">// family</p>
          <div className="card about-card">
            <p>
              Family first — not as something I say, just how I'm wired. I'm a single child,
              though a bunch of cousins would argue otherwise. Two of them I think about the most:
              my sister, calm, beautiful, and hopefully smart — now getting ready
              to step into the IT world. And my little brother — a little warrior
              with the kind of energy that makes him capable of absolutely anything.
            </p>
          </div>
        </section>

        {/* ── One more thing ────────────────────────────── */}
        <section className="about-section">
          <p className="section-label">// one more thing</p>
          <div className="card about-card">
            <p>
              Languages are where my curiosity shows up most visibly. Not the grammar —
              the moment a new pattern clicks and a connection opens up that wasn't there before.
              I've picked up five so far, two of them while travelling over the last three years.
              That pull toward learning something completely new and making more connections from it —
              I don't think it ever turns off.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
