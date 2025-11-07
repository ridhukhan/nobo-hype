import { BrowserRouter ,Routes,Route } from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import Home from "./Pages/Home"
import SmartWatch from "./Pages/SmartWatch"
import AirBards from "./Pages/AirBards"
import Clothing from "./Pages/Clothing"
import Contact from "./Pages/Contact"
import NewAirPodsDetails from "./Component/NewAir/NewAirPodsDetails"
import TrendyAirPodsDetails from "./Component/AirpodsPro/TrendyAirPodsDetails"
import TrendyDetails from "./Component/Trendtyw/TrendyDetails"
import LuxaryDetails from "./Component/Luxaryw/LuxaryDetails"
import LediesDetails from "./Component/Lediesw/LediesDetails"
function App() {
  

  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/SmartWatch" element={<SmartWatch/>}/>
      <Route path="/AirBards" element={<AirBards/>}/>
      <Route path="/Clothing" element={<Clothing/>}/>
      <Route path="/Contact" element={<Contact/>}/>
<Route path="/TrendyDEtails" element={<TrendyDetails/>}/>
<Route path="/LuxaryDEtails" element={<LuxaryDetails/>}/>
<Route path="/LediesDetails" element={<LediesDetails/>}/>
<Route path="/TrendyAirPodsDetails" element={<TrendyAirPodsDetails/>}/>
<Route path="/NewAirPodsDetails" element={<NewAirPodsDetails/>}/>



    </Routes>
  
   </BrowserRouter> 
   </div>   
  )
}

export default App
