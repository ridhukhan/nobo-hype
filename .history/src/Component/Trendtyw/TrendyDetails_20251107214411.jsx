import React, { useState } from 'react'
import './TrendyDetils.css'
import { useLocation } from 'react-router-dom'

const TrendyDetails = () => {
const location =useLocation()
const product =location.state;
const [quantity,setQuantity]=useState(1)
const [bigImg,setBigImg]=useState(product.img)

  return (
  
<div style={{marginTop:"5%"}}>
   <h1>{product.name}</h1>
 <div className='Bigimg'>
        <img src={bigImg} alt={product.name}/>
      </div>
 <div className='Smallimg'>
        <img src={product.img1} alt=""  onClick={()=>setBigImg(product.img1)}/>
        <img src={product.img2} alt=""  onClick={()=>setBigImg(product.img2)}/>
        <img src={product.img3} alt=""  onClick={()=>setBigImg(product.img3)}/>
      </div>
<h3>Price: ${product.price * quantity}</h3>
      
      <div>
        <button onClick={()=>setQuantity(quantity=>quantity+1)}>+</button>
        <span>{quantity}</span>
         <button onClick={()=>setQuantity(quantity=>(quantity>1?quantity-1 :1))}>-</button>
       
         <button style={{ padding:"8px", borderRadius:"6px",
           backgroundColor:"#13abf1ff", marginTop:"9px"}}>Buy Now</button>
      </div>
  </div>
  )
}

export default TrendyDetails;