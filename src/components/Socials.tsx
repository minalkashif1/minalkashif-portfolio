import "../styles/Socials.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Socials() {
  return (
    <section id="socials" className="socials">
      <span className="section-tag">CONNECT</span>

      <h2>Let's Connect</h2>

      <p>
        Feel free to connect with me on any of these platforms.
      </p>

      <div className="social-grid">

        <a
          href="https://github.com/minalkashif1"
          target="_blank"
          rel="noreferrer"
          className="social-card"
        >
          <span className="social-icon">
            <FaGithub />
          </span>
          <h3>GitHub</h3>
          <span>@minalkashif1</span>
        </a>

        <a
          href="https://www.linkedin.com/in/minal-kashif-26a1a7281/"
          target="_blank"
          rel="noreferrer"
          className="social-card"
        >
          <span className="social-icon">
            <FaLinkedin />
          </span>
          <h3>LinkedIn</h3>
          <span>Let's Connect</span>
        </a>

        <a
          href="mailto:your@email.com"
          className="social-card"
        >
          <span className="social-icon">
            <FaEnvelope />
          </span>
          <h3>Email</h3>
          <span>your@email.com</span>
        </a>

      </div>
    </section>
  );
}

export default Socials;