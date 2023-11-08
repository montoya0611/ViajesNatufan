import { Link } from "gatsby";
import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="container-navbar">
      <img className="icono" src="" alt="fotoinicio" />
      <div className="menu">
      <Link to="#" className="titulo-navbar">
        Inicio
      </Link>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={isDropdownOpen ? "dropdown active" : "dropdown"}
      >
        <Link to="#" className="titulo-navbar">
          Destinos
        </Link>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <Link to="/AventurasMar" className="titulo-navbar-destinos">
              En el mar
            </Link>
            <Link to="/MaravillasMundo" className="titulo-navbar-destinos">
              Lugares Inolvidables
            </Link>
          </div>
        )}
      </div>
      <Link to="/Nosotros" className="titulo-navbar">
        Nosotros
      </Link>
      <Link to="/Nosotros" className="titulo-navbar">
        Galeria
      </Link>
      </div>      
    </nav>
  );
}

export default Navbar;
