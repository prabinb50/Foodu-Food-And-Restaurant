import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { NavLink } from 'react-router';
import axios from 'axios';


export default function RelatedProducts() {

    // state to store the related products data from the backend
    const [relatedProducts, setRelatedProducts] = useState([]);

    // fetch the related products from the backend
    const fetchRelatedProducts = async () => {
        try {
            const response = await axios.get("http://localhost:4000/shopItems");
            // console.log("response", response.data.data);
            setRelatedProducts(response.data.data);
        } catch (error) {
            console.log("Something went wrong while fetching the related products data", error);
        }
    }

    // call the fetchRelatedProducts function
    useEffect(() => {
        fetchRelatedProducts();
    }, []);

    // const relatedProducts = [
    //     { image: "/cheese_pizza.png", category: 'CHEESE PIZZA', name: "Margherita Pizza", price: '$12.00' },
    //     { image: "/beef_burger.png", category: "CREAMY BURGER", name: "Beef Burger", price: "$5.00" },
    //     { image: "/grilled_steak.png", category: "BEEF STEAK", name: "Grilled Flank Steak", price: "$14.00" },
    //     { image: "/barbecue_chicken.png", category: "BBQ MEAT", name: "Barbecue Chicken", price: "$8.00" },
    //     { image: "/vegetable_roll.png", category: "FOOD ROLL", name: "Vegetable Roll", price: "$8.00" },
    //     { image: "/creamy_pasta.png", category: "PASTA SPICY", name: "Creamy Pasta", price: "$13.00" },
    //     { image: "/chicken_shawarma.png", category: "MEAT SHAWARMA", name: "Chicken Shawarma", price: "$3.00" },
    //     { image: "/submarine_sandwich.png", category: "SANDWICH CHICKEN", name: "Submarine Sandwich", price: "$6.00" }
    // ]

    return (
        <div className='w-11/12 md:w-10/12 mx-auto pt-10 sm:pt-15 md:pt-20 pb-10 sm:pb-15 md:pb-20'>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 md:mb-8'>Related Products</h2>
            <Swiper
                breakpoints={{
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                speed={500}
                // loop={true}
                loop={relatedProducts.length > 4} // Enable loop only if there are more than 4 slides
                pagination={false}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="related-products-swiper"
            >
                {relatedProducts?.map((product, index) => (
                    <SwiperSlide key={index}>
                        <NavLink to={`/shop-single-thumb/${product._id}`} className='cursor-pointer'>
                            <div className='border border-gray-300 p-3 sm:p-4 md:p-5 rounded-md space-y-4 flex flex-col items-center bg-[#EBE9E6] hover:shadow-lg transition-all duration-300'>
                                <img src={product.image} alt={product.name} className='w-28 sm:w-32 md:w-40 object-cover hover:scale-105 transition-transform' />

                                <p className='opacity-60 text-sm font-semibold cursor-pointer'>{product.category}</p>
                                <p className='text-base md:text-lg font-semibold cursor-pointer'>{product.name}</p>
                                <p className='font-semibold text-red-500 text-base md:text-lg'>${product.price}.00</p>
                            </div>
                        </NavLink>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

