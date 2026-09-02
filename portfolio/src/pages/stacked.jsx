import { Link } from 'react-router-dom'
import './projectpage.css'

function Stacked() {
  return (
    <div className="project-page">
      <Link to="/" className="back-link">← Back Home</Link>

      <section className="project-hero">
        <p className="project-label">FULL-STACK IOS APPLICATION</p>
        <h1>Stacked</h1>

        <p className="project-tagline">
          A poker bankroll tracking app that helps players track sessions,
          analyze performance, manage home game payouts, and compete with
          friends through groups and leaderboards.
        </p>

        <div className="project-buttons">
          {/* Replace with your GitHub URL if the repository is public */}
          <a
            href="https://github.com/guzmanJoseph/stacked"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>

          <a
            href="https://apps.apple.com/us/app/stackedgpt/id6800078440"
            target="_blank"
            rel="noreferrer"
          >
            App Store
          </a>
        </div>
      </section>

      <section className="project-section">
        <h2>Overview</h2>

        <p>
          Stacked is a full-stack poker bankroll management application built
          to give players an easier way to understand their poker performance.
          Players can record sessions, track profit and loss, analyze statistics
          such as hourly rate and win rate, manage home game payouts, and create
          groups to compare results with friends. I developed Stacked from the
          initial idea through deployment and published it on the Apple App Store.
        </p>
      </section>

      <section className="project-grid">
        <div className="project-card">
          <h3>My Role</h3>

          <p>
            I designed and developed Stacked independently, building the
            frontend interface, backend database architecture, authentication
            system, poker tracking features, group functionality, and payout
            tools. I also converted the React application into an iOS app,
            tested it across devices, and managed the App Store deployment
            process.
          </p>
        </div>

        <div className="project-card">
          <h3>Tech Stack</h3>

          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>Supabase</li>
            <li>PostgreSQL</li>
            <li>Capacitor</li>
            <li>Chart.js</li>
            <li>Vercel</li>
            <li>iOS / Xcode</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Technical Highlights</h3>

          <ul>
            <li>Built session tracking for buy-ins, cash-outs, hours, and profit/loss</li>
            <li>Developed analytics for hourly rate, win rate, and bankroll performance</li>
            <li>Implemented authentication and persistent user data with Supabase</li>
            <li>Created groups and leaderboards for comparing results with friends</li>
            <li>Built a home game payout system for calculating and sharing settlements</li>
            <li>Converted the React application into a native iOS experience using Capacitor</li>
            <li>Published and maintained the application on the Apple App Store</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Stacked