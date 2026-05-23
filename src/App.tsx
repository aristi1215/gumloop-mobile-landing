import './App.css'

const ideas = [
  {
    eyebrow: 'API clarity',
    title: 'Make operational history truly public',
    detail:
      'Expose the same recent-run signal visible in Gumloop history through a documented endpoint: status, timestamps, credit cost, trigger source, workspace, project, saved item, and the run URL.',
    proof: 'Prototype target: /history?page_size=8&item_type=all&scope=global',
  },
  {
    eyebrow: 'Agent ecosystem',
    title: 'Ship a public API MCP gateway',
    detail:
      'Create a focused MCP server with typed tools for listing flows, starting runs, polling results, reading history, and generating integration code so agents can connect Gumloop to production apps.',
    proof: 'Outcome: any agent can build a working Gumloop-powered website from credentials and intent.',
  },
  {
    eyebrow: 'Realtime trust',
    title: 'Add audit and run webhooks',
    detail:
      'Offer signed webhook subscriptions for run started, run failed, run completed, credit threshold, member changes, and audit events, with retry logs and delivery replay.',
    proof: 'Outcome: mobile push alerts, Slack ops channels, SIEM feeds, and customer dashboards.',
  },
]

const stats = ['Mobile runs', 'Live history', 'Push alerts', 'Agent-ready API']

function App() {
  return (
    <main className="landing">
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />

      <section className="hero-section" aria-labelledby="page-title">
        <div className="nav-pill">
          <span className="pulse-dot" />
          Gumloop mobile control room concept
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Built to earn a seat on the Gumloop team</p>
          <h1 id="page-title">Run every workflow from your pocket.</h1>
          <p>
            A cinematic landing page for a mobile app concept that monitors
            Gumloop automations, restarts failed runs, and sends operators the
            signal they need before a customer notices.
          </p>
        </div>

        <div className="video-stage" aria-label="Video placeholder">
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
          <div className="floating-card card-history">
            <span>Run history</span>
            <strong>8 latest global runs</strong>
          </div>
          <div className="floating-card card-alert">
            <span>Webhook</span>
            <strong>Failure alert pushed</strong>
          </div>

          <div className="video-shell">
            <div className="video-toolbar">
              <span />
              <span />
              <span />
              <p>demo-video.mov</p>
            </div>
            <div className="phone-preview">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="run-card success">
                  <span>Lead enrichment</span>
                  <strong>Completed</strong>
                </div>
                <div className="run-card active">
                  <span>Support triage</span>
                  <strong>Running</strong>
                </div>
                <div className="run-card failed">
                  <span>Invoice parser</span>
                  <strong>Restart run</strong>
                </div>
              </div>
            </div>
            <div className="play-button" aria-hidden="true">
              <span />
            </div>
            <p className="placeholder-label">
              Video placeholder - replace with the mobile app recording
            </p>
          </div>
        </div>

        <div className="stat-row" aria-label="Feature highlights">
          {stats.map((stat) => (
            <span key={stat}>{stat}</span>
          ))}
        </div>

        <a className="more-ideas" href="#ideas">
          <span>More ideas</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 5v14m0 0 6-6m-6 6-6-6" />
          </svg>
        </a>
      </section>

      <section className="ideas-section" id="ideas" aria-labelledby="ideas-title">
        <div className="section-heading">
          <p className="eyebrow">What I would build next</p>
          <h2 id="ideas-title">Three product bets that make Gumloop easier to adopt, monitor, and trust.</h2>
        </div>

        <div className="ideas-grid">
          {ideas.map((idea, index) => (
            <article className="idea-card" key={idea.title}>
              <div className="idea-index">0{index + 1}</div>
              <p className="eyebrow">{idea.eyebrow}</p>
              <h3>{idea.title}</h3>
              <p>{idea.detail}</p>
              <div className="proof-pill">{idea.proof}</div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
