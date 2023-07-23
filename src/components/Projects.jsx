import React from "react";
import noDebt from "../assets/images/noDebtApp.gif";
import netflix from "../assets/images/NETFLIX-clone.png";

import vinsight from "../assets/images/vinsite-capture.png";
import { AiFillGithub } from "react-icons/ai";
import { IoMdOpen } from "react-icons/io";

const Projects = () => {
  return (
    <>
      <div id="projects">
        <div className="pt-12 pb-10">
          <h2 className="text-center text-blue-500 text-xl font-bold">
            PORTFOLIO
          </h2>
        </div>
        <div className="md:flex pb-20">
          <div className=" w-full md:w-[50%] lg:w-[40%] flex  lg:ms-20 lg:justify-end md:ms-4 lg:pe-6 md:pe-4 mb-6">
            <a
              href="https://loan-prediction-app-group-1b.netlify.app/ "
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={noDebt}
                alt="No debt website gif"
                className="lg:h-[350px] border"
              />
            </a>
          </div>
          <div className="w-[100%] md:w-[60%] flex flex-col text-gray-700  lg:ps-8 ps-4 pe-4 xl:pe-40  lg:pe-20 text-[18px]">
            <h2 className="uppercase text-center font-bold text-xl pb-4">
              No Debt
            </h2>
            <p className="text-center  ">
              No Debt is a loan prediction software that leverages the
              predictive analytics and advanced algorithms of an AI model to
              analyze borrowers' data, providing accurate predictions of default
              possibilities.
            </p>
            <p className="text-center pt-2 ">
              This, in turn, aids in significantly minimizing the occurrence of
              loan defaults, thereby contributing to a substantial reduction in
              their overall frequency.
            </p>
            <div className="flex lg:pt-6 pt-4 justify-center gap-8 font-bold ">
              <p>React</p>
              <p> CSS</p>
            </div>
            <div className="flex text-center justify-center gap-6 lg:pt-6 pt-4 font-bold ">
              <a
                href="https://github.com/RachelOpuba/no-debt-LoanApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="flex gap-1 items-center">
                  <span>Code</span>
                  <span>
                    <AiFillGithub size={20} />
                  </span>
                </p>
              </a>
              <p className="flex gap-1 items-center">
                <a
                  href="https://loan-prediction-app-group-1b.netlify.app/ "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Live Demo</span>
                </a>
                <span>
                  <IoMdOpen size={20} />
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex pb-20">
          <div className="w-[100%] md:w-[50%] flex flex-col text-gray-700  text-[18px] px-8">
            <h2 className="uppercase text-center font-bold text-xl pb-4">
              VINSIGHTE CLONE
            </h2>
            <p className="text-center  ">
              vinsighte is a clone of{" "}
              <a href="https://www.vinsighte.com.ng/" className="text-blue-500">
                {" "}
                https://www.vinsighte.com.ng/
              </a>
            </p>
            <p className="text-center pt-2 pe-4">
              It was a personal project that I built during my training with
              Kodecamp. The goal of building this project was to solidify my
              coding skills, especially my bootstrap skills at the time
            </p>

            <div className="flex lg:pt-6 pt-4 justify-center gap-8 font-bold ">
              <p>JS</p>
              <p> BOOTSTRAP</p>
            </div>
            <div className="flex text-center justify-center gap-6 lg:pt-6 pt-4 font-bold ">
              <a
                href="https://github.com/RachelOpuba/netflix-clone-stutern-task"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="flex gap-1 items-center">
                  <span>Code</span>
                  <span>
                    <AiFillGithub size={20} />
                  </span>
                </p>
              </a>
              <p className="flex gap-1 items-center">
                <a
                  href="https://stuteren-cloning-task.netlify.app/ "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Live Demo</span>
                </a>
                <span>
                  <IoMdOpen size={20} />
                </span>
              </p>
            </div>
          </div>
          <div className=" w-full md:w-[50%] lg:w-[40%] flex  lg:ms-10 lg:justify-end md:ms-4 lg:pe-6 md:pe-4 mb-6">
            <a
              href="https://stuteren-cloning-task.netlify.app/ "
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={vinsight}
                alt="Netflix clone"
                className="lg:h-[280px] border"
              />
            </a>
          </div>
        </div>
        <div className="md:flex pb-20">
          <div className=" w-full md:w-[50%] lg:w-[40%] flex  lg:ms-20 lg:justify-end md:ms-4 lg:pe-6 md:pe-4 mb-6">
            <a
              href="https://stuteren-cloning-task.netlify.app/ "
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={netflix}
                alt="Netflix clone"
                className="lg:h-[280px] border"
              />
            </a>
          </div>
          <div className="w-[100%] md:w-[50%] flex flex-col text-gray-700  text-[18px] px-8">
            <h2 className="uppercase text-center font-bold text-xl pb-4">
              NETFLIX
            </h2>
            <p className="text-center  ">
              Netflix is a clone of{" "}
              <a
                href="https://www.netflix.com/ng/"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                https://www.netflix.com/ng/
              </a>
            </p>
            <p className="text-center pt-2  pe-4">
              During my training in Stutern, we were required to clone the site
              as an assignment. Responsiveness was not a requirent for the task,
              however, i decided to make it responsive.
            </p>
            <div className="flex lg:pt-6 pt-4 justify-center gap-8 font-bold ">
              <p>HTML</p>
              <p> CSS</p>
            </div>
            <div className="flex text-center justify-center gap-6 lg:pt-6 pt-4 font-bold ">
              <a
                href="https://github.com/RachelOpuba/netflix-clone-stutern-task"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="flex gap-1 items-center">
                  <span>Code</span>
                  <span>
                    <AiFillGithub size={20} />
                  </span>
                </p>
              </a>
              <p className="flex gap-1 items-center">
                <a
                  href="https://stuteren-cloning-task.netlify.app/ "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Live Demo</span>
                </a>
                <span>
                  <IoMdOpen size={20} />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
