import React from 'react'
import Model from '../../Images/Hero/7.jpg'

function AboutPage() {
    return (
        <div className="about-page-container">
            <h1 className="about-watermark">SYDNEY - MELBOURNE - BRISBANE</h1>
            <h1>ABOUT US</h1>
            <div className='about-us-card-container'>
                <div className='about-us-card-info'>
                    <h1>THE COLLECTION</h1>
                    <p>A start up modeling agency where we have a collective experience spanning over 30 years in the fashion industry, film industry and the music industry.
                    The Collection is a boutique collective where we specialise on women modeling - with natural vistas, natural vistas and with a Sydney flair that cannot be matched.
                    <br /><br />
                    Do you want to join the team? We're looking for models as we speak. Please send your portfolio towards our team and we'll get in touch if successful.
                    </p>
                    <br />
                    <br />
                    <a href="#">CONTACT</a>
                </div>
                <div>
                    <img src={Model} alt="about-us"></img>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
