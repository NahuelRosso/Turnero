import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Grid, IconButton, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

type Item = {
  id: number;
  name: string;
  description: string;
};

type Props = {
  items: Item[];
  onSubmit: (items: Item[]) => void;
};

const GenericItemComponent: React.FC<Props> = ({ items, onSubmit }) => {
  const { handleSubmit, control, reset } = useForm<Item[]>();

  const handleDeleteItem = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    onSubmit(updatedItems);
  };

  const onSubmitHandler = (updatedItems: Item[]) => {
    onSubmit(updatedItems);
    reset(updatedItems);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      {items.map((item, index) => (
        <Paper key={item.id} elevation={3} sx={{ p: 2, mb: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Controller
                name={`items[${index}].name`}
                control={control}
                defaultValue={item.name}
                render={({ field }) => <TextField label="name" fullWidth {...field} />}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name={`items[${index}].description`}
                control={control}
                defaultValue={item.description}
                render={({ field }) => <TextField label="Description" fullWidth {...field} />}
              />
            </Grid>
            <Grid item xs={12}>
              <IconButton onClick={() => handleDeleteItem(index)} color="secondary">
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Paper>
      ))}
      <Button type="submit" variant="contained" color="primary">
        Save
      </Button>
    </form>
  );
};

export default GenericItemComponent;
