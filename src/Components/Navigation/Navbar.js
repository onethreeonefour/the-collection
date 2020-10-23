import React from 'react'

function Navbar() {
    return (
        <header className='navbar'>
            <div className='navbar__title navbar__item'><h5>LightOnTheLand</h5></div>
            <div className='navbar__item'><a href="#about">About</a></div>
            <div className='navbar__item'><a href="#about">Models</a></div>
            <div className='navbar__item'><a href="#contact">Contact</a></div>
        </header>
    )
}

export default Navbar

