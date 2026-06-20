import React from 'react'
import ContentPage from '../../components/Content Page/ContentPage'
import './Project.css'
import NameCard from '../../components/Name card/NameCard'
import { GrStatusGoodSmall } from 'react-icons/gr'
import DashboardCard from '../../components/Dashboard Card/DashboardCard'
import ProjPlaceholder from '../../components/project placeholder/ProjPlaceholder'
import Footer from '../../components/Footer/Footer'

const Project = () => {
  return (
    <ContentPage className='project_container'>
       <NameCard
        icon={<GrStatusGoodSmall color="green" size={10} color="var(--green-font-color)" />}
        name="Project"
        className="page_title"
        nameCardStyle={{
          alignSelf: "flex-start",
          padding: "10px",
          backgroundColor: "transparent",
        }}
        nameStyle={{ marginBottom: "3px", fontWeight: "bold" }}
      />

      <DashboardCard className='project_dashboard'> 
        
          <ProjPlaceholder title="YumRadar - Resto Recommendation System" description='A resto Recommendation system utilizing cosine similirty and tf-idf algorithm.' status='IN PROGRESS • UPDATING'/>
        
         </DashboardCard>


    </ContentPage>
  )
}
    
export default Project