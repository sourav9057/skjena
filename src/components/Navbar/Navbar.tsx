import { useState, useEffect } from "react";
import "./Navbar.css";

// Social icons
import LinkedIn from "../../assets/logos/linkedin.png";
import GitHub from "../../assets/logos/github.png";
import Instagram from "../../assets/logos/instagram.png";
import Twitter from "../../assets/logos/twitter.png";
import Gmail from "../../assets/logos/gmail.png";

// React Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { BsInfoSquareFill, BsSuitcaseLgFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { MdContactMail, MdCastForEducation } from "react-icons/md";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    "home",
    "about",
    "education",
    "experience",
    "skills",
    "projects",
    "contact",
  ];

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar-wrapper">
      <div className="navbar-topbar">

        {/* 🔥 Name Click → Home */}
        <a
          href="#home"
          onClick={handleLinkClick}
          className="navbar-name"
        >
          <span>S. </span>
          <span>K. </span>
          <span>Jena</span>
        </a>

        <ul className="navbar-socials">
          <li>
            <a
              href="https://www.linkedin.com/in/sk-jena"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sourav9057"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GitHub} alt="GitHub" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/_shadow_2711/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/Sourav9057"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Twitter} alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>
              <img src={Gmail} alt="Gmail" />
            </a>
          </li>
        </ul>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      <div className={`navbar-menubar ${menuOpen ? "open" : ""}`}>
        <ul className="navbar-links">
          <li>
            <a
              href="#home"
              onClick={handleLinkClick}
              className={`home-link ${
                activeSection === "home" ? "active" : ""
              }`}
            >
              <FaHome className="nav-icon home-icon" /> Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              onClick={handleLinkClick}
              className={`about-link ${
                activeSection === "about" ? "active" : ""
              }`}
            >
              <BsInfoSquareFill className="nav-icon about-icon" /> About
            </a>
          </li>

          <li>
            <a
              href="#education"
              onClick={handleLinkClick}
              className={`education-link ${
                activeSection === "education" ? "active" : ""
              }`}
            >
              <MdCastForEducation className="nav-icon education-icon" /> Education
            </a>
          </li>

          <li>
            <a
              href="#experience"
              onClick={handleLinkClick}
              className={`experience-link ${
                activeSection === "experience" ? "active" : ""
              }`}
            >
              <BsSuitcaseLgFill className="nav-icon experience-icon" /> Experience
            </a>
          </li>

          <li>
            <a
              href="#skills"
              onClick={handleLinkClick}
              className={`skills-link ${
                activeSection === "skills" ? "active" : ""
              }`}
            >
              <IoMdSettings className="nav-icon skills-icon" /> Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              onClick={handleLinkClick}
              className={`projects-link ${
                activeSection === "projects" ? "active" : ""
              }`}
            >
              <GrProjects className="nav-icon projects-icon" /> Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={handleLinkClick}
              className={`contact-link ${
                activeSection === "contact" ? "active" : ""
              }`}
            >
              <MdContactMail className="nav-icon contact-icon" /> Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;