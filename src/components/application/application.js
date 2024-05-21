import React from "react";
import "./application.css";
import img1 from "../assests/p6.png";
import img2 from "../assests/p7.png";

const application = () => {
  return (
    <div>
      <div>
        <h2 className="heading">
          Apply On Any Section Or Enable For Whole Page
        </h2>
      </div>
      <div className="app">
        <div className="section1">
          <div>
            <h2 className="apply">Apply On Section </h2>
          </div>
          <div>
            <p className="paras">
              Apply on section is a game-changer, offering an unparalleled way
              to manage applications directly from your website.
            </p>
          </div>
          <div>
            <img className="appi" src={img2} alt="" />
          </div>
        </div>
        <div className="section2">
          <div>
            <h2 className="apply">Apply On Page</h2>
          </div>
          <div>
            <p className="paras">
              Take your website to new heights with Motion Art for Elementor.
              Embrace the power of motion and animation.
            </p>
          </div>
          <div>
            <img className="appi" src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default application;
