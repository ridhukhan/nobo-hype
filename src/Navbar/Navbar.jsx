import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import PrivecyPolicy from '../Pages/PrivecyPolicy'
const Navbar = () => {
  const [openmenu,setOpenmenu]=useState(false)
  
  return (
    <div className='NavBar'>
        <ul>
            <li><NavLink to="/" className="nav-menu">Home</NavLink></li>
             <li><NavLink to="/SmartWatch" className="nav-menu">Smart Watch</NavLink></li>
              <li><NavLink to="/AirBards" className="nav-menu">Air Bards</NavLink></li>
               <li><NavLink to="/Clothing" className="nav-menu">Clothing</NavLink></li>
                <li><NavLink to="/Contact" className="nav-menu">Contact</NavLink></li>
        </ul>

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
          <NavLink to="/PrivecyPolicy">Privecy & Policy</NavLink><hr />
        </li>
        <li>
          <NavLink to="/TermsCondition">Terms & Service</NavLink><hr />
        </li>

      </ul>
      <button onClick={()=>setOpenmenu(false)}>Exit</button>

    </div>
  ) : null 
}
    </div>
  )
}

export default Navbar