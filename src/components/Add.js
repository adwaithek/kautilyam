import React from 'react'


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import Employee from './Employee';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

function Add() {

  

  const [ name,setName]=useState('')
  const [ mail,setMail]=useState('')
  const [ phone,setPhone]=useState('')
  
  const [gender, setGender] = useState('');







let history=useNavigate()

 const handledata=(e)=>{
  e.preventDefault();

  Employee.push({
    
    name:name,
    mail:mail,
    phone:phone,
    gender:gender,
  })
  history('/')

  }
  return (
    <div>
       <>
   
   
   
   <Form>
     <Form.Group className="mb-3" controlId="formBasicEmail">
     
       <Form.Label>Name</Form.Label>
       <Form.Control type="text" placeholder="Enter Your Name"
      
         onChange={(e)=>setName(e.target.value)}  
        />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>mail</Form.Label>
       <Form.Control type="text" placeholder="Enter Your mail" 
      //  value={age} 
      onChange={(e)=>setMail(e.target.value)} 
        />
          </Form.Group>


     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label>Phone</Form.Label>
       <Form.Control type="text" placeholder="Enter your phone" 
      //  value={designation}
       onChange={(e)=>setPhone (e.target.value)} required
        />
     </Form.Group>

    


     <div>
      <label>
        <input type="radio" value="male" checked={gender === 'male'} onChange={(e)=>setGender(e.target.value)} />
        Male
      </label>
      <label>
        <input type="radio" value="female" checked={gender === 'female'} onChange={(e)=>setGender(e.target.value)} />
        Female
      </label>
      <label>
        <input type="radio" value="other" checked={gender === 'other'} onChange={(e)=>setGender(e.target.value)} />
        Other
      </label>
      
    </div>
     <Button variant="primary" type="submit" onClick={(e)=>handledata(e)}>
       Add
     </Button>
   </Form>
  
   </>
    </div>
  )
}

export default Add