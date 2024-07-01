import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <h1>
          <Link className="link link_title" to="/">
            <img className="logo" src={logo} alt="logo du cidj" />
          </Link>
        </h1>

        <div
          className={`burger-menu ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
        </div>

        <div className={`menu ${isOpen ? "open" : ""}`}>
          <div className="wrapper-menu">
            <Link to="/services" onClick={toggleMenu}>
              Services
            </Link>
            <Link to="/animations" onClick={toggleMenu}>
              Animations
            </Link>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
