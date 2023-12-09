import React from 'react';
import '../discography.css';
import chara1 from '../sources/Between.jpg';
import chara2 from '../sources/CryForMe.jpg';
import chara3 from '../sources/WhatsLove.jpg';
import chara4 from '../sources/Lane1.jpg';
import chara5 from '../sources/PageTwo.jpg';
import chara6 from '../sources/Signal.jpg';
import chara7 from '../sources/Story.jpg';
import chara8 from '../sources/TasteLove.jpg';
import chara9 from '../sources/TheFeels.jpg';
import chara10 from '../sources/feelsSpecial.jpg';
import chara11 from '../sources/readytobe.jpg';
import chara12 from '../sources/fancy.jpg';
const integrantes = ['Between 1&2 ', 'Cry For Me', 'What Is Love?', 'Coaster', 'Page Two', 'Signal', 'The Story Begins', 'Taste Of Love', 'The Feels',"Feels Special","Ready To Be","Fancy"];
const colors = ['#FFB6C1', '#FFD700', '#FFA07A', '#20B2AA', '#87CEFA', '#9370DB', 'rgb(17, 162, 116)', '#FFA500', '#FF69B4', '#FF6347', '#00FA9A', '#BA55D3'];

const ProfileScheme = () => {
  const imagenes = [
    chara1,
    chara2,
    chara3,
    chara4,
    chara5,
    chara6,
    chara7,
    chara8,
    chara9,
    chara10,
    chara11,
    chara12
  ];

  return (
    <div className="imagen-grid-container">
      <div className='header'>
      <h2 className="titulo">DISCOGRAPHY</h2>
      <div className='underline2'></div>
      </div>

      <div className="botones-container">
      <button className="boton1" style={{ background: 'linear-gradient(150deg, rgb(255, 118, 118)555, #d67878)' }}>
       ALL
      </button>
      <button className="boton" style={{ background: 'transparent' }}>
        SINGLE
      </button>
      <button className="boton" style={{ background: 'transparent' }}>
        ALBUM
      </button>
      <button className="boton" style={{ background: 'transparent' }}>
        DVD
      </button>
      <button className="boton" style={{ background: 'transparent' }}>
        VINYL
      </button>
      <button className="boton" style={{ background: 'transparent' }}>
        MISAMO
      </button>
    </div>
      <div className="grid">
        {imagenes.map((ruta, index) => (
          <div key={index} className="imagen-container">
          <div className="imagen-overlay"style={{ background: colors[index] }}>
          <div className="texto-superpuesto">
              {integrantes[index]}
            </div>
          </div>
          <img src={ruta} alt={`Imagen ${index + 1}`} className="imagen" />
        </div>
        ))}
      </div>
      <div className="bot"></div>
    </div>
    
  );
};

export default ProfileScheme;
