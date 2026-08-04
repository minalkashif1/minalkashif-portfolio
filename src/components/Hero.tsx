import "../styles/Hero.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="hero-subtitle">PORTFOLIO</p>

        <h1 className="hero-title">
          Minal
          <br />
          Kashif
        </h1>

        <p className="hero-description">
          AI Engineer • Backend Developer • Full Stack Developer
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>

          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/minalkashif1"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/minal-kashif-26a1a7281/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:your@email.com">
            <FaEnvelope />
          </a>
        </div>

      </div>

    </section>
  );
}

export default Hero;