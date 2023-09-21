import React from 'react'

import NavBar from '../../shared/Components/NavBar/NavBar'
import { Button, Grid, Link, Paper, Typography } from '@mui/material'


export default function Dashboard() {
  return(
    <div>
      <NavBar></NavBar>
      <Typography variant="h4" >
        Panel de Inicio
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Link> {/* Ajustar la ruta según tu enrutamiento */}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              href='createDoctor'
              
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
            >
              Cargar Paciete
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link> {/* Ajustar la ruta según tu enrutamiento */}
            <Button
              variant="contained"
              color="info"
              fullWidth
              
            >
              Gestión de Turnos
            </Button>
          </Link>
        </Grid>
      </Grid>
   
   
    </div>
    
  )
}