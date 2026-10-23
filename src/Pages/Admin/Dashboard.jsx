import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { getProjects, deleteProject, createProject } from '../../services/api'; // Import createProject
import { FaPlus, FaTrash, FaSignOutAlt, FaEye } from 'react-icons/fa';

const Dashboard = () => {
    const { logout } = useAuth();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    // New Project Form State
    const [newProject, setNewProject] = useState({
        title: '',
        description: '',
        image: '',
        github: '',
        link: '',
        category: 'Web Dev'
    });

    const fetchProjects = async () => {
        setLoading(true);
        const data = await getProjects();
        setProjects(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')) {
            const success = await deleteProject(id);
            if (success) {
                setProjects(projects.filter(p => p.id !== id));
            } else {
                alert("Erreur lors de la suppression");
            }
        }
    };

    const handleCreate = async (e) => {
        e.preventDefault();
        const created = await createProject(newProject);
        if (created) {
            setProjects([...projects, created]);
            setShowModal(false);
            setNewProject({ title: '', description: '', image: '', github: '', link: '', category: 'Web Dev' });
        } else {
            alert("Erreur lors de la création");
        }
    };

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white">Tableau de Bord</h1>
                    <p className="text-slate-400">Gérez vos projets et contenu</p>
                </div>
                <button
                    onClick={logout}
                    className="flex items-center gap-2 bg-slate-800 text-slate-300 px-4 py-2 rounded-lg hover:bg-slate-700 hover:text-white transition border border-slate-700"
                >
                    <FaSignOutAlt /> Déconnexion
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="glass-card p-6 rounded-xl bg-gradient-to-br from-indigo-900/20 to-indigo-800/20 border-indigo-500/30">
                    <h3 className="text-indigo-300 text-sm font-medium">Total Projets</h3>
                    <p className="text-3xl font-bold text-white mt-2">{projects.length}</p>
                </div>
                {/* Placeholder stats */}
                <div className="glass-card p-6 rounded-xl">
                    <h3 className="text-slate-400 text-sm font-medium">Vues Totales</h3>
                    <p className="text-3xl font-bold text-white mt-2">1,234</p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                    <h3 className="text-slate-400 text-sm font-medium">Messages</h3>
                    <p className="text-3xl font-bold text-white mt-2">5</p>
                </div>
            </div>

            {/* Projects Section */}
            <div className="glass-card rounded-xl overflow-hidden">
                <div className="p-6 border-b border-slate-700 flex justify-between items-center bg-slate-800/50">
                    <h2 className="text-xl font-bold text-white">Mes Projets</h2>
                    <button
                        onClick={() => setShowModal(true)}
                        className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition shadow-lg shadow-indigo-600/20"
                    >
                        <FaPlus /> Nouveau Projet
                    </button>
                </div>

                <div className="p-6">
                    {loading ? (
                        <p className="text-slate-400">Chargement...</p>
                    ) : projects.length === 0 ? (
                        <p className="text-slate-400 text-center py-4">Aucun projet. Créez-en un !</p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="text-slate-400 border-b border-slate-700">
                                        <th className="py-3 px-4 font-medium">Titre</th>
                                        <th className="py-3 px-4 font-medium">Catégorie</th>
                                        <th className="py-3 px-4 font-medium hidden sm:table-cell">Lien</th>
                                        <th className="py-3 px-4 font-medium text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800">
                                    {projects.map((project) => (
                                        <tr key={project.id} className="hover:bg-slate-800/50 transition">
                                            <td className="py-3 px-4 text-white font-medium">{project.title}</td>
                                            <td className="py-3 px-4 text-slate-300">
                                                <span className="px-2 py-1 bg-slate-700 rounded text-xs">{project.category}</span>
                                            </td>
                                            <td className="py-3 px-4 text-blue-400 hidden sm:table-cell truncate max-w-xs">{project.link || '-'}</td>
                                            <td className="py-3 px-4 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <button className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded transition">
                                                        <FaEye />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(project.id)}
                                                        className="p-2 text-red-400 hover:text-white bg-red-900/20 hover:bg-red-600 rounded transition"
                                                    >
                                                        <FaTrash />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal - Simplistic implementation */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="glass-card w-full max-w-lg rounded-2xl p-8 relative">
                        <h2 className="text-2xl font-bold text-white mb-6">Ajouter un Projet</h2>
                        <form onSubmit={handleCreate} className="space-y-4">
                            <div>
                                <input className="w-full bg-slate-900/80 border border-slate-700 rounded-lg p-3 text-white" placeholder="Titre du projet" value={newProject.title} onChange={e => setNewProject({ ...newProject, title: e.target.value })} required />
                            </div>
                            <div>
                                <input className="w-full bg-slate-900/80 border border-slate-700 rounded-lg p-3 text-white" placeholder="Catégorie (Web, App...)" value={newProject.category} onChange={e => setNewProject({ ...newProject, category: e.target.value })} />
                            </div>
                            <div>
                                <textarea className="w-full bg-slate-900/80 border border-slate-700 rounded-lg p-3 text-white h-24" placeholder="Description courte" value={newProject.description} onChange={e => setNewProject({ ...newProject, description: e.target.value })} required />
                            </div>
                            <div>
                                <input className="w-full bg-slate-900/80 border border-slate-700 rounded-lg p-3 text-white" placeholder="URL Image (https://...)" value={newProject.image} onChange={e => setNewProject({ ...newProject, image: e.target.value })} />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <input className="w-full bg-slate-900/80 border border-slate-700 rounded-lg p-3 text-white" placeholder="URL GitHub" value={newProject.github} onChange={e => setNewProject({ ...newProject, github: e.target.value })} />
                                <input className="w-full bg-slate-900/80 border border-slate-700 rounded-lg p-3 text-white" placeholder="URL Demo" value={newProject.link} onChange={e => setNewProject({ ...newProject, link: e.target.value })} />
                            </div>

                            <div className="flex justify-end gap-4 mt-6">
                                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 text-slate-300 hover:text-white">Annuler</button>
                                <button type="submit" className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold">Créer</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Dashboard;
