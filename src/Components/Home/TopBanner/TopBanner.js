import React, { useState } from "react";
import { Carousel } from "react-bootstrap"
import './TopBanner.css'

const TopBanner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='home-carousal-div'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
       <div className='row'>
       <div className='col-md-8'>
       <img
          className="d-block w-100 carousel-img"
          src="https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
          alt="First slide"
        />
       </div>
        <div className='col-md-4 caption'>
        <Carousel.Caption>
          <h1 className='dark-text lobster-text' >Made with Love</h1>
          <p className='dark-text mulish-font'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button className='btn-style'>Explore more</button>
        </Carousel.Caption>
        </div>
       </div>
      </Carousel.Item>
      <Carousel.Item>
       <div className='row'>
       <div className='col-md-8'>
       <img
          className="d-block w-100 carousel-img"
          src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="First slide"
        />
       </div>
        <div className='col-md-4 caption'>
        <Carousel.Caption >
          <h1 className='dark-text lobster-text'>Made for You</h1>
          <p className='dark-text mulish-font'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button className='btn-style'>Explore more</button>
        </Carousel.Caption>
        </div>
       </div>
      </Carousel.Item>
      <Carousel.Item>
       <div className='row'>
       <div className='col-md-8'>
       <img
          className="d-block w-100 carousel-img"
          src="https://images.unsplash.com/photo-1492176861288-6b481cfad893?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="First slide"
        />
       </div>
        <div className='col-md-4 caption'>
        <Carousel.Caption>
          <h1 className='dark-text lobster-text'>Made to Shine</h1>
          <p className='dark-text mulish-font'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button className='btn-style'>Explore more</button>
        </Carousel.Caption>
        </div>
       </div>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default TopBanner;
