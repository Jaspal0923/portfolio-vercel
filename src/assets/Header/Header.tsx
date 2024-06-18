import "./Header.css";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import gsap from "gsap";
import { Link } from "react-scroll";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  useGSAP(() => {
    if (isNavOpen) {
      gsap.from(".mobile-menu", { x: -800, duration: 0.9 });
    } else {
      gsap.to(".mobile-menu", { x: -50, duration: 0.9 });
    }
  }, [isNavOpen]);
  useEffect(() => {
    const body = document.body;
    if (isNavOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [isNavOpen]);

  return (
    <header className="header">
      <div className="logo">
        <Link to="hero-page" smooth={true} duration={1000}>
          JASPAL <span style={{ color: "red" }}>|</span>
        </Link>
      </div>
      <nav className="desktop">
        <ol>
          <li>
            <Link to="hero-page" smooth={true} duration={1000}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="awards" smooth={true} duration={1000} offset={-250}>
              CERTIFICATES
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={1000} offset={-10}>
              PROJECTS
            </Link>
          </li>
        </ol>
      </nav>
      <button className="menu-button" onClick={toggleNavbar}>
        {isNavOpen ? <FaTimes /> : <FaBars />}
      </button>
      {isNavOpen && <div className="overlay show" onClick={toggleNavbar}></div>}
      {isNavOpen && <MobileMenu toggleNavbar={toggleNavbar} />}
    </header>
  );
};

export default Header;
