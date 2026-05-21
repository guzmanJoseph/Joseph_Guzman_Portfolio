import { Link } from 'react-router-dom'
import './projectpage.css'

function PicklePortal() {
  return (
    <div className="project-page">
      <Link to="/" className="back-link">← Back Home</Link>

      <section className="project-hero">
        <p className="project-label">IoT WEB BASED PROJECT</p>
        <h1>PicklePortal</h1>
        <p className="project-tagline">
          PicklePortal is a collaborative IoT and web-based project designed to monitor pickleball court occupancy and queue length in near real time.
        </p>
        
        <div className="project-buttons">
          <a href="https://github.com/RJ-Tabelon/PicklePortal" target="_blank" rel="noreferrer">GitHub Repo</a>
        </div>
      </section>

      <section className="project-section">
        <h2>Overview</h2>
        <p>The system integrates ESP32 hardware, Firebase Realtime Database, and a React + TypeScript web dashboard to provide a live view of court availability and usage.</p>
      </section>

      <section className="project-grid">
        <div className="project-card">
          <h3>My Role</h3>
          <p>I contributed to integrating IoT hardware data streams with the frontend so updates propagate in real time across devices and the web interface. I helped design and maintain the database schema, ensuring consistent synchronization between embedded devices, backend services, and the dashboard. I also supported frontend development, building data-driven UI components that visualize live occupancy and status, and assisted with hardware setup and integration, including sensor communication and device-to-cloud data flow..</p>
        </div>

        <div className="project-card">
          <h3>Tech Stack</h3>
          <ul>
            <li>React</li>
            <li>Firebase</li>
            <li>ESP32</li>
            <li>IoT</li>
            <li>HTML/CSS</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Technical Highlights</h3>
          <ul>
            <li>Built a real-time IoT monitoring system integrating ESP32 hardware with a React dashboard for live occupancy
                and queue tracking
            </li>
            <li>Developed and maintained a Firebase Realtime Database to synchronize data between embedded devices and web
                clients
            </li>
            <li>Engineered dynamic frontend components using React and TypeScript for data visualization and system status
                tracking
            </li>
            <li>Engineered dynamic frontend components using React and TypeScript for data visualization and system status
                tracking
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default PicklePortal