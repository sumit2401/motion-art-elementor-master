import React from "react";
import "./hero.css";

const hero = () => {
  return (
    <div className="hero">
      <div className="herol">
        <h5 className="hero-l1 hero-lii">Transform your website</h5>
        <h5 className="hero-l1">With emotion art effect</h5>
      </div>
      <div className="herom">
        <h5 className="hero-m">
          Attract Your Visitors Attention With Colorful
        </h5>
        <h5 className="hero-m hero-mm">Motion Art Effect</h5>
        <div>
          {" "}
          <p>
            {" "}
            Unleash the power of creativity with Motion Art for Elementor - your
            ultimate solution for seamlessly integrating captivating animations
            into your website.
          </p>{" "}
        </div>
      </div>
      <div className="heror"></div>
    </div>
  );
};

export default hero;
