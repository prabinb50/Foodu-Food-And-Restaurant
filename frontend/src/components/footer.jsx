import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import React, { useState } from 'react'
import { NavLink } from 'react-router'

export default function Footer() {

    const quickLinks = [
        'Home',
        'Pages',
        'Menu',
        'Blog',
        'Contact'
    ];

    const contactInfo = [
        { icon: <MapPin />, text: '175 10h Street, Office 375 Berlin, De 21562' },
        { icon: <Mail />, text: '+123 34598768\n+554 34598734' },
        { icon: <Phone />, text: 'food@restan.com' },
    ]

    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Subscribed Successfully');
        setEmail('');
    };

    return (

        <div className='border-none bg-black text-white rounded-xl w-10/12 mx-auto grid grid-cols-4 gap-8 p-10 '>
            {/* first child */}
            <div className='space-y-5 '>
                <img src="/logo_2.png" alt="" className='w-40 cursor-pointer' />
                <p className='text-sm opacity-80'>Discover culinary delights recipes and inspiration in our food haven.</p>

                <div className='space-y-2'>
                    <p className='flex items-center justify-between'>MON - FRI <span>8:00 AM - 6:00 PM</span></p>
                    <hr className='opacity-40' />
                    <p className='flex items-center justify-between'>SATURDAY <span>9:00 AM - 5:00 PM</span></p>
                </div>
            </div>

            {/* second child */}
            <div className='space-y-5 '>
                <p className='font-bold text-lg'>Quick Links</p>
                {
                    quickLinks.map((eachLink, index) => (
                        <div key={index} className='opacity-75 space-y-2 flex flex-col '>
                            <NavLink to='/' className='hover:text-red-500'>{eachLink}</NavLink>
                        </div>
                    ))
                }
            </div>

            {/* third child */}
            <div className='space-y-5 '>
                <p className='text-lg font-bold'>Conatct Info</p>
                {
                    contactInfo.map((eachContact, index) => (
                        <div key={index} className='opacity-75 space-y-2 flex flex-col text-sm'>
                            <div className='flex items-center space-x-4'>
                                <p className='cursor-pointer border border-gray-500 rounded-full w-10 h-10 px-2 py-2' color='white'>{eachContact.icon}</p>
                                <p>{eachContact.text}</p>
                            </div>
                        </div>
                    ))
                }

                {/* <div className='opacity-75 space-y-2 flex flex-col text-sm'>
                        <div className='flex items-center space-x-4'>
                        <MapPin className='text-gray-500 cursor-pointer border rounded-full w-10 h-8 p-2' color='white' />
                            <p>175 10h Street, Office 375 Berlin, De 21562</p>
                        </div>
                    </div> */}
            </div>

            {/* fourth child */}
            <form className='space-y-5' onSubmit={handleSubmit}>
                <p className='text-lg font-bold'>Newsletter</p>
                <p className='opacity-75'>Join our subscribers list to get the latest news and special offers.</p>

                <input type="text" placeholder='Enter your email' required className='block border border-gray-300 w-full p-2 rounded-md' value={email} onChange={(e) => setEmail(e.target.value)} />

                <input
                    type="submit"
                    value="Subscribe"
                    className=' bg-black text-white font-semibold rounded-md cursor-pointer hover:bg-red-500 p-2 w-full'
                />
            </form>

            {/* Footer Bottom Section */}
            <div className='col-span-4 flex flex-col items-center mt-10 border-t border-gray-600 pt-5 text-sm opacity-75 text-center'>
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
