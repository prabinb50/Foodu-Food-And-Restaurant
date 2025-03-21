import { ChevronRight } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'

export default function ShopPage() {
    return (
        <div className='bg-gray-100'>
            <div className='bg-neutral-800 p-25 text-center space-y-4'>
                <h1 className='text-6xl text-white font-semibold'>Special Food</h1>

                <div className='flex items-center justify-center text-white font-semibold space-x-2'>
                    <NavLink to="/" className='cursor-pointer'>Home</NavLink >

                    <div className='flex items-center'>
                        <ChevronRight color='white' />
                        <span>shop</span>
                    </div>
                </div>
            </div>

            {/* second child */}
            <div>
                
            </div>
        </div>
    )
}
