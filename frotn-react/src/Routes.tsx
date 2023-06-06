import { Route, Routes } from "react-router-dom";
import CreatePaciente from "./pages/createPaciente/formPaciente.page";
import { FormRegister } from "./pages/formRegister/formRegister";
import { Login } from "./pages/formLogin/formLogin";
import Dashboard from "./pages/dashboard/dashboard";




export const AppRouter = () => {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<FormRegister/>} />
        <Route path="/patientForm" element={<CreatePaciente/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />

        
      </Routes>
    );
  };
  