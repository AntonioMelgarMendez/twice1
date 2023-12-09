import React from 'react';
import '../profile.css';
import chara1 from '../sources/Nayeon.jpeg';
import chara2 from '../sources/Jeongyeon.jpeg';
import chara3 from '../sources/Momo.jpeg';
import chara4 from '../sources/Sana.jpeg';
import chara5 from '../sources/Jihyo.jpeg';
import chara6 from '../sources/Mina.jpeg';
import chara7 from '../sources/Dahyun.jpeg';
import chara8 from '../sources/Chaeyoung.jpeg';
import chara9 from '../sources/Tzuyu.jpeg';

const integrantes = ['Nayeon', 'Jeongyeon', 'Momo', 'Sana', 'Jihyo', 'Mina', 'Dahyun', 'Chaeyoung', 'Tzuyu'];

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
  ];

  return (
    <div className="imagen-grid-container1">
      <h2 className="titulo1">PROFILES</h2>
      
      <div className="grid1">
        {imagenes.map((ruta, index) => (
          <div key={index} className="imagen-container1">
            <img src={ruta} alt={`Imagen ${index + 1}`} className="imagen1" />
            <div className="texto-superpuesto1">
              {integrantes[index]}
            </div>
          </div>
        ))}
      </div>
      <div className="bot1"></div>
    </div>
    
  );
};

export default ProfileScheme;
