import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({ children, name }) => {
  const items = React.Children.toArray(children);

  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current < items.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-header">
        <h4>{name}</h4>

        <div className="carousel-buttons">
          <button onClick={prev}>‹</button>
          <button onClick={next}>›</button>
        </div>
      </div>

      <div className="carousel-window">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${current * 90}px)`
          }}
        >
          {items.map((item, index) => (
            <div className="carousel-card" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;