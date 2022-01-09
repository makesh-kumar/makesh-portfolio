import React from "react";
import "./Education.css";
function Education() {
  const educationLogoUrl: string =
    "https://media4.giphy.com/media/VGQh2JdmphZHUBT0Bi/giphy.gif?cid=6c09b9527b96c42a8ea1fc43a839bc10b94e5624e450364c&rid=giphy.gif&ct=s";
  return (
    <div id="education" className="education">
      <div className="education__logo">
        <h3>Education</h3>
        <img width="300px" src={educationLogoUrl} alt="education" />
      </div>
      <div className="education__content">
        <div className="college">
          <h4>🎓 Bachelor Of Engineering (ECE)</h4>
        </div>
        <div className="detail">
          <p>
            Hindustan College of Engineering and Technologies, Coimbatore, TN
          </p>
          <p>Course Duration - 2015-2019</p>
          <p>CGPA - 7.0</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
