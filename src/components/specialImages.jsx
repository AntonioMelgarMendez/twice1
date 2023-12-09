import React from 'react';
import "../special.css";
import chara1 from '../sources/misamo.jpg';
import chara2 from '../sources/6anniversary.jpeg';
import chara3 from '../sources/showcase.png';
import chara4 from '../sources/5th.jpg';
import chara5 from '../sources/minialbum.jpg';
import chara6 from '../sources/celebrate.jpg';
import chara7 from '../sources/greeting.jpeg';
import chara8 from '../sources/albumjapan.jpg';
import chara9 from '../sources/5anniversary2.jpg';
import chara10 from '../sources/safari.png';
import chara11 from '../sources/boscoso.jpeg';
import chara12 from '../sources/single.png';
const texto = ['MISAMO JAPAN SHOWCASE "Masterpiece"', 'TWICE 6th ANNIVERSARY', 'MISAMO JAPAN SHOWCASE 2023', 'TWICE 5TH WORLD TOUR ‘READY TO BE’ in JAPAN', 'MISAMO JAPAN 1st MINI ALBUM', '数量限定生産アナログ盤 Cerebrate LP', 'TWICE JAPAN FAN MEETING 2022 "ONCE DAY"', 'TWICE JAPAN 4th ALBUM『Celebrate』', 'TWICE ONCEJAPAN 5th ANNIVERSARY',"TWICE JAPAN SEASON’S GREETINGS 2022 “ONCE-WAY”","TWICE JAPAN 3rd ALBUM『Perfect World』GOODS LINEUP＆SPECIAL","TWICE JAPAN 8th SINGLE『Kura Kura』リリース記念スペシャルグッズ販売決定！"];


const Specialimages = () => {
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
    <div>
              <div className='header'>
      <h2 className="titulo">SPECIAL</h2>
      <div className='underline3'></div>
      </div>
        <div className="grid">
        {imagenes.map((ruta, index) => (
          <div key={index} className="imagen-container1">
          <img src={ruta} alt={`Imagen ${index + 1}`} className="imagen1" />
          <div className='textsub'>
           {texto[index]}
          </div>
        </div>
        ))}
      </div>
      <div className="bot"></div>

    </div>
   
  );
}

export default Specialimages;
