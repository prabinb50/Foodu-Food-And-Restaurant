import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import specialLunchOne from "../../public/specialLunch1.png";
import specialLunchTwo from "../../public/specialLunch2.png";

export default function SpecialLunch() {
  // Menu items data for the special lunch carousel
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
      loop={true}
      pagination={false}
      navigation={false}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      {menuItems.map((eachItem, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center justify-between w-11/12 md:w-10/12 lg:w-10/12 mx-auto mt-10 md:mt-20 ">
            {/* Content section */}
            <div className="order-2 md:order-1 px-4 sm:px-6 md:px-0 text-center md:text-left">
              {/* Main heading */}
              <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight sm:leading-tight">
                SUPER DEAL <br />
                SPECIAL LUNCH
              </p>
              {/* Price text  */}
              <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold py-3 sm:py-4 md:py-5 lg:py-7">
                PURCHASE TODAY. {eachItem.offerPrice}
              </p>
              {/* Description */}
              <p className="text-base sm:text-lg md:text-lg lg:text-xl pb-4 sm:pb-5 md:pb-6 lg:pb-8">
                {eachItem.description}
              </p>
              {/* Order button  */}
              <button className="bg-red-500 text-white px-8 sm:px-10 md:px-12 py-2 sm:py-2.5 md:py-2.5 cursor-pointer hover:text-black transition-colors duration-300 text-base sm:text-lg rounded-sm focus:outline-none focus:ring-2 focus:ring-red-400 active:bg-red-600 touch-manipulation">
                Order Now
              </button>
            </div>

            {/* Image section */}
            <div className="flex items-center justify-center md:justify-between order-1 md:order-2 mb-6 md:mb-0">
              {/* Background image container */}
              <div className="absolute hidden sm:flex items-center justify-between px-4 sm:px-6 md:px-8">
                {/* Background image */}
                <img
                  src="specialLunchbg.png"
                  alt="specialLunchbg"
                  className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-full"
                  loading="lazy" />
              </div>
              {/* Food image container */}
              <div className="relative flex items-center justify-between">
                <img
                  src={eachItem.foodImage}
                  alt="specialLunchImage"
                  className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-auto max-w-full"
                  loading="lazy" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
