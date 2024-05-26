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
          {/* <div className="h-[30rem] lg:h-[40rem] xl:h-[30rem] w-full object-cover fill-blue-400">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="212.000000pt" height="164.000000pt" viewBox="0 0 212.000000 164.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,164.000000) scale(0.100000,-0.100000)">
                <path d="M741 1568 c-16 -35 -79 -171 -141 -303 -62 -132 -130 -277 -151 -323 l-38 -83 145 3 146 3 77 170 c43 94 82 170 86 170 5 0 137 -268 295 -595 l288 -595 331 -3 331 -2 0 575 0 575 -130 0 -130 0 0 -439 0 -439 -106 -7 c-58 -4 -109 -4 -114 1 -5 5 -157 310 -338 679 l-330 670 -96 3 -97 3 -28 -63z"/>
                <path d="M1850 1490 l0 -140 130 0 130 0 0 140 0 140 -130 0 -130 0 0 -140z"/>
                <path d="M282 618 c-100 -217 -275 -594 -279 -600 -2 -5 183 -8 411 -8 l415 0 90 160 91 160 -62 142 c-34 79 -67 149 -74 157 -11 12 -19 1 -52 -70 -22 -46 -63 -132 -90 -192 l-51 -107 -135 0 -135 0 19 43 c10 23 52 114 93 202 41 88 74 161 73 161 0 1 -65 5 -143 9 l-142 7 -29 -64z"/>
                </g>
            </svg>
            <div className="font-poetsen size-">
            AstaVision Infosys
            </div>
          </div> */}
          <img
            className="h-[20rem] lg:h-[25rem] xl:h-[25rem] w-full object-cover"
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
