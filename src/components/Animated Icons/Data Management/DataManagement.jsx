import React from "react";
import "./DataManagement.css";

const DataManagement = () => {
  return (
    <div className="dmo-logo" aria-label="Data Management and Organization Icon">
      <div className="dmo-card">
        <div className="dmo-database">
          <div className="dmo-db-top"></div>
          <div className="dmo-db-body">
            <div className="dmo-db-line dmo-db-line-1"></div>
            <div className="dmo-db-line dmo-db-line-2"></div>
          </div>
        </div>

        <div className="dmo-folder">
          <div className="dmo-folder-tab"></div>
          <div className="dmo-folder-body">
            <div className="dmo-file dmo-file-1"></div>
            <div className="dmo-file dmo-file-2"></div>
          </div>
        </div>

        <div className="dmo-check"></div>
      </div>
    </div>
  );
};

export default DataManagement;