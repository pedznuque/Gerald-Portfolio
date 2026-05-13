import React, { useEffect, useState } from "react";
import "./Radar.css";

const RadarBox = () => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const generateDots = () => {
      const randomDots = Array.from({ length: 5 }, () => ({
        top: Math.random() * 80 + 10,
        left: Math.random() * 80 + 10,
      }));

      setDots(randomDots);
    };

    generateDots();

    const interval = setInterval(generateDots, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="radar-box">
      <div className="radar">
        <div className="radar-sweep"></div>

        <div className="radar-line horizontal"></div>
        <div className="radar-line vertical"></div>

        {dots.map((dot, index) => (
          <div
            key={index}
            className="radar-dot"
            style={{
              top: `${dot.top}%`,
              left: `${dot.left}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RadarBox;