import React from 'react'
import './StatDashboard.css'
import RadarBox from '../Radar/Radar'
import GearBox from '../Gear box/GearBox'

const StatDashboard = () => {
  return (
    <div className="stat_dashboard">


    <div className="radar_card">

    <div className="radar_container">
    <RadarBox/>
    </div>
    <div className="details_container">

    <h4>Total Visit:</h4>
    <h1>25</h1>

    </div>

    </div>
    <div className="gear_card">

    <div className="gear_container">

      <GearBox/>
    </div>
    <div className="details_container">

    <p><h4>Projects:</h4>24</p>
    <p><h4>Certificates:</h4> 5</p>
    <p><h4>Tech Used:</h4> 7</p>

    </div>

    </div>

    </div>
  )
}

export default StatDashboard  