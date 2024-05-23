import React from "react";

const AboutUs = () => {
  return (
    <div className="py-10 px-10">
      <h1 className="text-7xl text-[#06091f] font-extrabold text-center ">
        ABOUT US
      </h1>
      <div className="flex flex-col text-center lg:text-left gap-y-5 items-end lg:flex-row lg:items-start  py-20 space-x-20 max-w-7xl xl:mx-auto   w-full ">
        <div className="md:flex-1 w-full">
          <h1 className="text-[22px] tracking-wide  leading-7">
            {" "}
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui
            minim labore adipisicing minim sint cillum sint consectetur
            cupidatat. Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia. Sit irure elit esse ea nulla sunt ex occaecat
            reprehenderit commodo officia dolor Lorem duis laboris cupidatat
            officia voluptate. Culpa proident adipisicing id nulla nisi laboris
            ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
            ex non excepteur duis sunt velit enim. Voluptate laboris sint
            cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
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
