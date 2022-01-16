import React from "react";
import "./Projects.css";
import {
  FaRegEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaWhatsapp,
  FaCodepen,
  FaGlobe,
} from "react-icons/fa";
function Projects() {
  const projectDetails = [
    {
      name: "Covid-Tracker",
      description:
        "An application to see all covid related details in all the countries in the world. Users can also sort, filter the data based on different criteria. It is developed using Angular, Angular Material, and consumed (corona.lmao.ninja) API for data",
      imgUrl: "https://cdn.worldvectorlogo.com/logos/logo-43.svg",
      siteUrl: "https://makesh-covid-tracker.netlify.app/",
      gitUrl: "https://github.com/makesh-kumar/covid-tracker",
    },
    {
      name: "News Application",
      description:
        "A small web application to read the news that is provided by different newspapers/news channels in one place. Users can search news by entering keywords and also can filter it based on category and country. It is built on React framework with Material-UI for styling. ",
      imgUrl: "https://strodeledger.files.wordpress.com/2013/09/newspaper.jpg",
      siteUrl: "https://news-app-makesh.netlify.app/",
      gitUrl: "https://github.com/makesh-kumar/online-news-app-in-react",
    },
    {
      name: "To-Do Notes",
      description:
        "It is a web app that helps to track our day-to-day activities. It is helpful in planning our daily schedules. Users can edit, copy or download saved notes. It is developed in Angular by using Angular material and md-bootstrap",
      imgUrl:
        "https://www.marketing91.com/wp-content/uploads/2020/03/Top-10-apps-for-To-do-List.jpg",
      siteUrl: "https://to-do-app-ui-makesh.netlify.app/",
      gitUrl: "https://github.com/makesh-kumar/to-do-application-angular",
    },
    {
      name: "Text to Speech Converter",
      description:
        "Text to Speech Converter is an application that converts text into speech in different voices available in the device. Users can customize the audio by modifying the pitch, rate of speech, and volume, It is developed using Javascript speech synthesis API that is available in browsers.",
      imgUrl:
        "https://www.otranation.com/wp-content/uploads/2020/05/text-to-speech-1.jpg",
      siteUrl: "https://makesh-text-speech-convertor.netlify.app/",
      gitUrl: "https://github.com/makesh-kumar/text-to-speech-convertor",
    },
  ];
  return (
    <div className="projects">
      <div className="projects__logo">
        <h3>Projects</h3>
        <img
          width="300"
          //   height="300"
          src="https://images.prismic.io/smarttask/d02c7f4a-46b2-48cb-a57d-e3a5d9fdfb83_Project+Management+Analytics.gif?auto=compress,format"
          alt=""
        />
      </div>
      <div className="projects__content">
        {projectDetails.map((project) => {
          return (
            <div className="content__box" key={project.name}>
              <img width="120" height="120" src={project.imgUrl} alt="" />
              <div className="content__controls">
                <h5>{project.name}</h5>
                <div>
                  <a href={project.gitUrl} target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
                  <a href={project.siteUrl} target="_blank" rel="noreferrer">
                    <FaGlobe />
                  </a>
                </div>
              </div>
              <div className="content__description">{project.description}</div>
            </div>
          );
        })}
      </div>
      <div className="projects__more">
        <a
          href="https://github.com/makesh-kumar/"
          target="_blank"
          rel="noreferrer"
        >
          See More Projects
        </a>
      </div>
    </div>
  );
}

export default Projects;
