import React from "react";
import logo from "../../public/logo.png";

export default function SecondNavBar() {
  return (
    <div className="bg-white sticky top-0 z-50">
      <div className="w-10/12 mx-auto flex items-center justify-between cursor-pointer  text-black sticky top-0 z-50">
        <div className="flex items-center justify-between gap-4">
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
    </div>
  );
}