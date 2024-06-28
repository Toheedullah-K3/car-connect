import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Hero'
import HomeContent from '../components/HomeContent'
import Footer from '../components/Footer'
const Home = () => {
  // if(localStorage.getItem('isLoggedIn') == 'true')
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <HomeContent/>
      <Footer/>
    </>
  )
  // else {
  //   window.location.href = '/login'
  // }
}

export default Home
