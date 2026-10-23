import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const ProtectedLayout = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white flex">
            {/* Sidebar simplified for now */}
            <aside className="w-64 bg-slate-900 border-r border-slate-800 hidden md:block p-6">
                <h2 className="text-xl font-bold text-blue-500 mb-8">Admin Panel</h2>
                <nav className="space-y-4">
                    <a href="/admin/dashboard" className="block p-2 rounded hover:bg-slate-800 text-slate-300 hover:text-white transition">Dashboard</a>
                    {/* Add more links here */}
                </nav>
            </aside>

            <main className="flex-1 p-8 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default ProtectedLayout;
