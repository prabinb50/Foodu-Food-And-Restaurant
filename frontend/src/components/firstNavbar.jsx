import React from 'react'

export default function FirstNavbar() {
    return (
        <div className='bg-neutral-800 p-2 sticky top-0 z-50'>
            <div className='flex items-center justify-between text-white w-11/12 mx-auto cursor-pointer'>
                {/* left child: logo */}
                <img src="/envato_market.svg" alt="Envato Market" className='w-35' />

                {/* right child: buy now button */}
                <button className='border-none bg-green-500 text-xs md:text-sm font-semibold px-3 md:px-4 py-2 rounded-md text-center opacity-90 cursor-pointer hover:bg-green-600'>
                    Buy Now
                </button>
            </div>
        </div>
    )
}