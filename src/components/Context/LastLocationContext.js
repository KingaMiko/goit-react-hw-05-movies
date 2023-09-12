import React, { createContext, useContext, useState } from 'react';

const LastLocationContext = createContext();

export const useLastLocation = () => {
  const context = useContext(LastLocationContext);
  if (!context) {
    throw new Error(
      'useLastLocation must be used within a LastLocationProvider'
    );
  }
  return context;
};

export const LastLocationProvider = ({ children }) => {
  const [lastLocation, setLastLocation] = useState(null);
  const [lastSearchParams, setLastSearchParams] = useState(null);

  const value = {
    lastLocation,
    setLastLocation,
    lastSearchParams,
    setLastSearchParams,
  };

  return (
    <LastLocationContext.Provider value={value}>
      {children}
    </LastLocationContext.Provider>
  );
};
