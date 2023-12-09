// NavbarCenteredWithLogo.js

import React, { useState } from 'react';
import image from "../sources/logo1.png";
import '../navbar.css';
const NavbarCenteredWithLogo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar-centered-with-logo ${isOpen ? 'active' : ''}`}>
      <div className="nav-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className="nav-list">
      
        <li><a href="twice1/home">HOME</a></li>
        
        <li><a href="twice1/profile">PROFILE</a></li>
        <li><a href="twice1/news">NEWS</a></li>
        <li><a href="twice1/schedule">SCHEDULE</a></li>
        <li className="logo-container">
          <div className="logo">
            <img src={image} alt="Logo" className="logo" />
          </div>
        </li>
        <li><a href="twice1/discography">DISCOGRAPHY</a></li>
        <li><a href="twice1/special">SPECIAL</a></li>
        <li><a href="twice1/fanclub">FANCLUB</a></li>
        <li><a href="twice1/mobile">MOBILE</a></li>
      </ul>
    </nav>
  );
};

export default NavbarCenteredWithLogo;
