import React from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
class Skills extends React.Component {
  render() {
    return (
      <div className="skillsMain">
        <div className="mySkills">
            <p className="left">MY</p>
            <p>SKILLS</p>
        </div>
        <div className="skillStats">
          <div className="skillStatUp">
            <span className="JAVA">
              <div style={{ width: 100, height: 100 }}>
                <CircularProgressbar
                  value={85}
                  text={"85%"}
                  styles={buildStyles({
                    pathColor: `rgb(184, 129, 40)`,
                    textColor: "rgb(184, 129, 40)",
                    trailColor: "white",
                  })}
                />
                <p>JAVA</p>
              </div>
            </span>
            <span className="HTML">
              <div style={{ width: 100, height: 100 }}>
                <CircularProgressbar
                  value={80}
                  text={"80%"}
                  styles={buildStyles({
                    pathColor: `rgb(184, 129, 40)`,
                    textColor: "rgb(184, 129, 40)",
                    trailColor: "white",
                  })}
                  />
                  <p>HTML</p>
              </div>
            </span>
            <span className="CSS">
              <div style={{ width: 100, height: 100 }}>
                <CircularProgressbar
                  value={65}
                  text={"65%"}
                  styles={buildStyles({
                    pathColor: `rgb(184, 129, 40)`,
                    textColor: "rgb(184, 129, 40)",
                    trailColor: "white",
                  })}
                  />
                  <p>CSS</p>
              </div>
            </span>
            <span className="JAVASCRIPT">
              <div style={{ width: 100, height: 100 }}>
                <CircularProgressbar
                  value={60}
                  text={"60%"}
                  styles={buildStyles({
                    pathColor: `rgb(184, 129, 40)`,
                    textColor: "rgb(184, 129, 40)",
                    trailColor: "white",
                  })}

                />
                <p>JavaScript</p>
              </div>
            </span>
          </div>
          <div className="skillStatDown">
          <span className="React">
              <div style={{ width: 100, height: 100 }}>
                <CircularProgressbar
                  value={40}
                  text={"40%"}
                  styles={buildStyles({
                    pathColor: `rgb(184, 129, 40)`,
                    textColor: "rgb(184, 129, 40)",
                    trailColor: "white",
                  })}
                />
                <p>React</p>
              </div>
            </span>
            <span className="C_Cpp">
              <div style={{ width: 100, height: 100 }}>
                <CircularProgressbar
                  value={66}
                  text={"66%"}
                  styles={buildStyles({
                    pathColor: `rgb(184, 129, 40)`,
                    textColor: "rgb(184, 129, 40)",
                    trailColor: "white",
                  })}
                  />
                  <p>C / C++</p>
              </div>
            </span>
            <span className="python">
              <div style={{ width: 100, height: 100 }}>
                <CircularProgressbar
                  value={70}
                  text={"70%"}
                  styles={buildStyles({
                    pathColor: `rgb(184, 129, 40)`,
                    textColor: "rgb(184, 129, 40)",
                    trailColor: "white",
                  })}
                  />
                  <p>Python</p>
              </div>
            </span>
            <span className="Bootstrap">
              <div style={{ width: 100, height: 100 }}>
                <CircularProgressbar
                  value={60}
                  text={"60%"}
                  styles={buildStyles({
                    pathColor: `rgb(184, 129, 40)`,
                    textColor: "rgb(184, 129, 40)",
                    trailColor: "white",
                  })}

                />
                <p>Bootstrap</p>
              </div>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
