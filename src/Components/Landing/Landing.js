import React from 'react'
import Model1 from '../../Images/Hero/Aiony_Haust.jpg'
import Model2 from '../../Images/Hero/Yasmin_Tareeq.jpg'
import Model3 from '../../Images/Hero/Eto_Migriauli.jpg'

function Landing() {
    return (
        <div>
            <div className="hero-container">
                <div className="hero-heading">
                    <h1>THE C<span>OLLE</span>CTION</h1>
                    <h2>Sydney's Premier Modeling Agency</h2>
                    <div className="call-to-action">
                        <button>Our Models</button>
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
                        <img src={Model3} alt="model-3" className="hero-image-3"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
