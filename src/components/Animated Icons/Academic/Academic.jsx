import React from "react";
import "./Academic.css";

const Academic = () => {
  return (
    <div className="ape-logo" aria-label="Academic and Project-Based Experience Icon">
      <div className="ape-card">
        <div className="ape-cap">
          <div className="ape-cap-top"></div>
          <div className="ape-cap-band"></div>
          <div className="ape-tassel"></div>
        </div>

        <div className="ape-project-board">
          <div className="ape-board-header">
            <span></span>
            <span></span>
          </div>

          <div className="ape-task ape-task-1"></div>
          <div className="ape-task ape-task-2"></div>
          <div className="ape-task ape-task-3"></div>
        </div>

        <div className="ape-star"></div>
      </div>
    </div>
  );
};

export default Academic;