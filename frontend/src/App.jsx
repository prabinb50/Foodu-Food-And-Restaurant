import './App.css'
import React from 'react'
import FirstNavbar from './components/firstNavbar'
import SecondNavBar from './components/secondNavBar'
import HeroSection from './components/heroSection'

export default function App() {
  return (
    <div>
      <FirstNavbar></FirstNavbar>
      <SecondNavBar></SecondNavBar>
      <HeroSection></HeroSection>
    </div>
  )
}
