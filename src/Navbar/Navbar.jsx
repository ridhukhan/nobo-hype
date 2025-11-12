import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import PrivecyPolicy from '../Pages/PrivecyPolicy'
const Navbar = () => {
  const [openmenu,setOpenmenu]=useState(false)
  return (
    <div className='NavBar'>
        <ul>
            <li><Link to="/">Home</Link></li>
             <li><Link to="/SmartWatch">Smart Watch</Link></li>
              <li><Link to="/AirBards">Air Bards</Link></li>
               <li><Link to="/Clothing">Clothing</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
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
          <Link to="/PrivecyPolicy">Privecy & Policy</Link>
        </li>
        <li>
          <Link to="/TermsCondition">Terms & Service</Link>
        </li>

      </ul>
    </div>
  ):null
}

    </div>
  )
}

export default Navbar