// import React from "react";

import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";

const Portfolio = () => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
