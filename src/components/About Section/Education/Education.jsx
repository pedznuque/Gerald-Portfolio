import React from "react";
import "./Education.css";
import DashboardCard from "../../Dashboard Card/DashboardCard";
import NameCard from "../../Name card/NameCard";
import { IoSchoolSharp } from "react-icons/io5";
import EducationCard from "../EducationCard/EducationCard";

const Education = ({ children }) => {
  return (
    <DashboardCard className="education">
      <NameCard
        icon={<IoSchoolSharp />}
        name="Education"
        nameCardStyle={{
          background: "none",
          padding: "0px",
          fontWeight: "bold",
        }}
      />

      {children}
    </DashboardCard>
  );
};

export default Education;
