import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Database,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Sparkles,
  Trophy,
  X,
  Layers3,
} from "lucide-react";
import "./style.css";

const skills = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["HTML5", "CSS3", "JavaScript", "React.js"],
  },
  { title: "Backend", icon: Layers3, items: ["Python", "Django"] },
  { title: "Database", icon: Database, items: ["SQL", "MySQL fundamentals"] },
  { title: "Tools", icon: BriefcaseBusiness, items: ["Git", "GitHub"] },
];

const projects = [
  {
    number: "01",
    name: "CampusMart",
    type: "Full-stack web application",
    description:
      "A campus marketplace application built with a React interface and a Django backend. Connects frontend views to backend APIs and SQL data operations.",
    tech: ["React.js", "JavaScript", "Python", "Django", "SQL"],
    github: "https://github.com/",
    demo: "https://campusmart-6r2h.vercel.app/",
    icon: BriefcaseBusiness,
  },
  {
    number: "02",
    name: "Bookstore",
    type: "Frontend web application",
    description:
      "A responsive bookstore interface using reusable React components, application state, and API integration for fetching and updating book data.",
    tech: ["HTML", "CSS", "JavaScript", "React.js"],
    github: "https://github.com/",
    demo: "https://bookstore-five-beta.vercel.app/",
    icon: BookOpen,
  },
  {
    number: "03",
    name: "PeopleAtlas",
    type: "Frontend web application",
    description:
      "This is bulid using the React.js, Javascript, Html 5,CSS with usind API fecthing the user Details this project is build to get the details of the Peoples where they leave all information are packed in single project",
    tech: ["HTML", "CSS", "JavaScript", "React.js"],
    github: "https://github.com/",
    demo: "https://people-atlas.vercel.app/",
    icon: BookOpen,
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">T</span>
          <span>
            thejdeep<span className="brand-dot">.</span>
          </span>
        </a>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["About", "Skills", "Projects", "Education", "Contact"].map(
            (item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
              </a>
            ),
          )}
          <a className="nav-cta" href="mailto:avulathejdeep999@gmail.com">
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" /> OPEN TO OPPORTUNITIES
            </div>
            <p className="eyebrow">HELLO, I'M</p>
            <h1>
              Thejdeep
              <br />
              <span className="gradient-text">Avula.</span>
            </h1>
            <h2>Full Stack Developer</h2>
            <p className="hero-description">
              I build thoughtful web experiences with React, JavaScript, Python
              and Django — turning ideas into useful, responsive applications.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowRight size={17} />
              </a>
              <a
                className="button button-ghost"
                href="mailto:avulathejdeep999@gmail.com"
              >
                Get in touch <Mail size={16} />
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <MapPin size={15} /> Proddatur, Andhra Pradesh, India
              </span>
              <span className="meta-separator">•</span>
              <span>Early-career developer</span>
            </div>
          </div>
          <div
            className="hero-visual"
            aria-label="Decorative developer illustration"
          >
            <div className="orbit orbit-a"></div>
            <div className="orbit orbit-b"></div>
            <div className="code-window">
              <div className="window-top">
                <span></span>
                <span></span>
                <span></span>
                <small>developer.js</small>
              </div>
              <div className="code-body">
                <p>
                  <span className="code-muted">01</span>{" "}
                  <span className="code-purple">const</span> developer = {"{"}
                </p>
                <p>
                  <span className="code-muted">02</span> &nbsp; name:{" "}
                  <span className="code-green">'Thejdeep'</span>,
                </p>
                <p>
                  <span className="code-muted">03</span> &nbsp; role:{" "}
                  <span className="code-green">'Full Stack Dev'</span>,
                </p>
                <p>
                  <span className="code-muted">04</span> &nbsp; frontend:{" "}
                  <span className="code-blue">'React'</span>,
                </p>
                <p>
                  <span className="code-muted">05</span> &nbsp; backend:{" "}
                  <span className="code-blue">'Django'</span>,
                </p>
                <p>
                  <span className="code-muted">06</span> &nbsp; mindset:{" "}
                  <span className="code-green">'Keep learning'</span>
                </p>
                <p>
                  <span className="code-muted">07</span> {"};"}
                </p>
                <p className="code-comment">
                  <span className="code-muted">08</span> // Let's build
                  something useful.
                </p>
              </div>
            </div>
            <div className="float-chip chip-react">
              <span>⚛</span> React.js
            </div>
            <div className="float-chip chip-python">
              <span>Py</span> Python
            </div>
            <div className="float-chip chip-django">
              <span>◈</span> Django
            </div>
            <div className="visual-caption">
              <Sparkles size={14} /> Building. Learning. Improving.
            </div>
          </div>
          <a className="scroll-cue" href="#about">
            <ArrowDown size={15} /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="section-wrap section-block" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>
              Curious by nature.
              <br />
              <span className="muted-heading">Developer by choice.</span>
            </h2>
          </div>
          <div className="about-grid">
            <div className="about-main">
              <p className="large-copy">
                I'm a B.Tech graduate in Electronics & Communication Engineering
                with full-stack development skills and a strong interest in
                building web applications.
              </p>
              <p className="body-copy">
                I work with React.js on the frontend and Python with Django on
                the backend, alongside SQL databases and Git/GitHub. I'm eager
                to keep learning, contribute to a team, and grow through
                real-world software development work.
              </p>
              <a className="text-link" href="#contact">
                Let's connect <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="about-stat-grid">
              <div className="stat-card">
                <span className="stat-icon">
                  <GraduationCap />
                </span>
                <strong>B.Tech</strong>
                <span>Electronics & Communication</span>
              </div>
              <div className="stat-card">
                <span className="stat-icon">
                  <Code2 />
                </span>
                <strong>Full Stack</strong>
                <span>React + Django</span>
              </div>
              <div className="stat-card">
                <span className="stat-icon">
                  <Trophy />
                </span>
                <strong>3rd Place</strong>
                <span>Project Expo achievement</span>
              </div>
              <div className="stat-card">
                <span className="stat-icon">
                  <Sparkles />
                </span>
                <strong>Growth mindset</strong>
                <span>Always learning</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="skills">
          <div className="section-heading">
            <p className="eyebrow">02 / TOOLKIT</p>
            <h2>
              Skills I work <span className="muted-heading">with.</span>
            </h2>
            <p className="section-intro">
              The technologies and tools listed in my current development
              toolkit.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map(({ title, icon: Icon, items }, i) => (
              <article className="skill-card" key={title}>
                <div className="skill-card-top">
                  <span className="skill-icon">
                    <Icon size={21} />
                  </span>
                  <span className="skill-index">0{i + 1}</span>
                </div>
                <h3>{title}</h3>
                <div className="skill-tags">
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap section-block" id="projects">
          <div className="section-heading project-heading">
            <div>
              <p className="eyebrow">03 / SELECTED WORK</p>
              <h2>
                Projects that bring
                <br />
                <span className="muted-heading">ideas to life.</span>
              </h2>
            </div>
            <span className="project-count">02 PROJECTS</span>
          </div>
          <div className="projects-list">
            {projects.map(
              ({
                number,
                name,
                type,
                description,
                tech,
                github,
                demo,
                icon: Icon,
              }) => (
                <article className="project-card" key={name}>
                  <div className="project-topline">
                    <span className="project-number">
                      {number} / CASE STUDY
                    </span>
                    <span className="project-type">{type}</span>
                  </div>
                  <div className="project-content">
                    <div className="project-symbol">
                      <Icon size={30} />
                    </div>
                    <div className="project-info">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <div className="project-tags">
                        {tech.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                      <div className="project-links">
                        <a href={github} target="_blank" rel="noreferrer">
                          <Github size={16} /> GitHub <ArrowUpRight size={14} />
                        </a>
                        {demo && (
                          <a href={demo} target="_blank" rel="noreferrer">
                            Live preview <ArrowUpRight size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ),
            )}
          </div>
          <p className="project-note">
            GitHub buttons currently point to GitHub's homepage. Replace them
            with the direct repository URLs before publishing.
          </p>
        </section>

        <section className="section-wrap section-block" id="education">
          <div className="section-heading">
            <p className="eyebrow">04 / LEARNING JOURNEY</p>
            <h2>
              Education & <span className="muted-heading">certifications.</span>
            </h2>
          </div>
          <div className="timeline">
            <article className="timeline-item">
              <span className="timeline-dot"></span>
              <div className="timeline-date">MAY 2022 — APR 2026</div>
              <div className="timeline-content">
                <h3>B.Tech — Electronics & Communication Engineering</h3>
                <p>Chaitanya Bharathi Institute of Technology</p>
                <span className="timeline-badge">CGPA: 7.26</span>
              </div>
            </article>
            <article className="timeline-item">
              <span className="timeline-dot"></span>
              <div className="timeline-date">JUN 2019 — MAR 2020</div>
              <div className="timeline-content">
                <h3>Secondary School (X)</h3>
                <p>Gautam High School</p>
                <span className="timeline-badge">97%</span>
              </div>
            </article>
            <article className="timeline-item">
              <span className="timeline-dot"></span>
              <div className="timeline-date">APR 2026</div>
              <div className="timeline-content">
                <h3>Embedded Systems</h3>
                <p>Acenaar Technologies</p>
              </div>
            </article>
            <article className="timeline-item">
              <span className="timeline-dot"></span>
              <div className="timeline-date">JUL 2025</div>
              <div className="timeline-content">
                <h3>Embedded Systems</h3>
                <p>SkillDzire</p>
              </div>
            </article>
          </div>
        </section>

        <section className="section-wrap section-block achievement-block">
          <div className="achievement-icon">
            <Trophy size={28} />
          </div>
          <div>
            <p className="eyebrow">PROUD MOMENT</p>
            <h2>Recognized for project work.</h2>
            <p className="body-copy">
              Achieved 3rd place in a project expo associated with MyBharat
              Ministry and received a best project prize with a cash reward at a
              college-level Project Expo.
            </p>
          </div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <div className="contact-card">
            <div className="contact-glow"></div>
            <p className="eyebrow">05 / CONTACT</p>
            <h2>
              Have a role or project
              <br />
              in mind? <span className="gradient-text">Let's talk.</span>
            </h2>
            <p className="contact-copy">
              I'm interested in entry-level software development opportunities
              where I can contribute, learn, and grow.
            </p>
            <a
              className="button button-primary contact-button"
              href="mailto:avulathejdeep999@gmail.com"
            >
              Send me an email <Send size={16} />
            </a>
            <div className="contact-details">
              <a href="mailto:avulathejdeep999@gmail.com">
                <Mail size={17} /> avulathejdeep999@gmail.com
              </a>
              <a href="tel:+917396699398">
                <Phone size={17} /> +91 73966 99398
              </a>
              <span>
                <MapPin size={17} /> Proddatur, Andhra Pradesh, India
              </span>
            </div>
            <div className="social-links">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub <ArrowUpRight size={14} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <a href="#home" className="brand">
          <span className="brand-mark">T</span>
          <span>
            thejdeep<span className="brand-dot">.</span>
          </span>
        </a>
        <span>Designed & built with care by Thejdeep Avula</span>
        <a href="#home" className="back-top">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
