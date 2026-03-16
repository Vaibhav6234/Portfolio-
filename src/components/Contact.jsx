import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-28 px-6 bg-slate-950/50 relative overflow-hidden">
      <div className="absolute left-10 top-10 w-80 h-80 bg-violet-800/10 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className={`max-w-7xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Title */}
        <div className="text-center mb-20">
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">Let's Work Together</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-violet-500 to-sky-500 rounded-full mx-auto" />
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let's build something great</h3>
              <p className="text-slate-400 leading-relaxed">
                Whether you have a project in mind, a role to fill, or simply want to connect — feel free to reach out!
                I'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: <HiMail />, label: 'Email', value: 'vaibhavnimesh002@example.com', href: 'mailto:vaibhavnimesh002@example.com' },
                { icon: <HiPhone />, label: 'Phone', value: '+91 8860710428', href: 'tel:+918860710428' },
                { icon: <HiLocationMarker />, label: 'Location', value: 'India', href: null },
              ].map((info) => (
                <div key={info.label} className="flex items-center gap-4 glass rounded-xl p-4 border border-white/5 hover:border-violet-500/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-violet-600/20 flex items-center justify-center text-violet-400 text-xl">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-slate-200 font-medium hover:text-violet-400 transition-colors">{info.value}</a>
                    ) : (
                      <p className="text-slate-200 font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-slate-500 text-sm mb-4 uppercase tracking-wider">Find me on</p>
              <div className="flex gap-4">
                {[
                  { icon: <FaGithub />, href: 'https://github.com/Vaibhav6234', label: 'GitHub', bg: 'hover:bg-slate-700' },
                  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/vaibhav-kumar1/', label: 'LinkedIn', bg: 'hover:bg-blue-700' },
                  // { icon: <FaTwitter />, href: 'https://twitter.com', label: 'Twitter', bg: 'hover:bg-sky-600' },
                  { icon: <HiMail />, href: 'mailto:vaibhavnimesh002@gmail.com', label: 'Email', bg: 'hover:bg-violet-700' },
                ].map(({ icon, href, label, bg }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className={`w-12 h-12 glass rounded-xl flex items-center justify-center text-slate-300 hover:text-white text-xl ${bg} hover:border-white/10 border border-white/5 transition-all duration-300 hover:-translate-y-1`}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 border border-white/5 space-y-6">
            {submitted && (
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-green-400 text-sm font-medium">
                ✅ Message sent! I'll get back to you soon.
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="name" className="block text-slate-400 text-sm font-medium">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-slate-900/50 rounded-xl border border-white/10 px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-all duration-200"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-slate-400 text-sm font-medium">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-slate-900/50 rounded-xl border border-white/10 px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-all duration-200"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-slate-400 text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Hi Vaibhav, I'd like to talk about..."
                className="w-full bg-slate-900/50 rounded-xl border border-white/10 px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-all duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 text-white font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
