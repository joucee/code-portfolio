import "../style/index.css";
import idea from "../logo/idee.gif";
import curious from "../logo/curiosite.gif";
import ninja from "../logo/ninja.gif";
import coop from "../logo/coop.gif";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);


const Softskills = () => {

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
            scrollTrigger: {trigger: elem, start: "top 60%", end: "top 60%"}
          }
          
        )
      }
      
      
      useEffect(() => {
        Pop(".softskill-element","0.5","1.5", "ease")
        },)

  return (
    <div class="soft-skills">
        <div className="soft-skill-lr">
        <div className="soft-skill-left">
            <div className="softskills-row">

                <div className="softskill-element">
                    <img src={idea} className="animated-gif" alt="" />
                    <h5 className="skill-title">Capacité d'analyse</h5>
                    <p>Capable de résoudre des problèmes, c'est pour moi très stimulant de passer du temps à cherche la cause d'un problème et d'innover dans la manière de le résoudre.</p>
                </div>
                <div className="softskill-element">
                <img src={curious} className="animated-gif" alt="" />
                    <h5 className="skill-title">Curiosité</h5>
                    <p>Très curieux de nature, je m'intéresse à de nombreux domaines, j'aime acquérir de nouvelles compétences et apprendre de nouvelles connaissances.</p>
                </div>
                <div className="softskill-element">
                <img src={ninja} className="animated-gif" alt="" />
                    <h5 className="skill-title">Capacité d'adaptation</h5>
                    <p>Je m'adapte très facilement à de nouvelles personnes ou de nouveaux environnements de travail, je suis polyvalent comme en témoigne mes précédentes expériences professionnelles. </p>
                </div>
                <div className="softskill-element">
                <img src={coop} className="animated-gif" alt="" />
                    <h5 className="skill-title">Travail en équipe</h5>
                    <p>La communication est très importante pour moi et je suis capable de travailler en autonomie. Bienveillant et empathique, je me soucis également du rapport avec mes collègues de travail.</p>
                </div>
            </div>
        </div>
        <div className="soft-skill-right">
           
        </div>
        </div>
    </div>
  );
};

export default Softskills;
