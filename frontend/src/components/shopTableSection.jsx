import React from 'react'
import { NavLink } from 'react-router'

export default function ShopTableSection({ items = [] }) {
    //console.log("items", items)
    // array of items to be displayed
    // const items = [
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
        <div className='grid grid-cols-1 lg:grid-cols-2 pt-10 gap-8'>
            {
                items && items.length > 0 ? ( // Check if items is valid and has elements
                    items.map((eachItem, index) => (
                        <NavLink to={`/shopItems/${eachItem._id}`} key={index}>
                            <div className='flex flex-col lg:flex-row items-center gap-4 lg:gap-8 bg-[#EBE9E6] border-1 border-gray-300  rounded-md p-5 lg:p-10 hover:shadow-lg transition-all duration-300'>
                                {/* item image */}
                                <img src={eachItem.image} alt="" className='w-35 object-cover cursor-pointer hover:scale-105 transition-transform' />

                                {/* item details */}
                                <div className='space-y-4 text-center lg:text-left w-full '>
                                    <p className='opacity-60 text-sm font-semibold cursor-pointer'>{eachItem.category}</p>
                                    <p className='text-lg font-semibold cursor-pointer'>{eachItem.name}</p>
                                    <p className='font-semibold text-red-500 '>${eachItem.price}.00</p>
                                    <button className='font-semibold text-black border-1 border-gray-300 rounded-full px-4 py-2 cursor-pointer active:scale-95 transition-all hover:bg-red-500 hover:text-white'>Add To Cart</button>
                                </div>
                            </div>
                        </NavLink >
                    ))
                ) : (
                    <p className='text-center text-gray-500'>No items available</p>
                )
            }
        </div>
    )
}
