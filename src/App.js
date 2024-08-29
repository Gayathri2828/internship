// src/App.js

import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Rooms from './components/Rooms';
import Services from './components/services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Map from './components/Map';
import Footer from './components/Footer';

import './App.css'; // Main CSS file

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Rooms />
      <Services />
      <Gallery />
      <Contact />
      <Map/>
      <Footer />
    </div>
  );
}

export default App;
