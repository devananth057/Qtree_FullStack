import React, { useState } from 'react';

import './Createuser.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Createuser() {
    const [data,setData]= useState({
        id:"",
        name:"",
        dept:"",
        roll:""
    })
    const navigate=useNavigate();
    const handleChange=({target : {name,value}})=>{
           setData({...data,[name]:value})
    }
    const handleSubmit= async(e)=>
    {
        e.preventDefault()
        const postedData= await axios.post(`https://6aaa334bff4dd5698b4e2487.mockapi.io/UserTable`,data)

        if(postedData)
        {
            navigate('/');
        }

    }
  return (
    <div className="user">
        <form onSubmit={handleSubmit}>
            <div class="mb-3">
    <label for="exampleInputName1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" name="name" onChange={handleChange}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputDept1" class="form-label">Department</label>
    <input type="text" class="form-control" id="exampleInputDept1" aria-describedby="deptHelp" name="dept" onChange={handleChange}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputRoll1" class="form-label">Roll Number</label>
    <input type="text" class="form-control" id="exampleInputRoll1" aria-describedby="rollHelp" name="rollno" onChange={handleChange}/>   
  </div>
  
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Createuser