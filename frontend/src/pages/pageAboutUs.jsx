import {
  ChevronRight,
  HomeIcon,
  MoveLeft,
  MoveRight,
  Phone,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Autoplay, Pagination } from "swiper/modules";
import sponsorImageOne from "../../public/sponsor1.png";
import sponsorImageTwo from "../../public/sponsor2.png";
import sponsorImageThree from "../../public/sponsor3.png";
import sponsorImageFour from "../../public/sponsor4.png";
import sponsorImageFive from "../../public/sponsor5.png";
import superLunch from "../../public/specialLunch1.png";
import chefOne from "../../public/chef1.jpg";
import chefTwo from "../../public/chef2.jpg";
import chefThree from "../../public/chef3.jpg";
import chefFour from "../../public/chef4.jpg";

export default function PageAboutUs() {
  const sponsors = [
    {
      sponsorImage: sponsorImageOne,
    },
    {
      sponsorImage: sponsorImageTwo,
    },
    {
      sponsorImage: sponsorImageThree,
    },
    {
      sponsorImage: sponsorImageFour,
    },
    {
      sponsorImage: sponsorImageFive,
    },
    {
      sponsorImage: sponsorImageOne,
    },
  ];

  const chefDetail = [
    {
      name: "Alexander Petllo",
      title: "ASSISTANT CHEF",
      chefPhoto: chefOne,
    },
    {
      name: "Mendia Juxef",
      title: "BURGER KING",
      chefPhoto: chefTwo,
    },
    {
      name: "Petro William",
      title: "MAIN CHEF",
      chefPhoto: chefThree,
    },
    {
      name: " Kunnel Jexos",
      title: "PIZZA MASTER",
      chefPhoto: chefFour,
    },
  ];

  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <div className="bg-neutral-800 p-25 text-center space-y-4">
        <h1 className="text-4xl md:text-6xl text-white font-semibold">
          About Us
        </h1>

        <div className="flex items-center justify-center text-white font-semibold space-x-2">
          <HomeIcon className="w-5 h-5" />
          <NavLink to="/" className="cursor-pointer">
            Home
          </NavLink>

          <div className="flex items-center">
            <ChevronRight color="white" />
            <span>AboutUs</span>
          </div>
        </div>
      </div>
      {/* Story section */}
      <div className=" grid grid-cols-2 gap-4 m-10">
        <div className="p-12">
          <img src="chef.jpg" alt="chefimage" />
        </div>
        <div className=" space-y-6 p-20 mt-10">
          <div className="flex items-center justify-normal gap-2">
            <h1 className="text-xl font-semibold text-red-500">OUR STORY</h1>{" "}
            <MoveRight color="red" />
          </div>
          <p className="text-5xl font-semibold">
            Until I discovered cooking I was never really interested in anything
          </p>
          <p className="text-neutral-600 p-10">
            The first restaurant proprietor is believed to have been one A.
            Boulanger, a soup vendor, who opened his business in Paris in 1765.
            The sign above his door advertised restoratives, or restaurants,
            referring to the soups and broths available within.
          </p>
        </div>
      </div>

      {/* Sponsor icons section */}
      <div className="bg-neutral-900 text-white p-20 ">
        <h2 className="text-2xl font-semibold">
          GLOBAL 5K+ HAPPY SPONSORS WITH US
        </h2>
      </div>
      {/* <div className="flex items-center justify-center">
      <div className="bg-red-500 text-white p-2 mr-3">
        <Phone className="w-6 h-6" />
      </div>
      <div>
        <p className="font-bold text-black">Hotline</p>
        <p className="font-semibold text-black">+47 33 37 89 01</p>
      </div>
    </div> */}
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          stopOnLastSlide: false,
          reverseDirection: false,
        }}
        loop={true}
        pagination={false}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper bg-neutral-900"
      >
        {sponsors.map((eachItem, index) => (
          <SwiperSlide key={index}>
            <div className="bg-neutral-900 text-white pb-20 px-10 gap-5">
              <img src={eachItem.sponsorImage} alt="sponsors" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


      {/* recipe taste section */}
      <div className="grid grid-cols-2 gap-12 items-center justify-between w-10/12 mx-auto p-20 space-y-6">
        <div>
          <p className="font-serif text-7xl font-semibold">
            EXPERIENCE OF REAL RECIPIE TASTE
          </p>
          <div className="py-10">
            <div className="flex items-center gap-20">
              <span className="text-red-500 font-semibold text-7xl">98K </span>
              <span className="text-red-500 font-semibold text-7xl">5+</span>
            </div>
            <div className="flex items-center gap-20">
              <span className="text-neutral-500 font-semibold text-lg">
                DAILY ORDERS{" "}
              </span>
              <span className="text-neutral-500 font-semibold text-lg">
                MENU & DISH
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <img src={superLunch} alt="lunch image" />
        </div>
      </div>

      {/* chef detail */}
      <div className="bg-neutral-200 font-serif text-black p-20 mb-10">
        <div className="flex flex-col justify-between items-center">
          <div className="flex justify-between items-center">
            <MoveLeft color="red" />
            <p className="text-xl text-red-500 p-4">PROFESSIONAL CHEF</p>
            <MoveRight color="red" />
          </div>
          <p className="text-5xl font-semibold">MEET OUR CHEF KINGS</p>
        </div>

        <div className="grid grid-cols-4 gap-8 pt-20">
          {chefDetail.map((eachItem, index) => (
            <div key={index}>
              <img src={eachItem.chefPhoto} alt="chef Alex" />
              <p className="text-xl font-semibold pt-8 cursor-pointer">{eachItem.name}</p>
              <p className="text-neutral-700">{eachItem.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
