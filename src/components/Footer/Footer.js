import React from "react";
import "./Footer.css";

import yt from "../../images/footer/yt.png";
import fb from "../../images/footer/fb.png";
import ins from "../../images/footer/ig.png";
import li from "../../images/footer/li.png";
import twt from "../../images/footer/yt.png";

import pstore from "../../images/footer/play.png";
import astore from "../../images/footer/apple.png";

import envlope from "../../images/footer/Envelope.png";
import mobile from "../../images/footer/Group 2264.png";
const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer_wrapper">
        <section className="footer_sec_1">
          <h4>Contact Details</h4>
          <p>Karthikeya Business SolutionsVijaywada, Andhra Pradesh</p>
          <p>
            <span>Pincode : </span>564 543{" "}
          </p>
          <p>
            <span>Tel: </span>+91 98745 66432, 040 3324 4352
          </p>
          <p>
            <span>Email: </span>info@helyi.com{" "}
          </p>
          <div className="footer_sec1_icon__container">
            <img src={yt} alt="yt" />
            <img src={ins} alt="ins" />
            <img src={li} alt="li" />
            <img src={fb} alt="fb" />
            <img src={twt} alt="twt" />
          </div>
        </section>
        <section className="footer_sec_2">
          <h4>Quick Links </h4>
          <p>Home</p>
          <p>Join Us</p>
          <p>Merchant Log In</p>
          <p>Franchise Log In</p>
          <div className="ref_container">
            <img src={pstore} alt="" />
            <img src={astore} alt="" />
          </div>
        </section>
        <section className="footer_sec_3">
          <h4>Subscribe us</h4>
          <div className="input_wrapper">
            <img src={envlope} alt="" />
            <input type="text" placeholder="Enter your email id" />
          </div>
          <h4>Get App on you mobile</h4>
          <div className="input_wrapper">
            <img src={mobile} alt="" />
            <input type="text" placeholder="Enter your 10 digit mobile no." />
          </div>
          <button>Get Link</button>
          <div className="tc_policy">
            <p>Privacy Policy</p>
            <p>T&C</p>
          </div>
        </section>
      </div>
      <div className="copy_right" >
      Copyright 2020 - All Rights Reserved  -Helyi
      </div>
    </footer>
  );
};

export default Footer;
