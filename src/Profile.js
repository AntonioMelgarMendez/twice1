// AboutPage.js
import React from 'react';
import Navbar from "./components/navbar";
import ProfileScheme from './components/interactiveProfile'
import Foot from './components/footer'
import './profile.css'; 
const AboutPage = () => {
  return (
    <div>
      <div className='main'>
       <Navbar/>
      </div>
      <ProfileScheme/>
      <Foot/>
    </div>
  );
}

export default AboutPage;