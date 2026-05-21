import { Link } from 'react-router-dom'
import './projectpage.css'

function Sudoku() {
  return (
    <div className="project-page">
      <Link to="/" className="back-link">← Back Home</Link>

      <section className="project-hero">
        <p className="project-label">PYGAME GAME DEVELOPMENT</p>
        <h1>Sudoku</h1>
        <p className="project-tagline">
          A collaborative Sudoku game built with Python and Pygame featuring an interactive graphical interface, real-time input handling, and puzzle validation.
        </p>

        <div className="project-buttons">
          <a href="https://github.com/guzmanJoseph/Sudoku_Project" target="_blank" rel="noreferrer">GitHub Repo</a>
          <a href="https://www.youtube.com/watch?v=SboqS8CCoRE" target="_blank" rel="noreferrer">Watch Demo</a>        </div>
      </section>

      <section className="project-section">
        <h2>Overview</h2>
        <p> This project is a fully functional Sudoku game developed collaboratively
            using Python and Pygame. The game allows users to interact with the board,
            input values, validate moves, and complete Sudoku puzzles through a custom
            graphical interface.
        </p>
      </section>

      <section className="project-grid">
        <div className="project-card">
          <h3>My Role</h3>
          <p> I was responsible for the frontend development of the game, including
              designing the graphical interface, handling user interactions, managing
                keyboard and mouse input, and ensuring smooth gameplay functionality
                within the Pygame environment.
            </p>
        </div>

        <div className="project-card">
          <h3>Tech Stack</h3>
          <ul>
            <li>Python</li>
            <li>Pygame</li>
            <li>OOP</li>
            <li>Event Handling</li>
            <li>Game UI Development</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Technical Highlights</h3>
          <ul>
            <li>Built an interactive Sudoku game using Python and Pygame</li>
            <li>Implemented graphical board rendering and user input handling</li>
            <li>Developed responsive gameplay interactions using event-driven programming</li>
            <li>Collaborated in a team environment with divided development responsibilities</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Sudoku