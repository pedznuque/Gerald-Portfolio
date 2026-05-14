import React from "react";
import "./TextCard.css";

const TextCard = ({ title, body, className="", textCardStyle={}, titleCardStyle={}}) => {
  return (
    <div className="text_card" style={textCardStyle}>
      <div className={`title ${className}`}style={titleCardStyle}>{title}</div>
      <div className={`body ${className}`}>{body}</div>
    </div>
  );
};

export default TextCard;
