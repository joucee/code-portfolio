import "../style/index.css";
import css from "../logo/css.png";
import js from "../logo/js.png";
import react from "../logo/react.png";
import gsaplogo from "../logo/gsap.png";
import git from "../logo/git.png";
import ai from "../logo/ai.png";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

const Skills = () => {

  const Pop = (elem, delay, duration, ease) => {
    gsap.fromTo(
      elem, 
      {
        opacity: 0, 
      },
      {
        opacity: 1,
        ease: ease || "ease",
        delay: delay || 0.8,
        duration: duration || 1.5,
        scrollTrigger: {trigger: elem, start: "top 80%", end: "top 80%"}
      }
      
    )
  }

  useEffect(() => {
    Pop("#row-object1","0.1","0.6", "ease")
    },)
    useEffect(() => {
      Pop("#row-object2","0.1","0.6", "ease")
      },)
      useEffect(() => {
        Pop("#row-object3","0.1","0.6", "ease")
        },)
        useEffect(() => {
          Pop("#row-object4","0.1","0.6", "ease")
          },)
          useEffect(() => {
            Pop("#row-object5","0.1","0.6", "ease")
            },)
            useEffect(() => {
              Pop("#row-object6","0.1","0.6", "ease")
              },)

  return (
    <div class="skills">
      <h2>Mes compétences</h2>
      <div class="row-skills">
        <div class="row-skills-object" id="row-object1">
          <img src={css} alt="css" class="skill-logo" />
          <h4 class="h4-skill">Css / Bootstrap</h4>
          <p class="p-skill">
            HTML, Css, l' utilisation de SASS et Bootstrap n'ont (presque) plus de secrets pour moi
          </p>
        </div>
        <div class="row-skills-object" id="row-object2">
          <img src={js} alt="css" class="skill-logo" />
          <h4 class="h4-skill">Javascript</h4>
          <p class="p-skill">
            Manipulation du DOM, Variables, Fonctions, .map ...
          </p>
        </div>
        <div class="row-skills-object" id="row-object3">
          <img src={react} alt="css" class="skill-logo" />
          <h4 class="h4-skill">React</h4>
          <p class="p-skill">
            React JS / React Native, UseRef, UseEffect, Hook, Axios...
          </p>
        </div>
        <div class="row-skills-object" id="row-object4">
          <img src={gsaplogo} alt="css" class="skill-logo" />
          <h4 class="h4-skill">Greensock (Gsap)</h4>
          <p class="p-skill">
            Réalisation d'animations avec GSAP
          </p>
        </div>
        <div class="row-skills-object" id="row-object5">
          <img src={git} alt="css" class="skill-logo" />
          <h4 class="h4-skill">Github / Gitlab</h4>
          <p class="p-skill">
            Utilisation fréquente de Github et connaissance de gitLab
          </p>
        </div>
        <div class="row-skills-object" id="row-object6">
          <img src={ai} alt="css" class="skill-logo" />
          <h4 class="h4-skill">Adobe Illustrator</h4>
          <p class="p-skill">
            Illustrator, photoshop, Midjourney, ChatGPt
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
