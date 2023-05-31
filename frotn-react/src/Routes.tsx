import { Route, Routes } from "react-router-dom";
import FormRegister from "./pages/formRegister/formRegister";
import CreatePaciente from "./pages/createPaciente/formPaciente.page";



export const AppRouter = () => {
    return (
      <Routes>
        <Route path="/register" element={<FormRegister/>} />
        <Route path="/patientForm" element={<CreatePaciente/>} />
      </Routes>
    );
  };
  