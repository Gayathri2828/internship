// src/components/Footer.js

import React from 'react';
import './footer.css'; // Include your CSS file here

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; 2024 Kingsukh Guest House. All Rights Reserved.</p>
        <ul className="social__links">
          <li><a href="#"><i className="ri-facebook-circle-fill"></i></a></li>
          <li><a href="#"><i className="ri-instagram-fill"></i></a></li>
          <li><a href="#"><i className="ri-twitter-fill"></i></a></li>
         
        </ul>
        
      </div>
    </footer>
  );
};

export default Footer;
