import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import dataGallery from './data';

const myGallery = () => {


  const carsouelFun = (time1, time2, img1, img2) => {
    return <Carousel
      fade={true}
      controls={false}
      indicators={false}
      pause={false}
    >
      <Carousel.Item interval={time1}>
        <img
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={time2}>
        <img
          src={img2}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  };



  return <section className='carousel-section'>
    <h1 className='text-center'>Gallery</h1>

    <div className='carousel-items'>
      {
        dataGallery.map((el) => {
          return <article>
            {carsouelFun(el.time1, el.time2, el.img1, el.img2)}
          </article>
        })
      }
    </div>

  </section>
}

export default myGallery;
