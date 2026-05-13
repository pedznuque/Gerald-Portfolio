import React from "react";
import './Admin.css'


const Admin = () => {
  return (
    <div className="tas-logo" aria-label="Technical and Administrative Support Logo">
      <div className="tas-circle">
        <div className="tas-gear">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="tas-document">
          <div className="tas-line tas-line-1"></div>
          <div className="tas-line tas-line-2"></div>
          <div className="tas-line tas-line-3"></div>
        </div>

        <div className="tas-check"></div>
      </div>
    </div>
  );
};

export default Admin;