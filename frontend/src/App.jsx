import './App.css'
import React from 'react'
import HeroSection from './components/heroSection'
import MenuSection from './components/menuSection'
import NewsAndBlog from './components/newsAndBlog'
import SpecialLunch from './components/specialLunch'
// import BlogSectionLeft from './components/blogSectionLeft'

export default function App() {
  return (
    <div>
      <HeroSection></HeroSection>
      <MenuSection></MenuSection>
      <SpecialLunch></SpecialLunch>
      <NewsAndBlog></NewsAndBlog>

      {/* <BlogSectionLeft></BlogSectionLeft> */}
    </div>
  )
}
