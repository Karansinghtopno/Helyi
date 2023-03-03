import React from "react";
import "./AdvantageCard.css"

const AdvantageCard = ({ image, text }) => {
  const ImageWrapper = {
    height: "80%",
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "25px",
  };
  const imageStyle = {
    width: "80%",
    height: "80%",
  };

  return (
    <div
      style={{
        width: "250px",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flexStart",
        justifyContent:"space-between",
        // border:"1px solid black"
      }}
    >
      <div style={ImageWrapper}>
        <img src={image} alt={`${text}`} style={imageStyle} />
      </div>
      <div className="advantage_card_text">{text}</div>
    </div>
  );
};

export default AdvantageCard;
