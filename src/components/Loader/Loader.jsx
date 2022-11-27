import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="bg-primary w-full h-[100vh]">
      <div className="loader">
        <div className="inner"></div>
      </div>
    </div>
  );
};

export default Loader;
