import React, { useState, useContext } from 'react';

export const PortfolioContext = React.createContext();

export const usePortfolio = () => useContext(PortfolioContext);

export default function PortfolioProvider({ children }) {

  const [activePage, setActivePage] = useState('Nature');
  
  return (
    <PortfolioContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </PortfolioContext.Provider>
  );
}