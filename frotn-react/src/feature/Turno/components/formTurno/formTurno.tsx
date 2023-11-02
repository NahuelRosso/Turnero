import { Box, Card, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ITurno } from "../model/turno.model";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { format } from "date-fns";
import ApiServiceTurno from "../../service/servicesTurno";
import ReusableModal, {
  ListItemProps,
} from "../../../../shared/Components/ModalList/modalList";

export default function FormTurno() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITurno>();

  const [selectedPatient, setSelectedPatient] = useState<ListItemProps | null>(
    null
  );
  const [selectedDoctor, setSelectedDoctor] = useState<ListItemProps | null>(
    null
  );
  const [selectedDateTurno, setSelectedDateTurno] = useState<string | null>(
    null
  );
  const apiServiceTurno = new ApiServiceTurno("http://localhost:8081");

  const [isPatientModalOpen, setIsPatientModalOpen] = useState(false);
  const [isDoctorModalOpen, setIsDoctorModalOpen] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      // Formatea la fecha en el formato correcto
      const formattedDate = selectedDateTurno
        ? format(new Date(selectedDateTurno), "dd/MM/yyyy")
        : "";
  
      const turnoData: ITurno = {
        id: "",
        doctor_id: selectedDoctor!.id,
        paciente_id: selectedPatient!.id,
        fechaTurno: formattedDate,
        addressTurno: data.addressTurno,
        date: ""
      };
  
      // Envía el formulario al backend
      const response = await apiServiceTurno.createTurno(turnoData);
      console.log(selectedDoctor)
      console.log("Turno creado exitosamente:", response);
    } catch (error) {
      console.error("Error al crear el turno:", error);
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
        <Card sx={{ pb: 1, width: 600, padding: 5, background:"#DAF7A6 " }}>
          <Typography variant="h4">Reservar Turno</Typography>
          <div>
            <Box>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  // date es manejado por el backend, dateTurno proviene del estado
                  value={selectedDateTurno}
                  onChange={(date) => setSelectedDateTurno(date)}
                />
              </LocalizationProvider>
            </Box>
            <Button onClick={() => setIsPatientModalOpen(true)}>
              Seleccione Paciente
            </Button>
            <TextField
              fullWidth
              label="Paciente Seleccionado"
              value={
                selectedPatient
                  ? `Nombre: ${selectedPatient.name}, Apellido: ${selectedPatient.surname}, Especialidad: ${selectedPatient.specialty}`
                  : ""
              }
              disabled
            />
            <Button onClick={() => setIsDoctorModalOpen(true)}>
              Seleccione Doctor
            </Button>
            <TextField
              fullWidth
              label="Doctor Seleccionado"
              value={
                selectedDoctor
                  ? `Nombre: ${selectedDoctor.name}, Apellido: ${selectedDoctor.surname}, Especialidad: ${selectedDoctor.specialty}`
                  : ""
              }
              disabled
            />
            <ReusableModal
              label="Seleccionar Paciente"
              endpoint="http://localhost:8081/getAllPaciente"
              onSelect={(item) => setSelectedPatient(item)}
              open={isPatientModalOpen}
              onClose={() => setIsPatientModalOpen(false)}
            />
            <ReusableModal
              label="Seleccionar Doctor"
              endpoint="http://localhost:8081/getAllDoctor"
              onSelect={(item) => setSelectedDoctor(item)}
              open={isDoctorModalOpen}
              onClose={() => setIsDoctorModalOpen(false)}
            />
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
