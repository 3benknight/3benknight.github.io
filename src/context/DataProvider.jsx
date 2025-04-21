// src/context/DataProvider.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import Papa from 'papaparse';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [totalCO2Data, setTotalCO2Data] = useState(null);
  const [campusData, setCampusData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/data/Total_co2.csv').then(res => res.text()),
      fetch('/data/campus.csv').then(res => res.text())
    ])
      .then(([totalCO2Text, campusText]) => {
        Papa.parse(totalCO2Text, {
          header: true,
          dynamicTyping: true,
          complete: (result) => {
            setTotalCO2Data(result);
          }
        });
        Papa.parse(campusText, {
          header: true,
          dynamicTyping: true,
          complete: (result) => {
            setCampusData(result);
          }
        });
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching CSV data:', error);
        setLoading(false);
      });
  }, []); // empty dependency array ensures this runs only once

  return (
    <DataContext.Provider value={{ totalCO2Data, campusData, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
