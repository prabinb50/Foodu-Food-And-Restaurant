import { Facebook, Folder, Instagram, Linkedin, Search, Twitter } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import { format } from 'date-fns'
import axios from 'axios';

export default function BlogSectionBurgerRight() {

    // state to store recent posts 
    const [recentPosts, setRecentPosts] = useState(null);

    // fetch the recent posts from the backend
    const fetchRecentPosts = async () => {
        try {
            const response = await axios.get("http://localhost:4000/newsAndBlog");
            // console.log("response", response.data.data);
            setRecentPosts(response.data.data);

        } catch (error) {
            console.log("Something went wrong while fetching the news and blog data", error);
        }
    }

    // call the fetchRecentPosts function
    useEffect(() => {
        fetchRecentPosts();
    }, []);

    return (
        <div className=''>
            <div className='border-none bg-[#EBE9E6] p-10'>
                <div className='flex items-center justify-between border-1 border-gray-400 p-3 rounded-md bg-white'>
                    <p className='opacity-70'>Enter Keyword</p>
                    <Search color='white' className='border-none bg-red-500 h-10 w-10 p-2 rounded-md'></Search>
                </div>
            </div>

            <div className='border-none bg-[#EBE9E6] p-10 mt-15 space-y-5 font-semibold'>
                <p className='text-xl'>Recent Post</p>
                <hr className='border-red-500 border-2 w-10' />

                <div className='flex flex-col space-y-4'>
                    {
                        recentPosts?.map((post, index) => (
                            <div key={index} className='flex items-start space-x-4'>
                                <NavLink to={`/blog/${post._id}`}>
                                    <img src={post.image} alt='Post 1' className='w-45 h-16 object-cover rounded-md cursor-pointer' />
                                </NavLink>

                                <div className='space-y-2'>
                                    <p className='text-sm opacity-60'>{format(new Date(post.date), 'dd MMMM, yyyy')}</p>
                                    <NavLink to={`/blog/${post._id}`} className='font-semibold cursor-pointer hover:text-red-500 hover:underline'>{post.description}</NavLink>
                                </div>
                            </div>
                        ))
                    }
                    {/* <div className='flex items-start space-x-4'>
                        <NavLink to="/blog">
                            <img src={eachItem.image} alt='Post 1' className='w-45 h-16 object-cover rounded-md cursor-pointer' />
                        </NavLink>
                        <div className='space-y-2'>
                            <p className='text-sm opacity-60'>12 August, 2024</p>
                            <NavLink to="/blog" className='font-semibold cursor-pointer hover:text-red-500 hover:underline'>Announcing if attachment resolution sentiments ...</NavLink>
                        </div>
                    </div> */}

                    {/* <div className='flex items-start space-x-4'>
                        <NavLink to="/blog-food">
                            <img src='/food.jpg' alt='Post 1' className='w-45 h-16 object-cover rounded-md cursor-pointer' />
                        </NavLink>
                        <div className='space-y-2'>
                            <p className='text-sm opacity-60'>13 August, 2024</p>
                            <NavLink to="/blog-food" className='font-semibold cursor-pointer hover:text-red-500 hover:underline'>Minuter him own clothes but observe country at ...</NavLink>
                        </div>
                    </div>

                    <div className='flex items-start space-x-4'>
                        <NavLink to="/blog-pizza">
                            <img src='/pizza.jpg' alt='Post 1' className='w-45 h-16 object-cover rounded-md cursor-pointer' />
                        </NavLink>
                        <div className='space-y-2'>
                            <p className='text-sm opacity-60'>14 August, 2024</p>
                            <NavLink to="/blog-pizza" className='font-semibold cursor-pointer hover:text-red-500 hover:underline'>Minuter him own clothes but observe country mai ..</NavLink>
                        </div>
                    </div> */}
                </div>
            </div>

            <div className='border-none bg-[#EBE9E6] p-10 mt-15 space-y-5 font-semibold'>
                <p className='text-xl'>Category List</p>
                <hr className='border-red-500 border-2 w-10' />

                <div className='flex flex-col space-y-4'>
                    <div className='flex items-center justify-between'>
                        <p className='opacity-60 cursor-pointer hover:text-red-500'>National</p>
                        <div className='bg-white rounded-full h-10 w-10 flex items-center justify-center'>
                            <p>69</p>
                        </div>
                    </div>

                    <div className='flex items-center justify-between'>
                        <p className='opacity-60 cursor-pointer hover:text-red-500'>National</p>
                        <div className='bg-white rounded-full h-10 w-10 flex items-center justify-center'>
                            <p>25</p>
                        </div>
                    </div>

                    <div className='flex items-center justify-between'>
                        <p className='opacity-60 cursor-pointer hover:text-red-500'>Sports</p>
                        <div className='bg-white rounded-full h-10 w-10 flex items-center justify-center'>
                            <p>18</p>
                        </div>
                    </div>

                    <div className='flex items-center justify-between'>
                        <p className='opacity-60 cursor-pointer hover:text-red-500'>Magazine</p>
                        <div className='bg-white rounded-full h-10 w-10 flex items-center justify-center'>
                            <p>37</p>
                        </div>
                    </div>

                    <div className='flex items-center justify-between'>
                        <p className='opacity-60 cursor-pointer hover:text-red-500'>Health</p>
                        <div className='bg-white rounded-full h-10 w-10 flex items-center justify-center'>
                            <p>12</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border-none bg-[#EBE9E6] p-10 mt-15 space-y-5 font-semibold'>
                <p className='text-xl'>Archives</p>
                <hr className='border-red-500 border-2 w-10' />

                <div className='flex flex-col space-y-4'>
                    <div className='flex items-center space-x-2'>
                        <Folder className='text-gray-500' />
                        <p className='opacity-60 cursor-pointer hover:text-red-500'>Aug 2023</p>
                    </div>

                    <div className='flex items-center space-x-2'>
                        <Folder className='text-gray-500' />
                        <p className='opacity-60 cursor-pointer hover:text-red-500'>Sep 2023</p>
                    </div>

                    <div className='flex items-center space-x-2'>
                        <Folder className='text-gray-500' />
                        <p className='opacity-60 cursor-pointer hover:text-red-500'>Nov 2023</p>
                    </div>

                    <div className='flex items-center space-x-2'>
                        <Folder className='text-gray-500' />
                        <p className='opacity-60 cursor-pointer hover:text-red-500'>Dec 2023</p>
                    </div>
                </div>
            </div>

            <div className='border-none bg-[#EBE9E6] p-10 mt-15 space-y-5'>
                <p className='font-semibold text-lg'>Follow Us</p>
                <hr className='border-red-500 border-2 w-10' />

                <div className='text-white flex items-center gap-4 cursor-pointer'>
                    <Facebook className='border-none bg-blue-500 h-10 w-10 p-2'></Facebook>
                    <Twitter className='border-none bg-blue-500 h-10 w-10 p-2'></Twitter>
                    <Instagram className='border-none bg-red-500 h-10 w-10 p-2'></Instagram>
                    <Linkedin className='border-none bg-blue-500 h-10 w-10 p-2'></Linkedin>
                </div>
            </div>

            <div className='border-none bg-[#EBE9E6] p-10 mt-15 space-y-5 '>
                <p className='text-xl font-semibold'>Tags</p>
                <hr className='border-red-500 border-2 w-10' />

                <div className='flex flex-wrap gap-4'>
                    <p className=' cursor-pointer hover:text-red-500 bg-white rounded-full px-4 py-2'>Fashion</p>
                    <p className=' cursor-pointer hover:text-red-500 bg-white rounded-full px-4 py-2'>Education</p>
                    <p className=' cursor-pointer hover:text-red-500 bg-white rounded-full px-4 py-2'>Nation</p>
                    <p className=' cursor-pointer hover:text-red-500 bg-white rounded-full px-4 py-2'>Study</p>
                    <p className=' cursor-pointer hover:text-red-500 bg-white rounded-full px-4 py-2'>Health</p>
                    <p className=' cursor-pointer hover:text-red-500 bg-white rounded-full px-4 py-2'>Travel</p>
                </div>
            </div>
        </div>
    )
}
