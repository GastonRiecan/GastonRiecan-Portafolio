/* import "./styles.css";
import { Link } from "react-scroll";
const SideBar = () => {
  return (
    <>
      <aside className="sidebar-container">
      <img
        src="https://github.com/GastonRiecan/images-repository/raw/main/images/profile-pictures/Gaston.jpg"
        alt="face-image"
        className="face-pic"
      />
        <ul className="sidebar-items">
          <li>
            <Link to="gaston-section" smooth={true} duration={500}>
              GASTON
            </Link>
          </li>
          <hr />
          <li>
            <Link to="sobre-mi-section" smooth={true} duration={500}>
              SOBRE MI
            </Link>
          </li>
          <hr />
          <li>
            <Link to="portafolio" smooth={true} duration={500}>
              PORTAFOLIO
            </Link>
          </li>
          <hr />
          <li>
            <Link to="educacion" smooth={true} duration={500}>
              EDUCACION
            </Link>
          </li>
          <hr />
          <li>
            <Link to="skills" smooth={true} duration={500}>
              SKILLS
            </Link>
          </li>
          <hr />
          <li>
            <Link to="contacto" smooth={true} duration={500}>
              CONTACTO
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default SideBar;
 */

import { useState } from "react";
import "./styles.css";
import { Link } from "react-scroll";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <aside className={`sidebar-container ${isOpen ? "open" : ""}`}>
        <img
          src="https://github.com/GastonRiecan/images-repository/raw/main/images/profile-pictures/Gaston.jpg"
          alt="face-image"
          className="face-pic"
        />
        <ul className="sidebar-items">
          <li>
            <Link to="gaston-section" smooth={true} duration={500} onClick={toggleMenu}>
              GASTON
            </Link>
          </li>
          <hr />
          <li>
            <Link to="sobre-mi-section" smooth={true} duration={500} onClick={toggleMenu}>
              SOBRE MI
            </Link>
          </li>
          <hr />
          <li>
            <Link to="portafolio" smooth={true} duration={500} onClick={toggleMenu}>
              PORTAFOLIO
            </Link>
          </li>
          <hr />
          <li>
            <Link to="educacion" smooth={true} duration={500} onClick={toggleMenu}>
              EDUCACION
            </Link>
          </li>
          <hr />
          <li>
            <Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>
              SKILLS
            </Link>
          </li>
          <hr />
          <li>
            <Link to="contacto" smooth={true} duration={500} onClick={toggleMenu}>
              CONTACTO
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default SideBar;
