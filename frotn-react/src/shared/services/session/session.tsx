// session.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../userServices/userServices';
import { ILoginUser } from '../../../models/users';

const AuthContext = createContext({
  isAuthenticated: false,
  login: async (loginData: ILoginUser): Promise<boolean> => false,
  register: async (userData: any): Promise<boolean> => false,
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const apiService = new ApiService('http://localhost:8081');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      apiService.setAuthToken(token);
    }
  }, [apiService]);

  const login = async (loginData: ILoginUser) => {
    try {
      const token = await apiService.login(loginData);
      localStorage.setItem('token', token);
      apiService.setAuthToken(token);
      setIsAuthenticated(true);

      // Redireccionar al Dashboard después de un inicio de sesión exitoso
      navigate('/dashboard');

      return true;
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
      return false;
    }
  };

  const register = async (userData: any) => {
    try {
      // Lógica de registro aquí...

      // Redireccionar a la página de inicio de sesión después de un registro exitoso
      navigate('/');

      return true;
    } catch (error) {
      console.error('Error de registro:', error);
      return false;
    }
  };

  const logout = () => {
    apiService.clearAuthToken();
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
