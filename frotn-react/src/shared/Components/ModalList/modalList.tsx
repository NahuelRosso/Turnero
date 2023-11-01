import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import axios from "axios";

export interface ListItemProps {
  id: string;
  name: string;
  surname:string;
  specialty:string;

  // Otros campos relevantes
}

interface ReusableModalProps {
  label: string;
  endpoint: string;
  onSelect: (item: ListItemProps) => void;
  open: boolean;
  onClose: () => void;
}

const ReusableModal: React.FC<ReusableModalProps> = ({
  label,
  endpoint,
  onSelect,
  open,
  onClose,
}) => {
  const [data, setData] = useState<ListItemProps[] | null>(null);

  useEffect(() => {
    if (open) {
      // Cargar datos desde tu API o base de datos
      axios.get(endpoint).then((response) => {
        setData(response.data);
      });
    }
  }, [open, endpoint]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <h2>{label}</h2>
        <List>
          {data &&
            data.map((item) => (
              <ListItem
                button
                key={item.id}
                onClick={() => {
                  onSelect(item);
                  onClose();
                }}
              >
                <ListItemText primary={item.name} />
                {/* Otros campos relevantes */}
              </ListItem>
            ))}
        </List>
        <Button onClick={onClose}>Cerrar</Button>
      </DialogContent>
    </Dialog>
  );
};

export default ReusableModal;
