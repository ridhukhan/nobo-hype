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
<<<<<<< HEAD
import PrivecyPolicy from "./Pages/PrivecyPolicy"
import TermsCondition from "./Pages/TermsCondition"
=======
>>>>>>> e03a8220ed18943abc6a9c0a552bf17254b4692b
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
<<<<<<< HEAD
<Route path="/PrivecyPolicy" element={<PrivecyPolicy/>}/>
<Route path="/TermsCondition" element={<TermsCondition/>}/>
=======


>>>>>>> e03a8220ed18943abc6a9c0a552bf17254b4692b

    </Routes>
  
   </BrowserRouter> 
   </div>   
  )
}

export default App
