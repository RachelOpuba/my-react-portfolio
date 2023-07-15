import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="flex justify-between items-center w-full px-4 py-4 md:py-0 bg-[#191d2d] text-white">
        <div className="md:hidden block">
          <p>Rachel.dev</p>
        </div>
        <AiOutlineMenu
          onClick={handleNav}
          className="top-8 right-4 z-[99]  text-white text-2xl md:hidden cursor-pointer"
        />
      </div>

      {nav ? (
        <div className=" md:hidden absolute z-[99] bg-white w-full top-16">
          <ul className="flex md:hidden flex-col items-center  z-[99] h-[300px]">
            <li onClick={handleNav} className="md:pe-8 cursor-pointer pt-4">
              <Link
                to="/"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={handleNav}
              >
                Home
              </Link>
            </li>
            <li onClick={handleNav} className="md:pe-8 cursor-pointer pt-8">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                About
              </Link>
            </li>
            <li onClick={handleNav} className="md:pe-8 cursor-pointer pt-8">
              Projects
            </li>
            <li onClick={handleNav} className="cursor-pointer pt-8">
              Contact
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}

      <div>
        <nav className="h-10  hidden md:flex justify-between py-8 px-16 text-md font-semibold  text-white bg-[#191d2d]">
          <div>
            <p>Rachel.dev</p>
          </div>
          <div>
            <ul className="flex">
              <li className="pe-8 cursor-pointer">Home</li>
              <li className="pe-8 cursor-pointer">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li className="pe-8 cursor-pointer">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
