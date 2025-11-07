import React from 'react'
import heropic from '../../assets/Hero.jpeg'
import './Hero.css'
const Hero = () => {
  return (
    <div className='Hero'>
        <div className='Textt'>
<h1>NOBO HYPE</h1>
<h3>your Product <br/> Your Style</h3>

        </div>
        <div className='Heroimg'>
            <img src={heropic} alt="heropic" />
        </div>
    </div>
  )
}

export default Hero