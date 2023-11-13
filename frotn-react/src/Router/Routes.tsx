// Importa las librerías necesarias
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../shared/services/session/session";
import Login from "../pages/formLogin/formLogin";

import Dashboard from "../pages/dashboard/dashboard";
import CreatePaciente from "../pages/createPaciente/formPaciente.page";
import CreateDoctor from "../pages/createDoctor/createDoctor";

import FormTurnoPage from "../pages/crearTurno/formTurno.page";
import HistorialClinicoForm from "../feature/HistorialClinico/components/formHistorialClinico/formHistorialClinico";
import ListTrunoPage from "../pages/listTurnos/listTurno.page";
import ListDoctor from "../pages/listDoctor/listDoctor";
import { ListPaciente } from "../feature/Paciente/components/listPaciente/listPaciente";
import { FormRegister } from "../pages/formRegister/formRegister";

const AppRouter = () => {
  // Obtén el estado de autenticación
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Ruta de inicio de sesión */}
      <Route
        path="/"
        element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />}
      />

      {/* Ruta de registro */}
      <Route
        path="/register"
        element={isAuthenticated ? <Navigate to="/dashboard" /> : <FormRegister />}
      />

      {/* Resto de las rutas */}
      {isAuthenticated && (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createPaciente" element={<CreatePaciente />} />
          <Route path="/createDoctor" element={<CreateDoctor />} />
          <Route path="/listDoctor" element={<ListDoctor />} />
          <Route path="/Pacientes" element={<ListPaciente />} />
          <Route path="/turno" element={<FormTurnoPage />} />
          <Route
            path="/historialClinico"
            element={<HistorialClinicoForm />}
          />
          <Route path="/turnos" element={<ListTrunoPage />} />
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
