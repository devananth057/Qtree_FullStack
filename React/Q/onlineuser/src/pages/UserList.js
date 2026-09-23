import React from 'react';
import "../pages/UserList.css";
import {user,setUser} from useState({});

function UserList() {

  const data={
    id:"",
    name:"",
    rollno:"",
    mobile:"",
    email:"",
    password:""
  }
  const handleChange=({target})=>{
    console.log(target.value,target.name)
    setUser({...[data],["name"]:value})

  }

  const handleSubmit = ()=>
  {
    const posted= async ()=>
    {
      await axios.post(``,user)
    }
  }
  return (
    <div>
        <form class="Form" onSubmit={handleSubmit}>
            <div class="mb-3">
    <label for="exampleInputname1" class="form-label">Name</label>
    <input type="string" class="form-control" id="exampleInputName1" aria-describedby="emailHelp" name="name" onChange={handleChange}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputroll1" class="form-label">Roll Number</label>
    <input type="number" class="form-control" id="exampleInputRoll1" aria-describedby="emailHelp"name="rollno" onChange={handleChange}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputmobile1" class="form-label">Mobile Number</label>
    <input type="number" class="form-control" id="exampleInputMobile1" aria-describedby="emailHelp" name="mobile" onChange={handleChange}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={handleChange}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name="password" onChange={handleChange}/>
  </div> 
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default UserList