import ServiceCard from "./ServiceCard";

const OurServices = () => {
  return (
    <div className="gradient mt-[-2px] py-5 pb-10">
      <h1 className="text-center text-6xl text-white font-extrabold">
        Our Services
      </h1>

      <div className="px-5 mt-[5rem] w-full grid grid-cols-1 md:grid-cols-2  gap-5 place-items-center space-y-5  max-w-7xl xl:mx-auto mb-20 ">
        <ServiceCard title="Network Support" description="We provides comprehensive network support services to any organizations or individuals, ensuring their technology infrastructure runs smoothly. We offer proactive monitoring, troubleshooting, and maintenance, helping businesses minimize downtime and optimize performance."/>
        <ServiceCard title="Web Development" description="We provide professional web development services, crafting customized and responsive websites tailored to meet clients' specific requirements. They leverage the latest technologies and industry best practices to deliver visually appealing, user-friendly, and feature-rich websites." />
        <ServiceCard title="Cloud Services" description="We enable businesses to leverage the benefits of cloud computing. Not just basic cloud services like Web/email hosting, We also offer cloud consulting, migration, and management services, helping organizations harness the scalability, flexibility, and cost-efficiency of cloud platforms." />
        <ServiceCard title="Digital Marketing" description="We help businesses enhance their online visibility and reach through effective digital marketing strategies. They offer services such as search engine optimization (SEO), social media marketing, content creation, and analytics, enabling businesses to connect with their target audience and drive growth." />
        <ServiceCard title="ISP Support" description="As an ISP support provider, We assists businesses in managing their internet connectivity. They offer troubleshooting, network optimization, and configuration services to ensure reliable and fast internet access."/>
        <ServiceCard title="Training Classes" description="With highly qualified and experienced trainer we are able to provide any tech training as required by the user. Making users industry ready is our main goal."/>
      </div>
    </div>
  );
};

export default OurServices;
