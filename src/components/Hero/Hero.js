import React from "react";
import "./Hero.css";
import heroCenter from "../../images/hero1.png";
import bg1 from "../../images/hero_background/bg1.png"
import bg2 from "../../images/hero_background/bg2.png"


const Hero = () => {
  return (
    <div className="hero_container">
      <div className="hero_wrapper">
        <h2 className="hero_heading">
          <span className="span1">Helyi </span>{" "}
          <span
            className="
            span2"
          >
            SMART Store
          </span>
        </h2>
        <p>Helyi is now building a new-era SMART Store throughout India</p>
        <img className="mainImg" src={heroCenter} alt="hero_center" />
        <h3>About Helyi</h3>
        <p className="hero_about">
          Helyi is one and only player in this technologically growing rural
          distribution space. At Helyi, we are redefining service provision in
          collaboration with Local stores and shops.
        </p>
      </div>
      <img src={bg1} alt="" className="bg1" />
      <img src={bg2} alt="" className="bg2"/>
    </div>
  );
};

export default Hero;
