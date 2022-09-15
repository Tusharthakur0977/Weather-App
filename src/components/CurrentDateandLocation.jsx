import React from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
import { formatToLocalTime } from "../Services/WeatherService";

const CurrentDateandLocation = () => {
  const { weather } = useContext(Context);
  // var d = new Date();
  // var days = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  // ];
  // var monthNames = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];
  // var dayName = days[d.getDay()];
  // var day = d.getDate();
  // var month = monthNames[d.getMonth()];
  // var year = d.getFullYear();

  // var formattedDate = `${dayName}, ${day} ${month} ${year} `;

  // var time = d.toLocaleTimeString();
  // var formattTime = `${time}`;
  return (
    <div>
      <div className="flex justify-center text-xl items-center font-extralight text-gray-200 tracking-wider">
        {formatToLocalTime(Number(weather?.dt), weather?.timezone)}
      </div>
      <div className="flex justify-center text-3xl items-center mt-4 text-gray-200 tracking-wider">
        {` ${weather?.name},  ${weather?.country}`}
      </div>
    </div>
  );
};

export default CurrentDateandLocation;
