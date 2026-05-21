import { Link } from 'react-router-dom'

function GatorKeys() {
  return (
    <div className="project-page">
      <Link to="/" className="back-link">← Back Home</Link>

      <section className="project-hero">
        <p className="project-label">Full-Stack Web Application</p>

        <h1>GatorKeys</h1>

        <p className="project-tagline">
          GatorKeys is a full-stack web application that serves as a student-focused apartment marketplace and community hub. The platform allows users to browse and manage apartment listings, communicate securely through direct messaging, and read/write community reviews.
        </p>

        <div className="project-buttons">
          <a href="https://github.com/guzmanJoseph/GatorKeys" target="_blank" rel="noreferrer">
            GitHub Repo
          </a>
          <a href="https://youtu.be/WO60uXCTHJg" target="_blank" rel="noreferrer">
            Watch Demo
          </a>
          <a href="https://gatorkeys.vercel.app/" target="_blank" rel="noreferrer">
            Live Site
          </a>
        </div>
      </section>

      <section className="project-section">
        <h2>Overview</h2>
        <p>
          GatorKeys is a full-stack housing platform designed to help University
          of Florida students search for housing, post listings, and interact with
          housing-related content in one centralized place. The project was built
          with a React frontend and Firebase backend, with real-time data updates
          and user authentication.
        </p>
      </section>

      <section className="project-grid">
        <div className="project-card">
          <h3>My Role</h3>
          <p>
            I contributed to the frontend interface, user flow, and Firebase
            integration while helping design pages that made the platform feel
            clean, usable, and student-focused.
          </p>
        </div>

        <div className="project-card">
          <h3>Tech Stack</h3>
          <ul>
            <li>React</li>
            <li>Firebase Authentication</li>
            <li>Firebase Realtime Database</li>
            <li>Vercel</li>
            <li>Render</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Technical Highlights</h3>
          <ul>
            <li>Designed and deployed a Firebase database with over 10,000 records storing apartment listings, user messages, and reviews.</li>
            <li>Built and maintained the back-end architecture using Firebase Authentication and managed data transfer through JSON objects for real-time synchronization.</li>
            <li>Uploaded and maintained the backend on Render and the frontend on Vercel.</li>
          </ul>
        </div>


      </section>
    </div>
  )
}

export default GatorKeys