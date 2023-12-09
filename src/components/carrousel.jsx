// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../sources/spotify1.jpg';
import image2 from '../sources/carusel4.jpg';
import image3 from '../sources/spotify2.jpg';
import '../carrousel.css'; // Importa los estilos

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    
  };

  return (
    <Slider {...settings} className='div'>
      <div className="carousel-item">
        <img src={image1} alt="Imagen 1" />

        <button className="carousel-button">VIEW MORE</button>
      </div>
      <div className="carousel-item">
        <img src={image2} alt="Imagen 2" />
      
        <button className="carousel-button">VIEW MORE</button>
      </div>
      <div className="carousel-item">
        <img src={image3} alt="Imagen 3" />
        
        <button className="carousel-button">VIEW MORE</button>
      </div>
    </Slider>
  );
};

export default Carousel;
