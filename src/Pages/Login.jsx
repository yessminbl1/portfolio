import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FaLock } from 'react-icons/fa';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login(username, password)) {
            navigate('/admin/dashboard');
        } else {
            setError('Identifiants incorrects (admin / admin123)');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]"></div>

            <div className="glass-card p-10 rounded-2xl w-full max-w-md relative z-10">
                <div className="text-center mb-8">
                    <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400 text-2xl">
                        <FaLock />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Connexion Admin</h2>
                    <p className="text-slate-400 mt-2">Accédez à votre espace de gestion</p>
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg mb-6 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-slate-300 text-sm font-medium mb-2">Utilisateur</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition focus:ring-1 focus:ring-blue-500/50"
                            placeholder="admin"
                        />
                    </div>

                    <div>
                        <label className="block text-slate-300 text-sm font-medium mb-2">Mot de passe</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition focus:ring-1 focus:ring-blue-500/50"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-blue-600/20"
                    >
                        Se connecter
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <a href="/" className="text-slate-500 hover:text-white text-sm transition">Authentification requise pour l'accès</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
