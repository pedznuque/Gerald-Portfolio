import React from 'react'
import './ProjPlaceholder.css'

const ProjPlaceholder = ({title="", description="", status=""}) => {
  return (
    <div className='proj_placeholder'>

    <div className="title">

    <h4>{title}</h4>

    </div>

    <div className="description"><p>{description}</p></div>

    <div className="status"><p>{status}</p></div>


    </div>
  )
}

export default ProjPlaceholder