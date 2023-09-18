const items = [
    { id: 1, nombre: "Pedro", apellido: "Lopez", telefono: "3571234567", direccion: "Calle Primavera 1234", email:"Pedro23@gmail.com", fecha_nacimineto: "15 de junio de 1987", sexo: "M", edad:"36" },
    { id: 2, nombre: "Ludmila", apellido: "Rodríguez", telefono: "3571987654", direccion: "Avenida del Sol 5678", email:"Lud12@gmail.com",fecha_nacimineto: "28 de agosto de 1994", sexo: "F", edad:"29"  },
    { id: 3, nombre: "Jorge", apellido: "González", telefono: "3571765432", direccion: "Camino de la Luna 987", email:"Jorgito53@gmail.com", fecha_nacimineto:"7 de marzo de 2001", sexo:"M", edad:"22"  },
  ];
  
  import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import GenericItemComponent from './GenericitemComponent'; // Ajusta la ruta según tu estructura de archivos

const App = () => {
  const [itemList, setItemList] = useState(items); // Usa el estado para almacenar la lista de items

  const handleSubmit = (updatedItems: React.SetStateAction<{ id: number; name: string; description: string; }[]>) => {
    setItemList(updatedItems); // Actualiza la lista de items cuando se envía el formulario
  };

  return (
    <div>
      <h1>Listado de Items</h1>
      <GenericItemComponent items={itemList} onSubmit={handleSubmit} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
