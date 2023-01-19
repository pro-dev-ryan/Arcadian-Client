import React from "react";
import { motion as m } from "framer-motion";

const ConsoleNews = () => {
  const titleVariant = {
    hide: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.3 },
    },
  };

  const videoVariant = {
    hide: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, type: "spring", stiffness: 200, damping: 7 },
    },
  };

  return (
    <div className="mx-8 my-16">
      <m.h2
        variants={titleVariant}
        initial="hide"
        whileInView="show"
        className="mb-5"
      >
        What is Coming Soon???
      </m.h2>
      <m.div
        variants={videoVariant}
        initial="hide"
        whileInView="show"
        className="w-full flex flex-col items-center"
      >
        <iframe
          className="md:w-3/5"
          height="450px"
          src="https://www.youtube.com/embed/sX_sQXfvg5s"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </m.div>
    </div>
  );
};

export default ConsoleNews;
