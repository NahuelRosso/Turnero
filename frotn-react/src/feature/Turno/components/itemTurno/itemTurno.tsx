import { Delete, Edit } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { MouseEventHandler, useState } from "react";
import { ITurno } from "../model/turno.model";



type Props = {
  turno: ITurno;
  buttonAction?: boolean;
};

function ItemTruno(props: Props) {
  
  const [showAlert, setShowAlert] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  


  const handleDelete: MouseEventHandler<HTMLButtonElement> = () => {
    setIsDeleteDialogOpen(true);
  };

  



  const handleCloseEditDialog = async () => {
    console.log(props);
    setIsEditDialogOpen(false);
  };

  return (
    <>
      {" "}
      <>
        {/* <ListItemAvatar>
          <Avatar src={props.turno.image} alt={props.turno.name} />
        </ListItemAvatar> */}

        <ListItemText
        sx={{color:"black"}}
          primary={props.turno.paciente_id}
          secondary={`name: ${props.turno.doctor_id}, phone: ${props.turno.fechaTurno}`}
        />
        {props.buttonAction == true ? (
          <>
            {" "}
            <IconButton
              edge="end"
              aria-label="editar"
            //   onClick={() => handleEdit()}
            >
              <Edit />
            </IconButton>
            <IconButton edge="end" aria-label="eliminar" onClick={handleDelete}>
              <Delete />
            </IconButton>
          </>
        ) : null}
      </>
      {/* <DeleteDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={handleDeleteConfirmed}
        title="¿Está seguro que desea eliminar este producto?"
        message="Se eliminará de forma permanente "
        confirmText="Eliminar"
        cancelText="Cancelar"
      /> */}
      {/* <Dialog open={isEditDialogOpen} onClose={handleCloseEditDialog}>
        <DialogContent>
          <FormClient
            client={props.client}
            onClose={() => {
              setIsEditDialogOpen(false);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog}>Cancel</Button>
        </DialogActions>
      </Dialog> */}
    </>
  );
}
export default ItemTruno;
