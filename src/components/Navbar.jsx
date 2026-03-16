import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-lg shadow-black/30 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-2xl font-black tracking-tight gradient-text">
          Vaibhav<span className="text-violet-400"></span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`text-sm font-medium transition-all duration-200 hover:text-violet-400 relative group ${
                  active === link.href ? 'text-violet-400' : 'text-slate-300'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-400 transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]"
          >
            Hire Me
          </a>
          <button
            className="md:hidden text-slate-300 hover:text-violet-400 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => { setMenuOpen(false); setActive(link.href); }}
              className="text-slate-300 hover:text-violet-400 text-sm font-medium transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-5 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold text-center transition-all"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
