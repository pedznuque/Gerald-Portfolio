import React from "react";
import './ReactDev.css'

const ReactDev = () => {
  return (
    <div className="rui-logo" aria-label="React and UI Development Icon">
      <div className="rui-card">
        <div className="rui-react">
          <div className="rui-orbit rui-orbit-1"></div>
          <div className="rui-orbit rui-orbit-2"></div>
          <div className="rui-orbit rui-orbit-3"></div>
          <div className="rui-core"></div>
        </div>

        <div className="rui-ui-panel">
          <div className="rui-ui-header">
            <span></span>
            <span></span>
          </div>

          <div className="rui-ui-row rui-row-1"></div>
          <div className="rui-ui-row rui-row-2"></div>
          <div className="rui-ui-button"></div>
        </div>
      </div>
    </div>
  );
};

export default ReactDev;