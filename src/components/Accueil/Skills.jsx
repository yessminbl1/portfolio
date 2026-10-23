import React, { useEffect, useRef, useState } from 'react';
import { userData } from '../../data/user';

const categoryColors = {
  Frontend: { bar: 'from-indigo-500 to-violet-500', icon: 'bg-indigo-500/10 text-indigo-400', border: 'border-indigo-500/20' },
  Backend: { bar: 'from-emerald-500 to-teal-500', icon: 'bg-emerald-500/10 text-emerald-400', border: 'border-emerald-500/20' },
  Mobile: { bar: 'from-pink-500 to-rose-500', icon: 'bg-pink-500/10 text-pink-400', border: 'border-pink-500/20' },
  Outils: { bar: 'from-amber-500 to-orange-500', icon: 'bg-amber-500/10 text-amber-400', border: 'border-amber-500/20' },
};

const SkillBar = ({ name, level, colors, animated }) => {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className="text-slate-400 text-xs font-mono tabular-nums">{level}%</span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${colors.bar} rounded-full skill-bar ${animated ? 'animated' : ''}`}
          style={{ '--skill-level': `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [animated]);

  return (
    <section id="skills" className="py-20 bg-slate-900/50 relative" ref={sectionRef}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/5 rounded-full blur-[150px]"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-sm font-medium mb-6">
            🛠️ Compétences techniques
          </div>
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-indigo-400 mb-4">
            Mon Stack Technique
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Les technologies que je maîtrise pour construire des solutions robustes et modernes.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {userData.skills.map((skillGroup, index) => {
            const colors = categoryColors[skillGroup.category] || categoryColors.Frontend;
            const Icon = skillGroup.icon;

            return (
              <div
                key={index}
                className={`glass-card p-8 rounded-2xl border ${colors.border} hover:bg-white/[0.03] transition-all duration-300`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-10 h-10 rounded-xl ${colors.icon} flex items-center justify-center`}>
                    <Icon size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{skillGroup.category}</h3>
                  <div className={`ml-auto px-2 py-0.5 rounded text-xs font-medium ${colors.icon} border ${colors.border}`}>
                    {skillGroup.items.length} skills
                  </div>
                </div>

                {/* Skill Bars */}
                <div>
                  {skillGroup.items.map((skill, i) => (
                    <SkillBar
                      key={i}
                      name={skill.name}
                      level={skill.level}
                      colors={colors}
                      animated={animated}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm">
            🚀 En constante évolution — j'apprends de nouveaux outils chaque semaine
          </p>
        </div>

      </div>
    </section>
  );
};

export default Skills;
