import React from 'react';
import bgImage from "../../public/cupcake.jpg";

export default function HeroSection() {
  return (
    <div>
      <div className='relative text-white'>
      {/* Background Image */}
      <img 
        src={bgImage} 
        alt="backgroundImage" 
        className='w-full h-screen object-cover opacity-85' 
      />

      {/* Overlay Text: The Great RESTAURANT */}
      <div className='absolute top-[20%] left-0 right-0 text-center'>
        <p className='text-5xl font-sans'>
          The Great <br />
          <span className='text-9xl font-semibold'>RESTAURANT</span>
        </p>
      </div>

      {/* Overlay Text: SINCE 1856 */}
      <div className='absolute bottom-[20%] left-0 right-0 text-center'>
        <p className='text-7xl font-medium'>
          SINCE <br />1856
        </p>
      </div>
    </div>
    </div>
  );
}
