import React from 'react'
import './Luxaryw.css'

import luxaryw from '../../assets/Watch Data/LuxaryWatch'
import { useNavigate } from 'react-router-dom'
const Luxaryw = () => {
  const navigate = useNavigate()
  return (
    <div className='trendymain'>


{
  luxaryw.map((luxarypro)=>(
<div  key={luxarypro.id} className='trendychild'>
<div>
  <img src={luxarypro.img}/>
</div>
<div>
  <p>{luxarypro.name}</p>
  <h3>{luxarypro.price}</h3>
  <button onClick={()=>navigate('/LuxaryDetails',{state: luxarypro})}>Buy Now</button>
</div>

</div>




  ))
}

        
    </div>
  )
}

export default Luxaryw