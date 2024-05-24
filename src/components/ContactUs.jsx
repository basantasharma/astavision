import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const ContactUs = () => {
  return (
    <div className="   max-w-7xl mx-auto w-full  py-10 flex flex-col items-center justify-center    px-4">
      <h1 className="text-[60px] font-[600] text-center"> Contact Us</h1>.
      <div className="flex flex-col items-center   mt-10 space-y-10 w-[300px] ">
        <div className="flex items-center  mx-auto space-x-10">
          {/* Icon */}
          <div className="flex items-center justify-center p-5 bg-[#06091f] rounded-full">
            <EnvelopeIcon className="size-16 text-white" />
          </div>

          {/* Address */}
          <div className="flex flex-col ">
            <h2 className="text-[30px] font-bold ">Mail</h2>
            <p className="text-[20px]">
              astavisoninfosys@gmail.com <br /> info@astavisioninfosys.com
            </p>
          </div>
        </div>
        <div className="flex items-start mx-auto space-x-10">
          {/* Icon */}
          <div className="flex items-center justify-center p-5 bg-[#06091f] rounded-full">
            <PhoneIcon className="size-16 text-white" />
          </div>

          {/* Address */}
          <div className="flex flex-col ">
            <h2 className="text-[30px] font-bold ">Phone</h2>
            <p className="text-[20px]">9761623530, 9801304414</p>
          </div>
        </div>
        <div className="flex items-start mx-auto space-x-10">
          {/* Icon */}
          <div className="flex items-center justify-center p-5 bg-[#06091f] rounded-full">
            <MapPinIcon className="size-16 text-white" />
          </div>

          {/* Address */}
          <div className="flex flex-col ">
            <h2 className="text-[30px] font-bold ">Location</h2>
            <p className="text-[20px]">Bharatpur-1, Narayanghad</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
