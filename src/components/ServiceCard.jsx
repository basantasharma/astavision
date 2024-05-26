import React from "react";

const ServiceCard = () => {
  return (
    <div className="bg-gradient-to-b from-white to-slate-900 p-[1px]  rounded-xl">
      <div className="w-[450px] backdrop-blur-[150px] items-center justify-center bg-slate-900 h-auto min-h-[400px]   px-5 rounded-xl text-white py-6 flex flex-col  space-y-10">
        <h1 className="text-center text-pink-300 font-semibold text-[22px]">
          Title
        </h1>
        <h3 className="text-center">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        </h3>
        <button className="mx-auto p-2 border-4 border-white rounded-xl ">
          {" "}
          Read More
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
