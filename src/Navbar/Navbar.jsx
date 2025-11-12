<<<<<<< HEAD
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import PrivecyPolicy from '../Pages/PrivecyPolicy'
const Navbar = () => {
  const [openmenu,setOpenmenu]=useState(false)
=======
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
>>>>>>> e03a8220ed18943abc6a9c0a552bf17254b4692b
  return (
    <div className='NavBar'>
        <ul>
            <li><Link to="/">Home</Link></li>
             <li><Link to="/SmartWatch">Smart Watch</Link></li>
              <li><Link to="/AirBards">Air Bards</Link></li>
               <li><Link to="/Clothing">Clothing</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
        </ul>
<<<<<<< HEAD
        <div className='dott' onClick={()=>setOpenmenu(!openmenu)}>
<hr />
<hr />
<hr />
 </div>
{
  openmenu ? (
    <div className='menubar'>
      <ul>
        <li>
          <Link to="/PrivecyPolicy">Privecy & Policy</Link>
        </li>
        <li>
          <Link to="/TermsCondition">Terms & Service</Link>
        </li>

      </ul>
    </div>
  ):null
}
=======
>>>>>>> e03a8220ed18943abc6a9c0a552bf17254b4692b
    </div>
  )
}

export default Navbar