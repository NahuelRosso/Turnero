import React from 'react'

import NavBar from '../../shared/Components/NavBar/NavBar'
import { Button, Grid, Link, Paper, Typography } from '@mui/material'

export default function Dashboard() {
  return(
    <div >
      <NavBar></NavBar>
      <Typography variant="h1" sx={{color:'white', background:"rgba(0, 0, 0, 0.8)", borderRadius:"10px"}} >
        Panel de Inicio
      </Typography>
      <Grid container spacing={3} sx={{m:"15px"}}>
        <Grid item xs={12} sm={6} md={4}>
          <Link> {/* Ajustar la ruta según tu enrutamiento */}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              href='createDoctor'
              sx={{p:"5px"}}
            >
              Crear Doctor
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link> {/* Ajustar la ruta según tu enrutamiento */}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              href='listDoctor'
              sx={{p:"5px"}}
            >
              Doctores
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link> {/* Ajustar la ruta según tu enrutamiento */}
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              href='/Pacientes'
              sx={{p:"5px"}}
            >
              Pacientes
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link> {/* Ajustar la ruta según tu enrutamiento */}
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              href='/createPaciente'
              sx={{p:"5px"}}
            >
              Cargar Paciete
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link> {/* Ajustar la ruta según tu enrutamiento */}
            <Button
              variant="contained"
              color="error"
              fullWidth
              sx={{p:"5px"}}
              href='/turno'
              
            >
              Gestión de Turnos
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link> {/* Ajustar la ruta según tu enrutamiento */}
            <Button
              variant="contained"
              color="error"
              fullWidth
              sx={{p:"5px"}}
              
            >
              Agenda de Turnos
            </Button>
          </Link>
        </Grid>
      </Grid>
   
   
    </div>
    
  )
}