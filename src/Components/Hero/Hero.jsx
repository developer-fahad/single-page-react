import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/xSjDY2S/pexels-lilen-diaz-1025474869-28357744.jpg)",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-70"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Always be happy!</h1>
          <p className="mb-5 md:text-xl text-lg">
            Embrace every moment with positivity and joy. Happiness is not just
            a destination but a journey that begins with a mindset. Whether it's
            through growth, learning, or connection, let's cultivate an
            environment where every step forward brings a sense of fulfillment
            and peace.
          </p>
          <button className="btn bg-cyan-600 border-none hover:bg-cyan-700 md:text-xl text-lg text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
