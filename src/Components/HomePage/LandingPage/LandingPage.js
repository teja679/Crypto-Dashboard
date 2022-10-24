import React from 'react'
import gradient from '../../../assets/gradient.png'
import iphone from '../../../assets/iphone.png'
import Button from '../../mui_components/Button/Button'
import './styles.css'
import { RWebShare } from "react-web-share";

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <div className='headings-div'>
        <h1 className='headings'>
          <span className='stroke'>Crypto Tracker</span> <br />
          <span className='heading-blue'>Real Time.</span>
        </h1>
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
      </div>
      <div className='image-div'>
        <img src={gradient} alt='gradient' className='gradient' />
        <img src={iphone} alt='phone' className='phone' />
      </div>
    </div>
  )
}

export default LandingPage