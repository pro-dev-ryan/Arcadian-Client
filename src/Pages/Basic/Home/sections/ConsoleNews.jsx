import React from "react";

const ConsoleNews = () => {
  return (
    <div className="mx-8 my-16">
      <h2 className="mb-5">What is Coming soon???</h2>
      <div className="w-full flex flex-col items-center">
        <iframe
          className="md:w-3/5"
          height="450px"
          src="https://www.youtube.com/embed/sX_sQXfvg5s"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ConsoleNews;
