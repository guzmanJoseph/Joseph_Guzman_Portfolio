import { Link } from 'react-router-dom'
import './projectPage.css'

function PicklePortal() {
  return (
    <div className="project-page">
      <Link to="/" className="back-link">← Back Home</Link>

      <section className="project-hero">
        <p className="project-label">Computer Vision & Sports Analytics Project</p>
        <h1>PicklePortal</h1>
        <p className="project-tagline">
          A computer vision project using YOLOv5 and Python to detect and track players, referees, goalkeepers, and the ball in real time from soccer match footage.
        </p>

        <div className="project-buttons">
          <a href="https://github.com/guzmanJoseph/soccerAnalysis" target="_blank" rel="noreferrer">GitHub Repo</a>
          <a href="https://www.youtube.com/watch?v=Zu7bJP2Bnqg" target="_blank" rel="noreferrer">Watch Demo</a>        </div>
      </section>

      <section className="project-section">
        <h2>Overview</h2>
        <p>This project uses the YOLOv5 object detection model and OpenCV to analyze soccer footage frame-by-frame in real time. The system identifies players, referees, goalkeepers, and the ball while processing live match video streams and generating visual tracking overlays.</p>
      </section>

      <section className="project-grid">
        <div className="project-card">
          <h3>My Role</h3>
          <p>I developed the computer vision pipeline using YOLOv5 and Python to process soccer match footage and detect players, referees, goalkeepers, and the ball in real time. I integrated OpenCV for frame-by-frame video analysis, implemented object tracking overlays and bounding boxes, and optimized the processing workflow for smooth real-time detection across 30 FPS video streams.</p>
        </div>

        <div className="project-card">
          <h3>Tech Stack</h3>
          <ul>
            <li>Python</li>
            <li>YOLOv5</li>
            <li>OpenCV</li>
            <li>NumPy</li>
            <li>Pandas</li>
            <li>Computer Vision</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Technical Highlights</h3>
          <ul>
            <li>Developed a computer vision pipeline using Python and YOLOv5 to detect players, referees, and ball movement in
                match footage
            </li>
            <li>Trained a custom object detection model on a Kaggle dataset, achieving 97.7% detection accuracy
            </li>
            <li>Implemented tracking logic to analyze team possession metrics and movement patterns
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default PicklePortal