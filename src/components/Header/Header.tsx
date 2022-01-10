import React, { useState } from "react";
import "./Header.css";
import { BsList } from "react-icons/bs";

import logo from "../../assets/M-logos_black.png";
function Header() {
  const [isMobileMenu, setMobileMenu] = useState(false);

  const headerMenu = [
    {
      name: "about",
      title: "About",
    },
    {
      name: "education",
      title: "Education",
    },
    {
      name: "skills",
      title: "Skills",
    },
    {
      name: "experience",
      title: "Experience",
    },
  ];
  const scrollSmoothTo = (elementId: string) => {
    elementId !== "home" &&
      setMobileMenu((status) => {
        return !status;
      });
    let element = document.getElementById(elementId);
    element?.scrollIntoView({
      block: "center",
      inline: "center",
      behavior: "smooth",
    });
  };
  return (
    <div className="header">
      <div
        className="header__item"
        onClick={() => {
          scrollSmoothTo("home");
        }}
      >
        <img width="60px" height="60px" src={logo} alt="logo" />
        <p>Makesh Kumar</p>
      </div>

      <div className="desktop__nav">
        {headerMenu.map((menu) => {
          return (
            <div key={menu.name} className="header__item">
              <button
                onClick={() => {
                  scrollSmoothTo(menu.name);
                }}
              >
                {menu.title}
              </button>
            </div>
          );
        })}
      </div>

      <div className="mobile__nav">
        <div
          onClick={(e) => {
            setMobileMenu((status) => {
              // e.stopPropagation();
              return !status;
            });
          }}
        >
          <BsList />
        </div>
      </div>

      <div className="mobile__nav">
        {isMobileMenu && (
          <div>
            {headerMenu.map((menu) => {
              return (
                <div key={menu.name} className="header__item">
                  <button
                    onClick={() => {
                      scrollSmoothTo(menu.name);
                    }}
                  >
                    {menu.title}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
