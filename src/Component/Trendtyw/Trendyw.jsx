import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Trendyw.css'
import trendywa from '../../assets/Watch Data/TrendyWatch'
const Trendyw = () => {
  const navigate =useNavigate();
  return (
    <div className='trendymain'>

     
        
        {
            trendywa.map((productD)=>(
                <div key={productD.id} className='trendychild'>
                  <div className='trendyimg'>
                <img src={productD.img}/>
                </div>
            
                <h3>{productD.name}</h3> 

                <h4>${productD.price}</h4>
               <button onClick={()=>navigate('/TrendyDetails',{state: productD})} className='bbutton'>Buy Now</button>
                </div>
            ))
        }
        
        
      
    </div>
  )
}

export default Trendyw