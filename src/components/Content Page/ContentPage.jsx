import React from 'react'
import './ContentPage.css'
import PageLayout from '../Page Layout/PageLayout'

const ContentPage = ({children}) => {
  return (
    <>
    
    <PageLayout>
        <div className="content_page">{children}</div>
    </PageLayout>

    </>
  )
}

export default ContentPage