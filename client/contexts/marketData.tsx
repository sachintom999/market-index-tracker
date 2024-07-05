import { createContext, useContext, useState } from "react";

const MarketDataContext = createContext<any>({});

export const MarketDataProvider = ({ children }) => {
  const [marketDate, setMarketDate] = useState(new Date());

  return (
    <MarketDataContext.Provider value={{ marketDate, setMarketDate }}>
      {children}
    </MarketDataContext.Provider>
  );
};

export const useMarketData = () => {
  return useContext(MarketDataContext);
};
