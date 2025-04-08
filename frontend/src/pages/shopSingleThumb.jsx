import { ChevronRight, CircleCheckBig, Heart, HomeIcon, RefreshCw, ShoppingCart } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import Description from '../components/description';
import AdditionalInformation from '../components/additionalInformation';
import Review from '../components/review';
import RelatedProducts from '../components/relatedProducts';
import axios from 'axios';

export default function ShopSingleThumb() {
    // get the shop single thumb id from the url
    const location = useLocation();
    // console.log("location", location);
    // console.log("location", location.pathname.split("/"));
    const shopSingleThumb_id = location.pathname.split("/")[2];


    // state to store the single shop single thumb data
    const [singleShopSingleThumb, setSingleShopSingleThumb] = useState();

    // fetch the single shop single thumb data from the backend
    const fetchSingleShopSingleThumb = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/shopItems/${shopSingleThumb_id}`);
            // console.log("response", response);
            // console.log("response", response.data.data);
            setSingleShopSingleThumb(response.data.data);
        } catch (error) {
            console.log("Something went wrong while fetching the single shop single thumb data", error);
            error.response && console.log("error", error.response.data.message);
            error.response && console.log("error", error.response.status);
        }
    }

    // call the fetchSingleShopSingleThumb function
    useEffect(() => {
        fetchSingleShopSingleThumb();
    }, [shopSingleThumb_id]);


    // state to store the active tab for the description, additional information and review sections  
    const [activeTab, setActiveTab] = useState('description');

    return (
        <div className='bg-gray-100'>
            {/* first child: header section */}
            <div className='bg-neutral-800 p-5 sm:p-25 text-center space-y-4'>
                <h1 className='text-2xl sm:text-3xl md:text-6xl text-white font-semibold'>Grilled Flank Steak</h1>

                <div className='flex items-center justify-center text-white font-semibold space-x-2'>
                    <HomeIcon className="w-4 h-4 md:w-5 md:h-5" />
                    <NavLink to="/" className='cursor-pointer text-sm md:text-base'>Home</NavLink >

                    <div className='flex items-center'>
                        <ChevronRight color='white' size={18} />
                        <span className='text-sm md:text-base'>shop-single-thumb</span>
                    </div>
                </div>
            </div>

            {/* second child */}
            <div className='w-11/12 md:w-10/12 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-10 pt-10 lg:pt-20'>
                {/* Image with discount badge */}
                <div className='relative overflow-hidden w-full md:w-auto' >
                    <img src={singleShopSingleThumb?.image} alt="" className='object-fit hover:scale-105 transition-transform border-none bg-[#EBE9E6] h-auto w-full lg:h-110 lg:w-500 p-5 md:p-10' />

                    <span className='absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full'>-16%</span>
                </div>

                <div className='space-y-5'>
                    <Link to={`/shop-single-thumb/${singleShopSingleThumb?._id}`} className='opacity-60 text-sm font-bold cursor-pointer '>{singleShopSingleThumb?.category}
                    </Link>
                    <p className='text-xl sm:text-2xl md:text-3xl font-semibold cursor-pointer pt-3'>{singleShopSingleThumb?.name}</p>
                    <p className='font-semibold text-red-500 text-lg md:text-xl'>${singleShopSingleThumb?.price}.00</p>

                    {/* In Stock Section */}
                    <div className='flex items-center gap-2 border-none bg-gray-200 py-2 px-4 rounded-md w-fit'>
                        <CircleCheckBig color='red' size={18} />
                        <p className='text-sm md:text-base'>In Stock</p>
                    </div>

                    {/* Description */}
                    <p className='opacity-65 text-sm sm:text-base'>
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
                        <p className='text-gray-500  text-sm md:text-base'>(6 Review)</p>
                    </div>

                    {/* Buttons  */}
                    <div className='flex flex-wrap items-center gap-3 md:gap-4'>
                        {/* Add to Cart Button */}
                        <NavLink to={`/shop-single-thumb/${singleShopSingleThumb?._id}`} className='flex items-center justify-between gap-2 border-none bg-red-500 text-white px-3 md:px-4 py-2 md:py-3 cursor-pointer font-semibold active:scale-95 transition-all hover:bg-black hover:text-white text-sm md:text-base'>
                            <ShoppingCart color='white' size={16} />
                            <button className="">Add To Cart</button>
                        </NavLink >

                        {/* Heart and Refresh Icons */}
                        <Link to={`/shop-single-thumb/${singleShopSingleThumb?._id}`}>
                            <Heart color='red' className='border border-gray-400 rounded-full h-8 w-8 md:h-10 md:w-10 p-1.5 md:p-2 cursor-pointer' />
                        </Link>

                        <Link to={`/shop-single-thumb/${singleShopSingleThumb?._id}`}>
                            <RefreshCw color='red' className='border-1 border-gray-400 rounded-full h-8 w-8 md:h-10 md:w-10 p-1.5 md:p-2 cursor-pointer' />
                        </Link>
                    </div>
                </div>
            </div>

            {/* third child */}
            <div className='w-11/12 md:w-10/12 mx-auto pt-12 md:pt-20 '>
                {/* Tabs */}
                <div className='flex justify-start md:justify-center space-x-10 border-b overflow-x-auto whitespace-nowrap '>
                    <button
                        className={`pb-2 text-sm md:text-base ${activeTab === 'description' ? 'border-b-2 border-red-600 text-black font-bold opacity-65 cursor-pointer' : 'text-gray-600 cursor-pointer'}`}
                        onClick={() => setActiveTab('description')}
                    >
                        Description
                    </button>
                    <button
                        className={`pb-2 text-sm md:text-base ${activeTab === 'additional' ? 'border-b-2 border-red-500 text-black font-bold opacity-60 cursor-pointer' : 'text-gray-600 cursor-pointer'}`}
                        onClick={() => setActiveTab('additional')}
                    >
                        Additional Information
                    </button>
                    <button
                        className={`pb-2 text-sm md:text-base ${activeTab === 'review' ? 'border-b-2 border-red-500 text-black font-bold opacity-60 cursor-pointer' : 'text-gray-600 cursor-pointer'}`}
                        onClick={() => setActiveTab('review')}
                    >
                        Review
                    </button>
                </div>

                {/* Tab Content */}
                <div className='pt-6 md:pt-8 '>
                    {activeTab === 'description' && <Description></Description>}
                    {activeTab === 'additional' && <AdditionalInformation />}
                    {activeTab === 'review' && <Review />}
                </div>
            </div>

            {/* fourth child */}
            {/* Related Products Section */}
            <RelatedProducts></RelatedProducts>
        </div>
    )
}
