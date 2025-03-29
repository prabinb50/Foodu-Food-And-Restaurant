import React from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import breakfastImage from "../../public/breakfastImage.png";
import lunchImage from "../../public/lunchImage.png";
import dinnerImage from "../../public/dinnerImage.png";
import { Link } from "react-router";

export default function MenuSection() {
  const breakfastMenu = [
    { name: "Breakfast Casserole", price: "$20" },
    { name: "Greek Yogurt", price: "$15" },
    { name: "Cottage Cheese", price: "$18" },
  ];

  const lunchMenu = [
    { name: "Buffalo Chicken Grain", price: "$20" },
    { name: "Creamy Rotisserie", price: "$15" },
    { name: "Veggie Mason", price: "$18" },
  ];

  const dinnerMenu = [
    { name: "Fried Chicken", price: "$20" },
    { name: "Pizza", price: "$15" },
    { name: "Tossed Salad", price: "$18" },
  ];

  return (
    <div className="bg-neutral-900 font-serif text-white p-6 sm:p-10 lg:p-20">
      {/* Header Section */}
      <div className="flex flex-col justify-between items-center text-center">
        <div className="flex justify-between items-center space-x-2">
          <MoveLeft color="red" />
          <p className="text-lg sm:text-xl">FOOD MENU</p>
          <MoveRight color="red" />
        </div>
        <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold mt-4">
          Discover Our Menu
        </p>
      </div>

      {/* Menu Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 p-6 sm:p-10 lg:p-16">
        {/* Breakfast Section */}
        <div className="bg-neutral-800 p-6 sm:p-10 border rounded-2xl border-none">
          <img
            src={breakfastImage}
            className="h-40 sm:h-48 lg:h-54 border-8 border-neutral-900 rounded-full mx-auto"
            alt="breakfast"
          />
          <p className="text-lg sm:text-xl font-semibold p-4 text-center">
            Breakfast
          </p>
          {breakfastMenu.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-2 text-sm sm:text-base"
            >
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          ))}
          <Link
            to="/shop"
            className="bg-red-500 text-white px-6 sm:px-8 py-2 rounded-md mt-4 block text-center"
          >
            Make Order
          </Link>
        </div>

        {/* Lunch Section */}
        <div className="bg-neutral-800 p-6 sm:p-10 border rounded-2xl border-none">
          <img
            src={lunchImage}
            className="h-40 sm:h-48 lg:h-54 border-8 border-neutral-900 rounded-full mx-auto"
            alt="lunch"
          />
          <p className="text-lg sm:text-xl font-semibold p-4 text-center">
            Lunch
          </p>
          {lunchMenu.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-2 text-sm sm:text-base"
            >
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          ))}
          <Link
            to="/shop"
            className="bg-red-500 text-white px-6 sm:px-8 py-2 rounded-md mt-4 block text-center"
          >
            Make Order
          </Link>
        </div>

        {/* Dinner Section */}
        <div className="bg-neutral-800 p-6 sm:p-10 border rounded-2xl border-none">
          <img
            src={dinnerImage}
            className="h-40 sm:h-48 lg:h-54 border-8 border-neutral-900 rounded-full mx-auto"
            alt="dinner"
          />
          <p className="text-lg sm:text-xl font-semibold p-4 text-center">
            Dinner
          </p>
          {dinnerMenu.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-2 text-sm sm:text-base"
            >
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          ))}
          <Link
            to="/shop"
            className="bg-red-500 text-white px-6 sm:px-8 py-2 rounded-md mt-4 block text-center"
          >
            Make Order
          </Link>
        </div>
      </div>
    </div>
  );
}