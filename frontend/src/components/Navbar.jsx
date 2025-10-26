import React, { useState } from "react";
import "./Navbar.css"; // Include the styles here

const Header = () => {
  const [isMobile, setIsMobile] = useState(false); // Track mobile state for toggle menu

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <header className="header">
      <section className="name">
        <h1>Abhiram</h1>
      </section>
      <div className={`nav ${isMobile ? "active" : ""}`}>
        <a href="#home" className="nav-item">Home</a>
        <a href="#about" className="nav-item">About</a>
        <a href="#Sk" className="nav-item">Skills</a>
        <a href="#projects" className="nav-item">Projects</a>
        <a href="#Con" className="nav-item">Contact</a>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMobile ? <span>&#10005;</span> : <span>&#9776;</span>}
      </div>
    </header>
  );
};

export default Header;
