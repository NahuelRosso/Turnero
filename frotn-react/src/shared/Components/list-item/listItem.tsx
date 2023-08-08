import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

// Tipo de dato para los items
interface Item {
    id: string;
    name: string;
}

interface ItemListProps {
    items: Item [];
    onItemDelete: (id: string) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, onItemDelete }) => {
    const { handleSubmit, register, reset, getValues } = useForm();

    const handleDelete = (id: string) => {
        onItemDelete(id);
    };

    const onSubmit: SubmitHandler<any> = (data) => {
        const newItem: Item = {
            id: new Date().getTime().toString(), // Generar un ID único, podrías usar una librería externa para generar IDs
            name: data.name,
        };

        // Aquí puedes agregar la logica para agregar nuevos items si lo deseas
        console.log(newItem);
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField label="Nombre del item" {...register('name')} />
                <Button type="submit" variant="contained" color="primary">
                    Agregar item
                </Button>
            </form>

            <List>
                {items.map((item) => (
                    <div key={item.id}>
                        <ListItem>
                            <ListItemText primary={item.name} />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider />
                    </div>
                ))}
            </List>
        </div>
    );
};

export default ItemList;

