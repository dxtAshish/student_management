import React, { useState } from 'react'

export default function StuCreate() {
  const [value,setValue]=useState({
    firstName:"",
    lastName:"",
    motherName:"",
    fatherName:"",
    address:"",
    mobile:"",
  });
  const handelChange=(event)=>{
    setValue({...value,[event.target.name]:event.target.value})
  }

  const handelSubmit = async (event) => {
    event.preventDefault();
    const headers = {
      "Content-Type": "application/json",
    };
    const body = JSON.stringify({
      firstName:value.firstName,
      lastName:value.lastName,
      motherName:value.motherName,
      fatherName:value.fatherName,
      address:value.address,
      mobile:value.mobile,
    });
    const config = {
      headers,
      method: "POST",
      body,
    };
    const response = await fetch(
      "http://localhost:5000/api/studentadd",
      config
    );
    const response_json = await response.json();
    console.log(response_json, "here is response");
    window.location = '/getStudent'
  };
 
  
  return (
    <div className='formContainer'>
        <form action="" onSubmit={(e)=>handelSubmit(e)}>
            <input type="text" placeholder='firstname' name='firstName' onChange={(e)=>handelChange(e)}/>
            <input type="text" placeholder='lastname' name='lastName' onChange={(e)=>handelChange(e)} />
            <input type="text" placeholder='mother name' name='motherName' onChange={(e)=>handelChange(e)} />
            <input type="text" placeholder='father name'  name='fatherName' onChange={(e)=>handelChange(e)} />
            <input type="text" placeholder='address'name='address' onChange={(e)=>handelChange(e)} />
            <input type="text" placeholder='mobile number' name='mobile' onChange={(e)=>handelChange(e)} />
           <button className='btn' type="submit"> Add student</button>
                
        </form>
    </div>
  )
}
