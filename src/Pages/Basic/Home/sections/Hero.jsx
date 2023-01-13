import React from "react";
import { Link } from "react-router-dom";
import home from "../../../../assets/Arcade.mp4";
import { motion as m } from "framer-motion";

const Hero = () => {
  return (
    <m.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="hero"
    >
      <video src={home} autoPlay loop muted width="100%"></video>
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content text-center lg:my-52 overflow-hidden">
        <m.div
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          className="max-w-md"
        >
          <m.h1
            initial={{ y: "-100px" }}
            animate={{ y: 0 }}
            transition={{ delay: 1 }}
            className="mb-5 text-5xl font-bold text-base-100"
          >
            Hey Freaks!
          </m.h1>
          <m.p
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1.5 }}
            className="mb-5 text-secondary"
          >
            Need to replace old console, Any gear that enhance Enjoyment or
            Looking For New Games In The market? All Collection is Updated on
            every night. Check out new Freakout Offer Now.
          </m.p>
          <Link to="/shop">
            <m.button
              initial={{ rotateZ: 360, opacity: 0 }}
              animate={{ rotateZ: 0, opacity: 1 }}
              transition={{ delay: 2 }}
              className="btn-prime"
            >
              See Collections
            </m.button>
          </Link>
        </m.div>
      </div>
    </m.div>
  );
};

export default Hero;
