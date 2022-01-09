import React from "react";
import "./Experience.css";
function Experience() {
  const experienceLogoUrl: string =
    "https://media2.giphy.com/media/3o7qE1YN7aBOFPRw8E/200.webp?cid=ecf05e47c2pho853rkd9yhkkmm629z8y54anchj5i5rthmxw&rid=200.webp&ct=g";
  return (
    <div id="experience" className="experience">
      <div className="experience__logo">
        <h3>Work Experience</h3>
        <img src={experienceLogoUrl} alt="" />
      </div>
      <div className="experience__content">
        <div className="company__name">
          <h4>
            Wipro Technologies <i>(Senior Software Engineer)</i>
          </h4>
        </div>
        <div className="company_exp">
          <span>(June 2019 - Present)</span>
        </div>
        <div className="company__details">
          <p>
            🖥️ Worked on product called <i> Cloud Email Security(CESv2)</i> for
            customer CISCO Systems along with CISCO Engineers
          </p>
          <br />
          💡Involved in requirement analysis with UX Designers and Architects
          for new feature implementation and prepared LLD and HLD for
          documentation purposes. <br />
          💡 Developed responsive screens in Angular framework similar to UX
          design wireframes provided and by following w3c standards. <br />
          💡Tested all the developed screens by writing unit tests and
          maintained code coverage above 90%.
          <br />
          💡 Refactored old unit test cases using ng-bullet to increase the
          execution speed of tests during build. <br />
          💡Implemented many re-usable UI components and business logic to
          increase the productivity of the team. <br />
          💡 Reduced high severity defects count to less than 10% during every
          release and fixed 80% of UI defects by forming a special team in the
          final phase of the development
        </div>
      </div>
    </div>
  );
}

export default Experience;
