import React from 'react'
import './PageLayout.css'

const PageLayout = ({children}) => {
  return (
    <div className="page_layout">
        {children}
    </div>  
  )
}

export default PageLayout