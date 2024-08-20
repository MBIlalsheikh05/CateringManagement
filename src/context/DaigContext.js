// src/context/DaigContext.js
import React, { createContext, useState } from 'react';

export const DaigContext = createContext();

export const DaigProvider = ({ children }) => {
  const [daigs, setDaigs] = useState([]);

  const addDaig = (daig) => {
    setDaigs([...daigs, daig]);
  };

  const deleteDaig = (id) => {
    setDaigs(daigs.filter((daig) => daig.id !== id));
  };

  const trackDaigStatus = (daig, status) => {
    // Logic to track Daig status
  };

  const allocateDaig = (daig, allocation) => {
    // Logic to allocate Daig
  };

  return (
    <DaigContext.Provider value={{ daigs, addDaig, deleteDaig, trackDaigStatus, allocateDaig }}>
      {children}
    </DaigContext.Provider>
  );
};
