import { ChevronRight, HomeIcon, MoveRight } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";
import Reservation from "../components/reservation";
import ReviewService from "../components/reviewService";

export default function MenuPage() {
  const fastFoodMenu = [
    {
      name: "Chicken Alfredo",
      halfPrice: "$20",
      fullPrice: "$30",
      ingredients: ["Chicken", "Pasta", "Cream"],
      complement: "Extra free juice",
      foodImage: "menuPage1.jpg",
    },
    {
      name: "Fish & Chips",
      halfPrice: "$36",
      fullPrice: "$55",
      ingredients: ["Fish", "Potatoes", "Tartar Sauce"],
      complement: "Extra free juice",
      foodImage: "menuPage2.jpg",
    },
    {
      name: "Chicken Nuggets",
      halfPrice: "$20",
      fullPrice: "$30",
      ingredients: ["Chicken", "Bread Crumbs", "Sauce"],
      complement: "Extra free juice",
      foodImage: "menuPage3.jpg",
    },
    {
      name: "Cheese Burger",
      halfPrice: "$20",
      fullPrice: "$30",
      ingredients: ["Beef", "Cheese", "Lettuce"],
      complement: "Extra free juice",
      foodImage: "menuPageBurger.jpg",
    },
    {
      name: "VEbony Fillet Steak",
      halfPrice: "$44",
      fullPrice: "$88",
      ingredients: ["Steak", "Vegetables", "Sauce"],
      complement: "Extra free juice",
      foodImage: "menuPage1.jpg",
    },
  ];

  const dessertMenu = [{
    name: "Chocolate Cake",
    halfPrice: "$20",
    fullPrice: "$30",
    ingredients: ["Chocolate", "Flour", "Sugar"],
    complement: "Extra free juice",
    foodImage: "menuPage1.jpg",
  },
  {
    name: "Ice Cream",
    halfPrice: "$20",
    fullPrice: "$30",
    ingredients: ["Milk", "Sugar", "Flavor"],
    complement: "Extra free juice",
    foodImage: "menuPage2.jpg",
  },
  {
    name: "Fruit Salad",
    halfPrice: "$20",
    fullPrice: "$30",
    ingredients: ["Fruits", "Yogurt"],
    complement: "Extra free juice",
    foodImage: "menuPage3.jpg",
  },
  {
    name: "Cheesecake",
    halfPrice: "$20",
    fullPrice: "$30",
    ingredients: ["Cheese", "Crust"],
    complement: "Extra free juice",
    foodImage: "menuPageBurger.jpg",
  },
  {
    name: "Brownie",
    halfPrice: "$20",
    fullPrice: "$30",
    ingredients: ["Chocolate", "Flour"],
    complement: "Extra free juice",
    foodImage: "menuPage1.jpg",
  }];

  return (
    <div className="bg-gray-200">
      <div className="bg-neutral-800 p-25 text-center space-y-4">
        <h1 className="text-4xl md:text-6xl text-white font-semibold">
          Food Menu{" "}
        </h1>

        <div className="flex items-center justify-center text-white font-semibold space-x-2">
          <HomeIcon className="w-5 h-5" />
          <NavLink to="/" className="cursor-pointer">
            Home
          </NavLink>

          <div className="flex items-center">
            <ChevronRight color="white" />
            <span>food-menu</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-20 bg-gray-200 mt-10">
        {/* left side menu image */}
        <div className="ml-10 flex mt-20 ">
          <img
            className="h-120 rounded-full border-12 border-red-400 shadow-lg"
            src="menuPageBurger.jpg"
            alt=""
          />
        </div>
        {/* right side menu items */}
        <div className="">
          <div className="flex text-red-500 items-center text-4xl font-semibold space-x-3 mb-8">
            <p>FAST FOOD ITEMS</p>
            <MoveRight size={40} color="red" />
          </div>

          {fastFoodMenu.map((item, index) => (
            <div key={index} className="flex flex-col space-y-4 mb-6">
              <div className="flex items-center space-x-4 mb-2">
                <img
                  className="w-20 h-20 rounded-full"
                  src={item.foodImage}
                  alt=""
                />
                <div className="flex justify-between w-full ">
                  <div className="flex flex-col space-y-2">
                    <h1 className="text-2xl font-semibold">
                      {item.name} ................................
                    </h1>
                    <p className="text-gray-500">
                      {item.ingredients.join("/ ")}
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <span className="text-2xl font-semibold text-red-500 ml-4">
                      {item.halfPrice} {item.fullPrice}
                    </span>
                    <p className="text-gray-500">{item.complement}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 bg-gray-200 mt-10 p-20">
        {/* left side menu items */}
        <div className="">
          <div className="flex text-red-500 items-center text-4xl font-semibold space-x-3 mb-8">
            <p>DESERT ITEMS</p>
            <MoveRight size={40} color="red" />
          </div>

          {dessertMenu.map((item, index) => (
            <div key={index} className="flex flex-col space-y-4 mb-6">
              <div className="flex items-center space-x-4 mb-2">
                <img
                  className="w-20 h-20 rounded-full"
                  src={item.foodImage}
                  alt=""
                />
                <div className="flex justify-between w-full ">
                  <div className="flex flex-col space-y-2">
                    <h1 className="text-2xl font-semibold">
                      {item.name} ................................
                    </h1>
                    <p className="text-gray-500">
                      {item.ingredients.join("/ ")}
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <span className="text-2xl font-semibold text-red-500 ml-4">
                      {item.halfPrice} {item.fullPrice}
                    </span>
                    <p className="text-gray-500">{item.complement}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* right side menu image */}
        <div className="flex mt-20 pl-20">
          <img
            className="h-120 rounded-full border-12 border-red-400 shadow-lg"
            src="menuPageDesert.jpg"
            alt=""
          />
        </div>
      </div>

      <Reservation/>
      <ReviewService/>
    </div>
  );
}
