import React from "react";
import "./Footer.css";
import {
  FaRegEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaWhatsapp,
  FaCodepen,
} from "react-icons/fa";
import { BsMedium } from "react-icons/bs";

function Footer() {
  const socialIcons = [
    {
      name: "github",
      component: <FaGithub></FaGithub>,
      link: "https://github.com/makesh-kumar",
      style: { color: "black" },
    },
    {
      name: "linkedin",
      component: <FaLinkedinIn></FaLinkedinIn>,
      link: "https://www.linkedin.com/in/makesh-kumar",
      style: { color: "#0e76a8" },
    },
    {
      name: "medium",
      component: <BsMedium></BsMedium>,
      link: "https://www.linkedin.com/in/makesh-kumar",
      style: { color: "black" },
    },
    {
      name: "email",
      component: <FaRegEnvelope></FaRegEnvelope>,
      link: "mailto:mynameismakesh@gmail.com",
      style: { color: "red" },
    },
    {
      name: "mobile",
      component: <FaPhone></FaPhone>,
      link: "tel:+919095774441",
      style: { color: "green" },
    },
    {
      name: "codepen",
      component: <FaCodepen></FaCodepen>,
      link: "https://codepen.io/makesh-kumar",
      style: { color: "black" },
    },
    {
      name: "whatsapp",
      component: <FaWhatsapp></FaWhatsapp>,
      link: "https://wa.me/9095774441",
      style: { color: "#25D366" },
    },
    {
      name: "twitter",
      component: <FaTwitter></FaTwitter>,
      link: "https://twitter.com/this_is_makesh",
      style: { color: "#00acee" },
    },
    {
      name: "facebook",
      component: <FaFacebookF></FaFacebookF>,
      link: "https://www.facebook.com/makesh.thedon",
      style: { color: " #3b5998" },
    },
  ];
  return (
    <div className="footer">
      <div className="footer__title">Follow me</div>
      <div className="footer__content">
        {socialIcons.map((item) => {
          return (
            <div key={item.name} className="social__icon">
              <a
                target="_blank"
                style={item.style}
                href={item.link}
                rel="noreferrer"
              >
                {item.component}
              </a>
            </div>
          );
        })}
      </div>
      <div className="footer__copyright">Made with ❤️ by Makesh 😎</div>
    </div>
  );
}

export default Footer;
