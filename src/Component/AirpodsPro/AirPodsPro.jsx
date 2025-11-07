import Trendypo from "../../assets/AirPods Data/TrendyPods";
import { useNavigate } from "react-router-dom";

import './AirPodsPro.css'
export const AirPodsPro = () => {
  const navigate = useNavigate();
  return (
    <div className="trendymain">



        {
            Trendypo.map((pods)=>(
<div key={pods.id} className="trendychild">
<div>
    <img src={pods.img}/>

</div>
<div>
    <p>{pods.name}</p>
    <h3>${pods.price}</h3>
    <button onClick={()=>navigate("/TrendyAirPodsDetails", {state:pods})}>Buy Now</button>
</div>
</div>
            ))
        }
    </div>
  )
}
