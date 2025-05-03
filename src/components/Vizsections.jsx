import React, { useState, useEffect } from 'react';
import './Vizsections.css';

const sections = [
  {
    id: 1,
    title: 'Energy Consumption and Performance by Building Type',
    text: `This set of visualizations provides a multi-angle view of energy consumption and
performance across the UMD campus building portfolio, segmented by building type.
EUI difference is perhaps the most important metric from the data. Calculated as the
difference between the EPA benchmark EUI and actual EUI, positive values indicate a
building is performing well, while negative values suggest the opposite. This provides
an intuitive color encoding later on.`,
    vizs: [
      { placeholderId: 'viz1745940021152', name: 'TYPEDASH3' }
    ],
    desc: (
      <div>
        <p>This set of visualizations provides a multi-angle view of energy consumption and performance across the UMD campus building portfolio, segmented by building type.</p>
        <h4>Treemap (Top Left – Relative Energy Consumption Across Buildings):</h4>
        <p>This treemap visualizes individual buildings as proportional rectangles sized by total energy use. Larger blocks represent higher consumers. While specific building labels are limited to major contributors for clarity, users can hover over any segment to see detailed metrics. This layout helps identify energy-intensive buildings that may require investigation or intervention.</p>
        <h4>Box Plot (Top Right – Energy Performance by Building Type):</h4>
        <p>This chart shows the difference between each building’s actual Energy Use Intensity (EUI) and the benchmark value expected for its type.<br/>
EUI (Energy Use Intensity) is a standard metric representing a building’s energy use per square foot per year, typically expressed in kBtu/ft².<br/>
Negative values in the plot indicate buildings that outperform benchmarks (use less energy than expected), while positive values show underperformance. This helps detect systemic inefficiencies by type. Outliers are visualized but not labeled to reduce clutter—hover for detailed insight.</p>
        <h4>Bar Charts (Bottom – Average and Total Energy by Building Type):</h4>
        <p>These bar charts summarize energy use:</p>
        <strong>Average Total Energy:</strong> compares typical energy demand within each building type.
        <p/>
        <strong>Total Energy:</strong> reflects cumulative use, highlighting where institutional consumption is concentrated.
        <h4>Why Interactivity Matters:</h4>
        <p>Due to the dense nature of these datasets, not all building marks are labeled by default to maintain visual readability. However, all charts are interactive—hovering over any element reveals detailed tooltips with building names, values, and performance insights.</p>
      </div>
    )
  },
  {
    id: 2,
    title: 'Analyzing the Effect of Building Age',
    text: `This section explores how building age relates to energy efficiency and carbon impact across different building types at UMD. By connecting temporal characteristics with energy performance, these visualizations help prioritize which buildings should be targeted for retrofits or operational improvements.`,
    vizs: [
      { placeholderId: 'viz1746151220183', name: 'AGETYPEDASH2' },
      { placeholderId: 'viz1745940144756', name: 'AGETYPEDASH1' }
    ],
    desc: (
      <div>
        <p>This section explores how building age relates to energy efficiency and carbon impact across different building types at UMD. By connecting temporal characteristics with energy performance, these visualizations help prioritize which buildings should be targeted for retrofits or operational improvements.</p>
        <h4>Scatterplots (Top – Year Built vs Total CO₂ Emissions):</h4>
        <p>These charts show the total annual CO₂ emissions per building plotted against the year of construction. Each point is colored by EUI difference (benchmark minus actual), allowing for simultaneous interpretation of age, emissions, and performance.<br/>
A building type selector and interactive legend allow for narrowing the view to specific facility categories. The first version isolates one building type at a time, while the second aggregates across all types for comparison.<br/>
This helps identify high-impact older buildings, as well as newer buildings that may still be underperforming.</p>
        <h4>Dot Matrix Chart (Bottom – EUI Performance vs Building Age and Type):</h4>
        <p>This matrix-style visualization uses color and vertical alignment to represent EUI performance across building types and construction decades.<br/>
Each circle represents a building, positioned by year built and color-coded by EUI benchmark difference (orange = worse than benchmark, blue = better).<br/>
The interactive filters allow the user to isolate specific building names, types, or performance ranges. This visual is particularly useful for spotting systemic inefficiencies tied to specific time periods or facility functions.</p>
        <h4>Reminder on Interactivity:</h4>
        <p>To reduce clutter, building labels are not shown by default. However, hovering over any data point will reveal detailed information including the building name, total emissions, year built, and performance score. Users can filter by building type, performance threshold, or individual buildings using the control panel on the right.</p>
      </div>
    )
  },
  {
    id: 3,
    title: 'Energy Patterns Over Time',
    text: `This section provides time-based visual insights into monthly energy consumption at UMD, both at the portfolio and building-type levels. The goal is to uncover usage seasonality, performance anomalies, and relative contributions across years.`,
    vizs: [
      { placeholderId: 'viz1745941143502', name: 'TSDASH1', title: 'Overall Monthly Energy and by Building Type' },
      { placeholderId: 'viz1745942032833', name: 'TSDASH2', title: 'Average Monthly Energy' },
      { placeholderId: 'viz1746152412783', name: 'TSDASH3', title: 'Building-Level Energy' }
    ],
    desc: (
      <div>
        <p>This section provides time-based visual insights into monthly energy consumption at UMD, both at the portfolio and building-type levels. The goal is to uncover usage seasonality, performance anomalies, and relative contributions across years.</p>
        <h4>Line Charts (Top – Overall Monthly Energy and by Building Type):</h4>
        <p>The top chart visualizes total campus-wide monthly energy consumption with a smoothed moving average overlay to reveal seasonal and long-term patterns.<br/>
The second chart disaggregates these trends by building type (e.g., Labs, Offices, Classrooms), allowing users to see how each category contributes to total energy use over time.<br/>
These views help highlight periods of peak demand, seasonal fluctuations, and differences in stability between building types.</p>
        <h4>Stacked Bar Chart (Middle – Average Monthly Energy):</h4>
        <p>This chart shows the monthly average energy use for each building type, stacked by color. The consistent height of lab bars reflects their dominance in energy consumption, while other types show steadier, lower-level contributions.<br/>
Comparing months and years side by side allows for identifying anomalous usage spikes or dips across time.</p>
        <h4>Bump Chart (Bottom – Ranking of Average Monthly Energy):</h4>
        <p>This visual ranks building types by their monthly average energy use. It emphasizes changes in position over time (e.g., if Residential overtakes Office during a particular season).<br/>
Flat lines indicate stability; sudden jumps or drops in rank may signal operational or environmental changes worth exploring.</p>
        <h4>Multi-Line Chart (Last – Monthly Energy per Building with EUI Performance):</h4>
        <p>Focused on the "Lab" category, this chart displays monthly energy profiles for individual buildings. Each line is color-coded by EUI performance (benchmark minus actual), with warmer tones indicating worse-than-expected performance.<br/>
This visual enables users to identify poorly performing buildings that consume high energy consistently or show erratic seasonal variation.<br/>
Filters on the right allow users to isolate specific buildings, adjust EUI ranges, and explore year-by-year behavior.</p>
        <h4>Reminder on Interactivity:</h4>
        <p>These visuals are interactive: hover over any point or line to view precise values, and use filters (by year, UMD type, building name, or performance range) to narrow the focus. Building labels are intentionally hidden in dense charts to avoid clutter but can be revealed on demand.</p>
      </div>
    )
  },
  {
    id: 4,
    title: 'Factoring in Renovation Costs',
    text: `This section analyzes how renovation investments relate to energy performance across different building types. By examining Energy Use Intensity (EUI) differences alongside renovation costs, the dashboard supports value-based decision-making for energy retrofits.`,
    vizs: [
      { placeholderId: 'viz1746150246883', name: 'RENOVATIONDASH2_1' }
    ],
    desc: (
      <div>
        <p>This section analyzes how renovation investments relate to energy performance across different building types. By examining Energy Use Intensity (EUI) differences alongside renovation costs, the dashboard supports value-based decision-making for energy retrofits.</p>
        <h4>Pie Chart (Top Left – Proportion of Renovation Cost by Building Type):</h4>
        <p>This chart shows the distribution of total renovation costs across UMD building categories. It highlights which types (e.g., Labs, Offices) are receiving the largest share of investment. The pie format provides a quick understanding of financial allocation across the campus portfolio.</p>
        <h4>Dot Plot (Top Right – EUI Performance vs Renovation Cost by Type):</h4>
        <p>This scatterplot plots each building’s EUI difference (benchmark minus actual) against its renovation cost, color-coded by building type. It reveals how much has been spent on each facility and whether that investment corresponds with better (or worse) energy performance. This chart is helpful for identifying high-investment buildings that still underperform — critical for evaluating the return on energy-focused renovations.</p>
        <h4>Scatterplot (Bottom – EUI Difference vs Log Renovation Cost):</h4>
        <p>Focused on buildings classified as “Other,” this plot uses a log scale for renovation costs to better distinguish lower-cost projects. Each point represents a building and is shaded by EUI performance. The combination of log-transformed cost and performance differential helps isolate outliers: buildings that have spent significantly but still fall below benchmarks (or vice versa).</p>
        <h4>Reminder on Interactivity:</h4>
        <p>Users can filter by UMD Type and individual buildings, and hover over any point to view the exact EUI difference and cost. The bottom slider allows narrowing the range of EUI performance values for more focused analysis.</p>
        <h4>Insight Summary:</h4>
        <p>Laboratories account for the largest share of renovation spending, yet their energy performance varies widely—suggesting that high investment alone does not guarantee benchmark-level efficiency and that targeted performance tracking is essential.</p>
      </div>
    )
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
