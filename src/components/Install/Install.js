import React from "react";
import "./Install.css";
import img1 from "../../images/get_started/Rectangle.png"
import img2 from "../../images/get_started/image_1.png"
import img3 from "../../images/get_started/image_2.png"

const Install = () => {
  return (
    <section className="install_container">
      <div className="ins_left">
        <img src={img1} alt="img1" />
      </div>
      <div className="ins_right">
        <h3>Get Started Now!</h3>
        <p>
          Join Helyi and be a part of this revolution where we connect small
          towns in India!
        </p>
        <div className="ins_left_img_container">
            <img src={img2} alt="img2" />
            <img src={img3} alt="img3" />
        </div>
      </div>
    </section>
  );
};

export default Install;
