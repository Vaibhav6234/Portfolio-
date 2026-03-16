import { useInView } from '../hooks/useInView';
import { HiCode, HiChip, HiLightningBolt, HiCube, HiCollection, HiGlobe } from 'react-icons/hi';

const achievements = [
  { icon: <HiCode />, text: <>Built responsive web interfaces with <strong className="text-white">React.js</strong></> },
  { icon: <HiLightningBolt />, text: 'Optimized UI performance and load times' },
  { icon: <HiCube />, text: 'Implemented reusable component architectures' },
  { icon: <HiCollection />, text: 'Worked with modern tooling: Vite, Tailwind, SCSS' },
  { icon: <HiGlobe />, text: <>Integrated <strong className="text-white">Sharetribe APIs</strong> to build marketplace features and custom workflows</> },
  { icon: <HiChip />, text: <>Collaborated using <strong className="text-white">Git</strong> & <strong className="text-white">GitHub</strong> for version control and team workflows</> },
];


const Experience = () => {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-28 px-6 bg-slate-950/50 relative overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-full bg-linear-to-b from-transparent via-violet-700/30 to-transparent pointer-events-none" />

      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Title */}
        <div className="text-center mb-20">
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">Work History</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-linear-to-r from-violet-500 to-sky-500 rounded-full mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-linear-to-b from-violet-600/50 via-violet-600/20 to-transparent" />

          <div className="pl-16 md:pl-24 relative">
            {/* Dot */}
            <div className="absolute left-4 md:left-6 top-4 w-5 h-5 rounded-full border-2 border-violet-500 bg-slate-950 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-violet-500" />
            </div>

            <div className="glass rounded-2xl p-8 border border-white/5 hover:border-violet-500/25 transition-all duration-300">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Frontend Developer</h3>
                  <p className="text-violet-400 font-medium mt-1">Self-Directed / Freelance Projects</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="px-4 py-1.5 bg-violet-600/15 border border-violet-500/30 text-violet-300 text-sm rounded-full font-medium">
                    June 2025 — Feb 2026
                  </span>
                  <span className="px-3 py-1 bg-green-600/10 border border-green-500/20 text-green-400 text-xs rounded-full">
                    9 Months
                  </span>
                </div>
              </div>

              {/* Bullet achievements */}
              <ul className="space-y-4">
                {achievements.map((a, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="shrink-0 w-9 h-9 rounded-lg bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mt-0.5">
                      {a.icon}
                    </div>
                    <p className="text-slate-300 leading-relaxed pt-1.5">{a.text}</p>
                  </li>
                ))}
              </ul>

              {/* Tech pills */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-slate-500 text-xs mb-3 uppercase tracking-wider">Technologies Used</p>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS', 'SCSS', 'Node.js', 'Sharetribe', 'Git'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-md font-medium border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
