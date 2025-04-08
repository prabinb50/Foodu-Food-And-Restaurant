import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import React, { useState } from 'react'
import { NavLink } from 'react-router'
import { Bounce, toast } from 'react-toastify';

export default function Footer() {

    // array of quick links
    const quickLinks = [
        { name: 'Home', url: '/' },
        { name: 'Pages', url: '/pages' },
        { name: 'Menu', url: '/menu' },
        { name: 'Blog', url: '/blog' },
        { name: 'Shop', url: '/shop' },
        { name: 'Contact', url: '/contact-us' },
    ];

    // array of contact information
    const contactInfo = [
        { icon: <MapPin />, text: '175 10h Street, Office 375 Berlin, De 21562' },
        { icon: <Mail />, text: '+123 34598768\n+554 34598734' },
        { icon: <Phone />, text: 'food@restan.com' },
    ]

    // useState: state variable to store the email input value
    const [email, setEmail] = useState('');
    // function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // alert('Subscribed Successfully');
        // Display a toast notification
        toast("Subscribed Successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        setEmail('');
    };

    return (

        <div className='border-none bg-black text-white rounded-xl w-11/12 md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-5 md:p-10'>
            {/* First child: Logo and description */}
            <div className='space-y-5'>
                <img src="/logo_2.png" alt="Logo" className='w-40 cursor-pointer' />
                <p className='text-sm opacity-80'>Discover culinary delights recipes and inspiration in our food haven.</p>

                <div className='space-y-2'>
                    <p className='flex items-center justify-between'>MON - FRI <span>8:00 AM - 6:00 PM</span></p>
                    <hr className='opacity-40' />

                    <p className='flex items-center justify-between'>SATURDAY <span>9:00 AM - 5:00 PM</span></p>
                </div>
            </div>

            {/* second child: quicks links */}
            <div className='space-y-5 '>
                <p className='font-bold text-lg'>Quick Links</p>
                {
                    quickLinks.map((eachLink, index) => (
                        <div key={index} className='opacity-75 space-y-2 flex flex-col '>
                            <NavLink to={eachLink.url} className='hover:text-red-500'>{eachLink.name}</NavLink>
                        </div>
                    ))
                }
            </div>

            {/* third child: conatct info*/}
            <div className='space-y-5'>
                <p className='text-lg font-bold'>Contact Info</p>
                {
                    contactInfo.map((eachContact, index) => (
                        <div key={index} className='opacity-75 space-y-2 flex flex-col text-sm'>
                            <div className='flex items-center space-x-4'>
                                <p className='cursor-pointer border border-gray-500 rounded-full w-10 h-10 px-2 py-2'>{eachContact.icon}</p>
                                <p>{eachContact.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* fourth child: newsletter subscription */}
            <form className='space-y-5' onSubmit={handleSubmit}>
                <p className='text-lg font-bold'>Newsletter</p>
                <p className='opacity-75'>Join our subscribers list to get the latest news and special offers.</p>

                <input type="email" placeholder='Enter your email' required className='block border border-gray-300 w-full p-2 rounded-md' value={email} onChange={(e) => setEmail(e.target.value)} />

                <input
                    type="submit"
                    value="Subscribe"
                    className=' bg-black text-white font-semibold rounded-md cursor-pointer hover:bg-red-500 p-2 w-full'
                />
            </form>

            {/* Footer bottom section */}
            <div className='col-span-1 md:col-span-2 lg:col-span-4 flex flex-col items-center md:mt-5 mt-1 border-t border-gray-600 pt-5 text-sm opacity-75 text-center'>
                <p>© Copyright 2025 Foodu. All Rights Reserved.</p>
                <div className='flex space-x-4 mt-2'>
                    <Facebook className='cursor-pointer hover:text-red-500' />
                    <Instagram className='cursor-pointer hover:text-red-500' />
                    <Twitter className='cursor-pointer hover:text-red-500' />
                    <Linkedin className='cursor-pointer hover:text-red-500' />
                </div>
            </div>
        </div>
    )
}
