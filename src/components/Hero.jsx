import React from "react";

const Hero = () => {
  return (
    <div className="gradient flex gap-y-20 flex-col justify-start items-center py-20 w-full h-full ">
      <section className="text-white flex flex-col gap-y-10 font-bold text-5xl text-center tracking-wider">
        <h1 className="text-7xl font-poetsen tracking-wider">TRANSFORMING</h1>
        <h1 className="italic">
          CHALLENGES <span className="text-pink-400  ">INTO</span>
        </h1>
        <h1 className="text-7xl font-poetsen">OPPORTUNITIES</h1>
      </section>
      <section>
        <p className="text-white text-xl">
          {" "}
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
      </section>
      <section></section>
    </div>
  );
};

export default Hero;
