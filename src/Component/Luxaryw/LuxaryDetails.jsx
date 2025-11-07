import React, { useState } from 'react'
import '../Trendtyw/TrendyDetils.css'
import { useLocation } from 'react-router-dom'

const LuxaryDetails = () => {
const location =useLocation()
const productl =location.state;
const [quantity,setQuantity]=useState(1)
const [bigImg,setBigImg]=useState(productl.img)

  return (
  
<div style={{marginTop:"5%"}}>
   <h1>{productl.name}</h1>
 <div className='Bigimg'>
        <img src={bigImg} alt={productl.name}/>
      </div>
 <div className='Smallimg'>
        <img src={productl.img1} alt=""  onClick={()=>setBigImg(productl.img1)}/>
        <img src={productl.img2} alt=""  onClick={()=>setBigImg(productl.img2)}/>
        <img src={productl.img3} alt=""  onClick={()=>setBigImg(productl.img3)}/>
      </div>
<h3>Price: ${productl.price * quantity}</h3>
      
      <div>
        <button onClick={()=>setQuantity(quantity=>quantity+1)}>+</button>
        <span>{quantity}</span>
         <button onClick={()=>setQuantity(quantity=>(quantity>1?quantity-1 :1))}>-</button>
    <br/>     
         <button style={{marginTop:"7px", padding:"8px", borderRadius:"6px",
           backgroundColor:"#13abf1ff"}}>Buy Now</button>
      </div>
  </div>
  )
}

export default LuxaryDetails;