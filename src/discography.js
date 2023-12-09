// AboutPage.js
import React from 'react';
import Navbar from "./components/navbar";
import Discography from './components/discography'
import Foot from './components/footer'
import './discography.css'; 
const discography = () => {
  return (
    <div>
      <div className='main'>
      <Navbar/>
      </div>
      <Discography/>
      <Foot/>
    </div>
  );
}

export default discography;