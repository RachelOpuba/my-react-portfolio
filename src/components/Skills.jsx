import React from "react";
import { GrReactjs } from "react-icons/gr";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { SiBootstrap } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoTailwindCss } from "react-icons/bi";

const Skills = () => {
  return (
    <>
      <div className=" bg-[#191d2d] py-16 px-0 md:py-8 md:px-8 grid grid-cols-3 md:grid-cols-7">
        <div className="flex justify-center items-center flex-col px-4 md:px-0">
          <GrReactjs className="text-blue-500 " size={50} />
          <p className="text-white">React</p>
        </div>

        <div className="flex justify-center items-center flex-col px-4 md:px-0">
          <IoLogoJavascript className=" bg-yellow-500 " size={50} />
          <p className="text-white">Javascript</p>
        </div>
        <div className="flex justify-center items-center flex-col px-4 md:px-0">
          <AiFillGithub className="text-white " size={50} />
          <p className="text-white">Github</p>
        </div>
        <div className="flex justify-center items-center flex-col px-4 md:px-0 pt-6 md:pt-0">
          <BiLogoTailwindCss className="text-blue-500 " size={50} />
          <p className="text-white">Tailwind</p>
        </div>
        <div className="flex justify-center items-center flex-col px-4 md:px-0 pt-6 md:pt-0">
          <SiBootstrap className=" text-white bg-blue-500 " size={50} />
          <p className="text-white">Bootstrap</p>
        </div>
        <div className="flex justify-center items-center flex-col px-4 md:px-0 pt-6 md:pt-0">
          <IoLogoHtml5 className="text-white bg-[#dd4b25] " size={50} />
          <p className="text-white">HTML</p>
        </div>
        <div className="hidden md:flex justify-center items-center flex-col px-4 md:px-0 pt-6 md:pt-0 w-[100vw] md:w-auto ">
          <IoLogoCss3 className="text-white bg-blue-500 " size={50} />
          <p className="text-white">CSS</p>
        </div>
      </div>
    </>
  );
};

export default Skills;
