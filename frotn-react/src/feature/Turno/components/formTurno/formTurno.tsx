import {
  Box,
  Card,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  useTheme,
  Theme,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ITurno } from "../model/turno.model";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import FormControlSelector, { Person } from "../../../../shared/Components/Selector/FormControlSelector"; // Importa Person
import { format } from 'date-fns';
import ApiServiceTurno from "../../service/servicesTurno";


export default function FormTurno() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITurno>();

  const [personName, setPersonName] = useState<string[]>([]);
  const [selectedPaciente, setSelectedPaciente] = useState<Person[]>([]);
  const [selectedDateTurno, setSelectedDateTurno] = useState<string | null>(null);

  const apiServiceTurno = new ApiServiceTurno('URL_DE_TU_BACKEND');



const onSubmit = handleSubmit(async (data) => {
  try {
    const formattedDate = selectedDateTurno
      ? format(new Date(selectedDateTurno), 'dd/MM/yyyy')
      : '';
    
    const turnoData: ITurno = {
      id: '',
      doctor:selectedPaciente.map((person) => person.id),
      paciente: selectedPaciente.map((person) => person.id),
      date: '', // Este campo es manejado por el backend
      dateTurno: formattedDate,
      addressTurno: data.addressTurno,
    };
    console.log(turnoData)
    const response = await apiServiceTurno.createTurno(turnoData);

    console.log('Turno creado exitosamente:', response);
  } catch (error) {
    console.error('Error al crear el turno:', error);
  }
});


  return (
    <div>
      <Box
        component="form"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
        onSubmit={onSubmit}
      >
        <Card sx={{ pb: 1 }}>
          <Typography variant="h4">Reservar Turno</Typography>
          <div>
            <Box>
            <FormControlSelector
                label="Doctor"
                endpoint="http://localhost:8081/getAllDoctor"
                onChange={(selectedPacientes: Person[]) => {
                  setSelectedPaciente(selectedPacientes);
                }}
              />
            </Box>
            <Box>
              <FormControlSelector
                label="Paciente"
                endpoint="http://localhost:8081/getAllPaciente"
                onChange={(selectedPacientes: Person[]) => {
                  setSelectedPaciente(selectedPacientes);
                }}
              />
            </Box>
            <Box>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  // date es manejado por el backend, dateTurno proviene del estado
                  value={selectedDateTurno}
                  onChange={(date) => setSelectedDateTurno(date)}
                />
              </LocalizationProvider>
            </Box>
            <Box>
              <TextField
                label="Dirección del Centro de Atención"
                sx={{ m: 1, width: "25ch" }}
                type="text"
                {...register("addressTurno", {
                  required: true,
                  minLength: 2,
                })}
                {...(errors.addressTurno?.type === "required" && {
                  helperText: "Campo Obligatorio",
                  error: true,
                })}
                {...(errors.addressTurno?.type === "minLength" && {
                  helperText: "El nombre es demasiado corto",
                  error: true,
                })}
              />
            </Box>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </div>
        </Card>
      </Box>
    </div>
  );
}
