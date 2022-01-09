import React, { useState } from "react";
import Skill from "../../assets/svg/skill-svgrepo-com.svg";
import "./Skills.css";

interface IPrimarySkills {
  name: string;
  imageUrl: string;
  alt: string;
}
function Skills() {
  const skillGifUrl: string = "https://i.gifer.com/PJFG.gif";
  const primarySkills: IPrimarySkills[] = [
    {
      name: "javascript",
      imageUrl: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
      alt: "javasscript",
    },
    {
      name: "typescript",
      imageUrl: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
      alt: "typescript",
    },
    {
      name: "html",
      imageUrl: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
      alt: "javas",
    },
    {
      name: "css",
      imageUrl: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
      alt: "javas",
    },
    {
      name: "bootstrap",
      imageUrl: "https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg",
      alt: "bootstrap",
    },
    {
      name: "scss",
      imageUrl: "https://cdn.worldvectorlogo.com/logos/sass-1.svg",
      alt: "scss",
    },
    {
      name: "less",
      imageUrl: "https://cdn.worldvectorlogo.com/logos/less.svg",
      alt: "less",
    },
    {
      name: "angular",
      imageUrl: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg",
      alt: "angular",
    },
    {
      name: "react",
      imageUrl: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
      alt: "react",
    },
    {
      name: "rxjs",
      imageUrl: "https://cdn.worldvectorlogo.com/logos/ngrx.svg",
      alt: "rxjs",
    },
    {
      name: "redux",
      imageUrl: "https://cdn.worldvectorlogo.com/logos/redux.svg",
      alt: "redux",
    },
    {
      name: "nodejs",
      imageUrl: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
      alt: "nodejs",
    },
    {
      name: "jasmine",
      imageUrl: "https://cdn.worldvectorlogo.com/logos/jasmine-2.svg",
      alt: "jasmine",
    },
    {
      name: "karma",
      imageUrl: "https://cdn.worldvectorlogo.com/logos/karma.svg",
      alt: "karma",
    },
    {
      name: "jest",
      imageUrl: "https://cdn.worldvectorlogo.com/logos/jest-2.svg",
      alt: "jest",
    },
    {
      name: "git",
      imageUrl: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
      alt: "git",
    },
    {
      name: "bitbucket",
      imageUrl: "https://cdn.worldvectorlogo.com/logos/bitbucket-icon.svg",
      alt: "bitbucket",
    },
    {
      name: "vscode",
      imageUrl:
        "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg",
      alt: "vscode",
    },
  ];
  return (
    <div id="skills" className="skills">
      <div className="skills__icon">
        <h4>Skills</h4>
        <img alt="skills" width="300px" src={skillGifUrl} />
      </div>
      <div className="skills__list">
        {primarySkills.map((skill) => {
          return (
            <div key={skill.name} className="list__container">
              <img title={skill.name} src={skill.imageUrl} alt={skill.alt} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
