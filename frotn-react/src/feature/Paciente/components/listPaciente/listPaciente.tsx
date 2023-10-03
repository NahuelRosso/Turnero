import React, { useEffect, useState } from "react";
import ApiServicePaciente from "../../service/servicePaciente";

import { ListItems } from "../../../../shared/Components/list-item/listItem";
import ItemPaciente from "../itemPaciente/itemPAciente";
import { IPaciente } from "../../model/paciente";


 // Asegúrate de proporcionar la ruta correcta

export const ListPaciente = () => {
  const [pacientes, setPacientes] = useState<IPaciente[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Llamada a la API para obtener todos los pacientes
    const fetchPacientes = async () => {
      try {
        const apiService = new ApiServicePaciente("http://localhost:8081"); // Reemplaza con la URL de tu API
        const response = await apiService.getAllPaciente();
        setPacientes(response); // Actualiza el estado con los pacientes obtenidos
        setLoading(false); // Cambia el estado de carga a falso
      } catch (error) {
        console.error("Error al obtener pacientes:", error);
        setLoading(false); // Maneja el error y cambia el estado de carga a falso
      }
    };

    fetchPacientes(); // Llama a la función para obtener los pacientes cuando el componente se monta
  }, []);

  return (
    <>
      {!loading ? (
        <ListItems
          items={pacientes}
          renderItem={(item: IPaciente) => (
            <ItemPaciente paciente={item} buttonAction={true} />
          )}
          handleItemClick={(item: IPaciente) => {
            console.log(item);
            // Puedes realizar cualquier acción adicional aquí si es necesario
          }}
        ></ListItems>
      ) : (
        <div>spinner</div>
      )}
    </>
  );
};
