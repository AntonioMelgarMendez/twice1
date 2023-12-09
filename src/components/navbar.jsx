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
      
        <li><a href="/home">HOME</a></li>
        
        <li><a href="/profile">PROFILE</a></li>
        <li><a href="/news">NEWS</a></li>
        <li><a href="/schedule">SCHEDULE</a></li>
        <li className="logo-container">
          <div className="logo">
            <img src={image} alt="Logo" className="logo" />
          </div>
        </li>
        <li><a href="/discography">DISCOGRAPHY</a></li>
        <li><a href="/special">SPECIAL</a></li>
        <li><a href="/fanclub">FANCLUB</a></li>
        <li><a href="/mobile">MOBILE</a></li>
      </ul>
    </nav>
  );
};

export default NavbarCenteredWithLogo;
