import { MoveLeft } from "lucide-react";
import React from "react";

export default function ReviewService() {
  const reviewService = [
    {
      title: "Best Quality Food",
      description:
        "Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past.",
      photo: "img1.png",
    },
    {
      title: "Home delivery",
      description:
        "Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past.",
      photo: "img2.png",
    },
  ];

  const reviewService2 = [
    {
      title: "Real Taste",
      description:
        "Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past.",
      photo: "img3.png",
    },
    {
      title: "Traditional food",
      description:
        "Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past.",
      photo: "img4.png",
    },
  ];

  return (
    <div>
      <div className="bg-neutral-200 font-serif text-black p-20 mb-10 ">
        <div className="grid grid-cols-4 gap-8 pt-20 justify-center items-center">
          {reviewService.map((eachItem, index) => (
            <div key={index} className="bg-neutral-100 p-10 rounded-lg shadow-lg space-y-4 flex flex-col justify-center items-center">
              <img src={eachItem.photo} alt="chef Alex" />
              <p className="text-2xl font-semibold pt-8 cursor-pointer">
                {eachItem.title}
              </p>
              <p className="text-neutral-700 leading-8">{eachItem.description}</p>
            </div>
          ))}
          {reviewService2.map((eachItem, index) => (
            <div key={index} className="bg-neutral-100 p-10 rounded-lg shadow-lg space-y-4 flex flex-col justify-center items-center">
              <p className="text-neutral-700 leading-8">{eachItem.description}</p>
              <p className="text-2xl font-semibold pt-8 cursor-pointer">
                {eachItem.title}
              </p>
              <img src={eachItem.photo} alt="chef Alex" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
