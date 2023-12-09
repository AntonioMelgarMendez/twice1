// AboutPage.js
import React from 'react';
import Navbar from "./components/navbar";
import SpecialImages from "./components/specialImages";
import Foot from './components/footer'
import './special.css'; 
const Special = () => {
  return (
    <div >
      <div className='main'>
        <Navbar/>
       
       
      </div>
      <diiv className="main1">
      <SpecialImages/>
      <Foot/>
      </diiv>
   

    </div>
  );
}

export default Special;