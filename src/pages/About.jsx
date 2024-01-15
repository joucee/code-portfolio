import "../style/index.css";
import Pdf from "../img/cv.pdf"
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);


const About = () => {

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
 
  const slideInRight = (elem, delay, duration, ease) => {
    gsap.fromTo(
      elem, 
      {
        opacity: 0, 
        x:200,
      },
      {
        opacity: 1,
        x:0,
        ease: ease || "ease",
        delay: delay || 0.8,
        duration: duration || 1.5,
        scrollTrigger: {trigger: elem, start: "top 80%", end: "top 80%"},
      }
      
    )
  }
  const slideInLeft = (elem, delay, duration, ease) => {
    gsap.fromTo(
      elem, 
      {
        opacity: 0, 
        x:40,
      },
      {
        opacity: 1,
        x:0,
        ease: ease || "ease",
        delay: delay || 0.8,
        duration: duration || 1.5,
        scrollTrigger: {trigger: elem, start: "top 80%", end: "top 80%"},
      }
      
    )
  }
 
  const Pop = (elem, delay, duration, ease) => {
    gsap.fromTo(
      elem, 
      {
        opacity: 0, 
      },
      {
        opacity: 1,
        ease: ease || "ease",
        delay: delay || 0.2,
        duration: duration || 1,
        scrollTrigger: {trigger: elem, start: "top 80%", end: "top 80%"}
      }
      
    )
  }
  
  
  useEffect(() => {
    Pop("#aboutme","0.1","1.5", "ease")
    },)
  useEffect(() => {
    slideInLeft("#title-about","0.3","1.2", "ease")
    },)
  useEffect(() => {
    slideInRight("#text-about","0.3","1.2")
    },)
  useEffect(() => {
    Pop("#name","0.5","1.5")
    },)
  useEffect(() => {
    slideInRight("#subname","0.3","1.2")
    },)
    useEffect(() => {
      slideInBottom(".btn","0.3","1.2")
      },)
  return (
    
    <div class="about" id="about">
      
      <div class="about-container">
      
        <div class="about-im">
        </div>
        <div class="about-content">
          <h2 id="aboutme">A propos de moi</h2>
          <h3 id="title-about">Développeur Autodidacte et passionné de technologie</h3>
          <p id="text-about">
            Passionné de technologie depuis mon plus jeune âge, ma passion pour le code a quant a elle debutée en septembre 2021. Tout a commencé lorsque j'ai effectué la Piscine de l'école 42 à Lyon, n'ayant jamais écris une seule ligne de code auparavant, j'ai éprouvé beaucoup de satisfaction lors de cette expérience. C'est à la suite de cela que j'ai décidé de débuter une formation de Développeur Web. 
          </p>
          <div className="button-row">
          <span id="name">Jocelyn Mercier</span>
          <p id="subname">Développeur Front End</p>
          
          <a href={Pdf} target = "_blank"><button type="button" className="btn">
            Download CV
          </button></a>
          <a href="#contact"><button type="button" className="btn">
            Contactez moi
          </button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
