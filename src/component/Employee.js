import { Avatar, Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useState } from 'react'
import Formulaire from './Formulaire';
import Showing from './Showing';
import UserAction from './UserAction';



const Employee = ({employee, setEmployee}) => {

  const [pageSize, setPageSize] = useState(10)
  const [showEmployee, setShowEmployee] = useState(false)
  const [showable, setShowable] = useState({})


  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'imageUrl',
      headerName: 'Avatar',
      width: 100,
      renderCell: params=><Avatar src={params.row.imageUrl} />,
      sortable: false,
      filterable: false
    },
    {
      field: 'firstName',
      headerName: 'Nom',
      width: 90,
    },
    {
      field: 'lastName',
      headerName: 'Prénom',
      width: 90,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 270,
    },
    {
      field: 'contactNumber',
      headerName: 'Téléphone',
      width: 120,
    },
    {
      field: 'dob',
      headerName: 'Date de naissance',
      width: 150,
    },
    {
      field: 'salary',
      headerName: 'Salaire',
      width: 120,
    },
    {
      field: 'address',
      headerName: 'Adresse',
      width: 120,
    },
    {
      field: 'action',
      headerName: 'Actions',
      width: 320,
      renderCell: params => <UserAction params={params} employee={employee} setEmployee={setEmployee} setShowEmployee={setShowEmployee} setShowable={setShowable}/>,
    }
    
    ]


  return (

    <center>
      <Box 
      sx={{
        height: 700,
        width: {
          lg: '100%'
        }, alignContent: 'center'
      }}>
        <Typography
        variant='h3'
        component='h3'
        sx={{textAlign: 'center', fontWeight: 'meduim', textTransform: 'uppercase', fontFamily: 'Monospace'}}>Employee</Typography>
        {(showEmployee) ? <Showing showable={showable} setShowable={setShowable} employee={employee} setEmpolyee={setEmployee}/> : null }
        <DataGrid
        columns={columns}
        rows={employee}
        pageSize={pageSize}
        rowsPerPageOptions={[5, 10, 15, 20]}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        /><br /><Typography 
        variant='h4'
        component='h4'
        sx={{textAlign: 'center', fontWeight: 'meduim', textTransform: 'uppercase', fontFamily: 'Monospace'}}>
          Ajouter Employee</Typography><br />
        <Formulaire employee={employee} setEmployee={setEmployee}/>
      </Box>
    </center>




/*
    
    <div>
        <table>
            <thead>
              <th>ID</th>
              <th>Image</th>
              <th>nom</th>
              <th>Prénom</th>
              <th>Email</th>
              <th>Téléphone</th>
              <th>Age</th>
              <th>Date De Naissance</th>
              <th>Salaire $</th>
              <th>Adresse</th>
              <th>Ajouter</th>
              <th>Supprimer</th>
            </thead>
            {employee.map((emp) => (<tbody key={emp.id}>
              <tr>
                <td>{emp.id}</td>
                <td><img src= {emp.imageUrl} /></td>
                <td>{emp.firstName}</td>
                <td>{emp.lastName}</td>
                <td>{emp.email}</td>
                <td>{emp.contactNumber}</td>
                <td>{emp.age}</td>
                <td>{emp.dob}</td>
                <td>{emp.salary * 100}</td>
                <td>{emp.address}</td>
                <td><button>Ajouter</button></td>
                <td><button>Supprimer</button></td>
              </tr>
                </tbody> ))}
                

        </table>
    </div>*/
    
  )
}

export default Employee