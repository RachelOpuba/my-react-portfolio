import profile from "../assets/images/profile.jpeg";
import Card from "./Card";
import { TypeAnimation } from "react-type-animation";


const Hero = () => {
  return (
    <>
      <div className="h-auto md:h-[90vh] bg-[#191d2d] flex justify-center px-5 md:px-8 lg:px-32 w-[100%]">
        <div className="flex  flex-col-reverse  md:flex-row  justify-between  items-center md:h-full  w-full md:max-w-4xl md:max-h-[600px]">
          <div className=" w-full md:w-1/2 flex justify-center flex-col md:ps-6 p-2 pt-8 md:pt-0">
            {/* <p className="text-[#fdfeff] font-bold">Hello, I'm a </p> */}
            <p className="text-center md:text-left">
              <span className="text-[#fdfeff]  font-bold md:text-4xl  lg:text-5xl text-2xl ">
                Front-End{" "}
                <span className="text-[#567bfd] font-bold  md:text-4xl  lg:text-5xl text-2xl">
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      " React",
                      2000, // wait 1s before replacing "Mice" with "Hamsters"
                      " JS",

                      2000,
                      " HTML",
                      2000,
                      "CSS",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: "1em", display: "inline-block" }}
                    repeat={Infinity}
                  />
                </span>
              </span>{" "}
            </p>
            <p className="text-[#fdfeff] font-bold  md:text-4xl lg:text-5xl text-2xl text-center md:text-left">
              Developer
            </p>
            <p className="text-[#fdfeff] py-4 w-full md:max-w-[90%] text-center md:text-left ">
              Hi, I'm Rachel Opuba. A passionate Front-end Developer based in
              Nigeria
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mt-16 md:mt-0">
            <div className="rounded-l-full rounded-r-full border-4 p-1 w-48 h-58 md:h-72 h-[240px] relative mr-20 lg:mr-0">
              <img
                src={profile}
                alt="raachel"
                className="rounded-l-full rounded-r-full h-52 md:h-60 w-fit ml-4 mt-1"
              />
              <div className="absolute top-4 left-40 md:left-44">
                <Card
                  content={
                    <div>
                      <h3 className="uppercase">attention</h3>
                      <h3 className="uppercase">to-detail</h3>
                    </div>
                  }
                />
                <Card
                  content={
                    <div>
                      <h3 className="uppercase">Team </h3>
                      <h3 className="uppercase">Oriented</h3>
                    </div>
                  }
                />
                <Card
                  content={
                    <div>
                      <h3 className="uppercase">Responsive</h3>
                      <h3 className="uppercase">Design</h3>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
