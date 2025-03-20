import React, { useState } from 'react'

export default function Reservation() {

    // map method
    const items = [
        { image: "/buffet.png", name: 'BUFFET' },
        { image: "/party.png", name: 'PARTY' },
        { image: "/event.png", name: 'EVENT' },
    ]

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [person, setPerson] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thanks For Your Reservation');
        setName('');
        setNumber('');
        setPerson('');
        setDate('');
        setTime('');
    }

    return (
        <div className='grid grid-cols-2 mt-20'>
            {/* first child */}
            <div className='relative object-cover'>
                <img src="/reservation.jpg" alt="" className='object-cover' />

                <div className='flex flex-col absolute top-5 -right-15 gap-5 mt-20'>
                    {
                        items.map((items, index) => (
                            <div className='border-none bg-white rounded-full px-9 py-5 flex flex-col items-center gap-2 cursor-pointer'>
                                <img src={items.image} alt="" className='object-cover w-15' />
                                <p className='text-black text-sm font-semibold'>{items.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* second child */}
            <div className='flex flex-col h-full space-y-4 py-25 px-25'>
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
