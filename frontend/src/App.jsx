import './App.css'
import React from 'react'
import FirstNavbar from './components/firstNavbar'
import SecondNavBar from './components/secondNavBar'
import HeroSection from './components/heroSection'
import MenuSection from './components/menuSection'

export default function App() {
  return (
    <div>
      <FirstNavbar></FirstNavbar>
      <SecondNavBar></SecondNavBar>
      <HeroSection></HeroSection>
      <MenuSection></MenuSection>
    </div>
  )
}
