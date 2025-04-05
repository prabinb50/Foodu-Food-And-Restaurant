import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function RelatedProducts() {

    const relatedProducts = [
        { image: "/cheese_pizza.png", category: 'CHEESE PIZZA', name: "Margherita Pizza", price: '$12.00' },
        { image: "/beef_burger.png", category: "CREAMY BURGER", name: "Beef Burger", price: "$5.00" },
        { image: "/grilled_steak.png", category: "BEEF STEAK", name: "Grilled Flank Steak", price: "$14.00" },
        { image: "/barbecue_chicken.png", category: "BBQ MEAT", name: "Barbecue Chicken", price: "$8.00" },
        { image: "/vegetable_roll.png", category: "FOOD ROLL", name: "Vegetable Roll", price: "$8.00" },
        { image: "/creamy_pasta.png", category: "PASTA SPICY", name: "Creamy Pasta", price: "$13.00" },
        { image: "/chicken_shawarma.png", category: "MEAT SHAWARMA", name: "Chicken Shawarma", price: "$3.00" },
        { image: "/submarine_sandwich.png", category: "SANDWICH CHICKEN", name: "Submarine Sandwich", price: "$6.00" }
    ]

    return (
        <div className='w-10/12 mx-auto pt-20 pb-20'>
            <h2 className='text-3xl font-semibold mb-8'>Related Products</h2>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={false}
                navigation={false}
                modules={[Pagination, Navigation, Autoplay]}
                className="related-products-swiper"
            >
                {relatedProducts.map((product, index) => (
                    <SwiperSlide key={index}>
                        <div className='border border-gray-300 p-5 rounded-md space-y-4 flex flex-col items-center bg-[#EBE9E6] hover:shadow-lg transition-all duration-300'>
                            <img src={product.image} alt={product.name} className='w-40 object-cover hover:scale-105 transition-transform' />

                            <p className='opacity-60 text-sm font-semibold cursor-pointer'>{product.category}</p>
                            <p className='text-lg font-semibold cursor-pointer'>{product.name}</p>
                            <p className='font-semibold text-red-500'>{product.price}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
