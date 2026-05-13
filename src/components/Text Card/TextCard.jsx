import React from "react";
import "./TextCard.css";

const TextCard = ({ title, body, textCardStyle={}, titleCardStyle={}}) => {
  return (
    <div className="text_card" style={textCardStyle}>
      <div className="title" style={titleCardStyle}>{title}</div>
      <div className="body">{body}</div>
    </div>
  );
};

export default TextCard;
