import React, { useState } from 'react'
import './updateEmploye.css'

const UpdateEmployee = ({showable, setShowable, employee, setEmployee}) => {

    const[formData, setFormData] = useState({
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
            id: showable.id, imageUrl: formData.imageUrl, firstName: formData.firstName,
            lastName: formData.lastName,  email: formData.email, contactNumber: formData.contactNumber,
            age: 0, dob: formData.dob, salary: formData.salary, address: formData.address
        }
        setShowable(newEmployee)

        let rows = employee.slice()
        rows = rows.filter(row => row.id !== showable.id)
        setEmployee(rows)
        let row = [...employee]
        console.log(row)
        row = row.splice(showable.id-1, 1, newEmployee)
        console.log(row)
        setEmployee(row)
        console.log(employee)

        
    }
    
  return (
            <form onSubmit={handleFormSubmit} className="form">
                <input type="text" name="imageUrl" required="required" placeholder="Url d'Avatar" onChange={handleFormChange} className="input"/>
                <input type="text" name="firstName" required="required" placeholder="Nom" onChange={handleFormChange} className="input"/>
                <input type="text" name="lastName" required="required" placeholder="Prénom" onChange={handleFormChange} className="input"/>
                <input type="text" name="email" required="required" placeholder="Email" onChange={handleFormChange} className="input"/>
                <input type="text" name="contactNumber" required="required" placeholder="Téléphone" onChange={handleFormChange} className="input"/>
                <input type="text" name="dob" required="required" placeholder="Date de naissance" onChange={handleFormChange} className="input"/>
                <input type="text" name="salary" required="required" placeholder="Salaire" onChange={handleFormChange} className="input"/>
                <input type="text" name="address" required="required" placeholder="Adresse" onChange={handleFormChange} className="input"/>
                <button type='submit'>Enregistrer</button>
            </form>
  )
}

export default UpdateEmployee