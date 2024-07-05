import { createContext, useContext, useState } from "react";

const MarketDataContext = createContext<any>({});

export const MarketDataProvider = ({ children }) => {
  const [marketDate, setMarketDate] = useState(getCurrentDate());

  return (
    <MarketDataContext.Provider value={{ marketDate, setMarketDate }}>
      {children}
    </MarketDataContext.Provider>
  );
};



const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
};


export const useMarketData = () => {
  return useContext(MarketDataContext);
};
