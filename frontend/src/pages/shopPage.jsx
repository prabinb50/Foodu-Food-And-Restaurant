import { ChevronRight, Grid2x2, HomeIcon, TableProperties } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import ShopGridSection from '../components/shopGridSection'
import ShopTableSection from '../components/shopTableSection'
import axios from 'axios'

export default function ShopPage() {

    // state to store the shop items data from the backend
    const [shopItems, setShopItems] = useState([]);

    // fetch the shop items from the backend
    const fetchShopItems = async () => {
        try {
            const response = await axios.get("http://localhost:4000/shopItems");
            // console.log("response", response.data.data);
            setShopItems(response.data.data);
        } catch (error) {
            console.log("Something went wrong while fetching the shop items data", error);
        }
    }

    // call the fetchShopItems function
    useEffect(() => {
        fetchShopItems();
    }, []);

    // useState: state to manage the current view 
    const [view, setView] = useState('grid');

    return (
        <div className='bg-gray-100'>
            {/* first child: header section */}
            <div className='bg-neutral-800 p-25 text-center space-y-4'>
                <h1 className='text-4xl md:text-6xl text-white font-semibold'>Special Food</h1>

                <div className='flex items-center justify-center text-white font-semibold space-x-2'>
                    <HomeIcon className="w-5 h-5" />
                    <NavLink to="/" className='cursor-pointer'>Home</NavLink >

                    <div className='flex items-center'>
                        <ChevronRight color='white' />
                        <span>shop</span>
                    </div>
                </div>
            </div>

            {/* second child: items section*/}
            <div className='w-11/12 md:w-10/12 mx-auto pt-20 pb-20'>
                <div className='flex space-x-4 justify-center md:justify-start'>
                    <div onClick={() => setView('grid')} className={`border border-gray-300 rounded-md h-12 w-12 p-2 cursor-pointer ${view === 'grid' ? 'bg-red-500 text-white' : ''}`}>
                        <Grid2x2 size={30} />
                    </div>

                    <div
                        onClick={() => setView('table')}
                        className={`border border-gray-300 rounded-md h-12 w-12 p-2 cursor-pointer ${view === 'table' ? 'bg-red-500 text-white' : ''}`}
                    >
                        <TableProperties size={30} />
                    </div>
                </div>

                {/* Conditionally render the sections based on the selected view */}
                {/* {
                    shopItems?.map((eachItem, index) => (
                        view === 'grid'
                            ? <ShopGridSection key={index} item={eachItem} />
                            : <ShopTableSection key={index} item={eachItem} />
                    ))
                } */}

                {
                    view === 'grid'
                        ? <ShopGridSection items={shopItems} />
                        : <ShopTableSection items={shopItems} />
                }
            </div>
        </div>
    )
}
