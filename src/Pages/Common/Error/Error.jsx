import React from "react";
import { Link, useRouteError } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";
const Error = () => {
  const error = useRouteError();
  useTitle("404 Not Found");
  return (
    <div
      className="hero relative h-[100vh] lg:h-auto lg:my-3"
      style={{
        backgroundImage: `url(" https://images.hdqwalls.com/download/game-over-typography-4k-pz-1920x1080.jpg")`,
        backgroundSize: "cover",
      }}
    >
      {" "}
      <img
        className="lg:h-80 hidden lg:flex  absolute lg:right-[20%]"
        src="https://pngimg.com/uploads/wolverine/wolverine_PNG41.png"
        alt="wolverine"
      />
      <div className="hero-overlay bg-black bg-opacity-40"></div>
      <div className="hero-content text-center lg:my-44">
        <div className="flex flex-col gap-5">
          <h1 className="mb-5 lg:text-8xl md:text-6xl sm:text-4xl font-bold text-secondary">
            {error.status}
          </h1>
          <div className="lg:pt-10">
            <h3 className="mb-5 text-base-100">You Got The Wrong Way BuB</h3>
            <h5 className="text-secondary">
              {error?.message || error.statusText}
            </h5>
          </div>
          <div className="text-center">
            <Link to="/" className="btn-prime w-1/3">
              Go Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
