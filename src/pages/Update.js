
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
export default function Update() {
    const [updatedStudent, setUpdatedStudent] = useState({
        firstName: '',
        lastName: '',
        fatherName: '',
        motherName: '',
        address: '',
        mobile: '',
      });
      const { id } = useParams();
    
      useEffect(() => {
        // Fetch student details 
        fetch(`http://localhost:5000/api/getstudent/${id}`)
          .then((response) => response.json())
          .then((data) => {
            setUpdatedStudent(data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, [id]);
    
      const handleInputChange = (e) => {
        setUpdatedStudent({
          ...updatedStudent,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleUpdate = (event) => {
        event.preventDefault()
        console.log(36)
        // Make a PUT request 
        fetch(`http://localhost:5000/api/updatestudent/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedStudent),
        })
          .then((response) => response.text())
          .then((data) => {
            console.log(data);
            window.location = '/getStudent'
          })
          .catch((error) => {
            console.error(error);
          });
      };
  return (
    

<div className='formContainer'>
<h1>Update Student</h1>
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={updatedStudent.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={updatedStudent.lastName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="fatherName"
          placeholder="Father's Name"
          value={updatedStudent.fatherName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="motherName"
          placeholder="Mother's Name"
          value={updatedStudent.motherName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={updatedStudent.address}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={updatedStudent.mobileNumber}
          onChange={handleInputChange}
        />
        <button className='btn' onClick={handleUpdate}>Update</button>
      </form>

    </div>
  )}










