import { Update } from '@mui/icons-material'
import { Avatar, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import UpdateEmployee from './UpdateEmployee'



const Showing = ({showable, setShowable, employee, setEmpolyee}) => {

    const [showForm, setShowForm] = useState(false)
    
        return(
            <>
          <TableContainer>
          <Table sx={{ minWidth: 700 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align='right'>ID</TableCell>
                <TableCell align="right">Avatar</TableCell>
                <TableCell align="right">Nom</TableCell>
                <TableCell align="right">Prénom</TableCell>
                <TableCell align="right">email</TableCell>
                <TableCell align="right">Téléphone</TableCell>
                <TableCell align="right">Date de naissance</TableCell>
                <TableCell align="right">Salaire</TableCell>
                <TableCell align="right">Adresse</TableCell>
                <TableCell align="right">Modifier</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    {showable.id}
                  </TableCell>
                  <TableCell align="right"><Avatar src={showable.imageUrl} /></TableCell>
                  <TableCell align="right">{showable.firstName}</TableCell>
                  <TableCell align="right">{showable.lastName}</TableCell>
                  <TableCell align="right">{showable.email}</TableCell>
                  <TableCell align="right">{showable.contactNumber}</TableCell>
                  <TableCell align="right">{showable.dob}</TableCell>
                  <TableCell align="right">{showable.salary}</TableCell>
                  <TableCell align="right">{showable.address}</TableCell>
                  <TableCell align="right">
                    <Button  color="secondary" variant="outlined"startIcon={<Update />} onClick={() => setShowForm(true)}>
                        Modifier
                    </Button>
                  </TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        {(showForm) ? <UpdateEmployee showable={showable} setShowable={setShowable} employee={employee} setEmployee={setEmpolyee}/> : null}
        </>
        )
      
}

export default Showing