import React, { useState, useEffect } from 'react';
import './Vizsections.css';

const sections = [
  {
    id: 1,
    title: 'Energy Consumption and Performance by Building Type',
    text: 'a few sentences write-up, motivation/explanation. why this part is important',
    vizs: [
      { placeholderId: 'viz1745940021152', name: 'TYPEDASH3' }
    ],
    desc: 'description: of parameters, chart types, rationale (i.e. why building marks not labeled). reminder of interactivity (can probably be copy/pasted)'
  },
  {
    id: 2,
    title: 'Analyzing the Effect of Building Age',
    text: 'a few sentences write-up, motivation/explanation. why this part is important',
    vizs: [
      { placeholderId: 'viz1745940183712', name: 'AGETYPEDASH2' },
      { placeholderId: 'viz1745940144756', name: 'AGETYPEDASH1' }
    ],
    desc: 'description: of parameters, chart types, rationale (i.e. why building marks not labeled). reminder of interactivity (can probably be copy/pasted)'
  },
  {
    id: 3,
    title: 'Energy Patterns Over Time',
    text: 'a few sentences write-up, motivation/explanation. why this part is important',
    vizs: [
      { placeholderId: 'viz1745941143502', name: 'TSDASH1' },
      { placeholderId: 'viz1745942032833', name: 'TSDASH2' },
      { placeholderId: 'viz1745941578818', name: 'TSDASH3' }
    ],
    desc: 'description: of parameters, chart types, rationale (i.e. why building marks not labeled). reminder of interactivity (can probably be copy/pasted)'
  },
  {
    id: 4,
    title: 'Factoring in Renovation Costs',
    text: 'a few sentences write-up, motivation/explanation. why this part is important',
    vizs: [
      { placeholderId: 'viz1746039795676', name: 'RENOVATIONDASH2_1' }
    ],
    desc: 'description: of parameters, chart types, rationale (i.e. for log scale). reminder of interactivity (can probably be copy/pasted)'
  }
];

export default function VizSections() {
  const [active, setActive] = useState(
    sections.reduce((acc, s) => ({ ...acc, [s.id]: 'Viz' }), {})
  );

  // load Tableau JS API once
  useEffect(() => {
    const s = document.createElement('script');
    s.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <>
      {sections.map(sec => (
        <section key={sec.id} className="tableau-section">
          <h2 className="section">{sec.title}</h2>
          <p className="paragraph">{sec.text}</p>

          <div className="tab">
            <button
              className={`tablinks ${active[sec.id] === 'Viz' ? 'active' : ''}`}
              onClick={() => setActive(a => ({ ...a, [sec.id]: 'Viz' }))}
            >
              Visuals
            </button>
            <button
              className={`tablinks ${active[sec.id] === 'Desc' ? 'active' : ''}`}
              onClick={() => setActive(a => ({ ...a, [sec.id]: 'Desc' }))}
            >
              Description
            </button>
          </div>

          {/* VIZ: always mounted, just hidden/shown via CSS */}
          <div
            className="tabcontent vizTab"
            style={{
              display: active[sec.id] === 'Viz' ? 'flex' : 'none'
            }}
          >
            <h3>consider a better dashboard (optimal size/spacing), additional/replacement visuals</h3>
            {sec.vizs.map(v => (
              <div
                key={v.placeholderId}
                className="tableauPlaceholder"
                id={v.placeholderId}
              >
                <noscript>
                  <a href="#">
                    <img
                      alt={`${v.name}`}
                      src={`https://public.tableau.com/static/images/UM/UMDCo22025/${v.name}/1_rss.png`}
                      style={{ border: 'none' }}
                    />
                  </a>
                </noscript>
                <object className="tableauViz">
                  <param name="device" value="desktop" />
                  <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
                  <param name="embed_code_version" value="3" />
                  <param name="site_root" value="" />
                  <param name="name" value={`UMDCo22025/${v.name}`} />
                  <param name="tabs" value="no" />
                  <param name="toolbar" value="yes" />
                  <param
                    name="static_image"
                    value={`https://public.tableau.com/static/images/UM/UMDCo22025/${v.name}/1.png`}
                  />
                  <param name="animate_transition" value="yes" />
                  <param name="display_static_image" value="yes" />
                  <param name="display_spinner" value="yes" />
                  <param name="display_overlay" value="yes" />
                  <param name="display_count" value="yes" />
                  <param name="language" value="en-US" />
                </object>
              </div>
            ))}
          </div>

          {/* DESC: always mounted, hidden/shown */}
          <div
            className="tabcontent descTab"
            style={{
              display: active[sec.id] === 'Desc' ? 'block' : 'none'
            }}
          >
            <p className="paragraph">{sec.desc}</p>
          </div>
        </section>
      ))}
    </>
  );
}
