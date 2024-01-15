import Home from "./pages/Home";
import "./style/index.css";
import "./App.css";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Softskills from "./pages/Softskills";
import Career from "./pages/Career";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";


import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

function App() {
  
  return (
    <div className="App">
      <Home />
      <About />
      <Softskills />
      <Career />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
