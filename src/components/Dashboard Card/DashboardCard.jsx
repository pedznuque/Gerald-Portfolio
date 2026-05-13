import React from 'react'
import './DashboardCard.css'

const DashboardCard = ({children, className=''}) => {
  return (
    <div className={`dashboard_card ${className}`}>

        {children}
    
    </div>
  )
}

export default DashboardCard