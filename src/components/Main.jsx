import React from 'react';
import videbg from "../sources/b.mp4";
import "../index.css";
const Main = () => {
    const handleButtonClick = () => {
        // Puedes redirigir al enlace de YouTube utilizando window.location.href
        window.location.href = 'https://www.youtube.com/watch?v=ZdKYi5ekshM';
      };
  return (
    <div className='main'>
      <div className="overlay">
  
      <video src={videbg} autoPlay loop muted className='video' style={{  filter: 'brightness(50%)'}}/>
     
      </div>
      
      <div className='content'>
      <button className="youtube-button" onClick={handleButtonClick}> &#9654; PLAY VIDEO</button>
  
      </div>
      
    </div>
   
  );
}

export default Main;
