import { format } from 'date-fns';
import { Dot, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import React, { useState } from 'react'
import { NavLink } from 'react-router';

export default function BlogSectionBurgerLeft({ eachItem }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thanks For Your Comment");
        setName('');
        setEmail('');
        setComment('');
    }
    return (
        <div className=' space-y-7'>
            <NavLink to={`/blog/${eachItem._id}`} className="space-y-7">
                <img src={eachItem.image} alt="" className='rounded-md w-180 h-90 object-cover' />
                <p className='opacity-70 font-semibold flex cursor-pointer'>{format(new Date(eachItem.date), 'dd MMMM, yyyy')} <span className='flex hover:text-red-500 hover:opacity-90'><Dot />{eachItem.author}</span></p>
            </NavLink>

            <p className='opacity-65 pt-6 /blog/${eachItem._id}'>Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.</p>
            <p className='opacity-65 '>New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.</p>

            <p className='border-none bg-black text-white pt-20 pb-20 px-25 italic text-xl opacity-90'>Celebrated share of first to worse. Weddings and any opinions suitable smallest nay. Houses or months settle remove ladies appear. Engrossed suffering supposing he recommend do eagerness.</p>

            <p className='opacity-65 '>Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.</p>

            <div>
                <span className='font-bold text-3xl'>Conduct replied off led whether?</span>
                <li className='pt-5 opacity-65 '>Pretty merits waited six</li>
                <li className='opacity-65 '>General few civilly amiable pleased account carried.</li>
                <li className='opacity-65 '>Continue indulged speaking</li>
                <li className='opacity-65 '>Narrow formal length my highly</li>
                <li className='opacity-65 '>Occasional pianoforte alteration unaffected impossible</li>
            </div>

            <p className='opacity-65 '>Surrounded to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty merits waited six talked pulled you. Conduct replied off led whether any shortly why arrived adapted. Numerous ladyship so raillery humoured goodness received an. So narrow formal length my highly longer afford oh. Tall neat he make or at dull ye. Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Iure, laudantium, tempore. Autem dolore repellat, omnis quam? Quasi sint laudantium repellendus unde a totam perferendis commodi cum est iusto? Minima, laborum.</p>

            <div className='flex gap-6 border-gray-300 border-2 p-5'>
                <img src="/Md Sohag.jpg" alt="" className='rounded-full w-40 object-cover' />

                <div className='space-y-2'>
                    <p className='font-bold'>MD SOHAG</p>
                    <p className='opacity-65'>Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec at odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit. All the Lorem Ipsum generators on the Internet tend.</p>
                </div>
            </div>

            <div className='flex gap-5 items-center justify-between'>
                <div className='font-semibold flex items-center justify-between gap-2'>
                    <span className='text-xl'>Tags:</span>
                    <span className='text-sm border-none bg-gray-200 px-5 py-2 rounded-md cursor-pointer hover:bg-red-500 hover:text-white'>Algorithm</span>
                    <span className='text-sm border-none bg-gray-200 px-5 py-2 rounded-md cursor-pointer hover:bg-red-500 hover:text-white'>Data Science</span>
                </div>

                <div className='flex items-center justify-between gap-2 font-semibold'>
                    <p className='text-xl'>Share:</p>
                    <Facebook className='rounded-full border-none bg-black text-white w-8 h-8 p-1 text-center hover:bg-red-500 cursor-pointer'></Facebook>
                    <Instagram className='rounded-full border-none bg-black text-white w-8 h-8 p-1 text-center hover:bg-red-500 cursor-pointer'></Instagram>
                    <Twitter className='rounded-full border-none bg-black text-white w-8 h-8 p-1 text-center hover:bg-red-500 cursor-pointer'></Twitter>
                </div>
            </div>

            <hr className='text-gray-400' />

            <div className='space-y-8'>
                <p className='font-semibold text-3xl'>3 Comments On “Providing Top Quality Cleaning Related Services Charms.”</p>

                <div className='flex items-center gap-6 justify-between shadow-lg rounded-md p-5'>
                    <img src="/Bubhan Prova.jpg" alt="" className='w-30 object-cover rounded-full' />

                    <div className='space-y-4'>
                        <div className='flex items-center justify-between'>
                            <div className='space-y-4'>
                                <p className='font-bold'>Bubhan Prova</p>
                                <p className='opacity-50 font-semibold flex'>28 Feb, 2023</p>
                            </div>
                            <p className='border-none bg-black text-white text-sm px-5 py-2 rounded-md cursor-pointer hover:bg-red-500'>Reply</p>
                        </div>
                        <p className='opacity-65'>Delivered ye sportsmen zealously arranging frankness estimable as. Nay any article enabled musical shyness yet sixteen yet blushes. Entire its the did figure wonder off. sportsmen zealously arranging to the main pint. Discourse unwilling am no described dejection incommode no listening of. Before nature his parish boy.</p>
                    </div>

                </div>

                <div className='flex items-center gap-6 justify-between shadow-lg rounded-md p-5'>
                    <img src="/mickeljones.jpg" alt="" className='w-30 object-cover rounded-full' />

                    <div className='space-y-4'>
                        <div className='flex items-center justify-between'>
                            <div className='space-y-4'>
                                <p className='font-bold'>Bubhan Prova</p>
                                <p className='opacity-50 font-semibold flex'>15 Mar, 2023</p>
                            </div>
                            <p className='border-none bg-black text-white text-sm px-5 py-2 rounded-md cursor-pointer hover:bg-red-500'>Reply</p>
                        </div>
                        <p className='opacity-65'>Delivered ye sportsmen zealously arranging frankness estimable as. Nay any article enabled musical shyness yet sixteen yet blushes. Entire its the did figure wonder off. sportsmen zealously arranging to the main pint. Discourse unwilling am no described dejection incommode no listening of. Before nature his parish boy.</p>
                    </div>

                </div>
            </div>

            <form onSubmit={handleSubmit} className='space-y-5 pb-20'>
                <p className='font-semibold text-3xl'>Leave a comments</p>
                <input
                    type="text"
                    placeholder='Full Name'
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='block w-full p-2 mb-4 border border-gray-300 rounded-md'
                />
                <input
                    type="email"
                    placeholder='Email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='block w-full p-2 mb-4 border border-gray-300 rounded-md'
                />
                <textarea
                    placeholder='Comment'
                    required
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className='block w-full p-2 mb-4 border border-gray-300 rounded-md'
                ></textarea>
                <input
                    type="submit"
                    value="Post Comment"
                    className='block w-full p-2 mb-4 bg-red-500 text-white font-semibold rounded-md cursor-pointer hover:bg-black'
                />
            </form>
        </div>




    )
}
