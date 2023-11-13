// ProtectedRoute.tsx
import React from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';
import { useAuth } from '../shared/services/session/session';

interface ProtectedRouteProps {
  isAuthenticated: boolean; // Agrega cualquier propiedad adicional necesaria
  element: React.ReactNode;
  path?: string;
  caseSensitive?: boolean;
  children?: React.ReactNode;
  // ... otras propiedades de RouteProps si es necesario
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthenticated, element, ...props }) => {
  if (!isAuthenticated) {
    // Si el usuario no está autenticado, redirige a la página de inicio de sesión
    return <Navigate to="/" />;
  }

  // Si el usuario está autenticado, renderiza la ruta protegida
  return <Route {...props} element={element} />;
};

export default ProtectedRoute;
