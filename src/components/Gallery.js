// src/components/Gallery.js

import React from 'react';
import './gallery.css'; // Include your CSS file here
import out from "./assets/out.jpg"
import ayodhya from "./assets/ayodhya.webp"
import large from "./assets/large.jpg"
import palash from "./assets/palash.webp"
import small from "./assets/small.jpg"
import baranti from "./assets/baranti.webp"
import recep from "./assets/recep.jpg"
import flower from "./assets/flower.jpg"
import room1 from "./assets/room1.jpg"
import mithon from "./assets/mithonDam.webp"

const Gallery = () => {
  return (
    <section id="gallery">
      <div className="about__content">
        <p className="section__subheader" style={{ textAlign: 'center' }}>GALLERY</p>
      </div>
      <div className="container11">
        <div className="box11 a"><img src={out} alt="" /></div>
        <div className="box11 b"><img src={ayodhya} alt="" /></div>
        <div className="box11 c"><img src={large} alt="" /></div>
        <div className="box11 d"><img src={palash} alt="" /></div>
        <div className="box11 e"><img src={small} alt="" /></div>
        <div className="box11 f"><img src={baranti} alt="" /></div>
        <div className="box11 g"><img src={recep} alt="" /></div>
        <div className="box11 h"><img src={flower} alt="" /></div>
        <div className="box11 i"><img src={room1} alt="" /></div>
        <div className="box11 j"><img src={mithon} alt="" /></div>
        
      </div>
    </section>
  );
};

export default Gallery;
