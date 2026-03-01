import React, { useState } from 'react'
import './TrendyDetils.css'
import { useLocation } from 'react-router-dom'
import axios from "axios"
const TrendyDetails = () => {
const location =useLocation()
const product =location.state;
const [quantity,setQuantity]=useState(1)
const [bigImg,setBigImg]=useState(product.img)
const [name,setName]=useState("")
const [phone,setPhone]=useState("")
const [email,setEmail]=useState("")
const [address,setAddress]=useState("")
const [loading,setLoading]=useState(false)
const handleSubmit =async(e)=>{
e.preventDefault()
setLoading(true)
try {
  const fromData = {
    productName:product.name,
    price:product.price,
    quantity:quantity,
    name:name,
    phone:phone,
    email:email,
    address:address
  }
  const res=await axios.post("http://localhost:3000/api/order",fromData)
  alert("order confirmed")
  console.log(res)
  return setLoading(false)

} catch (error) {
alert("something went wrong")
setLoading(false)
console.log(error)
}
}
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
      
      <div style={{ justifyContent:"center", marginBottom:"4%"}}>

        <button style={{backgroundColor:"green",height:"50px",width:"70px", fontSize:"39px"}} onClick={()=>setQuantity(quantity=>quantity+1)}>+</button>
           <span style={{justifyContent:"center", marginLeft:"6%",fontSize:"49px"}}>{quantity}</span>
<button style={{backgroundColor:"gray", height:"50px",width:"70px", fontSize:"39px"}}
         onClick={()=>setQuantity(quantity=>(quantity>1?quantity-1 :1))}>-</button>
   
<h2>Price: ${product.price * quantity}</h2>
        
         </div>

       <form onSubmit={handleSubmit} style={{background:"gray", width:"400px", justifyContent:"center", marginLeft:"4%"}}>
        <input 
        type="text"
        name='name'
        value={name}
        onChange={(e)=>setName(e.target.value)}
         placeholder='name'style={{marginTop:"3%", height:"30px",width:"360px", borderRadius:"10px", border:"2px red solid", color:"black", fontSize:"20px"}}/>
        <input type="number" name="phone"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
         id="" placeholder='phone' style={{marginTop:"3%", height:"30px",width:"360px", borderRadius:"10px", border:"2px red solid", color:"black", fontSize:"20px"}}/>
        
        <input type="email"
         name="email"
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
          id="" placeholder='your emai' style={{marginTop:"3%", height:"30px", width:"360px", borderRadius:"10px", border:"2px red solid", color:"black", fontSize:"20px"}}/>
        
        <input type="text"
         name="address" 
         value={address}
         onChange={(e)=>setAddress(e.target.value)}
         id="" placeholder='type your full address'style={{marginTop:"3%", height:"70px",width:"360px", borderRadius:"10px", border:"2px red solid", color:"black", fontSize:"20px"}}/>

          <button type='submit' disabled={loading}
          style={{ padding:"8px", borderRadius:"6px",
           backgroundColor:"#13abf1ff", marginTop:"9px",width:"150px",marginLeft:"25%"}}>{loading? "receving....":"Confirm Order"}</button>

       </form>
           
  </div>
  )
}

export default TrendyDetails;