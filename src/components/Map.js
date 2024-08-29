import React from 'react';
import './map.css';

const Map = () => (
  <div className="map-container">
    <iframe
      src="https://www.google.com/maps/embed?pb=..."
      width="100%"
      height="400"
      style={{ border: '0' }}
      allowFullScreen=""
      loading="lazy"
      title="Google Map"
    ></iframe>
  </div>
);

export default Map;