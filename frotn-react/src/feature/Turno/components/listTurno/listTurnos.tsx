import React, { useEffect, useState } from "react";


import { ListItems } from "../../../../shared/Components/list-item/listItem";
import { ITurno } from "../model/turno.model";
import ApiServiceTurno from "../../service/servicesTurno";
import ItemTruno from "../itemTurno/itemTurno";



 // Asegúrate de proporcionar la ruta correcta

export const ListTurno = () => {
  const [pacientes, setPacientes] = useState<ITurno[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Llamada a la API para obtener todos los pacientes
    const fetchPacientes = async () => {
      try {
        const apiService = new ApiServiceTurno("http://localhost:8081"); // Reemplaza con la URL de tu API
        const response = await apiService.getAllTurno();
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
          renderItem={(item: ITurno) => (
            <ItemTruno turno={item} buttonAction={true} />
          )}
          handleItemClick={(item: ITurno) => {
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
