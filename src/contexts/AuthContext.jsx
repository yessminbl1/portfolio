import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check LocalStorage for persistent login
        const storedAuth = localStorage.getItem('isAdminAuthenticated');
        if (storedAuth === 'true') {
            setIsAuthenticated(true);

            // SessionStorage for "Welcome Back" message logic
            if (!sessionStorage.getItem('sessionInit')) {
                console.log("Welcome back, Admin!");
                sessionStorage.setItem('sessionInit', 'true');
            }
        }
        setLoading(false);
    }, []);

    const login = (username, password) => {
        // Mock Authentication Logic

        if (username === 'admin' && password === 'admin123') {
            setIsAuthenticated(true);
            localStorage.setItem('isAdminAuthenticated', 'true');
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAdminAuthenticated');
        sessionStorage.removeItem('sessionInit');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
