import React from 'react'

export default function ShopTableSection() {
    // array of items to be displayed
    const items = [
        { image: "/cheese_pizza.png", category: 'CHEESE PIZZA', name: "Margherita Pizza", price: '$12.00' },
        { image: "/beef_burger.png", category: "CREAMY BURGER", name: "Beef Burger", price: "$5.00" },
        { image: "/grilled_steak.png", category: "BEEF STEAK", name: "Grilled Flank Steak", price: "$14.00" },
        { image: "/barbecue_chicken.png", category: "BBQ MEAT", name: "Barbecue Chicken", price: "$8.00" },
        // { image: "/vegetable_roll.png", category: "FOOD ROLL", name: "Vegetable Roll", price: "$8.00" },
        // { image: "/creamy_pasta.png", category: "PASTA SPICY", name: "Creamy Pasta", price: "$13.00" },
        // { image: "/chicken_shawarma.png", category: "MEAT SHAWARMA", name: "Chicken Shawarma", price: "$3.00" },
        // { image: "/submarine_sandwich.png", category: "SANDWICH CHICKEN", name: "Submarine Sandwich", price: "$6.00" }
    ]

    return (
        <div className='grid grid-cols-4 gap-3 pt-10'>
            {
                items.map((eachItem, index) => (
                    <div key={index} className='border-1 border-gray-300 p-10 rounded-md space-y-4 flex flex-col items-center bg-[#EBE9E6]'>
                        {/* item image */}
                        <img src={eachItem.image} alt="" className='w-30 object-cover' />
                        {/* item category */}
                        <p className='opacity-60 text-sm font-semibold cursor-pointer'>{eachItem.category}</p>
                        {/* item name */}
                        <p className='text-lg font-semibold cursor-pointer'>{eachItem.name}</p>

                        {/* Item price and Add to Cart button */}
                        <div className='flex items-center justify-between gap-6'>
                            <p className='font-semibold text-red-500'>{eachItem.price}</p>
                            <button className='border-none bg-red-500 rounded-md px-2 py-1 cursor-pointer font-semibold hover:bg-red-600 text-white'>Add to Cart</button>
                        </div>
                    </div>
                ))
            }
        </div>

    )
}
