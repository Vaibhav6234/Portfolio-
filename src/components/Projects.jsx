import { useInView } from '../hooks/useInView';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import EMS  from '../assets/EMS.png';
import foodDelivery from '../assets/Food-delivery.png'; 

const projects = [
    {
    id: 1,
    name: 'Employee Management System',
    description: 'A web application for managing employee records, with features for adding, editing, and deleting employee information. Built with React.js and Tailwind CSS for a clean and responsive design.',
    image: EMS,
    tags: ['React.js', 'Tailwind CSS', 'Context API', 'Local Storage'],
    github: 'https://github.com/Vaibhav6234/Employee-Management-System-',
    live: 'https://employee-management-system-psi-lac.vercel.app/',
    badge: 'Featured',
  },
  {
    id: 2,
    name: 'Food Delivery App',
    description: 'A food delivery app with real-time order tracking and delivery updates. User can order food from various restaurants and track their order in real-time.',
    image: foodDelivery,
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'Redux'],
    github: 'https://github.com/Vaibhav6234/Food-Delivery-App',
    live: 'https://vaibhav-food-delivery-app.netlify.app/',
    badge: 'Featured',
  },
  {
    id: 3,
    name: 'Portfolio Website',
    description: 'Personal developer portfolio built with React.js and Tailwind CSS. Features a dark theme, smooth animations, responsive layout, and sections for skills, projects, and contact.',
    image: null,
    tags: ['React', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com',
    live: 'https://example.com',
    badge: 'Live',
  }
];

const badgeColors = {
  Featured: 'bg-violet-600/20 text-violet-300 border-violet-500/30',
  Live: 'bg-green-600/20 text-green-300 border-green-500/30',
  API: 'bg-sky-600/20 text-sky-300 border-sky-500/30',
};

const Projects = () => {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute right-10 bottom-10 w-96 h-96 bg-violet-700/10 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className={`max-w-7xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Title */}
        <div className="text-center mb-20">
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">What I've Built</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-linear-to-r from-violet-500 to-sky-500 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-violet-500/30 hover:-translate-y-2 hover:shadow-[0_20px_60px_-10px_rgba(124,58,237,0.25)] transition-all duration-500 flex flex-col group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image / Fallback */}
              <div className="h-48 overflow-hidden relative">
                {p.image ? (
                  <>
                    <div className="absolute inset-0 bg-linear-to-t from-[#0a0f1e]/80 to-transparent z-10" />
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </>
                ) : (
                  <div className="w-full h-full bg-linear-to-br from-violet-900/60 to-slate-900 flex items-center justify-center">
                    <span className="text-6xl">🌐</span>
                  </div>
                )}
                {/* Badge */}
                <span className={`absolute top-3 right-3 z-20 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${badgeColors[p.badge]}`}>
                  {p.badge}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">{p.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">{p.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 bg-violet-500/10 text-violet-300 border border-violet-500/20 text-xs rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-white/5">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-sm font-medium transition-all duration-200"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-violet-600/20 hover:bg-violet-600/40 text-violet-300 hover:text-white border border-violet-500/20 text-sm font-medium transition-all duration-200"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="https://github.com/Vaibhav6234"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 gradient-border glass rounded-full text-slate-200 font-semibold hover:bg-white/5 transition-all duration-300"
          >
            <FaGithub /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
