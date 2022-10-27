import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './styles.css'
import React from 'react'
import { slideImages } from "../../../images";

const CarouselComp = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="carousel-div">
            <Carousel responsive={responsive}>
                {slideImages.map((slide, index) => (
                    <div className="each-slide" key={index}>
                        <img src={slide.image} alt='slide'
                            style={{ width: '10rem'}}
                        />
                        
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default CarouselComp