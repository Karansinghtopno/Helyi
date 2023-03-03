import React from "react";
import "./JoinCom.css"
import img1 from "../../images/Brands/1.png";
import img2 from "../../images/Brands/2.png";
import img3 from "../../images/Brands/3.png";
import img4 from "../../images/Brands/4.png";
import img5 from "../../images/Brands/5.png";

const JoinCom = () => {
  return (
    <section className="join_container">
      <div className="join_wrapper">
        <h3 className="join_heading">Join the Helyi Community</h3>
        <p className="join_para1">Powering your dreams towards reality</p>

        <p className="join_para2">
          If you want to built a <span>Helyi SMART Store</span> around your
          area, please contact us at <span style={{color:"#82B440"}}>helyi@smartsupport.in</span> 
        </p>
        <button className="join_btn">Register Now</button>
        <h3 className="join_heading">Our Brands & Partners</h3>
        <div className="join_brands_img">
          <img src={img1} alt="img" />
          <img src={img2} alt="img" />
          <img src={img3} alt="img" />
          <img src={img4} alt="img" />
          <img src={img5} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default JoinCom;
