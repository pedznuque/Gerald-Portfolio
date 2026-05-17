import React from 'react'
import ContentPage from '../../components/Content Page/ContentPage'
import './Project.css'
import NameCard from '../../components/Name card/NameCard'
import { GrStatusGoodSmall } from 'react-icons/gr'
import DashboardCard from '../../components/Dashboard Card/DashboardCard'

const Project = () => {
  return (
    <ContentPage>
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

      <DashboardCard className='project_dashboard'> No Project Yet </DashboardCard>

    </ContentPage>
  )
}
    
export default Project