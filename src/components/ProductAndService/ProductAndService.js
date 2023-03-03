import React from "react";
import "./ProductAndService.css";
import ServiceComp from "./ServiceComp";
import ps1 from "../../images/ps_1.png";
import ps2 from "../../images/ps_2.png";
import ps3 from "../../images/ps_3.png";
import ps4 from "../../images/ps_4.png";
import ps5 from "../../images/ps_5.png";
import ps6 from "../../images/ps_6.png";
import ps7 from "../../images/ps_7.png";
import ps8 from "../../images/ps_8.png";
import psMain from "../../images/ps_main.png";

const ProductAndService = () => {
  return (
    <section className="ps_container">
      <div className="ps_wrapper">
        <h2 className="ps_heading">Our Products & Services</h2>
        <p className="ps_details">
          Helyi SMART Store offers a wide range of services ranging from daily
          needs, groceries to haircuts,etc. in collaboration with various
          industry leaders to become a one stop solution to all customer needs
          and requirements.
        </p>
        <div className="ps_img_contaier">
          <div className="ps_img_main">
            <img src={psMain} alt="prdouct" />
          </div>
          <div className="ps_service">
            <ServiceComp img={ps1} text="Large Appliances" />
            <ServiceComp img={ps2} text="Recharges" />
            <ServiceComp img={ps3} text="Household Appliances" />
            <ServiceComp img={ps4} text="Food & Restaurants" />
            <ServiceComp img={ps5} text="Pharmaceuticals" />
            <ServiceComp img={ps4} text="Local Services" />
            <ServiceComp img={ps1} text="Groceries" />
            <ServiceComp img={ps8} text="Bill Payments" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductAndService;
