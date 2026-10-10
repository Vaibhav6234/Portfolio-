const responsibilities = [
  'Built responsive interfaces with React.',
  'Integrated Sharetribe APIs for marketplace features and custom workflows.',
  'Created reusable components and improved interface performance.',
  'Used Git and GitHub to collaborate on code and manage changes.',
];

const Experience = () => (
  <section id="experience" className="content-section section-shell section-muted">
    <div className="section-heading">
      <p className="eyebrow">Experience</p>
      <h2>Work history</h2>
    </div>
    <article className="experience-entry">
      <div className="experience-meta">
        <p>June 2025 to February 2026</p>
        <p>9 months</p>
      </div>
      <div className="experience-detail">
        <h3>Associate Software Developer</h3>
        <p className="experience-company">Devscrew · Frontend</p>
        <ul className="plain-list">
          {responsibilities.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p className="experience-tools">
          React, JavaScript, Tailwind CSS, SCSS, Node.js, Sharetribe, Git
        </p>
      </div>
    </article>
  </section>
);

export default Experience;
