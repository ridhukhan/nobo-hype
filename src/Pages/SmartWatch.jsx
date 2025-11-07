import React from 'react'
import Trendyw from '../Component/Trendtyw/Trendyw'
import Luxaryw from '../Component/Luxaryw/Luxaryw'
import Lediesw from '../Component/Lediesw/Lediesw'
import './SmartWatch.css'
const SmartWatch = () => {
  return (
    <div>
      <h2 style={{marginTop:"25%", textAlign:"center"}}>Trendy Watch</h2>
      <Trendyw/>
      <h2  style={{textAlign:"center"}}>LUXARY VIBE...</h2>
     
<Luxaryw/>
<h2 style={{textAlign:"center"}}>LEDIES FASHION</h2>
<Lediesw/>
    </div>
  )
}

export default SmartWatch