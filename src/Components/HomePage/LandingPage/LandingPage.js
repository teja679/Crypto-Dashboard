import React from 'react'
import gradient from '../../../assets/gradient.png'
import iphone from '../../../assets/iphone.png'
import Button from '../../mui_components/Button/Button'
import './styles.css'
import { RWebShare } from "react-web-share";
import { motion } from 'framer-motion'
import CarouselComp from '../Carousel/CarouselComp'

const LandingPage = () => {
  return (
    <>
    <div className='landing-page'>
      <div className='headings-div'>
        <motion.h1
          initial={{ opacity: 0, y: 50 }} transition={{ type: 'spring', duration: 1 }}
          animate={{ opacity: 1, y: 0 }} className='headings'>
          <span className='stroke'>Crypto Tracker</span> <br />
          <span className='heading-blue'>Real Time.</span>
        </motion.h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ratione.</p>
        <div className='btn-div'>
          <a href='/dashboard'>
            <Button text={'Dashboard'} className={'button'} />
          </a>
          <RWebShare
            data={{
              text: "Checkout my crypto tracker made using React!",
              url: "API_URL",
              title: "Crypto",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <Button text={'Share'} className={'outline-button'} />
          </RWebShare>
        </div>

        {/* <SlideShow /> */}
        <div className='carousel-div'>
          <CarouselComp />
        </div>
      </div>
      <div className='image-div'>
        <img src={gradient} alt='gradient' className='gradient' />
        <motion.img src={iphone} alt='phone' className='phone'
          initial={{ y: -50 }} animate={{ y: 0 }} transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}></motion.img>
      </div>
    </div>
    </>
  )
}

export default LandingPage