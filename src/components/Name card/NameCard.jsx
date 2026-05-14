import React from "react";
import "./NameCard.css";

const NameCard = ({ icon, name, nameCardStyle={}, iconStyle={}, nameStyle={}, className=""}) => {
  return (
    <div className={`name_card ${className}`} style={nameCardStyle}>
      <div className="icon" style={iconStyle}>{icon}</div>
      <div className="name" style={nameStyle}>{name}</div>
    </div>
  );
};

export default NameCard;
