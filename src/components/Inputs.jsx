import React, { useContext, useState } from "react";
import { UilSearch } from "@iconscout/react-unicons";
import { UilLocationPinAlt } from "@iconscout/react-unicons";
import { Context } from "../context/Context";

const Inputs = () => {
  const { place, setPlace, units, setUnits } = useContext(Context);
  const [inputWord, setInputWord] = useState("");

  const handleInput = (e) => {
    setInputWord(e.target.value);
  };

  const handleSearch = () => {
    if (inputWord == "") {
      return;
    } else {
      setPlace({ q: inputWord });
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setPlace({
          lat,
          lon,
        });
      });
    }
  };

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  return (
    <div className="flex flex-row my-6 justify-center items-center">
      <div className="flex flex-row justify-center w-3/4 space-x-4 items-center ">
        <input
          type="text"
          value={inputWord}
          onChange={handleInput}
          className="text-sm rounded w-full shadow-xl p-2 capitalize focus:outline-none font-light"
          placeholder="Search"
        />
        <UilSearch
          color="white"
          onClick={handleSearch}
          className="cursor-pointer transition ease-out hover:scale-125 "
        />
        <UilLocationPinAlt
          color="white"
          onClick={handleLocationClick}
          className="cursor-pointer transition ease-out hover:scale-125 "
        />
      </div>
      <div className="flex flex-row w-1/4 justify-center space-x-3 mb-1 ">
        <button
          name="metric"
          onClick={handleUnitsChange}
          className="text-xl text-white transition ease-out hover:scale-110"
        >
          °C
        </button>
        <p className="text-xl text-white ">|</p>
        <button
          name="imperial"
          onClick={handleUnitsChange}
          className="text-xl text-white transition ease-out hover:scale-105"
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
