import React, { useState, useRef, useEffect, useCallback } from "react";
import user from "../../assets/user.png";
import "./profileMenu.css";

const ProfileMenu = () => {
  const [open, setOpen] = useState(false);
  const Menus = ["Profile", "Your Courses", "Logout"];

  const menuRef = useRef();
  const imgRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target !== menuRef.current && e.target !== imgRef.current) {
        setOpen(false);
      }
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const handleMenuClick = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className="mmain">
      <div className="ab">
        <img
          ref={imgRef}
          onClick={() => setOpen(!open)}
          src={user}
          alt="user"
          className="cd"
        />
        {open && (
          <div ref={menuRef} className="ef">
            <ul>
              {Menus.map((menu) => (
                <li onClick={handleMenuClick} className="abc" key={menu}>
                  {menu}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileMenu;
