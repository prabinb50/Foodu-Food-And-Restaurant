import React from 'react'

export default function FirstNavbar() {
    return (
        <div className='bg-neutral-800 p-3 sticky top-0 z-50'>
            <div className='flex items-center justify-between text-white w-11/12 mx-auto cursor-pointer'>
                {/* left child */}
                <img src="./envato_market.svg" alt="" className='w-35' />

                {/* right child */}
                <button className='border-none bg-green-500 text-sm font-semibold px-4 py-2 rounded-md text-center opacity-90 cursor-pointer'>Buy Now</button>
            </div>
        </div>
    )
}