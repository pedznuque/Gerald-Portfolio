import React from "react";
import "./Skill.css";
import DashboardCard from "../../Dashboard Card/DashboardCard";
import NameCard from "../../Name card/NameCard";
import { FaGear } from "react-icons/fa6";
import SkillCard from "../SkillCard/SkillCard";

const Skill = ({ children }) => {
  return (
    <DashboardCard className="skill_dashboard">
      <NameCard
        icon={<FaGear />}
        name="Skill And Experience"
        nameCardStyle={{ padding: "0", background: "none", fontWeight: "bold" }}
      />
      {children}
    </DashboardCard>
  );
};

export default Skill;
