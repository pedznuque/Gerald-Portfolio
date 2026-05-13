import React from "react";
import "./FrontEnd.css";

const FrontEnd = () => {
  return (
    <div className="fwd-logo" aria-label="Frontend and Web Development Icon">
      <div className="fwd-card">
        <div className="fwd-browser">
          <div className="fwd-browser-top">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="fwd-code-area">
            <div className="fwd-code fwd-left">&lt;</div>
            <div className="fwd-screen">
              <div className="fwd-line fwd-line-1"></div>
              <div className="fwd-line fwd-line-2"></div>
              <div className="fwd-line fwd-line-3"></div>
            </div>
            <div className="fwd-code fwd-right">/&gt;</div>
          </div>
        </div>

        <div className="fwd-cursor"></div>
      </div>
    </div>
  );
};

export default FrontEnd;