import "../style/index.css";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

const Project = () => {

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
      const slideInLeft = (elem, delay, duration, ease) => {
        gsap.fromTo(
          elem, 
          {
            opacity: 0, 
            x:-200,
          },
          {
            opacity: 1,
            x:0,
            ease: ease || "ease",
            delay: delay || 0.8,
            duration: duration || 1.5,
            scrollTrigger: {trigger: elem, start: "top 80%", end: "top 80%"}
          }
          
        )
      }

      useEffect(() => {
        slideInLeft("h3, #project-text","0.1","0.5", "ease")
        },)
        useEffect(() => {
            Pop("#project1","0.2","0.6", "ease")
            },)
            useEffect(() => {
                Pop("#project2","0.5","0.6", "ease")
                },)
                useEffect(() => {
                    Pop("#project3","0.8","0.6", "ease")
                    },)
                    useEffect(() => {
                        Pop("#project4","1","0.6", "ease")
                        },)

  return (
    <div class="project" id="project">
        <h3>Découvrez mes <span>réalisations</span></h3>
        <p id="project-text">C'est un plaisir de vous partager mes réalisations, principalement effectuées dans le cadre de mes projets de formations</p>
        <div className="project-row-container">
            <div className="project-row-element" id="project1" onClick={() => alert('Désolé, ma partie création est en cours de maintenance pour le moment, merci de votre compréhension :)')}>
                <h4 className="project-title">Pokejouce</h4>
                <div className="hidden-element"></div>
                <p>Venez en découvrir plus sur moi à travers ce pokemon Like réalisé en javascript</p>
            </div>
            <div className="project-row-element" id="project2" onClick={() => alert('Désolé, ma partie création est en cours de maintenance pour le moment, merci de votre compréhension :)')}>
            <h4 className="project-title">Pokedex</h4>
                <div className="hidden-element"></div>
                <p>Projet réalisé dans le but d'apprendre les bases du .map et JSON ( et oui!! j'aime Pokemon)</p>
            </div>
            <div className="project-row-element" id="project3" onClick={() => alert('Désolé, ma partie création est en cours de maintenance pour le moment, merci de votre compréhension :)')}>
            <h4 className="project-title">CryptoJouce</h4>
                <div className="hidden-element"></div>
                <p>Projet pour comprendre le fonctionnement d'axios et les appels de bases de données sous React</p>
            </div>
            <div className="project-row-element" id="project4" onClick={() => alert('Désolé, ma partie création est en cours de maintenance pour le moment, merci de votre compréhension :)')}>
            <h4 className="project-title">Tasty Cake</h4>
                <div className="hidden-element"></div>
                <p>Projet réalisé pour une page vitrine ficitve avec utilisation de l'IA pour la génération d'images</p>
            </div>
        </div>
    </div>
  );
};

export default Project;
