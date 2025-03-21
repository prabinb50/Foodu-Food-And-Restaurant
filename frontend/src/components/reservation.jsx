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
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 mt-20'>
            {/* First child: Image and items */}
            <div className='relative'>
                <img src="/reservation.jpg" alt="" className='w-full h-full object-cover' />

                <div className='flex flex-col absolute top-5 -right-15 gap-5 mt-20'>
                    {
                        items.map((items, index) => (
                            <div key={index} className='border-none bg-white rounded-full px-9 py-5 flex flex-col items-center gap-2 cursor-pointer shadow-lg'>
                                <img src={items.image} alt="" className='object-cover w-15' />
                                <p className='text-black text-sm font-semibold'>{items.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Second child: Reservation form */}
            <div className='flex flex-col h-full space-y-4 py-5 px-5'>
                <p className='text-xl text-red-500 font-semibold'>RESERVATION</p>
                <p className='text-5xl font-bold'>Book A Table</p>

                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Enter your name'
                        required
                        className='block w-full p-2 mb-4 border border-gray-300 rounded-md'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="number"
                        placeholder='Enter your number'
                        required
                        className='block w-full p-2 mb-4 border border-gray-300 rounded-md'
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />

                    <input
                        type="number"
                        placeholder='Number of person'
                        required
                        className='block w-full p-2 mb-4 border border-gray-300 rounded-md'
                        value={person}
                        onChange={(e) => setPerson(e.target.value)}
                    />

                    <input
                        type="date"
                        placeholder='Enter date'
                        required
                        className='block w-full p-2 mb-4 border border-gray-300 rounded-md'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />

                    <input
                        type="time"
                        placeholder='Enter time'
                        required
                        className='block w-full p-2 mb-4 border border-gray-300 rounded-md'
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />

                    <input
                        type="submit"
                        value="Book Now"
                        className='block w-full p-2 mb-4 bg-red-500 text-white font-semibold rounded-md cursor-pointer hover:bg-black'
                    />
                </form>
            </div>
        </div>
    )
}
