import React from "react";
import logo from "../../public/logo.png";
import { NavLink } from "react-router";

export default function SecondNavBar() {
  return (
    <div className="bg-white sticky top-12 z-40">
      <div className="w-10/12 mx-auto flex items-center justify-between cursor-pointer  text-black ">
        <div className="flex items-center justify-between gap-4 font-semibold text-lg opacity-85">
          <NavLink to="/" className="hover:text-red-500">Home</NavLink>
          <p className="hover:text-red-500">Pages</p>
          <p className="hover:text-red-500">Menu</p>
        </div>

        <div className="h-24 w-32 flex items-center justify-between gap-4">
          <img src={logo} alt="logo" />
        </div>

        <div className="flex items-center justify-between gap-4 font-semibold text-lg opacity-85">
          <NavLink to="/blog" className="hover:text-red-500">Blog</NavLink>
          <p className="hover:text-red-500">Shop</p>
          <NavLink to="/contact-us" className="hover:text-red-500">Contact</NavLink>
        </div>
      </div>
    </div>
  );
}