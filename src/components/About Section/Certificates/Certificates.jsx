import React from "react";
import "./Certificates.css";
import DashboardCard from "../../Dashboard Card/DashboardCard";
import NameCard from "../../Name card/NameCard";
import { GrCertificate } from "react-icons/gr";

const Certificates = ({children}) => {
  return (
    <DashboardCard className="certificates_dashboard">
      <NameCard
        icon={<GrCertificate />}
        name="Certificates"
        nameCardStyle={{
          background: "none",
          padding: "0px",
          fontWeight: "bold",
        }}
      />{children}
    </DashboardCard>
  );
};

export default Certificates;
