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

export default Item;
