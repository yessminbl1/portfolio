import React from 'react';
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaHeart, FaCode } from 'react-icons/fa';
import { userData } from '../../data/user';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'À propos', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Expérience', href: '/#experience' },
    { name: 'Projets', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <footer className="relative mt-0 border-t border-slate-800">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>

      <div className="bg-slate-900/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-3 gap-10 mb-12">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  <span className="font-mono">P</span>
                </div>
                <span className="text-white font-bold text-lg tracking-wide">
                  {userData.name.split(' ')[0]}<span className="text-indigo-400">.Dev</span>
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                {userData.tagline} — solutions web & mobile modernes basées à Sfax, Tunisie.
              </p>
              <div className="flex items-center gap-2 mt-4 text-slate-500 text-sm">
                <FaMapMarkerAlt className="text-indigo-400 shrink-0" />
                <span>{userData.location}</span>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-indigo-400 text-sm transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Contact</h4>
              <div className="space-y-4">
                <a
                  href={`mailto:${userData.email}`}
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                    <FaEnvelope size={14} />
                  </div>
                  <span className="text-sm">{userData.email}</span>
                </a>
                <a
                  href={userData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                    <FaLinkedin size={14} />
                  </div>
                  <span className="text-sm">LinkedIn Profile</span>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center sm:text-left">
              © {currentYear} <span className="text-slate-300 font-medium">{userData.name}</span>. Tous droits réservés.
            </p>
            <p className="text-slate-500 text-sm flex items-center gap-2">
              Fait avec <FaHeart className="text-pink-500 animate-pulse" /> et <FaCode className="text-indigo-400" /> React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
