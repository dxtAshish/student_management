import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className='container-home'>
      <div className="home">
      
     <Link className='link' to="/search">SEARCH</Link>
     <br />
     <Link className='link' to="/addStudent">ADD STUDENT</Link>
     <br />
     <Link className='link' to="/getStudent">STUDENTS</Link>
     </div>
    </div>
  )
}
