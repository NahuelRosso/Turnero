import { Route, Routes } from "react-router-dom";
import CreatePaciente from "./pages/createPaciente/formPaciente.page";
import { FormRegister } from "./pages/formRegister/formRegister";
import { Login } from "./pages/formLogin/formLogin";
import Dashboard from "./pages/dashboard/dashboard";

import CreateDoctor from "./pages/createDoctor/createDoctor";
import Item from "./feature/Doctor/components/itemDoctor/itemDoctor";
import ListDoctor from "./feature/Doctor/components/listDoctor/listDoctor";
import{ ListItems } from "./shared/Components/list-item/listItem";
import { ReactNode } from "react";



export const AppRouter = () => {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<FormRegister/>} />
        <Route path="/createPaciente" element={<CreatePaciente/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/createDoctor" element={<CreateDoctor/>} />
        <Route path="/item" element={<Item itemName={""} quantity={0}/>} />
        <Route path="/listDoctor" element={<ListItems items={[]} renderItem={function (item: any): ReactNode {
          throw new Error("Function not implemented.");
        } } handleItemClick={function (item: any): void {
          throw new Error("Function not implemented.");
        } }/>} />

        
      </Routes>
    );
  };
  