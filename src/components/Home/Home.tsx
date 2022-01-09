import React from "react";
import "./Home.css";

function Home() {
  return (
    <div id="home" className="home">
      <div className="intro">
        <h1>
          {/* {"<Hello World/>"} */}
          <br /> I am <span className="name">Makesh Kumar</span>
        </h1>
      </div>
      <h2>I am a UI Developer</h2>
      <button>See my Resume</button>
    </div>
  );
}

export default Home;
