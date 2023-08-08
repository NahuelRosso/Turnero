import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Card, Typography } from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useForm } from "react-hook-form";
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios, { AxiosResponse } from "axios";
import { IUser } from "../../models/users";
import { IPaciente } from "./model/paciente.model";
import { useNavigate } from "react-router-dom";
import React from "react";
import ApiServicePaciente from "../service/servicePaciente";
/*import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Box } from '@mui/material';
import { IPaciente } from './model/paciente.model';
*/
export const PatientForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IUser>();
  const navigate = useNavigate();

  const apiService = new ApiServicePaciente('http://localhost:8081'); // Reemplaza con la URL correcta de tu backend en Java

  const onSubmit = handleSubmit((values) => {
    const datos: IPaciente = {
      HomeAddress: values.HomeAddress,
      id: '',
      name: values.name,
      surname: '',
      user: values.user,
      password: values.password,
      confirmPassword: values.confirmPassword,
      role: '',
      image: '',
      address: '',
      gender: '',
      phone: values.phone,
      socialWork: '', //solucionar problema
    };

    apiService
      .createPaciente(datos)
      .then((response: string) => {
        navigate("/")
        console.log(response);
      })
      .catch((error: Error) => {
        console.error(error);
      });
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show: any) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
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
        <Typography variant="h4">Register Patient</Typography>
        <div>
          <Box>
            <TextField //Nombre
              label="Name"
              sx={{ m: 1, width: "25ch" }}
              type="text"
              {...register("name", {
                required: true,
                minLength: 2,
              })}
              {...(errors.name?.type === "required" && {
                helperText: "Campo Obligatorio",
                error: true,
              })}
              {...(errors.name?.type === "minLength" && {
                helperText: "El nombre es demaciado corto",
                error: true,
              })}
            />
          </Box>
          <Box>
            <TextField //Apellido
              label="Surname"
              sx={{ m: 1, width: "25ch" }}
              type="text"
              {...register("surname", {
                required: true,
                minLength: 2,
              })}
              {...(errors.surname?.type === "required" && {
                helperText: "Campo Obligatorio",
                error: true,
              })}
            />
          </Box>
          <Box>
            <TextField
              label="Phone"
              sx={{ m: 1, width: "25ch" }}
              type="text"
              {...register("phone", {
                required: true,

                minLength: 2,
              })}
              {...(errors.phone?.type === "required" && {
                helperText: "Campo Obligatorio",
                error: true,
              })}
              {...(errors.phone?.type === "minLenght" && {
                helperText: "Campo Obligatorio",
                error: true,
              })}
            />
          </Box>
          <Box>
            <TextField
            /*
              label="Social Work"
              sx={{ m: 1, width: "25ch" }}
              type="text"
              {...register("socialWork", {
                required: true,

                minLength: 2,
              })}
              {...(errors.socialWork?.type === "required" && {
                helperText: "Campo Obligatorio",
                error: true,
              })}
              {...(errors.socialWork?.type === "minLenght" && {
                helperText: "Campo Obligatorio",
                error: true,
              })}*/
            />
          </Box>
          <Box>
            <TextField
              label="DNI"
              sx={{ m: 1, width: "25ch" }}
              type="text"
              {...register("id", {
                required: true,

                minLength: 2,
              })}
              {...(errors.id?.type === "required" && {
                helperText: "Campo Obligatorio",
                error: true,
              })}
              {...(errors.id?.type === "minLenght" && {
                helperText: "Campo Obligatorio",
                error: true,
              })}
            />
          </Box>
          <Box>
            <TextField
              label="Home address"
              sx={{ m: 1, width: "25ch" }}
              type="text"
              {...register("HomeAddress", {
                required: true,

                minLength: 2,
              })}
              {...(errors.HomeAddress?.type === "required" && {
                helperText: "Campo Obligatorio",
                error: true,
              })}
              {...(errors.HomeAddress?.type === "minLength" && {
                helperText: "La direccion es demaciada corta",
                error: true,
              })}
            />
          </Box>
          <Box>
            <TextField
              label="Email"
              sx={{ m: 1, width: "25ch" }}
              type="email"
              {...register("user", {
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                minLength: 2,
              })}
              {...(errors.user?.type === "required" && {
                helperText: "Campo Obligatorio",
                error: true,
              })}
              {...(errors.user?.type === "pattern" && {
                helperText: "Ingrese un email válido",
                error: true,
              })}
            />
          </Box>
          <Box>
            <TextField
              sx={{ m: 1, width: "25ch" }}
              type={showPassword ? "text" : "password"}
              label="Password"
              {...register("password", {
                required: true,
      
                minLength: 2,
              })}
              {...(errors.password?.type === "required" && {
                helperText: "Campo Obligatorio",
                error: true,
              })}
              {...(errors.password?.type === "minLength" && {
                helperText: "La contraseña es demasiado corta",
                error: true,
              })}
              {...(errors.password?.type === "pattern" && {
                helperText: "La contraseña debe tener minimo 8 caracteres,minuscula, mayuscula, número y caracter especial",
                error: true,
              })}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box>
            <TextField
              sx={{ m: 1, width: "25ch" }}
              type={showPassword ? "text" : "password"}
              label="Confirm Password"
              {...register("confirmPassword", {
                required: true,
                minLength: 2,
                validate: (value) => value === getValues("password"),
              })}
              {...(errors.confirmPassword?.type === "required" && {
                helperText: "Campo Obligatorio",
                error: true,
              })}
              {...(errors.confirmPassword?.type === "validate" && {
                helperText: "Las Contraseñas deben Coincidir",
                error: true,
              })}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box>
            <Button
              onClick={onSubmit}
              
              variant="contained"
            >
              Submit
            </Button>
          </Box>
          
        </div>
      </Card>
    </Box>

  

    /*const [formData, setFormData] = useState({
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
     </Container>*/
  );
};
