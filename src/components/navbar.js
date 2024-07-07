import React from "react";
import { Link } from "react-scroll";
import "./mediaqueries.css";

function toggleMenu() {
  const menu = document.querySelector(".menuLinks");
  const icon = document.querySelector(".hamburgerIcon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <div className="name">
            <div className="resume">
              <Link
                activeClass="active"
                to="profileMains"
                smooth={true}
                offset={-60}
                duration={200}
              >
                Gaurav Gupta
              </Link>
            </div>
          </div>

          <div className="otherNav">
            <div className="About" id="About">
              <Link
                activeClass="active"
                to="about"
                smooth={true}
                offset={-70}
                duration={200}
              >
                About
              </Link>
            </div>
            <div className="skills" id="skills">
              <Link
                activeClass="active"
                to="skillsMain"
                smooth={true}
                offset={-70}
                duration={200}
              >
                Skills
              </Link>
            </div>
            <div className="Projects" id="Projects">
            <Link
                activeClass="active"
                to="projectsMains"
                smooth={true}
                offset={-60}
                duration={200}
              >
                Projects
              </Link>
            </div>
            <div className="Contacts" id="Contacts">
              Contact
            </div>
          </div>
        </nav>
        <nav className="hamburgerId">
          <div className="name">
          <div className="resume">
              <Link
                activeClass="active"
                to="profileMains"
                smooth={true}
                offset={-60}
                duration={200}
              >
                Gaurav Gupta
              </Link>
            </div>
          </div>
          <div className="hamburgerMenu">
            <div className="hamburgerIcon" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="menuLinks">
              <li onClick={toggleMenu} id="About">
                <Link
                  activeClass="active"
                  to="about"
                  smooth={true}
                  offset={-70}
                  duration={200}
                >
                  About
                </Link>
              </li>
              <li onClick={toggleMenu} id="Experience">
                <Link
                  activeClass="active"
                  to="skillsMain"
                  smooth={true}
                  offset={-70}
                  duration={200}
                >
                  Skills
                </Link>
              </li>
              <li onClick={toggleMenu} id="Projects">
              <Link
                activeClass="active"
                to="projectsMains"
                smooth={true}
                offset={-60}
                duration={200}
              >
                Projects
              </Link>
              </li>
              <li onClick={toggleMenu} id="Contacts">
                Contact
              </li>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
