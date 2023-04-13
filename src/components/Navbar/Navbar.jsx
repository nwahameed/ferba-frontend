import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul
        className={Mobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setMobile(false)}
      >
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/courses">
          <li>Courses</li>
        </Link>
        <Link to="/kids">
          <li>Kids</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/payment">
          <li>Cart</li>
        </Link>
      </ul>

      <div className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
        {Mobile ? <ImCross /> : <FaBars />}
      </div>
    </nav>
  );
};
export default Navbar;
