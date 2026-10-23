import React from 'react';
import { userData } from '../../data/user';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400 mb-4">
            À propos de moi
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {userData.tagline}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {Object.entries(userData.stats).map(([key, value], index) => (
            <div key={index} className="glass-card p-6 rounded-2xl text-center hover:bg-white/5 transition-all group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                {value}
              </div>
              <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">
                {key === 'projects' && 'Projets'}
                {key === 'internships' && 'Stages'}
                {key === 'clients' && 'Clients'}
                {key === 'years' && "Années d'Exp"}
                {key === 'satisfaction' && 'Satisfaction'}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Split */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Mission Text */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-indigo-500 rounded-full"></span>
              Ma Mission
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              {userData.about.mission}
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {userData.about.features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                    <feature.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{feature.title}</h4>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual/Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-bl from-pink-500 to-indigo-500 rounded-full opacity-20 blur-3xl animate-float"></div>
              <div className="relative glass-card p-8 rounded-3xl h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-6">Compétences Clés</h3>
                <div className="flex flex-wrap gap-3">
                  {userData.about.expertise.map((skill, index) => (
                    <span key={index} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm hover:bg-white/10 hover:border-indigo-500/30 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values - Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {userData.about.values.map((value, index) => (
            <div key={index} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-colors">
              <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
              <p className="text-slate-400">{value.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
