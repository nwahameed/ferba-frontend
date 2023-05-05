import React from "react";
import user from "../../assets/user.png";
import { useState } from "react";
import { useRef } from "react";

const ProfileMenu = () => {
  const [open, setOpen] = useState(false);
  const Menus = ["Profile", "Your Courses", "Logout"];

  const menuRef = useRef();
  const imgRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current);
    setOpen(false);
  });

  return (
    <div className="h-screen bg-gray-200 flex justify-center pt-12">
      <div className="relative ">
        <img
          ref={imgRef}
          onClick={() => setOpen(!open)}
          src={user}
          alt="user"
          className="h-20 w-20 object-cover border-4 border-gray-400
        rounded-full cursor-pointer"
        />
        {open && (
          <div
            ref={menuRef}
            className="bg-white p-4 w-52 shadow-lg absolute -left-14 top-24"
          >
            <ul>
              {Menus.map((menu) => (
                <li
                  onClick={() => setOpen(false)}
                  className="p-2 text-lg cursor-pointer rounded hover:bg-blue-100"
                  key={menu}
                >
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
