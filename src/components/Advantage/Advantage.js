import React from "react";
import "./Advantage.css";
import img1 from "../../images/advantage_1.png";
import img2 from "../../images/advantage_2.png";
import img3 from "../../images/advantage_3.png";
import img4 from "../../images/advantage_4.png";
import img5 from "../../images/advantage_5.png";
import img6 from "../../images/advantage_6.png";
import img7 from "../../images/advantage_7.png";
import img8 from "../../images/advantage_8.png";
import AdvantageCard from "./AdvantageCard";

const Advantage = () => {
  return (
    <section className="advantage_cotainer">
      <div className="advantage_wrapper">
        <h2 className="advantage_heading">Advantages of Helyi</h2>
        <p className="advantage_content">
          Helyi stands on its four pillars that holds the foundation stone of
          Helyi’s coming customer focused services. We believe in adhering to
          all the strong points we have been working on from long time now.
        </p>
        <div className="advantage_card_wrapper">
          <div className="card_wrapper_row1">
            <AdvantageCard image={img1} text="Digitalizing the Stores" />
            <AdvantageCard
              image={img2}
              text="Streamlined Vendor & Supplier Payment"
            />
            <AdvantageCard
              image={img3}
              text="Sell Financial Product & Earn Extra Income"
            />
            <AdvantageCard
              image={img4}
              text="Buy Products in Competitive Price"
            />
          </div>
          <div className="card_wrapper_row2">
            <AdvantageCard image={img5} text="Customer Rewards" />
            <AdvantageCard image={img6} text="Best Customer Service" />
            <AdvantageCard
              image={img7}
              text="Easy Inventory 
Management"
            />
            <AdvantageCard image={img8} text="Get easy loans" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
