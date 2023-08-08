
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
  const [userError, setUserError] = useState<string>(""); // Estado para manejar el mensaje de error del usuario
  const [passwordError, setPasswordError] = useState<string>(""); // Estado para manejar el mensaje de error de la contraseña
  const navigate = useNavigate();
  const apiService = new ApiService('http://localhost:8081'); 

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Validar usuario y contraseña antes de enviar la solicitud
    if (!loginData.user) {
      setUserError("Ingrese su usuario");
    }
    else {
      setUserError(""); // Limpiar el mensaje de error del usuario si es válido
    }
    if (!loginData.password) {
      setPasswordError("Ingrese su contraseña");
    } 
    else {
      setPasswordError(""); // Limpiar el mensaje de error de la contraseña si es válida
    }

    // Si no hay mensajes de error, intentar iniciar sesión
    if (!userError && !passwordError) {
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
            <Typography sx={{mt:1, mb:1 }} variant="h4">
              Log In
              </Typography>
              {userError && ( // Mostrar el mensaje de error del usuario si existe
              <Typography sx={{ color: "red", mt: 1, mb: 1 }}>{userError}</Typography>
            )}
            {passwordError && ( // Mostrar el mensaje de error de la contraseña si existe
              <Typography sx={{ color: "red", mt: 1, mb: 1 }}>{passwordError}</Typography>
            )}
            <Box component="form" onSubmit={handleSubmit}>
              <TextField 
              name="user"
              margin= "normal"
              type="email" 
              fullWidth label="Email" 
              sx={{mt: 1.5, mb: 1.5}}
              required
              onChange={handleInputChange}
              />


              <TextField 
              name="password"
              margin="normal"
              type="password" 
              fullWidth label="Password" 
              sx={{mt: 0.5, mb: 0.5}}
              required
              onChange={handleInputChange}
              />

              <Button 
              fullWidth 
              type="submit" 
              variant="contained"
              sx={{mt:1.5}}>
                Access
              </Button> 

              <Button 
              fullWidth
              type="submit"
              variant="contained" 
              sx={{mt:1.5, mb: 1}}
              href="/register">
                Register</Button> 
            </Box> 
          </Paper>
        </Grid>

      </Grid>
    </Container>
  )
}

