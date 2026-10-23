import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaLock, FaUserShield } from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';
import { userData } from '../../data/user';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navigation = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/#about' },
    { name: 'Services', path: '/#services' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Expérience', path: '/#experience' },
    { name: 'Projets', path: '/#projects' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-indigo-500/30 transition-all duration-300 transform group-hover:rotate-12">
              <span className="font-mono">P</span>
            </div>
            <span className="hidden lg:block text-white font-bold text-lg tracking-wide">
              {userData.name.split(' ')[0]}<span className="text-indigo-400">.Dev</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center gap-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                >
                  {item.name}
                </a>
              ))}

              {/* Auth Button */}
              {isAuthenticated ? (
                <div className="flex items-center gap-2 ml-4">
                  <Link
                    to="/admin/dashboard"
                    className="flex items-center gap-2 bg-indigo-600/20 text-indigo-300 px-4 py-2 rounded-lg hover:bg-indigo-600/30 transition border border-indigo-500/30"
                  >
                    <FaUserShield /> Admin
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-slate-400 hover:text-white px-3 py-2 transition"
                  >
                    Déconnexion
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="ml-4 flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition opacity-50 hover:opacity-100"
                  title="Accès Admin"
                >
                  <FaLock size={12} />
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white transition"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-nav border-t border-slate-800">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="block px-4 py-3 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            {isAuthenticated && (
              <Link
                to="/admin/dashboard"
                className="block px-4 py-3 text-base font-medium text-indigo-400 hover:bg-white/5 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tableau de Bord
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
