import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import resumePDF from '../assets/Vaibhav_Resume.pdf';

const Hero = () => (
  <section id="hero" className="hero section-shell">
    <div className="hero-copy">
      <p className="eyebrow">Portfolio</p>
      <h1>Vaibhav Kumar</h1>
      <p className="hero-role">Full-stack developer</p>
      <p className="hero-description">
        I build responsive web interfaces with React and connect them to APIs
        and backend services.
      </p>
      <div className="hero-actions">
        <a className="button button-primary" href="#projects"> Projects</a>
        <a className="button button-secondary" href={resumePDF} download="Vaibhav_Resume.pdf">
          Download resume
        </a>
      </div>
      <div className="hero-links">
        <a
          href="https://github.com/Vaibhav6234"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <FaGithub aria-hidden="true" />
        </a>
        <a
          href="https://www.linkedin.com/in/vaibhav-kumar1/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <FaLinkedin aria-hidden="true" />
        </a>
        <a
          href="mailto:vaibhavnimesh002@gmail.com"
          aria-label="Email"
          title="Email"
        >
          <FaEnvelope aria-hidden="true" />
        </a>
      </div>
    </div>
    <p className="hero-index" aria-hidden="true">01 / 06</p>
  </section>
);

export default Hero;
