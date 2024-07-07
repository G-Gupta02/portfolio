import React from "react";
import portfolioPic from "./images/portfolioPic.png";
import weatherPic from "./images/weatherPic.png";
import weatherLogo from "./images/weatherLogo.png";
import currencyLogo from "./images/currencyLogo.png";
import currencyPic from "./images/currencyPic.png";
import GauravGif from "./images/GAURAV.gif";

import { Link } from "react-scroll";



class Projects extends React.Component {
  render() {
    return (
      <div className="projectsMains">
        <div className="projectsMain1">
          <div className="projectsHeading">
            <div className="projectsHeadingLeft">MY </div>
            <div className="projectsHeadingRght">PROJECTS</div>
          </div>
          <div className="cards1">
            <div className="project1">
              <div class="card">
                <div class="content">
                  <div class="back">
                    <div class="back-content">
                      <div className="projectHeading">Weather App</div>

                      <div className="weatherImage">
                        <img src={weatherLogo} alt="" className="weatherImg" />
                      </div>
                      <div className="tech">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JS</span>
                        <span>React</span>
                      </div>
                      <div className="projectDescription">
                        Web App made using ReactJS which provides Real-time
                        weather information of cities around the world.
                      </div>
                    </div>
                  </div>
                  <div class="front">
                    <div class="img"></div>

                    <div class="front-content">
                      <img src={weatherPic} alt="" className="weatherPic" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project2">
              <div class="card">
                <div class="content">
                  <div class="back">
                    <div class="back-content">
                      <div className="projectHeading">ConvertEase</div>

                      <div className="currencyImage">
                        <img
                          src={currencyLogo}
                          alt=""
                          className="currencyImg"
                        />
                      </div>
                      <div className="tech">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JS</span>
                        <span>React</span>
                      </div>
                      <div className="projectDescription">
                        Web App made using ReactJS which makes the conversion
                        between two currencies of the world in real time.
                      </div>
                    </div>
                  </div>
                  <div class="front">
                    <div class="img"></div>

                    <div class="front-content">
                      <img src={currencyPic} alt="" className="weatherPic" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project3">
              <div class="card">
                <div class="content">
                  <div class="back">
                    <div class="back-content">
                      <div className="projectHeading">Portfolio Website</div>

                      <div className="portfolioImage">
                        <img src={GauravGif} alt="" className="portfolioImg" />
                      </div>
                      <div className="tech">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JS</span>
                        <span>React</span>
                      </div>
                      <div className="projectDescription">
                        My Portfolio Website made using React Framework.
                      </div>
                    </div>
                  </div>
                  <div class="front">
                    <div class="img"></div>

                    <div class="front-content">
                      <img src={portfolioPic} alt="" className="portfolioPic" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="projectLinks1">
            <div className="projectLink">
              <a href="https://g-gupta02.github.io/weather/">
              <button class="animated-button">
                <svg
                  viewBox="0 0 24 24"
                  class="arr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span class="text">Visit Project</span>
                <span class="circlex"></span>
                <svg
                  viewBox="0 0 24 24"
                  class="arr-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </button>
              </a>
            </div>



            <div className="projectLink">
              <a href="https://g-gupta02.github.io/Currency-converter/">
              <button class="animated-button">
                <svg
                  viewBox="0 0 24 24"
                  class="arr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span class="text">Visit Project</span>
                <span class="circlex"></span>
                <svg
                  viewBox="0 0 24 24"
                  class="arr-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </button>
              </a>
            </div>




            <div className="projectLink">
            <Link
                  activeClass="active"
                  to="profileMains"
                  smooth={true}
                  offset={-60}
                  duration={200}
                >
              <button class="animated-button">
                <svg
                  viewBox="0 0 24 24"
                  class="arr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span class="text">Visit Project</span>
                <span class="circlex"></span>
                <svg
                  viewBox="0 0 24 24"
                  class="arr-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="projectsMain2">
          <div className="projectsHeading">
            <div className="projectsHeadingLeft">MY </div>
            <div className="projectsHeadingRght">PROJECTS</div>
          </div>
          <div className="cards2">
            <div className="c2">
              <div className="project1">
                <div class="card">
                  <div class="content">
                    <div class="back">
                      <div class="back-content">
                        <div className="projectHeading">Weather App</div>

                        <div className="weatherImage">
                          <img src={weatherLogo} alt="" />
                        </div>
                        <div className="tech">
                          <span>HTML</span>
                          <span>CSS</span>
                          <span>JS</span>
                          <span>React</span>
                        </div>
                        <div className="projectDescription">
                          Web App made using ReactJS which makes the conversion
                          between two currencies of the world in real time.
                        </div>
                      </div>
                    </div>
                    <div class="front">
                      <div class="img"></div>

                      <div class="front-content">
                        <img src={weatherPic} alt="" className="weatherPic" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projectLink">
                <a href="https://g-gupta02.github.io/weather/">
                  <button class="animated-button">
                    <svg
                      viewBox="0 0 24 24"
                      class="arr-2"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                    <span class="text">Visit Project</span>
                    <span class="circlex"></span>
                    <svg
                      viewBox="0 0 24 24"
                      class="arr-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </button>
                </a>
              </div>

              <div className="project2">
                <div class="card">
                  <div class="content">
                    <div class="back">
                      <div class="back-content">
                        <div className="projectHeading">ConvertEase</div>

                        <div className="weatherImage">
                          <img src={currencyLogo} alt="" />
                        </div>
                        <div className="tech">
                          <span>HTML</span>
                          <span>CSS</span>
                          <span>JS</span>
                          <span>React</span>
                        </div>
                        <div className="projectDescription">
                          Web App made using ReactJS which makes the conversion
                          between two currencies of the world in real time.
                        </div>
                      </div>
                    </div>
                    <div class="front">
                      <div class="img"></div>

                      <div class="front-content">
                        <img src={currencyPic} alt="" className="weatherPic" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="projectLink">
                <a href="https://g-gupta02.github.io/Currency-converter/">
                  <button class="animated-button">
                    <svg
                      viewBox="0 0 24 24"
                      class="arr-2"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                    <span class="text">Visit Project</span>
                    <span class="circlex"></span>
                    <svg
                      viewBox="0 0 24 24"
                      class="arr-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </button>
                </a>
              </div>

              <div className="project3">
                <div class="card">
                  <div class="content">
                    <div class="back">
                      <div class="back-content">
                        <div className="projectHeading">Portfolio Website</div>

                        <div className="portfolioImage">
                          <img src={GauravGif} alt="" />
                        </div>
                        <div className="tech">
                          <span>HTML</span>
                          <span>CSS</span>
                          <span>JS</span>
                          <span>React</span>
                        </div>
                        <div className="projectDescription">
                          My Portfolio Website made using React Framework.
                        </div>
                      </div>
                    </div>
                    <div class="front">
                      <div class="img"></div>

                      <div class="front-content">
                        <img src={portfolioPic} alt="" className="weatherPic" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projectLink">
                <Link
                  activeClass="active"
                  to="profileMains"
                  smooth={true}
                  offset={-60}
                  duration={200}
                >
                  <button class="animated-button">
                    <svg
                      viewBox="0 0 24 24"
                      class="arr-2"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                    <span class="text">Visit Project</span>
                    <span class="circlex"></span>
                    <svg
                      viewBox="0 0 24 24"
                      class="arr-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
