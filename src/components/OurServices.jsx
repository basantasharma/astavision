import React from "react";
import ServiceCard from "./ServiceCard";

const OurServices = () => {
  return (
    <div className="bg-[#a2d9ff] mt-[-2px] py-5">
      <h1 className="text-center text-6xl text-white font-extrabold">
        Our Services
      </h1>

      <div className="px-5 mt-[5rem] w-full flex  items-center space-x-5 justify-evenly flex-wrap space-y-5  max-w-7xl xl:mx-auto ">
        <ServiceCard />

        <ServiceCard />

        <ServiceCard />
      </div>
    </div>
  );
};

export default OurServices;
