// AboutMe.js

import React from 'react';
import '../aboutme.css'; // Asegúrate de importar tu archivo de estilos
import image1 from "../sources/artwork.jpg"
const AboutMe = () => {
  return (
    <div className="about-me-container">
              <div className="text-container">
        <h1 className="title">ABOUT TWICE</h1>

      </div>
      <img
        src={image1}
        alt="Mi Imagen"
        className="profile-image"
      />
      <div className='text-container'>
      <p className="description">
        TWICE is a South Korean girl group formed by JYP Entertainment. The group debuted in 2015 with the song “Like OOH-AHH”. The group has nine members: 
Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun, Chaeyoung, Tzuyu. 
TWICE is one of the best-selling K-pop girl groups of all time.
        </p>
      </div>
      <h1 className="title">NEWS</h1>
    </div>
    
  );
  
};

export default AboutMe;
