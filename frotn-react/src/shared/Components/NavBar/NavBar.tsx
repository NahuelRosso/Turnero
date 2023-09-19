import { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Alert, Menu, MenuItem } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TemporaryDrawer from './Drawer';
import { useNavigate } from 'react-router-dom';

const navItems = ['Inicio', 'Turno', 'Historial Clínica', 'Crear Registro', 'Profesionales', 'Administradores', 'Informaciones'];

export default function NavBar() {

  //NavBar
  //Menu
  const [anchorEl1, setAnchorEl1] = useState(null);

  const handleMenuClick = (event: any) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl1(null);
  };
  const navigate = useNavigate();
  //usuario
  const [anchorEl2, setAnchorEl2] = useState(null);
  const handleUsuarioClick = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleUsuarioClose = () => {
    navigate("/");
    setAnchorEl2(null);
  };

  //Notificacion
  const [open, setOpen] = useState(false);
  const handleNotificationClick = () => {
    setOpen(true);
  };
  const handleNotificationClose = () => {
    setOpen(false);
  };
  

 return (
  <AppBar position="fixed" color="primary">
    <Toolbar>
      <div style={{ marginRight: '16px' }}>
      <TemporaryDrawer/>
</div>
      <img src="" alt="" style={{ marginRight: '10px' }} />
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Turnero Clínica
      </Typography>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '16px' }}>
          <IconButton color="inherit" onClick={handleNotificationClick}>
          <NotificationsIcon />
          </IconButton>
        </div>
        <Snackbar
          open={open}
           autoHideDuration={5000} // Duración en milisegundos
           onClose={handleNotificationClose}
        >
        <Alert onClose={handleNotificationClose} severity="info">
          Usuario2 ha enviado un archivo
        </Alert>
        </Snackbar>
          <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ marginRight: '16px' }}>
          <IconButton
          color="inherit"
          aria-controls="user-menu2"
          aria-haspopup="true"
          onClick={handleUsuarioClick}
          >
          <AccountCircleIcon />
            Usuario
          </IconButton>
          </div>
          <Menu
          id="user-menu2"
          anchorEl={anchorEl2}
          open={Boolean(anchorEl2)}
          onClose={handleUsuarioClose}
          >
            <MenuItem onClick={handleUsuarioClose}>Perfil</MenuItem>
            <MenuItem onClick={handleUsuarioClose}>Archivo</MenuItem>
            <MenuItem onClick={handleUsuarioClose}>Cerrar Sesión</MenuItem>
            <MenuItem onClick={handleUsuarioClose}>Ajustes</MenuItem>
          </Menu>
          </div>
          </div>
        </Toolbar>
      </AppBar>
  );
}
