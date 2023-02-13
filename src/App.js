import Employee from './component/Employee';
import { useState, useEffect } from 'react';
import { Container } from '@mui/system';

function App() {

  const [employee, setEmployee] = useState([])

  const API = 'https://hub.dummyapis.com/employee?noofRecords=100&idStarts=1'
  const fetchedData = async () => {
    const res = await fetch(API);
    const data = await res.json();
    return setEmployee(data)}

useEffect(() => {fetchedData()},[])


  return (

    
      <Container maxWidth="xl">
        <Employee employee={employee} setEmployee={setEmployee}/>
      </Container>

  );
}

export default App;
