import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';

import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {

  

  
  
  return (             
    <div>
       
      
         <Table striped bordered hover  style={{margin:"50px"}}  >
      <thead>
        <tr >
         
          <th > Name</th>
          <th>mail</th>
          <th>phone</th>
          <th>gender</th>
          
           </tr>
      </thead>
      <tbody>
       {
        
        Employee.map(item=>(
            <tr  style={{margin:"30px"}}>
               
                <td>{item.name}</td>
                <td>{item.mail}</td>
                <td>{item.phone}</td>
                <td>{item.gender}</td>
               
               
            </tr>
        ))
        
       }
        
      </tbody>
    </Table>
    <Link to={'/add'}><Button style={{marginLeft:"50px"}}>Add</Button></Link>
    </div>
    
  )
}

export default Home