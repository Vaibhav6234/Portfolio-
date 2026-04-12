import { BiLogoVisualStudio } from "react-icons/bi";
import { useInView } from "../hooks/useInView";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaSass,
  FaCode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiCplusplus,
  SiGooglechrome,
  SiVercel,
  SiRender,
  SiMongoose,
  SiPostman,
} from "react-icons/si";

const skillCategories = [
  {
    category: "Frontend",
    accent: "violet",
    border: "hover:border-violet-500/40",
    glow: "hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]",
    dot: "from-violet-500 to-purple-600",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, color: "#E44D26" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
      { name: "SCSS", icon: <FaSass />, color: "#CD6799" },
    ],
  },
  {
    category: "Programming",
    accent: "sky",
    border: "hover:border-sky-500/40",
    glow: "hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]",
    dot: "from-sky-500 to-cyan-600",
    skills: [
      { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
      { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    ],
  },
  {
    category: "Tools",
    accent: "emerald",
    border: "hover:border-emerald-500/40",
    glow: "hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]",
    dot: "from-emerald-500 to-teal-600",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { name: "GitHub", icon: <FaGithub />, color: "#e2e8f0" },
      { name: "VS Code", icon: <BiLogoVisualStudio />, color: "#007ACC" },
      { name: "Postman", icon: <SiPostman />, color: "#e0531f" },
      { name: "Vercel", icon: <SiVercel />, color: "#000000" },
      { name: "Render", icon: <SiRender />, color: "#ffffff" },
    ],
  },
  {
    category: " Backend",
    accent: "rose",
    border: "hover:border-rose-500/40",
    glow: "hover:shadow-[0_0_30px_rgba(244,63,94,0.2)]",
    dot: "from-rose-500 to-pink-600",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
      { name: "Express.js", icon: <SiExpress />, color: "#e2e8f0" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "Mongoose", icon: <SiMongoose />, color: "#FF5E5E" },
    ],
  },
];

const SkillCard = ({ name, icon, color }) => (
  <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/3 hover:bg-white/8 border border-white/5 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 group cursor-default">
    <div
      className="text-4xl transition-transform duration-300 group-hover:scale-110 drop-shadow-lg"
      style={{ color }}
    >
      {icon}
    </div>
    <span className="text-slate-300 text-xs font-medium text-center leading-tight">
      {name}
    </span>
  </div>
);

const Skills = () => {
  const { ref, inView } = useInView();

  return (
    <section
      id="skills"
      className="py-28 px-6 bg-slate-950/50 relative overflow-hidden"
    >
      <div className="absolute left-0 top-1/4 w-80 h-80 bg-sky-700/10 rounded-full blur-[100px] pointer-events-none" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Title */}
        <div className="text-center mb-20">
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">
            What I Work With
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-linear-to-r from-violet-500 to-sky-500 rounded-full mx-auto" />
        </div>

        {/* Category cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className={`glass rounded-2xl p-8 border border-white/5 ${cat.border} ${cat.glow} transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-7">
                <div
                  className={`w-3 h-3 rounded-full bg-linear-to-br ${cat.dot} shadow-lg`}
                />
                <h3 className="font-bold text-white text-lg">{cat.category}</h3>
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {cat.skills.map((sk) => (
                  <SkillCard key={sk.name} {...sk} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Flat pill summary */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm mb-6 uppercase tracking-wider">
            All technologies at a glance
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {skillCategories
              .flatMap((c) => c.skills)
              .map(({ name, icon, color }) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium text-slate-300 border border-white/5 hover:border-violet-500/30 hover:text-violet-300 transition-all duration-200 cursor-default"
                >
                  <span style={{ color }} className="text-base">
                    {icon}
                  </span>
                  {name}
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
