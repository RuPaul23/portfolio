import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Contact from "./sections/Contact";
import DownloadCV from "./sections/DownloadCV";
import Footer from './sections/Footer';
import PositionsOfResponsibility from "./sections/PositionsOfResponsibility";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <PositionsOfResponsibility />
      <Experiences />
      <Contact />
      <DownloadCV />
      <Footer/>
    </div>
  );
};

export default App;
