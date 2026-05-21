import { Link } from 'react-router-dom'
import './projectpage.css'

function PicklePortal() {
  return (
    <div className="project-page">
      <Link to="/" className="back-link">← Back Home</Link>

      <section className="project-hero">
        <p className="project-label">FULL-STACK WEB APPLICATION</p>
        <h1>Personal Website</h1>
        <p className="project-tagline">
          A responsive personal portfolio website designed to showcase software engineering projects, technical skills, and interactive project case studies.
        </p>

        <div className="project-buttons">
          <a href="https://github.com/guzmanJoseph/Joseph_Guzman_Portfolio" target="_blank" rel="noreferrer">GitHub Repo</a>
          <a href="https://joseph-guzman-portfolio.vercel.app/" target="_blank" rel="noreferrer">Live Site</a>
        </div>
      </section>

      <section className="project-section">
        <h2>Overview</h2>
        <p>This portfolio website was built to serve as a centralized platform for
        presenting my software engineering projects, technical experience, and
        development work. The site features responsive layouts, reusable React
        components, project-specific pages, and modern UI styling optimized for
        desktop and mobile viewing.
        </p>
      </section>

      <section className="project-grid">
        <div className="project-card">
          <h3>My Role</h3>
          <p> I designed and developed the full website architecture, frontend
        interface, routing system, and reusable project page components. I also
        implemented responsive layouts, interactive UI styling, and project
        showcase sections to create a polished developer portfolio experience.
        </p>
        </div>

        <div className="project-card">
          <h3>Tech Stack</h3>
          <ul>
            <li>React</li>
            <li>Firebase</li>
            <li>React Router</li>
            <li>HTML/CSS</li>
            <li>Vercel</li>
            <li>Responsive Web Design</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Technical Highlights</h3>
          <ul>
            <li>Built reusable React components for scalable project pages</li>
            <li>Implemented responsive layouts for desktop and mobile devices</li>
            <li>Developed dynamic project showcase pages with shared styling architecture</li>
            <li>Integrated external links, media previews, and project navigation</li>
            <li>Deployed the website using Vercel for public accessibility</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default PicklePortal