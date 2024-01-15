import "../style/index.css";
import ContactForm from "./ContactForm";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

const Contact = () => {

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
        scrollTrigger: {trigger: elem, start: "top 60%", end: "top 80%"}
      }
      
    )
  }

  useEffect(() => {
    slideInLeft("h3, #contact-text","0.1","0.5", "ease")
    },)

    useEffect(() => {
      Pop(".form-container","0.2","0.8", "ease")
      },)

  return (
    <div class="contact" id="contact">
      <h3>Pas encore <span>convaincu ?</span></h3>
      <p id="contact-text">Laissez-moi une chance de vous rencontrer et d'échanger avec vous sur mes projets professionnels</p>
      <div className="form-container">
        <div className="form-content-left">
            <ContactForm />
        </div>
        <div className="form-content-right">
            <div className="contact-info">
                <h4>Informations</h4>
                <div className="contact-row">
                <i class="fa-solid fa-location-dot fa-2xl" style={{color: "#18C7E1",}} ></i>
                <p>74330 Mégigny</p>
                </div>
                <div className="contact-row">
                <i class="fa-solid fa-phone fa-2xl" style={{color: "#18C7E1",}}></i>
                <p>06 65 92 08 10</p>
                </div>
                <div className="contact-row">
                <i class="fa-solid fa-envelope fa-2xl" style={{color: "#18C7E1",}}></i>
                <p>jocelyn_mercier@outlook.fr</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
