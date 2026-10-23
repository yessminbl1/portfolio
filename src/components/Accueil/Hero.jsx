import React, { useState, useEffect } from 'react';
import { FaRocket, FaEnvelope, FaLinkedin, FaDownload } from 'react-icons/fa';
import { userData } from '../../data/user';

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const titles = userData.titles || [userData.title];

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    let timeout;

    if (!isDeleting && charIndex < currentTitle.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
    } else if (!isDeleting && charIndex === currentTitle.length) {
      // Pause at end
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      // Move to next title
      setIsDeleting(false);
      setCurrentTitleIndex((currentTitleIndex + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentTitleIndex, titles]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* Background Glows */}
      <div className="absolute top-20 left-[20%] w-[300px] h-[300px] bg-indigo-600/20 rounded-full blur-[100px] animate-float"></div>
      <div className="absolute bottom-20 right-[20%] w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-3s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[200px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6 animate-fade-in-up">
              👋 Disponible pour opportunités
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              {userData.name}
            </h1>

            {/* Typed Title */}
            <div className="text-2xl md:text-3xl font-medium text-indigo-400 mb-6 h-10 flex items-center justify-center md:justify-start">
              <span>{displayedText}</span>
              <span className="typed-cursor"></span>
            </div>

            <p className="text-lg text-slate-400 max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
              {userData.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 hover:scale-105"
              >
                <FaRocket />
                Voir mes projets
              </a>
              <a
                href={userData.cvLink || '#'}
                download
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-semibold transition-all backdrop-blur-sm flex items-center justify-center gap-2 hover:border-indigo-500/30 hover:scale-105"
              >
                <FaDownload />
                Télécharger CV
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 text-slate-400 hover:text-white flex items-center justify-center gap-2 transition-colors"
              >
                <FaEnvelope />
                Me contacter
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex items-center justify-center md:justify-start gap-6">
              {userData.socials.linkedin && (
                <a
                  href={userData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/30 flex items-center justify-center text-slate-400 hover:text-blue-400 text-xl transition-all hover:-translate-y-1"
                >
                  <FaLinkedin />
                </a>
              )}
            </div>
          </div>

          {/* Wrapper for Image */}
          <div className="relative flex-1 flex justify-center max-w-md mx-auto md:max-w-none">
            <div className="relative z-10 w-64 h-64 md:w-96 md:h-96">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-3xl rotate-6 opacity-30 blur-2xl animate-float"></div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 border-2 border-indigo-500/10 rounded-3xl rotate-3"></div>
              <img
                src={userData.avatar}
                alt={userData.name}
                className="relative w-full h-full object-cover rounded-3xl border-2 border-white/10 shadow-2xl bg-slate-800"
              />
              {/* Status badge */}
              <div className="absolute -bottom-4 -right-4 bg-slate-800 border border-slate-700 rounded-2xl px-4 py-2 shadow-xl">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-slate-300 font-medium">Disponible</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {Object.entries(userData.stats).map(([key, value], index) => (
            <div key={index} className="glass-card p-5 rounded-2xl text-center hover:bg-white/5 transition-all group">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">
                {value}
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                {key === 'projects' && 'Projets'}
                {key === 'internships' && 'Stages'}
                {key === 'clients' && 'Clients'}
                {key === 'years' && "Années d'Exp"}
                {key === 'satisfaction' && 'Satisfaction'}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;