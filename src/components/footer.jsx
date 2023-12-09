// Footer.js
import React from 'react';
import '../Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>CONTENTS</h3>
          <ul>
            <li><button>PROFILE</button></li>
            <li><button>NEWS</button></li>
            <li><button>SCHEDULE</button></li>
            <li><button>DISCOGRAPHY</button></li>
            <li><button>SPECIAL</button></li>
            <li><button>FAN CLUB</button></li>
            <li><button>MOBILE</button></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>FAN CLUB</h3>
          <ul>
            <li><button>ONCE JAPAN</button></li>
            <li><button>ONCE JAPAN MOBILE</button></li>
            <li><button>ONCE W MEMBER</button></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>LINK</h3>
          <ul>
            <li><button>Twitter</button></li>
            <li><button>Instagram</button></li>
            <li><button>LINE</button></li>
            <li><button>YouTube</button></li>
  
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Twice 2023. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
