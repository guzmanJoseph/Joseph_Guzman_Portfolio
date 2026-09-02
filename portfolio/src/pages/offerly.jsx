import { Link } from 'react-router-dom'
import './projectpage.css'

function Offerly() {
  return (
    <div className="project-page">
      <Link to="/" className="back-link">← Back Home</Link>

      <section className="project-hero">
        <p className="project-label">FULL-STACK WEB APPLICATION</p>
        <h1>Offerly</h1>

        <p className="project-tagline">
          A job application management platform that helps users organize
          applications, interviews, offers, follow-ups, and recruiting activity
          from one centralized dashboard.
        </p>

        <div className="project-buttons">
          {/* Replace these with your actual links */}
          <a
            href="https://github.com/guzmanJoseph/offerly"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>

          <a
            href="https://offer-io.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Live Site
          </a>
        </div>
      </section>

      <section className="project-section">
        <h2>Overview</h2>

        <p>
          Offerly is a full-stack job application tracking platform designed to
          simplify the internship and job search process. The application gives
          users a centralized dashboard for organizing applications, interviews,
          offers, rejections, follow-ups, and networking activity. It also
          integrates with Gmail to help identify recruiting-related emails and
          reduce the amount of manual application tracking required.
        </p>
      </section>

      <section className="project-grid">
        <div className="project-card">
          <h3>My Role</h3>

          <p>
            I designed and developed Offerly's frontend, backend integration,
            database structure, authentication flow, application tracking
            system, and Gmail integration. I focused on creating a clean
            dashboard that turns scattered job-search information into an
            organized workflow that users can easily manage.
          </p>
        </div>

        <div className="project-card">
          <h3>Tech Stack</h3>

          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>Vite</li>
            <li>Supabase</li>
            <li>PostgreSQL</li>
            <li>Gmail API</li>
            <li>OAuth 2.0</li>
            <li>Vercel</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Technical Highlights</h3>

          <ul>
            <li>Built a centralized dashboard for tracking the entire job application lifecycle</li>
            <li>Implemented Gmail OAuth authentication and email integration</li>
            <li>Developed automated email scanning for recruiting and application updates</li>
            <li>Created application categories for interviews, offers, rejections, and follow-ups</li>
            <li>Built persistent user authentication and application storage with Supabase</li>
            <li>Designed networking and job-search organization features</li>
            <li>Deployed the full-stack application using Vercel</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Offerly