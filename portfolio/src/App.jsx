import './index.css'
import profilePic from './assets/headshot.png'
import { FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa"
import { Routes, Route, Link } from 'react-router-dom'
import GatorKeys from './pages/gatorkeys'
import PicklePortal from './pages/pickleportal'
import SoccerAnalysis from './pages/soccer_analysis'
import Sudoku from './pages/sudoku'
import PersonalPortfolio from './pages/personal_portfolio'
import WebchatApplication from './pages/webchat'
import Stacked from './pages/stacked'
import Offerly from './pages/offerly'

function Home() {
      return (
      <div className="site">
        <nav className="navbar">
          <h1 className="logo">joseph@portfolio:~$</h1>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#resume">Resume</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section id="home" className="hero">
          <div className="hero-top">
            <div className="name">
              <div className="terminal-box">
                <p className="terminal-command">who am i</p>

                <h2>Joseph Guzman</h2>

                <p className="terminal-subtitle">
                  Computer Science Student | Full-Stack Developer
                </p>

                <p className="terminal-command">current_focus</p>

                <p className="terminal-text">
                  AI systems, real-time applications, and software engineering.
                </p>
              </div>

              <div className="logo-group">
                <a
                  href="https://github.com/guzmanJoseph"
                  target="_blank"
                  className="button"
                >
                  <FaGithub className='icon' />
                </a>

                <a
                  href="https://www.linkedin.com/in/joseph-guzman-cs/"
                  target="_blank"
                  className="button"
                >
                  <FaLinkedin className='icon'/>
                </a>

                <a
                  href="mailto:jguzmannn05@gmail.com"
                  target="_blank"
                  className="button"
                >
                  <FaEnvelope className='icon'/>
                </a>
              </div>
            </div>

            <img
              src={profilePic}
              alt="Joseph Guzman"
              className="profile-image"
            />
          </div>
        </section>

        <section id="about" className="section">
          <p className="section-label">About</p>
          <h2 className='cyber-header'>Who I Am</h2>
          <p className="about">
            I am a senior computer science student at the University of Florida. I am
            interested in full-stack development, database systems, and software engineering.
            I enjoy building meaningful applications that combine an intuitive user experience
            with efficient backend and data-driven functionality.
          </p>
        </section>

        <section id="resume" className='section'>
          <p className="resume-label">
            Resume
          </p>

          <h2 className="cyber-header">
            Download My Resume
          </h2>

          <p className="resume-description">
            View my experience, technical skills, and project work.
          </p>
          
          <a 
              href="/resume.pdf"
              target="_blank"
              className="resume-button"
            >
              Download CV
            </a>
        </section>

        <section id="experience" className="section">
          <p className="section-label">
            Experience
          </p>

          <h2 className="cyber-header">
            Professional Experience
          </h2>

          <div className="experience-container">

            <div className="experience-card">
              <div className="experience-top">
                <div>
                  <h3>UF RecSports</h3>
                  <h4>Gainesville, Florida</h4>
                </div>

                <p className="experience-date">
                  Jan 2025 - Present
                </p>
              </div>

              <div className="experience-role">
                <h5>Sports Programs Supervisor</h5>

                <p className="role-date">
                  Aug 2025 - Present
                </p>

                <ul>
                  <li>
                    Oversaw recreational sports at the University of Florida, ensuring smooth operations and engagement.
                  </li>

                  <li>
                    Ensured player safety and managed check-ins for both players and staff.
                  </li>

                  <li>
                    Committed to fostering a safe and enjoyable environment for students to play sports.
                  </li>
                </ul>
              </div>

              <div className="experience-role">
                <h5>Sports Programs Official</h5>

                <p className="role-date">
                  Jan 2025 - Aug 2025
                </p>

                <ul>
                  <li>
                    Officiated intramural sports games while enforcing rules in fast-paced environments.
                  </li>

                  <li>
                    Managed player conflicts professionally while maintaining control and sportsmanship.
                  </li>

                  <li>
                    Developed strong communication and real-time decision-making skills under pressure.
                  </li>
                </ul>
              </div>
            </div>
            <div className="experience-card">
              <div className="experience-top">
                <div>
                  <h3>Transportation Intern</h3>
                  <h4>School District of Palm Beach County</h4>
                </div>

                <p className="experience-date">
                  May 2024 - August 2024
                </p>
              </div>

              <ul>
                <li>
                  Developed and executed SQL queries to support backend functionality for a transportation intranet system.
                </li>

                <li>
                  Processed and issued 1,000+ secure identification cards using enterprise systems.
                </li>

                <li>
                  Installed over 100 desktops and monitors for transportation department employees.
                </li>
              </ul>
            </div>

            <div className="experience-card">
              <div className="experience-top">
                <div>
                  <h3>Information Technology Intern</h3>
                  <h4>School District of Palm Beach County</h4>
                </div>

                <p className="experience-date">
                  May 2022 - July 2022
                </p>
              </div>

              <ul>
                <li>
                  Diagnosed, repaired, and re-imaged 10,000+ student and staff devices.
                </li>

                <li>
                  Configured and deployed hardware and software environments for large-scale educational use.
                </li>

                <li>
                  Assisted in IT service operations including ticket resolution and vendor coordination.
                </li>
              </ul>
            </div>

          </div>
        </section>

        <section id="projects" className="section">
          <p className="section-label">
            Projects
          </p>
          
          <h2 className="cyber-header">Check out my projects!</h2>

          <div className="project-grid">

          <Link to="/projects/stacked" className="project-card">
            <h3>Stacked</h3>
            <p>
              Full-stack iOS poker bankroll tracker for sessions, analytics,
              home game payouts, groups, and leaderboards.
            </p>
          </Link>

          <Link to="/projects/offerly" className="project-card">
            <h3>Offerly</h3>
            <p>
              Job application management platform with Gmail integration
              for tracking applications, interviews, offers, and follow-ups.
            </p>
          </Link>

          <Link to="/projects/gatorkeys" className="project-card">
            <h3>GatorKeys</h3>
            <p>Student housing marketplace built for UF students.</p>
          </Link>

          <Link to="/projects/pickleportal" className="project-card">
            <h3>PicklePortal</h3>
            <p>Real-time pickleball court tracking dashboard.</p>
          </Link>

          <Link to="/projects/soccer_analysis" className="project-card">
            <h3>Soccer Analysis Project</h3>
            <p>
              Program using the YOLOv5 detection model to detect players,
              referees, goalkeepers, and the soccer ball in a soccer match.
            </p>
          </Link>

          <Link to="/projects/sudoku" className="project-card">
            <h3>Sudoku</h3>
            <p>Sudoku game created using PyGame.</p>
          </Link>

          <Link to="/projects/personal_portfolio" className="project-card">
            <h3>Personal Portfolio</h3>
            <p>Personal website to learn more about me.</p>
          </Link>

          <Link to="/projects/webchat" className="project-card">
            <h3>Webchat Application</h3>
            <p>Webchat application with AI features and a toxicity filter.</p>
          </Link>

        </div>
        </section>

        <section id="skills" className="section">
          <p className="section-label">
            Skills
          </p>

          <h2 className="cyber-header">
            Technical Skills
          </h2>

          <p className="section-description">
            Technologies, languages, frameworks, and tools I have experience working with.
          </p>

          <div className="skills-grid">

            <div className="skills-card">
              <h3>Languages</h3>

              <div className="skills-list">
                <span>Python</span>
                <span>Java</span>
                <span>C++</span>
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>SQL</span>
                <span>HTML/CSS</span>
                <span>C</span>
              </div>
            </div>

            <div className="skills-card">
              <h3>Frameworks</h3>

              <div className="skills-list">
                <span>React</span>
                <span>Flask</span>
                <span>Firebase</span>
                <span>REST APIs</span>
                <span>Node.js</span>
                <span>Pandas</span>
                <span>NumPy</span>
              </div>
            </div>

            <div className="skills-card">
              <h3>Developer Tools</h3>

              <div className="skills-list">
                <span>Git/GitHub</span>
                <span>Docker</span>
                <span>AWS</span>
                <span>Vercel</span>
                <span>Render</span>
                <span>VS Code</span>
                <span>IntelliJ</span>
                <span>PyCharm</span>
              </div>
            </div>

            <div className="skills-card">
              <h3>Concepts</h3>

              <div className="skills-list">
                <span>Full-Stack Development</span>
                <span>OOP</span>
                <span>Data Structures & Algorithms</span>
                <span>Database Design</span>
                <span>IoT Systems</span>
                <span>Computer Systems</span>
              </div>
            </div>
          </div>
        </section>


        <footer id="contact" className="footer">
          <p>jguzmannn05@gmail.com</p>
          <p>561-891-9058</p>
        </footer>
      </div>
    )
}
  function App() {
      return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/gatorkeys" element={<GatorKeys />} />
          <Route path="/projects/pickleportal" element={<PicklePortal />} />
          <Route path="/projects/soccer_analysis" element={<SoccerAnalysis />} />
          <Route path="/projects/sudoku" element={<Sudoku />} />
          <Route path="/projects/personal_portfolio" element={<PersonalPortfolio />} />
          <Route path="/projects/webchat" element={<WebchatApplication />} />
          <Route path="/projects/stacked" element={<Stacked />} />
          <Route path="/projects/offerly" element={<Offerly />} />
        </Routes>
  )
  }

export default App