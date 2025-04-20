import React, { useState } from 'react'

export default function Reservation() {
    // map method: array of items to be displayed
    const items = [
        { image: "/buffet.png", name: 'BUFFET' },
        { image: "/party.png", name: 'PARTY' },
        { image: "/event.png", name: 'EVENT' },
    ]

    // useState: to store the form data
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [person, setPerson] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    // function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thanks For Your Reservation');
        // reset the form fields
        setName('');
        setNumber('');
        setPerson('');
        setDate('');
        setTime('');
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 mt-10 md:mt-20 '>
            {/* First child: Image and items */}
            <div className='relative w-full h-[400px] md:h-[500px]'>
                <img
                    src="/reservation.jpg" alt=""
                    className='w-full h-full object-cover shadow-md' loading="lazy" />

                {/* Floating items container */}
                <div className='flex flex-row lg:flex-col absolute lg:top-10 lg:right-[-15px] gap-3 sm:gap-5 transform translate-y-[-50%] sm:translate-y-0'>
                    {
                        items.map((items, index) => (
                            <div
                                key={index}
                                className='border-none bg-white rounded-full px-9 py-5 flex flex-col items-center gap-2 cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300 touch-manipulation '
                                role="button">
                                <img src={items.image} alt="" className='object-cover w-15' />
                                <p className='text-black text-sm font-semibold'>{items.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Second child: Reservation form */}
            <div className='flex flex-col h-full space-y-3 sm:space-y-4 py-3 sm:py-5 px-5'>
                <p className='text-lg sm:text-xl text-red-500 font-semibold'>RESERVATION</p>
                <p className='text-3xl sm:text-4xl md:text-5xl font-bold'>Book A Table</p>

                <form className='flex flex-col w-full mt-2 sm:mt-4' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Enter your name'
                        required
                        className='block w-full p-2 mb-4 border border-gray-300 rounded-md focus:ring-1 focus:ring-red-500 focus:outline-none'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        placeholder='Enter your number'
                        required
                        className='block w-full p-2 mb-4 border border-gray-300 rounded-md focus:ring-1 focus:ring-red-500 focus:outline-none'
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />

                    <input
                        type="number"
                        placeholder='Number of person'
                        required
                        min="1"
                        max="10"
                        className='block w-full p-2 mb-4 border border-gray-300 rounded-md focus:ring-1 focus:ring-red-500 focus:outline-none'
                        value={person}
                        onChange={(e) => setPerson(e.target.value)}
                    />

                    <input
                        type="date"
                        placeholder='Enter date'
                        required
                        className='block w-full p-2 mb-4 border border-gray-300 rounded-md focus:ring-1 focus:ring-red-500 focus:outline-none'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                    />

                    <input
                        type="time"
                        placeholder='Enter time'
                        required
                        className='block w-full p-2 mb-4 border border-gray-300 rounded-md focus:ring-1 focus:ring-red-500 focus:outline-none'
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />

                    <input
                        type="submit"
                        value="Book Now"
                        className='block w-full p-2 mb-4 bg-red-500 text-white font-semibold rounded-md cursor-pointer hover:bg-black transition-colors duration-300 focus:ring-1 focus:ring-offset-2 focus:ring-red-500 active:bg-red-700 touch-manipulation'
                    />
                </form>
            </div>
        </div>
    )
}
