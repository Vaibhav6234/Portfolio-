const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', icon: '<>' },
      { name: 'CSS', icon: '{}' },
      { name: 'JavaScript', icon: 'JS' },
      { name: 'TypeScript', icon: 'TS' },
      { name: 'React', icon: '⚛' },
      { name: 'Next.js', icon: 'N' },
      { name: 'Tailwind CSS', icon: '' },
      { name: 'SCSS', icon: '' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'N' },
      { name: 'Express', icon: 'Ex' },
      { name: 'MongoDB', icon: 'M' },
      { name: 'Mongoose', icon: 'M' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', icon: 'G' },
      { name: 'GitHub', icon: 'GH' },
      { name: 'VS Code', icon: 'VS' },
      { name: 'Postman', icon: 'P' },
      { name: 'Vercel', icon: 'V' },
      { name: 'Render', icon: 'R' },
    ],
  },
  {
    category: 'Programming',
    skills: [
      { name: 'C', icon: '' },
      { name: 'C++', icon: '' },
    ],
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
            {group.skills.map((skill) => (
              <li key={skill.name}>
                <span className="skill-badge">
                  {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                  <span>{skill.name}</span>
                </span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

export default Skills;
