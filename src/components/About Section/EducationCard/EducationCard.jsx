import React from "react";
import "./EducationCard.css";
import { LiaSchoolSolid } from "react-icons/lia";
import { SlChemistry } from "react-icons/sl";

const EducationCard = ({ level, course, school, year, image }) => {
  return (
    <div className="education_card">
      <div className="image_container">
        <div className="image_holder">
          <img
            src={image}
            alt=""
          />
        </div>
      </div>
      <div className="details_container">
        <div className="level">
          {level}
        </div>
        <div className="course">
          <h4>{course}</h4>
        </div>
        <div className="school_name">
          <h3>{school}</h3>
        </div>
        <div className="year">{year}</div>
      </div>
    </div>
  );
};

export default EducationCard;
