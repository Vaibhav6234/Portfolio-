import { useInView } from '../hooks/useInView';
import { FaCode, FaServer, FaBriefcase } from 'react-icons/fa';
import { HiAcademicCap, HiLightningBolt, HiHeart } from 'react-icons/hi';

const stats = [
  { label: 'Months Experience', value: '9+', icon: <FaBriefcase /> },
  { label: 'Projects Completed', value: '8+', icon: <FaCode /> },
  { label: 'Technologies', value: '11+', icon: <FaServer /> },
];

const highlights = [
  {
    icon: <HiLightningBolt className="text-violet-400" />,
    title: '9 Months of Experience',
    desc: 'Hands-on experience shipping production-ready React web applications.',
  },
  {
    icon: <HiAcademicCap className="text-sky-400" />,
    title: 'Full-Stack Capable',
    desc: 'Skilled in both Frontend and Backend — React.js, Node.js, Express.js & MongoDB.',
  },
  {
    icon: <HiHeart className="text-pink-400" />,
    title: 'Passionate about Clean Code',
    desc: 'I believe readable, scalable, and maintainable code is an art form.',
  },
];

const About = () => {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden">
      {/* Bg accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-violet-800/10 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className={`max-w-7xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Title */}
        <div className="text-center mb-20">
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">Get To Know Me</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-violet-500 to-sky-500 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — Code block aesthetic */}
          <div className="relative">
            <div className="glass rounded-2xl p-6 font-mono text-sm leading-7 border border-violet-500/10">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-3 text-slate-500 text-xs">about-vaibhav.js</span>
              </div>
              <div className="space-y-1">
                <div><span className="text-violet-400">const</span> <span className="text-sky-300">vaibhav</span> <span className="text-slate-400">=</span> {'{'}</div>
                <div className="pl-6"><span className="text-emerald-400">name</span><span className="text-slate-400">:</span> <span className="text-amber-300">"Vaibhav"</span><span className="text-slate-400">,</span></div>
                <div className="pl-6"><span className="text-emerald-400">role</span><span className="text-slate-400">:</span> <span className="text-amber-300">"Frontend Developer"</span><span className="text-slate-400">,</span></div>
                <div className="pl-6"><span className="text-emerald-400">experience</span><span className="text-slate-400">:</span> <span className="text-amber-300">"9 months"</span><span className="text-slate-400">,</span></div>
                <div className="pl-6"><span className="text-emerald-400">stack</span><span className="text-slate-400">:</span> <span className="text-slate-400">[</span></div>
                <div className="pl-12"><span className="text-amber-300">"React.js"</span><span className="text-slate-400">,</span></div>
                <div className="pl-12"><span className="text-amber-300">"Node.js"</span><span className="text-slate-400">,</span></div>
                <div className="pl-12"><span className="text-amber-300">"Express.js"</span><span className="text-slate-400">,</span></div>
                <div className="pl-12"><span className="text-amber-300">"MongoDB"</span><span className="text-slate-400">,</span></div>
                <div className="pl-6"><span className="text-slate-400">],</span></div>
                <div className="pl-6"><span className="text-emerald-400">openTo</span><span className="text-slate-400">:</span> <span className="text-amber-300">"Full-time / Freelance"</span></div>
                <div>{'}'}<span className="text-slate-500">;</span></div>
              </div>
            </div>
            {/* Decorative glow behind the card */}
            <div className="absolute -inset-4 bg-violet-600/10 rounded-3xl blur-xl -z-10" />
          </div>

          {/* Right — text + highlights */}
          <div className="space-y-8">
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm a <span className="text-white font-semibold">Full-Stack Developer</span> with a deep passion for crafting
              beautiful and performant web experiences. With <span className="text-violet-400 font-semibold">9 months</span> of
              hands-on experience, I specialize in building responsive UIs using <span className="text-sky-400 font-semibold">React.js</span> on
              the frontend and scalable APIs with <span className="text-sky-400 font-semibold">Node.js, Express & MongoDB</span> on the backend.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I'm passionate about building end-to-end web applications — from pixel-perfect
              interfaces to robust server-side logic. I believe great code is not just functional —
              it's <span className="text-violet-400 font-medium">clean, readable, and scalable</span>.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((h) => (
                <div key={h.title} className="flex gap-4 glass rounded-xl p-4 border border-white/5 hover:border-violet-500/20 transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-xl">
                    {h.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{h.title}</p>
                    <p className="text-slate-400 text-sm mt-0.5">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-8 text-center border border-white/5 hover:border-violet-500/20 transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-3xl mb-3 text-violet-400 flex justify-center group-hover:scale-110 transition-transform">{s.icon}</div>
              <p className="text-5xl font-black gradient-text">{s.value}</p>
              <p className="text-slate-400 text-sm mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
