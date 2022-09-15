import React, { useState, useContext, useEffect } from "react";
import { Spinner } from "./components/Spinner/Spinner";
import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import CurrentDateandLocation from "./components/CurrentDateandLocation";
import TemperatureandDetails from "./components/TemperatureandDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./Services/WeatherService";
import { Context } from "./context/Context";
function App() {
  const { place, units, weather, setWeather, setLoader, loader } =
    useContext(Context);

  const [hot, setHot] = useState("hot");
  const [cool, setCool] = useState("cool");

  const threshold = units === "metric" ? 30 : 60;
  useEffect(() => {
    if (place.q !== "") {
      setLoader(true);
      const fetchWeather = async () => {
        await getFormattedWeatherData({ ...place, units }).then((data) => {
          setTimeout(() => {
            setWeather(data);
            setLoader(false);
          }, 2000);
        });
      };

      fetchWeather();
    }
  }, [place, units]);
  console.log(weather);

  return (
    <>
      <div
        className={`mx-auto max-w-screen-xxl h-screen ${weather?.temp <30 ? 'bg-cool' :'bg-hot'} bg-fixed bg-cover bg-center py-3 px-32  `}
      >
        <div
          style={{
            backdropFilter: "blur(6px) saturate(200%)",
            backgroundColor: "rgba(17, 25, 40, 0.69)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
          className="h-full px-12 py-3 backf"
        >
          <TopButtons />
          <Inputs />

          {place.q !== "" ? (
            loader ? (
              <div className="mt-60">
                <Spinner />
              </div>
            ) : (
              <div>
                <CurrentDateandLocation />
                <TemperatureandDetails />
                <Forecast forecast="HOURLY " type={weather?.hourly} />
                <Forecast forecast="DAILY " type={weather?.daily} />
              </div>
            )
          ) : (
            <>
              <div className="flex flex-col justify-center items-center m-60">
                <p className="text-4xl text-white font-thin">
                  Select a place from above listed
                </p>
                <p className="text-4xl text-white font-thin">OR</p>
                <p className="text-4xl text-white font-thin">
                  Search Your Place
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
