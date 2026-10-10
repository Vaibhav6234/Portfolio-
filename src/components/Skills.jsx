const skillCategories = [
  {
    category: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'SCSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'Mongoose'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel', 'Render'],
  },
  {
    category: 'Programming',
    skills: ['C','C++'],
  },
];

const Skills = () => (
  <section id="skills" className="content-section section-shell section-muted">
    <div className="section-heading">
      <p className="eyebrow">Skills</p>
      <h2>Tools I use</h2>
    </div>
    <div className="skills-grid">
      {skillCategories.map((group) => (
        <article className="skill-group" key={group.category}>
          <h3>{group.category}</h3>
          <ul className="skill-list">
            {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

export default Skills;
