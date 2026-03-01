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
       

       <form action="" style={{background:"gray", width:"400px", justifyContent:"center", marginLeft:"4%"}}>
        <input type="text" name="" id="" placeholder='name'style={{marginTop:"3%", height:"30px"}}/>
        <input type="number" name="" id="" placeholder='phone' style={{marginTop:"3%", height:"30px"}}/>
        
        <input type="email" name="" id="" placeholder='your emai' style={{marginTop:"3%", height:"30px", width:"360px", borderRadius:"10px"}}/>
        
        <input type="text" name="" id="" placeholder='type your full address'style={{marginTop:"3%", height:"70px"}}/>

          <button style={{ padding:"8px", borderRadius:"6px",
           backgroundColor:"#13abf1ff", marginTop:"9px"}}>Buy Now</button>

       </form>
             </div>
  </div>
  )
}

export default TrendyDetails;