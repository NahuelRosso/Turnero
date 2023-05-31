import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import React from "react";
import Button from "@mui/material/Button";
import { Card, Typography } from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useForm } from "react-hook-form";
import VisibilityIcon from '@mui/icons-material/Visibility';

interface FormData {
  Name: string;
  Phone: string;
  HomeAddress: string;
  Email: string;
  Password: string;
  ConfirmPassword: string;
}

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>();
 

  const onSubmit = handleSubmit((values) => {
    alert(JSON.stringify(values));
    
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

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
        <Typography variant="h4">Reistrarse</Typography>
        <div>
          <Box>
            <TextField
              label="Name"
              sx={{ m: 1, width: "25ch" }}
              type="text"
              {...register("Name", {
                required: true,
                minLength: 2,
              })}
              {...(errors.Name?.type === "required" && {
                helperText: "Campo Obligatorio",
                error: true,
              })}
              {...(errors.Name?.type === "minLength" && {
                helperText: "El nombre es demaciado corto",
                error: true,
              })}
            />
          </Box>
          <Box>
            <TextField
              label="Phone"
              sx={{ m: 1, width: "25ch" }}
              type="tel"
              {...register("Phone", {
                required: true,

                minLength: 2,
              })}
              {...(errors.Phone?.type === "required" && {
                helperText: "Campo Obligatorio",
                error: true,
              })}
              {...(errors.Phone?.type === "minLenght" && {
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
              {...register("Email", {
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                minLength: 2,
              })}
              {...(errors.Email?.type === "required" && {
                helperText: "Campo Obligatorio",
                error: true,
              })}
              {...(errors.Email?.type === "pattern" && {
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
              {...register("Password", {
                required: true,
      
                minLength: 2,
              })}
              {...(errors.Password?.type === "required" && {
                helperText: "Campo Obligatorio",
                error: true,
              })}
              {...(errors.Password?.type === "minLength" && {
                helperText: "La contraseña es demasiado corta",
                error: true,
              })}
              {...(errors.Password?.type === "pattern" && {
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
              {...register("ConfirmPassword", {
                required: true,
                minLength: 2,
                validate: (value) => value === getValues("Password"),
              })}
              {...(errors.ConfirmPassword?.type === "required" && {
                helperText: "Campo Obligatorio",
                error: true,
              })}
              {...(errors.ConfirmPassword?.type === "validate" && {
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
  );
};
