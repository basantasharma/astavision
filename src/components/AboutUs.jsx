import React from "react";

const AboutUs = () => {
  return (
    <div className="py-10 px-10" id="about">
      <h1 className="text-7xl text-[#06091f] font-extrabold text-center ">
        ABOUT US
      </h1>
      <div className="flex flex-col text-center lg:text-left gap-y-5 items-end lg:flex-row lg:items-start  py-20 space-x-20 max-w-7xl xl:mx-auto   w-full ">
        <div className="md:flex-1 w-full">
          <h1 className="text-[22px] tracking-wide  leading-7">
            {" "}
            Astavision Infosys is a reputable and innovative IT company that specializes in providing cutting-edge solutions and services to businesses worldwide. With a strong focus on technology-driven advancements, We help organizations leverage the power of information technology to streamline operations, enhance productivity, and achieve their business goals.We are a forward-thinking IT company that provides comprehensive and customized solutions to businesses seeking to leverage the power of technology. With our expertise, dedication, and focus on customer satisfaction, We help organizations drive growth, efficiency, and success in the digital era.
          </h1>
        </div>
        <div className="w-full md:flex-1">
          <img
            className="h-[30rem] lg:h-[40rem] xl:h-[30rem] w-full object-cover"
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
