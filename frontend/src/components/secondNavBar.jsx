import React from "react";
import logo from "../../public/logo.png";

export default function SecondNavBar() {
  return (
    <div className="flex items-center justify-between w-full cursor-pointer bg-white text-black sticky top-0">
      <div className="flex items-center justify-between gap-4 ">
        {/* <NavLink to="/">Home</NavLink>
        <NavLink to="/pages">Pages</NavLink>
        <NavLink to="/menu">Menu</NavLink> */}
        <p>Home</p>
        <p>Pages</p>
        <p>Menu</p>
      </div>

      <div className="h-24 w-32 flex items-center justify-between gap-4">
        <img src={logo} alt="logo" />
      </div>

      <div className="flex items-center justify-between gap-4">
        <p>Blog</p>
        <p>Shop</p>
        <p>Contact</p>
      </div>
    </div>
  );
}
