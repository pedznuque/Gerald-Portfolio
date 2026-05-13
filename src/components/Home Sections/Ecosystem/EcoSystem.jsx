import React from 'react'
import DashboardCard from "../../Dashboard Card/DashboardCard";
import NameCard from "../../Name card/NameCard";
import Carousel from "../../Carousel/Carousel";
import { HiLightBulb } from "react-icons/hi";
import techStack from "../../../data/techStack";
import StatDashboard from "../../Stat Dashboard/StatDashboard";
import './EcoSystem.css'


const EcoSystem = () => {
  return (
    <DashboardCard className="ecosystem_dashboard">
        <NameCard
          icon={<HiLightBulb />}
          name="Professional Ecosystem"
          nameCardStyle={{
            backgroundColor: "Transparent",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        />

        <Carousel name="Tech Stack">
          {techStack.map((tech, index) => (
            <div
              className="placeholder"
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "5px",
                gap: "5px",
              }}
            >
              <img
                src={tech.image}
                alt={tech.name}
                style={{
                  width: "70px",
                  height: "70px",
                }}
              />

              <strong>{tech.name}</strong>
            </div>
          ))}
        </Carousel>

        <StatDashboard />
      </DashboardCard>
  )
}

export default EcoSystem