
import "../style/index.css";
import Pdf from "../img/cv.pdf";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

const Career = () => {

  const slideInTop = (elem, delay, duration, ease) => {
    gsap.fromTo(
      elem, 
      {
        opacity: 0, 
        y:-200,
      },
      {
        opacity: 1,
        y:0,
        delay: delay || 0.8,
        duration: duration || 1.5,
        ease: ease || "ease",
        scrollTrigger: {trigger: elem, start: "top 80%", end: "top 80%"}
      }
      
    )
  }
  const slideInBottom = (elem, delay, duration, ease) => {
    gsap.fromTo(
      elem, 
      {
        opacity: 0, 
        y:40,
      },
      {
        opacity: 1,
        y:0,
        delay: delay || 0.8,
        duration: duration || 1.5,
        ease: ease || "ease",
        scrollTrigger: {trigger: elem, start: "top 80%", end: "top 80%"}
      }
      
    )
  }
  
  
  useEffect(() => {
    slideInTop(".career-text","0.5","1.5", "ease")
    },)
    useEffect(() => {
      slideInBottom("#btncareer","0.5","1.5", "ease")
      },)

  return (
    <div className="career" id="career">
        <div className="career-content">
      <h3 className="career-text">Un parcours plutôt... atypique !</h3>
      <p className="career-text">Envie d'en savoir plus sur mes précedentes expériences professionnelles ?</p>
      <a href={Pdf} target = "_blank"><button type="button"  id="btncareer">
            Download CV
          </button></a>
      </div>
    </div>
  );
};

export default Career;
