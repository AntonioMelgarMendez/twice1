/* TopDiscos.js */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../card.css';  // Importa los estilos
import image1 from "../sources/album1.jpeg";
import image2 from '../sources/disco1.jpg';
import image3 from "../sources/disco2.jpg";

const TopDiscos = () => {
  return (
    <div className='top-discos-container'>
      <h1 className='Titulo'>GREATEST HITS</h1>
      <h3 className='Titulo2'>Enjoy Ours Discs</h3>
      <div className='card-container'>
        <div className='card'>
          <img className='card-image' src={image1} alt="Disc 1" />
        
          <h2 className='subitulo'>Ready To Be</h2>
          <button id="buyButton" className="buybutton">
            <FontAwesomeIcon icon={faShoppingCart} /> Buy Now
          </button>
       
        </div>
        <div className='card'>
          <img className='card-image' src={image2} alt="Disc 2" />
          <h2 className='subitulo'>The Feels</h2>
          <button id="buyButton" className="buybutton">
            <FontAwesomeIcon icon={faShoppingCart} /> Buy Now
          </button>
        </div>
        <div className='card'>
          <img className='card-image' src={image3} alt="Disc 3" />
          <h2 className='subitulo'>Fancy</h2>
          <button id="buyButton" className="buybutton">
            <FontAwesomeIcon icon={faShoppingCart} /> Buy Now
          </button>
        </div>
      </div>
     
    </div>
  );
}

export default TopDiscos;
