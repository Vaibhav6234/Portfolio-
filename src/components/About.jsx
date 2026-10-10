const facts = [
  { label: 'Based in', value: 'India' },
  { label: 'Focus', value: 'Frontend and full-stack development' },
  { label: 'Currently open to', value: 'Full-time roles and freelance work' },
];

const About = () => (
  <section id="about" className="content-section section-shell">
    <div className="section-heading">
      <p className="eyebrow">About</p>
      <h2>A little about my work</h2>
    </div>
    <div className="about-layout">
      <p className="about-lead">
        I am a Full stack developer focused on building useful web products, with experience
        across React interfaces and Node.js services.
      </p>
      <div>
        <p className="body-copy">
          I have worked on employee management, car rental, and food delivery
          applications. My work includes responsive interfaces, reusable
          components, API integration, and data handling with MongoDB.
        </p>
        <dl className="facts-list">
          {facts.map((fact) => (
            <div className="fact-row" key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

export default About;
