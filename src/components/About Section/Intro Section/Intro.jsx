import React from "react";
import "./Intro.css";
import DashboardCard from "../../Dashboard Card/DashboardCard";
import NameCard from "../../Name card/NameCard";
import { FaHands } from "react-icons/fa6";
import TextCard from "../../Text Card/TextCard";

const Intro = () => {
  return (
    <DashboardCard className="intro_dashboard">
      
      <div className="profile_intro">

        <div className="profile">

            <div className="image_holder"><img src="/profile/image.png" alt="" /></div>

        </div>
        <div className="intro_text"><TextCard title={<><FaHands/> I am Gerald</>} body="Passionate about creating clean user interfaces, smooth user experiences, and maintainable frontend architecture. I focus on building responsive and interactive web applications using React while continuously exploring modern design systems, animations, and scalable component-based development." textCardStyle={{background: "none", textAlign: "start", fontSize: "15px", }} titleCardStyle={{marginTop: "5px", color: "var(--green-font-color)"}}/></div>


      </div>



    </DashboardCard>
  );
};

export default Intro;
