import React, { useEffect, useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { NavLink, useLocation } from 'react-router'
import BlogSectionBurgerRight from '../components/blogSectionBurgerRight'
import BlogSectionBurgerLeft from '../components/blogSectionBurgerLeft'
import axios from 'axios'

export default function BlogPage() {
    // get the news and blog id from the url
    const location = useLocation();
    console.log("location", location);
    console.log("location", location.pathname);
    const newsAndBlog_id = location.pathname.split("/")[2];

    // state to store the single news and blog data
    const [singleNewsAndBlog, setSingleNewsAndBlog] = useState([]);

    // fetch the single news and blog data from the backend
    const fetchSingleNewsAndBlog = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/newsAndBlog/${newsAndBlog_id}`);
            // console.log("response", response.data.data);
            setSingleNewsAndBlog([response.data.data]);
        } catch (error) {
            console.log("Something went wrong while fetching the single news and blog data", error);
        }
    }

    // call the fetchSingleNewsAndBlog function
    useEffect(() => {
        fetchSingleNewsAndBlog();
    }, [newsAndBlog_id]);

    return (
        <div className='bg-gray-100'>
            <div className='bg-neutral-800 p-25 text-center space-y-4'>
                <h1 className='text-6xl text-white font-semibold'>Blog Sidebar</h1>

                <div className='flex items-center justify-center text-white font-semibold space-x-2'>
                    {/* <Home color='white' className='cursor-pointer' /> */}
                    <NavLink to="/" className='cursor-pointer'>Home</NavLink >

                    <div className='flex items-center'>
                        <ChevronRight color='white' />
                        <span>blog-single-with-sidebar</span>
                    </div>
                </div>
            </div>


            <div className='mt-25'>
                {
                    singleNewsAndBlog?.map((eachItem, index) => (
                        <div key={index} className='flex flex-col md:flex-row w-10/12 mx-auto justify-between gap-10 '>
                            <div className='md:w-8/12 w-full'>
                                <BlogSectionBurgerLeft eachItem={eachItem}></BlogSectionBurgerLeft>
                            </div>

                            <div className='md:w-4/12 w-full'>
                                <BlogSectionBurgerRight></BlogSectionBurgerRight>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
