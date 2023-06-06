
import React, { ChangeEvent, FormEvent, useState } from "react";
import {Box, Button, Container, Grid, Paper, TextField, Typography} from "@mui/material";
import ApiService from "../../shared/services/userServices/userServices";
import { useNavigate } from "react-router-dom";
import { ILoginUser } from "../../models/users";



export const Login= () => {
  const [loginData, setLoginData] = useState<ILoginUser>({
    user: "",
    password: "",
  });
  const navigate = useNavigate();
  const apiService = new ApiService('http://localhost:8081'); 

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await apiService.login(loginData);
      // Maneja la respuesta exitosa aquí, por ejemplo, redirige a otra página
      navigate('/dashboard');
    } catch (error) {
       // Comprueba que el error tenga el tipo adecuado
    if (error instanceof Error) {
      console.error('Error de inicio de sesión:', error.message);
    } else {
      console.error('Error de inicio de sesión:', error);
    }
  }
  };
  
  
  return (
    <Container maxWidth="sm">
      <Grid 
      container 
      direction="column"
       alignItems="center" 
       justifyContent="center"
       sx={{minHeight: "100vh"}}
       >
        <Grid item>
          <Paper sx={{padding:"1.2em", borderRadius:"0.5em"}}>
            <Typography sx={{mt:1, mb:1 }} variant="h4">Iniciar sesion</Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField 
              name="user"
              margin= "normal"
              type="text" 
              fullWidth label="Email:" 
              sx={{mt: 1.5, mb: 1.5}}
              required
              onChange={handleInputChange}
              />


              <TextField 
              name="password"
              margin="normal"
              type="Password" 
              fullWidth label="contraseña:" 
              sx={{mt: 0.5, mb: 0.5}}
              required
              onChange={handleInputChange}
              />

              <Button 
              fullWidth 
              type="submit" 
              variant="contained"
              sx={{mt:1.5}}>
                Iniciar sesion
              </Button> 

              <Button 
              fullWidth
              type="submit"
              variant="contained" 
              sx={{mt:1.5, mb: 1}}
              href="/register">
                Registrarme</Button> 
            </Box> 
          </Paper>
        </Grid>

      </Grid>
    </Container>
  )
}

