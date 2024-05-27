import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="mt-5 bg-gradient-to-b from-white to-slate-900 p-[1px]  rounded-xl">
      <div className=" backdrop-blur-[150px] items-center justify-center bg-slate-900 h-auto min-h-[400px]   px-5 rounded-xl text-white py-6 flex flex-col  space-y-10">
        <h1 className="text-center text-pink-300 font-semibold text-[22px]">
          {title}
        </h1>
        <h3 className="text-center">{description}</h3>
        <Link to={`/${title}`}>
          <button className="mx-auto p-2 border-4 border-white rounded-xl ">
            {" "}
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
