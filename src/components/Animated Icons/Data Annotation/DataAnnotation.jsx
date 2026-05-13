import React from "react";
import "./DataAnnotation.css";

const DataAnnotation = () => {
  return (
    <div className="aida-logo" aria-label="AI Data Annotation and Processing Icon">
      <div className="aida-card">
        <div className="aida-chip">
          <div className="aida-chip-core"></div>
          <span className="aida-pin aida-pin-1"></span>
          <span className="aida-pin aida-pin-2"></span>
          <span className="aida-pin aida-pin-3"></span>
          <span className="aida-pin aida-pin-4"></span>
        </div>

        <div className="aida-data-panel">
          <div className="aida-tag aida-tag-1"></div>
          <div className="aida-tag aida-tag-2"></div>
          <div className="aida-line aida-line-1"></div>
          <div className="aida-line aida-line-2"></div>
          <div className="aida-line aida-line-3"></div>
        </div>

        <div className="aida-cursor"></div>
      </div>
    </div>
  );
};

export default DataAnnotation;