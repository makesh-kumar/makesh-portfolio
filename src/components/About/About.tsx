import React from "react";
import "./About.css";

function About() {
  const aboutLogoUrl: string =
    "https://miro.medium.com/max/680/1*IRGHmiGsa16stedQvIaZfw.gif";
  return (
    <div id="about" className="about">
      <div className="about__logo">
        <img width="300px" src={aboutLogoUrl} alt="about" />
      </div>
      <div className="about__content">
        <h3>About Me</h3>
        <p>
          👉 I'm an engineer and enthusiastic web developer with 2.8 years of
          experience in the software industry. I have a great passion for
          building responsive and powerful web applications by writing standard
          and clean Javascript code using modern frameworks.
          <br />
          👉 Eager to tackle complex problems and continue to find ways to
          maximize user efficiency.
          <br />
          👉 Passionate about learning and development with a desire to apply
          skills to build web products end to end.
        </p>
      </div>
    </div>
  );
}

export default About;
