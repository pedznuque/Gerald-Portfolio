import React, { useState } from "react";
import "./Slider.css";

const Slider = ({ children }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="slider">
      <div className="slider-window">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${current * 100}%)`
          }}
        >
          {React.Children.map(children, (child, index) => (
            <div className="slide" key={index}>
              {child}
            </div>
          ))}
        </div>
      </div>

      <div className="dots">
        {React.Children.map(children, (_, index) => (
          <button
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;