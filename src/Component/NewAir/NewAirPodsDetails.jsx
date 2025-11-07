import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../Trendtyw/TrendyDetils.css'
const NewAirPodsDetails = () => {
    const location = useLocation()
    const product = location.state;
    const[Bigimg,setBigImg]=useState(product.img)
    const [quantity,setQuantity]=useState(1)
  return (
    <div style={{marginTop:"5%"}}>
      <h1>{product.name}</h1>
<div className='Bigimg'>
<img src={Bigimg} alt="" />
</div>
<div className='Smallimg'>
<img src={product.img1} alt="" onClick={()=>setBigImg(product.img1)}/>
<img src={product.img2}  alt="" onClick={()=>setBigImg(product.img2)}/>
<img src={product.img3}  alt="" onClick={()=>setBigImg(product.img3)}/>

</div>
<h3>price$ {product.price*quantity}</h3>
<div>
  <button onClick={()=>setQuantity(quantity=>quantity+1)}>+</button>
  <span>{quantity}</span>
  <button onClick={()=>setQuantity(quantity=>quantity>1?quantity-1:1)}>-</button>
<br />
<button  style={{marginTop:"7px", padding:"8px", borderRadius:"6px",
           backgroundColor:"#13abf1ff"}}>Buy Now</button>

</div>






    </div>
  )
}

export default NewAirPodsDetails