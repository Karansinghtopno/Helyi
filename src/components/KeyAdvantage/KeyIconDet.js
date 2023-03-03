import React from "react";

const KeyIconDet = ({ icon }) => {
  // console.log(icon)
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px",
        
      }}
    >
      <div>
        <img src={icon.img} alt="logo" />
      </div>
      <div style={{
        fontSize:"16px",
        fontWeight:"400"
      }}>{icon.det}</div>
    </div>
  );
};

export default KeyIconDet;
