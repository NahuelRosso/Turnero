import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Box } from '@mui/material';
import { IPaciente } from '../../model/paciente.model';

export const PatientForm: React.FC = () => {
    const [formData, setFormData] = useState({
      fullName: '',
      dni: '',
      dateOfBirth: '',
      address: '',
      email: '',
      phone: '',
      specialty: '',
    });
    

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // Aquí puedes agregar la lógica para manejar los datos del formulario
      console.log(formData);
    };
    return (
      <Container maxWidth="sm">
      <Box sx={{ bgcolor: '#ffffff', borderRadius: 8, p: 2 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Nombre y apellido"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="DNI" name="dni" value={formData.dni} onChange={handleChange} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Fecha de nacimiento"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Domicilio"
                name="address"
                value={formData.address}
                onChange={handleChange}
                fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Correo electrónico"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Teléfono celular"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Obra social (Especificar si no tiene)"
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
                fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Enviar
              </Button>
            </Grid>
            </Grid>
            </form>
      </Box>
     </Container>
  );
};
