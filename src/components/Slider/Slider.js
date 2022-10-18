import React from 'react';
import Carousel from 'nuka-carousel';
import slide1 from "../../assets/images/slide1.jpg";
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide3.jpg";
import './Slider.css';




const Slide = ({title, src, alt}) => {
  return (
    <div className="slide-container parent">
      <div className="child blackout"></div>
      <div className=" child img-title-container">
        <div  className='img-title'>
          {title}
        </div>
      </div>
      <img src={src} alt={alt} className="img-height" />
    </div>
  )
}

export default function Slider() {
  return (
    <div className="custom-carousel">
      <Carousel wrapAround={true} slidesToShow={1}
        autoplay={true}
        autoplayInterval={5000}
        className="carousel-container"
        nextDisabled
        defaultControlsConfig={{
          nextButtonText: '>',
          prevButtonText: '<',
          nextButtonClassName: 'next',
          prevButtonClassName: 'prev',
          pagingDotsStyle: {
            fill: 'white'
          }
        }}
      >
        {/* <div className="slide-container"></div> */}
        <Slide 
          title="Summer 2022"
          src={slide1} 
          alt="slide1"
        />

        <Slide 
          title="Autumn 2022"
          src={slide2} 
          alt="slide2"
        />
        <Slide 
          title="Winter 2022"
          src={slide3} 
          alt="slide3"
        />

      </Carousel>
    </div>
  )
}
