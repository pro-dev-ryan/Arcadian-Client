import React from "react";
import useTitle from "../../../Hooks/useTitle";
import Hero from "./sections/Hero";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
