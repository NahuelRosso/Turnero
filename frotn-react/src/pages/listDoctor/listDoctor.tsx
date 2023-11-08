import React from 'react'
import { ListDoctor } from '../../feature/Doctor/components/listDoctor/listDoctor'
import NavBar from '../../shared/Components/NavBar/NavBar'



export default function ListDoctorPage() {
  return (
    <div>
      <NavBar></NavBar>
      <ListDoctor></ListDoctor>
    </div>
  )
}

