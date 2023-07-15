// import React from "react";

// import Footer from "./Footer";

import About from "./About";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

const Portfolio = () => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Portfolio;
