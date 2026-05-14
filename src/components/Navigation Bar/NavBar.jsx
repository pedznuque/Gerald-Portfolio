import React from "react";
import "./NavBar.css";
import LinkCard from "../Link Card/LinkCard";
import { MdHomeFilled } from "react-icons/md";
import { GrHomeOption } from "react-icons/gr";
import { MdOutlineInfo } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { FaBlog } from "react-icons/fa6";
import { PiBriefcaseBold } from "react-icons/pi";
import NameCard from "../Name card/NameCard";
import { BiMessageSquareDetail } from "react-icons/bi";
import { NavLink } from "react-router";
import DarkModeButton from "../Night Mode/DarkModeButton";

const NavBar = () => {
  return (
    <nav>
      <div className="nav_card">
        {/*******************link card*************************/}
        <LinkCard className="nav_link_card">
          <NavLink to="/" className="icon">
            <GrHomeOption fontSize={25} />
          </NavLink>
          <NavLink to="/about" className="icon">
            <MdOutlineInfo fontSize={25} />
          </NavLink>
          <NavLink to="project" className="icon">
            <PiBriefcaseBold fontSize={25} />
          </NavLink>
          <NavLink to="blog" className="icon">
            <FaBlog fontSize={23} />
          </NavLink>
        </LinkCard>

        <div className="action_container">
          <DarkModeButton size={20} showGlow={false} />

          {/*******************Message me*************************/}
        

          <div className="message_me_button">
            <div className="icon">
              <BiMessageSquareDetail size={18} />
            </div>
            <p>Message Me</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
