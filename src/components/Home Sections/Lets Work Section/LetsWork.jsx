import React from "react";
import "./LetsWork.css";
import DashboardCard from "../../Dashboard Card/DashboardCard";
import NameCard from "../../Name card/NameCard";
import { FaNetworkWired } from "react-icons/fa";
import { images } from "../../../data/images";

const LetsWork = () => {
  return (
    <DashboardCard className="letswork_dashboard">
      <NameCard
        icon={<FaNetworkWired />}
        name="LET'S WORK TOGETHER!"
        nameCardStyle={{
          background: "none",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      />
      <NameCard
        name="Building responsive, modern, user-focused web applications with React and scalable UI systems."
        nameCardStyle={{ textAlign: "center", background: "none" }}
      />

      <div className="service_container">
        <div className="service_placeholder">
          <img src={images.service.ux} alt="" />
          <div className="title">UI/UX DESIGN</div>
        </div>

        <div className="service_placeholder">
          <img src={images.service.code} alt="" />
          <div className="title">WEB DEVELOPMENT</div>
        </div>

        <div className="service_placeholder">
          <img src={images.service.stack} alt=""/>
          <div className="title">FULL STACK DEV</div>
        </div>
      </div>
    </DashboardCard>
  );
};

export default LetsWork;
 