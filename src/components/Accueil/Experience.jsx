import React from 'react';
import { userData } from '../../data/user';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900/40 relative">
      {/* Decor line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent hidden md:block"></div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Parcours</h2>
          <p className="text-slate-400 text-lg">Mon expérience et ma formation</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24 relative z-10">

          {/* Experience Column */}
          <div className="space-y-12">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-8">
              <FaBriefcase className="text-indigo-400" /> Expérience
            </h3>

            {userData.experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-0 border-l-2 border-indigo-500/30 md:border-none">
                <div className="md:glass-card md:p-6 rounded-xl transition-all hover:bg-white/5 active:scale-[0.98]">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1 block">
                    {exp.period}
                  </span>
                  {exp.location && (
                    <span className="text-xs text-slate-500 mb-2 block">📍 {exp.location}</span>
                  )}
                  <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                  <p className="text-slate-300 font-medium mb-3">{exp.company}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-8">
              <FaGraduationCap className="text-pink-400" /> Formation
            </h3>

            {userData.education.map((edu, index) => (
              <div key={index} className="relative pl-8 md:pl-0 border-l-2 border-pink-500/30 md:border-none">
                <div className="md:glass-card md:p-6 rounded-xl transition-all hover:bg-white/5">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <span className="text-xs font-bold text-pink-400 uppercase tracking-widest">
                      {edu.year}
                    </span>
                    {edu.status && (
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                        edu.status === 'En cours'
                          ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                          : 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30'
                      }`}>
                        {edu.status === 'En cours' ? '🎓 En cours' : '✅ ' + edu.status}
                      </span>
                    )}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                  <p className="text-slate-300 font-medium">{edu.school}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
