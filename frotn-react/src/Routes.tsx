import { Route, Routes } from "react-router-dom";
import CreatePaciente from "./pages/createPaciente/formPaciente.page";
import { FormRegister } from "./pages/formRegister/formRegister";
import { Login } from "./pages/formLogin/formLogin";
import Dashboard from "./pages/dashboard/dashboard";
import CreateDoctor from "./pages/createDoctor/createDoctor";
import Item from "./feature/Doctor/components/itemDoctor/itemDoctor";
import{ ListItems } from "./shared/Components/list-item/listItem";
import { ReactNode } from "react";
import { ListPaciente } from "./feature/Paciente/components/listPaciente/listPaciente";
import FormTurnoPage from "./pages/crearTurno/formTurno.page";



export const AppRouter = () => {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<FormRegister/>} />
        <Route path="/createPaciente" element={<CreatePaciente/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/createDoctor" element={<CreateDoctor/>} />
        <Route path="/listDoctor" element={<ListItems items={[]} renderItem={function (item: any): ReactNode {
          throw new Error("Function not implemented.");
        } } handleItemClick={function (item: any): void {
          throw new Error("Function not implemented.");
        } }/>} />
        <Route path="/createPaciente" element={<CreatePaciente/>} />
        <Route path="/Pacientes" element={<ListPaciente/>} />
        <Route path="/turno" element={<FormTurnoPage/>} />

        
      </Routes>
    );
  };
  