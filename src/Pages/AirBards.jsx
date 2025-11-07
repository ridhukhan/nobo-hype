import React from 'react'
import { AirPodsPro } from '../Component/AirpodsPro/AirPodsPro'
import NewAirPods from '../Component/NewAir/NewAirPods'

const AirBards = () => {
  return (
    <div>
      <AirPodsPro/>
      <h1>New Pods</h1>
      <NewAirPods/>
    </div>
  )
}

export default AirBards