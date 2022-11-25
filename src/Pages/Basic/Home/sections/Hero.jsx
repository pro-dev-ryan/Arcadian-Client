import React from "react";

const Hero = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80")`,
      }}
    >
      <div className="hero-overlay bg-neutral bg-opacity-80"></div>
      <div className="hero-content text-center lg:my-52">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-base-100">Hello there</h1>
          <p className="mb-5 text-secondary">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn-prime">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
