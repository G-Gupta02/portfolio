import React from "react";
import "./mediaqueries.css";

import java from "./images/java.svg";
import html from "./images/html.svg";
import JS from "./images/JS.svg";
import css from "./images/css.svg";
import react from "./images/react.svg";
import c from "./images/c.svg";
import python from "./images/python.svg";
import github from "./images/github.svg";
import cpp from "./images/cpp.svg";
import bootstrap from "./images/bootstrap.svg";
import fiftyDayBadge from "./images/fiftyBadge.png";
import juneBadge from "./images/juneBadge.png";
import LeetcodeStats from "./leetcodeStats.js";
import CodechefStats from "./codechefStats.js";
class About extends React.Component {
  render() {
    return (
      <>
        <div className="about">
          <div className="aboutMain1">
            <div className="aboutMe">
              <div className="aboutMeLeft">ABOUT </div>
              <div className="aboutMeRight">ME</div>
            </div>
            <div className="personalInfo">
              <div className="info">
                <div className="heading">PERSONAL INFO</div>
                <div className="down">
                  Hello! I'm Gaurav Gupta, a dedicated computer science student
                  at the Indian Institute of Engineering Science and Technology,
                  Shibpur. With six years of experience in Java as my primary
                  programming language, I also have a solid grasp of Python. My
                  front-end skills include HTML, CSS, JavaScript, and React, and
                  I'm currently expanding my knowledge in backend technologies,
                  particularly the MERN stack. I have a passion for creating
                  practical applications, evident in projects like a weather
                  updating website and a currency converter app, both leveraging
                  public APIs.
                </div>
              </div>

              <div className="boxes">
                <div className="up">
                  <span className="languages">
                  <div className="techStack">My Tech Stack</div>
                    <div className="one">
                      <img src={java} alt="" />
                      <img src={c} alt="" />
                      <img src={cpp} alt="" />
                      <img src={python} alt="" />
                      <img src={github} alt="" />
                    </div>
                    <div className="two">
                      <img src={html} alt="" />
                      <img src={css} alt="" />
                      <img src={JS} alt="" />
                      <img src={bootstrap} alt="" />
                      <img src={react} alt="" />
                    </div>
                  </span>
                </div>
                <div className="down">
                  <span className="leetcode">
                    <div className="stats">Leetcode Stats</div>
                    <LeetcodeStats/>
                    <div className="badges">
                      Badges: 
                      <img src={fiftyDayBadge} alt="" />
                      <img src={juneBadge} alt="" />
                    </div>
                    
                    
                  </span>
                  <span className="codechef">
                    <div className="stats">CodeChef Stats</div>
                    <CodechefStats/>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="aboutMain2">
            <div className="aboutMe">
              <div className="aboutMeLeft">ABOUT </div>
              <div className="aboutMeRight">ME</div>
            </div>
            <div className="personalInfo2">
                <div className="heading2">PERSONAL INFO</div>
              <div className="info2">
                <div className="down2">
                  <p>Hello! I'm Gaurav Gupta, a dedicated computer science student
                  at the Indian Institute of Engineering Science and Technology,
                  Shibpur. With six years of experience in Java as my primary
                  programming language, I also have a solid grasp of Python. My
                  front-end skills include HTML, CSS, JavaScript, and React, and
                  I'm currently expanding my knowledge in backend technologies,
                  particularly the MERN stack. I have a passion for creating
                  practical applications, evident in projects like a weather
                  updating website and a currency converter app, both leveraging
                  public APIs</p>
                </div>
              </div>

              <div className="boxes">
                <div className="up2">
                  <span className="languages">
                    <div className="techStack">My Tech Stack</div>
                    <div className="one">
                      <img src={java} alt="" />
                      <img src={c} alt="" />
                      <img src={cpp} alt="" />
                      <img src={python} alt="" />
                      <img src={github} alt="" />
                    </div>
                    <div className="two">
                      <img src={html} alt="" />
                      <img src={css} alt="" />
                      <img src={JS} alt="" />
                      <img src={bootstrap} alt="" />
                      <img src={react} alt="" />
                    </div>
                  </span>
                </div>
                <div className="down2">
                  <span className="leetcode">
                    <div className="stats">Leetcode Stats</div>
                    <LeetcodeStats/>
                    <div className="badges">
                      Badges: 
                      <img src={fiftyDayBadge} alt="" />
                      <img src={juneBadge} alt="" />
                    </div>
                    
                  </span>
                  <span className="codechef">
                    <div className="stats">CodeChef Stats</div>
                    <CodechefStats/>
                    
                    
                    
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
