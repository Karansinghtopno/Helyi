import React from "react";
import "./ServiceComp.css"

const ServiceComp = ({ img, text }) => {
  return (
    <div className="service_containr">
      <div className="sevice_wrapper">
        <img src={img} alt="service_image" />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ServiceComp;
