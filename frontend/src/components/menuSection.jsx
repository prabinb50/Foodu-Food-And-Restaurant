import React from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import breakfastImage from "../../public/breakfastImage.png";
import lunchImage from "../../public/lunchImage.png";
import dinnerImage from "../../public/dinnerImage.png";

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
    <div className="bg-neutral-900 font-serif text-white p-20">
      <div className="flex flex-col justify-between items-center">
        <div className="flex justify-between items-center">
          <MoveLeft color="red" />
          <p className="text-xl">FOOD MENU </p>
          <MoveRight color="red" />
        </div>
        <p className="text-5xl font-semibold">Discover Our Menu</p>
      </div>

      <div className="grid grid-cols-3 gap-10 p-16">
        <div className="bg-neutral-800 p-10 border rounded-2xl border-none">
          <img
            src={breakfastImage}
            className="h-54 border-8 border-neutral-900 rounded-full"
            alt="breakfast"
          />
          <p className="text-xl font-semibold p-4">Breakfast</p>
          {breakfastMenu.map((item, index) => (
            <div key={index} className="flex justify-between items-center p-2">
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          ))}
          <button className="bg-red-500 text-white px-27 py-2 rounded-md mt-4">
            Make Order
          </button>
        </div>

        <div className="bg-neutral-800 p-10 border rounded-2xl border-none">
          <img
            src={lunchImage}
            className="h-54 border-8 border-neutral-900 rounded-full"
            alt="lunch"
          />
          <p className="text-xl font-semibold p-4">Lunch</p>
          {lunchMenu.map((item, index) => (
            <div key={index} className="flex justify-between items-center p-2">
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          ))}
          <button className="bg-red-500 text-white px-27 py-2 rounded-md mt-4">
            Make Order
          </button>
        </div>

        <div className="bg-neutral-800 p-10 border rounded-2xl border-none">
          <img
            src={dinnerImage}
            className="h-54 border-8 border-neutral-900 rounded-full"
            alt="dinner"
          />
          <p className="text-xl font-semibold p-4">Dinner</p>
          {dinnerMenu.map((item, index) => (
            <div key={index} className="flex justify-between items-center p-2">
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          ))}
          <button className="bg-red-500 text-white px-27 py-2 rounded-md mt-4 cursor-pointer">
            Make Order
          </button>
        </div>
      </div>
    </div>
  );
}
