import React from 'react';
import { userData } from '../../data/user';
import { FaCheck } from 'react-icons/fa';

const colorMap = {
  indigo: {
    bg: 'bg-indigo-500/10',
    text: 'text-indigo-400',
    border: 'border-indigo-500/20',
    glow: 'service-card-indigo',
    badge: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300',
    gradient: 'from-indigo-500 to-violet-600',
  },
  pink: {
    bg: 'bg-pink-500/10',
    text: 'text-pink-400',
    border: 'border-pink-500/20',
    glow: 'service-card-pink',
    badge: 'bg-pink-500/10 border-pink-500/20 text-pink-300',
    gradient: 'from-pink-500 to-rose-600',
  },
  purple: {
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    border: 'border-purple-500/20',
    glow: 'service-card-purple',
    badge: 'bg-purple-500/10 border-purple-500/20 text-purple-300',
    gradient: 'from-purple-500 to-indigo-600',
  },
};

const Services = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-pink-600/5 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
            💼 Ce que je fais
          </div>
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400 mb-4">
            Mes Services
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Des solutions complètes pour concrétiser vos projets digitaux, du design à la mise en production.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {userData.services.map((service, index) => {
            const colors = colorMap[service.color] || colorMap.indigo;
            const Icon = service.icon;

            return (
              <div
                key={index}
                className={`glass-card ${colors.glow} p-8 rounded-2xl border border-white/10 hover:-translate-y-2 transition-all duration-300 group cursor-default`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`bg-gradient-to-br ${colors.gradient} w-full h-full rounded-2xl flex items-center justify-center`}>
                    <Icon size={24} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-xs rounded-full border ${colors.badge} font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div className={`mt-6 h-0.5 bg-gradient-to-r ${colors.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
