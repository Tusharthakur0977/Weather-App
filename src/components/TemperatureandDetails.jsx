import React, { useContext } from "react";
import {
  UilArrowDown,
  UilArrowUp,
  UilSun,
  UilSunset,
  UilTemperature,
  UilTear,
  UilWind,
} from "@iconscout/react-unicons";
import { Context } from "../context/Context";
import { formatToLocalTime, iconUrlFromCode } from "../Services/WeatherService";
const TemperatureandDetails = () => {
  const { weather, units } = useContext(Context);

  return (
    <div>
      <div className="flex items-center justify-center py-3 text-cyan-300">
        <p>{weather?.details}</p>
      </div>
      <div className="flex items-center justify-between px-3 text-white">
        <img
          src={`images/weather-type/${weather?.details}.png`}
          alt={weather?.details}
          className="w-[5.5rem]"
        />
        <p className="flex flex-col text-white text-[2.5rem] ml-16">
          {weather?.temp.toFixed()}° {units === "metric" ? "C" : "F"}
        </p>
        <div className="flex flex-col justify-center items-start text-sm">
          <div className="flex justify-center items-center">
            <UilTemperature size={18} className="m-1" />
            <p className="font-extralight">Real Fell :</p>
            <span className="font-medium m-1">
              {weather?.feels_like.toFixed()}°
            </span>
          </div>
          <div className="flex justify-center items-center">
            <UilTear size={18} className="m-1" />
            <p className="font-extralight">Humidity :</p>
            <span className="font-medium m-1">{weather?.humidity}%</span>
          </div>
          <div className="flex justify-center items-center">
            <UilWind size={18} className="m-1" />
            <p className="font-extralight">Wind :</p>
            <span className="font-medium m-1">{weather?.speed} km/hr</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-3 mt-5 text-white">
        <div className="flex justify-center items-center">
          <UilSun className="mr-1 text-yellow-400" />
          <p className="mr-1 font-extralight">Rise</p>
          <p className="font-medium">
            {formatToLocalTime(
              Number(weather?.sunrise),
              weather?.timezone,
              "hh:mm a"
            )}
          </p>
        </div>
        <span>|</span>
        <div className="flex justify-center items-center">
          <UilSunset className="mr-1 text-yellow-400" />
          <p className="mr-1 font-extralight">Set</p>
          {formatToLocalTime(
            Number(weather?.sunset),
            weather?.timezone,
            "hh:mm a"
          )}
          <p className="font-medium"></p>
        </div>
        <span>|</span>

        <div className="flex justify-center items-center">
          <UilArrowUp className="mr-1 " />
          <p className="mr-1 font-extralight">High</p>
          <p className="font-medium">{weather?.temp_max.toFixed()}°</p>
        </div>
        <span>|</span>
        <div className="flex justify-center items-center">
          <UilArrowDown className="mr-1 " />
          <p className="mr-1 font-extralight">Low</p>
          <p className="font-medium">{weather?.temp_min.toFixed()}°</p>
        </div>
      </div>
    </div>
  );
};

export default TemperatureandDetails;
