import React, { useState, useEffect } from 'react';

export default function Search() {
    const [students, setStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
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
    
      useEffect(() => {
        
        // Filter students based on search term
       
        
        const results = students.filter((student) =>
      student.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );
       
        setSearchResults(results);
    
      }, [searchTerm, students]);
    
      const handleSearch = (event) => {
        setSearchTerm(event.target.value);
      };
    
  return (
    <div className='card'>
 <h1>Student List</h1>
      <input className='search'
        type="text"
        placeholder="Search by First Name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {searchResults.map((student) => (
          <div className="incard">
          <li key={student._id}>
            <h2>{`${student.firstName} ${student.lastName}`}</h2>
            <p>Father's Name: {student.fatherName}</p>
            <p>Mother's Name: {student.motherName}</p>
            <p>Address: {student.address}</p>
            <p>Mobile Number: {student.mobile}</p>
          </li>
          </div>
        ))}
      </ul>

    </div>
  )
}
