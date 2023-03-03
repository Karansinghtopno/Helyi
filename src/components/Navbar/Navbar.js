import React from "react";
import logo from "../../images/image 7.svg"
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav_container">
      <div className="nav_wrapper">
        <div className="nav_left">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav_center">
            <div className="nav_center_items">Helyi for Franchise</div>
            <div className="nav_center_items">Helyi for Partner</div>
            <div className="nav_center_items">Helyi for Merchant</div>
            <div className="nav_center_items"
            style={{fontWeight:"800"}}
            >Helyi SMART</div>
            <div className="nav_center_items">Contact Us</div>
        </div>
        <div className="nav_right">
            <button className="nav_login_btn">Login</button>
            <button className="nav_register_btn">Register</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
