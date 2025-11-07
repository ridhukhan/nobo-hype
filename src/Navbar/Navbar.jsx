import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='NavBar'>
        <ul>
            <li><Link to="/">Home</Link></li>
             <li><Link to="/SmartWatch">Smart Watch</Link></li>
              <li><Link to="/AirBards">Air Bards</Link></li>
               <li><Link to="/Clothing">Clothing</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar