import ServiceCard from "./ServiceCard";

const OurServices = () => {
  return (
    <div className="gradient mt-[-2px] py-5 pb-10">
      <h1 className="text-center text-6xl text-white font-extrabold">
        Our Services
      </h1>

      <div className="px-5 mt-[5rem] w-full grid grid-cols-1 lg:grid-cols-2  gap-5 place-items-center space-y-5  max-w-7xl xl:mx-auto mb-20 ">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default OurServices;
