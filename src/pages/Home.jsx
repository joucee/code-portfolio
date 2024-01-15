import logo from "../logo/logo512.png";
import "../style/index.css";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

const Home = () => {

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
        
      }
      
    )
  }
  const slideInRight = (elem, delay, duration, ease) => {
    gsap.fromTo(
      elem, 
      {
        opacity: 0, 
        x:200
      },
      {
        opacity: 1,
        x:0,
        ease: ease || "ease",
        delay: delay || 0.8,
        duration: duration || 1.5,
        
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
        delay: delay || 0.8,
        duration: duration || 1.5,
      }
      
    )
  }
  
  useEffect(() => {
    slideInLeft(".title","0","0.5")
    },)
  useEffect(() => {
    slideInTop("#homename","0.5","4", "bounce.out")
    },)
  useEffect(() => {
    slideInTop("#dev","0.7","4", "bounce.out")
    },)
  useEffect(() => {
    Pop("#text","1.7","2", "ease")
    },)
  useEffect(() => {
    Pop(".button","2.2","2", "ease")
    },)
  useEffect(() => {
    Pop(".App-logo","2.7","4", "ease")
      },)
  useEffect(() => {
    Pop(".navbar","3.2","2", "ease")
      },)
  useEffect(() => {
    Pop(".social-media","3.2","2", "ease")
      },)

  return (
    <div className="home" id="home">
      <div className="navbar">
        <div className="logo"></div>
        <div className="menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">A propos</a></li>
            <li><a href="#career">Parcours</a></li>
            <li><a href="#project">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="home-content">
        <div className="home-content-left">
        <h1 className="title">Hello, moi c'est <span id="homename">Jocelyn Mercier</span> <br/>
        <span id="dev">Developpeur</span> React</h1>
        
        <p id="text">
          Actuellement en cours de reconversion professionnelle, je suis à la recherche d'une entreprise pour une première expérience dans ce domaine.
        </p>
        <a href="#about"><button type="button" className="button" >En savoir plus</button></a>
        </div>
        <div className="home-content-right">
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        
      </div>
      <div className="social-media">
        <ul>
          <li>
            <a href="https://www.facebook.com/jocelyn.mercier.165" target="_blank">
              <i class="fa-brands fa-facebook fa-2xl"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/lejouce/" target="_blank">
              <i class="fa-brands fa-instagram fa-2xl"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jouce" target="_blank">
              <i class="fa-brands fa-linkedin fa-2xl"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/joucee" target="_blank">
              <i class="fa-brands fa-github fa-2xl"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
