import React from "react";
import "./spinner.css";

export const Spinner = () => {
  return (
    <div
      className="container"
      style={{
        height: "auto",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="loader bg-transparent " style={{ color: "black" }}>
        Loading...
      </div>
    </div>
  );
};
