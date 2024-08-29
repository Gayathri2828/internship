//// src/components/Header.js

//import React from 'react';
//import './header.css'; // Include your CSS file here

//const Header = () => {
//  return (
//    <header className="header">
//      <nav>
//        <div className="nav__bar">
//          <div className="logo">
//            <a href="https://wa.link/at5ion">
//              <span style={{ color: 'aliceblue' }}>Kingsukh Guest House</span>
//            </a>
//          </div>
//          <div className="nav__menu__btn" id="menu-btn">
//            <i className="ri-menu-line"></i>
//          </div>
//        </div>
//        <ul className="nav__links" id="nav-links">
//          <li><a href="#home">Home</a></li>
//          <li><a href="#about">About</a></li>
//          <li><a href="#service">Services</a></li>
//          <li><a href="#rooms">Rooms</a></li>
//          <li><a href="#gallery">Gallery</a></li>
//          <li><a href="#contact">Contact</a></li>
//        </ul>
//        <a href="https://wa.link/at5ion">
//          <button className="btn nav__btn">BOOK NOW</button>
//        </a>
//      </nav>
//      <div className="section__container header__container" id="home">
//        <p>Simple - Unique - Friendly</p>
//        <h1>Make Yourself At Home<br />In Our <span>Guest House</span>.</h1>
//      </div>
//    </header>
//  );
//};

//export default Header;



// Header.js
import React from 'react';
import './header.css';
import ayodhya from './assets/ayodhya.webp';

function Header() {
  return (
    <header className="header" style={{ backgroundImage: `url(${ayodhya})` }}>
      <nav>
        <div className="logo">
          <a href="#">Kingsukh Guest House</a>
        </div>
        <ul className="nav__links">
          <li><a href="#about">About</a></li>
          <li><a href="#rooms">Rooms</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="header__container">
        <h1>Welcome to <span>Your Stay</span></h1>
        <p>Your comfort, our priority</p>
        <a className="btn" href="#rooms">Book Now</a>
      </div>
    </header>
  );
}

export default Header;

