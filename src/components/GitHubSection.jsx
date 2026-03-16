import { useInView } from '../hooks/useInView';
import { FaGithub, FaStar, FaCode } from 'react-icons/fa';
import { HiTrendingUp, HiCollection, HiLightningBolt } from 'react-icons/hi';

const dsaTopics = [
  { name: 'Arrays & Strings', progress: 70, color: 'from-violet-500 to-purple-600' },
  { name: 'Linked Lists', progress: 55, color: 'from-sky-500 to-cyan-600' },
  { name: 'Stacks & Queues', progress: 60, color: 'from-emerald-500 to-teal-600' },
  { name: 'Trees & Graphs', progress: 40, color: 'from-amber-500 to-orange-600' },
  { name: 'Sorting & Searching', progress: 65, color: 'from-rose-500 to-pink-600' },
];

const codingStats = [
  { label: 'Problems Solved', value: '50+', icon: <FaCode />, color: 'text-violet-400' },
  { label: 'GitHub Repos', value: '8+', icon: <FaGithub />, color: 'text-slate-300' },
  { label: 'Current Streak', value: '12d', icon: <FaStar />, color: 'text-amber-400' },
];

const GitHubSection = () => {
  const { ref, inView } = useInView();

  const contributions = Array.from({ length: 52 }, () =>
    Array.from({ length: 7 }, () => Math.floor(Math.random() * 5))
  );

  const levelColors = ['bg-slate-800', 'bg-violet-900/60', 'bg-violet-700/70', 'bg-violet-600', 'bg-violet-400'];

  return (
    <section id="github" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-96 h-96 bg-violet-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className={`max-w-7xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Title */}
        <div className="text-center mb-20">
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">Open Source & Practice</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            GitHub & <span className="gradient-text">Coding</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-violet-500 to-sky-500 rounded-full mx-auto" />
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {codingStats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-7 border border-white/5 hover:border-violet-500/20 transition-all duration-300 hover:-translate-y-1 flex items-center gap-5">
              <div className={`text-3xl ${s.color}`}>{s.icon}</div>
              <div>
                <p className="text-3xl font-black text-white">{s.value}</p>
                <p className="text-slate-400 text-sm">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* GitHub Contribution Grid */}
          <div className="glass rounded-2xl p-7 border border-white/5">
            <div className="flex items-center gap-3 mb-6">
              <FaGithub className="text-2xl text-slate-300" />
              <h3 className="font-bold text-white text-lg">Contribution Activity</h3>
            </div>
            <div className="overflow-x-auto pb-2">
              <div className="flex gap-1 min-w-max">
                {contributions.map((week, wi) => (
                  <div key={wi} className="flex flex-col gap-1">
                    {week.map((day, di) => (
                      <div
                        key={di}
                        className={`w-3 h-3 rounded-sm ${levelColors[day]} transition-all duration-300 hover:scale-125 cursor-default`}
                        title={`${day > 0 ? day : 'No'} contribution${day !== 1 ? 's' : ''}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-end gap-2 mt-4">
              <span className="text-slate-500 text-xs">Less</span>
              {levelColors.map((c, i) => <div key={i} className={`w-3 h-3 rounded-sm ${c}`} />)}
              <span className="text-slate-500 text-xs">More</span>
            </div>
            <div className="mt-6 pt-5 border-t border-white/5">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 font-medium transition-colors"
              >
                <FaGithub /> View GitHub Profile →
              </a>
            </div>
          </div>

          {/* DSA Progress */}
          <div className="glass rounded-2xl p-7 border border-white/5">
            <div className="flex items-center gap-3 mb-6">
              <HiTrendingUp className="text-2xl text-violet-400" />
              <h3 className="font-bold text-white text-lg">DSA Progress</h3>
            </div>
            <div className="space-y-5">
              {dsaTopics.map((topic) => (
                <div key={topic.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300 font-medium">{topic.name}</span>
                    <span className="text-slate-500">{topic.progress}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${topic.color} transition-all duration-1000 ease-out`}
                      style={{ width: inView ? `${topic.progress}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-7 pt-5 border-t border-white/5 flex items-center gap-3">
              <HiLightningBolt className="text-amber-400 text-lg" />
              <p className="text-slate-400 text-sm">Practicing on <span className="text-white">LeetCode</span> and <span className="text-white">GeeksforGeeks</span> daily</p>
            </div>
          </div>
        </div>

        {/* Problem solving platforms */}
        <div className="mt-8 glass rounded-2xl p-7 border border-white/5">
          <div className="flex items-center gap-3 mb-6">
            <HiCollection className="text-2xl text-sky-400" />
            <h3 className="font-bold text-white text-lg">Problem Solving Practice</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { platform: 'LeetCode', problems: '30+', desc: 'Arrays, Strings, DP', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
              { platform: 'GeeksforGeeks', problems: '20+', desc: 'Core DSA concepts', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
              { platform: 'GitHub', problems: '8+', desc: 'Open source projects', color: 'text-slate-300', bg: 'bg-slate-500/10 border-slate-500/20' },
            ].map((p) => (
              <div key={p.platform} className={`p-5 rounded-xl border ${p.bg} hover:-translate-y-1 transition-transform duration-300`}>
                <p className={`text-2xl font-black ${p.color}`}>{p.problems}</p>
                <p className="text-white font-semibold mt-1">{p.platform}</p>
                <p className="text-slate-400 text-sm mt-0.5">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
