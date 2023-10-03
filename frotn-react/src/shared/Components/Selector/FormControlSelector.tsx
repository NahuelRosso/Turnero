import React, { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  useTheme,
  Theme,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export interface Person {
  id: string;
  name: string;
  surname: string;
  socialWork: string;
  specialty: string;

}

interface FormControlState {
  selected: string[]; // Cambiado a string[]
  data: Person[];
  menuOpen: boolean;
}

const FormControlSelector = ({
  label,
  onChange,
  endpoint,
}: {
  label: string;
  onChange: (selectedPacientes: Person[]) => void;
  endpoint: string;
}) => {
    const [state, setState] = useState<FormControlState>({
        selected: [], // Manténlo como un arreglo vacío de strings
        data: [],
        menuOpen: false,
      });

  useEffect(() => {
    axios
      .get<Person[]>(endpoint)
      .then((response: AxiosResponse<Person[]>) => {
        setState({
          selected: [], // Cambiado a string[]
          data: response.data,
          menuOpen: false,
        });
      })
      .catch((error: AxiosError) => {
        console.error(error);
      });
  }, [endpoint]);

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    if (Array.isArray(event.target.value)) { // Verifica si es un arreglo
      setState({
        selected: event.target.value,
        data: state.data,
        menuOpen: false,
      });
  
      const selectedPersons = event.target.value.map((id) =>
        state.data.find((person) => person.id === id) as Person
      );
      onChange(selectedPersons);
    }
  };
  
  const handleOpen = () => {
    setState({
      ...state,
      menuOpen: true,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      menuOpen: false,
    });
  };

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        multiple
        value={state.selected}
        onChange={handleChange}
        onOpen={handleOpen}
        onClose={handleClose}
        input={<OutlinedInput label={label} />}
        MenuProps={{
          ...MenuProps,
          open: state.menuOpen,
        }}
      >
        {state.data.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            Nombre: {item.name} Apellido: {item.surname} Mutual: {item.socialWork} Especialida{item.specialty}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FormControlSelector;
