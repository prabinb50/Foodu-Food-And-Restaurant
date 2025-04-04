import { Check, ChevronRight, CircleCheckBig, Heart, Minus, Plus, RefreshCw, ShoppingCart } from 'lucide-react'
import React, { useState } from 'react'
import { NavLink } from 'react-router'
import Description from '../components/description';
import AdditionalInformation from '../components/additionalInformation';
import Review from '../components/review';

export default function ShopSingleThumb() {
    const [activeTab, setActiveTab] = useState('description');

    return (
        <div className='bg-gray-100 '>
            {/* first child */}
            <div className='bg-neutral-800 p-25 text-center space-y-4'>
                <h1 className='text-6xl text-white font-semibold'>Grilled Flank Steak</h1>

                <div className='flex items-center justify-center text-white font-semibold space-x-2'>
                    {/* <Home color='white' className='cursor-pointer' /> */}
                    <NavLink to="/" className='cursor-pointer'>Home</NavLink >

                    <div className='flex items-center'>
                        <ChevronRight color='white' />
                        <span>shop-single-thumb</span>
                    </div>
                </div>
            </div>

            {/* second child */}
            <div className='w-10/12 mx-auto flex items-center justify-between gap-10 space-x-4 mx-aut0 pt-20'>
                {/* Image with discount badge */}
                <div className='relative '>
                    <img src="/cheese_pizza.png" alt="" className='object-cover hover:scale-105 transition-transform border-none bg-[#EBE9E6] h-110 w-500 p-10' />
                    <span className='absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full'>-16%</span>
                </div>

                <div className='space-y-5'>
                    <p className='opacity-60 text-sm font-bold cursor-pointer'>Cheese Pizza</p>
                    <p className='text-3xl font-semibold cursor-pointer'>Margherita Pizza</p>
                    <p className='font-semibold text-red-500 text-xl'>$12.00</p>

                    {/* In Stock Section */}
                    <div className='flex items-center gap-2 border-none bg-gray-200 py-2 px-4 rounded-md w-30'>
                        <CircleCheckBig color='red' />
                        <p>In Stock</p>
                    </div>

                    {/* Description */}
                    <p className='opacity-65'>
                        The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games. non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock flounder
                    </p>

                    {/* Review Section */}
                    <div className='flex items-center gap-2'>
                        <div className='flex text-yellow-500'>
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                        </div>
                        <p className='text-gray-500'>(6 Review)</p>
                    </div>

                    {/* Quantity and Buttons  */}
                    <div className='flex items-center gap-4'>
                        {/* Quantity Selector 
                        <div className='flex items-center border border-gray-300 rounded-md'>
                            <button className='px-3 py-2 bg-gray-200 hover:bg-gray-300'>
                                <Minus size={16} />
                            </button>
                            <input
                                type='text'
                                value='0'
                                readOnly
                                className='w-12 text-center border-none outline-none'
                            />
                            <button className='px-3 py-2 bg-gray-200 hover:bg-gray-300'>
                                <Plus size={16} />
                            </button>
                        </div> */}

                        {/* Add to Cart Button */}
                        <div className='flex items-center justify-between gap-2 border-none bg-red-500 text-white px-4 py-3 cursor-pointer font-semibold active:scale-95 transition-all hover:bg-black hover:text-white'>
                            <ShoppingCart color='white' />
                            <button className="">Add To Cart</button>
                        </div>

                        {/* Heart and Refresh Icons */}
                        <Heart color='red' className='border-1 border-gray-400 rounded-full h-10 w-10 p-2 cursor-pointer' />
                        <RefreshCw color='red' className='border-1 border-gray-400 rounded-full h-10 w-10 p-2 cursor-pointer' />
                    </div>
                </div>
            </div>

            {/* third child */}
            <div className='w-10/12 mx-auto pt-20 '>
                {/* Tabs */}
                <div className='flex justify-center space-x-10 border-b'>
                    <button
                        className={`pb-2 ${activeTab === 'description' ? 'border-b-2 border-red-600 text-black font-bold opacity-65' : 'text-gray-600 '}`}
                        onClick={() => setActiveTab('description')}
                    >
                        Description
                    </button>
                    <button
                        className={`pb-2 ${activeTab === 'additional' ? 'border-b-2 border-red-500 text-black font-bold opacity-60' : 'text-gray-600'}`}
                        onClick={() => setActiveTab('additional')}
                    >
                        Additional Information
                    </button>
                    <button
                        className={`pb-2 ${activeTab === 'review' ? 'border-b-2 border-red-500 text-black font-bold opacity-60' : 'text-gray-600'}`}
                        onClick={() => setActiveTab('review')}
                    >
                        Review
                    </button>
                </div>

                {/* Tab Content */}
                <div className='pt-8'>
                    {activeTab === 'description' && <Description></Description>}
                    {activeTab === 'additional' && <AdditionalInformation />}
                    {activeTab === 'review' && <Review />}
                </div>
            </div>
        </div>
    )
}
