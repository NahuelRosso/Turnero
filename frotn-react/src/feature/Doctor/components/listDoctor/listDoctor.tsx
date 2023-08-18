import React from 'react';
import { Paper, Typography } from '@mui/material';

interface ItemProps {
  itemName: string;
  quantity: number;
}

const Item: React.FC<ItemProps> = ({ itemName, quantity }) => {
  return (
    <Paper elevation={3} style={{ padding: '20px', margin: '10px 0' }}>
      <Typography variant="h6">{itemName}</Typography>
      <Typography>Cantidad: {quantity}</Typography>
    </Paper>
  );
};

// Ejemplo de uso del componente Item con datos hardcoded
const ListDoctor: React.FC = () => {
  return (
    <div>
      <Item itemName="Producto 1" quantity={5} />
      <Item itemName="Producto 2" quantity={10} />
      <Item itemName="Producto 3" quantity={3} />
    </div>
  );
};

export default ListDoctor;
