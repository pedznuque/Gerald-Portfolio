import React from 'react'
import './SkillCard.css'

const SkillCard = ({icon, title, details}) => {
  return (
    <div className='skill_card'>

    <div className="icon_container">{icon}</div>
    <div className="details_container">

    <div className="title"><h4>{title}</h4></div>
    <div className="details">{details}</div>

    </div>

    </div>
  )
}

export default SkillCard