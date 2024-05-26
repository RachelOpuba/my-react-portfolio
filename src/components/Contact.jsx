import React from "react";

import { MdOutlineLocationOn } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { BsTelephoneOutbound } from "react-icons/bs";

const Contact = () => {
  return (
    <>
    <div className="w-full">
      <div className=" max-w-[1440px] mx-auto px-8  md:px-20 lg:px-40 " id="contact">
        <h2 className="uppercase text-[#567bfd] font-bold pb-2 ">Contact</h2>
        <p className="font-bold pb-8 text-[18px] text-gray-700">
          Feel free to contact me! Hit me up
        </p>
        <div className="flex-col md:flex-row flex justify-between">
          <div className="flex gap-4 items-center">
            <MdOutlineLocationOn className="text-blue-500 " size={30} />
            <div>
              <p className="font-bold text-gray-700">Location</p>
              <p className="text-gray-700">Nigeria</p>
            </div>
          </div>
          <div className="flex gap-4 items-center pt-5 md:pt-0">
            <FiMail className="text-blue-500 " size={30} />
            <div>
              <p className="font-bold text-gray-700">Mail</p>
              <p className="text-gray-700">ogbenirach@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-4 items-center pt-5 md:pt-0">
            <BsTelephoneOutbound className="text-blue-500 " size={30} />
            <div>
              <p className="font-bold text-gray-700">Phone</p>
              <p className="text-gray-700">08107805444</p>
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  );
};

export default Contact;
