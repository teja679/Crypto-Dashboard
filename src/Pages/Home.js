import React from 'react'
import Header from '../Components/HomePage/Header/Header'
import LandingPage from '../Components/HomePage/LandingPage/LandingPage'
import News from './News'

import './styles.css'
const Home = () => {
  return (
    <div className='home-div'>
      <Header />
      <LandingPage />
      <News />
    </div>
  )
}

export default Home