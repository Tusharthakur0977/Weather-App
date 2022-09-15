import React, { useContext } from "react";
import { Context } from "../context/Context";

const TopButtons = () => {
  const { place, setPlace } = useContext(Context);
  const cities = [
    {
      id: 1,
      title: "Delhi",
    },
    {
      id: 2,
      title: "Kolkata",
    },
    {
      id: 3,
      title: "Mumbai",
    },
    {
      id: 4,
      title: "Chennai",
    },
    {
      id: 5,
      title: "Himachal Pradesh",
    },
    {
      id: 6,
      title: "Chandigarh",
    },
  ];

  const handleTopButton = (e) => {
    setPlace({ q: e.target.value });
  };
  // console.log(place);

  return (
    <div className="flex items-center justify-between my-2 ">
      {cities.map((city) => {
        return (
          <button
            key={city.id}
            value={city.title}
            onClick={handleTopButton}
            className="flex gap-4 text-white text-lg font-normal space-x-3 ease-in-out transition hover:font-medium hover:scale-105"
          >
            {city.title}
          </button>
        );
      })}
    </div>
  );
};

export default TopButtons;
