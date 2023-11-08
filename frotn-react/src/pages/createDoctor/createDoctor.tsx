import React from 'react'
import { DoctorForm } from '../../feature/Doctor/components/formDoctor/formDoctor'
import NavBar from '../../shared/Components/NavBar/NavBar'



export default function CreateDoctor() {
  return (
    <div>
      <NavBar></NavBar>
       <DoctorForm></DoctorForm>
    </div>
  )
}

