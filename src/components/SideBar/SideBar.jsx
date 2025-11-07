import { useState } from "react";
import "./styles.css";
import { Link } from "react-scroll";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { id: "gaston-section", label: "GASTON", icon: "bi-person-circle" },
    { id: "sobre-mi-section", label: "SOBRE MI", icon: "bi-info-circle" },
    { id: "portafolio", label: "PORTAFOLIO", icon: "bi-briefcase" },
    { id: "educacion", label: "EDUCACION", icon: "bi-mortarboard" },
    { id: "skills", label: "SKILLS", icon: "bi-lightning-charge" },
    { id: "contacto", label: "CONTACTO", icon: "bi-telephone" },
  ];

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
          {menuItems.map((item, index) => (
            <li
              key={item.id}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="fade-in-item"
            >
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                <i className={`bi ${item.icon}`}></i>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default SideBar;
