import React from "react";
import "./FollowMe.css";
import DashboardCard from "../../Dashboard Card/DashboardCard";
import NameCard from "../../Name card/NameCard";
import { SlUserFollow } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const FollowMe = () => {
  return (
    <DashboardCard className="follow_me">
      <NameCard
        icon={<SlUserFollow />}
        name="FOLLOW ME"
        nameCardStyle={{
          background: "none",
          fontSize: "18px",
          fontWeight: "bold",
          gap: "20px"
        }}
      />

      <div className="soc_med_container">
        <li>
          <FaFacebook size={30} />
        </li>
        <li>
          <RiInstagramFill size={30}/>
        </li>
        <li>
          <FaSquareXTwitter size={30}/>
        </li>
        <li>
          <FaLinkedin size={30} />
        </li>
      </div>
    </DashboardCard>
  );
};

export default FollowMe;
