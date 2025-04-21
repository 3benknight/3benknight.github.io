import React, { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import './App.css';
import img1 from './assets/home_img_1_umd.jpg';
import img2 from './assets/home_img_2_umd.jpg';

function App() {
  const [fade, setFade] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const fraction = Math.min(Math.max(scrollY / vh, 0), 1);
      setFade(fraction);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <div className="bg-container">
        <div
          className="bg-image"
          style={{ backgroundImage: `url(${img1})`, opacity: 1 - fade }}
        />
        <div
          className="bg-image"
          style={{ backgroundImage: `url(${img2})`, opacity: fade }}
        />
        <div className="overlay">
          {fade < 0.5 ? (
            <div className="text-block">
              <h1>UMD Building Emissions through Time</h1>
              <p>Understanding UMD's past emissions patterns to pave a greener future. </p>
            </div>
          ) : (
            <div className="text-block">
              <p>
                UMD began in 1856 as an agricultural college, built on the site of a former plantation.
                The early college consisting of several small buildings predominantly dedicated 
                to the instruction and support of agriculture studies.
                The oldest building still standing, Morris Hall, was built in 1898.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
