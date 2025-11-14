import React from 'react'
//import Navbar from '../Component/Navbar'
//import Navbar from '../Component/Navbar'
import fbpic from '../assets/fb.png'
import insta from '../Assets/instagram.png'
import whatsapp from '../Assets/whatsapp.jpeg'
import call from '../Assets/call.png'
import './Contact.css'
const Contact = () => {
  return (
    <div  className='contactmain'>
       <div ><h1 style={{color:"#fff666" ,backgroundColor:"#81580cc2",boxShadow:"2px 6px 10px #000", borderRadius:"10px"

       }}>
         If you Want <br/>
      Connect with me?</h1>

      <h3>Contact us</h3>
    </div>
     <div  className='contactus'>
     <a href='https://www.facebook.com/riiiiiyad2/' target='_blank' rel='nopener noreferrer'> <img src={fbpic} alt='fb'/>facebook</a>
   
      <a href='https://www.instagram.com/ridhu_khan1/' target='_blank' rel='nopener noreferrer'> <img src={insta} alt='insta'/>instagram</a>
      <a href='https://wa.me/8801836974525/' target='_blank' rel='nopener noreferrer'> <img src={whatsapp} alt='whatsapp'/>whatsapp</a>
      <a href='tel:+8801742979691'> <img src={call} alt='call now'/>Call Me</a>

    </div>
    </div>
  )
}

export default Contact