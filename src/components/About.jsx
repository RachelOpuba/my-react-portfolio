import { useState, useEffect } from "react";
import Pic1 from "../assets/images/pic-1.jpg";
import Pic2 from "../assets/images/pic-2.jpg";

import Pic3 from "../assets/images/pic-3.webp";

const images = [Pic1, Pic2, Pic3];
const About = () => {
  const [currentImage, setCurrentImage] = useState(Pic3);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div
        className="p-6 md:p-24 border flex  flex-col  md:flex-row justify-center md:justify-around"
        id="about"
      >
        <h3 className="uppercase text-[#567bfd] font-bold  md:hidden text-center text-lg py-6">
          About me
        </h3>
        <div className="w-full md:w-[40%] md:mt-12 mb-8 md:mx-auto">
          <img
            src={currentImage}
            alt="someone working on computer "
            className="object-contain h-58 w-96  rounded-lg"
          />
        </div>

        <div className="w-full md:w-[60%] text-gray-700 md:pe-16 md:ps-6">
          <h3 className="uppercase pb-4 text-[#567bfd] font-bold hidden md:block">
            About me
          </h3>
          <p>
            I am a creative developer and I am excited about creating stunning
            websites. My expertise lies in translating designs into fully
            functional websites while utilizing my development skills to enhance
            and customize their features. My goal is to craft visually
            appealing, user friendly websites that provides a seeamless browsing
            experience
          </p>
          <p className="pt-4">
            In my leasure time, I enjoy cooking and spending quality time with
            my loved ones
          </p>
          <div className="flex flex-col  md:flex-row md:justify-between  pb-4 pt-8">
            <div className=" hidden lg:block">
              <h4 className="font-bold">Name</h4>
              <p className="">Rachel Opuba</p>
              <h4 className="font-bold pt-4">Email</h4>
              <p>ogbenirach@gmail.com</p>
            </div>
            <div>
              <h4 className="font-bold pt-4 md:pt-0">Education</h4>
              <p>
                Sofware Developer{" "}
                <span className="font-bold ps-4">(STUTERN)</span>{" "}
              </p>
              <p>
                React Developer{" "}
                <span className="font-bold ps-4">(KODECAMP)</span>{" "}
              </p>
              <h4 className="font-bold pt-4">Employment</h4>
              <p>Open</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
