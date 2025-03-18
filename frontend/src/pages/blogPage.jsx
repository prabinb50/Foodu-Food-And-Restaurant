import React from 'react'
import BlogSectionLeft from '../components/blogSectionLeft'
import BlogSectionRight from '../components/blogSectionRight'
import { ChevronRight, Home } from 'lucide-react'
import { NavLink } from 'react-router'

export default function BlogPage() {
    return (
        <div>
            <div className='bg-neutral-800 p-25 text-center space-y-4'>
                <h1 className='text-6xl text-white font-semibold'>Blog Sidebar</h1>

                <div className='flex items-center justify-center text-white font-semibold space-x-2'>
                    <Home color='white' className='cursor-pointer' />
                    <NavLink to="/" className='cursor-pointer'>Home</NavLink >

                    <div className='flex items-center'>
                        <ChevronRight color='white' />
                        <span>blog-single-with-sidebar</span>
                    </div>
                </div>
            </div>


            <div className='bg-gray-50 mt-25'>
                <div className=' flex flex-col md:flex-row w-10/12 mx-auto justify-between gap-10 '>
                    <div className='md:w-8/12 w-full'>
                        <BlogSectionLeft />
                    </div>

                    <div className='md:w-4/12 w-full'>
                        <BlogSectionRight />
                    </div>
                </div>
            </div>
        </div>

    )
}
