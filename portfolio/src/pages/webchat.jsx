import { Link } from 'react-router-dom'
import './projectpage.css'

function PicklePortal() {
  return (
    <div className="project-page">
      <Link to="/" className="back-link">← Back Home</Link>

      <section className="project-hero">
        <p className="project-label">FULL-STACK AI WEB APPLICATION</p>
        <h1>WebChat AI</h1>
        <p className="project-tagline">
          A real-time web-based chat application featuring AI-powered message summarization and toxicity detection for intelligent communication and moderation.
        </p>

        <div className="project-buttons">
          <a href="https://github.com/guzmanJoseph/webchat" target="_blank" rel="noreferrer">GitHub Repo</a>
          <a href="https://www.youtube.com/watch?v=pyv2BN2uPiw" target="_blank" rel="noreferrer">Watch Demo</a>
        </div>
      </section>

      <section className="project-section">
        <h2>Overview</h2>
        <p>WebChat AI is a full-stack messaging platform designed to support
            real-time communication while integrating AI-powered features for
            content analysis and moderation. The application allows users to send
            messages, generate conversation summaries, and detect potentially toxic
            or harmful content through machine learning APIs.
        </p>
      </section>

      <section className="project-grid">
        <div className="project-card">
          <h3>My Role</h3>
          <p>I developed the frontend interface and integrated AI-powered features
            including chat summarization and toxicity detection. I also implemented
            real-time messaging functionality, user interaction workflows, and dynamic
            UI components to create a responsive chat experience.
           </p>
        </div>

        <div className="project-card">
          <h3>Tech Stack</h3>
          <ul>
            <li>React</li>
            <li>Firebase</li>
            <li>JavaScript</li>
            <li>Ollama</li>
            <li>HTML/CSS</li>
            <li>AI APIs</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Technical Highlights</h3>
          <ul>
            <li>Built a real-time web-based messaging application</li>
            <li>Integrated AI-powered conversation summarization features</li>
            <li>Implemented toxicity detection for content moderation</li>
            <li>Developed responsive frontend UI components and chat workflows</li>
            <li>Connected AI analysis features with live user messaging</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default PicklePortal