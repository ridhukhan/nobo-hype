import React from 'react'
import './NewAirPods.css'
import newpo from '../../assets/AirPods Data/NewPods'
import { useNavigate } from 'react-router-dom'
const NewAirPods = () => {
    const navigate = useNavigate();
  return (
    <div className='trendymain'>
{
    newpo.map((newair)=>(
        <div key={newair.id}  className='trendychild'>
<div>
    <img src={newair.img}/>

</div>
<div>
    <p>{newair.name}</p>
    <h3>${newair.price}</h3>
    <button onClick={()=>navigate('/NewAirPodsdetails',{state:newair})}>Buy Now</button>
</div>







        </div>
    ))
}
    </div>
  )
}

export default NewAirPods