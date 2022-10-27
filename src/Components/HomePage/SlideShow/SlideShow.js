import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { slideImages } from '../../../images';
import './styles.css'

export const SlideShow = () => {

    const [data, setData] = useState([])
    const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
   
    // useEffect(() => {
    //     axios.get(API_URL, { crossDomain: true }).then((res) => {
    //         if (res.data) {
    //             console.log(res.data);
    //             setData(res.data);
    //         } else {
    //             console.log('error')
    //         }
    //     })
    // }, [])


    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slide, index)=> (
            <div className="each-slide" key={index}>
              {/* <div style={{'backgroundImage': `url(${slide.image})`}}>
                <span>{slide.name}</span>
              </div> */}
              <img src={slide.image} alt='slide' 
              style={{width: '10rem'}} 
              />
              <img src={slide.image} alt='slide' 
              style={{width: '10rem'}} 
              />
            </div>
          ))} 
        </Slide>
      </div>
    )
}