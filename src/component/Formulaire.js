import { Box } from '@mui/material'
import React, { useState } from 'react'
import './formulaire.css'

const Formulaire = ({employee, setEmployee}) => {

const [formData, setFormData] = useState({
        avatar: "", firstName: "",
        lastName: "",  email: "", contactNumber: "",
        dob: "", salary: "", address: ""
})

const handleFormChange = (event) => {
    event.preventDefault()
    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value
    const newFormData = { ...formData}
    newFormData[fieldName] = fieldValue
    setFormData(newFormData)
}

const handleFormSubmit = (event) => {
    event.preventDefault()
    const newEmployee = {
        id: employee.length + 1, avatar: formData.imageUrl, firstName: formData.firstName,
        lastName: formData.lastName,  email: formData.email, contactNumber: formData.contactNumber,
        dob: formData.dob, salary: formData.salary, address: formData.address
    }

    const newEmployees = [...employee, newEmployee ]
    console.log(newEmployee)
    setEmployee(newEmployees)
}
  


     
  return (
    
    <Box 
    sx={{ height: 650,
        width: 500,
        alignContent: 'center'}}>
            <form onSubmit={handleFormSubmit} id="form">
                <input type="text" name="imageUrl" required="required" placeholder="Url d'Avatar" onChange={handleFormChange} id="input"/>
                <input type="text" name="firstName" required="required" placeholder="Nom" onChange={handleFormChange} id="input"/>
                <input type="text" name="lastName" required="required" placeholder="Prénom" onChange={handleFormChange} id="input"/>
                <input type="text" name="email" required="required" placeholder="Email" onChange={handleFormChange} id="input"/>
                <input type="text" name="contactNumber" required="required" placeholder="Téléphone" onChange={handleFormChange} id="input"/>
                <input type="text" name="dob" required="required" placeholder="Date de naissance" onChange={handleFormChange} id="input"/>
                <input type="text" name="salary" required="required" placeholder="Salaire" onChange={handleFormChange} id="input"/>
                <input type="text" name="address" required="required" placeholder="Adresse" onChange={handleFormChange} id="input"/>
                <button type='submit'>Ajouter</button>
            </form>
        
    </Box> 
  )
}

export default Formulaire