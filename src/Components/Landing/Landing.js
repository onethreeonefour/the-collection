import React from 'react'
import Model1 from '../../Images/Hero/5-BW.jpg'
import Model2 from '../../Images/Hero/2-BW.jpg'
import Model3 from '../../Images/Hero/4.jpg'

import ModelPage from '../Models/ModelPage'
import About from '../About/AboutPage'
import Contact from '../Contact/Contact'

function Landing() {
    return (
        <div>
            <div className="hero-container">
                <div className="hero-heading">
                    <h1><span>THE C</span><span>OLLE</span><span>CTION</span></h1>
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
        </div>
    )
}

export default Landing
