import { Button, ButtonGroup} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react'
import { TvOutlined } from '@mui/icons-material';

const UserAction = ({ params, employee, setEmployee, setShowEmployee, setShowable}) => {

  const [index, setIndex] = useState(0)
  


  const handleDelete = () => {

    setIndex(params.row.id)
    let rows = employee.slice()
    rows = rows.filter(row => row.id !== index)
    setEmployee(rows)
  }

  const handleShow = (e) => {
    e.preventDefault()
    setIndex(params.row.id)
    setShowEmployee(true)
    setShowable(params.row)
  }

  



  return (
    <ButtonGroup size="large" variant="outlined">
    
      <Button  color="success" startIcon={<TvOutlined />} onClick={handleShow} >
        Details
      </Button>
      <Button  color="error" startIcon={<DeleteIcon />} onClick={handleDelete} >
          Supprimer
      </Button>
    </ButtonGroup>
  )
}

export default UserAction