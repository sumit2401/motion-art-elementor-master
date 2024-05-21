import React from "react";
import "./navbar.css";
import p12 from "../assests/p12.png";
const navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-l">
        <div>
          <img src={p12} alt="logo" />
        </div>
      </div>
      <div>
        <div className="navbar-r">
          {" "}
          <button className="navbtn">Purchase Now</button>{" "}
        </div>
      </div>
    </div>
  );
};

export default navbar; // ek min call hai uska
