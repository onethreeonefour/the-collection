import React, { useEffect } from 'react'
import Model1 from '../../Images/Hero/5-BW.webp'
import Model2 from '../../Images/Hero/2-BW.webp'
import Model3 from '../../Images/Hero/4.webp'

import ModelPage from '../Models/ModelPage'
import About from '../About/AboutPage'
import Contact from '../Contact/Contact'

import { motion } from 'framer-motion'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Landing() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('.hero-image-zoom', {
            scrollTrigger: {
                trigger: '.hero-image-zoom',
                toggleActions: "restart none none reverse",
            }, duration: 1.4, width: 0, stagger: 0.6
        });
        gsap.from('.hero-span', {
            scrollTrigger: {
                trigger: '.hero-span',
                toggleActions: "restart none none reverse",
            }, autoAlpha: 0, duration: 1.4, stagger: 0.6
        });

    }, [])

    const pageVariants = {
        in: {
            opacity: 1,

        },
        out: {
            opacity: 0,

        }
    };

    const pageDuration = {
        duration: 0.5
    };

    return (
        <motion.div
            animate="in"
            initial="out"
            exit="out"
            variants={pageVariants}
            transition={pageDuration}
        >
            <div className="hero-container">
                <div className="hero-heading">
                    <h1><span className="hero-span">THE C</span><span className="hero-span">OLLE</span><span className="hero-span">CTION</span></h1>
                    <h2>Sydney's Premier Modeling Agency</h2>
                    <div className="call-to-action">
                        <button>Our Models</button>
                        <h3>SCROLL DOWN</h3>
                    </div>
                </div>
                <div className="hero-image-container">
                    <div className="hero-image-zoom">
                        <img src={Model1} alt="model-1" className="hero-image-1"></img>
                    </div>
                    <div className="hero-image-zoom">
                        <img src={Model2} alt="model-2" className="hero-image-2"></img>
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
            <div className="model-page-container-landing">
                <ModelPage />
            </div>
            <div className="about-page-container-landing" id="about">
                <About />
            </div>
            <div className="contact-page-container-landing" id="contact">
                <Contact />
            </div>
        </motion.div>
    )
}

export default Landing
