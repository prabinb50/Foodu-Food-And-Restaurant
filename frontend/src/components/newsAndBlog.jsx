import { Dot, MoveLeft, MoveRight } from 'lucide-react'
import React from 'react'

export default function NewsAndBlog() {
    return (
        <div className='w-11/12 md:w-10/12 lg:w-10/12 mx-auto mt-10 md:mt-20 pb-20'>
            {/* first child */}
            <div className="font-serif flex items-center justify-between flex-col text-center md:text-left">
                <div className="flex justify-between items-center space-x-2">
                    <MoveLeft className='text-red-500'></MoveLeft>
                    <p className=' text-red-500'>NEWS & BLOG</p>
                    <MoveRight className='text-red-500'></MoveRight>
                </div>

                <span className="text-3xl md:text-4xl lg:text-5xl font-semibold">Our Latest News & Blog</span>
            </div>

            {/* second child */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 cursor-pointer mt-10 gap-6'>
                {/* second: left child */}
                <div className='relative object-cover space-y-3'>
                    <img src="/burger.jpg" alt="" className='w-full rounded-md' />
                    <p className='absolute top-8 left-5 text-black border-none bg-white rounded-md text-xs px-2 py-1 font-semibold hover:text-red-500'>BURGER</p>

                    <p className='font-semibold text-lg hover:text-red-500 hover:underline'>Announcing if attachment resolution sentiments at the projection.</p>
                    <p className='opacity-50 font-semibold text-sm flex'>18 MARCH, 2024 <span className='flex hover:text-red-500 hover:opacity-90'><Dot />MD SOHAG</span></p>
                </div>

                {/* second: middle child */}
                <div className='relative object-cover space-y-3'>
                    <img src="/food.jpg" alt="" className='w-full rounded-md' />
                    <p className='absolute top-8 left-5 text-black border-none bg-white rounded-md text-xs px-2 py-1 font-semibold hover:text-red-500'>FOOD</p>

                    <p className='font-semibold text-lg hover:text-red-500 hover:underline'>This prefabricated passive are comfortable highly sustainable.</p>
                    <p className='opacity-50 font-semibold text-sm flex'>18 MARCH, 2024 <span className='flex hover:text-red-500 hover:opacity-90'><Dot />MD SOHAG</span></p>
                </div>

                {/* second: right child */}
                <div className='relative object-cover space-y-3'>
                    <img src="/pizza.jpg" alt="" className='w-full rounded-md' />
                    <p className='absolute top-8 left-5 text-black border-none bg-white rounded-md text-xs px-2 py-1 font-semibold hover:text-red-500'>PIZZA</p>

                    <p className='font-semibold text-lg hover:text-red-500 hover:underline'>Minuter him own clothes but observe country at the maintaining.</p>
                    <p className='opacity-50 font-semibold text-sm flex'>18 MARCH, 2024 <span className='flex hover:text-red-500 hover:opacity-90'><Dot />MD SOHAG</span></p>
                </div>
            </div>
        </div>
    )
}