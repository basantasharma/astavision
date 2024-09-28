import React from "react";
import Info from "../section/About";

const About = () => {
  return (
    <section className="text-gray-700 body-font">
      <Info />
      <div className="flex justify-center mt-10 text-4xl font-regular">
        Why Us?
      </div>
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap text-center justify-center">
          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <img
                  src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp"
                  className="w-32 mb-3"
                  alt=""
                />
              </div>
              <h2 className="title-font font-regular text-2xl text-gray-900">
                Latest Technology
              </h2>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <img
                  src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp"
                  className="w-32 mb-3"
                  alt=""
                />
              </div>
              <h2 className="title-font font-regular text-2xl text-gray-900">
                Reasonable Rates
              </h2>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <img
                  src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp"
                  className="w-32 mb-3"
                  alt=""
                />
              </div>
              <h2 className="title-font font-regular text-2xl text-gray-900">
                Time Efficiency
              </h2>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <img
                  src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp"
                  className="w-32 mb-3"
                  alt=""
                />
              </div>
              <h2 className="title-font font-regular text-2xl text-gray-900">
                Expertise in Industry
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
