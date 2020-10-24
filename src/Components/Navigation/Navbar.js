import React from 'react'

function Navbar() {
    return (
        <header className='navbar'>
            <div className='navbar__title navbar__item'><a href="/">LightOnTheLand</a></div>
            <div className='navbar__item'><a href="#about">About</a></div>
            <div className='navbar__item'><a href="/gallery">Gallery</a></div>
            <div className='navbar__item'><a href="#contact">Contact</a></div>
        </header>
    )
}

export default Navbar

