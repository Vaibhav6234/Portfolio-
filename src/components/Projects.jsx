import EMS from '../assets/EMS.png';
import foodDelivery from '../assets/Food-delivery.png';
import rentalCars from '../assets/Rental Cars.png';

const projects = [
  {
    name: 'Employee Management System',
    description:
      'A React application for creating, editing, and managing employee records. The interface uses Tailwind CSS, with Context API and local storage for application state.',
    image: EMS,
    tags: ['React', 'Tailwind CSS', 'Context API', 'Local Storage'],
    github: 'https://github.com/Vaibhav6234/Employee-Management-System-',
    live: 'https://employee-management-system-psi-lac.vercel.app/',
  },
  {
    name: 'Rental Cars',
    description:
      'A car rental application with vehicle browsing, user authentication, and a MongoDB-backed API built with Express and Node.js.',
    image: rentalCars,
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Vaibhav6234/Rental-Cars',
    live: 'https://rental-cars-five.vercel.app/',
  },
  {
    name: 'Food Delivery App',
    description:
      'A food ordering interface for browsing restaurants and placing orders, built with React and Redux.',
    image: foodDelivery,
    tags: ['React', 'Tailwind CSS', 'Redux'],
    github: 'https://github.com/Vaibhav6234/Food-Delivery-App',
    live: 'https://vaibhav-food-delivery-app.netlify.app/',
  },
];

const Projects = () => (
  <section id="projects" className="content-section section-shell">
    <div className="section-heading">
      <p className="eyebrow">Selected work</p>
      <h2>Projects</h2>
    </div>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <article className="project-card" key={project.name}>
          <img
            className="project-image"
            src={project.image}
            alt={`${project.name} interface`}
            loading="lazy"
          />
          <div className="project-content">
            <p className="project-number">0{index + 1}</p>
            <h3>{project.name}</h3>
            <p className="body-copy">{project.description}</p>
            <ul className="project-tags" aria-label={`${project.name} technologies`}>
              {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
            <div className="project-links">
              <a href={project.live} target="_blank" rel="noreferrer">Live site</a>
              <a href={project.github} target="_blank" rel="noreferrer">Source code</a>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
