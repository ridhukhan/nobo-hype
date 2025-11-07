import React from 'react'
import './Lediesw.css'
import { useNavigate } from 'react-router-dom'
import lediesw from '../../assets/Watch Data/LediesWatch'
const Lediesw = () => {
  const navigate =useNavigate()
  return (
    <div className='trendymain'>


{
    lediesw.map((lediespro)=>(
<div key={lediespro.id} className='trendychild'>
<div>
  <img src={lediespro.img}/>
</div>
<div>
  <h2>{lediespro.mame}</h2>
  <h3>
    price$ {lediespro.price}
  </h3>
  <button onClick={()=>navigate('/LediesDetails',{state:lediespro})}>Buy Now</button>
</div>





</div>
    ))
}




    </div>
  )
}

export default Lediesw