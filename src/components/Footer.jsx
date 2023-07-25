// import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="bg-[#191d2d] h-[130px] md:h-[100px] w-full mt-20 md:mt-40 px-2 md:px-40">
        <div className="flex flex-col-reverse  pt-6 md:pt-0 pb-4 md:pb-0 md:flex-row justify-between items-center text-white h-full">
          <small className="font-bold">
            {" "}
            coyright &copy; 2023. All rights reserved{" "}
          </small>
          <div className="flex gap-4">
            <a
              href="https://github.com/RachelOpuba"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/rachel-opuba-83690a17a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
