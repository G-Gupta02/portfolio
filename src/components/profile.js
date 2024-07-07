import React from "react";
import pic from "./images/pic.jpg";

import "./mediaqueries.css";

const PdfLink = () => {
  const pdfUrl =
    "https://drive.google.com/file/d/16whPlKjUyXy2S5zDNBuaCr03Z7m-Jj3_/view?usp=sharing";

  const viewPdf = () => {
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <div className="cv" onClick={viewPdf}>
        Download CV
      </div>
    </div>
  );
};

class Profile extends React.Component {
  render() {
    return (
      <>
        <div className="profileMains">
          <div className="profileMain1">
            <div className="pic">
              <img src={pic} alt="nothing" className="image" />
            </div>
            <div className="description">
              <div className="one">Hi, I'm</div>
              <div className="two">Gaurav</div>
              <div className="three">FrontEnd Engineer</div>
              <div className="four">
                <PdfLink />
              </div>
              
            </div>
          </div>

          <div className="profileMain2">
            <div className="pic2">
              <img src={pic} alt="nothing" className="image" />
            </div>
            <div className="description2">
              <div className="deInner">
                <p className="one2">Hi, I'm</p>
                <p className="two2">Gaurav</p>
                <p className="three2">FrontEnd Engineer</p>
                <div className="four2">
                  <PdfLink />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
