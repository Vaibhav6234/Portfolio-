import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';

const Footer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8 px-6 overflow-hidden">
      {/* Gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-2xl font-black tracking-tight gradient-text">Vaibhav</p>
            <p className="text-slate-500 text-sm mt-2">Frontend Developer & React Enthusiast</p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            {['About', 'Skills', 'Projects', 'Experience', 'GitHub', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-violet-400 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            {[
              { icon: <FaGithub />, href: 'https://github.com', label: 'GitHub' },
              { icon: <FaLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: <FaTwitter />, href: 'https://twitter.com', label: 'Twitter' },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-slate-400 hover:text-violet-400 hover:border-violet-500/30 border border-white/5 transition-all duration-300 hover:-translate-y-0.5"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-violet-600/30 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>
            © {new Date().getFullYear()} <span className="text-violet-400 font-medium">Vaibhav</span>. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built  using React & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 glass rounded-full flex items-center justify-center text-violet-400 border border-violet-500/30 hover:bg-violet-600 hover:text-white hover:border-violet-600 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all duration-300 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
        }`}
      >
        <HiArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
