import React, { createContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>
        {children}
      </div>
    </div>
  );
};

export { AuthContext, AuthProvider, Layout };
