import React from 'react'
import Hero from '../Component/Hero/Hero'
import Trendyw from '../Component/Trendtyw/Trendyw'
import NewAirPods from '../Component/NewAir/NewAirPods'
import Lediesw from '../Component/Lediesw/Lediesw'


const Home = () => {
  return (
    <div>
      <Hero/>

   
       <div style={{marginTop:"15%"}}>
        <h1>Trendy watch</h1>
       <Trendyw />
       </div>
         <h1 style={{textAlign:"center" ,marginTop:"25%"}}>New AirPods</h1>
     <NewAirPods/>
         <h1 style={{textAlign:"center" ,marginTop:"25%"}}>Ledies Collection</h1>
<Lediesw/>
    </div>
  )
}

export default Home