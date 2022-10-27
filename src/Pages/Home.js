import React from 'react'
import Footer from '../Components/HomePage/Footer/Footer'
import Header from '../Components/HomePage/Header/Header'
import LandingPage from '../Components/HomePage/LandingPage/LandingPage'

import './styles.css'
const Home = () => {
  return (
    <div className='home-div'>
      <Header />
      <LandingPage />
      <Footer />
    </div>
  )
}

export default Home