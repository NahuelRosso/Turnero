import { Route, Routes } from "react-router-dom";
import { FormRegister } from "./pages/formRegister/formRegister";
import { Login } from "./pages/formLogin/formLogin";


export const AppRouter = () => {
    return (
      <Routes>
        <Route path="/register" element={<FormRegister/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    );
  };
  