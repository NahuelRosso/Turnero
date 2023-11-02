import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Box, Typography } from '@mui/material';
import { IDoctor } from '../../model/doctor.model';
import ApiServiceDoctor from '../../service/servicesDoctor';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export const DoctorForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IDoctor>();
  const navigate = useNavigate();
    
    

    const apiService = new ApiServiceDoctor("http://localhost:8081"); // Reemplaza con la URL correcta de tu backend en Java

   
      const onSubmit = handleSubmit((values) => {
        const datos: IDoctor = {
          id: "",
          name: values.name,
          surname: values.surname,
          user: values.user,
          password: values.password,
          confirmPassword: values.confirmPassword,
          role: values.role,
          image: "",
          address: values.address,
          gender: values.gender,
          phone: values.phone,
          socialWork: values.socialWork,
          specialty: values.specialty,
          birthdate: values.birthdate
        };
    
        apiService
          .createDoctor(datos)
          .then((response: string) => {
            navigate("/listDoctor");
            console.log(response);
          })
          .catch((error: Error) => {
            console.error(error);
          });
      });
 
    return (
      <Container maxWidth="sm">
      <Box sx={{  background:"#DAF7A6 ", borderRadius: 8, p: 2 }}>
      <Typography variant="h4" sx={{color:'black'}} >
        Crear Doctor
      </Typography>
        <form onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextField //Nombre
              label="Nombre y apellido"
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
            </Grid>
            <Grid item xs={12}>
            <TextField //Nombre
              label="DNI"
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
              {...(errors.socialWork?.type === "minLength" && {
                helperText: "El nombre es demaciado corto",
                error: true,
              })}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField //Nombre
              label="Fecha Nacimiento"
              sx={{ m: 1, width: "25ch" }}
              type="date"
              {...register("birthdate", {
                required: true,
                minLength: 2,
              })}
              {...(errors.birthdate?.type === "required" && {
                helperText: "Campo Obligatorio",
                error: true,
              })}
              {...(errors.birthdate?.type === "minLength" && {
                helperText: "El nombre es demaciado corto",
                error: true,
              })}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField //Nombre
              label="Domicilio"
              sx={{ m: 1, width: "25ch" }}
              type="text"
              {...register("address", {
                required: true,
                minLength: 2,
              })}
              {...(errors.address?.type === "required" && {
                helperText: "Campo Obligatorio",
                error: true,
              })}
              {...(errors.address?.type === "minLength" && {
                helperText: "El nombre es demaciado corto",
                error: true,
              })}/>
            </Grid>
            <Grid item xs={12}>
            <TextField //Nombre
              label="Email"
              sx={{ m: 1, width: "25ch" }}
              type="email"
              {...register("user", {
                required: true,
                minLength: 2,
              })}
              {...(errors.user?.type === "required" && {
                helperText: "Campo Obligatorio",
                error: true,
              })}
              {...(errors.user?.type === "minLength" && {
                helperText: "El nombre es demaciado corto",
                error: true,
              })}/>
            </Grid>
            <Grid item xs={12}>
            <TextField //Nombre
              label="Teléfono"
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
              {...(errors.phone?.type === "minLength" && {
                helperText: "El nombre es demaciado corto",
                error: true,
              })}/>
            </Grid>
            <Grid item xs={12}>
            <TextField //Nombre
              label="Especialidad"
              sx={{ m: 1, width: "25ch" }}
              type="text"
              {...register("specialty", {
                required: true,
                minLength: 2,
              })}
              {...(errors.specialty?.type === "required" && {
                helperText: "Campo Obligatorio",
                error: true,
              })}
              {...(errors.specialty?.type === "minLength" && {
                helperText: "El nombre es demaciado corto",
                error: true,
              })} />
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
