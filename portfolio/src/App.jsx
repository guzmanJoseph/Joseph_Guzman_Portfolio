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

function Home() {
      return (
      <div className="site">
        <nav className="navbar">
          <h1 className="logo">Joseph Guzman</h1>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#resume">Resume</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#projects">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="hero">
          <div className="name">
            <h2>Joseph Guzman</h2>
          </div>

          <img
            src={profilePic}
            alt="Joseph Guzman"
            className="profile-image"
          />

          <section id="about" className="section">
            <h2>About</h2>
            <p className="about">
              I am a senior computer science student at the University of Florida. I am
              interested in full-stack development, database systems, and software engineering.
              I enjoy building meanigful applications that combine having a intuitive user experience
              with efficient backend and data-driven functionality.
            </p>
          </section>

          <div className="logo-group">
            <a 
              href="https://github.com/guzmanJoseph"
              target="_blank"
              className="button"
            >
              <FaGithub className='icon' />
            </a>

            <a 
              href="https://www.linkedin.com/in/joseph-guzman-069972246/?skipRedirect=true"
              target="_blank"
              className="button"
            >
              <FaLinkedin className='icon'/>
            </a>

            <a
            href="mailto:joseph.guzman05@hotmail.com"
            target="_blank"
            className="button"
            >
              <FaEnvelope className='icon'/>
            </a>
          </div>

        </section>

        <section id="resume" className='section'>
          <p className="resume-label">
            Resume
          </p>

          <h2 className="resume-title">
            Download My Resume
          </h2>

          <p className="resume-description">
            View my experience, technical skills, and project work.
          </p>
          
          <a 
              href="/Joseph_Guzman_Master_Resume.pdf"
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

          <h2 className="section-title">
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
          
          <h2>Check out my projects!</h2>

          <div className="project-grid">
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
              <p>Program using the YOLOv5 detection model to be able to detect players, referees, goalkeepers, and the soccer ball in a small 30 second clip of a soccer match.</p>
            </Link>

            <Link to="/projects/sudoku" className="project-card">
              <h3>Sudoku</h3>
              <p>Sudoku game created using PyGame.</p>
            </Link>

            <Link to="/projects/personal_portfolio" className="project-card">
              <h3>Personal Portfolio</h3>
              <p>Personal website to learn more about me</p>
            </Link>

            <Link to="/projects/webchat" className="project-card">
              <h3>Webchat Application</h3>
              <p>Webchat application with AI features and a toxicity filter</p>
            </Link>
          </div>
        </section>

        <section id="skills" className="section">
          <p className="section-label">
            Skills
          </p>

          <h2 className="section-title">
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
          <p>joseph.guzman05@hotmail.com</p>
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
        </Routes>
  )
  }

export default App