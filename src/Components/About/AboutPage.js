import React from 'react'
import Model from '../../Images/Hero/7.jpg'
import { brands } from './Data';

function AboutPage() {

    const renderLogo = brands.map((brand, index) => {
        return <img src={brand.src} alt="clienete" key={index}></img>

    })

    return (
        <div className="about-page-container">
            <h1 className="about-watermark">SYDNEY - MELBOURNE - BRISBANE</h1>
            <h1>ABOUT US</h1>
            <div className='about-us-card-container'>
                <div className='about-us-card-info'>
                    <h1>THE COLLECTION</h1>
                    <p>A start up modeling agency where we have a collective experience spanning over 30 years in the fashion industry, film industry and the music industry.
                    <br /><br />
                    The Collection is a boutique collective where our cliente spanning from Italy, France, Japan and now extending to our headquarters at Sydney we're excited to bring more beauty to the world.
                    <br /><br />
                    Do you want to join the team? We're looking for models as we speak. Please send your portfolio towards our team and we'll get in touch if successful.
                    </p>
                    <br />
                    <br />
                    <a href="#contact">CONTACT</a>
                </div>
                <div>
                    <img src={Model} alt="about-us"></img>
                </div>
            </div>
            <div className="cliente-container">
                <h1>CLIENTE</h1>
                <h1 className='cliente-watermark'>PARIS - VENICE - LONDON - HELSINKI</h1>
                <div className="cliente-logo-container">
                    {renderLogo}
                </div>
            </div>
        </div>
    )
}

export default AboutPage
