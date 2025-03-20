import './App.css'
import React from 'react'
import HeroSection from './components/heroSection'
import MenuSection from './components/menuSection'
import NewsAndBlog from './components/newsAndBlog'
import SpecialLunch from './components/specialLunch'
import Reservation from './components/reservation'
// import BlogSectionLeft from './components/blogSectionLeft'

export default function App() {
  return (
    <div className='bg-gray-100'>
      <HeroSection></HeroSection>
      <MenuSection></MenuSection>
      <SpecialLunch></SpecialLunch>
      <Reservation></Reservation>
      <NewsAndBlog></NewsAndBlog>

      {/* <BlogSectionLeft></BlogSectionLeft> */}
    </div>
  )
}
