import React from "react";
import "./KeyCard.css";
import KeyIconDet from "./KeyIconDet";

const KeyCard = ({ img, text, details, iconDet }) => {
  // console.log(iconDet)
  return (
    <div className="take">
      <img src={img} alt="logo" />
      <div className="key_card_head">
        <h3>{text}</h3>
        <p>{details}</p>
      </div>
      <div className="key_features">
        {iconDet.map((Icon, index) => (
          <KeyIconDet key={index} icon={Icon} />
        ))}
      </div>
    </div>
  );
};

export default KeyCard;
