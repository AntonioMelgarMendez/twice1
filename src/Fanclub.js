// AboutPage.js
import React from 'react';
import Navbar from "./components/navbar";
import Login from "./components/login"
import Foot from './components/footer'
import './discography.css'; 
const FanClub = () => {
  return (
    <div >
      <div className='main'>
        <Navbar/>
        <Login/>
        <Foot/>
      </div>
   
   

    </div>
  );
}

export default FanClub;