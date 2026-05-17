import React from "react";
import "./AnimationWrapper.css";

const AnimationWrapper = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.6,
  className = "",
}) => {
  return (
    <div
      className={`animation-wrapper ${animation} ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimationWrapper;