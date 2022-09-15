import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { Context } from "../context/Context";
import { formatToLocalTime } from "../Services/WeatherService";

const Forecast = ({ type, forecast }) => {
  const { weather } = useContext(Context);
  useEffect(() => {
    // console.log(type);
  }, []);
  // console.log(type);

  return (
    <div className="py-4 flex flex-col mb-3">
      <div className="items-center borderbl pb-2 mb-2 justify-start">
        <p className="text-lg border-b-2  text-white">{forecast} FORECAST</p>
      </div>
      <div className="flex justify-between text-white font-light">
        { type?.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center  "
            >
              <p>{item.title}</p>
              <img
                src="images\cloud-sun-removebg-preview.png"
                alt="Ooops"
                className="w-20"
              />
              <p className="font-medium">{item.temp.toFixed()}°</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;
