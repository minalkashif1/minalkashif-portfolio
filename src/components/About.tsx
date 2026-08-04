import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about">

      <div className="about-content">

        <span className="section-tag">ABOUT ME</span>

        <h2>
          Passionate about building
          <span> beautiful software.</span>
        </h2>

        <p>
          I'm <strong>Minal Kashif</strong>, a Computer Science student,
          Backend Developer, and AI enthusiast. I enjoy creating scalable web
          applications, experimenting with machine learning, and designing
          clean user experiences.
        </p>

        <p>
          My favorite technologies include React, TypeScript, FastAPI,
          Python, Java, PostgreSQL, Docker, and modern AI frameworks.
        </p>

        <div className="about-buttons">
          <a href="#projects" className="about-btn">
            My Projects
          </a>

          <a href="#contact" className="outline-btn">
            Contact
          </a>
        </div>

      </div>

      <div className="about-image">

        <div className="glass-card">

          <div className="avatar">
            MK
          </div>

          <h3>Minal Kashif</h3>

          <p>AI Engineer</p>

          <div className="skills">

            <span>React</span>

            <span>FastAPI</span>

            <span>Python</span>

            <span>TypeScript</span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;