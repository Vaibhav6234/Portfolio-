import { useEffect, useRef, useState } from 'react';
import { HiDownload, HiArrowRight, HiMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import resumePDF from '../assets/Vaibhav_Resume.pdf';

const ROLES = [
  'Frontend Developer',
  'React Developer',
  'UI Enthusiast',
  'Problem Solver',
];

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const timeout = useRef(null);

  useEffect(() => {
    const current = ROLES[roleIdx];
    if (typing) {
      if (displayed.length < current.length) {
        timeout.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
      } else {
        timeout.current = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIdx((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout.current);
  }, [displayed, typing, roleIdx]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden px-6">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-violet-700/20 rounded-full blur-[100px] animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-sky-600/15 rounded-full blur-[100px] animate-blob pointer-events-none" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, #7c3aed 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20 relative z-10 pt-20">
        {/* Left — Text */}
        <div className="flex-1 text-center md:text-left space-y-7">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-600/15 border border-violet-500/25 text-violet-400 text-xs font-semibold tracking-widest uppercase">
              👋 Hello, I'm
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none animate-fade-in-up delay-100">
            <span className="text-white">Vaibhav</span>
          </h1>

          <div className="text-2xl md:text-3xl font-bold text-slate-300 animate-fade-in-up delay-200 h-9 flex items-center justify-center md:justify-start gap-1">
            <span className="text-violet-400">&lt;</span>
            <span className="font-mono gradient-text min-w-[18ch]">{displayed}</span>
            <span className="cursor-blink text-sky-400 font-thin text-3xl leading-none">|</span>
            <span className="text-violet-400">/&gt;</span>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed max-w-lg animate-fade-in-up delay-300">
            Frontend Developer with <span className="text-violet-400 font-semibold">9 months</span> of experience
            building responsive and scalable web applications. Passionate about clean code and performance optimization.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in-up delay-400">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:-translate-y-0.5"
            >
              View Projects
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={resumePDF}
              download="Vaibhav_Resume.pdf"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full gradient-border glass text-slate-200 font-semibold transition-all duration-300 hover:bg-white/5 hover:-translate-y-0.5"
            >
              <HiDownload className="group-hover:-translate-y-0.5 transition-transform" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full gradient-border glass text-slate-200 font-semibold transition-all duration-300 hover:bg-white/5 hover:-translate-y-0.5"
            >
              <HiMail className="group-hover:scale-110 transition-transform" />
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="flex gap-5 justify-center md:justify-start animate-fade-in-up delay-500">
            {[
              { icon: <FaGithub />, href: 'https://github.com/Vaibhav6234', label: 'GitHub' },
              { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/vaibhav-kumar1/', label: 'LinkedIn' },
              // { icon: <FaTwitter />, href: 'https://twitter.com', label: 'Twitter' },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-violet-400 hover:border-violet-500/50 hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all duration-300 text-lg"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right — Avatar card */}
        <div className="flex-shrink-0 relative animate-fade-in-up delay-200">
          {/* Spinning gradient ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600 via-sky-500 to-violet-600 blur-sm opacity-50 spin-slow scale-105" />
          {/* Avatar bg */}
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-violet-900 to-slate-900 border-2 border-violet-600/40 animate-float flex items-center justify-center overflow-hidden shadow-2xl">
            <span className="text-9xl select-none">🧑‍💻</span>
          </div>
          {/* Badge: Available */}
          <div className="absolute bottom-3 right-0 md:-right-4 glass px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            Available for work
          </div>
          {/* Badge: Experience */}
          <div className="absolute top-2 -left-4 md:-left-12 glass px-4 py-2 rounded-full text-xs font-semibold text-violet-300 border border-violet-500/20">
            9 Months Exp.
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500 text-xs animate-bounce">
        <span>Scroll down</span>
        <div className="w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-violet-400 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
