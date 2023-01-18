import React from "react";
import { Link } from "react-router-dom";
import home from "../../../../assets/Arcade.mp4";
import { motion as m } from "framer-motion";

const Hero = () => {
  const viewVariants = {
    hide: {
      opacity: 0,
      skewX: 45,
    },
    show: {
      opacity: 1,
      skewX: 0,
      transition: { duration: 0.4 },
    },
  };

  const textVariants = {
    hide: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, staggerDelay: 0.6, staggerChildren: 0.8 },
    },
  };
  const buttonVariants = {
    hide: {
      opacity: 0,
      rotateZ: 360,
    },
    show: {
      opacity: 1,
      rotateZ: 0,
      transition: { when: "afterParent", delay: 1.2 },
    },
  };

  return (
    <m.div
      variants={viewVariants}
      initial="hide"
      whileInView="show"
      className="hero pb-5"
    >
      <video src={home} autoPlay loop muted width="100%"></video>
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content text-center lg:my-52 overflow-hidden">
        <m.div
          variants={textVariants}
          initial="hide"
          whileInView="show"
          className="max-w-lg pb-5"
        >
          <m.h1
            variants={textVariants}
            className="mb-5 text-5xl font-bold text-base-100"
          >
            Hey Freaks!
          </m.h1>
          <m.p variants={textVariants} className="mb-5 text-secondary">
            Need to replace old console, Any gear that enhance Enjoyment or
            Looking For New Games In The market? All Collection is Updated on
            every night. Check out new Freakout Offer Now.
          </m.p>
          <Link to="/shop">
            <m.button variants={buttonVariants} className="btn-prime">
              <div className="p-2 cursor-pointer custom rounded-xl bg-[#572435]">
                See Collections
              </div>
            </m.button>
          </Link>
        </m.div>
      </div>
    </m.div>
  );
};

export default Hero;
