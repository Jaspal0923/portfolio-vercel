import "./Header.css";
import { Link } from "react-scroll";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MobileMenu = ({ toggleNavbar }: { toggleNavbar: any }) => {
  return (
    <div className="mobile-menu">
      <div className="uppHead">
        <div className="logo">
          <Link
            to="hero-page"
            smooth={true}
            duration={500}
            onClick={toggleNavbar}
          >
            JASPAL <span style={{ color: "red" }}>|</span>
          </Link>
        </div>
        <button className="close-button" onClick={toggleNavbar}>
          ×
        </button>
      </div>

      <ul>
        <li>
          <Link
            to="hero-page"
            smooth={true}
            duration={1000}
            onClick={toggleNavbar}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="awards"
            smooth={true}
            duration={1000}
            offset={-150}
            onClick={toggleNavbar}
          >
            CERTIFICATES
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            offset={-80}
            onClick={toggleNavbar}
          >
            PROJECTS
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
