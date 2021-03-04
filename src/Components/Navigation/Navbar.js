import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__title navbar__item">
        <a href="/">LightOnTheLand</a>
      </div>
      <div className="navbar__item">
        <a href="#about">About</a>
      </div>
      <div className="navbar__item">
        <a href="#models">Models</a>
      </div>
      <div className="navbar__item">
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
