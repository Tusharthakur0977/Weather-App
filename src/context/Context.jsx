import React, { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [place, setPlace] = useState({ q: "" });
  const [country, setCountry] = useState();
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [loader, setLoader] = useState(false);
  return (
    <Context.Provider
      value={{
        loader,
        setLoader,
        place,
        setPlace,
        country,
        setCountry,
        units,
        setUnits,
        weather,
        setWeather,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
