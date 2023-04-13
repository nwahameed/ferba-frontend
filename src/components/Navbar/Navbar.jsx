import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import logo from "../../assets/logo.png";
import { logout } from "../../redux/userSlice";
import Button from "../Button/Button";

const Navbar = () => {
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
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
        <li>
          {user.email ? (
            <Button text="Logout" handleClick={() => dispatch(logout())} />
          ) : (
            <Link to="/login">
              <Button text="Login" />
            </Link>
          )}
        </li>
      </ul>
      <div className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
        {Mobile ? <ImCross /> : <FaBars />}
      </div>
    </nav>
  );
};
export default Navbar;
