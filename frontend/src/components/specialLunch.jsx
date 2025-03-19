import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import specialLunchOne from "../../public/specialLunch1.png";
import specialLunchTwo from "../../public/specialLunch2.png";

export default function SpecialLunch() {
  const menuItems = [
    {
      offerPrice: "JUST $65",
      description:
        "Food ipsum dolor sit amet consectetur adipisicing elit. Adipisci modi voluptate velit sit vitae ullam laboriosam aut officia itaque enim?",
      foodImage: specialLunchOne,
    },
    {
      offerPrice: "JUST $80",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci modi voluptate velit sit vitae ullam laboriosam aut officia itaque enim?",
      foodImage: specialLunchTwo,
    },
    {
      offerPrice: "JUST $55",
      description:
        "Food ipsum dolor sit amet consectetur adipisicing elit. Adipisci modi voluptate velit sit vitae ullam laboriosam aut officia itaque enim?",
      foodImage: specialLunchOne,
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      {menuItems.map((eachItem, index)=>(
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 gap-12 items-center justify-between w-11/12 md:w-10/12 lg:w-10/12 mx-auto mt-10 md:mt-20">
            <div>
              <p className="font-serif text-6xl font-semibold">
                SUPER DEAL <br />
                SPECIAL LUNCH
              </p>
              <p className="text-3xl font-semibold py-7">
                PURCHASE TODAY. {eachItem.offerPrice}
              </p>
              <p className="text-xl pb-8">
                {eachItem.description}
              </p>
              <button className="bg-red-500 text-white px-12 py-2 cursor-pointer hover:text-black">
                Order Now
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="absolute flex items-center justify-between px-8">
                <img src="specialLunchbg.png" alt="specialLunchbg" />
              </div>
              <div className="relative flex items-center justify-between">
                <img src={eachItem.foodImage} alt="specialLunchImage" />
              </div>
            </div>
          </div>
      </SwiperSlide>
      ))}
    </Swiper>
  );
}
