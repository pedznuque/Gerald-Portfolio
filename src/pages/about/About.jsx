import React from "react";
import "./About.css";
import ContentPage from "../../components/Content Page/ContentPage";
import NameCard from "../../components/Name card/NameCard";
import { GrStatusGoodSmall } from "react-icons/gr";
import Intro from "../../components/About Section/Intro Section/Intro";
import Education from "../../components/About Section/Education/Education";
import EducationCard from "../../components/About Section/EducationCard/EducationCard";
import Skill from "../../components/About Section/Skill Experience/Skill";
import SkillCard from "../../components/About Section/SkillCard/SkillCard";
import Admin from "../../components/Animated Icons/Admin Icon/Admin";
import FrontEnd from "../../components/Animated Icons/Front end/FrontEnd";
import DataManagement from "../../components/Animated Icons/Data Management/DataManagement";
import ReactDev from "../../components/Animated Icons/React Dev/ReactDev";
import DataAnnotation from "../../components/Animated Icons/Data Annotation/DataAnnotation";
import Academic from "../../components/Animated Icons/Academic/Academic";
import Footer from "../../components/Footer/Footer";
import Certificates from "../../components/About Section/Certificates/Certificates";
import CertificateCard from "../../components/About Section/CertificateCard/CertificateCard";
import { images } from "../../data/images";
import AnimationWrapper from "../../components/framer/AnimationWrapper";

const About = () => {
  return (
    <ContentPage>
      <NameCard
        icon={
          <GrStatusGoodSmall
            color="green"
            size={10}
            color="var(--green-font-color)"
          />
        }
        name="About"
        className="page_title"
        nameCardStyle={{
          alignSelf: "flex-start",
          padding: "10px",
          backgroundColor: "transparent",
        }}
        nameStyle={{ marginBottom: "3px", fontWeight: "bold" }}
      />
      <AnimationWrapper>
        <Intro />
      </AnimationWrapper>

      <AnimationWrapper>
        <Education>
          <EducationCard
            level="College"
            course="B.S Computer Science"
            school="AMA Computer College Tarlac"
            year="2019-2023"
            image={images.school.first}
          />

          <EducationCard
            image={images.school.second}
            level="High School - Senior High School"
            school="Tarlac National High School"
            course="HUMSS"
            year="2012-2018"
          />
        </Education>
      </AnimationWrapper>

      <AnimationWrapper>
        <Skill>
          <SkillCard
            icon={<Admin />}
            title="Technical & Administrative Support"
            details="Experience supporting digital workflows, record organization, documentation handling, and system-related operations in structured environments."
          />

          <SkillCard
            icon={<FrontEnd />}
            title="Frontend & Web Development"
            details="Worked on responsive interfaces, interactive web applications, and frontend systems using modern web technologies and component-based development."
          />

          <SkillCard
            icon={<DataManagement />}
            title="Data Management & Organization"
            details="Handled data organization, updating, processing, and structured record management using digital tools and database-driven systems."
          />

          <SkillCard
            icon={<ReactDev />}
            title="React & UI Development"
            details="Built and explored modern React-based interfaces focused on responsiveness, reusability, and interactive user experiences."
          />
          <SkillCard
            icon={<DataAnnotation />}
            title="AI Data Annotation & Processing"
            details="Contributed to data annotation, transcription, categorization, and dataset preparation following structured quality guidelines for AI-related workflows."
          />

          <SkillCard
            icon={<Academic />}
            title="Academic & Project-Based Experience"
            details="Developed technical and analytical skills through hands-on projects involving frontend development, algorithms, databases, and application design."
          />
        </Skill>
      </AnimationWrapper>
     <Certificates>
  <CertificateCard
    image={images.certificates.adv}
    title="CPP - Advanced Programming in C++"
    details="Completed advanced C++ programming training through Cisco Networking Academy, covering object-oriented programming, problem-solving, and software development fundamentals."
  />

  <CertificateCard
    image={images.certificates.cpa}
    title="CPA - Programming Essentials in C++"
    details="Completed foundational C++ programming coursework, focusing on programming logic, data structures, algorithms, and software development principles."
  />

  <CertificateCard
    image={images.certificates.itc}
    title="Introduction to Cybersecurity"
    link="https://www.credly.com/badges/21fb3dde-78c7-4ce6-9163-7bc48e50930e"
    details="Gained foundational knowledge of cybersecurity concepts, online threats, data protection, risk management, and safe digital practices."
  />

  <CertificateCard
    image={images.certificates.ccna}
    title="CCNA: Switching, Routing, and Wireless Essentials"
    details="Learned networking fundamentals including routing, switching, wireless networking, IP addressing, network security, and infrastructure management."
  />

  <CertificateCard
    image={images.certificates.packetTracer}
    title="Introduction to Packet Tracer"
    details="Completed hands-on networking simulations using Cisco Packet Tracer to design, configure, troubleshoot, and visualize network environments."
  />
</Certificates>

      <Footer />
    </ContentPage>
  );
};

export default About;
