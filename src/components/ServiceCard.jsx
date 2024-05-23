import React from "react";

const ServiceCard = () => {
  return (
    <div className="w-[300px]   h-[400px] bg-black px-5 rounded-lg text-white py-6 flex flex-col  space-y-5">
      <h1 className="text-center font-semibold text-[22px]">Title</h1>
      <h3 className="text-center">
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit
        nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
      </h3>
      <button className="mx-auto p-2 border-4 border-white rounded-xl ">
        {" "}
        Read More
      </button>
    </div>
  );
};

export default ServiceCard;
