import React, { useEffect, useState } from 'react';
import { getProjects } from '../../services/api';
import { userData } from '../../data/user';
import { FaGithub, FaSpinner, FaExternalLinkAlt } from 'react-icons/fa';

const FILTERS = ['Tous', 'Web Dev', 'Mobile', 'Desktop'];

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState('Tous');

    useEffect(() => {
        const fetchProjects = async () => {
            const apiData = await getProjects();

            // On commence toujours par les projets locaux (les vrais projets)
            // On ajoute les projets API par-dessus s'ils existent (ajoutés via Dashboard)
            // en évitant les doublons par titre
            const localProjects = userData.defaultProjects;

            if (apiData && apiData.length > 0) {
                // Éviter les doublons : garder les projets API qui n'ont pas le même titre
                const localTitles = localProjects.map(p => p.title.toLowerCase());
                const uniqueApiProjects = apiData.filter(
                    p => !localTitles.includes(p.title?.toLowerCase())
                );
                setProjects([...localProjects, ...uniqueApiProjects]);
            } else {
                setProjects(localProjects);
            }

            setLoading(false);
        };

        fetchProjects();
    }, []);

    const filteredProjects = activeFilter === 'Tous'
        ? projects
        : projects.filter(p => (p.category || 'Web Dev') === activeFilter);

    return (
        <section id="projects" className="py-20 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-pink-600/5 rounded-full blur-[100px] -translate-y-1/2"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                <div className="text-center mb-12">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6">
                        🏆 Réalisations
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Mes Projets</h2>
                    <p className="text-slate-400 text-lg">Une sélection de mes réalisations récentes</p>
                </div>

                {/* Filter Tabs */}
                <div className="flex justify-center gap-3 mb-12">
                    {FILTERS.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                                activeFilter === filter
                                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                                    : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50 border border-slate-700'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <FaSpinner className="animate-spin text-4xl text-indigo-500" />
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.length === 0 ? (
                            <div className="col-span-full text-center py-10 glass-card rounded-xl">
                                <p className="text-slate-400">Aucun projet dans cette catégorie.</p>
                            </div>
                        ) : (
                            filteredProjects.map((project) => (
                                <div key={project.id} className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-900/20">
                                    <div className="h-48 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10"></div>
                                        <img
                                            src={project.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        {/* Category badge over image */}
                                        <div className="absolute top-4 left-4 z-20">
                                            <span className="inline-block px-3 py-1 bg-indigo-600/90 backdrop-blur-sm text-white text-xs font-bold rounded-full shadow-lg">
                                                {project.category || "Web Dev"}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                                            {project.title}
                                        </h3>

                                        <p className="text-slate-400 text-sm mb-5 line-clamp-3 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Technologies tags */}
                                        {project.technologies && (
                                            <div className="flex flex-wrap gap-2 mb-5">
                                                {project.technologies.map((tech, i) => (
                                                    <span key={i} className="px-2 py-0.5 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700 font-mono">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        <div className="flex items-center gap-4 pt-2 border-t border-slate-800">
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-slate-400 hover:text-white transition text-sm" title="Code Source">
                                                    <FaGithub size={16} /> Code
                                                </a>
                                            )}
                                            {project.link && project.link !== '#' && (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-slate-400 hover:text-indigo-400 transition text-sm" title="Voir le site">
                                                    <FaExternalLinkAlt size={13} /> Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}

            </div>
        </section>
    );
};

export default Projects;
