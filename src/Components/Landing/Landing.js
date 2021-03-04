import React, { useEffect, useRef, useState } from "react";
import Model1 from "../../Images/Hero/5-BW.webp";
import Model2 from "../../Images/Hero/2-BW.webp";
import Model3 from "../../Images/Hero/4.webp";

import ModelPage from "../Models/ModelPage";
import About from "../About/AboutPage";
import Contact from "../Contact/Contact";
import Footer from "../Navigation/Footer";
import { gsap, Power4 } from "gsap";

function Landing() {
  const modelRef = useRef("");
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  const [Scroll, setScroll] = useState(false);

  useEffect(() => {
    if (Scroll) {
      gsap
        .timeline()
        .to(".loading-anim", 0.75, {
          autoAlpha: 0,
          y: -50,
          ease: Power4.easeOut,
        })
        .to(".hero-anim-wrapper", 1.5, {
          height: 0,
          ease: Power4.easeInOut,
          onComplete: () => document.querySelector(".content").classList.remove("is-loading"),
        })

        .from(".hero-image-zoom", 1.4, {
          duration: 1.4,
          width: 0,
          stagger: 0.6,
        })
        .from(".hero-span", 0.6, {
          autoAlpha: 0,
          stagger: 0.25,
        });
    }
  }, [Scroll]);
  return (
    <div className="content is-loading">
      <div className="hero-anim-wrapper">
        <img src="./collection.png" alt="loading" className="loading-anim" />
      </div>
      <div className="hero-container hero">
        <div className="hero-heading">
          <h1>
            <span className="hero-span">THE C</span>
            <span className="hero-span">OLLE</span>
            <span className="hero-span">CTION</span>
          </h1>
          <h2>Sydney's Premier Modeling Agency</h2>
          <div className="call-to-action">
            <button onClick={() => scrollToRef(modelRef)}>Our Models</button>
            <h3 style={{ color: "black" }}>SCROLL DOWN</h3>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-zoom">
            <img src={Model1} alt="model-1" className="hero-image-1"></img>
          </div>
          <div className="hero-image-zoom">
            <img src={Model2} alt="model-2" className="hero-image-2" onLoad={() => setScroll(true)}></img>
          </div>
          <div className="hero-image-zoom">
            <div className="hero-image-model-details">
              <p>Yasmeen Tariq</p>
              <p>Aiony Haust</p>
            </div>
            <img src={Model3} alt="model-3" className="hero-image-3"></img>
          </div>
        </div>
      </div>
      <div className="model-page-container-landing model" id="models" ref={modelRef}>
        <ModelPage />
      </div>
      <div className="about-page-container-landing about" id="about">
        <About />
      </div>
      <div className="contact-page-container-landing contact" id="contact">
        <Contact />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Landing;
