import React from 'react'
import { Link } from "react-router-dom";

import { useState,useEffect } from 'react';

export default function GetStudent() {

    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetchStudent();
      }, []);

   const fetchStudent= async() => {
      // Fetch all students from the backend API
        
      const headers = {
        "Content-Type": "application/json",
      };
      const config = {
        headers,
        method: "get",
      };
      const response= await fetch("http://localhost:5000/api/getstudent",config)
      const response_json = await response.json();
     
      setStudents(response_json.data);
    }
       
    
    const handleDelete = (studentId) => {
        // Make a DELETE request to the backend API
        fetch(`http://localhost:5000/api/deletestudent/${studentId}`, {
          method: 'DELETE',
        })
          .then((response) => response.text())
          .then((data) => {
            console.log(data);
            // Update the student list by removing the deleted student
            setStudents(students.filter((student) => student._id !== studentId));
            alert("student has been delete");
          })
          .catch((error) => {
            console.error(error);
          });
      };

  return (
    <div className='card'>
         <h1>Student List</h1>
      <ol>
        {students.map((student) => (
            <div className="incard">
          <li key={student._id}>
            <h2>{`${student.firstName} ${student.lastName}`}</h2>
            <p><b>Father's Name:</b> {student.fatherName}</p>
            <p><b>Mother's Name:</b> {student.motherName}</p>
            <p><b>Address:</b> {student.address}</p>
            <p><b>Mobile Number: </b>{student.mobile}</p>
            <button className='btn' onClick={() => handleDelete(student._id)}>Delete</button>
            <br />
            <br />
           
         
            <Link className='link' to={`/update/${student._id}`}>UPDATE STUDENT</Link>
          </li>
          </div>
        ))}
      </ol>
    </div>
  )
}
