import React from "react";
import "./Home.css";
import ContentPage from "../../components/Content Page/ContentPage";
import DashboardCard from "../../components/Dashboard Card/DashboardCard";
import NameCard from "../../components/Name card/NameCard";
import TextCard from "../../components/Text Card/TextCard";
import { TbBriefcase2Filled } from "react-icons/tb";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoCopyOutline } from "react-icons/io5";
import { GrStatusGoodSmall } from "react-icons/gr";
import StatDashboard from "../../components/Stat Dashboard/StatDashboard";
import LetsWork from "../../components/Home Sections/Lets Work Section/LetsWork";
import FollowMe from "../../components/Home Sections/Follow Me/FollowMe";
import Footer from "../../components/Footer/Footer";
import EcoSystem from "../../components/Home Sections/Ecosystem/EcoSystem";
import { images } from "../../data/images";
import AnimationWrapper from "../../components/framer/AnimationWrapper";

const Home = () => {
  return (

    <AnimationWrapper>

   <ContentPage className="home_content">
      <NameCard
        icon={<GrStatusGoodSmall color="var(--green-font-color)" size={10} />}
        name="Home"
        className="page_title"
        nameCardStyle={{
          alignSelf: "flex-start",
          padding: "10px",
          backgroundColor: "transparent",

        }}
        nameStyle={{ marginBottom: "3px", fontWeight: "bold" }}
      />

      <DashboardCard className="profile_dashboard">
        <div className="detail_side">
          <NameCard
            icon={<TbBriefcase2Filled color="var( --green-font-color)" />}
            name="Web developer"
            className="prof_sign"
            nameCardStyle={{ backgroundColor: "transparent", padding: "0" }}
            nameStyle={{ marginBottom: "3px", fontWeight: "bold", color: "var( --green-font-color)" }}
          />
          <TextCard
            title="Gerald Nuque"
            body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            textCardStyle={{
              backgroundColor: "transparent",
              padding: "0",
              marginTop: "15px",
            }}
            className="content"
            titleCardStyle={{ fontSize: "28px" }}
          />

          <div className="button_container">
            <div className="message_button">
              <div className="icon">
                <BiMessageSquareDetail size={18} />
              </div>
              <p>Message Me</p>
            </div>
            <div className="copy_button">
              <div className="icon">
                <IoCopyOutline />
              </div>
              <p>Copy Email</p>
            </div>
          </div>
        </div>
        <div className="visual_side">

           <NameCard
            icon={<TbBriefcase2Filled color="green" />}
            name="Web developer"
            className="prof_sign_off"
            nameCardStyle={{ backgroundColor: "transparent", padding: "0" }}
            nameStyle={{ marginBottom: "3px", fontWeight: "bold", color: "green" }}
          />

          <NameCard
            icon={<GrStatusGoodSmall color="var(--green-font-color)" size={10} />}
            name="Available For Work"
            className="available_for_work"
          
            nameCardStyle={{
              background: "none",
              border: "var(--green-border-color)",
              marginTop: "15px",
          
          
            }}
            nameStyle={{
              marginBottom: "1px",
              fontWeight: "bold",
              color: "green",
              fontSize: "14px",
                  color: "var(--green-font-color)"
            }}
          />

          <div className="profile_pic">
            <img
              src={images.profile.main}
              alt=""
            />
          </div>
        </div>
      </DashboardCard>

      <EcoSystem />
      <LetsWork />
      <FollowMe />
      <Footer />
    </ContentPage>

    </AnimationWrapper>
 
  );
};

export default Home;
