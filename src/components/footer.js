import React from "react";
import GH from "./images/GITHUB2.svg";
import LI from "./images/linkedin.svg";
import insta from "./images/instagram.svg";
import fb from "./images/facebook.svg";
import { Link } from "react-scroll";
class Footer extends React.Component {
  render() {
    return (
      <div className="footerMains">
        <div className="footerName">Gaurav Gupta</div>
        <div className="sectionsAccess">
          <div className="footerHome">
          <Link
                  activeClass="active"
                  to="profileMains"
                  smooth={true}
                  offset={-70}
                  duration={200}
                  className="footerHome"
                >
                  Home
                </Link>
          </div>
          <div className="footerAbout">
          <Link
                  activeClass="active"
                  to="about"
                  smooth={true}
                  offset={-70}
                  duration={200}className="footerAbout"
                >
                  About
                </Link>
          </div>
          <div className="footerSkills">
          <Link
                  activeClass="active"
                  to="skillsMains"
                  smooth={true}
                  offset={-70}
                  duration={200}
                  className="footerSkills"
                >
                  Skills
                </Link>
          </div>
          <div className="footerProjects">
          <Link
                  activeClass="active"
                  to="projectsMains"
                  smooth={true}
                  offset={-70}
                  duration={200}
                  className="footerProjects"
                >
                  Projects
                </Link>
          </div>
        </div>
        <div className="footerFollow">
          <div className="footerFollowMe">Feel free to Follow</div>
          <div className="socialIcons">
            <ul className="example-2">
              <li className="icon-content">
                <a
                  data-social="linkedin"
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/gaurav-gupta02/"
                >
                  <div className="filled"></div>
                  <img src={LI} alt="LinkedIn" />
                </a>
                <div className="tooltip">LinkedIn</div>
              </li>
              <li className="icon-content">
                <a data-social="github" aria-label="GitHub" href="https://github.com/G-Gupta02">
                  <div className="filled"></div>
                  <img src={GH} alt="GitHub" />
                </a>
                <div className="tooltip">GitHub</div>
              </li>
              <li className="icon-content">
                <a
                  data-social="instagram"
                  aria-label="Instagram"
                  href="https://www.instagram.com/_gaurav._.gupta_/"
                >
                  <div className="filled"></div>
                  <img src={insta} alt="Instagram" />
                </a>
                <div className="tooltip">Instagram</div>
              </li>
              <li className="icon-content">
                <a data-social="facebook" aria-label="Facebook" href="https://www.facebook.com/gourav.gupta.54943600/">
                  <div className="filled"></div>
                  <img src={fb} alt="Facebook" />
                </a>
                <div className="tooltip">Facebook</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="backToTop">
        <Link
                  activeClass="active"
                  to="profileMains"
                  smooth={true}
                  offset={-70}
                  duration={200}
                  className="backToTop"
                >
                  Back To Top
                </Link>
        </div>
      </div>
    );
  }
}

export default Footer;
