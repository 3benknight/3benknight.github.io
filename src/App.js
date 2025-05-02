import React from 'react';
import 'leaflet/dist/leaflet.css';
import './App.css';
import img1 from './assets/home_img_1_umd.jpg';
import img2 from './assets/home_img_2_umd.jpg';
import img3 from './assets/home_img_3_umd.jpg';
import VizSections from './components/Vizsections';

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
              <h1>Campus Energy Efficiency</h1>
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
              One of the most important aspects of any institution is its environmental sustainability. As efforts continue to grow across the world, it is essential for universities, such as the University of Maryland, College Park, to keep pace. A key consideration for sustainability is the efficiency of energy consumption and healthiness of carbon dioxide emissions. However, identifying areas for improvement is often complex and time-consuming, requiring facility managers to sort through large amounts of data and reconcile various factors. This interface aims to expedite and simplify this process by compiling several dashboards, allowing users to quickly gain an understanding of previously unorganized data while analyzing the effect of several confounds on energy efficiency.
              </p>
            </div>
          </div>
        </section>

        <section
          className="bg-section"
          style={{ backgroundImage: `url(${img3})` }}
        >
          <div className="overlay">
            <div className="text-block">
              <p>
              The page is navigated by scrolling through the sections organized by the corresponding operative tasks. Each visualization is accompanied with a description tab which provides the user with background and parameter information, chart explanation, and reminders for interactivity features. Such features allow the user to hover over marks to identify specific buildings, filter buildings individually or by type, and specify ranges for energy efficiency metrics. These options provide flexibility to simplify the visualizations. Also, many charts utilize pages that can be flipped through as a convenient way of sorting the data, a process that simultaneously controls for the aforementioned confounds. These features provide an efficient means for facility managers to identify buildings requiring renovation or additional conservational measures. It is easily extendable to external data sets with information at the building level, though this working model uses Tableau's back-end servers to host the data.
              </p>
            </div>
          </div>
        </section>
        <VizSections />
      </div>
    </div>
  );
}

export default App;