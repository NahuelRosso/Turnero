import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import ApiService from '../../shared/services/userServices/userServices';
import { useNavigate } from 'react-router-dom';
import { ILoginUser } from '../../models/users';

const Login: React.FC = () => {
  const [loginData, setLoginData] = useState<ILoginUser>({
    email: '',
    password: '',
    id: '',
  });

  const [userError, setUserError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const navigate = useNavigate();
  const apiService = new ApiService('http://localhost:8081');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    let newUserError = '';
    let newPasswordError = '';

    if (!loginData.email) {
      newUserError = 'Ingrese su usuario';
    }

    if (!loginData.password) {
      newPasswordError = 'Ingrese su contraseña';
    }

    setUserError(newUserError);
    setPasswordError(newPasswordError);

    if (!newUserError && !newPasswordError) {
      try {
        const token = await apiService.login(loginData);

        // Almacena el token en localStorage
        localStorage.setItem('token', token);

        // Puedes realizar otras acciones con el token si es necesario
        // ...

        navigate('/dashboard');
      } catch (error) {
        console.error('Error de inicio de sesión:', error);

        if (error instanceof Error) {
          console.error('Mensaje de error:', error.message);
        }
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Grid container direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: '100vh' }}>
        <Grid item>
          <Paper sx={{ padding: '1.2em', borderRadius: '0.5em', background: '#DAF7A6' }}>
            <Typography sx={{ mt: 1, mb: 1 }} variant="h4">
              Log In
            </Typography>
            {userError && <Typography sx={{ color: 'red', mt: 1, mb: 1 }}>{userError}</Typography>}
            {passwordError && <Typography sx={{ color: 'red', mt: 1, mb: 1 }}>{passwordError}</Typography>}
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                name="email"
                margin="normal"
                type="email"
                fullWidth
                label="Email"
                sx={{ mt: 1.5, mb: 1.5 }}
                required
                onChange={handleInputChange}
              />

              <TextField
                name="password"
                margin="normal"
                type="password"
                fullWidth
                label="Password"
                sx={{ mt: 0.5, mb: 0.5 }}
                required
                onChange={handleInputChange}
              />

              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 1.5 }}
              >
                Access
              </Button>

              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 1.5, mb: 1 }}
                href="/register"
              >
                Register
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Login;