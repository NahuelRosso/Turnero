import React, { useState } from 'react';
import { Button, TextField, Grid, Paper, Typography, Container} from '@mui/material';

const HistorialClinicoForm: React.FC = () => {
  const [formData, setFormData] = useState({
    doctor: '',
    paciente: '',
    fechaCreacion: '',
    fechaActualizacion: '',
    descripcion: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Para poder enviar datos al back
    console.log('Datos enviados:', formData);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Crear Historial Clínico
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Doctor"
                name="doctor"
                variant="outlined"
                value={formData.doctor}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Paciente"
                name="paciente"
                variant="outlined"
                value={formData.paciente}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Fecha de Creación"
                name="fechaCreacion"
                variant="outlined"
                type="date"
                value={formData.fechaCreacion}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Fecha de Actualización"
                name="fechaActualizacion"
                variant="outlined"
                type="date"
                value={formData.fechaActualizacion}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Descripción"
                name="descripcion"
                variant="outlined"
                multiline
                rows={4}
                value={formData.descripcion}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '20px' }}
          >
            Guardar Historial Clínico
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default HistorialClinicoForm;
