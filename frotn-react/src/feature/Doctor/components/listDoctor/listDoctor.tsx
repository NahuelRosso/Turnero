import React, { useEffect, useState } from "react";
import ApiServiceDoctor from "../../service/servicesDoctor";

import { ListItems } from "../../../../shared/Components/list-item/listItem";
import ItemDoctor from "../itemDoctor/itemDoctor";
import { IDoctor } from "../../model/doctor.model";


 // Asegúrate de proporcionar la ruta correcta

export const ListDoctor = () => {
  const [doctores, setdoctores] = useState<IDoctor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Llamada a la API para obtener todos los doctores
    const fetchDoctor = async () => {
      try {
        const apiService = new ApiServiceDoctor("http://localhost:8081"); // Reemplaza con la URL de tu API
        const response = await apiService.getAllDoctor();
        setdoctores(response); // Actualiza el estado con los pacientes obtenidos
        setLoading(false); // Cambia el estado de carga a falso
      } catch (error) {
        console.error("Error al obtener pacientes:", error);
        setLoading(false); // Maneja el error y cambia el estado de carga a falso
      }
    };

    fetchDoctor(); // Llama a la función para obtener los doctores cuando el componente se monta
  }, []);
  return (
    <>
      {!loading ? (
        <ListItems
          items={doctores}
          renderItem={(item: IDoctor) => (
            <ItemDoctor doctor={item} buttonAction={true} />
          )}
          handleItemClick={(item: IDoctor) => {
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
