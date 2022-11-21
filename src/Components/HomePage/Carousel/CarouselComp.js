import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './styles.css'
import React from 'react'
import { slideImages } from "../../../images";

const CarouselComp = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
          }
    };

    return (
        <div className="carousel-div">
            <Carousel 
              swipeable={false}
              draggable={true}
              showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px">
                {slideImages.map((slide, index) => (
                    <div className="each-slide" key={index}>
                        <img src={slide.image} alt='slide'
                           className="each-image"
                        />
                        <p>{slide.name}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default CarouselComp