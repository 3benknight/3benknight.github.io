import React from 'react';
import 'leaflet/dist/leaflet.css';
import './App.css';
import img1 from './assets/home_img_1_umd.jpg';
import img2 from './assets/home_img_2_umd.jpg';

function App() {
  return (
    <div className="App">
      <div className="bg-container">
        <section
          className="bg-section"
          style={{ backgroundImage: `url(${img1})` }}
        >
          <div className="overlay">
            <div className="text-block">
              <h1>UMD Building Emissions through Time</h1>
              <p>Understanding UMD's past emissions patterns to pave a greener future.</p>
            </div>
          </div>
        </section>

        <section
          className="bg-section"
          style={{ backgroundImage: `url(${img2})` }}
        >
          <div className="overlay">
            <div className="text-block">
              <p>
                UMD began in 1856 as an agricultural college, built on the site of a former plantation.
                The early college consisting of several small buildings predominantly dedicated 
                to the instruction and support of agriculture studies.
                The oldest building still standing, Morris Hall, was built in 1898.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="tableau-container">
        <iframe
          title="UMD Co2 2025 Dashboard"
          src="https://public.tableau.com/views/UMDCo22025/TYPEDASH3?:embed=y&:showVizHome=no"
          width="100%"
          height="100vh"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default App;