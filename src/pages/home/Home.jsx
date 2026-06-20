import React, { useState } from "react";
import "./Home.css";
import resumePdf from "../../assets/resume/Gerald-Nuque-Resume.pdf";
import ContentPage from "../../components/Content Page/ContentPage";
import DashboardCard from "../../components/Dashboard Card/DashboardCard";
import NameCard from "../../components/Name card/NameCard";
import TextCard from "../../components/Text Card/TextCard";

import { TbBriefcase2Filled } from "react-icons/tb";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoCopyOutline } from "react-icons/io5";
import { GrStatusGoodSmall } from "react-icons/gr";

import LetsWork from "../../components/Home Sections/Lets Work Section/LetsWork";
import FollowMe from "../../components/Home Sections/Follow Me/FollowMe";
import Footer from "../../components/Footer/Footer";
import EcoSystem from "../../components/Home Sections/Ecosystem/EcoSystem";

import { images } from "../../data/images";
import AnimationWrapper from "../../components/framer/AnimationWrapper";

const Home = () => {
  const email = "zdeprald1@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  return (
    <AnimationWrapper>
      <ContentPage className="home_content">
        <NameCard
          icon={
            <GrStatusGoodSmall
              color="var(--green-font-color)"
              size={10}
            />
          }
          name="Home"
          className="page_title"
          nameCardStyle={{
            alignSelf: "flex-start",
            padding: "10px",
            backgroundColor: "transparent",
          }}
          nameStyle={{
            marginBottom: "3px",
            fontWeight: "bold",
          }}
        />

        <DashboardCard className="profile_dashboard">
          <div className="detail_side">
            <NameCard
              icon={
                <TbBriefcase2Filled color="var(--green-font-color)" />
              }
              name="Web developer"
              className="prof_sign"
              nameCardStyle={{
                backgroundColor: "transparent",
                padding: "0",
              }}
              nameStyle={{
                marginBottom: "3px",
                fontWeight: "bold",
                color: "var(--green-font-color)",
              }}
            />

            <TextCard
              title="Gerald Nuque"
              body="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              textCardStyle={{
                backgroundColor: "transparent",
                padding: "0",
                marginTop: "15px",
              }}
              className="content"
              titleCardStyle={{
                fontSize: "28px",
              }}
            />

            <div className="button_container">
              <a
                className="message_button"
                href={resumePdf}
                download="Gerald-Nuque-Resume.pdf"
              >
                <div className="icon">
                  <BiMessageSquareDetail size={18} />
                </div>

                <p>Download CV</p>
              </a>

              <button
                className="copy_button"
                type="button"
                onClick={copyEmail}
              >
                <div className="icon">
                  <IoCopyOutline />
                </div>

                <p>{copied ? "Email Copied!" : "Copy Email"}</p>
              </button>
            </div>
          </div>

          <div className="visual_side">
            <NameCard
              icon={
                <TbBriefcase2Filled color="var(--green-font-color)" />
              }
              name="Web developer"
              className="prof_sign_off"
              nameCardStyle={{
                backgroundColor: "transparent",
                padding: "0",
              }}
              nameStyle={{
                marginBottom: "3px",
                fontWeight: "bold",
                color: "var(--green-font-color)",
              }}
            />

            <NameCard
              icon={
                <GrStatusGoodSmall
                  color="var(--green-font-color)"
                  size={10}
                />
              }
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
                color: "var(--green-font-color)",
                fontSize: "14px",
              }}
            />

            <div className="profile_pic">
              <img
                src={images.profile.main}
                alt="Gerald Nuque"
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